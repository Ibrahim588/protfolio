/**
 * Websites Showcase - Interactive Controller
 * Real-time search, category filtering, tech pills, modal previews, and smooth UI animations
 */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('web-search-input');
    const searchClear = document.getElementById('web-search-clear');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const techPills = document.querySelectorAll('.tech-pill-btn');
    const webCards = document.querySelectorAll('.web-card');
    const resultsCountEl = document.getElementById('web-results-count');
    const emptyStateEl = document.getElementById('web-empty-state');
    const resetFiltersBtn = document.getElementById('web-reset-filters');
    
    // Quick View Modal elements
    const modalEl = document.getElementById('web-quick-modal');
    const modalCloseBtn = document.getElementById('web-modal-close');
    const modalImg = document.getElementById('web-modal-img');
    const modalTitle = document.getElementById('web-modal-title');
    const modalCategory = document.getElementById('web-modal-category');
    const modalDesc = document.getElementById('web-modal-desc');
    const modalTech = document.getElementById('web-modal-tech');
    const modalPrimaryLink = document.getElementById('web-modal-primary-link');
    const modalSecondaryLink = document.getElementById('web-modal-secondary-link');

    let currentFilter = 'all';
    let currentTechFilter = 'all';
    let currentSearchTerm = '';

    // Initialize Card Counters on Filter Buttons
    function updateFilterCounts() {
        const counts = { all: webCards.length, apps: 0, landing: 0, ecommerce: 0, business: 0 };
        webCards.forEach(card => {
            const categories = (card.getAttribute('data-category') || '').split(' ');
            categories.forEach(cat => {
                if (counts[cat] !== undefined) counts[cat]++;
            });
        });

        filterBtns.forEach(btn => {
            const filterKey = btn.getAttribute('data-filter');
            const countEl = btn.querySelector('.filter-count');
            if (countEl && counts[filterKey] !== undefined) {
                countEl.textContent = counts[filterKey];
            }
        });
    }
    updateFilterCounts();

    // Core Filtering Engine
    function filterCards() {
        let visibleCount = 0;
        const normalizedSearch = currentSearchTerm.toLowerCase().trim();

        webCards.forEach(card => {
            const categories = (card.getAttribute('data-category') || '').split(' ');
            const cardTitle = (card.querySelector('.web-card-title')?.textContent || '').toLowerCase();
            const cardDesc = (card.querySelector('.web-card-desc')?.textContent || '').toLowerCase();
            const techBadges = Array.from(card.querySelectorAll('.web-tech-badge')).map(b => b.textContent.toLowerCase());
            
            // Category Match
            const matchesCategory = currentFilter === 'all' || categories.includes(currentFilter);

            // Tech Pill Match
            const matchesTech = currentTechFilter === 'all' || techBadges.some(t => t.includes(currentTechFilter.toLowerCase()));

            // Search Term Match
            const matchesSearch = !normalizedSearch ||
                cardTitle.includes(normalizedSearch) ||
                cardDesc.includes(normalizedSearch) ||
                techBadges.some(t => t.includes(normalizedSearch));

            if (matchesCategory && matchesTech && matchesSearch) {
                card.classList.remove('web-card-hidden');
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                visibleCount++;
            } else {
                card.classList.add('web-card-hidden');
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });

        // Update Results Count Indicator
        if (resultsCountEl) {
            resultsCountEl.textContent = visibleCount;
        }

        // Toggle Empty State
        if (emptyStateEl) {
            if (visibleCount === 0) {
                emptyStateEl.classList.add('active');
            } else {
                emptyStateEl.classList.remove('active');
            }
        }
    }

    // Explicitly run initial filtering to guarantee all cards are rendered immediately
    filterCards();

    // Category Tabs Events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            filterCards();
        });
    });

    // Tech Pills Events
    techPills.forEach(pill => {
        pill.addEventListener('click', () => {
            if (pill.classList.contains('active')) {
                pill.classList.remove('active');
                currentTechFilter = 'all';
            } else {
                techPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentTechFilter = pill.getAttribute('data-tech') || 'all';
            }
            filterCards();
        });
    });

    // Search Input Events
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            if (searchClear) {
                searchClear.style.display = currentSearchTerm ? 'block' : 'none';
            }
            filterCards();
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                currentSearchTerm = '';
                searchClear.style.display = 'none';
                searchInput.focus();
                filterCards();
            }
        });
    }

    // Reset Filters Button
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            currentSearchTerm = '';
            if (searchClear) searchClear.style.display = 'none';
            
            currentFilter = 'all';
            filterBtns.forEach(b => b.classList.remove('active'));
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allBtn) allBtn.classList.add('active');

            currentTechFilter = 'all';
            techPills.forEach(p => p.classList.remove('active'));

            filterCards();
        });
    }

    // Modal Quick View Functionality
    function openModalWithCard(card) {
        if (!modalEl) return;

        const title = card.querySelector('.web-card-title')?.textContent || '';
        const category = card.querySelector('.web-card-category')?.textContent || '';
        const desc = card.querySelector('.web-card-desc')?.textContent || '';
        const img = card.querySelector('.web-card-preview img');
        const imgSrc = img ? img.getAttribute('src') : '';
        const imgAlt = img ? img.getAttribute('alt') : title;
        const techBadges = Array.from(card.querySelectorAll('.web-tech-badge')).map(b => b.cloneNode(true));
        
        const primaryBtn = card.querySelector('.web-card-actions .btn-primary');
        const secondaryBtn = card.querySelector('.web-card-actions .btn-outline');

        if (modalTitle) modalTitle.textContent = title;
        if (modalCategory) modalCategory.textContent = category;
        if (modalDesc) modalDesc.textContent = desc;

        if (modalImg) {
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
        }

        if (modalTech) {
            modalTech.innerHTML = '';
            techBadges.forEach(badge => modalTech.appendChild(badge));
        }

        if (modalPrimaryLink && primaryBtn) {
            modalPrimaryLink.href = primaryBtn.getAttribute('href') || '#';
            modalPrimaryLink.innerHTML = primaryBtn.innerHTML;
            modalPrimaryLink.target = primaryBtn.getAttribute('target') || '_self';
        }

        if (modalSecondaryLink && secondaryBtn) {
            modalSecondaryLink.href = secondaryBtn.getAttribute('href') || '#';
            modalSecondaryLink.innerHTML = secondaryBtn.innerHTML;
            modalSecondaryLink.target = secondaryBtn.getAttribute('target') || '_self';
            modalSecondaryLink.style.display = 'inline-flex';
        } else if (modalSecondaryLink) {
            modalSecondaryLink.style.display = 'none';
        }

        modalEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (modalEl) {
            modalEl.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Attach Click Events to Previews for Quick Modal
    webCards.forEach(card => {
        const previewEl = card.querySelector('.web-card-preview');
        if (previewEl) {
            previewEl.addEventListener('click', (e) => {
                // If user clicks directly on any nested link, allow navigation
                if (e.target.closest('a')) return;
                openModalWithCard(card);
            });
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalEl) {
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

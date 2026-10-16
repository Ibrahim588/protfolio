/**
 * FCP Attendance Landing Page JavaScript
 * Handles interactivity, theme synchronization, tabs, FAQ accordion, modals, and smooth animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Theme Synchronization (Dark/Light mode)
    // -------------------------------------------------------------
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('fcp-theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        if (themeIcon) {
            if (theme === 'light') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }

    // -------------------------------------------------------------
    // 2. Mobile Menu Navigation
    // -------------------------------------------------------------
    const mobileToggle = document.getElementById('fcp-mobile-toggle');
    const navMenu = document.getElementById('fcp-nav-menu');
    const navLinks = document.querySelectorAll('.fcp-nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpened = navMenu.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = isOpened ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // -------------------------------------------------------------
    // 3. Employee Experience Tabs (Screen Showcase)
    // -------------------------------------------------------------
    const tabButtons = document.querySelectorAll('.fcp-tab-btn');
    const expTitle = document.getElementById('fcp-exp-title');
    const expDesc = document.getElementById('fcp-exp-desc');
    const expPoints = document.getElementById('fcp-exp-points');
    const expImage = document.getElementById('fcp-exp-image');

    const screenData = {
        dashboard: {
            title: "لوحة تحكم الموظف الذكية",
            desc: "واجهة مركزية أنيقة تمنح الموظف نظرة فورية وشاملة على حالة دوامه اليومي، ساعات العمل المتبقية، والخدمات الذاتية السريعة.",
            image: "img/fcp/fcp-employee-dashboard.png",
            points: [
                "عرض فوري لوردية اليوم ومواعيد الحضور والانصراف",
                "أزرار تفاعلية لتسجيل الحضور والانصراف بضغطة زر",
                "عداد حي لساعات الدوام المطلوبة، الفعلية، وفارق الساعات",
                "الوصول السريع للخدمات الذاتية وسجل الحركات الأخير"
            ]
        },
        attendance: {
            title: "تسجيل الحضور والورديات بالتحقق الجغرافي",
            desc: "آلية تسجيل دقيقة تعتمد على إحداثيات GPS ونطاقات العمل المعتمدة للجمعية لضمان التواجد الفعلي ومنع التسجيل غير المصرح به.",
            image: "img/fcp/fcp-employee-top.png",
            points: [
                "تحقق ذكي من النطاق الجغرافي (Geofencing)",
                "حساب فترات السماح والتأخير آلياً دون تدخل بشري",
                "دعم الورديات الصباحية والمسائية وورديات العطلات",
                "مؤشر لوني لحالة الحضور (منضبط، متأخر، حضور مبكر)"
            ]
        },
        profile: {
            title: "الملف الوظيفي وربط الأجهزة المعتمدة",
            desc: "صفحة متكاملة تعرض كافة بيانات الموظف الرسمية، معادلة احتساب الساعات والمشاريع النشطة، وحالة توثيق الجهاز المعتمد.",
            image: "img/fcp/fcp-profile.png",
            points: [
                "الرقم الوظيفي والمسمى والبريد والهاتف المعتمد",
                "معادلة ساعات الدوام واحتساب المشاريع الميدانية",
                "حماية الحساب بربطه بجهاز محدد (Device Binding)",
                "منع تسجيل الدخول أو التلاعب من أجهزة غير مسجلة"
            ]
        },
        services: {
            title: "الخدمات الذاتية: إجازات، مأموريات، وسجلات",
            desc: "منظومة إلكترونية تمكّن الكادر من تقديم طلبات الإجازات، تسجيل مأموريات المشاريع الميدانية، ومراجعة سجلات الحضور السابقة.",
            image: "img/fcp/fcp-services.png",
            points: [
                "تقديم ومتابعة طلبات الإجازات والأذونات الرسمية",
                "توثيق مأموريات العمل الميداني وربطها بنطاق المهمة",
                "أرشيف كامل لسجل الحضور والانصراف مع تفاصيل الساعات",
                "إشعارات بحالة قبول أو اعتماد الطلبات من قبل الإدارة"
            ]
        }
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tabKey = btn.getAttribute('data-tab');
            const data = screenData[tabKey];

            if (data && expTitle && expDesc && expPoints && expImage) {
                // Smooth transition
                expImage.style.opacity = '0';
                setTimeout(() => {
                    expTitle.textContent = data.title;
                    expDesc.textContent = data.desc;
                    expImage.src = data.image;
                    expImage.alt = data.title;

                    // Rebuild points
                    expPoints.innerHTML = '';
                    data.points.forEach(pt => {
                        const div = document.createElement('div');
                        div.className = 'fcp-exp-check-item';
                        div.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${pt}</span>`;
                        expPoints.appendChild(div);
                    });

                    expImage.style.opacity = '1';
                }, 180);
            }
        });
    });

    // -------------------------------------------------------------
    // 4. Accessible FAQ Accordion
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.fcp-faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.fcp-faq-trigger');
        const content = item.querySelector('.fcp-faq-content');

        if (trigger && content) {
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close other items
                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains('active')) {
                        other.classList.remove('active');
                        const otherContent = other.querySelector('.fcp-faq-content');
                        const otherTrigger = other.querySelector('.fcp-faq-trigger');
                        if (otherContent) otherContent.style.maxHeight = null;
                        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current
                if (isActive) {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                    trigger.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });

            // Keyboard accessibility (Enter / Space)
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    trigger.click();
                }
            });
        }
    });

    // -------------------------------------------------------------
    // 5. Modals Management (Download / Guide / Support)
    // -------------------------------------------------------------
    const modalBackdrops = document.querySelectorAll('.fcp-modal-backdrop');
    const modalCloseBtns = document.querySelectorAll('.fcp-modal-close');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        modalBackdrops.forEach(m => m.classList.remove('active'));
        document.body.style.overflow = '';
    }

    modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));

    modalBackdrops.forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Trigger buttons for modals
    document.querySelectorAll('[data-open-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModalId = trigger.getAttribute('data-open-modal');
            openModal(targetModalId);
        });
    });

    // Copy Download Link helper
    const copyLinkBtn = document.getElementById('fcp-copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            const linkInput = document.getElementById('fcp-share-url');
            if (linkInput) {
                linkInput.select();
                navigator.clipboard.writeText(linkInput.value).then(() => {
                    const originalText = copyLinkBtn.innerHTML;
                    copyLinkBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ!';
                    setTimeout(() => copyLinkBtn.innerHTML = originalText, 2500);
                });
            }
        });
    }

    // -------------------------------------------------------------
    // 5.1 Admin Dashboard Screen Switcher (Charts, Metrics, Sidebar)
    // -------------------------------------------------------------
    const btnAdminCharts = document.getElementById('btn-admin-view-charts');
    const btnAdminMetrics = document.getElementById('btn-admin-view-metrics');
    const btnAdminSidebar = document.getElementById('btn-admin-view-sidebar');
    const adminScreenImg = document.getElementById('fcp-admin-screen-img');
    const adminHeaderTitle = document.getElementById('fcp-admin-header-title');

    const adminScreens = [
        { btn: btnAdminCharts, img: 'img/fcp/fcp-admin-indicators.png', title: 'لوحة المؤشرات والرسوم البيانية | fcp-attendance-app.web.app' },
        { btn: btnAdminMetrics, img: 'img/fcp/fcp-admin-metrics.png', title: 'مصفوفة الحالات والمؤشرات الإحصائية | fcp-attendance-app.web.app' },
        { btn: btnAdminSidebar, img: 'img/fcp/fcp-admin-sidebar.png', title: 'هيكلية إدارة الموارد البشرية والأقسام | fcp-attendance-app.web.app' }
    ];

    adminScreens.forEach(({ btn, img, title }) => {
        if (btn && adminScreenImg) {
            btn.addEventListener('click', () => {
                adminScreens.forEach(s => {
                    if (s.btn) {
                        s.btn.style.background = 'var(--fcp-bg-surface)';
                        s.btn.style.color = 'var(--fcp-text-secondary)';
                    }
                });
                btn.style.background = 'linear-gradient(135deg, var(--fcp-navy), var(--fcp-blue-primary))';
                btn.style.color = '#ffffff';

                adminScreenImg.style.opacity = '0';
                setTimeout(() => {
                    adminScreenImg.src = img;
                    if (adminHeaderTitle) adminHeaderTitle.textContent = title;
                    adminScreenImg.style.opacity = '1';
                }, 150);
            });
        }
    });
    // -------------------------------------------------------------
    if ('IntersectionObserver' in window) {
        const fadeElements = document.querySelectorAll('.fcp-fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));

        // Active link highlighting on scroll
        const sections = document.querySelectorAll('section[id]');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3
        });

        sections.forEach(s => navObserver.observe(s));
    }
});

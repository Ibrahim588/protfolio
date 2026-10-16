/**
 * Knowledge Platform - Interactive Showcase JavaScript
 * منصة المعرفة - سكريبت التفاعل والمحاكاة الذكية
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Theme Synchronization (Dark/Light mode)
    // -------------------------------------------------------------
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('kp-theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check localStorage or system preference (Default: dark for enterprise look)
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
                themeIcon.className = 'fa-solid fa-moon';
            } else {
                themeIcon.className = 'fa-solid fa-sun';
            }
        }
    }

    // -------------------------------------------------------------
    // 2. Navbar Scroll Behavior
    // -------------------------------------------------------------
    const navbar = document.querySelector('.kp-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // -------------------------------------------------------------
    // 3. Mobile Navigation Menu
    // -------------------------------------------------------------
    const mobileToggle = document.getElementById('kp-mobile-toggle');
    const navMenu = document.getElementById('kp-nav-menu');
    const navLinks = document.querySelectorAll('.kp-nav-link');

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
    // 4. App Showcase Interactive Tabs & Panels
    // -------------------------------------------------------------
    const tabButtons = document.querySelectorAll('.kp-tab-btn');
    const screenPanels = document.querySelectorAll('.kp-screen-panel');
    const screenTitle = document.getElementById('kp-screen-title');
    const screenText = document.getElementById('kp-screen-text');
    const screenFeatures = document.getElementById('kp-screen-features');

    const screenData = {
        'home': {
            title: 'الشاشة الرئيسية (Home Feed)',
            text: 'نقطة الانطلاق اليومية للموظف. تبدأ ببطاقة ترحيب ذكية تعرض اسم الموظف وقسمه، وتمرير فوري لآخر الأخبار والإعلانات الإدارية، مع شريط تصفية مرن للتصنيفات الهندسية وقائمة بأحدث ما نشره الزملاء.',
            features: [
                'بطاقة ترحيب شخصية مرتبطة بحساب الموظف وقسمه',
                'شريط استعراض للأخبار والتعاميم الصادرة من الإدارة',
                'فلاتر سريعة للمجالات: IT، كهرباء، ميكانيكا، كيمياء',
                'تغذية لحظية ببطاقات المعارف المنشورة مع مؤشرات التفاعل'
            ]
        },
        'detail': {
            title: 'شاشة تفاصيل المعرفة (Knowledge Detail)',
            text: 'المكان الذي تتحول فيه الخبرات إلى أصول عملية. شاشة متكاملة لقراءة المقالات الفنية والهندسية، مزودة بمعرض صور مكبّر، روابط لمراجع خارجية، زر حفظ للمفضلة، ومساحة نقاش تفاعلية بين فرق العمل.',
            features: [
                'عرض تفصيلي للخطوات والإجراءات مع شارات التوثيق',
                'معرض صور ومخططات عالية الدقة قابلة للتكبير',
                'حفظ مباشر للمفضلة ومشاركة سريعة للروابط المؤسسية',
                'قسم تعليقات ونقاشات مثرية بين الزملاء من مختلف الأقسام'
            ]
        },
        'search': {
            title: 'محرك البحث الذكي (Smart Search & Filter)',
            text: 'العثور على أي معلومة أو حل فني في أجزاء من الثانية. يدعم البحث النصي السريع، التصفية بالقسم الوظيفي، والتصفية بالمجال الهندسي، مما يلغي تماماً ضياع الوقت في البحث عن حلول سابقة.',
            features: [
                'بحث فوري بالكلمات المفتاحية والعناوين والمحتوى',
                'تصفية دقيقة حسب الأقسام (IT, HR, مالية, هندسة...) ',
                'فرز حسب التاريخ والتفاعل والتصنيف التقني',
                'سجل بحث وحفظ نتائج سريعة الاسترجاع'
            ]
        },
        'notifications': {
            title: 'مركز الإشعارات والتنبيهات (Live Notifications)',
            text: 'متابعة لحظية لكل ما يحدث في المنصة. عداد ذكي للإشعارات غير المقروءة، وتنبيهات فورية بالتعاميم والقرارات الجديدة، والردود على الاستفسارات الفنية، وتفاعلات الزملاء.',
            features: [
                'تنبيهات فورية عند صدور تعاميم وقرارات إدارية جديدة',
                'إشعارات لحظية بالتعليقات والردود على معارفك المنشورة',
                'عداد رقمي ديناميكي للإشعارات غير المقروءة في شريط التطبيق',
                'إمكانية تمييز الإشعارات كمقروءة وحفظ التنبيهات المهمة'
            ]
        },
        'profile': {
            title: 'الملف الشخصي وإدارة التواجد (User Profile)',
            text: 'ملف الموظف الرقمي داخل المنصة. يعرض بيانات القسم، الدور الوظيفي (Admin أو User)، المعارف التي ساهم بنشرها، المفضلة المحفوظة، وحالة التواجد المباشر (Online / Active).',
            features: [
                'عرض معلومات الموظف وقسمه ورتبته الوظيفية',
                'إظهار حالة النشاط والتواجد المباشر في المنظومة',
                'أرشيف شخصي بجميع المعارف المنشورة بواسطة الموظف',
                'قائمة وصول سريع للمقالات والأدلة المحفوظة في المفضلة'
            ]
        },
        'admin': {
            title: 'لوحة إعدادات الإدارة (Admin Settings)',
            text: 'تحكم مؤسسي كامل ومصمم لمدراء النظام. إضافة مستخدمين جدد، تحديد الصلاحيات، نشر الأخبار المؤسسية، وإدارة سياسات التحديث الإجباري والاختياري عبر السحابة.',
            features: [
                'إدارة حسابات الموظفين وتوزيع أدوار الصلاحيات (Admin / User)',
                'نشر وتعديل الأخبار الرسمية الموجهة للشركة أو لأقسام محددة',
                'إدارة إصدارات التطبيق (OTA Updates) وتفعيل التحديث الإجباري',
                'لوحة مؤشرات إحصائية لعدد المستخدمين والمعارف المنشورة'
            ]
        }
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Update Tab Active State
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Screen Panels
            screenPanels.forEach(p => {
                p.classList.remove('active');
                if (p.getAttribute('data-screen') === targetTab) {
                    p.classList.add('active');
                }
            });

            // Update Descriptions
            if (screenData[targetTab]) {
                const data = screenData[targetTab];
                if (screenTitle) screenTitle.textContent = data.title;
                if (screenText) screenText.textContent = data.text;
                if (screenFeatures) {
                    screenFeatures.innerHTML = data.features.map(f => `
                        <li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>
                    `).join('');
                }
            }
        });
    });

    // -------------------------------------------------------------
    // 5. Knowledge Article Mockup Interactions (Deep Dive)
    // -------------------------------------------------------------
    const bookmarkBtn = document.getElementById('kp-article-bookmark-btn');
    const likeBtn = document.getElementById('kp-article-like-btn');
    const shareBtn = document.getElementById('kp-article-share-btn');
    const likeCountSpan = document.getElementById('kp-article-like-count');

    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', () => {
            const icon = bookmarkBtn.querySelector('i');
            const isSaved = icon.classList.contains('fa-solid');
            if (isSaved) {
                icon.className = 'fa-regular fa-bookmark';
                showToast('تمت إزالة المعرفة من المفضلة');
            } else {
                icon.className = 'fa-solid fa-bookmark';
                icon.style.color = 'var(--kp-accent)';
                showToast('تمت إضافة المعرفة إلى المفضلة بنجاح!');
            }
        });
    }

    if (likeBtn && likeCountSpan) {
        let isLiked = false;
        let count = parseInt(likeCountSpan.textContent) || 48;
        likeBtn.addEventListener('click', () => {
            const icon = likeBtn.querySelector('i');
            if (!isLiked) {
                isLiked = true;
                count += 1;
                likeCountSpan.textContent = count;
                icon.className = 'fa-solid fa-heart';
                icon.style.color = '#EF4444';
                showToast('شكراً لتفاعلك الإيجابي مع المعرفة!');
            } else {
                isLiked = false;
                count -= 1;
                likeCountSpan.textContent = count;
                icon.className = 'fa-regular fa-heart';
                icon.style.color = '';
            }
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
            }
            showToast('تم نسخ رابط المعرفة المؤسسية للمشاركة!');
        });
    }

    // -------------------------------------------------------------
    // 6. FAQ Accordion
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.kp-faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.kp-faq-question');
        const answer = item.querySelector('.kp-faq-answer');

        if (questionBtn && answer) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.kp-faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                    }
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                }
            });
        }
    });

    // -------------------------------------------------------------
    // 7. Toast Notification Helper
    // -------------------------------------------------------------
    function showToast(message) {
        let toast = document.getElementById('kp-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'kp-toast';
            toast.style.position = 'fixed';
            toast.style.bottom = '24px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            toast.style.backgroundColor = 'var(--kp-primary-dark)';
            toast.style.color = '#ffffff';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '30px';
            toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
            toast.style.border = '1px solid var(--kp-accent)';
            toast.style.fontSize = '0.92rem';
            toast.style.fontWeight = '700';
            toast.style.zIndex = '9999';
            toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            toast.style.pointerEvents = 'none';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';

        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            toast.style.opacity = '0';
        }, 3200);
    }
});

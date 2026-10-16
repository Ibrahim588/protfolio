/**
 * Modern Education International Schools (MEIS) - Interactive Controller
 * Developed by Ibrahim Abdelgader (Ibrahim588)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle
    const themeToggle = document.getElementById('meis-theme-toggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fa-solid fa-sun';
            themeToggle.setAttribute('aria-label', 'تبديل للوضع الليلي');
        } else {
            icon.className = 'fa-solid fa-moon';
            themeToggle.setAttribute('aria-label', 'تبديل للوضع النهاري');
        }
    }

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('meis-mobile-toggle');
    const navMenu = document.getElementById('meis-nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
            mobileToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });

        navMenu.querySelectorAll('.meis-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // 3. Screens Showcase Controller
    const screenTabs = document.querySelectorAll('.screen-tab-btn');
    const screenItems = document.querySelectorAll('.screen-view-item');
    const screenUrlText = document.getElementById('screen-url-text');
    const screenDetailTitle = document.getElementById('screen-detail-title');
    const screenDetailDesc = document.getElementById('screen-detail-desc');
    const screenTechPills = document.getElementById('screen-tech-pills');

    const screensData = {
        'home': {
            url: 'https://meis.edu.sa/',
            title: 'البوابة الرئيسية للمدرسة (Home Portal)',
            desc: 'واجهة ديناميكية تم بناؤها باستخدام Next.js 16 App Router لضمان أقصى سرعة تحميل (Server-Side Rendering) مع سلايدر الميزات وأقسام الإحصائيات ورسالة المدرسة وتوافق كامل مع رؤية 2030.',
            pills: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Lucide Icons', 'Bilingual Context']
        },
        'admissions': {
            url: 'https://meis.edu.sa/admissions',
            title: 'بوابة القبول والتسجيل الذكية (Online Admissions)',
            desc: 'استمارة تقديم رقمية تفاعلية تمكّن أولياء الأمور من تسجيل بيانات الأبناء، رفع الوثائق المطلوبة، وتحديد رغبات التسجيل مع ربط فوري بقاعدة بيانات المدرسة.',
            pills: ['Digital Form', 'Validation Engine', 'Firebase Firestore', 'Realtime Sync', 'Stage Logic']
        },
        'academics-screen': {
            url: 'https://meis.edu.sa/academic',
            title: 'المناهج والبرامج الأكاديمية (Academic Curricula)',
            desc: 'استعراض مفصل للمسارات التعليمية من رياض الأطفال وحتى المرحلة الثانوية، مع شرح معايير الدبلومة الأمريكية ومقررات العلوم والتكنولوجيا المتقدمة.',
            pills: ['American Diploma', 'Curriculum Mapping', 'STEM Focus', 'Dual-Language', 'Dynamic Slugs']
        },
        'admin': {
            url: 'https://meis.edu.sa/admin/dashboard',
            title: 'لوحة التحكم الإدارية ونظام CMS المتكامل',
            desc: 'نظام إدارة محتوى مؤسسي فائق المرونة يتيح لمدير المدرسة التحكم الكامل في نصوص الموقع، نشر الأخبار، جدولة الفعاليات، متابعة طلبات القبول، وضبط إعدادات الـ SEO.',
            pills: ['Admin CMS', 'Firebase Auth', 'Role-Based Access', 'Live Firestore', 'SEO Controller']
        },
        'facilities': {
            url: 'https://meis.edu.sa/facilities',
            title: 'المرافق المدرسية والحياة الطلابية (Facilities & Life)',
            desc: 'استعراض مصور للمباني المدرسية الحديثة، المختبرات التفاعلية، الملاعب الرياضية، المكتبة الرقمية، ومسارح الفعاليات مع تفاصيل معايير السلامة والصحة.',
            pills: ['Interactive Grid', 'Photo Lightbox', 'Interactive Sliders', 'Campus Showcase']
        },
        'contact': {
            url: 'https://meis.edu.sa/contact',
            title: 'الموقع الجغرافي وقنوات التواصل (Contact & Location)',
            desc: 'خريطة تفاعلية مدعومة بإحداثيات GPS الدقيقة لشارع مروان بن سعيد بالرياض، مع نموذج مراسلة فوري متصل بالإدارة وهواتف التواصل المباشرة.',
            pills: ['Map Integration', 'GPS Coordinates', 'Inquiry Pipeline', 'Riyadh Campus']
        }
    };

    screenTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetScreen = tab.getAttribute('data-screen');
            screenTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            screenItems.forEach(item => {
                item.classList.remove('active');
                if (item.id === `view-${targetScreen}`) {
                    item.classList.add('active');
                }
            });

            if (screensData[targetScreen]) {
                const data = screensData[targetScreen];
                if (screenUrlText) screenUrlText.textContent = data.url;
                if (screenDetailTitle) screenDetailTitle.textContent = data.title;
                if (screenDetailDesc) screenDetailDesc.textContent = data.desc;
                if (screenTechPills) {
                    screenTechPills.innerHTML = data.pills.map(p => `<span class="tech-pill">${p}</span>`).join('');
                }
            }
        });
    });

    // 4. Lightbox Modal Preview
    const modal = document.getElementById('meis-modal');
    const modalImg = document.getElementById('meis-modal-img');
    const modalCaption = document.getElementById('meis-modal-caption');
    const modalClose = document.getElementById('meis-modal-close');
    const modalBackdrop = document.getElementById('meis-modal-backdrop');
    const btnZoomScreen = document.getElementById('btn-zoom-screen');

    function openModal(imgSrc, captionText) {
        if (!modal) return;
        modalImg.src = imgSrc;
        modalCaption.textContent = captionText;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (btnZoomScreen) {
        btnZoomScreen.addEventListener('click', () => {
            const activeView = document.querySelector('.screen-view-item.active');
            if (activeView) {
                const img = activeView.querySelector('img');
                const title = activeView.querySelector('h4')?.textContent || 'معاينة الشاشة';
                if (img) openModal(img.src, title);
            }
        });
    }

    document.querySelectorAll('.screen-view-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('h4')?.textContent || 'معاينة الشاشة';
            if (img) openModal(img.src, title);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // 5. Interactive Admissions Calculator
    const stageBtns = document.querySelectorAll('.stage-btn');
    const calcOutputBadge = document.getElementById('calc-output-badge');
    const calcAgeInfo = document.getElementById('calc-age-info');
    const calcDocsList = document.getElementById('calc-docs-list');
    const calcFeaturesList = document.getElementById('calc-features-list');

    const stagesData = {
        'kg': {
            badge: 'مرحلة رياض الأطفال (KG1 - KG3)',
            age: 'من سن 3 سنوات إلى 5 سنوات و 6 أشهر عند بداية العام الدراسي.',
            docs: [
                'صورة شهادة الميلاد أو هوية الإقامة سارية المفعول',
                'كارت التطعيمات المحدث وتقرير الفحص الطبي الشامل',
                'صورة هوية ولي الأمر وجواز السفر للأجانب'
            ],
            features: [
                'برنامج تأسيسي ثنائي اللغة بإشراف ناطقين أصليين',
                'مناهج المنتسوري المعتمدة وتنمية التفكير الإبداعي',
                'فصول تفاعلية آمنة وأنشطة سباحة وتربية بدنية أسبوعية'
            ]
        },
        'primary': {
            badge: 'المرحلة الابتدائية (الصفوف 1 - 6)',
            age: 'إتمام سن 6 سنوات للصف الأول الابتدائي وفق اللائحة الرسمية لوزارة التعليم.',
            docs: [
                'الشهادة الأصلية للمرحلة السابقة أو شهادة روضة معتمدة',
                'السجل الصحي المدرسي ونموذج اللياقة الطبية',
                'شهادة معادلة للطلاب القادمين من خارج المملكة'
            ],
            features: [
                'مناهج أمريكية معتمدة للعلوم والرياضيات واللغة الإنجليزية',
                'برنامج تعزيز اللغة العربية والتربية الإسلامية والهوية الوطنية',
                'معامل حاسب آلي وتطبيقات STEM وحصص الروبوتكس'
            ]
        },
        'middle': {
            badge: 'المرحلة المتوسطة (الصفوف 7 - 9)',
            age: 'اجتياز المرحلة الابتدائية بنجاح وتقديم السجلات الأكاديمية الرسمية.',
            docs: [
                'الشهادات الدراسية لآخر عامين معتمدة رسمياً',
                'شهادة حسن سيرة وسلوك من المدرسة السابقة',
                'تعبئة استمارة التقييم واختبار تحديد المستوى'
            ],
            features: [
                'مختبرات علوم متقدمة وتجارب عملية تفاعلية',
                'برامج تطوير مهارات البحث العلمي والمناظرات الطلابية',
                'أندية النشاط الطلابي الرياضية والفنية والبرمجية'
            ]
        },
        'high': {
            badge: 'المرحلة الثانوية - الدبلومة الأمريكية (الصفوف 10 - 12)',
            age: 'اجتياز الصف التاسع بنجاح واستيفاء شروط اختبار القبول باللغة الإنجليزية.',
            docs: [
                'سجل الدرجات التراكمي المعتمد للمرحلة المتوسطة (Transcripts)',
                'معادلة وزارة التعليم للشهادات غير السعودية',
                'اجتياز مقابلة القبول واختبار القدرات اللغوية'
            ],
            features: [
                'منهاج الدبلومة الأمريكية المعتمد مع مسارات AP الاختيارية',
                'برامج تأهيلية لاختبارات SAT والقدرات والتحصيلي',
                'إرشاد أكاديمي جامعي متخصص للقبول في كبرى الجامعات العالمية'
            ]
        }
    };

    stageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            stageBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const stageKey = btn.getAttribute('data-stage');
            if (stagesData[stageKey]) {
                const s = stagesData[stageKey];
                if (calcOutputBadge) calcOutputBadge.textContent = s.badge;
                if (calcAgeInfo) calcAgeInfo.textContent = s.age;
                if (calcDocsList) {
                    calcDocsList.innerHTML = s.docs.map(d => `<li>${d}</li>`).join('');
                }
                if (calcFeaturesList) {
                    calcFeaturesList.innerHTML = s.features.map(f => `<li>${f}</li>`).join('');
                }
            }
        });
    });

    // 6. FAQ Accordion
    document.querySelectorAll('.meis-faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.meis-faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.meis-faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // 7. Scrollspy Navbar active state
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.meis-nav-link[href*="${sectionId}"]`);
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.meis-nav-link').forEach(l => l.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });
});

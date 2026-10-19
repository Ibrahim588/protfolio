/**
 * MikroTik Manager Pro - Interactivity Script
 * Handles theme synchronization, tabs showcase, FAQ accordion, modals, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Theme Synchronization (Dark/Light mode)
    // -------------------------------------------------------------
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('mt-theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

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
    const mobileToggle = document.getElementById('mt-mobile-toggle');
    const navMenu = document.getElementById('mt-nav-menu');
    const navLinks = document.querySelectorAll('.mt-nav-link');

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
    // 3. Interactive Showcase Tabs
    // -------------------------------------------------------------
    const tabButtons = document.querySelectorAll('.mt-tab-btn');
    const expTitle = document.getElementById('mt-exp-title');
    const expDesc = document.getElementById('mt-exp-desc');
    const expPoints = document.getElementById('mt-exp-points');
    const expImage = document.getElementById('mt-exp-image');

    const screenData = {
        main: {
            title: "الشاشة الرئيسية ومراقبة الشبكة اللحظية",
            desc: "واجهة قيادية عصرية تمنحك فحصاً شاملاً لحالة الراوتر، الذاكرة، المعالج، استهلاك البيانات، وحركة الترافيك في الوقت الفعلي.",
            image: "img/screen4.png",
            points: [
                "عرض بياني حي لمعدل سرعة الرفع والتحميل (Traffic Monitor)",
                "متابعة استهلاك المعالج (CPU) والذاكرة ومساحة التخزين",
                "معرفة عدد المستخدمين النشطين المتصلين بالهوتسبوت حالياً",
                "أزرار وصول سريع لإعادة التشغيل وإدارة الجلسات"
            ]
        },
        safety: {
            title: "فحص سلامة موارد المايكروتك والتوليد الجماعي",
            desc: "حماية استباقية تفحص حالة المعالج والذاكرة وسقف الترخيص قبل إنشاء الكروت، لحساب السقف الآمن والمتبقي للتوليد وتفادي بطء الراوتر.",
            image: "img/screen-bulk-safety.png",
            points: [
                "فحص فوري لعدد الكروت الحالية بالراوتر ومقارنتها بالحد الأقصى الآمن",
                "تحديد المتبقي الآمن للتوليد لتفادي إجهاد معالج الراوتر وتجمده",
                "توليد جماعي سريع مع خيارات عدد الخانات (أرقام أو حروف)",
                "ربط الكروت مباشرة بالبروفايل وتحديد حد البيانات الكلي"
            ]
        },
        profiles: {
            title: "إضافة وإدارة بروفايلات الهوت سبوت الذكية",
            desc: "تحكم شامل في إنشاء وإدارة بروفايلات المستخدمين مع تحديد المدد الزمنية وحقن سكربت On-Login التلقائي لحساب وقت انتهاء الكرت وربط الماك بالسيرفر.",
            image: "img/screen-profiles.png",
            points: [
                "إنشاء بروفايل جديد وضبط قوالب المدة (ساعة، 3 ساعات، 12 ساعة، 30 يوماً)",
                "حقن سكربت On-Login تلقائي لحساب وقت انتهاء الكرت وتدوينه في الـ Comment",
                "تحديد عدد الأجهزة المشتركة (Shared Users) ومهلة كوكيز الماك بدقة",
                "تصفية وحذف مستخدمي البروفايل بالجملة مع استثناء الكروت قيد الاستخدام"
            ]
        },
        speed: {
            title: "محدد السرعات والتحكم الدقيق بالباندويث (Rate Limit)",
            desc: "أداة تحكم فورية في سرعات الرفع والتنزيل (Rx/Tx) لكل بروفايل ومستخدم لمنع احتكار السرعة وضمان توزيع عادل للباندويث.",
            image: "img/screen11.png",
            points: [
                "قائمة سرعات مسبقة بنقرة واحدة (من 512k/512k وحتى 50M/50M)",
                "إمكانية إدخال أي سرعة مخصصة وتطبيقها فوراً على الراوتر دون إعادة تشغيل",
                "متابعة سرعة واستهلاك المستخدمين النشطين (Active Users) لحظياً",
                "تعديل سرعة البروفايل لتسري فوراً على جميع المشتركين المتصلين"
            ]
        },
        payment: {
            title: "الدفع الإلكتروني بالفيزا والبطاقات والتفعيل الفوري",
            desc: "بوابة دفع متكاملة وآمنة بنظام 3D Secure تتيح شراء باقات الكروت بالفيزا والماستركارد ومدى مع تفعيل سحابي فوري عبر Firebase.",
            image: "img/screen1.png",
            points: [
                "دعم كامل لبطاقات Visa و MasterCard ومدى و Apple Pay عبر MyFatoorah",
                "تفعيل فوري وآلي بالكامل للترخيص على رقم الجهاز دون انتظار",
                "تكامل بديل مع منصة Gumroad العالمية وخيار الطلب المباشر عبر واتساب",
                "باقات ترقية مرنة (5,000 كرت، 10,000 كرت، 15,000 كرت، وباقة غير محدودة)"
            ]
        },
        cards: {
            title: "توليد وطباعة الكروت وتصدير PDF",
            desc: "محرك توليد كروت فائق القوة يتيح إنشاء آلاف الكروت العشوائية وتصديرها بصيغ PDF جاهزة ومقصوصة بأشكال راقية.",
            image: "img/screen12.png",
            points: [
                "إنشاء كروت عشوائية بأكواد وأرقام سرية مخصصة",
                "تحديد الصلاحية، السرعة، والحد اليومي للبيانات بدقة",
                "تصدير قوالب كروت PDF منسقة جاهزة للطباعة فوراً",
                "إمكانية إيقاف، تفعيل، أو مسح الكروت بالجملة"
            ]
        },
        automation: {
            title: "الأتمتة التلقائية والسكربتات الذكية",
            desc: "سكربتات ذاتية التنفيذ تعمل في خلفية الراوتر لتنظيف الكروت المنتهية وضمان استقرار الشبكة دون أي جهد يدوي.",
            image: "img/screen2.png",
            points: [
                "حذف تلقائي للكروت المنتهية كل 12 ساعة لتحرير ذاكرة الراوتر",
                "جدولة تلقائية للمهام وإعادة الاتصال عند انقطاع الـ Wi-Fi",
                "حماية الشبكة وسد ثغرات التخطي وتحديد الترافيك",
                "سجل عمليات تدقيق كامل لكافة الأنشطة والمهام المنفذة"
            ]
        },
        devices: {
            title: "إدارة أجهزة المايكروتك والتحكم عن بُعد",
            desc: "التحكم في عدة روترات وسيرفرات مايكروتك والتنقل بينها بسهولة مع دعم الربط السحابي والـ VPN.",
            image: "img/screen6.png",
            points: [
                "إضافة عدد غير محدود من أجهزة الراوتر والتنقل السلس",
                "الاتصال عن بُعد عبر Cloud IP أو WireGuard و OpenVPN",
                "توليد ومسح أكواد QR للاتصال السريع والآمن",
                "تشفير كامل لكلمات المرور وبيانات المصادقة"
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
                expImage.style.opacity = '0';
                setTimeout(() => {
                    expTitle.textContent = data.title;
                    expDesc.textContent = data.desc;
                    expImage.src = data.image;
                    expImage.alt = data.title;

                    expPoints.innerHTML = '';
                    data.points.forEach(pt => {
                        const div = document.createElement('div');
                        div.className = 'mt-exp-check-item';
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
    const faqItems = document.querySelectorAll('.mt-faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.mt-faq-trigger');
        const content = item.querySelector('.mt-faq-content');

        if (trigger && content) {
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains('active')) {
                        other.classList.remove('active');
                        const otherContent = other.querySelector('.mt-faq-content');
                        const otherTrigger = other.querySelector('.mt-faq-trigger');
                        if (otherContent) otherContent.style.maxHeight = null;
                        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                    }
                });

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

            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    trigger.click();
                }
            });
        }
    });

    // -------------------------------------------------------------
    // 5. Scroll Animations (IntersectionObserver)
    // -------------------------------------------------------------
    if ('IntersectionObserver' in window) {
        const fadeElements = document.querySelectorAll('.mt-fade-in');
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

        // Active nav link highlight on scroll
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

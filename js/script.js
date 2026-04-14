/* 
 * Modern Developer Portfolio
 * Interactivity Script
 */

const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_contact: "Contact",

        hero_greeting: "Hello, I'm",
        hero_name: "Ibrahim Abdelgadir",
        hero_role: "Information Technology Graduate | Flutter Developer | Network & MikroTik Specialist",
        hero_description: "I bridge the gap between robust networking and intuitive mobile applications. As an IT graduate passionate about digital solutions, I specialize in building practical, real-world systems using modern technologies.",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",

        section_about: "About",
        section_me: "Me",
        about_title: "Transforming Ideas into Digital Reality",
        about_p1: "I am an Information Technology graduate from the International University of Africa with a distinctive skillset that spans both software development and network infrastructure.",
        about_p2: "My expertise lies in Flutter mobile development, where I craft seamless user experiences, and MikroTik networking, where I architect stable and secure connection systems. I thrive on solving complex technical challenges, whether it's optimizing a hotspot network or deploying a cross-platform mobile app.",
        about_p3: "Focused on continuous learning and innovation, I aim to deliver efficient, user-centered solutions that make a tangible impact.",
        about_career_objective: "\"To build a strong career in mobile application development and networking by contributing to innovative projects and delivering reliable, scalable solutions.\"",

        section_technical: "Technical",
        section_skills: "Skills",
        skill_cat_networks: "Networks & Systems",
        skill_mikro: "MikroTik Configuration",
        skill_hotspot: "Hotspot Management",
        skill_linux: "Linux Administration",
        skill_cat_dev: "Development",
        skill_flutter: "Dart & Flutter",
        skill_web: "HTML5 & CSS3",
        skill_js: "JavaScript (ES6+)",
        skill_cat_cyber: "Cybersecurity",
        skill_kali: "Kali Linux Tools",
        skill_pentest: "Penetration Testing",
        skill_netsec: "Network Security",

        level_good: "Good",
        level_excellent: "Excellent",
        level_intermediate: "Intermediate",
        level_beginner: "Beginner",
        level_basic: "Basic",

        section_featured: "Featured",
        section_projects: "Projects",
        proj_1_title: "Mikrotik Manager Pro",
        proj_1_desc: "A comprehensive mobile tool designed to manage and control MikroTik device settings remotely. Features a clean, intuitive interface for real-time network monitoring and configuration.",
        proj_2_title: "SPFA Mobile App",
        proj_2_desc: "Developed for the Family and Child Organization (Atbara Branch). This app showcases events, seminars, and initiatives, acting as a digital archive for the organization's community achievements.",
        proj_3_title: "MikroTik Hotspot System",
        proj_3_desc: "End-to-end implementation of secure hotspot systems. Focused on optimized bandwidth management, user access control, and stability for high-traffic environments.",
        proj_4_title: "Knowledge Platform App",
        proj_4_desc: "A comprehensive platform for the Military Industrialization Authority featuring news feeds, an administrative dashboard, and robust user authentication (OTP). Built for efficient knowledge sharing.",
        btn_view_project: "View Project",
        btn_download_project: "Download Project",

        section_professional: "Professional",
        section_journey: "Journey",
        exp_1_period: "1 Month Internship",
        exp_1_role: "Technical Support Intern",
        exp_1_company: "Shiekan Insurance Company (New Halfa Branch)",
        exp_1_desc: "Provided critical end-user technical support, troubleshooting hardware/software issues, and ensuring system stability to maintain high user satisfaction levels.",

        exp_2_period: "3 Months (Freelance/Training)",
        exp_2_role: "Flutter Mobile App Developer",
        exp_2_company: "Freelance",
        exp_2_desc: "Designed and developed cross-platform mobile applications using Flutter and Dart. Responsible for full lifecycle development, from UI design to implementing complex app logic and navigation.",

        exp_3_period: "3 Months",
        exp_3_role: "MikroTik Configuration & Networking",
        exp_3_company: "Freelance / Projects",
        exp_3_desc: "Executed advanced network setups including MikroTik device configuration and hotspot management. Optimized network performance and implemented user control policies.",

        exp_4_period: "Multiple Projects",
        exp_4_role: "Solar Energy Systems Installer",
        exp_4_company: "Freelance",
        exp_4_desc: "Installation and configuration of solar energy systems for various clients.",

        exp_5_period: "Freelance",
        exp_5_role: "Software Technician",
        exp_5_company: "Self-Employed",
        exp_5_desc: "Diagnosing and fixing software problems for Android, iOS, and Windows systems.",

        section_my: "My",
        section_services: "Services",
        serv_1_title: "App Development",
        serv_1_desc: "Building high-performance, visually stunning cross-platform mobile applications using Flutter.",
        serv_2_title: "MikroTik Solutions",
        serv_2_desc: "Expert configuration of MikroTik routers, hotspot management systems, and bandwidth optimization.",
        serv_3_title: "IT Consultation",
        serv_3_desc: "Providing technical support, network troubleshooting, and system setup advice for small businesses.",

        section_get_in: "Get In",
        section_touch: "Touch",
        label_name: "Name",
        label_email: "Email",
        label_message: "Message",
        ph_name: "Your Name",
        ph_email: "Your Email",
        ph_message: "How can I help you?",
        btn_send_message: "Send Message",
        contact_connect: "Connect with Me",
        contact_message: "Feel free to reach out for collaborations or just a friendly hello.",

        footer_copy: "© 2026 Ibrahim Abdelgadir. All rights reserved.",
        footer_back: "Back to Top"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_experience: "الخبرة",
        nav_contact: "تواصل معي",

        hero_greeting: "مرحباً، أنا",
        hero_name: "إبراهيم عبدالقادر",
        hero_role: "خريج تقنية معلومات | مطور تطبيقات Flutter | متخصص شبكات وميكروتيك",
        hero_description: "أقوم بالربط بين الشبكات القوية وتطبيقات الجوال السلسة. كخريج تقنية معلومات شغوف بالحلول الرقمية، أتخصص في بناء أنظمة عملية باستخدام التقنيات الحديثة.",
        btn_projects: "عرض المشاريع",
        btn_contact: "تواصل معي",

        section_about: "نبذة",
        section_me: "عني",
        about_title: "تحويل الأفكار إلى واقع رقمي",
        about_p1: "أنا خريج تقنية معلومات من جامعة إفريقيا العالمية، أمتلك مهارات متنوعة تجمع بين تطوير البرمجيات والبنية التحتية للشبكات.",
        about_p2: "تكمن خبرتي في تطوير تطبيقات Flutter، حيث أصمم تجارب مستخدم سلسة، وشبكات MikroTik، حيث أبنـي أنظمة اتصال مستقرة وآمنة. أستمتع بحل التحديات التقنية المعقدة، سواء كان ذلك تحسين أداء شبكة هوت سبوت أو نشر تطبيق جوال متعدد المنصات.",
        about_p3: "مع تركيزي على التعلم المستمر والابتكار، أهدف إلى تقديم حلول فعالة تركز على المستخدم وتحدث أثراً ملموساً.",
        about_career_objective: "\"بناء مسيرة مهنية قوية في تطوير تطبيقات الجوال والشبكات من خلال المساهمة في مشاريع مبتكرة وتقديم حلول موثوقة وقابلة للتوسع.\"",

        section_technical: "المهارات",
        section_skills: "التقنية",
        skill_cat_networks: "الشبكات والأنظمة",
        skill_mikro: "إعدادات MikroTik",
        skill_hotspot: "إدارة الـ Hotspot",
        skill_linux: "إدارة أنظمة Linux",
        skill_cat_dev: "التطوير والبرمجة",
        skill_flutter: "Dart & Flutter",
        skill_web: "HTML5 & CSS3",
        skill_js: "JavaScript (ES6+)",
        skill_cat_cyber: "الأمن السيبراني",
        skill_kali: "أدوات Kali Linux",
        skill_pentest: "اختبار الاختراق",
        skill_netsec: "أمن الشبكات",

        level_good: "جيد",
        level_excellent: "ممتاز",
        level_intermediate: "متوسط",
        level_beginner: "مبتدئ",
        level_basic: "أساسي",

        section_featured: "أبرز",
        section_projects: "المشاريع",
        proj_1_title: "Mikrotik Manager Pro",
        proj_1_desc: "أداة شاملة للهواتف المحمولة مصممة لإدارة والتحكم في إعدادات أجهزة MikroTik عن بعد. يتميز بواجهة نظيفة وبديهية لمراقبة الشبكة وتكوينها في الوقت الفعلي.",
        proj_2_title: "تطبيق SPFA",
        proj_2_desc: "تم تطويره لمنظمة رعاية الأسرة والطفل (فرع عطبرة). يعرض هذا التطبيق الفعاليات والندوات والمبادرات، ويعمل كأرشيف رقمي لإنجازات المنظمة المجتمعية.",
        proj_3_title: "نظام MikroTik Hotspot",
        proj_3_desc: "تنفيذ شامل لأنظمة الهوت سبوت الآمنة. يركز على إدارة النطاق الترددي بشكل مـثالي، والتحكم في وصول المستخدمين، والاستقرار في البيئات ذات الحركة المرورية العالية.",
        proj_4_title: "تطبيق منصة المعرفة",
        proj_4_desc: "منصة شاملة خاصة بهيئة التصنيع الحربي تتميز بموجز الأخبار ولوحة تحكم إدارية ومصادقة قوية للمستخدمين. تم تصميمها لتبادل المعرفة وإدارتها بكفاءة داخل الهيئة.",
        btn_view_project: "عرض المشروع",
        btn_download_project: "تحميل التطبيق",

        section_professional: "المسيرة",
        section_journey: "المهنية",
        exp_1_period: "تدريب لمدة شهر",
        exp_1_role: "متدرب دعم فني",
        exp_1_company: "شركة شيكان للتأمين (فرع حلفا الجديدة)",
        exp_1_desc: "قدمت دعماً فنياً حاسماً للمستخدمين النهائيين، وعملت على استكشاف أخطاء الأجهزة والبرامج وإصلاحها، وضمان استقرار النظام للحفاظ على مستويات عالية من رضا المستخدمين.",

        exp_2_period: "3 أشهر (عمل حر/تدريب)",
        exp_2_role: "مطور تطبيقات موبايل Flutter",
        exp_2_company: "عمل حر",
        exp_2_desc: "تصميم وتطوير تطبيقات جوال متعددة المنصات باستخدام Flutter و Dart. مسؤول عن دورة حياة التطوير الكاملة، من تصميم واجهة المستخدم إلى تنفيذ منطق التطبيق المعقد والتنقل.",

        exp_3_period: "3 أشهر",
        exp_3_role: "إعدادات MikroTik والشبكات",
        exp_3_company: "عمل حر / مشاريع",
        exp_3_desc: "تنفيذ إعدادات شبكة متقدمة بما في ذلك تكوين أجهزة MikroTik وإدارة الهوت سبوت. تحسين أداء الشبكة وتنفيذ سياسات التحكم في المستخدم.",

        exp_4_period: "مشاريع متعددة",
        exp_4_role: "تركيب منظومات الطاقة الشمسية",
        exp_4_company: "عمل حر",
        exp_4_desc: "تركيب وتكوين منظومات الطاقة الشمسية لمختلف العملاء.",

        exp_5_period: "عمل حر",
        exp_5_role: "إصلاح مشاكل البرمجيات",
        exp_5_company: "عمل حر",
        exp_5_desc: "اصلاح المشاكل البرمجية لانظمة الاندرويد و الايفون و الويندوز.",

        section_my: "خدمـ",
        section_services: "ـاتي",
        serv_1_title: "تطوير التطبيقات",
        serv_1_desc: "بناء تطبيقات جوال عالية الأداء وجذابة بصرياً ومتعددة منصات باستخدام Flutter.",
        serv_2_title: "حلول MikroTik",
        serv_2_desc: "تكوين احترافي لراوترات MikroTik، وأنظمة إدارة الهوت سبوت، وتحسين النطاق الترددي.",
        serv_3_title: "الاستشارات التقنية",
        serv_3_desc: "تقديم الدعم الفني، واستكشاف أخطاء الشبكة وإصلاحها، ونصائح إعداد النظام للشركات الصغيرة.",

        section_get_in: "تواصل",
        section_touch: "معي",
        label_name: "الاسم",
        label_email: "البريد الإلكتروني",
        label_message: "الرسالة",
        ph_name: "اسمك الكريم",
        ph_email: "بريدك الإلكتروني",
        ph_message: "كيف يمكنني مساعدتك؟",
        btn_send_message: "إرسال الرسالة",
        contact_connect: "تواصل معي عبر",
        contact_message: "لا تتردد في التواصل معي للتعاون أو للاستفسار.",

        footer_copy: "© 2026 إبراهيم عبدالقادر. جميع الحقوق محفوظة.",
        footer_back: "العودة للأعلى"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggling ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const htmlElement = document.documentElement;

    // Check for saved user preference, if any, on load
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (!systemPrefersDark) {
        // Default behavior if needed
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        // Assuming FontAwesome icons: moon for dark, sun for light
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // --- Language Toggling ---
    const langToggleBtn = document.getElementById('lang-toggle');
    // Default to EN unless saved
    let currentLang = localStorage.getItem('lang') || 'en';

    // Apply initial language
    setLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(currentLang);
    });

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);

        // Update Direction
        if (lang === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar');
            langToggleBtn.innerText = 'EN'; // Button shows target switch
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            htmlElement.setAttribute('lang', 'en');
            langToggleBtn.innerText = 'AR'; // Button shows target switch
        }

        // Update Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerText = translations[lang][key];
                }
            }
        });
    }

    // --- Mobile Navigation ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-section');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden-section');
        observer.observe(section);
    });

    // --- Active Navigation Link Update on Scroll ---
    const navObserverOptions = {
        threshold: 0.3
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                navLinksItems.forEach(link => link.classList.remove('active'));

                // Add active to current
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // --- Smooth Scrolling with Header Offset ---
    document.documentElement.style.setProperty('scroll-padding-top', '100px');
});

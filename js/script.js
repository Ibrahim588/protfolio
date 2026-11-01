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
        hero_name: "Ibrahim Abdelgader",
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
        skill_cctv: "CCTV Installation & Programming",
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
        proj_1_desc: "A comprehensive network management platform for MikroTik routers, featuring online Visa/card payments with instant cloud activation, user bandwidth & rate limiting, dynamic hotspot profile creation with on-login automation, bulk PDF card generation, and real-time monitoring.",
        proj_2_title: "SFPA Attendance System",
        proj_2_desc: "An enterprise smart attendance system developed for the Sudan Family Planning Association (SFPA) to manage staff check-ins, shifts, field missions, and leaves with GPS geofencing and device binding.",
        proj_3_title: "MikroTik Hotspot System",
        proj_3_desc: "End-to-end implementation of secure hotspot systems. Focused on optimized bandwidth management, user access control, and stability for high-traffic environments.",
                        proj_motaqadimah_title: "Al Motaqadimah International Schools – Al Nahda",
        proj_motaqadimah_desc: "A premier educational platform and digital admissions portal for Al Motaqadimah International Schools in Riyadh, featuring full bilingual RTL/LTR experience, American curriculum, Cambridge & Oxford STEM, interactive photo lightbox, and WhatsApp-integrated admissions.",
        proj_meis_title: "Modern Education International Schools",
        proj_meis_desc: "A state-of-the-art educational portal and digital admissions gateway for Modern Education International Schools in Riyadh, featuring interactive curricula exploration, student life showcase, and an integrated Admin CMS.",
        proj_reef_title: "Reef Study Platform",
        proj_reef_desc: "A smart web application designed to prepare comprehensive feasibility studies for rural and productive family projects, featuring an 8-step wizard, financial break-even engine, scenario simulation, and native PDF report export.",
        proj_4_title: "Knowledge Platform (Enterprise)",
        proj_4_desc: "A modern enterprise digital platform built with Flutter and Firebase to document, categorize, and share engineering, technical, and administrative knowledge across departments with smart search, real-time sync, and admin governance.",
        proj_ys_title: "Y&S Chocolate Boutique – Jeddah",
        proj_ys_desc: "A luxury digital storefront for Y&S Chocolate in Jeddah featuring an interactive Custom Gift Box Builder, artisanal kunafa chocolate & royal hospitality catalog, bilingual RTL/LTR support, and smart WhatsApp cart checkout.",
        proj_shahd_title: "Habat Al-Shahd Sweets (shahd-sweets)",
        proj_shahd_desc: "A full-featured oriental sweets e-commerce platform built with Next.js 16, React 19, and Firebase Firestore, featuring a real-time Admin CMS dashboard, interactive cart drawer, full menu showcase, and instant WhatsApp ordering.",
        proj_moule_title: "Moule Luxury Hospitality – Jeddah",
        proj_moule_desc: "The official platform for Moule in Jeddah, specializing in luxury wedding hospitality, royal catering trays, and bespoke gift packaging, complete with an interactive quote builder and verified branch directory.",
        proj_morento_title: "Morento Luxury Chocolate & Flowers",
        proj_morento_desc: "A bilingual luxury boutique platform in Al-Rawdah, Jeddah pairing Belgian chocolates with fresh floral arrangements, featuring a live Gift Card Customizer, delivery scheduler, and gift drawer.",
        proj_du_title: "DU Chocolate Boutique – Jeddah",
        proj_du_desc: "An ultra-luxury bilingual website for DU Chocolate Boutique in Jeddah featuring signature praline & diamond hospitality collections, an interactive event guest calculator, lightbox gallery, and WhatsApp concierge.",
        proj_cc_title: "Chocolate Corner – Jeddah 1998",
        proj_cc_desc: "A heritage luxury website for Jeddah's iconic Chocolate Corner (est. 1998), featuring a 5-step interactive Chocolate Customization Studio for crystal trays and artisanal fillings with bilingual RTL/LTR support.",
        proj_aljagary_title: "Aljagary Design Studio",
        proj_aljagary_desc: "An interactive creative studio website for ordering and browsing wedding & event invitation cards/videos, promotional motion graphics, and brand identity designs.",
        btn_view_project: "View Project Details",
        btn_download_project: "Download Project",
        btn_hotspot_templates: "Explore Hotspot Login Templates",
        btn_school_portal: "Live School Portal",
        btn_live_webapp: "Live Web App",
        btn_more_details: "More Details",

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

        exp_6_period: "Course / Training",
        exp_6_role: "CCTV Installation & Programming",
        exp_6_company: "Certified Course",
        exp_6_desc: "Completed a comprehensive course in installing, configuring, and programming CCTV surveillance camera systems (IP & Analog cameras, DVR/NVR setup, and remote viewing).",

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

        nav_websites: "Websites",

        web_hero_badge: "Web Portfolio & Digital Solutions",
        web_hero_title: "Websites I Designed & Developed",
        web_hero_title_1: "Modern & Responsive",
        web_hero_title_highlight: "Websites & Web Apps",
        web_hero_desc: "Explore live websites, luxury e-commerce boutiques, responsive web applications, and cloud systems I've crafted. Search instantly, filter by specialty, or launch the live preview.",
        web_stat_live: "Live Web Projects",
        web_stat_responsive: "Fully Responsive",
        web_stat_cloud: "Cloud Technologies",
        web_stat_security: "Performance & Security",
        web_search_placeholder: "Search by project name or technology (e.g., Next.js, React, Flutter, Tailwind, Firebase)...",
        filter_all: "All Projects",
        filter_ecommerce: "Luxury Boutiques & Stores",
        filter_apps: "Web Apps & Platforms",
        filter_landing: "Landing Pages",
        filter_business: "Enterprise & Admin Systems",
        web_tech_filter_label: "Quick Tech Filter:",
        web_results_showing: "Showing",
        web_results_unit: "web projects",
        web_results_hint: "Click any card for quick preview",
        badge_live: "Live Site",
        badge_demo: "Demo",
        badge_featured: "Featured",
        btn_visit_site: "Live Website",
        btn_source_code: "Source Code",
        btn_back_home: "Back to Home",
        web_empty_title: "No Matching Projects Found",
        web_empty_desc: "Try adjusting your search keywords or selecting another category filter.",
        web_empty_reset: "Reset Search & Filters",
        web_cta_badge: "Ready to Start Your Next Project?",
        web_cta_title: "Looking for a Custom Website or Cloud Web App?",
        web_cta_desc: "I design and develop high-performance, responsive websites and cloud systems using modern technologies with a focus on speed, security, and user experience.",
        web_cta_btn: "Contact Me to Start",
        web_modal_tech_label: "Technologies Used:",
        dev_guide_title: "How to Add Your Own Websites",
        dev_guide_desc: "To add a new website to this showcase, simply duplicate the HTML card template below in websites.html, updating the preview image, project link, and feature description:",
        btn_explore_websites: "Explore Web Projects Showcase",

        footer_link_motaqadimah: "Al Motaqadimah Schools",
        footer_link_reef: "Reef Study",
        footer_link_mikrotik: "MikroTik Manager Pro",
        footer_link_knowledge: "Knowledge Platform",
        footer_link_sfpa: "SFPA Attendance System",
        footer_link_hijri: "Hijri Attendance Sheet",
        footer_link_hotspot: "Hotspot Templates",
        footer_link_privacy: "Privacy Policy",
        footer_copy: "© 2026 Ibrahim Abdelgader. All rights reserved.",
        footer_back: "Back to Top",
        visitor_counter_label: "Total Visits"
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
        skill_cctv: "تركيب وبرمجة كاميرات المراقبة CCTV",
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
        proj_1_desc: "المنظومة الاحترافية المتكاملة لإدارة شبكات MikroTik، تدعم الدفع المباشر بالفيزا والبطاقات البنكية مع التفعيل السحابي الفوري، تحديد السرعات (Rate Limiting) وتوزيع الباندويث، إنشاء وإدارة بروفايلات الهوتسبوت وسكربت On-Login التلقائي، وتوليد وطباعة كروت PDF بالجملة.",
        proj_2_title: "نظام الحضور الذكي SFPA Attendance",
        proj_2_desc: "منظومة رقمية متكاملة لجمعية تنظيم الأسرة السودانية لإدارة دوام الموظفين، الورديات، المأموريات الميدانية، والإجازات بأعلى معايير الدقة والأمان عبر تقنيات التحقق الجغرافي (Geofencing) وربط الأجهزة.",
        proj_3_title: "نظام MikroTik Hotspot",
        proj_3_desc: "تنفيذ شامل لأنظمة الهوت سبوت الآمنة. يركز على إدارة النطاق الترددي بشكل مـثالي، والتحكم في وصول المستخدمين، والاستقرار في البيئات ذات الحركة المرورية العالية.",
                        proj_motaqadimah_title: "مدارس المتقدمة العالمية - حي النهضة",
        proj_motaqadimah_desc: "صرح تعليمي رقمي متطور وبوابة قبول وتسجيل رسمية لمدارس المتقدمة العالمية بالرياض، يتميز بدعم كامل للغتين العربية والإنجليزية (RTL / LTR)، استعراض المنهج الأمريكي، المسار ثنائي اللغة 50/50، أكاديمية IELTS، معرض مرافق تفاعلي، وتكامل ذكي مع الواتساب.",
        proj_meis_title: "مدارس التربية الحديثة العالمية (MEIS)",
        proj_meis_desc: "صرح تعليمي رقمي متطور وبوابة قبول وتسجيل إلكترونية لمدارس التربية الحديثة بالرياض، مطورة بـ Next.js 16 و React 19 مع استعراض المناهج ولوحة تحكم CMS كاملة.",
        proj_reef_title: "منصة دراسة ريف (Reef Study)",
        proj_reef_desc: "تطبيق ويب استرشادي متقدم لإعداد دراسات جدوى اقتصادية متكاملة لمشاريع الأسر المنتجة والتنمية الريفية المستدامة، مع معالج ذكي من 8 مراحل، حاسبة نقطة التعادل، ومولد تقارير PDF رسمية.",
        proj_4_title: "منصة المعرفة المؤسسية (Knowledge Platform)",
        proj_4_desc: "منظومة رقمية مؤسسية حديثة تم تطويرها باستخدام Flutter و Firebase لتوثيق وتصنيف وتبادل المعرفة والخبرات الهندسية والتقنية والإدارية بين الإدارات المختلفة مع بحث ذكي وتزامن فوري وحوكمة إدارية.",
        proj_ys_title: "واي آند إس للشوكولاتة الفاخرة (Y&S Chocolate)",
        proj_ys_desc: "موقع ومتجر رقمي فاخر لعلامة Y&S Chocolate بجدة، يضم مصمم بوكسات الهدايا التفاعلي، كتالوج الشوكولاتة وألواح الكنافة وصواني الضيافة، وسلة طلبات ذكية مرتبطة بالواتساب مع دعم اللغتين.",
        proj_shahd_title: "حلويات حبات الشهد (Habat Al-Shahd Sweets)",
        proj_shahd_desc: "منصة تجارة إلكترونية متكاملة لعلامة حلويات حبات الشهد للحلويات الشرقية الفاخرة، مزودة بلوحة تحكم إدارية سحابية (Admin CMS) عبر Firebase Firestore، سلة تسوق تفاعلية، وطلب فوري عبر الواتساب.",
        proj_moule_title: "موليه للضيافة الفاخرة والمناسبات (Moule)",
        proj_moule_desc: "الموقع الرسمي لعلامة موليه (Moule) في جدة المتخصصة في ضيافات الأفراح الكبرى وتنسيق الهدايا والتغليف الفاخر، مع كتالوج المجموعات الملكية ونظام طلب عروض الأسعار المرتبط بالواتساب.",
        proj_morento_title: "بوتيك مورينتو للشوكولاتة والورد (Morento)",
        proj_morento_desc: "متجر إلكتروني فاخر ثنائي اللغة لبوتيك مورينتو بحي الروضة في جدة، يجمع بين الشوكولاتة البلجيكية وتنسيقات الورد الطبيعي مع محرك تخصيص بطاقة الإهداء وحجز موعد التوصيل.",
        proj_du_title: "بوتيك ديو للشوكولاتة والضيافة (DU Boutique)",
        proj_du_desc: "موقع فاخر لبوتيك ديو للشوكولاتة البلجيكية والضيافة في جدة، يشتمل على كتالوج البرالين والصواني الماسية، حاسبة تفاعلية لحجز ضيافة المناسبات والأفراح، ودعم كامل للغتين.",
        proj_cc_title: "ركن الشوكولاتة – جدة ١٩٩٨ (Chocolate Corner)",
        proj_cc_desc: "موقع بوتيك ركن الشوكولاتة العريق في جدة منذ عام 1998م، يتميز باستوديو تخصيص الشوكولاتة التفاعلي من 5 خطوات لاختيار الصينية الكريستالية والحشوات الحرفية والتغليف، مع ربط فوري بالواتساب.",
        proj_aljagary_title: "استوديو الجقري للتصميم (Aljagary Design Studio)",
        proj_aljagary_desc: "موقع استوديو الجقري للتصميم لطلب وتصفح كروت وفيديوهات دعوات الزفاف والمناسبات، الفيديوهات الإعلانية والموشن جرافيك مع واجهة تفاعلية مبتكرة.",
        btn_view_project: "عرض تفاصيل المشروع",
        btn_download_project: "تحميل التطبيق",
        btn_hotspot_templates: "استعراض واجهات وقوالب تسجيل الدخول",
        btn_school_portal: "بوابة المدرسة الحية",
        btn_live_webapp: "تطبيق الويب الحي",
        btn_more_details: "المزيد من التفاصيل",

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

        exp_6_period: "دورة تدريبية",
        exp_6_role: "تركيب وبرمجة كاميرات المراقبة CCTV",
        exp_6_company: "كورس معتمد",
        exp_6_desc: "إكمال كورس متكامل في تركيب وتثبيت وبرمجة أنظمة كاميرات المراقبة (IP & Analog)، وإعداد أجهزة DVR/NVR والربط للمراقبة عن بُعد.",

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

        nav_websites: "مواقع الويب",

        web_hero_badge: "معرض أعمال وتطبيقات الويب",
        web_hero_title: "مواقع الويب التي قمت بتصميمها",
        web_hero_title_1: "مواقع وتطبيقات الويب",
        web_hero_title_highlight: "الحديثة والمتجاوبة",
        web_hero_desc: "استكشف نماذج الأنظمة الرقمية، المتاجر الفاخرة، صفحات الهبوط، وحلول الويب السحابية المتكاملة التي قمت بتطويرها. يمكنك البحث الفوري، فرز المشاريع حسب التخصص، أو الانتقال مباشرة للمعاينة الحية.",
        web_stat_live: "مشاريع ويب حية",
        web_stat_responsive: "متجاوبة تماماً",
        web_stat_cloud: "تقنيات سحابية",
        web_stat_security: "أمان وسرعة أداء",
        web_search_placeholder: "ابحث باسم المشروع أو التقنية (مثل: Next.js, React, Flutter, Tailwind, Firebase)...",
        filter_all: "جميع المشاريع",
        filter_ecommerce: "متاجر وبوتيكات فاخرة",
        filter_apps: "تطبيقات ومنصات ويب",
        filter_landing: "صفحات الهبوط",
        filter_business: "أنظمة مؤسسية وإدارية",
        web_tech_filter_label: "فرز سريع بالتقنية:",
        web_results_showing: "عرض",
        web_results_unit: "مشاريع ويب",
        web_results_hint: "اضغط على أي بطاقة للمعاينة السريعة",
        badge_live: "موقع مباشر",
        badge_demo: "معاينة تجريبية",
        badge_featured: "مميز",
        btn_visit_site: "زيارة الموقع الحي",
        btn_source_code: "كود المصدر",
        btn_back_home: "العودة للرئيسية",
        web_empty_title: "لم نتمكن من العثور على أي مشروع مطابق",
        web_empty_desc: "جرّب تغيير كلمات البحث أو اختيار تبويب تصفية آخر للوصول لنتائج أفضل.",
        web_empty_reset: "إعادة ضبط التصفية والبحث",
        web_cta_badge: "جاهز لبدء مشروعك القادم؟",
        web_cta_title: "هل ترغب في موقع ويب احترافي أو تطبيق سحابي خاص بك؟",
        web_cta_desc: "أقدم خدمات تصميم وتطوير مواقع الويب المتجاوبة والأنظمة السحابية بأحدث التقنيات وأفضل تجربة مستخدم، مع اهتمام فائق بالأداء، الأمان، والتوافق عبر جميع الشاشات.",
        web_cta_btn: "تواصل معي لبدء العمل",
        web_modal_tech_label: "التقنيات المستخدمة:",
        dev_guide_title: "كيف تضيف مواقع ويب جديدة إلى هذه الصفحة؟",
        dev_guide_desc: "لإضافة موقع ويب جديد، يمكنك ببساطة نسخ قالب البطاقة البرمجي أدناه ولصقه داخل ملف websites.html مع وضع الرابط وصورة وشرح الموقع:",
        btn_explore_websites: "استكشف معرض مواقع الويب المصممة",

        footer_link_motaqadimah: "مدارس المتقدمة العالمية",
        footer_link_reef: "دراسة ريف",
        footer_link_mikrotik: "MikroTik Manager Pro",
        footer_link_knowledge: "منصة المعرفة",
        footer_link_sfpa: "نظام الحضور SFPA",
        footer_link_hijri: "سجل الحضور والغياب",
        footer_link_hotspot: "واجهات الهوتسبوت",
        footer_link_privacy: "سياسة الخصوصية",
        footer_copy: "© 2026 إبراهيم عبدالقادر. جميع الحقوق محفوظة.",
        footer_back: "العودة للأعلى",
        visitor_counter_label: "إجمالي الزيارات"
    }
};

const webCardsTranslations = {
    "demos/ys-chocolate/index.html": {
        en: {
            status: "Live Preview",
            badge: "Luxury Chocolate Boutique",
            category: "Luxury Chocolate Store & Custom Box Builder",
            title: "Y&S Chocolate | Luxury Chocolate Boutique",
            desc: "A luxury digital storefront for Y&S Chocolate in Jeddah (Al-Safa District), designed with a royal dark-and-gold identity and full bilingual support (RTL/LTR). Features an interactive Custom Gift Box Builder, artisanal Kunafa bars & royal hospitality trays catalog, and a smart WhatsApp inquiry cart.",
            features: [
                "Interactive Custom Gift Box Builder to select box size, fillings, and gift personalization",
                "Full catalog with filtering & search for Kunafa chocolate bars, royal trays, and wedding favors",
                "Slide-over Inquiry Cart Drawer that automatically generates formatted WhatsApp orders",
                "Interactive Jeddah branch map, Instagram & TikTok hub, and Schema.org LocalBusiness SEO"
            ],
            primaryBtn: "Live Website Preview",
            secondaryBtn: "Source Code"
        },
        ar: {
            status: "معاينة حية",
            badge: "بوتيك شوكولاتة فاخر",
            category: "متجر شوكولاتة فاخرة ومصمم بوكسات تفاعلي",
            title: "واي آند إس للشوكولاتة | Y&S Chocolate",
            desc: "موقع ومتجر رقمي فاخر لعلامة Y&S Chocolate في مدينة جدة (حي الصفا)، مصمم بهوية ملكية داكنة ومذهبة مع دعم كامل للغتين العربية والإنجليزية (RTL/LTR). يضم مصمم بوكسات الهدايا التفاعلي (Custom Box Builder)، كتالوج الشوكولاتة وألواح الكنافة المقرمشة وصواني الضيافة، وسلة استفسار وطلب ذكية مرتبطة مباشرة بالواتساب.",
            features: [
                "مصمم بوكسات الهدايا التفاعلي لاختيار الحجم والحشوات وتخصيص الإهداء",
                "كتالوج متكامل مع فلترة وبحث لألواح الكنافة وصواني الضيافة وتوزيعات الأعراس",
                "سلة طلبات جانبية (Inquiry Cart Drawer) تولد رسائل واتساب مفصلة تلقائياً",
                "خريطة تفاعلية لفرع جدة وربط بـ Instagram و TikTok وبيانات Schema.org"
            ],
            primaryBtn: "معاينة الموقع الحي",
            secondaryBtn: "كود المشروع"
        }
    },
    "https://habat-al-shahd-web.vercel.app": {
        en: {
            status: "Live Site",
            badge: "E-Commerce + Admin CMS",
            category: "Oriental Sweets Store & Cloud Admin CMS",
            title: "Habat Al-Shahd Sweets | حلويات حبات الشهد",
            desc: "A full-featured e-commerce platform for 'Habat Al-Shahd Sweets' specializing in luxury oriental sweets made with pure ghee (Kunafa, Basbousa, Romoush Al-Sett, and hospitality assortments). Built with Next.js 16, React 19, and Firebase Firestore with a real-time Admin Dashboard.",
            features: [
                "Interactive product catalog with full menu viewer, instant search modal, and shopping cart drawer",
                "Protected Admin CMS dashboard to add/edit items, kilo & box prices, and store settings in real time",
                "Fast WhatsApp checkout with automatic cart total calculation and itemized order formatting",
                "Cinematic preloader and full technical SEO with Schema.org Bakery structured data"
            ],
            primaryBtn: "Visit Live Website",
            secondaryBtn: "Source Code"
        },
        ar: {
            status: "موقع حي",
            badge: "متجر + لوحة تحكم CMS",
            category: "متجر حلويات شرقية ولوحة إدارة سحابية",
            title: "حلويات حبات الشهد | Habat Al-Shahd Sweets",
            desc: "منصة تجارة إلكترونية متكاملة لعلامة \"حلويات حبات الشهد\" المتخصصة في الحلويات الشرقية الفاخرة بالسمن البلدي (الكنافة، البسبوسة، رموش الست، وتشكيلات الضيافة). مطورة بـ Next.js 16 و React 19 و Firebase Firestore مع لوحة تحكم إدارية شاملة (Admin Dashboard) لإدارة الأصناف والأسعار والمحتوى لحظياً.",
            features: [
                "كتالوج منتجات تفاعلي مع عارض المنيو الكامل، البحث الفوري، وسلة التسوق",
                "لوحة تحكم إدارية محمية لإضافة وتعديل الأصناف والأسعار وإعدادات المتجر مباشرة",
                "إتمام الطلب السريع عبر الواتساب مع حساب تلقائي لإجمالي السلة وتفاصيل الأصناف",
                "شاشة تحميل سينمائية (Cinematic Preloader) وتوافق كامل مع معايير الـ SEO"
            ],
            primaryBtn: "زيارة الموقع الحي",
            secondaryBtn: "كود المصدر"
        }
    },
    "https://moule-six.vercel.app": {
        en: {
            status: "Live Site",
            badge: "Wedding & Event Hospitality",
            category: "Luxury Wedding Hospitality & Bespoke Gifting",
            title: "Moule Luxury Hospitality | موليه للضيافة الفاخرة",
            desc: "The official platform for 'Moule' in Jeddah, specializing in grand wedding hospitality, royal catering trays, and bespoke gift packaging. Features an occasion collections catalog, interactive WhatsApp quote request builder, and verified branch directory.",
            features: [
                "Occasion collections & royal trays catalog with dedicated detail pages for every collection",
                "Smart quote request form (/quote) with Saudi mobile validation and encoded WhatsApp dispatch",
                "Verified Jeddah branches directory (Al-Faisaliyah & Al-Rayyan) and verified 4.8★ Google rating",
                "Editorial warm identity in Espresso, Champagne, and Ivory with local SEO schema"
            ],
            primaryBtn: "Visit Live Website",
            secondaryBtn: "Source Code"
        },
        ar: {
            status: "موقع حي",
            badge: "ضيافة الأفراح والمناسبات",
            category: "منصة ضيافة الأفراح وتنسيق الهدايا الفاخرة",
            title: "موليه للضيافة الفاخرة | Moule Hospitality",
            desc: "الموقع الرسمي لعلامة \"موليه | Moule\" في مدينة جدة، المتخصصة في ضيافات الأفراح الكبرى (Wedding Hospitality)، تنظيم حفلات الملكة والاستقبال، وتنسيق الهدايا والتغليف الفاخر. يشتمل على كتالوج المجموعات الملكية، نظام طلب عرض سعر تفاعلي مرتبط بالواتساب، ودليل الفروع المعتمد.",
            features: [
                "كتالوج مجموعات المناسبات والصواني الملكية مع صفحات تفصيلية لكل مجموعة",
                "نموذج ذكي لطلب عروض الأسعار (/quote) مع التحقق من أرقام الجوال السعودية",
                "صفحة الفروع المعتمدة بجدة (فرع الفيصلية وفرع الريان) وتقييمات العملاء (4.8★)",
                "هوية بصرية دافئة بألوان الإسبريسو والشامبانيا والعاجي مع سيو محلي متقدم"
            ],
            primaryBtn: "زيارة الموقع الحي",
            secondaryBtn: "كود المصدر"
        }
    },
    "https://morento-chi.vercel.app": {
        en: {
            status: "Live Site",
            badge: "Luxury Chocolate & Fresh Flowers",
            category: "Luxury Gifting, Chocolate & Floral Boutique",
            title: "Morento Boutique | بوتيك مورينتو للشوكولاتة والورد",
            desc: "A bilingual (RTL/LTR) luxury e-commerce boutique for 'Morento' in Al-Rawdah, Jeddah. Pairs Belgian artisanal chocolates with fresh floral arrangements, complete with a live Gift Card Customizer, delivery scheduler, and WhatsApp Order Drawer.",
            features: [
                "Interactive Gift Customizer with live gift card preview and 'Surprise Gift' recipient option",
                "Advanced gift catalog (/catalog) with occasion filtering, instant search, and price sorting",
                "Slide-over Gift Order Drawer to bundle multiple arrangements into a single WhatsApp order",
                "Editorial luxury palette in Burgundy, Champagne Gold, and Deep Espresso"
            ],
            primaryBtn: "Visit Live Website",
            secondaryBtn: "Source Code"
        },
        ar: {
            status: "موقع حي",
            badge: "شوكولاتة فاخرة وورد طبيعي",
            category: "بوتيك الهدايا الفاخرة وتنسيقات الورد والشوكولاتة",
            title: "بوتيك مورينتو | Morento Chocolate & Flowers",
            desc: "متجر إلكتروني فاخر ثنائي اللغة (RTL/LTR) صُمم لبوتيك \"مورينتو | Morento\" في حي الروضة بجدة. يجمع بين الشوكولاتة البلجيكية الفاخرة وتنسيقات الورد الطبيعي، مع محرك تخصيص بطاقة الإهداء وحجز موعد التوصيل (Gift Customizer) وسلة هدايا تفاعلية مرتبطة بالواتساب.",
            features: [
                "محرك تخصيص الإهداء مع معاينة حية لبطاقة الإهداء وخيار \"هدية مفاجأة\" للمستلم",
                "كتالوج هدايا متقدم (/catalog) مع الفلترة حسب المناسبة والبحث اللحظي والترتيب",
                "سلة هدايا جانبية (Order Drawer) لجمع عدة تنسيقات وإرسال طلب موحد عبر واتساب",
                "واجهة تحريرية فاخرة بألوان العنابي والذهب الشامباني وشوكولاتة الإسبريسو"
            ],
            primaryBtn: "زيارة الموقع الحي",
            secondaryBtn: "كود المصدر"
        }
    },
    "https://du-chocolate-boutique.vercel.app": {
        en: {
            status: "Live Site",
            badge: "Belgian Chocolate & Hospitality",
            category: "Belgian Chocolate Boutique & Event Catering",
            title: "DU Chocolate Boutique | بوتيك ديو للشوكولاتة",
            desc: "An ultra-luxury bilingual website for DU Chocolate Boutique in Al-Marwah, Jeddah. Features full RTL/LTR support, signature praline & diamond hospitality tray collections with Quick View modals, and an interactive event guest calculator for WhatsApp catering bookings.",
            features: [
                "Signature praline, diamond trays, and mini-tart catalog with Quick View modal inspection",
                "Interactive event hospitality booking form with guest calculator and live WhatsApp preview",
                "Interactive Lightbox Gallery and floating WhatsApp Concierge widget",
                "Local SEO optimization (Schema.org Bakery) with direct Google Maps integration"
            ],
            primaryBtn: "Visit Live Website",
            secondaryBtn: "Embedded Demo"
        },
        ar: {
            status: "موقع حي",
            badge: "شوكولاتة بلجيكية وضيافة",
            category: "بوتيك شوكولاتة بلجيكية وحجز ضيافة المناسبات",
            title: "بوتيك ديو للشوكولاتة | DU Chocolate Boutique",
            desc: "موقع تعريفي وتسويقي فائق الفخامة لبوتيك ديو للشوكولاتة (DU Chocolate Boutique) بحي المروة في جدة. يتميز بدعم كامل للغتين (RTL/LTR)، كتالوج ترافل وبرالين التوقيع وصواني الضيافة الماسية والميني تارت مع نافذة معاينة سريعة، وحاسبة تفاعلية لحجز ضيافة الأفراح والمناسبات عبر الواتساب.",
            features: [
                "كتالوج تشكيلات البرالين، الصواني الماسية، والميني تارت مع فحص سريع (Quick View)",
                "نموذج حجز ضيافة المناسبات مع حاسبة عدد الضيوف ومعاينة فورية لرسالة الواتساب",
                "معرض صور تفاعلي (Lightbox Gallery) ومساعد شخصي عائم (Concierge Widget)",
                "تحسين محركات البحث المحلي (Schema.org Bakery) وربط مباشر بخرائط جوجل"
            ],
            primaryBtn: "زيارة الموقع الحي",
            secondaryBtn: "نسخة العرض المدمجة"
        }
    },
    "demos/chocolate-corner/index.html": {
        en: {
            status: "Live Preview",
            badge: "Heritage Since 1998",
            category: "Artisan Chocolate Boutique & 5-Step Custom Studio",
            title: "Chocolate Corner – Jeddah 1998 | ركن الشوكولاتة",
            desc: "A luxury heritage website for 'Chocolate Corner', one of Jeddah's most iconic artisan chocolate boutiques (Prince Saud Al-Faisal St., Al-Rawdah) since 1998. Features a 5-step interactive Chocolate Customization Studio, royal collections catalog, and Masonry Lightbox gallery in both Arabic and English.",
            features: [
                "5-step interactive Customization Studio to choose occasion, crystal tray, and artisan fillings",
                "Signature Saudi & international fillings (Cardamom Pistachio, Taif Rose Ganache, Saudi Coffee, Gianduja)",
                "Royal collections & Eid assortments catalog plus Masonry Lightbox artisan gallery",
                "Automated WhatsApp order formatting to the boutique's official number and Google Maps integration"
            ],
            primaryBtn: "Live Website Preview",
            secondaryBtn: "Source Code"
        },
        ar: {
            status: "معاينة حية",
            badge: "عراقة منذ عام 1998م",
            category: "بوتيك شوكولاتة حرفية واستوديو تخصيص تفاعلي",
            title: "ركن الشوكولاتة | Chocolate Corner – Jeddah 1998",
            desc: "موقع ويب فاخر لبوتيك \"ركن الشوكولاتة | Chocolate Corner\"، أحد أعرق بوتيكات الشوكولاتة الحرفية في جدة (شارع الأمير سعود الفيصل، حي الروضة) منذ عام 1998م. يتميز باستوديو تخصيص الشوكولاتة التفاعلي من 5 خطوات، كتالوج المجموعات الملكية، ومعرض الصور الحرفي مع دعم كامل للغتين.",
            features: [
                "استوديو تخصيص تفاعلي (5 خطوات) لاختيار المناسبة، الصينية الكريستالية، والحشوات الحرفية",
                "حشوات سعودية وعالمية مبتكرة (فستق هيل، جناش ورد الطائف، قهوة سعودية، جياندوجا)",
                "كتالوج المجموعات الملكية وتشكيلات العيد ومعرض صور Masonry مع Lightbox",
                "توليد رسائل واتساب منسقة بالكامل لرقم البوتيك الرسمي وتكامل مع خرائط جوجل"
            ],
            primaryBtn: "معاينة الموقع الحي",
            secondaryBtn: "كود المشروع"
        }
    },
    "motaqadimah-nahda.html": {
        en: {
            status: "Active",
            badge: "International Educational Hub",
            category: "International School Platform & Smart Admissions Portal",
            title: "Al Motaqadimah International Schools | مدارس المتقدمة العالمية",
            desc: "An advanced digital educational platform built with Next.js 14, TypeScript, and Tailwind CSS with full bilingual (RTL/LTR) support. Includes American curriculum showcase, 50/50 bilingual track, IELTS Academy, interactive facilities Lightbox gallery, and WhatsApp-integrated smart admissions.",
            features: [],
            primaryBtn: "View Project Page",
            secondaryBtn: "Live Site Preview"
        },
        ar: {
            status: "نشط",
            badge: "صرح تعليمي دولي",
            category: "منصة تعليمية دولية وبوابة قبول وإدارة",
            title: "مدارس المتقدمة العالمية | Al Motaqadimah",
            desc: "صرح تعليمي رقمي متطور مبني بأحدث تقنيات Next.js 14 و TypeScript و Tailwind CSS مع دعم كامل ومزدوج للغتين العربية والإنجليزية (RTL / LTR). يشتمل على استعراض المنهج الأمريكي، المسار ثنائي اللغة 50/50، أكاديمية IELTS، معرض مرافق تفاعلي مع Lightbox، ونظام قبول واستفسار ذكي مرتبط بالواتساب.",
            features: [],
            primaryBtn: "استعراض صفحة المشروع",
            secondaryBtn: "معاينة الموقع الحي"
        }
    },
    "modern-education.html": {
        en: {
            status: "Active",
            badge: "International Educational Hub",
            category: "Educational Portal, Admissions & Admin CMS",
            title: "Modern Education International Schools | MEIS Platform",
            desc: "A state-of-the-art digital educational platform built with Next.js 16, React 19, and Tailwind CSS v4, featuring an online admissions gateway, American Diploma & curricula explorer, and a full Firebase Admin CMS for news, events, and SEO.",
            features: [
                "Smart online admissions & registration portal with grade-level requirement checker",
                "Comprehensive showcase of American Diploma tracks and Saudi Vision 2030 alignment",
                "Full Admin CMS dashboard for managing news, events, and admission inquiries",
                "Ultra-fast performance with complete Arabic & English bilingual support"
            ],
            primaryBtn: "View Project Page",
            secondaryBtn: "Live School Website"
        },
        ar: {
            status: "نشط",
            badge: "صرح تعليمي دولي",
            category: "منصة تعليمية وبوابة قبول وإدارة CMS",
            title: "مدارس التربية الحديثة العالمية | MEIS Platform",
            desc: "صرح تعليمي رقمي متطور مبني بأحدث تقنيات Next.js 16 و React 19 و Tailwind CSS v4، يشتمل على بوابة قبول وتسجيل إلكترونية، استعراض المناهج والدبلومة الأمريكية، ولوحة تحكم CMS لإدارة المحتوى والأخبار والـ SEO عبر Firebase.",
            features: [
                "بوابة قبول وتسجيل إلكترونية ذكية وفحص متطلبات المراحل",
                "استعراض شامل للمسارات والدبلومة الأمريكية ورؤية المملكة 2030",
                "لوحة تحكم إدارية (CMS) لإدارة الأخبار والفعاليات والطلبات",
                "سرعة تحميل خارقة مع دعم كامل للغتين العربية والإنجليزية"
            ],
            primaryBtn: "استعراض صفحة المشروع",
            secondaryBtn: "الموقع الحي للمدرسة"
        }
    },
    "reef-study.html": {
        en: {
            status: "Active",
            badge: "Rural Feasibility SaaS",
            category: "Financial & Rural Development Feasibility Platform",
            title: "Reef Study | دراسة ريف Web Platform",
            desc: "A smart web application designed to prepare comprehensive economic feasibility studies for productive families and sustainable rural agricultural projects. Features an 8-step interactive wizard, sector directory, break-even & scenario financial calculator, and instant official PDF report generator.",
            features: [
                "Smart 8-step wizard simplifying financial and technical project inputs",
                "Specialized coverage for honeybees, coffee, fruits, jams, and traditional crafts",
                "Interactive financial engine modeling 3 scenarios, break-even point, and payback period",
                "Instant export and print-ready official PDF feasibility report generation"
            ],
            primaryBtn: "View Project Page",
            secondaryBtn: "Live Web App"
        },
        ar: {
            status: "نشط",
            badge: "دراسات الجدوى الريفية",
            category: "منظومة جدوى مالية وتنموية استرشادية",
            title: "دراسة ريف | Reef Study Web Platform",
            desc: "تطبيق ويب ذكي استرشادي لإعداد دراسات جدوى اقتصادية متكاملة لمشاريع الأسر المنتجة والتنمية الريفية الزراعية المستدامة. يشتمل على معالج تفاعلي من 8 خطوات، دليل الأنشطة والقطاعات، حاسبة مالية لنقطة التعادل والسيناريوهات، ومولد تقارير PDF رسمية جاهزة للطباعة.",
            features: [
                "معالج ذكي من 8 مراحل يبسط البيانات المالية والفنية للمشاريع",
                "تغطية تخصصية لأنشطة النحل، البن، الفواكه، المربيات، والحرف التراثية",
                "حاسبة مالية تفاعلية ونمذجة 3 سيناريوهات ونقطة التعادل وفترة الاسترداد",
                "تصدير وطباعة تقرير دراسة جدوى استرشادية متكامل بصيغة PDF فورية"
            ],
            primaryBtn: "استعراض صفحة المشروع",
            secondaryBtn: "تطبيق الويب الحي"
        }
    },
    "knowledge-platform.html": {
        en: {
            status: "Active",
            badge: "Enterprise Knowledge Hub",
            category: "Enterprise Engineering & Technical Knowledge System",
            title: "Knowledge Platform | منصة المعرفة المؤسسية",
            desc: "An enterprise digital product & landing portal presenting the Knowledge Platform for documenting, archiving, and sharing expertise across engineering, technical, and administrative teams. Includes smart library exploration, instant search, collaboration, admin governance, and cloud OTA updates.",
            features: [
                "Specialized knowledge library covering IT, Electrical, Mechanical, and Chemical fields",
                "Real-time collaboration with comments, likes, bookmarks, and instant search engine",
                "Unified broadcast center for corporate news, circulars, and executive decisions",
                "Interactive app screen simulations and role-based admin governance showcase"
            ],
            primaryBtn: "Explore Platform Page",
            secondaryBtn: "Live Web App"
        },
        ar: {
            status: "نشط",
            badge: "إدارة المعرفة المؤسسية",
            category: "منظومة معرفية وتقنية وهندسية متكاملة",
            title: "منصة المعرفة | Knowledge Platform",
            desc: "صفحة هبوط ومنتج مؤسسي رقمي متكامل يقدم منصة المعرفة المخصصة لتوثيق وأرشفة وتبادل الخبرات بين فرق العمل الهندسية والتقنية والإدارية. تشتمل على استعراض تفاعلي لمكتبة المعرفة الذكية، محرك البحث الفوري، التعاون والتعليقات، إعدادات الإدارة، ونظام التحديثات السحابية.",
            features: [
                "مكتبة معرفية تخصصية تغطي مجالات IT، كهرباء، ميكانيكا، وكيمياء",
                "تفاعل مباشر بالتعليقات، الإعجاب، الحفظ للمفضلة، ومحرك بحث فوري",
                "مركز موحد لنشر الأخبار والتعاميم والقرارات الإدارية للموظفين",
                "محاكاة واقعية لشاشات التطبيق ولوحة إدارة الصلاحيات وسياسات التحديث"
            ],
            primaryBtn: "استعراض صفحة المنصة",
            secondaryBtn: "موقع الويب"
        }
    },
    "fcp-attendance.html": {
        en: {
            status: "Active",
            badge: "Smart Enterprise System",
            category: "HR & Smart Attendance Management System",
            title: "SFPA Smart Attendance | نظام الحضور الذكي",
            desc: "A comprehensive web portal and product showcase for the SFPA Attendance system developed for the Sudan Family Planning Association. Highlights GPS Geofencing verification, Device Binding security, shift & field mission management, employee experience, and executive analytics.",
            features: [
                "High-precision GPS Geofencing preventing check-ins outside authorized premises",
                "Strict Device Binding linking staff accounts to verified hardware to prevent proxy attendance",
                "Live showcase of employee check-in screens, admin portal, and KPI analytics",
                "Direct download links for Android APK, Windows Desktop, and Live Web Portal"
            ],
            primaryBtn: "Explore System Page",
            secondaryBtn: "Live Web App"
        },
        ar: {
            status: "نشط",
            badge: "نظام مؤسسي ذكي",
            category: "منظومة موارد بشرية وإدارة دوام",
            title: "نظام الحضور الذكي | جمعية تنظيم الأسرة السودانية (SFPA)",
            desc: "صفحة هبوط وبوابة ويب متكاملة لنظام SFPA Attendance التابع لجمعية تنظيم الأسرة السودانية. يشتمل على استعراض تفاعلي لمميزات التحقق الجغرافي (Geofencing)، ربط الأجهزة (Device Binding)، إدارة الورديات والمأموريات الميدانية، تجربة الموظف، وبوابة مؤشرات الإدارة والتقارير.",
            features: [
                "تحقق جغرافي ذكي يمنع التسجيل خارج المقر أو المشروع بدقة عالية",
                "ربط أجهزة الكوادر بحساباتهم المعتمدة لمنع التسجيل بالنيابة نهائياً",
                "استعراض حي لشاشات تجربة الموظف وبوابة الإدارة ومؤشرات الأداء",
                "توفير روابط تحميل نسخ Android و Windows وبوابة الويب المباشرة"
            ],
            primaryBtn: "استعراض صفحة النظام",
            secondaryBtn: "موقع الويب"
        }
    },
    "Attendance.html": {
        en: {
            status: "Live Tool",
            badge: "Interactive Web Tool",
            category: "Advanced Hijri & Gregorian Attendance Generator",
            title: "Smart Attendance Sheet | سجل الحضور والغياب الذكي",
            desc: "An interactive web application for managing and generating student and staff attendance sheets using both Hijri and Gregorian calendars. Features automatic A4 landscape pagination without overlap, bulk name import, holiday customization, and instant high-resolution PDF export.",
            features: [
                "Automatic calculation and generation of dual Hijri & Gregorian dates and months",
                "Smart pagination of names and workweeks across standard A4 landscape print pages",
                "Flexible modal to customize workdays, official holidays, and vacational breaks",
                "Instant high-quality PDF export via html2pdf.js and dedicated print stylesheet"
            ],
            primaryBtn: "Launch Attendance App",
            secondaryBtn: "Open in New Tab"
        },
        ar: {
            status: "أداة مباشرة",
            badge: "أداة ويب تفاعلية حية",
            category: "أداة إدارة دوام وتقويم هجري متقدمة",
            title: "سجل الحضور والغياب | Hijri Attendance Sheet",
            desc: "تطبيق ويب تفاعلي ذكي لإدارة وتوثيق كشوفات الحضور والغياب للطلاب والموظفين بالتقويم الهجري والميلادي. يتميز بتقسيم تلقائي للأسابيع والأسماء على صفحات A4 بدون تداخل، مع إمكانية الإضافة الجماعية وتعديل أيام الإجازات، وتصدير فوري لكشوفات PDF جاهزة للطباعة بدقة متناهية.",
            features: [
                "حساب وتوليد تلقائي لتواريخ الأيام والشهور بالتقويمين الهجري والميلادي",
                "تقسيم ذكي للأسماء والأسابيع على صفحات A4 بمقاسات طباعة قياسية",
                "نافذة مرنة لتعديل وتخصيص أسابيع العمل والإجازات الرسمية والعطلات",
                "تصدير فوري لملفات PDF عالية الجودة وزر طباعة مخصص ومُهيأ"
            ],
            primaryBtn: "تشغيل سجل الحضور (Live Web App)",
            secondaryBtn: "فتح في نافذة جديدة"
        }
    },
    "https://aljagary-studio.netlify.app/": {
        en: {
            status: "Live Site",
            badge: "Live Site",
            category: "Digital Design Studio & Creative Services",
            title: "Aljagary Design Studio | استوديو الجقري للتصميم",
            desc: "A creative digital studio website for browsing and ordering professional design services, including wedding & event invitation cards/videos, commercial promos, motion graphics, and brand identities. Features an innovative Interactive Gear Wheel for seamless category & theme switching.",
            features: [
                "Order and browse high-definition wedding & event invitation cards and videos",
                "Commercial promotional videos, motion graphics, and social media creative packages",
                "Kinetic Interactive Gear Wheel for smooth navigation across creative services",
                "Fully responsive dynamic portfolio with bilingual AR/EN and dark mode support"
            ],
            primaryBtn: "Visit Live Website",
            secondaryBtn: "Preview Website"
        },
        ar: {
            status: "موقع حي",
            badge: "موقع مباشر",
            category: "استوديو تصميم وخدمات رقمية",
            title: "استوديو الجقري للتصميم (Aljagary Studio)",
            desc: "موقع متكامل ومتميز مخصص لطلب وتصفح خدمات التصميم الرقمي الاحترافية، بما في ذلك كروت وفيديوهات دعوات الزفاف والمناسبات، الفيديوهات الإعلانية والتجارية، والموشن جرافيك، وتصاميم الهويات البصرية والسوشيال ميديا والبنرات. يتميز بنظام الترس التفاعلي المبتكر (Interactive Gear System) لتغيير الثيمات واستعراض فئات التصميم بسلاسة فائقة، مع دعم كامل للغتين والوضع الليلي.",
            features: [
                "طلب وتصفح كروت وفيديوهات دعوات الزفاف والمناسبات بدقة عالية",
                "فيديوهات إعلانية وتصاميم موشن جرافيك وسوشيال ميديا تفاعلية",
                "عجلة تفاعلية حركية (Interactive Gear Wheel) للتنقل بين الخدمات بسلاسة",
                "معرض أعمال ديناميكي متجاوب بالكامل وتصميم فائق الأناقة"
            ],
            primaryBtn: "زيارة الموقع الحي",
            secondaryBtn: "معاينة الموقع"
        }
    },
    "hotspot-templates.html": {
        en: {
            status: "9 Templates",
            badge: "9 Ready Login Templates",
            category: "MikroTik Network & Hotspot Captive Portals",
            title: "MikroTik Hotspot Login Portals | بوابات الهوتسبوت",
            desc: "A complete showcase featuring 9 ready-to-deploy captive portal login templates for MikroTik networks and ISPs. Includes seasonal themes (Ramadan, Eid Al-Adha), Space & Neon, Summer vibes, 4G networks, ultra-fast portals, QR code scanning, and mobile-first optimization.",
            features: [
                "Diverse collection of themes (Ramadan, Summer, Eid, Space & Neon, Ultra-Fast)",
                "Instant voucher code login, QR code scanner support, and free trial mode",
                "Ultra-lightweight interfaces guaranteeing instant load even on weak signals",
                "Full interactive showcase with high-resolution Lightbox Gallery"
            ],
            primaryBtn: "Explore Hotspot Templates",
            secondaryBtn: "Preview Templates"
        },
        ar: {
            status: "9 قوالب",
            badge: "9 قوالب تسجيل دخول جاهزة",
            category: "واجهات شبكات وهوستبوت",
            title: "بوابات وواجهات تسجيل دخول MikroTik",
            desc: "معرض متكامل يضم تشكيلة واسعة (9 قوالب جاهزة) من واجهات وقوالب تسجيل الدخول لشبكات المايكروتك ومزودي الإنترنت. تشمل قوالب المناسبات (رمضان كريم، عيد الأضحى)، ثيم الفضاء والنيون، ثيمات الصيف المنعشة، شبكات 4G، بوابات فائقة السرعة، ودعم مسح كود QR وتوافق تام مع الهواتف الذكية.",
            features: [
                "تشكيلة قوالب متعددة الأشكال (رمضانية، صيفية، أعياد، فضاء ونيون، وسرعة فائقة)",
                "تسجيل دخول فوري بكود الكارت أو مسح QR ودعم التجربة المجانية المباشرة",
                "واجهات خفيفة جداً تضمن تحميل فوري حتى في أضعف إشارات الشبكة",
                "معرض صور تفاعلي كامل ومكبر صور عالي الدقة (Lightbox Gallery)"
            ],
            primaryBtn: "استعراض واجهات وقوالب الهوتسبوت",
            secondaryBtn: "معاينة القوالب"
        }
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
    // Respect saved preference, or page's initial HTML lang attribute (preserving Arabic SEO on crawl)
    const initialHtmlLang = htmlElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    let currentLang = localStorage.getItem('lang') || initialHtmlLang;

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

        // Update Directional Arrows in Links/Buttons
        document.querySelectorAll('.project-link i, .btn i').forEach(icon => {
            if (lang === 'ar') {
                if (icon.classList.contains('fa-arrow-right')) {
                    icon.classList.remove('fa-arrow-right');
                    icon.classList.add('fa-arrow-left');
                }
            } else {
                if (icon.classList.contains('fa-arrow-left')) {
                    icon.classList.remove('fa-arrow-left');
                    icon.classList.add('fa-arrow-right');
                }
            }
        });

        // Update Websites Showcase Cards if on websites.html
        const webCards = document.querySelectorAll('.web-card');
        const quickPreviewText = lang === 'ar' ? 'معاينة سريعة' : 'Quick Preview';
        webCards.forEach(card => {
            const primaryLinkEl = card.querySelector('.web-card-actions .btn-primary');
            const hrefKey = primaryLinkEl ? primaryLinkEl.getAttribute('href') : '';
            const cardEntry = hrefKey && webCardsTranslations[hrefKey] ? webCardsTranslations[hrefKey] : null;
            const cardData = cardEntry ? cardEntry[lang] : null;

            if (cardEntry && !card.getAttribute('data-search-bilingual')) {
                const bilingualText = [
                    cardEntry.ar?.title, cardEntry.ar?.category, cardEntry.ar?.desc, ...(cardEntry.ar?.features || []),
                    cardEntry.en?.title, cardEntry.en?.category, cardEntry.en?.desc, ...(cardEntry.en?.features || []),
                    hrefKey
                ].filter(Boolean).join(' ').toLowerCase();
                card.setAttribute('data-search-bilingual', bilingualText);
            }

            const overlayBtnSpan = card.querySelector('.web-card-overlay-btn span');
            if (overlayBtnSpan) {
                overlayBtnSpan.innerHTML = `<i class="fa-solid fa-expand"></i> ${quickPreviewText}`;
            }

            if (cardData) {
                const statusSpan = card.querySelector('.browser-live-indicator span:last-child');
                if (statusSpan) statusSpan.textContent = cardData.status;

                const badgeSpan = card.querySelector('.web-card-badge span:last-child');
                if (badgeSpan) badgeSpan.textContent = cardData.badge;

                const categoryEl = card.querySelector('.web-card-category');
                if (categoryEl) categoryEl.textContent = cardData.category;

                const titleEl = card.querySelector('.web-card-title');
                if (titleEl) titleEl.textContent = cardData.title;

                const descEl = card.querySelector('.web-card-desc');
                if (descEl) descEl.textContent = cardData.desc;

                const featureItems = card.querySelectorAll('.web-features-list li');
                if (cardData.features && cardData.features.length > 0) {
                    featureItems.forEach((li, idx) => {
                        if (cardData.features[idx]) {
                            li.innerHTML = `<i class="fa-solid fa-check"></i> ${cardData.features[idx]}`;
                        }
                    });
                }

                const primarySpan = card.querySelector('.web-card-actions .btn-primary span');
                if (primarySpan && cardData.primaryBtn) primarySpan.textContent = cardData.primaryBtn;

                const secondarySpan = card.querySelector('.web-card-actions .btn-outline span');
                if (secondarySpan && cardData.secondaryBtn) secondarySpan.textContent = cardData.secondaryBtn;
            }
        });

        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
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
    // Only animate sections on main homepage, never on showcase galleries with dedicated controllers
    const isHomePage = !!document.getElementById('hero') && !document.getElementById('web-projects-grid');
    if (isHomePage) {
        const observerOptions = {
            threshold: 0.05,
            rootMargin: "0px 0px -20px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible-section');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section:not(.no-animate)');
        sections.forEach(section => {
            section.classList.add('hidden-section');
            observer.observe(section);
        });
    }

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

    const navSections = document.querySelectorAll('section[id]');
    navSections.forEach(section => {
        navObserver.observe(section);
    });

    // --- Smooth Scrolling with Header Offset ---
    document.documentElement.style.setProperty('scroll-padding-top', '100px');

    // --- Live Visitor Counter ---
    function initVisitorCounter() {
        const counterElement = document.getElementById('visitor-count');
        if (!counterElement) return;

        const API_URL_BASE = 'https://countapi.mileshilliard.com/api/v1';
        const KEY = 'ibrahim_abdelgader_portfolio_visits';
        const CACHE_KEY = 'ibrahim_portfolio_visits_count';
        const SESSION_FLAG = 'ibrahim_portfolio_visited_session';

        // Check if visit was already recorded in this browser session
        const alreadyVisited = sessionStorage.getItem(SESSION_FLAG);
        const endpoint = alreadyVisited
            ? `${API_URL_BASE}/get/${KEY}`
            : `${API_URL_BASE}/hit/${KEY}`;

        // Immediate display from cache if available so UI doesn't flicker
        const cachedCount = localStorage.getItem(CACHE_KEY);
        let startVal = 0;
        if (cachedCount && !isNaN(parseInt(cachedCount, 10))) {
            startVal = parseInt(cachedCount, 10);
            counterElement.textContent = formatVisitorCount(startVal);
        }

        fetch(endpoint)
            .then(response => {
                if (!response.ok) throw new Error('Counter API response was not OK');
                return response.json();
            })
            .then(data => {
                if (data && typeof data.value === 'number') {
                    const finalCount = data.value;
                    sessionStorage.setItem(SESSION_FLAG, 'true');
                    localStorage.setItem(CACHE_KEY, finalCount.toString());
                    animateCount(counterElement, startVal, finalCount, 1200);
                }
            })
            .catch(error => {
                console.warn('Visitor counter fetch notice:', error);
                if (!cachedCount) {
                    counterElement.textContent = formatVisitorCount(1);
                }
            });
    }

    function formatVisitorCount(num) {
        return Number(num).toLocaleString('en-US');
    }

    function animateCount(element, start, end, duration) {
        if (start === end) {
            element.textContent = formatVisitorCount(end);
            return;
        }
        const startTime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);
            element.textContent = formatVisitorCount(current);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = formatVisitorCount(end);
            }
        }
        requestAnimationFrame(update);
    }

    // Initialize visitor counter on page load
    initVisitorCounter();
});


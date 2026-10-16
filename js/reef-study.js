/**
 * Reef Study Landing Page JavaScript
 * Handles interactivity, theme synchronization, web showcase tabs,
 * interactive financial calculator demo, and FAQ accordion.
 * Author: Ibrahim Abdelgader (Ibrahim588)
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Theme Synchronization (Dark/Light mode)
    // -------------------------------------------------------------
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('reef-theme-toggle');
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
    const mobileToggle = document.getElementById('reef-mobile-toggle');
    const navMenu = document.getElementById('reef-nav-menu');
    const navLinks = document.querySelectorAll('.reef-nav-link');

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
    // 3. Web Pages & Screens Showcase (Tabs Interactivity)
    // -------------------------------------------------------------
    const tabButtons = document.querySelectorAll('.reef-tab-btn');
    const screenBadge = document.getElementById('reef-screen-badge');
    const screenHeading = document.getElementById('reef-screen-heading');
    const screenDesc = document.getElementById('reef-screen-desc');
    const screenBullets = document.getElementById('reef-screen-bullets');
    const screenMockupBody = document.getElementById('reef-screen-mockup-body');

    const screensData = {
        wizard: {
            badge: "المعالج الذكي التفاعلي • 8 خطوات",
            heading: "معالج إعداد دراسة الجدوى خطوة بخطوة",
            desc: "رحلة تفاعلية استرشادية تقود رائد الأعمال الزراعي عبر 8 مراحل منهجية تبدأ من بيانات المشروع، النشاط، السوق، والتجهيزات، حتى التحليل المالي والاعتماد.",
            bullets: [
                "شريط تقدم ديناميكي يوضح نسبة الإنجاز والخطوة الحالية",
                "حقول مخصصة لكل نشاط ريفي مع قيم افتراضية استرشادية مدروسة",
                "تحقق فوري من صحة البيانات ومنع إدخال القيم غير المنطقية",
                "إمكانية حفظ المسودة والرجوع لاستكمال الدراسة في أي وقت"
            ],
            mockupHtml: `
                <div class="reef-mockup-screen-card">
                    <div class="reef-screen-title-bar">
                        <h4><i class="fa-solid fa-wand-magic-sparkles" style="color: var(--reef-accent);"></i> الخطوة 2: اختيار نوع النشاط</h4>
                        <span class="reef-screen-status">خطوة 2 من 8 (25%)</span>
                    </div>
                    <div class="reef-stepper-preview">
                        <div class="reef-step-chip done"><i class="fa-solid fa-check"></i> 1. البيانات</div>
                        <div class="reef-step-chip active"><i class="fa-solid fa-seedling"></i> 2. النشاط</div>
                        <div class="reef-step-chip">3. المنتج</div>
                        <div class="reef-step-chip">4. السوق</div>
                    </div>
                    <div style="background: var(--reef-bg-card); padding: 1rem; border-radius: var(--reef-radius-sm); border: 1px solid var(--reef-border); margin-bottom: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); display: flex; align-items: center; justify-content: center; color: var(--reef-accent);">
                                <i class="fa-solid fa-hive"></i>
                            </div>
                            <div>
                                <div style="font-weight: 700; font-size: 0.95rem;">إنتاج العسل ومنتجات النحل</div>
                                <div style="font-size: 0.75rem; color: var(--reef-text-secondary);">قطاع النحل والعسل • 40 كجم/شهر افتراضي</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.8rem; color: var(--reef-text-secondary);"><i class="fa-solid fa-circle-info"></i> تم تجهيز الأسئلة الفنية المتخصصة للنشاط</span>
                        <span style="font-size: 0.82rem; font-weight: 700; color: var(--reef-accent); cursor: pointer;">التالي <i class="fa-solid fa-arrow-left"></i></span>
                    </div>
                </div>
            `
        },
        dashboard: {
            badge: "لوحة التحكم المركزية • إحصائيات حية",
            heading: "لوحة المؤشرات ونظرة عامة على الدراسات",
            desc: "واجهة رئيسية أنيقة تلخص للمستخدم كافة دراسات الجدوى السابقة والجارية، مع بطاقات مؤشرات سريعة ونسب الإنجاز وزر مباشر لبدء دراسة جديدة.",
            bullets: [
                "عدادات إحصائية ذكية: إجمالي الدراسات، المكتملة، وقيد الإعداد",
                "بطاقة استئناف سريعة (Resume) لآخر دراسة جارية بضغطة زر واحدة",
                "سجل تفاعلي لآخر الدراسات مع إمكانية عرض التقرير أو التعديل",
                "تنبيه وتنويه استرشادي معتمد يوضح الطبيعة الاستشارية للتطبيق"
            ],
            mockupHtml: `
                <div class="reef-mockup-screen-card">
                    <div class="reef-screen-title-bar">
                        <h4><i class="fa-solid fa-chart-pie" style="color: var(--reef-accent);"></i> نظرة عامة على مشاريعي</h4>
                        <span class="reef-screen-status">تحديث مباشر</span>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
                        <div style="background: var(--reef-bg-card); padding: 0.75rem; border-radius: 8px; text-align: center; border: 1px solid var(--reef-border);">
                            <div style="font-size: 0.7rem; color: var(--reef-text-secondary);">إجمالي الدراسات</div>
                            <div style="font-size: 1.2rem; font-weight: 800; color: var(--reef-text-primary);">4</div>
                        </div>
                        <div style="background: var(--reef-bg-card); padding: 0.75rem; border-radius: 8px; text-align: center; border: 1px solid var(--reef-border);">
                            <div style="font-size: 0.7rem; color: var(--reef-accent);">مكتملة ومعتمدة</div>
                            <div style="font-size: 1.2rem; font-weight: 800; color: var(--reef-accent);">3</div>
                        </div>
                        <div style="background: var(--reef-bg-card); padding: 0.75rem; border-radius: 8px; text-align: center; border: 1px solid var(--reef-border);">
                            <div style="font-size: 0.7rem; color: var(--reef-amber);">قيد الإعداد</div>
                            <div style="font-size: 1.2rem; font-weight: 800; color: var(--reef-amber);">1</div>
                        </div>
                    </div>
                    <div style="background: var(--reef-bg-card); padding: 0.85rem; border-radius: 8px; border: 1px solid var(--reef-border); display: flex; align-items: center; justify-content: space-between;">
                        <div>
                            <div style="font-size: 0.88rem; font-weight: 700;">مشروع مناحل السدر البلدي</div>
                            <div style="font-size: 0.72rem; color: var(--reef-text-secondary);">صافي الربح المتوقع: 9,200 ر.س/شهر • الجاهزية: ممتاز (92%)</div>
                        </div>
                        <span style="font-size: 0.75rem; background: rgba(16,185,129,0.15); color: var(--reef-accent); padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700;">جاهز للطباعة</span>
                    </div>
                </div>
            `
        },
        financial: {
            badge: "المحرك المالي • حساب نقطة التعادل والسيناريوهات",
            heading: "الحاسبة المالية ونمذجة السيناريوهات",
            desc: "نواة حسابية متطورة تعالج التكاليف الرأسمالية والتشغيلية والإيرادات المتوقعة، مع حساب فوري لهامش الربح وفترة الاسترداد و3 سيناريوهات حساسية.",
            bullets: [
                "فصل دقيق بين التكاليف التأسيسية الثابتة والتكاليف التشغيلية الشهرية",
                "احتساب نقطة التعادل بالكمية والقيمة النقدية بدقة متناهية",
                "تحليل السيناريوهات التلقائي: التحفظي (70%)، المتوقع (100%)، والمتفائل (130%)",
                "عرض بياني لمؤشر استرداد رأس المال بالشهور والسنوات"
            ],
            mockupHtml: `
                <div class="reef-mockup-screen-card">
                    <div class="reef-screen-title-bar">
                        <h4><i class="fa-solid fa-calculator" style="color: var(--reef-accent);"></i> الخلاصة المالية لدراسة الجدوى</h4>
                        <span class="reef-screen-status">ريال سعودي (SAR)</span>
                    </div>
                    <div class="reef-preview-financial-calc" style="margin-bottom: 0.85rem;">
                        <div>
                            <div class="reef-calc-box-label">رأس المال التأسيسي</div>
                            <div class="reef-calc-box-val">42,500 <span style="font-size: 0.7rem;">ر.س</span></div>
                        </div>
                        <div>
                            <div class="reef-calc-box-label">الإيراد الشهري</div>
                            <div class="reef-calc-box-val">12,000 <span style="font-size: 0.7rem;">ر.س</span></div>
                        </div>
                        <div>
                            <div class="reef-calc-box-label">صافي الربح الشهري</div>
                            <div class="reef-calc-box-val" style="color: #10B981;">7,850 <span style="font-size: 0.7rem;">ر.س</span></div>
                        </div>
                    </div>
                    <div style="background: var(--reef-bg-card); padding: 0.75rem; border-radius: 8px; border: 1px solid var(--reef-border); font-size: 0.78rem; display: flex; justify-content: space-between;">
                        <span><i class="fa-solid fa-chart-line" style="color: var(--reef-accent);"></i> هامش الربح الصافي: <strong>65.4%</strong></span>
                        <span><i class="fa-solid fa-hourglass-half" style="color: var(--reef-gold);"></i> فترة الاسترداد: <strong>5.4 شهر</strong></span>
                    </div>
                </div>
            `
        },
        evaluation: {
            badge: "مصفوفة الامتثال • تقييم ذكي",
            heading: "أداة التقييم الذاتي ومؤشر الجاهزية",
            desc: "نظام تقييم داخلي يحلل مدخلات دراسة الجدوى وفق معايير برامج الدعم التنموي، ويمنح المشروع درجة ونسبة جاهزية مع نقاط القوة والمخاطر والتوصيات.",
            bullets: [
                "مؤشر جاهزية بنسبة مئوية ورتبة واضحة (ممتاز، جيد جداً، بحاجة لتحسين)",
                "تحليل مخاطر المشروع التشغيلية والتسويقية وتقديم حلول وقائية",
                "فحص توازن الأسعار والطاقة الإنتاجية مع المعدلات المعتمدة",
                "توصيات عملية مباشرة لتحسين فرص قبول الدراسة لدى برامج الدعم"
            ],
            mockupHtml: `
                <div class="reef-mockup-screen-card">
                    <div class="reef-screen-title-bar">
                        <h4><i class="fa-solid fa-award" style="color: var(--reef-gold);"></i> مؤشر الجاهزية والتقييم</h4>
                        <span class="reef-screen-status" style="background: rgba(16,185,129,0.2); color: #10B981;">ممتاز • 92%</span>
                    </div>
                    <div style="background: var(--reef-bg-card); padding: 0.85rem; border-radius: 8px; border: 1px solid var(--reef-border); margin-bottom: 0.75rem;">
                        <div style="font-size: 0.82rem; font-weight: 700; color: var(--reef-accent); margin-bottom: 0.35rem;"><i class="fa-solid fa-circle-check"></i> أبرز نقاط القوة:</div>
                        <div style="font-size: 0.75rem; color: var(--reef-text-secondary); line-height: 1.5;">هامش ربح صحي يتجاوز 50%، وتوفر خطة تشغيلية واضحة ومصادر مواد أولية محلية مضمونة.</div>
                    </div>
                    <div style="background: var(--reef-bg-card); padding: 0.85rem; border-radius: 8px; border: 1px solid var(--reef-border);">
                        <div style="font-size: 0.82rem; font-weight: 700; color: var(--reef-amber); margin-bottom: 0.35rem;"><i class="fa-solid fa-triangle-exclamation"></i> التوصية المباشرة:</div>
                        <div style="font-size: 0.75rem; color: var(--reef-text-secondary); line-height: 1.5;">تنويع منافذ البيع وإضافة المتجر الإلكتروني لرفع الإيرادات في مواسم الركود.</div>
                    </div>
                </div>
            `
        },
        pdf: {
            badge: "تقارير رسمية • PDF Export Service",
            heading: "مولّد ومستعرض تقرير الجدوى بصيغة PDF",
            desc: "محرك توليد تقارير احترافي مدمج ينسق بيانات الدراسة في وثيقة رسمية متكاملة بالعربية تشمل الجداول والمؤشرات، قابلة للحفظ والطباعة والمشاركة الفورية.",
            bullets: [
                "تنسيق طباعي احترافي بألوان وهوية بصرية أنيقة جاهزة للتقديم",
                "جداول تفصيلية للتكاليف الرأسمالية والتشغيلية والتدفقات النقدية",
                "مصفوفة التقييم والجدول الزمني للأنشطة والتوقيعات الرسمية",
                "تذييل رسمي بالإخلاء القانوني والتنويه الاسترشادي المعتمد"
            ],
            mockupHtml: `
                <div class="reef-mockup-screen-card">
                    <div class="reef-screen-title-bar">
                        <h4><i class="fa-solid fa-file-pdf" style="color: #EF4444;"></i> تقرير دراسة الجدوى الاسترشادية</h4>
                        <span class="reef-screen-status" style="background: rgba(239,68,68,0.15); color: #EF4444;">PDF Ready</span>
                    </div>
                    <div style="border: 1px dashed var(--reef-border); padding: 1.25rem; border-radius: 8px; text-align: center; background: var(--reef-bg-card); margin-bottom: 0.75rem;">
                        <i class="fa-solid fa-file-invoice" style="font-size: 2.2rem; color: var(--reef-accent); margin-bottom: 0.5rem;"></i>
                        <div style="font-weight: 700; font-size: 0.95rem;">دراسة جدوى: إنتاج العسل ومنتجات النحل</div>
                        <div style="font-size: 0.75rem; color: var(--reef-text-secondary); margin-top: 0.25rem;">وثيقة استرشادية من 4 صفحات شاملة الجداول المالية والتقييم</div>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button style="flex: 1; padding: 0.5rem; background: var(--reef-gradient-primary); color: white; border: none; border-radius: 6px; font-size: 0.8rem; font-weight: 700; cursor: pointer;"><i class="fa-solid fa-download"></i> تحميل PDF</button>
                        <button style="flex: 1; padding: 0.5rem; background: var(--reef-bg-card); color: var(--reef-text-primary); border: 1px solid var(--reef-border); border-radius: 6px; font-size: 0.8rem; font-weight: 700; cursor: pointer;"><i class="fa-solid fa-print"></i> طباعة فورية</button>
                    </div>
                </div>
            `
        },
        sectors: {
            badge: "دليل الأنشطة • قاعدة بيانات ريفية متكاملة",
            heading: "دليل القطاعات والأنشطة الريفية المدعومة",
            desc: "دليل استكشافي شامل يغطي أشهر الأنشطة المؤهلة لبرامج الدعم التنموي مع بطاقات تفصيلية للأدوات والمعدات والتكاليف المعيارية لكل نشاط.",
            bullets: [
                "قطاعات متنوعة: العسل والنحل، البن، الورود والنباتات العطرية، المخبوزات، المربيات",
                "قوائم نموذجية بالمعدات والآلات المطلوبة لكل مهنة زراعية أو تحويلية",
                "بيانات معيارية لأسعار المواد الخام وحجم الإنتاج التقديري",
                "إمكانية تخصيص أي نشاط أو إضافة أنشطة غير مدرجة بكل حرية"
            ],
            mockupHtml: `
                <div class="reef-mockup-screen-card">
                    <div class="reef-screen-title-bar">
                        <h4><i class="fa-solid fa-layer-group" style="color: var(--reef-accent);"></i> دليل الأنشطة الريفية المعتمدة</h4>
                        <span class="reef-screen-status">+10 أنشطة</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;">
                        <div style="background: var(--reef-bg-card); padding: 0.75rem; border-radius: 8px; border: 1px solid var(--reef-border); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fa-solid fa-mug-hot" style="color: var(--reef-gold); font-size: 1.1rem;"></i>
                            <div>
                                <div style="font-size: 0.8rem; font-weight: 700;">زراعة وتجفيف البن</div>
                                <div style="font-size: 0.68rem; color: var(--reef-text-secondary);">المحاصيل الواعدة</div>
                            </div>
                        </div>
                        <div style="background: var(--reef-bg-card); padding: 0.75rem; border-radius: 8px; border: 1px solid var(--reef-border); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fa-solid fa-spa" style="color: var(--reef-accent); font-size: 1.1rem;"></i>
                            <div>
                                <div style="font-size: 0.8rem; font-weight: 700;">الورد والنباتات العطرية</div>
                                <div style="font-size: 0.68rem; color: var(--reef-text-secondary);">تقطير واستخلاص الزيوت</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-tab');
            const data = screensData[key];
            if (!data) return;

            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (screenBadge) screenBadge.textContent = data.badge;
            if (screenHeading) screenHeading.textContent = data.heading;
            if (screenDesc) screenDesc.textContent = data.desc;

            if (screenBullets) {
                screenBullets.innerHTML = '';
                data.bullets.forEach(bText => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fa-solid fa-check"></i> <span>${bText}</span>`;
                    screenBullets.appendChild(li);
                });
            }

            if (screenMockupBody) {
                screenMockupBody.innerHTML = data.mockupHtml;
            }
        });
    });

    // -------------------------------------------------------------
    // 4. Interactive Live Financial Calculator Demo on Page
    // -------------------------------------------------------------
    const calcCostInput = document.getElementById('demo-calc-cost');
    const calcRevenueInput = document.getElementById('demo-calc-revenue');
    const calcOutProfit = document.getElementById('demo-calc-profit');
    const calcOutMargin = document.getElementById('demo-calc-margin');
    const calcOutBreakeven = document.getElementById('demo-calc-breakeven');

    function updateDemoCalc() {
        if (!calcCostInput || !calcRevenueInput) return;

        const cost = parseFloat(calcCostInput.value) || 0;
        const revenue = parseFloat(calcRevenueInput.value) || 0;
        const profit = revenue - cost;
        const margin = revenue > 0 ? ((profit / revenue) * 100).toFixed(1) : 0;
        const breakevenRatio = revenue > 0 ? ((cost / revenue) * 100).toFixed(0) : 0;

        if (calcOutProfit) {
            calcOutProfit.textContent = `${profit.toLocaleString('en-US')} ر.س`;
            calcOutProfit.style.color = profit >= 0 ? '#10B981' : '#EF4444';
        }
        if (calcOutMargin) {
            calcOutMargin.textContent = `${margin}%`;
        }
        if (calcOutBreakeven) {
            calcOutBreakeven.textContent = `${cost.toLocaleString('en-US')} ر.س (${breakevenRatio}%)`;
        }
    }

    if (calcCostInput && calcRevenueInput) {
        calcCostInput.addEventListener('input', updateDemoCalc);
        calcRevenueInput.addEventListener('input', updateDemoCalc);
        updateDemoCalc();
    }

    // -------------------------------------------------------------
    // 5. FAQ Accordion Toggle
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.reef-faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.reef-faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // -------------------------------------------------------------
    // 6. Active Scrollspy for Navigation Links
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset + 120;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.reef-nav-link[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
});

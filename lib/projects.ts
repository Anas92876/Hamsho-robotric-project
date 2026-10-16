// Project portfolio — generated from the client's project folders (Arabic write-ups + English translation).
// Images live in public/images/projects/<slug>/N.webp; the first image is the cover.

export type ProjectCategory = 'solar' | 'hangars' | 'caravans' | 'sports' | 'tanks' | 'fencing' | 'lighting' | 'ironwork' | 'waste';

export type Project = {
  slug: string;
  code: string;
  category: ProjectCategory;
  /** Solar projects only — fixed or tracking mounts */
  mount?: 'fixed' | 'tracking';
  title: string;
  titleEn: string;
  body: string[];
  bodyEn: string[];
  features: { t: string; d: string; tEn: string; dEn: string }[];
  images: { src: string; w: number; h: number }[];
};

export const projectCategories: { id: ProjectCategory; title: string; titleEn: string }[] = [
  { id: 'solar',    title: 'قواعد وهياكل الطاقة الشمسية', titleEn: 'Solar structures' },
  { id: 'hangars',  title: 'الهناجر والإنشاءات المعدنية', titleEn: 'Hangars & steel structures' },
  { id: 'caravans', title: 'الكرفانات والمباني الجاهزة',  titleEn: 'Caravans & prefab buildings' },
  { id: 'sports',   title: 'الملاعب والمنشآت الرياضية',  titleEn: 'Sports facilities' },
  { id: 'tanks',    title: 'الخزانات والصهاريج',         titleEn: 'Tanks & tankers' },
  { id: 'fencing',  title: 'الأسوار والحمايات الحديدية', titleEn: 'Fencing & security' },
  { id: 'lighting', title: 'أعمدة الإنارة',               titleEn: 'Lighting poles' },
  { id: 'ironwork', title: 'أعمال المنجور',               titleEn: 'Ironwork' },
  { id: 'waste',    title: 'حاويات النفايات',             titleEn: 'Waste containers' },
];

export const projects: Project[] = [
  {
    "slug": "ham-slr-001",
    "code": "HAM-SLR-001",
    "category": "solar",
    "mount": "tracking",
    "title": "تصنيع وتشييد القواعد والهياكل المعدنية المائلة لمنظومات الطاقة الشمسية الضخمة",
    "titleEn": "Tilted steel mounting structures for large solar arrays",
    "body": [
      "تُنفّذ شركة حمشو مشاريع التشييد والتصنيع الهندسي المتقدم لقواعد وهياكل الطاقة الشمسية الأرضية والميدانية الضخمة (Ground-Mounted Solar Mounting Systems). يهدف هذا المشروع إلى تصميم وبناء هيكل جملوني فولاذي عالي الصلابة، مدهون باللون الأزرق المانع للصدأ، ومحسوب الزوايا هيدروليكياً لتحقيق أقصى امتصاص للأشعة الشمسية وتأمين تثبيت آمن لمئات الألواح الشمسية. يتضمن العمل استخدام الأوناش والرافعات الهيدروليكية لتركيب الأجنحة والجسور الضخمة على القواعد الصخرية والأرضية المباشرة."
    ],
    "bodyEn": [
      "Hamsho engineers and builds large ground-mounted solar structures. This project designs and erects a high-rigidity steel truss frame, painted rust-resistant blue, with angles calculated for maximum sun capture and secure fixing of hundreds of panels. Cranes were used to install the large wings and beams directly on rock and ground footings."
    ],
    "features": [
      {
        "t": "هيكل جملوني فولاذي عريض البحور",
        "d": "تصميم شبكي متين من المقاطع والتيوبات الحديدية المتقاطعة للتعامل مع الأحمال الريحية العالية وتوفير دعم كامل للمساحات الكبيرة.",
        "tEn": "Wide-span heavy steel truss frame",
        "dEn": "A strong lattice of crossed steel sections and tubes that handles high wind loads and supports large areas."
      },
      {
        "t": "زاوية ميل هندسية مدروسة",
        "d": "ضبط زوايا ميل القواعد الشمسية وفق خطوط الطول والعرض الجغرافية لضمان كفاءة توليد كهربائية عالية طوال أيام السنة.",
        "tEn": "Engineered tilt angle",
        "dEn": "Tilt set for the site's latitude to keep generation efficient all year round."
      },
      {
        "t": "طلاء حماية أفراني باللون الأزرق",
        "d": "حماية كافة القواعد والجسور الفولاذية بأصباغ مجلفنة ومدهونة بحرارة عالية لمقاومة الرطوبة، الأمطار، والتآكل الأرضي.",
        "tEn": "Blue baked protective coating",
        "dEn": "All bases and beams coated at high temperature to resist moisture, rain and ground corrosion."
      },
      {
        "t": "رفع وتركيب باستعمال رافعات الكرين",
        "d": "تنفيذ عمليات تجميع الجمالونات والمقاطع العلوية الضخمة وتثبيتها بدقة باستخدام شاحنات الكرين الميدانية.",
        "tEn": "Crane lifting and installation",
        "dEn": "Large trusses and upper sections assembled and fixed precisely with site crane trucks."
      },
      {
        "t": "تأريض وثبات على التضاريس الصخرية",
        "d": "تثبيت القواعد الفولاذية بمرابط وخرسانات أرضية صلبة لتتحمل العواصف الميدانية وتغيرات التربة.",
        "tEn": "Anchored on rocky terrain",
        "dEn": "Steel bases fixed with anchors and solid concrete to withstand storms and soil movement."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-001/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-001/2.webp",
        "w": 1445,
        "h": 1088
      },
      {
        "src": "/images/projects/ham-slr-001/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-001/4.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-slr-002",
    "code": "HAM-SLR-002",
    "category": "solar",
    "mount": "tracking",
    "title": "تصنيع وتشييد القواعد الهيكلية المتحركة والدوارة لمنظومات الطاقة الشمسية فوق الأسطح",
    "titleEn": "Rotating rooftop solar tracking structures",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو القواعد والمحاور الفولاذية الدوارة والمتحركة لمنظومات الطاقة الشمسية الضخمة فوق أسطح المباني التجارية والمنشآت السكنية (Rooftop Tracking & Rotatable Solar Structure Systems). يعتمد المشروع على بناء جمالونات وشبكات فولاذية متينة مدهونة باللون الأزرق المانع للصدأ، ومثبتة على المحاور الدوارة لضمان تتبع مسار الشمس وتأمين زاوية الامتصاص الأمثل طوال ساعات النهار، مما يرفع كفاءة توليد الكهرباء النظيفة بنسب عالية جداً مقارنة بالأنظمة الثابتة."
    ],
    "bodyEn": [
      "Hamsho designs and builds rotating steel solar mounts and axes for large arrays on commercial and residential rooftops. The project builds strong blue, rust-resistant steel trusses on rotating axes that follow the sun for the best capture angle all day, raising clean-power output well above fixed systems."
    ],
    "features": [
      {
        "t": "هياكل دوارة وتتبع حركي",
        "d": "تصميم وتصنيع إطارات جملونية مجهزة بحلقات ومحاور دوران هيدروليكية وميكانيكية لتوجيه مصفوفات الألواح الشمسية.",
        "tEn": "Rotating solar tracker frames",
        "dEn": "Truss frames with mechanical and hydraulic pivots that steer the panel arrays."
      },
      {
        "t": "استغلال متكامل لأسطح المباني والمنشآت",
        "d": "تثبيت القواعد الهيكلية الثقيلة فوق الصبات الخرسانية لأسطح المباني المرتفعة بأقصى معايير الأمان والسلامة الهيكلية.",
        "tEn": "Full use of rooftops",
        "dEn": "Heavy structures fixed on concrete roof slabs of tall buildings to the highest safety standards."
      },
      {
        "t": "شبكات جمالونية واسعة البحور",
        "d": "حوامل حديدية شبكية مدهونة بالأزرق لحمل أعداد كبيرة من صفوف الألواح الشمسية وتوزيع أحمالها بانتظام على السطح.",
        "tEn": "Wide-span truss grids",
        "dEn": "Blue lattice supports carry many rows of panels and spread their load evenly over the roof."
      },
      {
        "t": "طلاء فرن مقاوم للتآكل والظروف الجوية",
        "d": "حماية كافة التيوبات والجسور الحديدية بطلاء أفراني حراري مقاوم للرطوبة، الأمطار، والرياح المرتفعة.",
        "tEn": "Corrosion- and weather-resistant baked paint",
        "dEn": "All tubes and beams protected against moisture, rain and high winds."
      },
      {
        "t": "رفع كفاءة التوليد الكهربائي",
        "d": "الاستفادة المباشرة من نظام التتبع لزيادة إنتاجية الطاقة الشمسية للمصانع، المزارع، والمنشآت الكبرى.",
        "tEn": "Higher power output",
        "dEn": "Tracking directly increases solar yield for factories, farms and large facilities."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-002/1.webp",
        "w": 1447,
        "h": 1087
      },
      {
        "src": "/images/projects/ham-slr-002/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-002/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-slr-003",
    "code": "HAM-SLR-003",
    "category": "solar",
    "mount": "tracking",
    "title": "تصنيع وتثبيت القواعد الفولاذية المركزية الدوارة لمنظومات الطاقة الشمسية الأرضية",
    "titleEn": "Central rotating steel mounts for ground solar systems",
    "body": [
      "تُصنّع وتُثبّت شركة حمشو القواعد والهياكل الفولاذية الدوارة ذات المحور السنتر المزدوج (Single & Dual-Axis Heavy Solar Trackers) المخصصة للمحطات والمزارع الشمسية الأرضية. يعتمد هذا المشروع على بناء إطارات وجملونات شبكية زرقاء وسوداء مرتفعة ومثبتة على برج سنتر مسنّن ذو حركة دورانية 360 درجة، مما يسمح للألواح الشمسية بالتتبع الآلي والكامل لمسار الشمس طوال اليوم، وتحقيق أقصى استغلال للطاقة الشمسية في التضاريس الزراعية والصخرية الصعبة."
    ],
    "bodyEn": [
      "Hamsho fabricates and installs heavy single- and dual-axis solar trackers for ground-mounted plants and solar farms. The project builds raised blue and black lattice frames on a geared central tower that turns 360°, so the panels follow the sun automatically all day — making the most of solar energy on difficult farmland and rocky terrain."
    ],
    "features": [
      {
        "t": "عمود ومحور سنتر دوار مسنّن",
        "d": "برج وقاعدة حديدية مركزية مزودة بمسننات ومحرك دوران هيدروليكي يضمن تحريك المصفوفة الشمسية بسلاسة وثبات.",
        "tEn": "Geared central rotary pillar",
        "dEn": "A central steel tower with gears and a drive motor that moves the array smoothly and steadily."
      },
      {
        "t": "هيكل جملوني متشعّب عالي المتانة",
        "d": "أجنحة وجسور شبكية من التيوبات والجسور الفولاذية المدهونة بالأزرق والأسود لامتصاص الصدمات والاهتزازات الناتجة عن الرياح القوية.",
        "tEn": "Branched heavy-duty truss frame",
        "dEn": "Blue and black steel wings and beams that absorb shocks and vibration from strong winds."
      },
      {
        "t": "تأريض وتثبيت صخري متين",
        "d": "صب وتثبيت القواعد المركزية للبرج على صبات خرسانية وقواعد صخرية ضخمة لضمان الاتزان الهندسي.",
        "tEn": "Solid rock anchoring",
        "dEn": "The central tower base is cast and fixed on large concrete and rock footings for engineered balance."
      },
      {
        "t": "شاسيهات مجلفنة لتركيب الألواح",
        "d": "سكك حديدية مجلفنة ممتدة على كامل المساحة لسهولة ورصف الألواح الشمسية وتثبيتها بمرابط ألومنيوم.",
        "tEn": "Galvanised panel rails",
        "dEn": "Galvanised rails across the whole frame for easy panel layout, fixed with aluminium clamps."
      },
      {
        "t": "إشراف وطابع شركة حمشو",
        "d": "كادر هندسي متخصص يتابع اللحامات والتجهيزات الميدانية مع طباعة شعار \"شركة حمشو\" على الواجهات.",
        "tEn": "Hamsho supervision and branding",
        "dEn": "A specialist engineering team oversees welding and site work, with the Hamsho logo on the structure."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-003/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-003/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-003/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-003/4.webp",
        "w": 1800,
        "h": 810
      }
    ]
  },
  {
    "slug": "ham-slr-004",
    "code": "HAM-SLR-004",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الهياكل والقواعد الفولاذية الميدانية لمزارع الطاقة الشمسية الضخمة",
    "titleEn": "Steel ground structures for large solar farms",
    "body": [
      "تُنفّذ شركة حمشو المشاريع المتكاملة لتصنيع وتشييد مزارع وحقول الطاقة الشمسية الميدانية واسعة النطاق (Large-Scale Solar Farm Ground Structures). يتضمن المشروع صب القواعد الخرسانية الأرضية المسلحة (Concrete Footings) وتثبيت شاسيهات وهياكل حديدية مدهونة بطلاء أسود عالي المقاومة للصدأ والتآكل. جرى تصميم زوايا الميل واختبار التثبيت الميداني تحت إشراف مهندسي وفنيي شركة حمشو لضمان أقصى قدر من التثبيت لمصفوفات الألواح ومواجهة الرياح الشديدة والعوامل الجوية المتغيرة."
    ],
    "bodyEn": [
      "Hamsho delivers complete large-scale solar farm structures. The project includes casting reinforced concrete footings and installing steel frames painted in a highly rust-resistant black. Tilt angles were designed and site fixing tested under the supervision of Hamsho engineers and technicians to secure the arrays against strong winds and changing weather."
    ],
    "features": [
      {
        "t": "تأسيس خرساني أرضي متين",
        "d": "صب قواعد خرسانية مكعبة ومثبتة ببراغي صلبة عالية التحمل لربط الهياكل الفولاذية بالأرض مباشرة وضمان استقرارها الإنشائي.",
        "tEn": "Solid concrete pad anchoring",
        "dEn": "Cast concrete blocks with heavy-duty bolts tie the steel frames directly to the ground."
      },
      {
        "t": "هياكل وشاسيهات حديدية طويلة امتدادية",
        "d": "تصميم صفوف امتدادية من الجسور والتيوبات الفولاذية المدهونة باللون الأسود لتتسع لآلاف الألواح الشمسية متراصة بانتظام.",
        "tEn": "Long continuous steel frames",
        "dEn": "Extended rows of black-painted steel beams and tubes to carry thousands of panels in order."
      },
      {
        "t": "زاوية توجيه مائلة ومدروسة جغرافياً",
        "d": "ضبط ميل القواعد الفولاذية بما يحقق الاستفادة الأقصى من الإشعاع الشمسي المباشر طوال فصول السنة.",
        "tEn": "Geographically engineered tilt",
        "dEn": "Frames tilted to capture the most direct sunlight in every season."
      },
      {
        "t": "تركيب ميداني احترافي بإشراف هندسي",
        "d": "تنظيم أعمال التثبيت والمحاذاة للألواح الشمسية باستخدام سحابات ومرابط تثبيت ألومنيوم سريعة وسلسة.",
        "tEn": "Professional installation under supervision",
        "dEn": "Panels fixed and aligned with aluminium rails and clamps for fast, smooth installation."
      },
      {
        "t": "تحمل الظروف البيئية الصعبة",
        "d": "حماية كاملة للهياكل والقواعد ضد تآكل التربة والرطوبة والعواصف الميدانية الجافة.",
        "tEn": "Built for harsh conditions",
        "dEn": "Structures and bases fully protected against soil corrosion, moisture and dry storms."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-004/1.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-slr-004/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-004/3.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-slr-004/4.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-slr-005",
    "code": "HAM-SLR-005",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد القواعد الفولاذية الخضراء المائلة والأسوار الميدانية لمزارع الطاقة الشمسية",
    "titleEn": "Green tilted solar mounts and perimeter fencing for solar farms",
    "body": [
      "تُنفّذ شركة حمشو المزارع والمشاريع الشمسية المتكاملة، بدءاً من تصنيع الشاسيهات والقواعد الفولاذية المائلة وصولاً إلى السياج والشبك الميداني المحيط (Solar Farm Ground Structures & Perimeter Fencing). يركز هذا المشروع على بناء إطارات وشاسيهات مدهونة باللون الأخضر المقاوم للصدأ والتآكل، ومثبتة على قواعد أرضية مرتفعة لضمان زاوية الميل المثالية ورصف مصفوفات الألواح الشمسية بدقة ودون ظلال. كما يتضمن العمل تجهيز الموقع بسياج وشبك حماية مجلفن يضمن الأمان الميداني الكامل للمزرعة."
    ],
    "bodyEn": [
      "Hamsho delivers complete solar farms, from fabricating tilted steel frames and bases to the perimeter fencing. This project builds frames painted rust-resistant green, fixed on raised ground bases for the ideal tilt and precise, shade-free panel rows. The site is also enclosed with galvanised fencing for full security."
    ],
    "features": [
      {
        "t": "هياكل وشاسيهات فولاذية باللون الأخضر المقاوم",
        "d": "تصنيع وتثبيت مقاطع حديدية صلبة مدهونة بطلاء حراري أخضر لمقاومة الرطوبة والعوامل الجوية الميدانية.",
        "tEn": "Green-painted steel frames",
        "dEn": "Solid steel sections in heat-cured green paint to resist moisture and weather."
      },
      {
        "t": "تثبيت أرضي مرتفع على قواعد صفائحية",
        "d": "تركيب أرجل وقواعد مرتفعة مثبتة على الأرض لرفع الصفوف وتجنب تجمع الأتربة والمياه.",
        "tEn": "Raised ground mounting on base plates",
        "dEn": "Raised legs and bases lift the rows to avoid dust and standing water."
      },
      {
        "t": "تجميع ورصف مصفوفات شمسية واسعة",
        "d": "تثبيت مرابط وسكك ألومنيوم دقيقة تتسع لصفوف عديدة من الألواح الشمسية عالية الكفاءة.",
        "tEn": "Large array assembly",
        "dEn": "Precise aluminium rails and clamps carry many rows of high-efficiency panels."
      },
      {
        "t": "تجهيز السياج الميداني وأسوار الحماية",
        "d": "تركيب شبك وسياج سلكي مجلفن باللون الأخضر لإحاطة وحماية محطة الطاقة الشمسية.",
        "tEn": "Perimeter fencing",
        "dEn": "Green galvanised wire fencing encloses and protects the solar plant."
      },
      {
        "t": "إشراف ميداني وعلامة شركة حمشو التجارية",
        "d": "تنفّذ الأعمال تحت قيادة فريق متخصص مع تعليق بانر ولافتة \"شركة حمشو\" المعتمدة على الواجهات الشمسية.",
        "tEn": "Site supervision and Hamsho branding",
        "dEn": "Work led by a specialist team, with the approved Hamsho sign displayed on site."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-005/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-005/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-005/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-005/4.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-005/5.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-slr-006",
    "code": "HAM-SLR-006",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتثبيت القواعد والهياكل الفولاذية المجلفنة الميدانية لمشاريع الطاقة الشمسية",
    "titleEn": "Galvanised steel ground mounts for solar projects",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو القواعد والهياكل الفولاذية الميدانية المزدوجة والمجلفنة المخصصة لمحطات الطاقة الشمسية الضخمة (Galvanized Ground Mounting Solar Structure Systems). يعتمد هذا المشروع على تصنيع وتجميع شاسيهات وجملونات شبكية مجلفنة بالكامل لمقاومة الصدأ والتآكل، ومثبتة على قواعد خرسانية مسلحة ممتدة فوق التربة المستوية. تضمن هذه القواعد توزيع الأحمال بانتظام وتوفير زاوية تثبيت ثابتة وآمنة ترفع كفاءة امتصاص الإشعاع الشمسي وتتحمل سرعات الرياح والعوامل البيئية الميدانية."
    ],
    "bodyEn": [
      "Hamsho designs and builds double galvanised steel ground mounts for large solar plants. The project fabricates fully galvanised frames and lattice trusses fixed on reinforced concrete bases over level ground, spreading loads evenly and giving a fixed, secure angle that raises solar yield and withstands wind and site conditions."
    ],
    "features": [
      {
        "t": "هياكل فولاذية مجلفنة بالكامل",
        "d": "تصنيع المقاطع والجسور العرضية من الفولاذ المجلفن المقاوم للرطوبة والصدأ لضمان عمر افتراضي طويل للمحطة.",
        "tEn": "Hot-dip galvanised frames",
        "dEn": "Sections and cross beams in galvanised steel that resists moisture and rust for a long plant life."
      },
      {
        "t": "تأسيس على قواعد خرسانية صلبة",
        "d": "تثبيت الأعمدة الفولاذية الرئيسية على مكعبات خرسانية مسلحة ومصبوبة ميدانياً لتوفير ثبات إنشائي عالي.",
        "tEn": "Solid concrete block bases",
        "dEn": "Main steel posts fixed on reinforced concrete cubes cast on site for high stability."
      },
      {
        "t": "تصميم جملوني مزدوج ومحكم",
        "d": "دعم صفوف الألواح الشمسية بشبكة من الدعامات المائلة والمتقاطعة التي تمتص الاهتزازات والأحمال الريحية.",
        "tEn": "Tight double-truss design",
        "dEn": "A network of diagonal and cross braces supports the panel rows and absorbs vibration and wind loads."
      },
      {
        "t": "رصف امتدادي متناسق للألواح",
        "d": "تركيب سكك ألومنيوم ومرابط تثبيت حركية لصف وتأمين المصفوفات الشمسية بسرعة ودقة عالية.",
        "tEn": "Consistent panel rows",
        "dEn": "Aluminium rails and clamps align and secure the arrays quickly and accurately."
      },
      {
        "t": "إحاطة وتأمين السياج الميداني",
        "d": "تزويد موقع محطة الطاقة الشمسية بسياج شبكي مجلفن يوفر الحماية والأمان لكامل المنظومة والمعدات الملحقة.",
        "tEn": "Perimeter fencing",
        "dEn": "The plant is enclosed with galvanised mesh fencing to protect the whole system and equipment."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-006/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-006/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-006/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-006/4.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-006/5.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-slr-007",
    "code": "HAM-SLR-007",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتثبيت القواعد والهياكل المعدنية المجلفنة لمزارع الطاقة الشمسية الميدانية",
    "titleEn": "Galvanised steel ground mounts for open solar farms",
    "body": [
      "تُصمّم وتصنّع شركة حمشو أنظمة القواعد والهياكل الفولاذية المجلفنة الميدانية المخصصة لمزارع ومحطات الطاقة الشمسية المفتوحة (Galvanized Ground-Mounted Solar Racking Systems). يعتمد هذا المشروع على بناء شاسيهات وجسور فولاذية مجلفنة على الساخن بالكامل، مجمعة بمرابط ومسامير صلبة ومثبتة على أوتاد وقواعد خرسانية أرضية. يضمن هذا التصميم مقاومة فائقة للصدأ والتآكل وعوامل الجو القاسية، بالإضافة إلى تحمّل العواصف والأحمال الريحية الميدانية وتوفير زوايا ميل هندسية تضمن أعلى كفاءة لامتصاص الأشعة الشمسية."
    ],
    "bodyEn": [
      "Hamsho designs and fabricates galvanised steel ground-mount systems for open solar farms and plants. The project builds fully hot-dip galvanised frames and beams, assembled with heavy fasteners and fixed on ground stakes and concrete bases — for excellent rust and weather resistance, storm and wind tolerance, and engineered tilt angles for the highest solar capture."
    ],
    "features": [
      {
        "t": "هياكل وشاسيهات مجلفنة بالكامل",
        "d": "استخدام مقاطع وجسور حديدية مجلفنة بعناية لتوفير الحماية المباشرة ضد الصدأ والرطوبة الميدانية.",
        "tEn": "Hot-dip galvanised racking",
        "dEn": "Carefully galvanised sections and beams give direct protection against rust and site moisture."
      },
      {
        "t": "تثبيت أرضي بأوتاد وقواعد خرسانية",
        "d": "تثبيت أعمدة الشاسيهات على أوتاد أرضية ومكعبات خرسانية مسلحة لضمان الثبات والاتزان الهيكلي.",
        "tEn": "Ground stakes and concrete bases",
        "dEn": "Frame posts fixed on ground stakes and reinforced concrete cubes for stability and balance."
      },
      {
        "t": "زاوية ميل هندسية مدروسة",
        "d": "تحديد درجة ميل مصفوفات الألواح الشمسية وفق الموقع الجغرافي لتحقيق أقصى توليد للطاقة الكهربائية النظيفة.",
        "tEn": "Engineered tilt angle",
        "dEn": "Array tilt set for the site's location to generate the most clean power."
      },
      {
        "t": "تجميع ميكانيكي سريع ودقيق",
        "d": "تركيب شاسيهات الألواح باستخدام مسامير ومرابط ألومنيوم مخصصة تضمن التراصف الدقيق وسهولة الصيانة الميدانية.",
        "tEn": "Fast, precise mechanical assembly",
        "dEn": "Frames assembled with dedicated aluminium bolts and clamps for accurate alignment and easy maintenance."
      },
      {
        "t": "تنفيذ وإشراف كادر شركة حمشو",
        "d": "تنفيذ كامل الأعمال الميدانية بأعلى معايير السلامة المهنية تحت إشراف مهندسي وفنيي الشركة.",
        "tEn": "Executed and supervised by Hamsho",
        "dEn": "All site work carried out to high safety standards under Hamsho engineers and technicians."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-007/1.webp",
        "w": 1446,
        "h": 1088
      },
      {
        "src": "/images/projects/ham-slr-007/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-007/3.webp",
        "w": 1087,
        "h": 1446
      }
    ]
  },
  {
    "slug": "ham-slr-008",
    "code": "HAM-SLR-008",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد القواعد الهيكلية المركزية المائلة والدوارة لمنظومات الطاقة الشمسية الميدانية",
    "titleEn": "Tilted central-tower tracking structures for ground solar systems",
    "body": [
      "تُصمّم وتصنّع شركة حمشو أنظمة القواعد والأبراج الفولاذية المركزية الدوارة (Heavy Duty Central Tracker Structures) المخصصة للمشروعات والمزارع الشمسية الميدانية. يهدف هذا المشروع إلى بناء هيكل جملوني شبكي ضخم مثبت على عمود مركز وسنتر دوران رئيسي. يجري طلاء الهيكل باللون الأزرق المانع للصدأ، وتثبيته فوق قواعد خرسانية مسلحة ومصبوبة في الأرض المباشرة لضمان أقصى درجات الاتزان الهيكلي، ومقاومة الرياح القوية، وتأمين التتبع الميكانيكي المستمر للشمس."
    ],
    "bodyEn": [
      "Hamsho designs and fabricates heavy-duty central tracker towers for ground solar projects and farms. The project builds a large lattice truss on a central post and main rotation hub, painted rust-resistant blue and fixed on reinforced concrete footings cast into the ground for structural balance, high wind resistance and continuous mechanical sun tracking."
    ],
    "features": [
      {
        "t": "برج وعمود سنتر محوري رئيسي",
        "d": "تصميم عمود فولاذي صلب يحمل كتل وأباعين الجمالونات واسعة البحور بثبات مرتفع.",
        "tEn": "Heavy central supporting tower",
        "dEn": "A solid steel column that carries the wide-span truss sections with high stability."
      },
      {
        "t": "شبكة جملونية مائلة وعريضة",
        "d": "تصنيع مقاطع وتيوبات حديدية متقاطعة توفر حوامل صلبة لصفاف كبيرة من الألواح الشمسية.",
        "tEn": "Broad tilted lattice grid",
        "dEn": "Crossed steel sections and tubes form rigid supports for large rows of panels."
      },
      {
        "t": "تأسيس على قواعد خرسانية أرضية ضخمة",
        "d": "تثبيت البرج الفولاذي الرئيسي بقاعدة خرسانية مسلحة ممتدة تحت مستوى التربة لمنع الانزلاق وتشتيت أوزان المنظومة.",
        "tEn": "Large concrete foundation",
        "dEn": "The main tower sits on a reinforced concrete base below ground level to prevent sliding and spread the system's weight."
      },
      {
        "t": "طلاء حماية أفراني باللون الأزرق",
        "d": "طلاء كامل أجزاء الجمالونات والسلالم الصعودية بأصباغ أفرانية مقاومة للرطوبة وتآكل العوامل الجوية الميدانية.",
        "tEn": "Blue baked protective coating",
        "dEn": "All trusses and access ladders coated to resist moisture and weathering."
      },
      {
        "t": "تسهيل خدمات الصيانة والتركيب",
        "d": "تزويد الهيكل بسلالم صعود جانبية وممرات خدمة لتسهيل عمليات تنظيف الألواح وصيانتها من قبل الفنيين.",
        "tEn": "Easy maintenance and installation",
        "dEn": "Side ladders and service walkways let technicians clean and maintain the panels."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-008/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-008/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-008/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-008/4.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-008/5.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-slr-009",
    "code": "HAM-SLR-009",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الهياكل القواعدية الفولاذية المائلة لمزارع الطاقة الشمسية في المناطق الجبلية والوعرة",
    "titleEn": "Tilted steel solar structures for mountain and rough terrain",
    "body": [
      "تُصمّم وتنفّذ شركة حمشو القواعد والهياكل الإنشائية الفولاذية المخصصة لمحطات الطاقة الشمسية في المناطق الجبلية والتضاريس الوعرة والمائلة (Mountain & Slope Solar Panel Structure Systems). يعتمد المشروع على تركيب حوامل وشاسيهات حديدية مرتفعة ومجلفنة، مجهزة بدعامات طويلة للتعامل مع انحدارات التربة والصخور، مما يوفر تثبيتاً هندسياً آمناً لمصفوفات الألواح الشمسية ومقاومة عالية للعواصف والرياح الجبلية الشديدة مع تحقيق زاوية امتصاص مثالية لضوء الشمس."
    ],
    "bodyEn": [
      "Hamsho designs and builds steel solar structures for plants on mountainous, rough and sloping terrain. The project installs raised galvanised frames with long braces to handle ground and rock slopes, giving the panel arrays secure fixing, high resistance to mountain winds and storms, and an ideal sun angle."
    ],
    "features": [
      {
        "t": "هياكل مخصصة للمنحدرات والتضاريس الوعرة",
        "d": "تصميم قواعد وأعمدة فولاذية متباينة الأطوال لمعادلة انحدار الأرض الجبلية وتأمين استواء مصفوفات الألواح.",
        "tEn": "Built for slopes and rough ground",
        "dEn": "Steel posts of varying length level out the slope so the arrays sit flat."
      },
      {
        "t": "شاسيهات مجلفنة وعالية المقاومة",
        "d": "استخدام مقاطع وجسور فولاذية خاضعة للجلفنة الحارة لمقاومة الرطوبة والتآكل الناتج عن التضاريس الصخرية والغطاء النباتي.",
        "tEn": "High-resistance galvanised racking",
        "dEn": "Hot-dip galvanised sections and beams resist moisture and corrosion from rocky ground and vegetation."
      },
      {
        "t": "تأسيس صلب على التضاريس الجبلية",
        "d": "تثبيت القواعد بواسطة مرابط وخرسانات أرضية متينة تضمن الاتزان الهيكلي ضد الانزلاقات العاصفة.",
        "tEn": "Solid footing on mountain terrain",
        "dEn": "Bases fixed with anchors and sturdy concrete to keep the structure balanced against landslips and storms."
      },
      {
        "t": "تراصف ورصف هندسي دقيق للألواح",
        "d": "تثبيت الألواح الشمسية بمرابط ألومنيوم سريعة التثبيت تضمن عدم وجود ظلال بين الصفوف المتباعدة على المنحدر.",
        "tEn": "Precise panel alignment",
        "dEn": "Quick-fix aluminium clamps and row spacing that avoids shading between rows on the slope."
      },
      {
        "t": "حلول استثمارية للأراضي غير المستغلة",
        "d": "تحويل المنحدرات الجبلية والصخرية إلى حقول توليد طاقة شمسية استثمارية ذات كفاءة عالية.",
        "tEn": "Putting unused land to work",
        "dEn": "Turns rocky mountain slopes into productive, efficient solar fields."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-009/1.webp",
        "w": 1535,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-slr-009/2.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-slr-009/3.webp",
        "w": 1535,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-slr-009/4.webp",
        "w": 1536,
        "h": 1024
      }
    ]
  },
  {
    "slug": "ham-slr-010",
    "code": "HAM-SLR-010",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الهياكل والمظلات الفولاذية المرتفعة والمجلفنة لمشاريع الطاقة الشمسية",
    "titleEn": "Elevated galvanised steel solar canopies",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو المظلات والهياكل الفولاذية المرتفعة (High-Elevated Solar Canopy & Carport Systems) المخصصة لمنظومات ومحطات الطاقة الشمسية فوق المباني والمنشآت الميدانية. يعتمد المشروع على بناء هيكل جملوني مائل ومجلفن بالكامل يرتكز على أبراج وقواعد حديدية مرتفعة مثبتة على صبات خرسانية مسلحة. يتيح هذا التصميم المرتفع الاستغلال المزدوج للمساحة السفلية كمظلات للمركبات أو ورش عمل أو مستودعات، مع توفير زاوية تثبيت مائلة ومستقرة لمصفوفات الألواح الشمسية لحمايتها من الرياح الشديدة وضمان أقصى إنتاجية كهربائية."
    ],
    "bodyEn": [
      "Hamsho designs and builds high-elevated solar canopy and carport systems over buildings and field sites. The project builds a fully galvanised tilted truss frame on raised steel towers and bases fixed on reinforced concrete. The raised design frees the space below for parking, workshops or storage while giving the arrays a stable tilt that resists strong winds for maximum output."
    ],
    "features": [
      {
        "t": "تصميم هيكلي مرتفع واسع البحور",
        "d": "تشييد أبراج ودعامات جملونية مرتفعة تتيح المرور والتخزين في المساحة السفلية بحرية كاملة.",
        "tEn": "High-clearance wide-span canopy",
        "dEn": "Tall towers and truss supports leave the space below completely free for traffic and storage."
      },
      {
        "t": "هيكل مجلفن عالي المقاومة",
        "d": "استخدام مقاطع وجسور حديدية مجلفنة بعناية للحد من الصدأ والتآكل الناتج عن العوامل الجوية المفتوحة.",
        "tEn": "High-resistance galvanised structure",
        "dEn": "Carefully galvanised sections and beams limit rust and corrosion in the open."
      },
      {
        "t": "تأسيس صلب على صبات خرسانية شريطية ومكعبة",
        "d": "ربط الأبراج والركائز الأساسية بقواعد خرسانية أرضية لضمان ثبات الهيكل ومقاومة الأحمال الريحية.",
        "tEn": "Strip and pad concrete foundations",
        "dEn": "Towers and main posts tied to concrete footings for stability against wind loads."
      },
      {
        "t": "تزويد بمانعات الصواعق وأنظمة حماية",
        "d": "تركيب قضبان ومانعات صواعق رأسية أعلى الهيكل المرتفع لحماية المنظومة والمباني المجاورة من الصدمات الكهربائية الجوية.",
        "tEn": "Lightning protection",
        "dEn": "Vertical lightning rods on top of the tall structure protect the system and nearby buildings."
      },
      {
        "t": "تثبيت ورصف هندسي متكامل للألواح",
        "d": "استخدام شاسيهات وسكك مجلفنة مدمجة لصف وتثبيت الألواح الشمسية بمرابط ألومنيوم صلبة.",
        "tEn": "Complete panel mounting",
        "dEn": "Integrated galvanised rails align and fix the panels with solid aluminium clamps."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-010/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-010/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-010/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-010/4.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-010/5.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-slr-011",
    "code": "HAM-SLR-011",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد القواعد الهيكلية الفولاذية المرفوعة والسياج الأمني لمحطات الطاقة الشمسية الميدانية",
    "titleEn": "Raised steel solar mounts and security fencing for a ground solar plant",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو المشاريع المتكاملة لتأسيس وتشييد محطات ومزارع الطاقة الشمسية الميدانية المجهزة بالهياكل الفولاذية المرفوعة والسياج الأمني المحيط (Elevated Ground Solar Structure & Fenced Solar Station). يعتمد هذا المشروع على صب قواعد خرسانية مكعبة ومسحوبة ارتفاعاً فوق مستوى التربة، وتثبيت هيكل جملوني مائل ومدهون بطلاء حراري أزرق مقاوم للصدأ والتآكل لرفع صفوف الألواح الشمسية وحمايتها من السيول والأتربة. يتضمن المشروع أيضاً إنشاء وتثبيت سياج شبكي مجلفن وبوابة حديدية رئيسية لتأمين الموقع بشكل كامل."
    ],
    "bodyEn": [
      "Hamsho designs and delivers complete ground solar plants with raised steel structures and perimeter security fencing. The project casts tall concrete pad footings above ground and fixes a tilted truss frame in blue heat-cured, rust-resistant paint to lift the panel rows clear of floods and dust. It also includes galvanised mesh fencing and a main steel gate to fully secure the site."
    ],
    "features": [
      {
        "t": "تأسيس خرساني بارز ومكعب",
        "d": "صب قواعد خرسانية مرتفعة عن الأرض لتوفير تثبيت صلب للهياكل وحماية الأعمدة الفولاذية من التآكل والرطوبة الأرضية.",
        "tEn": "Raised concrete pad footings",
        "dEn": "Footings cast above ground give solid fixing and protect the steel posts from ground moisture and corrosion."
      },
      {
        "t": "هياكل وشاسيهات فولاذية مائلة باللون الأزرق",
        "d": "تصنيع مقاطع وتيوبات حديدية متقاطعة مدهونة بالأزرق المانع للصدأ ومصممة بزاوية ميل مثالية لاستقبال الأشعة الشمسية.",
        "tEn": "Tilted blue steel frames",
        "dEn": "Crossed sections and tubes in rust-resistant blue, set at the ideal tilt for sunlight."
      },
      {
        "t": "سياج حماية شبكي وبوابة رئيسية",
        "d": "تركيب سور شبكي مجلفن محيط بكامل أرضية المحطة مع إضافة بوابة دخول مزدوجة لتأمين المعدات والألواح.",
        "tEn": "Mesh fencing and main gate",
        "dEn": "Galvanised fencing around the whole plant with a double entrance gate to secure equipment and panels."
      },
      {
        "t": "مساحات امتدادية واسعة ومصفوفة",
        "d": "تصميم الهياكل لتبدو كصفوف متوازية تتسع لعدد كبير من الألواح الشمسية الميدانية والمحطات التشغيلية.",
        "tEn": "Wide, orderly arrays",
        "dEn": "Parallel rows designed to carry a large number of panels."
      },
      {
        "t": "إشراف هندسي وتنفيذ ميداني متكامل",
        "d": "تنفيذ كافة أعمال اللحامات، التثبيت الخرساني، والتأسيس الأرضي بدقة عالية تحت قيادة كادر شركة حمشو المتخصص.",
        "tEn": "Full engineering supervision",
        "dEn": "All welding, concrete fixing and groundwork carried out precisely by Hamsho's specialist team."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-011/1.webp",
        "w": 1800,
        "h": 829
      },
      {
        "src": "/images/projects/ham-slr-011/2.webp",
        "w": 1800,
        "h": 829
      }
    ]
  },
  {
    "slug": "ham-slr-012",
    "code": "HAM-SLR-012",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد القواعد الهيكلية الجملونية الخضراء المرتفعة على مصاطب صخرية لمزارع الطاقة الشمسية",
    "titleEn": "Raised green truss solar mounts on rocky terraces",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو القواعد والهياكل الفولاذية الجملونية المرتفعة والمصممة خصيصاً للتركيب فوق المصاطب الحجرية والجدران الاستنادية الصخرية في المناطق المائلة والجبلية (Terraced Ground Solar Mount Structures). يهدف هذا المشروع إلى بناء شاسيهات حديدية جملونية مدهونة بطلاء أفراني حراري باللون الأخضر المقاوم للصدأ والعوامل الجوية القاسية. تُثبّت القواعد والأعمدة الرئيسية على صبات خرسانية شريطية فوق المصاطب الجبلية لتأمين اتزان إنشائي كامل وضمان الاستفادة الأقصى من المساحات المائلة والوعرة."
    ],
    "bodyEn": [
      "Hamsho designs and builds raised steel truss mounts made specifically for stone terraces and rock retaining walls on sloping, mountainous land. The project builds truss frames in green heat-cured paint that resists rust and harsh weather. Main bases and posts are fixed on concrete strip footings on the terraces for full structural balance and the best use of steep, rough land."
    ],
    "features": [
      {
        "t": "هياكل جملونية مرتفعة",
        "d": "تصميم شبكي متين من المقاطع والذيابات الفولاذية المتقاطعة لتوفير دعم كامل للمصفوفات وتسهيل الحركة الصيانة السفلية.",
        "tEn": "High-clearance lattice structures",
        "dEn": "A strong grid of crossed steel sections fully supports the arrays and leaves room for maintenance below."
      },
      {
        "t": "تأسيس متين على الجدران والمصاطب الاستنادية",
        "d": "تثبيت الهيكل فوق قواعد وسلاسل خرسانية وصخرية مرصوفة لمنع الانزلاق وتوزيع الأحمال بالتساوي على التربة الجبلية.",
        "tEn": "Footings on retaining walls and terraces",
        "dEn": "The structure is fixed on concrete and stone courses to prevent sliding and spread loads evenly."
      },
      {
        "t": "طلاء حماية حراري باللون الأخضر الملكي",
        "d": "طلاء كامل الشاسيهات والجسور بأصباغ أفرانية حرارية عالية المقاومة ضد الصدأ، التآكل، والرطوبة الأرضية.",
        "tEn": "Royal green protective coating",
        "dEn": "All frames and beams in highly rust-, corrosion- and moisture-resistant baked paint."
      },
      {
        "t": "تركيب ورصف ميداني متناسق للألواح",
        "d": "استخدام شاسيهات وسكك ألومنيوم مخصصة لصف وتأمين مصفوفات الألواح بمرابط صلبة تحميها من الرياح القوية.",
        "tEn": "Orderly panel installation",
        "dEn": "Dedicated aluminium rails and solid clamps secure the arrays against strong wind."
      },
      {
        "t": "سياج حماية شبكي محيط بالموقع",
        "d": "إحاطة موقع محطة الطاقة الشمسية بسياج سلكي مجلفن لحماية المعدات والألواح من العوامل الخارجية.",
        "tEn": "Perimeter mesh fencing",
        "dEn": "The plant is enclosed with galvanised wire fencing to protect equipment and panels."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-012/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-012/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-012/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-012/4.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-slr-013",
    "code": "HAM-SLR-013",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الهياكل والمظلات الفولاذية المرتفعة البيضاء لمنظومات الطاقة الشمسية الميدانية",
    "titleEn": "Elevated white steel solar canopies",
    "body": [
      "تُقدّم شركة حمشو حلولاً إنشائية متقدمة لبناء المظلات والهياكل الفولاذية المرتفعة المخصصة لحقول ومزارع الطاقة الشمسية الميدانية (Elevated White Solar Canopy Structures). يتضمن المشروع تشييد هيكل جملوني مائل ومكتمل الدعامات، مدهون بطلاء حراري أبيض حراري مانع للصدأ، ومستند على أعمدة فولاذية مرتفعة ليوفر مساحة سفليّة مغطاة يمكن استغلالها لمختلف الأغراض الخدمية، مع التثبيت الآمن لمصفوفات الألواح الشمسية وزيادة قدرتها على تحمّل الرياح العاتية وضمان التوجيه الهندسي الأمثل نحو الشمس."
    ],
    "bodyEn": [
      "Hamsho builds elevated steel solar canopies for ground solar fields and farms. The project erects a fully braced tilted truss in white heat-resistant, rust-proof paint on tall steel posts, creating a covered area below for various service uses while securely mounting the arrays, increasing wind resistance and keeping the optimal orientation to the sun."
    ],
    "features": [
      {
        "t": "ارتفاع إنشائي استثماري متعدد الاستخدامات",
        "d": "تصميم إطار جملوني مرتفع يتيح استغلال المساحة السفلية كمظلات أو ساحات تخزين مع حماية كاملة من الشمس والأمطار.",
        "tEn": "Raised for multiple uses",
        "dEn": "A tall truss frame lets the space below serve as a shelter or storage yard, protected from sun and rain."
      },
      {
        "t": "هيكل فولاذي مدهون باللون الأبيض الحراري",
        "d": "طلاء جميع التيوبات والجسور الفولاذية بأصباغ بيضاء مقاومة للحرارة العالية، العوامل الجوية، والرطوبة لتقليل الامتصاص الحراري وزيادة عمر الهيكل.",
        "tEn": "White heat-reflective steel structure",
        "dEn": "All tubes and beams painted white to resist heat, weather and moisture, reduce heat gain and extend the structure's life."
      },
      {
        "t": "شبكة جملونات ودعامات تقوية متقاطعة",
        "d": "تزويد الهيكل بدعامات حديدية متقاطعة لزيادة الصلابة الإنشائية ومقاومة الاهتزازات والأحمال الريحية الميدانية.",
        "tEn": "Cross-bracing network",
        "dEn": "Crossed steel braces add rigidity and resist vibration and wind loads."
      },
      {
        "t": "أنظمة حماية ومانعات صواعق جبلية",
        "d": "تركيب مانعات صواعق رأسية ممتدة أعلى الهيكل لضمان الأمان الكهربائي والميداني الكامل.",
        "tEn": "Lightning protection",
        "dEn": "Tall vertical lightning rods above the structure for full electrical and site safety."
      },
      {
        "t": "تأسيس صلب على صبة أرضية مستوية",
        "d": "تثبيت القواعد والأعمدة الرئيسية بصبات وقواعد خرسانية أرضية متينة تضمن الثبات على التضاريس الميدانية الجبلية.",
        "tEn": "Solid footing on level slabs",
        "dEn": "Main bases and posts fixed on sturdy concrete footings for stability on mountainous ground."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-013/1.webp",
        "w": 1446,
        "h": 1087
      },
      {
        "src": "/images/projects/ham-slr-013/2.webp",
        "w": 1446,
        "h": 1087
      },
      {
        "src": "/images/projects/ham-slr-013/3.webp",
        "w": 1446,
        "h": 1087
      }
    ]
  },
  {
    "slug": "ham-slr-014",
    "code": "HAM-SLR-014",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الهياكل الفولاذية الجملونية المرتفعة والمسيّجة لمزارع الطاقة الشمسية",
    "titleEn": "Elevated, fenced steel truss structures for solar farms",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو الهياكل والمظلات الإنشائية المرتفعة (High-Elevated Truss Solar Structure Systems) المخصصة لمحطات ومزارع الطاقة الشمسية الميدانية في المناطق الخدمية والزراعية. يتضمن المشروع تشييد جملونات شبكية مجلفنة مدهونة باللون الأبيض المقاوم للصدأ والعوامل الجوية، ومثبتة على أعمدة مرتفعة مجهزة بمانعات صواعق وممرات خدمة وصيانة علوية. يتم إحاطة المحطة بسياج أمني مجلفن وسور خرساني باللون الأخضر لحماية الألواح والمعدات الكهربائية وضمان أقصى درجات الثبات الهندسي ضد الرياح القوية."
    ],
    "bodyEn": [
      "Hamsho designs and builds elevated truss solar structures for solar plants and farms in service and agricultural areas. The project erects galvanised lattice trusses painted white against rust and weather, on tall posts fitted with lightning rods and upper service walkways. The plant is enclosed by galvanised security fencing on a green concrete wall to protect panels and electrical equipment and keep the structure stable in strong winds."
    ],
    "features": [
      {
        "t": "هيكل جملوني مرتفع بمسارات صيانة علوية",
        "d": "تصميم شبكي متين من التيوبات المقواة يوفر ارتفاعاً كاملاً تحت المنظومة مع درابزين وممرات خدمة علوية لتسهيل حركة الفنيين.",
        "tEn": "Raised truss with upper service walkways",
        "dEn": "A strong grid of reinforced tubes with full clearance below, plus railings and walkways for technicians."
      },
      {
        "t": "طلاء حماية مجلفن وأبيض حراري",
        "d": "حماية كافة المقاطع الفولاذية بطلاء مانع للتآكل والصدأ لضمان المقاومة ضد الرطوبة والأمطار والعوامل الجوية الميدانية.",
        "tEn": "Galvanised and white protective coating",
        "dEn": "All steel sections protected against corrosion, moisture and rain."
      },
      {
        "t": "مانعات صواعق جبلية ورأسية",
        "d": "تثبيت قضبان صواعق مرتفعة على أعلى نقاط الهيكل لتشتيت تفريغات البرق وتأمين المنظومة الكهربائية.",
        "tEn": "Lightning protection rods",
        "dEn": "Tall rods at the highest points disperse lightning strikes and protect the electrical system."
      },
      {
        "t": "سياج حماية أمني ومجلفن",
        "d": "إحاطة المحطة بسور سلكي مجلفن مع قاعدة خرسانية باللون الأخضر لضمان الأمان الميداني لكافة التجهيزات.",
        "tEn": "Galvanised security fencing",
        "dEn": "Wire fencing on a green concrete base secures all equipment on site."
      },
      {
        "t": "تركيب وإشراف هندسي ميداني",
        "d": "تنفيذ كافة أعمال التجميع، التلحيم، والتثبيت الميداني بأعلى معايير السلامة تحت إشراف كادر شركة حمشو.",
        "tEn": "Site installation under supervision",
        "dEn": "Assembly, welding and fixing done to high safety standards under Hamsho's team."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-014/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-014/2.webp",
        "w": 1673,
        "h": 940
      },
      {
        "src": "/images/projects/ham-slr-014/3.webp",
        "w": 1446,
        "h": 1087
      },
      {
        "src": "/images/projects/ham-slr-014/4.webp",
        "w": 1445,
        "h": 1088
      }
    ]
  },
  {
    "slug": "ham-slr-015",
    "code": "HAM-SLR-015",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الهياكل والمظلات الفولاذية المرتفعة مع سلالم ومانعات صواعق لمشروعات الطاقة الشمسية",
    "titleEn": "Elevated steel solar canopies with access stairs and lightning protection",
    "body": [
      "تُقدّم شركة حمشو التشييد والتصنيع الهندسي المتقدم لبناء الهياكل والمظلات الإنشائية المرتفعة الفولاذية المخصصة لمنظومات ومحطات الطاقة الشمسية العلوية (Elevated Steel Structure & Solar Canopy Systems). يهدف هذا المشروع إلى بناء هيكل جملوني مائل أبيض اللون متصل بأعمدة ودعامات تقوية متقاطعة مرتفعة عن سطح الأرض لتغطية المباني الخدمية والمساحات الخارجية. يشتمل الهيكل على سلالم صعود حمراء جانبيّة مجهزة للتسلق الآمن، وممرات صيانة علوية، ومانعات صواعق رأسية لتأمين حماية كاملة للمصفوفات والمبنى."
    ],
    "bodyEn": [
      "Hamsho engineers and builds elevated steel structures and canopies for overhead solar systems. The project builds a white tilted truss on raised posts and cross braces to cover service buildings and outdoor areas. It includes red side access stairs for safe climbing, upper maintenance walkways and vertical lightning rods for full protection of the arrays and the building."
    ],
    "features": [
      {
        "t": "هيكل جملوني مرتفع بمسافات عريضة",
        "d": "تصميم أبراج ودعامات شبكية مدهونة باللون الأبيض توفر سعة استخدام وتخزين كاملة أسفل المظلة.",
        "tEn": "Wide-span raised truss",
        "dEn": "White lattice towers and braces leave the space below the canopy fully usable."
      },
      {
        "t": "سلالم صعود وممرات خدمة علوية",
        "d": "تزويد الهيكل بسلم جانبي أحمر مميز وممرات تثبيت آمنة لتسهيل صيانة ورصف الألواح الشمسية من قبل الفنيين.",
        "tEn": "Access stairs and upper walkways",
        "dEn": "A distinctive red side stair and safe walkways for technicians to install and maintain the panels."
      },
      {
        "t": "نظام مانعات الصواعق الحمايتي",
        "d": "قضبان صواعق مرتفعة ممتدة فوق القمة لحماية المنظومة والتجهيزات الكهربائية من التفريغات الجوية.",
        "tEn": "Lightning protection system",
        "dEn": "Tall rods above the peak protect the system and electrical equipment from strikes."
      },
      {
        "t": "طلاء فرن حراري مقاوم للصدأ والتآكل",
        "d": "حماية جميع المقاطع والتيوبات الفولاذية بأصباغ بيضاء حرارية لمقاومة الرطوبة الميدانية وأشعة الشمس المباشرة.",
        "tEn": "Rust- and corrosion-resistant baked paint",
        "dEn": "All steel sections and tubes coated white against moisture and direct sun."
      },
      {
        "t": "تركيب ورصف ميداني متكامل",
        "d": "تثبيت ورصف هندسي دقيق لمصفوفات الألواح الشمسية باستخدام مرابط وسكك مجلفنة تحت إشراف مهندسي وفنيي شركة حمشو.",
        "tEn": "Complete site installation",
        "dEn": "Panels aligned and fixed precisely with galvanised rails and clamps under Hamsho supervision."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-015/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-015/2.webp",
        "w": 1672,
        "h": 940
      },
      {
        "src": "/images/projects/ham-slr-015/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-015/4.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-slr-016",
    "code": "HAM-SLR-016",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد الأبراج والهياكل الفولاذية المرتفعة لمنظومات الطاقة الشمسية الضخمة ومحطات المياه",
    "titleEn": "Tall steel towers and structures for large solar systems and water stations",
    "body": [
      "تُصمّم وتُنَفّذ شركة حمشو المشاريع الإنشائية الضخمة لبناء الأبراج والهياكل الفولاذية المرتفعة (High-Elevated Tower & Heavy Solar Canopy Systems) المخصصة لمنظومات الطاقة الشمسية الخدمية ومحطات ضخ المياه والإغاثة. يعتمد هذا المشروع على تشييد أبراج وجملونات حديدية مائلة ومدهونة باللون الأخضر الجرادي المانع للصدأ، ومثبتة على ركائز وأعمدة شبكية مرتفعة جداً لتوفير ممرات وحركة كاملة للآليات تحت المظلات، مع توفير التثبيت الآمن لصفيف واسع من الألواح الشمسية باستخدام كرينات ورافعات هيدروليكية ميدانية."
    ],
    "bodyEn": [
      "Hamsho designs and delivers large elevated tower and heavy solar canopy structures for service solar systems, water-pumping stations and relief projects. The project erects tilted steel towers and trusses in rust-resistant green on very tall lattice posts, leaving full clearance for vehicles beneath, and secures a wide panel array using site cranes."
    ],
    "features": [
      {
        "t": "تصميم أبراج إنشائية مرتفعة عريضة البحور",
        "d": "بناء ركائز جملونية وأعمدة شبكية فولاذية بارتفاعات عالية لتغطية مساحات واسعة والسماح بمرور الشاحنات والسيارات أسفلها.",
        "tEn": "Tall, wide-span structural towers",
        "dEn": "High lattice piers and steel posts cover large areas and let trucks and cars pass underneath."
      },
      {
        "t": "طلاء حماية أفراني باللون الأخضر المميز",
        "d": "حماية المقاطع والتيوبات الفولاذية بأصباغ مقاومة للتآكل والصدأ وظروف الطقس الميدانية المفتوحة.",
        "tEn": "Distinctive green baked coating",
        "dEn": "Steel sections and tubes protected against corrosion, rust and open-site weather."
      },
      {
        "t": "تركيب ميداني باستعمال الرافعات الهيدروليكية",
        "d": "استخدام رافعات وأذرع هيدروليكية لرفع الألواح وتأمين الفنيين أثناء التركيب على الارتفاعات العالية.",
        "tEn": "Crane assembly on site",
        "dEn": "Hydraulic cranes lift panels and keep technicians safe while working at height."
      },
      {
        "t": "تأسيس صلب وتسييج محيط بموقع المشروع",
        "d": "صب قواعد خرسانية مسلحة لتثبيت الأبراج مع إحاطة المحطة بسياج شبكي أمني حمايتي.",
        "tEn": "Solid foundations and perimeter fencing",
        "dEn": "Reinforced concrete footings anchor the towers, and the plant is enclosed with security mesh fencing."
      },
      {
        "t": "دعم مشاريع البنية التحتية والآبار",
        "d": "تشييد المنظومة لخدمة محطات المياه المركزية والمنشآت الخدمية بكفاءة تشغيلية ممتازة.",
        "tEn": "Supporting infrastructure and wells",
        "dEn": "Built to power central water stations and service facilities efficiently."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-016/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-slr-016/2.webp",
        "w": 1447,
        "h": 1087
      },
      {
        "src": "/images/projects/ham-slr-016/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-slr-017",
    "code": "HAM-SLR-017",
    "category": "solar",
    "mount": "fixed",
    "title": "تصنيع وتشييد القواعد الهيكلية المرفوعة والسياج الخرساني لمحطات الطاقة الشمسية النموذجية",
    "titleEn": "Raised solar mounts and concrete perimeter wall for a model solar plant",
    "body": [
      "تُقدّم شركة حمشو الحلول الميدانية والإنشائية المتكاملة لبناء وتأمين محطات ومزارع الطاقة الشمسية المركزية (Solar Park Ground Structures & Perimeter Wall Systems). يتضمن المشروع تصنيع وتشييد صفوف طويلة من الهياكل والجسور الفولاذية المائلة والمرفوعة على أعمدة ودعامات شبكية صلبة، مثبتة على صبات خرسانية مسلحة لضمان الاستقرار الهيكلي ومقاومة الرياح القوية. يشتمل المشروع أيضاً على إنشاء سور خرساني محيط باللون الأصفر وبوابة أمنية لحماية كامل محطة توليد الطاقة الشمسية والتجهيزات الملحقة."
    ],
    "bodyEn": [
      "Hamsho delivers complete site and structural solutions for building and securing central solar plants and parks. The project fabricates long rows of tilted steel structures raised on solid lattice posts and braces, fixed on reinforced concrete for stability against strong winds. It also includes a yellow concrete perimeter wall and a security gate to protect the whole plant and its equipment."
    ],
    "features": [
      {
        "t": "هياكل وشاسيهات فولاذية طويلة ومرفوعة",
        "d": "تصميم شاسيهات مائلة بزاوية هندسية دقيقة تسمح برصف مئات الألواح الشمسية بانتظام لتحقيق أعلى كفاءة توليد.",
        "tEn": "Long raised steel frames",
        "dEn": "Frames tilted at a precise angle carry hundreds of panels in neat rows for the highest yield."
      },
      {
        "t": "تأسيس صلب على قواعد خرسانية",
        "d": "تثبيت كافة الدعامات والأعمدة الحديدية بقواعد خرسانية أرضية ممتدة لمنع الانزلاق وتوزيع الأحمال بانتظام.",
        "tEn": "Solid concrete foundations",
        "dEn": "All braces and steel posts fixed on continuous concrete footings to prevent sliding and spread loads evenly."
      },
      {
        "t": "سور أمني وحماية محيطية باللون الأصفر",
        "d": "بناء جدار وسور حماية خرساني محيط بأرض المشروع ومزوّد ببوابة دخول لتأمين المحطة والمباني الخدمية الملحقة.",
        "tEn": "Yellow perimeter security wall",
        "dEn": "A concrete wall around the site with an entrance gate protects the plant and its service buildings."
      },
      {
        "t": "تجهيز وإحاطة البنية التحتية والمباني التشغيلية",
        "d": "تشييد غرفة غرف التحكم والتجهيزات الكهربائية بجوار حقل الألواح لتسهيل المتابعة والصيانة الميدانية.",
        "tEn": "Control rooms and infrastructure",
        "dEn": "Control rooms and electrical equipment built beside the panel field for easy monitoring and maintenance."
      },
      {
        "t": "توجيه هندسي وتراصف متناسق",
        "d": "ضبط استقامة وميل المصفوفات الشمسية لتفادي أي ظلال بين الصفوف المتباعدة والاستفادة الأقصى من الإشعاع الشمسي.",
        "tEn": "Precise alignment",
        "dEn": "Straight, correctly tilted arrays avoid shading between rows and capture the most sunlight."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-slr-017/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-slr-017/2.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-hng-001",
    "code": "HAM-HNG-001",
    "category": "hangars",
    "title": "تصنيع وتكسية واجهات الهناجر والمنشآت المعدنية ببديل الرخام والأشباك الفولاذية",
    "titleEn": "Hangar and steel-building façades clad with marble-effect panels on steel grids",
    "body": [
      "تُنفّذ شركة حمشو مشاريع التشييد والتكسية الخارجية المتقدمة للهناجر والمباني المعدنية الضخمة (Steel Hangar Cladding & Facade Construction). يركز هذا المشروع على إنشاء وتصميم الواجهات المعمارية العصرية للمستودعات والمباني التجارية عبر تركيب شبكات فولاذية قوية (Steel Substructure) وتكسيتها بألواح الكلادينج وبديل الرخام (AKPA Cladding Sheets). ويجري العمل بموجب مخططات هندسية دقيقة وإشراف ميداني مباشر لضمان أعلى مستويات المتانة والجودة الجمالية للواجهات."
    ],
    "bodyEn": [
      "Hamsho builds and clads the exteriors of hangars and large steel buildings. This project creates modern architectural façades for warehouses and commercial buildings by installing a strong steel substructure and cladding it with marble-effect cladding panels, following detailed engineering drawings under direct site supervision."
    ],
    "features": [
      {
        "t": "شبكات فولاذية إنشائية للواجهات",
        "d": "تصميم وتثبيت إطارات وسحابات حديدية متقاطعة ومدهونة باللون الأسود لتشكيل القاعدة الصلبة الحاملة لألواح التكسية.",
        "tEn": "Steel substructure grid for façades",
        "dEn": "Black-painted steel frames and cross purlins form the rigid base that carries the cladding panels."
      },
      {
        "t": "تكسية بألواح الكلادينج العازلة",
        "d": "تركيب ألواح الكلادينج المعزولة المقاومة للعوامل الجوية المختلفة لإعطاء طابع معماري حديث ومستدام.",
        "tEn": "Insulated cladding panels",
        "dEn": "Weather-resistant insulated cladding for a modern, lasting architectural look."
      },
      {
        "t": "دراسة وإشراف مخططات هندسية دقيقة",
        "d": "تدقيق وتنفيذ الأعمال الميدانية بناءً على مخططات رسم هندسي مفصلة تضمن دقة الأبعاد والمطابقة المعمارية.",
        "tEn": "Accurate drawings and supervision",
        "dEn": "Site work is checked and executed from detailed engineering drawings for exact dimensions."
      },
      {
        "t": "سقالات ودعامات أمان لتثبيت الواجهات المرتفعة",
        "d": "استخدام منصات وسقالات معدنية صلبة للعمل بأمان على ارتفاعات كبيرة لتغطية الواجهات العريضة والمرتفعة للهناجر.",
        "tEn": "Scaffolding for high façades",
        "dEn": "Solid steel platforms and scaffolds allow safe work at height on wide, tall hangar fronts."
      },
      {
        "t": "دمج الجدران الخرسانية والهياكل الفولاذية",
        "d": "ربط وهيكلة الصبات والبلوك الخرساني مع الشبكات الفولاذية الخارجية لتوفير القساوة العالية والاستقرار الإنشائي.",
        "tEn": "Concrete walls tied into the steel frame",
        "dEn": "Concrete and block elements are tied into the external steel grid for high rigidity and stability."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-hng-001/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-hng-001/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-hng-001/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-hng-002",
    "code": "HAM-HNG-002",
    "category": "hangars",
    "title": "تصنيع وتشييد الهياكل الفولاذية القوسية والأسقف المعدنية المحنية",
    "titleEn": "Arched steel structures and curved metal roofs",
    "body": [
      "تُنفّذ شركة حمشو مشاريع هندسية متقدمة في تصنيع وتركيب الهياكل الفولاذية القوسية (المقوسة) والأسقف الجملونية المحنية والمظلات الضخمة للمباني والمدرجات (Arched Steel Truss Structures & Curved Roof Canopies). يتضمن هذا المشروع تصنيع جمالونات شبكية مقوسة من الفولاذ، حيث يتم رفعهما وتركيبهما باستخدام الرافعات الهيدروليكية الميدانية. تُكسى هذه الهياكل بألواح ساندوتش بنل وصاج معزول لمقاومة أعتى الظروف المناخية وإعطاء طابع معماري حديث ومبتكر."
    ],
    "bodyEn": [
      "Hamsho fabricates and installs arched steel trusses, curved gable roofs and large canopies for buildings and stands. The project involves fabricating curved lattice trusses, lifting and installing them with hydraulic cranes, and cladding them with sandwich panels and insulated sheet to withstand harsh weather with a modern architectural look."
    ],
    "features": [
      {
        "t": "جمالونات فولاذية مقوسة",
        "d": "تصنيع دقيق للإطارات الفولاذية المنحنية التي تمنح المبنى قدرة تحميل عالية وبحوراً واسعة دون الحاجة لأعمدة وسطية.",
        "tEn": "Curved and arched steel trusses",
        "dEn": "Precisely fabricated curved frames give the building high load capacity and wide spans without central columns."
      },
      {
        "t": "تركيب ميكانيكي باستعمال الرافعات الثقيلة",
        "d": "استخدام أوناش ورافعات هيدروليكية لنقل ورفع الأعمدة والجمالونات الثقيلة وتثبيتها في الموقع بدقة متناهية.",
        "tEn": "Mechanical installation with heavy cranes",
        "dEn": "Cranes lift and place heavy columns and trusses on site with great precision."
      },
      {
        "t": "تكسية وأسقف عالية العزل",
        "d": "تغطية الهيكل الفولاذي بألواح معزولة وأسقف خشبية بديلة تضمن العزل الحراري والمائي التام.",
        "tEn": "Highly insulated roofing and cladding",
        "dEn": "The steel frame is covered with insulated panels and timber-effect ceilings for full thermal and water insulation."
      },
      {
        "t": "دمج البناء الحجري والخرساني مع الفولاذ",
        "d": "تثبيت الهياكل الفولاذية على قواعد وصبات خرسانية وجدران حجرية متينة لضمان أقصى درجات الثبات.",
        "tEn": "Steel combined with stone and concrete",
        "dEn": "Steel structures fixed on concrete footings and solid stone walls for maximum stability."
      },
      {
        "t": "تجهيز الدرابزينات وحمايات السلامة",
        "d": "تركيب سور ودرابزينات حديدية مزخرفة ومصممة خصيصاً للمنصات والمدرجات.",
        "tEn": "Railings and safety guards",
        "dEn": "Decorative steel railings made specifically for platforms and stands."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-hng-002/1.webp",
        "w": 1280,
        "h": 960
      },
      {
        "src": "/images/projects/ham-hng-002/2.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-hng-002/3.webp",
        "w": 1280,
        "h": 960
      },
      {
        "src": "/images/projects/ham-hng-002/4.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-hng-002/5.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-hng-002/6.webp",
        "w": 1536,
        "h": 1024
      }
    ]
  },
  {
    "slug": "ham-hng-003",
    "code": "HAM-HNG-003",
    "category": "hangars",
    "title": "تصنيع وتشييد الهناجر والمستودعات الفولاذية المعزولة بألواح الصاج المزدوج",
    "titleEn": "Steel hangars and warehouses clad in double profiled sheet",
    "body": [
      "تُنفّذ شركة حمشو المشاريع المتكاملة لتصميم، تصنيع، وتشييد الهناجر والمستودعات الفولاذية الصناعية والتجارية (Industrial Steel Warehouse & Hangar Construction). يعتمد هذا المشروع على تركيب هيكل معدني متين من الجمالونات الفولاذية المدهونة باللون الأزرق لضمان حماية المادة من الصدأ والتآكل. يتم تغطية وتكسية الجدران والأسقف بألواح الصاج المضلع العالي الجودة والمطلي باللونين البني والفضي لتأمين العزل الحراري التام والحماية المناخية الشاملة."
    ],
    "bodyEn": [
      "Hamsho designs, fabricates and erects complete industrial and commercial steel hangars and warehouses. This project uses a sturdy frame of blue-painted steel trusses protected against rust, with walls and roofs clad in quality profiled sheet in brown and silver for thermal insulation and full weather protection."
    ],
    "features": [
      {
        "t": "هياكل وجملونات فولاذية واسعة البحور",
        "d": "تصميم وتثبيت إطارات وجملونات شبكية زرقاء تضمن الصلابة الهيكلية العالية وتوفر مساحات تخزين واسعة.",
        "tEn": "Wide-span heavy-duty steel trusses",
        "dEn": "Blue lattice frames and trusses give high structural rigidity and large storage areas."
      },
      {
        "t": "تكسية الأسقف بألواح الصاج المضلع المزدوج",
        "d": "تركيب ألواح الصاج الجملوني الملون (بني وفضي) على الأسقف بشكل محكم لمنع تسرب مياه الأمطار وتوفير العزل الحراري.",
        "tEn": "Double profiled sheet roofing",
        "dEn": "Coloured profiled sheet (brown and silver) fixed tightly on the roof to keep out rain and insulate."
      },
      {
        "t": "تغطية الجدران والواجهات الجانبية بالصاج",
        "d": "إغلاق الواجهات الجانبية بالكامل بألواح الصاج الصلب لتأمين حماية للمحتويات والمستودعات من العوامل الخارجية.",
        "tEn": "Sheet-clad walls and façades",
        "dEn": "Side walls fully closed with solid sheet to protect stored goods from the elements."
      },
      {
        "t": "تركيب ميداني دقيق ومحكم",
        "d": "تثبيت الألواح الفولاذية باستخدام براغي وأدوات تثبيت مجلفنة وعازلة من قبل فنيين متخصصين.",
        "tEn": "Accurate site installation",
        "dEn": "Panels fixed with galvanised, sealed fasteners by specialist technicians."
      },
      {
        "t": "مرونة الاستخدام والتطبيق",
        "d": "تصميم الهنجر ليكون مثالياً للمستودعات التجارية، ورش الصيانة، والمشاريع اللوجستية والميدانية.",
        "tEn": "Flexible use",
        "dEn": "Ideal for commercial warehouses, maintenance workshops, and logistics and field projects."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-hng-003/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-hng-003/2.webp",
        "w": 1447,
        "h": 1087
      },
      {
        "src": "/images/projects/ham-hng-003/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-hng-004",
    "code": "HAM-HNG-004",
    "category": "hangars",
    "title": "تصميم وتشييد الهناجر والمستودعات الصناعية الفولاذية الضخمة",
    "titleEn": "Large industrial steel hangars and warehouses",
    "body": [
      "تُقدم شركة حمشو حلولاً متكاملة لتصميم، تصنيع، وتشييد الهناجر الفولاذية والمستودعات الصناعية والمراكز اللوجستية الضخمة (Industrial Steel Warehouses & Large-Span Hangar Construction). يتضمن هذا المشروع بناء هيكل معدني صلب مجهز بجمالونات وقواعد فولاذية متينة توفر مساحات واسعة بدون أعمدة داخلية. يُكسى السقف والجدران بألواح الصاج المضلع والمعزول باللونين الأزرق والرمادي، مع تزويد السقف بمنافذ وفتحات تهوية علوية لضمان التهوئة الممتازة والمقاومة العالية لجميع الظروف المناخية."
    ],
    "bodyEn": [
      "Hamsho designs, fabricates and erects steel hangars, industrial warehouses and large logistics centres. This project builds a solid steel frame with sturdy trusses and bases that leave wide spaces free of internal columns. Roofs and walls are clad in insulated profiled sheet in blue and grey, with roof vents for good ventilation and high resistance to all weather."
    ],
    "features": [
      {
        "t": "هيكل فولاذي واسع البحور",
        "d": "أعمدة وجمالونات شبكية ثقيلة تضمن استغلالاً أقصى للمساحة الداخلية وتسهل حركة المعدات والتخزين.",
        "tEn": "Large-span steel frame",
        "dEn": "Heavy columns and lattice trusses make the most of the interior and ease the movement of equipment and stock."
      },
      {
        "t": "تكسية معزولة ومقاومة للأسقف والجدران",
        "d": "تغطية كاملة بصفائح الصاج المضلع بألوان متناسقة (أزرق ورمادي) لحماية المستودع من العوامل المناخية.",
        "tEn": "Insulated roof and wall cladding",
        "dEn": "Full cover in profiled sheet in matching colours (blue and grey) to protect the warehouse from the weather."
      },
      {
        "t": "نظام تهوية علوي مدمج",
        "d": "تركيب فتحات ومنافذ تهوية امتدادية أعلى السقف لضمان تدوير الهواء وتجديده بفعالية داخل الهنجر.",
        "tEn": "Built-in roof ventilation",
        "dEn": "Ridge vents along the roof keep air circulating and fresh inside the hangar."
      },
      {
        "t": "مداخل وبوابات واسعة للمعدات",
        "d": "تصميم فتحات بوابات كبيرة تسمح بدخول الشاحنات والرافعات الشوكية وتسهيل عمليات الشحن والتفريغ.",
        "tEn": "Wide entrances for equipment",
        "dEn": "Large gate openings let trucks and forklifts in for easy loading and unloading."
      },
      {
        "t": "دمج مكاتب مسبقة الصنع في الموقع",
        "d": "تجهيز غرف كرفانات ومكاتب جاهزة مرافقة للهنجر لخدمة الإدارة وكوادر العمل في الموقع.",
        "tEn": "Prefabricated offices on site",
        "dEn": "Ready-made caravans and offices next to the hangar for management and site staff."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-hng-004/1.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-hng-004/2.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-hng-004/3.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-hng-004/4.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-hng-004/5.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-hng-004/6.webp",
        "w": 1800,
        "h": 1013
      }
    ]
  },
  {
    "slug": "ham-crv-001",
    "code": "HAM-CRV-001",
    "category": "caravans",
    "title": "تصنيع وتجهيز كرفانات مسبقة الصنع ومكاتب ميدانية متكاملة",
    "titleEn": "Prefabricated caravans and complete site offices",
    "body": [
      "تُقدم شركة حمشو حلول التصنيع المتقدمة للكرفانات والمباني الجاهزة (Prefabricated Portable Cabins & Offices) بمهنية عالية وأبعاد قياسية دقيقة. يتضمن كود HAM-CRV-001 وحدات معزولة بالكامل مقاومة للظروف الجوية، مُصممة للاستخدام ك مكاتب ميدانية، سكن مهندسين، ومجمعات إدارية مؤقتة ودائمة، مع تركيب أبواب وسقف معزول بأعلى معايير الجودة لتلبية احتياجات المواقع الإنشائية والصناعية."
    ],
    "bodyEn": [
      "Hamsho manufactures prefabricated cabins and portable offices to accurate standard dimensions. HAM-CRV-001 covers fully insulated, weather-resistant units for use as site offices, engineers' housing and temporary or permanent admin compounds, with insulated doors and roofs built to high quality standards for construction and industrial sites."
    ],
    "features": [
      {
        "t": "ألواح عزل حراري ومائي",
        "d": "استخدام ألواح معزولة عالية الكثافة لضمان الحماية من العوامل المناخية القاسية.",
        "tEn": "Thermal and water insulation (sandwich panels)",
        "dEn": "High-density insulated panels protect against harsh weather."
      },
      {
        "t": "هيكل حديدي مجلفن متين",
        "d": "تصميم القواعد والأعضاء الإنشائية من الفولاذ المقاوم للصدأ والتآكل لزيادة العمر الافتراضي.",
        "tEn": "Sturdy galvanised steel frame",
        "dEn": "Bases and structural members in rust- and corrosion-resistant steel for a longer life."
      },
      {
        "t": "تجهيز كهربائي وصحي كامل",
        "d": "شبكة تمديدات داخلية مخفية جاهزة للتوصيل المباشر بالموقع.",
        "tEn": "Complete electrical and plumbing fit-out",
        "dEn": "Concealed internal services ready for direct connection on site."
      },
      {
        "t": "سهولة النقل والتركيب",
        "d": "تصميم مدمج يتيح الشحن السريع والتركيب الفوري في مواقع العمل النائية.",
        "tEn": "Easy transport and installation",
        "dEn": "A compact design for fast shipping and immediate set-up on remote sites."
      },
      {
        "t": "تشطيبات داخلية وخارجية راقية",
        "d": "أرضيات مقاومة للاحتكاك وأسقف معزولة تمنح بيئة عمل مريحة وأمنة.",
        "tEn": "Quality interior and exterior finishes",
        "dEn": "Hard-wearing floors and insulated ceilings for a comfortable, safe workplace."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-001/1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/images/projects/ham-crv-001/2.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-001/3.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/images/projects/ham-crv-001/4.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-001/5.webp",
        "w": 1024,
        "h": 768
      },
      {
        "src": "/images/projects/ham-crv-001/6.webp",
        "w": 1024,
        "h": 768
      }
    ]
  },
  {
    "slug": "ham-crv-002",
    "code": "HAM-CRV-002",
    "category": "caravans",
    "title": "تصنيع كرفانات مزدوجة ومجمعات سكنية مسبقة الصنع للمواقع الإنشائية",
    "titleEn": "Double caravans and prefabricated housing compounds for construction sites",
    "body": [
      "تتميز شركة حمشو بتقديم كرفانات ومباني سكنية جاهزة ذات مساحات واسعة ووحدات مزدوجة (Modular Container Units & Modular Camps). يوفر مشروع HAM-CRV-002 حلولاً مثالية للمخيمات السكنية ومقرات المشاريع الكبرى، مع توفير عزل حراري وصوتي ممتاز ونوافذ معزولة لحماية ممتازة في مختلف الظروف الجوية، مع ضمان سرعة التسليم وسهولة التفكيك وإعادة التجميع."
    ],
    "bodyEn": [
      "Hamsho delivers spacious prefabricated caravans and housing buildings in double modular units. HAM-CRV-002 is an ideal solution for housing camps and large project headquarters, with excellent thermal and sound insulation and insulated windows for any weather, plus fast delivery and easy dismantling and reassembly."
    ],
    "features": [
      {
        "t": "تصميم وحدات قابلة للتجميع",
        "d": "إمكانية ربط أكثر من كرفان لزيادة المساحة وتشكيل مجمعات إدارية وسكنية.",
        "tEn": "Modular design",
        "dEn": "Several caravans can be joined to enlarge the space and form admin and housing compounds."
      },
      {
        "t": "نظام عزل عالي الجودة",
        "d": "جدران وأسقف ساندوتش بنل بولي يوريثان (PU) لتقليل استهلاك الطاقة في التكييف.",
        "tEn": "High-quality insulation",
        "dEn": "Polyurethane (PU) sandwich-panel walls and roofs reduce air-conditioning energy use."
      },
      {
        "t": "أنظمة نوافذ وأبواب ألومنيوم/PVC",
        "d": "معزولة بزجاج مضاعف لمنع تسرب الأتربة والماء.",
        "tEn": "Aluminium/PVC windows and doors",
        "dEn": "Double-glazed and sealed against dust and water."
      },
      {
        "t": "أرضيات سمنت بورد أو PVC مقاومة للحريق",
        "d": "متانة عالية ومقاومة للرطوبة والاستخدام المكثف.",
        "tEn": "Fire-resistant cement-board or PVC floors",
        "dEn": "Tough, moisture-resistant and built for heavy use."
      },
      {
        "t": "نظام رفع ونقل آمن",
        "d": "زوايا صلبة مجهزة بحلقات رفع لتسهيل الشحن عبر الشاحنات والرافعات.",
        "tEn": "Safe lifting and transport",
        "dEn": "Solid corners with lifting rings for easy shipping by truck and crane."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-002/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-crv-002/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-crv-002/3.webp",
        "w": 1673,
        "h": 940
      }
    ]
  },
  {
    "slug": "ham-crv-003",
    "code": "HAM-CRV-003",
    "category": "caravans",
    "title": "تصنيع كرفانات حمامات ووحدات صحية مسبقة الصنع متكاملة",
    "titleEn": "Prefabricated toilet and ablution caravans",
    "body": [
      "تستعرض شركة حمشو حلول التجهيزات الصحية الميدانية المتقدمة من خلال كرفانات الحصص الصحية (Prefabricated Ablution & Toilet Container Units). تم تصميم كود HAM-CRV-003 ليوفر مقصورات حمامات ومغاسل معزولة كلياً ومقاومة للمياه والرطوبة، مجهزة بأحدث أدوات السباكة والصرف الصحي والتمديدات الكهربائية المقاومة للماء، لتلبية احتياجات المواقع والمخيمات والفعاليات."
    ],
    "bodyEn": [
      "Hamsho provides advanced field sanitation through prefabricated ablution and toilet container units. HAM-CRV-003 provides fully insulated, water- and moisture-resistant toilet and washbasin cubicles, fitted with modern plumbing, drainage and waterproof electrics for sites, camps and events."
    ],
    "features": [
      {
        "t": "عزل كامل ومقاومة عالية للرطوبة",
        "d": "جدران وأرضيات مكسوة بمواد مضادة للبكتيريا وسهلة التنظيف.",
        "tEn": "Full insulation and high moisture resistance",
        "dEn": "Walls and floors covered in antibacterial, easy-clean materials."
      },
      {
        "t": "شبكة سباكة وصرف صحي متكاملة",
        "d": "مواسير معزولة، خازنات مياه، ومخارج صرف جاهزة للتوصيل السريع.",
        "tEn": "Complete plumbing and drainage",
        "dEn": "Insulated pipes, water tanks and drain outlets ready for quick connection."
      },
      {
        "t": "تجهيزات صحية عالية الجودة",
        "d": "مراحيض (عربية/أفرنجية)، مغاسل، مرايا، وتهوية ميكانيكية فعالة (شفاطات).",
        "tEn": "Quality sanitary fittings",
        "dEn": "Squat or Western toilets, washbasins, mirrors and effective mechanical extract fans."
      },
      {
        "t": "أرضيات مانعة للانزلاق",
        "d": "صممت لضمان السلامة والنظافة المستمرة.",
        "tEn": "Anti-slip flooring",
        "dEn": "Designed for safety and easy, constant cleaning."
      },
      {
        "t": "هيكل خارجي صلب وساندوتش بنل",
        "d": "مقاوم للصدأ والتآكل في البيئات الرطبة والمطيرة.",
        "tEn": "Solid exterior and sandwich panels",
        "dEn": "Resistant to rust and corrosion in damp and rainy conditions."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-003/1.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-003/2.webp",
        "w": 1600,
        "h": 900
      },
      {
        "src": "/images/projects/ham-crv-003/3.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-003/4.webp",
        "w": 1800,
        "h": 1346
      },
      {
        "src": "/images/projects/ham-crv-003/5.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-crv-004",
    "code": "HAM-CRV-004",
    "category": "caravans",
    "title": "تصنيع كرفانات مطابخ وقاعات طعام جاهزة مسبقة الصنع",
    "titleEn": "Prefabricated kitchen and dining caravans",
    "body": [
      "تُنفذ شركة حمشو كرفانات المطبخ والإعاشة الميدانية (Prefabricated Kitchen & Dining Container Units) بكفاءة هندسية عالية. يُلبي كود HAM-CRV-004 كافة متطلبات إعداد الطعام والطهي في المواقع النائية والمخيمات، مع توفير عزل حراري متطور، وأسطح مضادة للحريق والتآكل، ومنافذ تهوية مخصصة، لتوفير بيئة طهي صحية وآمنة بالكامل."
    ],
    "bodyEn": [
      "Hamsho builds prefabricated kitchen and dining container units to a high engineering standard. HAM-CRV-004 meets all the needs of food preparation and cooking on remote sites and camps, with advanced thermal insulation, fire- and corrosion-resistant surfaces and dedicated ventilation for a healthy, safe cooking environment."
    ],
    "features": [
      {
        "t": "أسطح وجدران مضادة للحريق والدهون",
        "d": "استخدام مواد سهلة التنظيف ومقاومة للزيوت والحرارة العالية.",
        "tEn": "Fire- and grease-resistant surfaces",
        "dEn": "Easy-clean materials that stand up to oil and high heat."
      },
      {
        "t": "تجهيز شبكة غاز وتهوية متطورة",
        "d": "مراوح شفط مدعومة ومنافذ لتصريف الدخان والحرارة.",
        "tEn": "Gas and ventilation systems",
        "dEn": "Powered extract fans and outlets for smoke and heat."
      },
      {
        "t": "توزيع كهربائي عالي التحمل",
        "d": "مقابس ومفاتيح كهربائية مخصصة لتشغيل معدات المطابخ الثقيلة.",
        "tEn": "Heavy-duty electrical distribution",
        "dEn": "Dedicated sockets and switches for heavy kitchen equipment."
      },
      {
        "t": "أرضيات عازلة للماء ومقاومة للانزلاق",
        "d": "لتسهيل عمليات الغسيل المستمر والصيانة الهيدروليكية.",
        "tEn": "Waterproof, anti-slip floors",
        "dEn": "Built for frequent washing and easy maintenance."
      },
      {
        "t": "ساندوتش بنل عالي العزل الحراري",
        "d": "للحفاظ على درجة حرارة متوازنة داخل الوحدة وتوفير الطاقة.",
        "tEn": "High thermal insulation",
        "dEn": "Sandwich panels keep the temperature balanced inside and save energy."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-004/1.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-004/2.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-004/3.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-004/4.webp",
        "w": 1599,
        "h": 899
      }
    ]
  },
  {
    "slug": "ham-crv-005",
    "code": "HAM-CRV-005",
    "category": "caravans",
    "title": "تصنيع غرف حراسة وكبائن أمنية جاهزة معزولة",
    "titleEn": "Prefabricated insulated guard rooms and security cabins",
    "body": [
      "تصمم شركة حمشو وتصنع كبائن وغرف الحراسة مسبقة الصنع (Prefabricated Security Guard Cabins) بمواصفات أمان عالية ورؤية بانورامية ممتازة. توفر وحدة HAM-CRV-005 بيئة عمل مريحة لأفراد الأمن والحراسة بفضل العزل الحراري التام، والنوافذ الزجاجية الموزعة استراتيجياً، والتصميم المدمج المقاوم لجميع الظروف المناخية."
    ],
    "bodyEn": [
      "Hamsho designs and builds prefabricated security guard cabins with high security specs and excellent all-round visibility. HAM-CRV-005 gives guards a comfortable workplace thanks to full thermal insulation, well-placed glazing and a compact, weatherproof design."
    ],
    "features": [
      {
        "t": "رؤية محيطية واسعة (360 درجة)",
        "d": "نوافذ ألومنيوم/PVC مزوّدة بزجاج معزول لرؤية كاشفة ومريحة.",
        "tEn": "Wide 360° visibility",
        "dEn": "Aluminium/PVC windows with insulated glass for a clear, comfortable view."
      },
      {
        "t": "عزل حراري وصوتي عالي الكفاءة",
        "d": "جدران ساندوتش بنل تحمي من حرارة الصيف وبرودة الشتاء.",
        "tEn": "Efficient thermal and sound insulation",
        "dEn": "Sandwich-panel walls protect against summer heat and winter cold."
      },
      {
        "t": "حجم مدمج وسهل التثبيت",
        "d": "إمكانية نقل الكابينة وتثبيتها فوراً على أي سطح مستوٍ أو نقطة تفتيش.",
        "tEn": "Compact and easy to install",
        "dEn": "The cabin can be moved and set up immediately on any level surface or checkpoint."
      },
      {
        "t": "توصيلات كهربائية جاهزة",
        "d": "تشمل نقاط إضاءة، مقابس للتكييف والشواحن، ولوحة توزيع آمنة.",
        "tEn": "Ready electrical connections",
        "dEn": "Lighting points, sockets for air conditioning and chargers, and a safe distribution board."
      },
      {
        "t": "هيكل معدني قوي مقاوم للصدأ",
        "d": "مطلي بدهانات مقاومة للتقشر والعوامل الجوية.",
        "tEn": "Strong rust-resistant steel frame",
        "dEn": "Painted with peel- and weather-resistant coatings."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-005/1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/images/projects/ham-crv-005/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-crv-005/3.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-crv-006",
    "code": "HAM-CRV-006",
    "category": "caravans",
    "title": "بناء وتشييد هناجر ومستودعات ساندوتش بنل مسبقة الصنع",
    "titleEn": "Prefabricated sandwich-panel hangars and warehouses",
    "body": [
      "تتخصص شركة حمشو في تصميم وتجميع الهياكل المعدنية والمستودعات مسبقة الصنع (Prefabricated Steel Hangar & Warehouses) المكسوة بألواح الساندوتش بنل المعزولة. يقدم مشروع HAM-CRV-006 مساحات مغلقة واسعة خالية من الأعمدة الداخلية العائقة، مما يجعلها مثالية للتخزين الصناعي، ورش العمل، والمظلات الكبيرة مع ضمان الحماية التامة من الحرارة والأمطار."
    ],
    "bodyEn": [
      "Hamsho designs and assembles prefabricated steel hangars and warehouses clad in insulated sandwich panels. HAM-CRV-006 provides large enclosed spaces free of internal columns, ideal for industrial storage, workshops and large shelters, with full protection from heat and rain."
    ],
    "features": [
      {
        "t": "هياكل فولاذية عالية الإجهاد",
        "d": "تصميم إنشائي مدروس لتحمل أوزان الرياح والاهتزازات.",
        "tEn": "High-strength steel structure",
        "dEn": "An engineered structure designed to carry wind loads and vibration."
      },
      {
        "t": "تكسية ببنل معزول حرارياً ومائياً",
        "d": "تغطية السقف والجدران بألواح ساندوتش بنل بولي يوريثان.",
        "tEn": "Thermally and water-insulated cladding",
        "dEn": "Roof and walls covered with polyurethane sandwich panels."
      },
      {
        "t": "أبواب صناعية واسعة",
        "d": "إمكانية إضافة أبواب سحابية أو كهربائية مخصصة لمرور الشاحنات والآليات.",
        "tEn": "Wide industrial doors",
        "dEn": "Sliding or electric doors can be added for trucks and machinery."
      },
      {
        "t": "تهوية وإضاءة طبيعية",
        "d": "دمج ألواح بولي كربونات شفافة بالأسقف لتوفير الطاقة نهاراً.",
        "tEn": "Natural light and ventilation",
        "dEn": "Clear polycarbonate roof panels save energy during the day."
      },
      {
        "t": "سرعة الإنجاز والتجميع",
        "d": "تركيب سريع بالموقع مقارنة بالبناء التقليدي مما يقلل التكلفة والوقت.",
        "tEn": "Fast assembly",
        "dEn": "Quick on-site installation compared with traditional building, cutting cost and time."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-006/1.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-006/2.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-006/3.webp",
        "w": 1280,
        "h": 720
      },
      {
        "src": "/images/projects/ham-crv-006/4.webp",
        "w": 1280,
        "h": 720
      }
    ]
  },
  {
    "slug": "ham-crv-007",
    "code": "HAM-CRV-007",
    "category": "caravans",
    "title": "بناء وتجهيز عيادات ومستشفيات ميدانية مسبقة الصنع",
    "titleEn": "Prefabricated field clinics and medical units",
    "body": [
      "تُنفذ شركة حمشو عيادات ومحطات طبية مسبقة الصنع (Prefabricated Mobile Medical Clinics & Units) مصممة وفق أعلى المعايير الصحية والهندسية. يوفر كود HAM-CRV-007 مساحات معقمة ومعزولة كلياً تتضمن غرف فحص، معاطف طبية، ومرافق صحية مجهزة بتمديدات سريعة، مما يجعلها الحل الأمثل للرعاية الصحية في المناطق النائية ومواقع الطوارئ."
    ],
    "bodyEn": [
      "Hamsho builds prefabricated mobile medical clinics and units to high health and engineering standards. HAM-CRV-007 provides fully insulated, hygienic spaces with examination rooms, partitions and sanitary facilities with quick-connect services — an ideal solution for healthcare in remote areas and emergency sites."
    ],
    "features": [
      {
        "t": "تشطيبات معقمة وسهلة التطهير",
        "d": "أرضيات فينيل طبية بدون فواصل وجدران مضادة للبكتيريا.",
        "tEn": "Hygienic, easy-to-disinfect finishes",
        "dEn": "Seamless medical vinyl floors and antibacterial walls."
      },
      {
        "t": "عزل حراري وصوتي ممتاز",
        "d": "بيئة مريحة للمرضى والطاقم الطبي تقاوم الحرارة الخارجية.",
        "tEn": "Excellent thermal and sound insulation",
        "dEn": "A comfortable environment for patients and staff, shielded from outside heat."
      },
      {
        "t": "تمديدات كهربائية وطبية مخصصة",
        "d": "تحضير مسارات للأجهزة الطبية، أجهزة التكييف، والإضاءة الطبية.",
        "tEn": "Dedicated electrical and medical services",
        "dEn": "Routes prepared for medical equipment, air conditioning and clinical lighting."
      },
      {
        "t": "تقسيم داخلي مرن",
        "d": "إمكانية فصل الاستقبال عن غرف الكشف والمختبرات بحصص عازلة.",
        "tEn": "Flexible interior layout",
        "dEn": "Reception can be separated from examination rooms and labs with insulated partitions."
      },
      {
        "t": "سهولة ونقل فوري",
        "d": "إمكانية الشحن السريع بالكامل وتركيبها بفعالية في أي موقع ميداني.",
        "tEn": "Ready to move immediately",
        "dEn": "Can be shipped complete and installed quickly on any field site."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-007/1.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-007/2.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-007/3.webp",
        "w": 1600,
        "h": 900
      }
    ]
  },
  {
    "slug": "ham-crv-008",
    "code": "HAM-CRV-008",
    "category": "caravans",
    "title": "تصنيع وحدات ومجمعات سكن العمال والمخيمات الميدانية",
    "titleEn": "Worker accommodation units and field camps",
    "body": [
      "تُقدم شركة حمشو حلول المجمعات السكنية لمواقع المشاريع (Prefabricated Worker Accommodation Camps) المصممة لاستيعاب أعداد كبيرة من الكوادر والعمال بكفاءة وراحة تامة. يضمن مشروع HAM-CRV-008 بيئة سكنية معزولة ومقاومة للحريق والظروف الجوية الصعبة، مع توزيع هندسي مدروس للصالات والغرف والمرافق المشتركة."
    ],
    "bodyEn": [
      "Hamsho provides prefabricated worker accommodation camps for project sites, designed to house large teams efficiently and comfortably. HAM-CRV-008 delivers insulated, fire- and weather-resistant living quarters with a well-planned layout of halls, rooms and shared facilities."
    ],
    "features": [
      {
        "t": "استغلال متطور للمساحات",
        "d": "غرف سكنية تتسع لعدة أسرة مع خزانات وأماكن استراحة.",
        "tEn": "Efficient use of space",
        "dEn": "Rooms for several beds with wardrobes and rest areas."
      },
      {
        "t": "عزل حراري متفوق",
        "d": "جدران ساندوتش بنل صلبة تقلل من نفاذ الحرارة والضوضاء الخارجية.",
        "tEn": "Superior thermal insulation",
        "dEn": "Solid sandwich-panel walls cut heat gain and outside noise."
      },
      {
        "t": "أنظمة سلامة وأمان",
        "d": "أبواب مقاومة للحريق ومنافذ طوارئ مجهزة وتمديدات آمنة.",
        "tEn": "Safety systems",
        "dEn": "Fire-resistant doors, equipped emergency exits and safe wiring."
      },
      {
        "t": "تأسيس صحي وكهربائي كامل",
        "d": "توزيع متكافئ للكهرباء والتكييف والصرف الصحي لكل وحدة.",
        "tEn": "Complete plumbing and electrical services",
        "dEn": "Power, air conditioning and drainage distributed evenly to every unit."
      },
      {
        "t": "بناء اقتصادي وسريع",
        "d": "إنجاز مجمعات سكنية ضخمة في أوقات قياسية وتكلفة منافسة.",
        "tEn": "Fast, economical construction",
        "dEn": "Large camps completed in record time at a competitive cost."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-008/1.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-008/2.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-008/3.webp",
        "w": 1800,
        "h": 811
      }
    ]
  },
  {
    "slug": "ham-crv-009",
    "code": "HAM-CRV-009",
    "category": "caravans",
    "title": "تصنيع كرفانات مجمعات تعليمية وفصول دراسية جاهزة",
    "titleEn": "Prefabricated classrooms and school units",
    "body": [
      "تُصمم وتُنفذ شركة حمشو فصولاً دراسية ومجمعات تعليمية مسبقة الصنع (Prefabricated Classrooms & School Units) توفر بيئة تعليمية صحية وآمنة للطلاب. يركز كود HAM-CRV-009 على توفير إضاءة طبيعية ممتازة، وعزل صوتي لمنع الضوضاء، مع مواد آمنة وغير سامة في التشطيبات الداخلية والخارجية."
    ],
    "bodyEn": [
      "Hamsho designs and builds prefabricated classrooms and school units that give students a healthy, safe place to learn. HAM-CRV-009 focuses on excellent natural light and sound insulation, with safe, non-toxic materials inside and out."
    ],
    "features": [
      {
        "t": "عزل صوتي وحراري ممتاز",
        "d": "توفير بيئة هادئة ومناسبة للتركيز والتعليم داخل الفصل.",
        "tEn": "Excellent sound and thermal insulation",
        "dEn": "A quiet classroom environment suited to concentration and learning."
      },
      {
        "t": "نوافذ واسعة بتهوية ممتازة",
        "d": "إطارات ألومنيوم مع زجاج معزول لتوفير أقصى قدر من الضوء الطبيعي.",
        "tEn": "Large windows with good ventilation",
        "dEn": "Aluminium frames with insulated glass for maximum daylight."
      },
      {
        "t": "أرضيات صلبة ومقاومة للاحتكاك",
        "d": "تتحمل الاستخدام الكثيف والحركة المستمرة للطلاب.",
        "tEn": "Tough, hard-wearing floors",
        "dEn": "Built for heavy use and constant student traffic."
      },
      {
        "t": "سلامة المواد المستخدمة",
        "d": "دهانات وبنلات خالية من المواد الضارة صديقة للبيئة.",
        "tEn": "Safe materials",
        "dEn": "Environment-friendly paints and panels free of harmful substances."
      },
      {
        "t": "مرونة التوسع الأفي والعمودي",
        "d": "إمكانية زيادة عدد الفصول والمكاتب الإدارية بسهولة مستقبلاً.",
        "tEn": "Easy to expand",
        "dEn": "More classrooms and admin offices can be added easily later, side by side or upward."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-009/1.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-009/2.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-009/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-crv-010",
    "code": "HAM-CRV-010",
    "category": "caravans",
    "title": "تصنيع كرفانات توسعة وقاعات اجتماعات مسبقة الصنع",
    "titleEn": "Prefabricated meeting halls and extension caravans",
    "body": [
      "تُوفر شركة حمشو قاعات اجتماعات ومكاتب تنفيذية جاهزة ومتحركة (Prefabricated Conference & Meeting Rooms) تتميز بالفخامة والتصميم المعماري العصري. يُلبي كود HAM-CRV-010 متطلبات الإدارة في موقع العمل من خلال تقديم قاعات واسعة خالية من العوائق الإنشائية، مجهزة بالكامل بعزل صوتي عالي وأنظمة إضاءة حديثة."
    ],
    "bodyEn": [
      "Hamsho provides ready-made, movable conference rooms and executive offices with a refined, modern architectural design. HAM-CRV-010 meets on-site management needs with large rooms free of structural obstructions, fully equipped with high sound insulation and modern lighting."
    ],
    "features": [
      {
        "t": "مساحات مفتوحة وبناء بدون أعمدة وسطية",
        "d": "إمكانية ترتيب الطاولات والأثاث المكتبي بحرية.",
        "tEn": "Open spaces with no central columns",
        "dEn": "Tables and office furniture can be arranged freely."
      },
      {
        "t": "تشطيبات دافئة وعصرية",
        "d": "أرضيات باركيه أو PVC عالي الجودة مع أسقف مستعارة أنيقة.",
        "tEn": "Warm, modern finishes",
        "dEn": "Quality parquet or PVC floors with elegant suspended ceilings."
      },
      {
        "t": "عزل صوتي فائق",
        "d": "ألواح ساندوتش بنل بكثافة عالية تمنع خروج أو دخول الأصوات الخارجية.",
        "tEn": "Superior sound insulation",
        "dEn": "High-density sandwich panels keep sound in and outside noise out."
      },
      {
        "t": "تأسيس لشبكات الاتصالات والعرض",
        "d": "مسارات جاهزة لكابلات الشاشات، الإنترنت، وأنظمة الصوت.",
        "tEn": "Ready for communications and AV",
        "dEn": "Prepared routes for screen, internet and sound-system cabling."
      },
      {
        "t": "تصميم خارجي مودرن",
        "d": "واجهات جذابة تعكس الطابع المهني والتنفيذي للشركة.",
        "tEn": "Modern exterior design",
        "dEn": "Attractive façades that reflect a professional, executive image."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-010/1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/images/projects/ham-crv-010/2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/images/projects/ham-crv-010/3.webp",
        "w": 1024,
        "h": 768
      }
    ]
  },
  {
    "slug": "ham-crv-011",
    "code": "HAM-CRV-011",
    "category": "caravans",
    "title": "تصنيع كرفانات فاخرة ومكاتب VIP مسبقة الصنع بتشطيبات مودرن",
    "titleEn": "Luxury VIP caravans and prefabricated offices with modern finishes",
    "body": [
      "تتميز شركة حمشو بتصميم وتصنيع المكاتب والوحدات السكنية الفاخرة (Luxury VIP Modular Cabins) التي تجمع بين سرعة البناء الجاهز والتشطيبات المعمارية الراقية. يوفر مشروع HAM-CRV-011 مساحات فاخرة لكبار الشخصيات والمدراء في المواقع الميدانية، مجهزة بأسقف حديثة، وإضاءات LED مخفية، وتكسيات خارجية عصرية مقاومة للعوامل الجوية."
    ],
    "bodyEn": [
      "Hamsho designs and builds luxury VIP modular cabins that combine the speed of prefabrication with refined architectural finishes. HAM-CRV-011 provides premium spaces for executives and VIPs on field sites, with modern ceilings, concealed LED lighting and contemporary weather-resistant exterior cladding."
    ],
    "features": [
      {
        "t": "تشطيبات خاصة عالي الجودة",
        "d": "ديكورات داخلية مودرن مع خيارات خشبية وأرضيات ممتازة.",
        "tEn": "High-quality VIP finishes",
        "dEn": "Modern interiors with wood options and premium flooring."
      },
      {
        "t": "واجهات زجاجية واسعة",
        "d": "توفر إضاءة طبيعية معزل حراري وصوتي كامل.",
        "tEn": "Large double-glazed fronts",
        "dEn": "Natural light with full thermal and sound insulation."
      },
      {
        "t": "تأسيس أنظمة التكييف المخفي والسمارت",
        "d": "شبكات كهربائية وداتا مدمجة بشكل مخفي وأنيق.",
        "tEn": "Concealed AC and smart systems",
        "dEn": "Power and data networks built in neatly out of sight."
      },
      {
        "t": "عزل هيدروليكي وحراري متطور",
        "d": "حماية تامة ضد التغيرات المناخية مع مظهر استثنائي.",
        "tEn": "Advanced water and thermal insulation",
        "dEn": "Full protection from the weather with an outstanding look."
      },
      {
        "t": "قاعدة فولاذية معزولة ومقاومة للصدأ",
        "d": "تضمن استقرار الوحدة وطول عمرها الافتراضي.",
        "tEn": "Insulated, rust-resistant steel base",
        "dEn": "Keeps the unit stable and extends its service life."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-011/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-crv-011/2.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-crv-012",
    "code": "HAM-CRV-012",
    "category": "caravans",
    "title": "تصنيع كرفانات المصليات المساجد مسبقة الصنع المعزولة",
    "titleEn": "Prefabricated insulated prayer halls and mosques",
    "body": [
      "تُنفذ شركة حمشو مصليات ومساجد جاهزة مسبقة الصنع (Prefabricated Mosque & Prayer Hall Units) بكافة المستلزمات المعمارية. يوفر كود HAM-CRV-012 مساحات واسعة مخصصة للصلاة، معزولة بالكامل حرارياً وصوتياً، ومجهزة بأماكن للوضوء ومحراب، مع مراعاة أعلى معايير الجودة والراحة للمصلين في مواقع العمل والمجمعات السكنية."
    ],
    "bodyEn": [
      "Hamsho builds prefabricated mosques and prayer halls with all the architectural essentials. HAM-CRV-012 provides large prayer spaces, fully insulated against heat and noise, with ablution areas and a mihrab, built to high standards of quality and comfort for worshippers on work sites and in residential compounds."
    ],
    "features": [
      {
        "t": "تنسيق داخلي مخصص للصلاة",
        "d": "تصميم مفتوح يتيح استيعاب صفوف المصلين بحرية وبدون أعمدة.",
        "tEn": "Interior laid out for prayer",
        "dEn": "An open plan that fits rows of worshippers freely with no columns."
      },
      {
        "t": "عزل حراري وصوتي تام",
        "d": "جدران وأسقف ساندوتش بنل تحافظ على جو بارد وهادئ بالداخل.",
        "tEn": "Full thermal and sound insulation",
        "dEn": "Sandwich-panel walls and roofs keep the interior cool and quiet."
      },
      {
        "t": "إمكانية دمج ميضأة ومرافق صحية",
        "d": "توصيل مباشر لشبكات المياه والصرف الصحي.",
        "tEn": "Ablution and sanitary facilities can be added",
        "dEn": "Direct connection to water and drainage networks."
      },
      {
        "t": "مواصفات مفروشات وأرضيات سهلة التنظيف",
        "d": "جاهزية لتركيب السجاد والتكييف بسهولة.",
        "tEn": "Easy-clean floors and furnishings",
        "dEn": "Ready for carpeting and air conditioning."
      },
      {
        "t": "تصميم خارجي إسلامي بسقف جملوني أو قبة (حسب الطلب)",
        "d": "مظهر جمالي يتناسب مع وظيفة المبنى.",
        "tEn": "Islamic exterior design with gable roof or dome (on request)",
        "dEn": "An appearance that suits the building's purpose."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-012/1.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-012/2.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-012/3.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-012/4.webp",
        "w": 1800,
        "h": 1350
      }
    ]
  },
  {
    "slug": "ham-crv-013",
    "code": "HAM-CRV-013",
    "category": "caravans",
    "title": "تصنيع كرفانات المختبرات والمعامل الميدانية الجاهزة",
    "titleEn": "Prefabricated field laboratory caravans",
    "body": [
      "تقدم شركة حمشو وحدات المختبرات والمعامل الميدانية مسبقة الصنع (Prefabricated Mobile Laboratories) المصممة لاختبارات المواد، التربة، والخرسانة في مواقع البناء والمشاريع الصناعية. يضمن مشروع HAM-CRV-013 بيئة عمل آمنة، عازلة للغبار ومقاومة للمواد الكيميائية مع تجهيز كامل لمفتاح الكهرباء والتهوية المخصصة."
    ],
    "bodyEn": [
      "Hamsho provides prefabricated mobile laboratories designed for testing materials, soil and concrete on construction and industrial sites. HAM-CRV-013 ensures a safe, dust-proof, chemical-resistant workplace with complete electrics and dedicated ventilation."
    ],
    "features": [
      {
        "t": "أسطح مقاومة للمواد الكيميائية والأحماض",
        "d": "طاولات وأرضيات خرسانية/إيبوكسية صلبة وسهلة المعالجة.",
        "tEn": "Chemical- and acid-resistant surfaces",
        "dEn": "Solid concrete/epoxy benches and floors that are easy to treat."
      },
      {
        "t": "نظام تهوية وشفط طارد للغازات",
        "d": "حماية العاملين والتجربة.",
        "tEn": "Fume extraction and ventilation",
        "dEn": "Protects staff and tests alike."
      },
      {
        "t": "عزل حراري وضبط بدرجات الحرارة",
        "d": "لحماية أجهزة القياس الحساسة والدقيقة.",
        "tEn": "Thermal insulation and temperature control",
        "dEn": "Protects sensitive, precise measuring instruments."
      },
      {
        "t": "تأسيس كهربائي معزول ومضاد للشرر",
        "d": "توصيلات متينة للتعامل مع المعدات الثقيلة.",
        "tEn": "Insulated, spark-proof electrics",
        "dEn": "Robust connections for heavy equipment."
      },
      {
        "t": "ثبات إيكولوجي وهيكلي عالي",
        "d": "يتحمل اهتزازات الأجهزة الثقيلة كأجهزة فحص الضغط.",
        "tEn": "High structural stability",
        "dEn": "Withstands vibration from heavy equipment such as compression testers."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-013/1.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-013/2.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-013/3.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-013/4.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-013/5.webp",
        "w": 1600,
        "h": 1200
      }
    ]
  },
  {
    "slug": "ham-crv-014",
    "code": "HAM-CRV-014",
    "category": "caravans",
    "title": "تصنيع وحدات ومستودعات التبريد والتجميد مسبقة الصنع",
    "titleEn": "Prefabricated cold rooms and freezer units",
    "body": [
      "تُبدع شركة حمشو في تصنيع كرفانات وغرف التبريد والتجميد المحمولة (Prefabricated Cold Rooms & Freezer Containers). تم تصميم كود HAM-CRV-014 بألواح ساندوتش بنل عالي الكثافة من البولي يوريثان بأثخان خاصة وضغط هيدروليكي عالي لمنع أي تسرب حراري، مما يجعله المحل الأمثل لحفظ الأغذية والأدوية والمواد الحساسة."
    ],
    "bodyEn": [
      "Hamsho fabricates portable cold rooms and freezer containers. HAM-CRV-014 is built from high-density polyurethane sandwich panels of special thickness, pressed to prevent any heat leakage — the ideal place to store food, medicine and sensitive goods."
    ],
    "features": [
      {
        "t": "ساندوتش بنل تبريد بسمك عالي (10 سم - 15 سم)",
        "d": "كثافة فوم عالية لضمان العزل الحراري التام.",
        "tEn": "Thick cold-store panels (10–15 cm)",
        "dEn": "High-density foam for complete thermal insulation."
      },
      {
        "t": "أبواب محكمة التسكير مع مفصلات حرارية",
        "d": "تمنع تكون الثلج والتسريب وتسهم في حفظ الطاقة.",
        "tEn": "Tight-sealing doors with heated hinges",
        "dEn": "Prevent ice build-up and leakage and help save energy."
      },
      {
        "t": "أرضيات استانلس ستيل أو ألومنيوم مبشور",
        "d": "مضادة للانزلاق ومقاومة للأحمال الثقيلة والمياه.",
        "tEn": "Stainless-steel or chequer-plate aluminium floors",
        "dEn": "Anti-slip and resistant to heavy loads and water."
      },
      {
        "t": "تأسيس لوصلات وحدات التبريد",
        "d": "جاهزية سريعة لتركيب المعدات الميكانيكية.",
        "tEn": "Ready for compressor connections",
        "dEn": "Quick to fit with refrigeration equipment."
      },
      {
        "t": "سهولة النقل والتثبيت",
        "d": "إمكانية نقل غرفة التبريد بالكامل دون الحاجة لتفكيك الألواح.",
        "tEn": "Easy to move and install",
        "dEn": "The whole cold room can be moved without dismantling the panels."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-014/1.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-crv-014/2.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-crv-014/3.webp",
        "w": 1800,
        "h": 1013
      }
    ]
  },
  {
    "slug": "ham-crv-015",
    "code": "HAM-CRV-015",
    "category": "caravans",
    "title": "تصنيع كرفانات ومنافذ البيع والأكشاك التجارية الجاهزة",
    "titleEn": "Prefabricated kiosks and retail units",
    "body": [
      "تُنفذ شركة حمشو منافذ بيع وأكشاك تجارية مسبقة الصنع (Prefabricated Commercial Kiosks & Retail Units) بجودة عالية وتصاميم عصرية جذابة. يوفر كود HAM-CRV-015 حلاً سريعاً وفعالاً للمحلات المؤقتة والدائمة، المطاعم السريعة، والمقاهي، بفضل قابليته للنقل السريع مع توفير جميع التجهيزات الكهربائية والواجهات المفتوحة."
    ],
    "bodyEn": [
      "Hamsho builds prefabricated commercial kiosks and retail units in high quality with attractive modern designs. HAM-CRV-015 is a fast, effective solution for temporary and permanent shops, fast-food outlets and cafés, easy to relocate and complete with electrics and open service fronts."
    ],
    "features": [
      {
        "t": "واجهات وفتحات خدمة هيدروليكية/سحابية",
        "d": "سهلة الفتح والإغلاق مع إمكانية التأمين الكامل.",
        "tEn": "Lift-up or sliding service openings",
        "dEn": "Easy to open and close and fully lockable."
      },
      {
        "t": "تصميم عصري وجذاب",
        "d": "إمكانية إضافة هويات بصرية، إضاءات LED، وتكسيات ديكورية.",
        "tEn": "Modern, attractive design",
        "dEn": "Branding, LED lighting and decorative cladding can be added."
      },
      {
        "t": "عزل حراري متكامل",
        "d": "يوفر راحة تامة للباعة والعملاء طوال ساعات العمل.",
        "tEn": "Complete thermal insulation",
        "dEn": "Keeps staff and customers comfortable all day."
      },
      {
        "t": "توصيلات كهربائية قوية",
        "d": "متناسبة مع معدات تحضير القهوة، الأجهزة، وشاشات العرض.",
        "tEn": "Strong electrical connections",
        "dEn": "Sized for coffee machines, appliances and display screens."
      },
      {
        "t": "سهولة التجميع والتحريك",
        "d": "خيار مثالي للأنشطة التجارية في الحدائق، الأسواق، والشوارع.",
        "tEn": "Easy to assemble and move",
        "dEn": "Ideal for business in parks, markets and streets."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-015/1.webp",
        "w": 1800,
        "h": 1350
      },
      {
        "src": "/images/projects/ham-crv-015/2.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-015/3.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-015/4.webp",
        "w": 1599,
        "h": 899
      },
      {
        "src": "/images/projects/ham-crv-015/5.webp",
        "w": 1800,
        "h": 1350
      }
    ]
  },
  {
    "slug": "ham-crv-016",
    "code": "HAM-CRV-016",
    "category": "caravans",
    "title": "تصنيع وحدات السكن الجاهز المعزول ذو السقف الساندوتش بنل الأزرق",
    "titleEn": "Insulated prefabricated housing units with blue sandwich-panel roofs",
    "body": [
      "تُنفذ شركة حمشو مشاريع السكن الجاهز السريع والوحدات المعزولة المعتمدة على جدران الساندوتش بنل البيضاء مع أسقف الساندوتش بنل باللون الأزرق الجذاب (Prefabricated Housing Units with Blue Roof Panels). يُوفر هذا النموذج المعماري حلاً سكنياً متكاملاً، مجهزاً بنوافذ زجاجية عازلة، وأبواب خارجية صلبة، وتمديدات كهربائية وصحية مخفية لضمان أعلى مستويات الراحة والأمان في المجمعات والمواقع الميدانية."
    ],
    "bodyEn": [
      "Hamsho delivers fast-build prefabricated housing with white sandwich-panel walls and striking blue sandwich-panel roofs. The model is a complete housing solution with insulated windows, solid exterior doors and concealed electrical and plumbing services for comfort and safety in compounds and field sites."
    ],
    "features": [
      {
        "t": "أسقف ساندوتش بنل ملونة معزولة",
        "d": "تغطية منحنية أو مائلة باللون الأزرق تضمن التصريف السريع للأمطار والعزل الحراري التام.",
        "tEn": "Coloured insulated roof panels",
        "dEn": "Curved or pitched blue roofs that shed rain quickly and insulate fully."
      },
      {
        "t": "جدران ساندوتش بنل عالية الكثافة",
        "d": "جدران خارجية وداخلية بيضاء مقاومة للرطوبة والتآكل بخصائص عزل صوتي وحراري ممتاز.",
        "tEn": "High-density sandwich-panel walls",
        "dEn": "White inner and outer walls that resist moisture and corrosion, with excellent sound and thermal insulation."
      },
      {
        "t": "نوافذ ألومنيوم زجاجية معزولة",
        "d": "نوافذ مزدوجة بتصميم عصري توفر إضاءة طبيعية وتمنع تسرب الأتربة.",
        "tEn": "Insulated aluminium windows",
        "dEn": "Modern double windows that let in daylight and keep dust out."
      },
      {
        "t": "تجهيز المجمعات والقرى السكنية",
        "d": "إمكانية ربط وتكرار الوحدات لبناء قرى ومجمعات سكنية مسبقة الصنع بسرعة فائقة.",
        "tEn": "Built for compounds and villages",
        "dEn": "Units can be joined and repeated to build prefabricated villages very quickly."
      },
      {
        "t": "بنية تحتية وتمديدات مدمجة",
        "d": "تجهيز الممرات والوصلات الكهربائية والصحية بأسلوب منظم يضمن سهولة الصيانة.",
        "tEn": "Integrated services",
        "dEn": "Walkways and electrical and plumbing connections laid out neatly for easy maintenance."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-016/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-crv-016/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-crv-016/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-crv-017",
    "code": "HAM-CRV-017",
    "category": "caravans",
    "title": "تصنيع وتشييد المجمعات والقرى السكنية مسبقة الصنع المكسوّة بالحجر",
    "titleEn": "Stone-clad prefabricated housing compounds and villages",
    "body": [
      "تُنفذ شركة حمشو مشاريع القرى والمجمعات السكنية مسبقة الصنع ذات الواجهات المكسوة بالحجر الاصطناعي/المزخرف المدمج مع ألواح الساندوتش بنل المعزولة (Stone-Clad Prefabricated Residential Camps). يُقدم هذا المشروع (HAM-CRV-017) حلاً معمارياً متكاملاً يجمع بين المظهر العمراني الحجري الفاخر وسرعة التنفيذ والتركيب الممتازة للبيوت الجاهزة، مع توفير عزل حراري ومائي متطور وأسقف صلبة ملونة."
    ],
    "bodyEn": [
      "Hamsho builds prefabricated villages and housing compounds with façades clad in decorative artificial stone over insulated sandwich panels. HAM-CRV-017 combines the look of a solid stone building with the speed of prefabricated housing, with advanced thermal and water insulation and solid coloured roofs."
    ],
    "features": [
      {
        "t": "واجهات خارجية حجرية مزخرفة",
        "d": "منح الوحدات الجاهزة طابعاً معمارياً حقيقياً وفخماً يقاوم العوامل الجوية.",
        "tEn": "Decorative stone-clad façades",
        "dEn": "Gives prefabricated units a real, refined architectural look that stands up to the weather."
      },
      {
        "t": "جدران وأسقف معزولة بالكامل",
        "d": "الاعتماد على ألواح الساندوتش بنل داخل الهيكل لضمان العزل الحراري والصوتي التام.",
        "tEn": "Fully insulated walls and roofs",
        "dEn": "Sandwich panels inside the structure for full thermal and sound insulation."
      },
      {
        "t": "تصميم القرى والمجمعات الشاملة",
        "d": "تخطيط مجمعات إيواء وسكن متكاملة مع الممرات والرصف والبنية التحتية.",
        "tEn": "Complete village and compound design",
        "dEn": "Shelter and housing compounds planned with walkways, paving and infrastructure."
      },
      {
        "t": "نوافذ وأبواب معزولة مقاومة للأتربة",
        "d": "تركيب نوافذ زجاجية ذات قطاعات متينة توفر حماية ممتازة وإضاءة طبيعية.",
        "tEn": "Insulated, dust-proof windows and doors",
        "dEn": "Sturdy glazed windows that protect well and let in daylight."
      },
      {
        "t": "متانة إنشائية وسرعة تسليم",
        "d": "عمر افتراضي طويل للمباني مع انجاز المشروع في وقت قياسي مقارنة بالبناء التقليدي.",
        "tEn": "Durable and fast to deliver",
        "dEn": "Long-lasting buildings completed in record time compared with traditional construction."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-017/1.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-crv-017/2.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-crv-017/3.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-crv-017/4.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-crv-017/5.webp",
        "w": 1800,
        "h": 1013
      }
    ]
  },
  {
    "slug": "ham-crv-018",
    "code": "HAM-CRV-018",
    "category": "caravans",
    "title": "تصنيع وتشييد القرى والمجمعات السكنية الجاهزة من البلوك الخرساني",
    "titleEn": "Ready-built housing villages with concrete-block walls",
    "body": [
      "تتخصص شركة حمشو في بناء وتجهيز المجمعات والقرى السكنية الميدانية المعتمدة على جدران البلوك الخرساني مع أسقف الساندوتش بنل المعزولة (Concrete Block Prefab Housing Camps). يُوفر كود HAM-CRV-018 خياراً إنشائياً صلباً ومستداماً يجمع بين قوة جدران البلوك وسرعة تركيب وكفاءة عزل الأسقف الساندوتش بنل، مع تزويد الوحدات بنوافذ معزولة وحمايات شبكية وأبواب حديدية صلبة لتوفير أقصى درجات الأمان."
    ],
    "bodyEn": [
      "Hamsho builds and fits out field housing villages and compounds with concrete-block walls and insulated sandwich-panel roofs. HAM-CRV-018 is a solid, sustainable option that combines the strength of block walls with the fast installation and insulation of panel roofs, with insulated windows, security grilles and solid steel doors for maximum safety."
    ],
    "features": [
      {
        "t": "جدران من البلوك الخرساني المتين",
        "d": "توفير بنية إنشائية قوية ومقاومة للصدمات والظروف البيئية الصعبة.",
        "tEn": "Sturdy concrete-block walls",
        "dEn": "A strong structure that resists impact and harsh conditions."
      },
      {
        "t": "أسقف ساندوتش بنل معزولة",
        "d": "عزل حراري ومائي ممتاز يقلل من استهلاك الطاقة للتكييف والتدفئة.",
        "tEn": "Insulated panel roofing",
        "dEn": "Excellent thermal and water insulation that cuts heating and cooling energy."
      },
      {
        "t": "حمايات أمان للنوافذ والأبواب",
        "d": "تركيب شبكات وقضبان حماية صلبة باللون الأزرق على النوافذ لمنع الاقتحام ورفع مستويات الأمان.",
        "tEn": "Security for windows and doors",
        "dEn": "Solid blue bars and grilles on windows prevent break-ins."
      },
      {
        "t": "تخطيط وتجهيز القرى الميدانية",
        "d": "إمكانية بناء عشرات الوحدات السكنية المتناسقة مع تنظيم الشوارع والممرات بين المباني.",
        "tEn": "Planned field villages",
        "dEn": "Dozens of matching housing units can be built with organised streets and walkways."
      },
      {
        "t": "تشطيبات خارجية وداخلية مقاومة",
        "d": "طلاءات مقاومة للرطوبة والعوامل الجوية لضمان سهولة الصيانة وطول العمر الافتراضي.",
        "tEn": "Durable interior and exterior finishes",
        "dEn": "Moisture- and weather-resistant coatings for easy maintenance and long life."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-018/1.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-crv-018/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-crv-018/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-crv-018/4.webp",
        "w": 1600,
        "h": 1200
      }
    ]
  },
  {
    "slug": "ham-crv-019",
    "code": "HAM-CRV-019",
    "category": "caravans",
    "title": "بناء وتشييد قرى ومجمعات سكنية مسبقة الصنع من البلوك الحجري بأسقف ساندوتش بنل حمراء",
    "titleEn": "Prefabricated housing villages in stone block with red sandwich-panel roofs",
    "body": [
      "تُنفّذ شركة حمشو مشاريع التشييد العصراني والشامل للمجمعات والقرى السكنية مسبقة الصنع (Prefabricated Residential Village & Housing Units) المعتمدة على جدران البلوك الخرساني المزخرف عالي المتانة، والمغطاة بأسقف الساندوتش بنل المعزولة باللون الأحمر. يُوفر هذا النموذج المعماري حلاً سكنياً عالي الأمان والاستدامة، مجهزاً بنوافذ زجاجية ذات حمايات حديدية زرقاء مزخرفة لتوفير بيئة معيشية آمنة ومقاومة للعوامل المناخية القاسية في المجمعات السكنية والمشاريع الميدانية."
    ],
    "bodyEn": [
      "Hamsho builds complete prefabricated housing villages and units with walls of durable decorative concrete block, covered with red insulated sandwich-panel roofs. The model is a secure, sustainable housing solution with glazed windows behind decorative blue steel guards, for a safe living environment that stands up to harsh weather in residential compounds and field projects."
    ],
    "features": [
      {
        "t": "جدران مسبقة الصنع من البلوك الحجري",
        "d": "بناء واجهات وجدران سكنية صلبة باستخدام حجارة وبلوك خرساني بارز ومزخرف لمنح الوحدات طابعاً معمارياً راقياً ومتانة إنشائية فائقة.",
        "tEn": "Decorative stone-block walls",
        "dEn": "Solid façades and walls in raised, decorative concrete block for a refined look and great structural strength."
      },
      {
        "t": "أسقف ساندوتش بنل معزولة باللون الأحمر",
        "d": "تغطية الوحدات السكنية بأسقف من ألواح الساندوتش بنل الحمراء المعزولة حرارياً ومائياً لتوفير الحماية الكاملة من حرارة الصيف وأمطار الشتاء.",
        "tEn": "Red insulated sandwich-panel roofs",
        "dEn": "Thermally and water-insulated red roof panels protect from summer heat and winter rain."
      },
      {
        "t": "نوافذ معزولة وحمايات حديدية مزخرفة",
        "d": "تزويد كل وحدة سكنية بنوافذ زجاجية ذات قطاعات معزولة ومحاطة بقضبان حماية صلبة باللون الأزرق للحفاظ على أمان وسلامة القاطنين.",
        "tEn": "Insulated windows with decorative steel guards",
        "dEn": "Each unit has insulated glazed windows framed by solid blue security bars to keep residents safe."
      },
      {
        "t": "تجهيز المجمعات السكنية الميدانية",
        "d": "إمكانية تنفيذ وتكرار الوحدات على نطاق واسع لإنشاء قرى ومجمعات إيواء وسكن حاد في الموقع بفعالية عالية وتكلفة اقتصادية.",
        "tEn": "Field housing compounds",
        "dEn": "Units can be repeated at scale to build shelter and housing villages efficiently and economically."
      },
      {
        "t": "تنفيذ مسبق وتجهيز للبنية التحتية",
        "d": "بناء القواعد والأساسات الميدانية مع تجهيز المسارات للتمديدات الخدمية والصرف قبل التثبيت النهائي للأسقف والديكورات.",
        "tEn": "Prepared foundations and services",
        "dEn": "Footings and service and drainage routes are built before the roofs and finishes are fixed."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-crv-019/1.webp",
        "w": 1674,
        "h": 940
      },
      {
        "src": "/images/projects/ham-crv-019/2.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-spt-001",
    "code": "HAM-SPT-001",
    "category": "sports",
    "title": "تصنيع وتشييد الهياكل المعدنية وأسقف المظلات المضلعة للملاعب والمنشآت الرياضية",
    "titleEn": "Steel structures and ribbed canopy roofs for stadiums and sports facilities",
    "body": [
      "تُنفّذ شركة حمشو مشاريع التصنيع الهندسي والتشييد الميداني المتقدم للهياكل المعدنية المعلقة وأسقف المظلات للمدرجات الرياضية والمنشآت الضخمة (Sports Stadium Steel Canopy & Roof Systems). يتضمن المشروع تصنيع وتوريد ألواح الصاج المضلع المعزول والمصمم خصيصاً لمقاومة الرياح الشديدة وتغطية مدرجات الجماهير، بالإضافة إلى رفعه وتثبيته باستخدام أوناش ورافعات هيدروليكية مخصصة تحت إشراف مهندسين وفنيين متخصصين لضمان أعلى معايير الأمان والاستدامة في الملاعب الرياضية."
    ],
    "bodyEn": [
      "Hamsho engineers and erects suspended steel structures and canopy roofs for stadium stands and large facilities. The project covers fabricating insulated corrugated roof sheets designed to resist strong winds and cover spectator stands, then lifting and fixing them with hydraulic cranes under the supervision of specialist engineers and technicians."
    ],
    "features": [
      {
        "t": "هياكل شبكية فولاذية خفيفة وعالية المقاومة",
        "d": "إنشاء الشبكات الفولاذية العلوية والمظلات الجملونية لتغطية المدرجات الرياضية الشاسعة بدون أعمدة وسطية معيقة للرؤية.",
        "tEn": "Light, high-strength steel space trusses",
        "dEn": "Overhead steel grids and truss canopies cover wide stands with no central columns blocking the view."
      },
      {
        "t": "تصنيع وتوريد ألواح الصاج المضلع",
        "d": "كبس وتشكيل ألواح الصاج المعزولة والمجلفنة عالية الصلابة لتوفير الحماية الكاملة للمدرجات من الشمس والأمطار.",
        "tEn": "Corrugated metal roof sheets",
        "dEn": "Insulated, galvanised high-rigidity sheets pressed and formed to protect the stands from sun and rain."
      },
      {
        "t": "عمليات نقل ورفع هيدروليكية دقيقة",
        "d": "استخدام رافعات وشاحنات كرين هيدروليكية مجهزة لرفع الرزم والجمالونات إلى أعلى نقاط التثبيت المرتفعة بأمان تام.",
        "tEn": "Precise hydraulic lifting",
        "dEn": "Crane trucks lift bundles and trusses safely to the highest fixing points."
      },
      {
        "t": "تكسية مدرجات الرياضات والملاعب",
        "d": "تركيب الأسقف المعدنية بشكل متدرج يتوافق مع النمط المعماري لمدارج الملاعب والمضامير الرياضية.",
        "tEn": "Cladding stadium stands",
        "dEn": "Roofs installed in steps that follow the architecture of the stands and tracks."
      },
      {
        "t": "تجهيز وإشراف كادر هندسي ميداني",
        "d": "متابعة تنفيذ كافة أعمال السلامة، اللحامات الفولاذية، والتثبيت الميكانيكي من قبل فريق متخصص يرتدي أزياء ومعدات الحماية المعتمدة من شركة حمشو.",
        "tEn": "On-site engineering supervision",
        "dEn": "Safety, steel welding and mechanical fixing are overseen by a specialist Hamsho team in approved protective gear."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-spt-001/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-spt-001/2.webp",
        "w": 1254,
        "h": 1254
      },
      {
        "src": "/images/projects/ham-spt-001/3.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-spt-002",
    "code": "HAM-SPT-002",
    "category": "sports",
    "title": "تصنيع وتشييد الهياكل الفولاذية والجمالونات الزرقاء للصالات الرياضية المغلقة والمستودعات",
    "titleEn": "Blue steel trusses for indoor sports halls and warehouses",
    "body": [
      "تُنفّذ شركة حمشو مشاريع التصنيع الهندسي والإنشاء الميداني للهياكل الفولاذية والجمالونات الشبكية المتقدمة (Steel Truss Frames for Indoor Sports Halls) للصالات الرياضية المغلقة، الصالات المتعددة الاستخدامات، والمؤشرات الصناعية. يعتمد المشروع على تركيب شبكات جملونية من المقاطع والتيوبات الحديدية المدهونة باللون الأزرق المقاوم للصدأ، والمثبتة على جدران وأعمدة خرسانية وبلوك مفرغ عالي الصلابة، مما يحقق مجالات مفتوحة واسعة (Large Span) بدون أعمدة وسطية معيقة للحركة والحشود الرياضية."
    ],
    "bodyEn": [
      "Hamsho engineers and erects steel structures and lattice trusses for indoor sports halls, multi-purpose halls and industrial buildings. Truss grids of steel sections and tubes, painted rust-resistant blue, are fixed on concrete and block walls and columns to create wide open spans with no central columns in the way of players and crowds."
    ],
    "features": [
      {
        "t": "جمالونات شبكية هندسية واسعة البحور",
        "d": "تصميم وتصنيع هياكل شبكية معلقة تضمن أقصى درجات الثبات الهندسي وتغطي مساحات شاسعة للصالات الرياضية والمستودعات.",
        "tEn": "Wide-span lattice trusses",
        "dEn": "Suspended truss structures engineered for stability, covering large areas for sports halls and warehouses."
      },
      {
        "t": "طلاء حماية أفراني باللون الأزرق",
        "d": "حماية كافة التيوبات والجسور الحديدية بطلاء عالي التماسك والمقاومة للعوامل الجوية والتآكل.",
        "tEn": "Blue protective coating",
        "dEn": "All tubes and beams coated with a durable, weather- and corrosion-resistant paint."
      },
      {
        "t": "دمج الهياكل المعدنية مع البناء الحجري والخرساني",
        "d": "تثبيت الأجنحة والجسور الفولاذية بدقة عالية فوق قواعد وأعمدة البلوك الحجري والخرسانة المسلحة.",
        "tEn": "Steel combined with masonry and concrete",
        "dEn": "Steel wings and beams fixed accurately on block piers and reinforced-concrete columns."
      },
      {
        "t": "تركيب بآليات ورافعات هيدروليكية ثقيلة",
        "d": "استخدام شاحنات الكرين والرافعات الثقيلة لرفح ورصف الجمالونات العلوية وتثبيتها ميكانيكياً باللحامات والبراغي الصلبة.",
        "tEn": "Installed with heavy cranes",
        "dEn": "Crane trucks and heavy lifters raise and place the trusses, fixed with welds and high-strength bolts."
      },
      {
        "t": "جاهزية كاملة لتكسية السقف بالصاج والساندوتش بنل",
        "d": "إعداد شبكة التيوبات الفرعية لتلقي ألواح التغطية المعزولة وتوفير العزل الحراري والمائي التام.",
        "tEn": "Ready for sheet and sandwich-panel roofing",
        "dEn": "The secondary tube grid is prepared to receive insulated roof panels for full thermal and water insulation."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-spt-002/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-spt-002/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-spt-002/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-spt-003",
    "code": "HAM-SPT-003",
    "category": "sports",
    "title": "إنشاء وتشييد الملاعب الخماسية المسقوفة بهياكل معدنية وشباك حماية جانبية",
    "titleEn": "Covered five-a-side pitches with steel roofs and side safety nets",
    "body": [
      "تُنفّذ شركة حمشو المشاريع المتكاملة لتصميم وتشييد الملاعب الرياضية الخماسية المغلقة والمكشوفة (Covered Football Turf Pitches). تشمل خدمات الشركة إنشاء الهياكل الفولاذية العلوية المدهونة باللون الأزرق، تركيب أسقف الصاج المعزول لمواجهة الظروف الجوية، توريد وفرش العشب الصناعي المخصص للملاعب، بالإضافة إلى تركيب شباك الحماية الجانبية والسياج الحديدي وإنشاء المباني الخدمية المرافقة تحت إشراف هندسي ميداني متخصص."
    ],
    "bodyEn": [
      "Hamsho delivers complete covered and open five-a-side football pitches: blue-painted steel roof structures, insulated sheet roofing against the weather, supply and laying of artificial turf, side safety nets and steel fencing, and the accompanying service buildings — all under on-site engineering supervision."
    ],
    "features": [
      {
        "t": "هياكل شبكية وجملونات فولاذية مرتفعة",
        "d": "تركيب أسقف مضلعة من الجمالونات الفولاذية المدهونة باللون الأزرق لتغطية الملاعب بحجم واسع وبدون أعمدة داخلية تعيق حركة اللاعبين.",
        "tEn": "Raised steel truss canopy",
        "dEn": "Ribbed roofs on blue-painted steel trusses cover the whole pitch with no internal columns in the players' way."
      },
      {
        "t": "تكسية الأسقف بألواح الصاج المزدوج والمضلع",
        "d": "تركيب ألواح التغطية العلوية لمنع دخول مياه الأمطار وأشعة الشمس المباشرة، مع لمسات جمالية باللونين الأزرق والأبيض على الواجهات العلوية.",
        "tEn": "Double and corrugated sheet roofing",
        "dEn": "Roof panels keep out rain and direct sun, with blue and white accents on the upper façades."
      },
      {
        "t": "شباك حماية وسياج محيط بالمستطيل الأخضر",
        "d": "إحاطة الملعب بشبك مجلفن عالي المقاومة ومشدود على أعمدة فولاذية لحماية الكرات والأجهزة.",
        "tEn": "Safety nets and perimeter fencing",
        "dEn": "The pitch is enclosed with tough galvanised mesh tensioned on steel posts to contain balls and protect equipment."
      },
      {
        "t": "أعمال الرفع بالكرين والتركيب الميداني",
        "d": "استخدام رافعات هيدروليكية وشاحنات مخصصة لرفع وتثبيت الجمالونات الفولاذية وألواح التغطية العلوية في الموقع.",
        "tEn": "Crane lifting and site installation",
        "dEn": "Hydraulic cranes and dedicated trucks lift and fix the steel trusses and roof panels on site."
      },
      {
        "t": "تأسيس المباني الخدمية والإضاءة الميدانية",
        "d": "بناء غرف تبديل الملابس والإدارة من البلوك، وتثبيت شبكات الإضاءة الكاشفة للأنشطة الرياضية الليلية.",
        "tEn": "Service buildings and floodlighting",
        "dEn": "Block-built changing rooms and offices, plus floodlights for night games."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-spt-003/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-spt-003/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-spt-003/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-spt-003/4.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-spt-003/5.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-spt-004",
    "code": "HAM-SPT-004",
    "category": "sports",
    "title": "تصنيع وتشييد الهياكل الفولاذية المرتفعة وأعمدة الدعم الصفراء للصالات الرياضية والمستودعات",
    "titleEn": "Tall steel frames with yellow columns for sports halls and warehouses",
    "body": [
      "تُنفّذ شركة حمشو عمليات التصنيع الهندسي والإنشاء الميداني المتقدم للهياكل الفولاذية الثقيلة (Heavy Structural Steel Framing) المخصصة للصالات الرياضية المغلقة، المستودعات، والمنشآت الميدانية الضخمة. يعتمد المشروع على تركيب أعمدة صلبة مدهونة باللون الأصفر البارز لتسهيل الرؤية وتحديد أبعاد المبنى، مع شبكة جسور وتيوبات سقفية مدروسة لمقاومة الأحمال الهيكلية الشديدة والرياح. كما يتضمن التأسيس مدرجات بيتونية داخلية لخدمة الجماهير والمهرجانات الرياضية."
    ],
    "bodyEn": [
      "Hamsho engineers and erects heavy structural steel frames for indoor sports halls, warehouses and large facilities. The project uses solid columns painted high-visibility yellow, with a roof grid of beams and purlins designed for heavy structural and wind loads. It also includes concrete tribunes inside the hall for spectators and events."
    ],
    "features": [
      {
        "t": "أعمدة فولاذية رئيسية باللون الأصفر البارز",
        "d": "استخدام أعمدة ومقاطع حديدية صلبة مدهونة بطلاء أفراني أصفر عالي السلامة لضمان الوضوح والرؤية الميدانية الممتازة.",
        "tEn": "High-visibility yellow steel columns",
        "dEn": "Solid steel columns and sections in a yellow safety coat for excellent visibility on site."
      },
      {
        "t": "شبكة أسقف وجسور جملونية واسعة",
        "d": "تصميم وتثبيت الجسور العلوية الممتدة لتشكيل سقف جملوني مدعوم بكابلات تربط جانبية لزيادة الاتزان الهندسي.",
        "tEn": "Wide gable roof of rafters and purlins",
        "dEn": "Long overhead beams form a gable roof, braced with side tie cables for added stability."
      },
      {
        "t": "تأسيس مدرجات جماهيرية داخلية",
        "d": "بناء صبات ومدرجات خرسانية تدرجية داخل الصالة تتسع للحشود والفعاليات الرياضية.",
        "tEn": "Indoor concrete tribunes",
        "dEn": "Stepped concrete stands inside the hall to seat crowds for sports events."
      },
      {
        "t": "تدعيمات متقاطعة مقاومة للرياح",
        "d": "كابلات ودعامات حديدية قطرية ومتقاطعة لربط الأعمدة والأسقف لرفع درجة المقاومة ضد الاهتزازات والظروف الجوية.",
        "tEn": "Wind-resisting cross-bracing",
        "dEn": "Diagonal cables and steel braces tie the columns and roof together against vibration and weather."
      },
      {
        "t": "جاهزية للتكسية بالصاج والساندوتش بنل",
        "d": "إعداد الهيكل بالكامل لتلقي ألواح العزل العلوية والجانبية المخصصة للمباني الجاهزة.",
        "tEn": "Ready for sheet and sandwich-panel cladding",
        "dEn": "The whole frame is prepared to receive insulated roof and wall panels."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-spt-004/1.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-spt-004/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-spt-004/3.webp",
        "w": 960,
        "h": 540
      },
      {
        "src": "/images/projects/ham-spt-004/4.webp",
        "w": 1800,
        "h": 1013
      }
    ]
  },
  {
    "slug": "ham-tnk-001",
    "code": "HAM-TNK-001",
    "category": "tanks",
    "title": "تصنيع وترتيب خزانات معدنية عمودية مع قاعدة مخروطية ودعامات ستانلس ستيل",
    "titleEn": "Vertical steel tanks with conical bottoms on structural legs",
    "body": [
      "تُنفّذ شركة حمشو عمليات تصنيع وتوريد الخزانات المعدنية الرأسية المصنوعة من الفولاذ المقاوم للصدأ (Stainless Steel Tanks) والمجهزة بقواعد مخروطية (Conical Bottom Tanks) وحوامل تثبيت هيكلية متينة. تُصمم هذه الخزانات لتلبي احتياجات المصانع، المنشآت الصناعية، وحزم التخزين المتقدمة للسوائل والمواد الكيميائية أو الغذائية بأعلى معايير السلامة والجودة."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies vertical stainless-steel tanks with conical bottoms and sturdy structural stands, built for factories, industrial plants and the storage of liquids, chemicals or food products to high safety and quality standards."
    ],
    "features": [
      {
        "t": "هيكل معدني مصفح ومقاوم للتآكل",
        "d": "تصنيع جسم الخزان من ألواح معدنية عالية المتانة ومقاومة للصدأ والتفاعلات الكيميائية لضمان عمر افتراضي طويل وتخزين آمن.",
        "tEn": "Corrosion-resistant steel body",
        "dEn": "The tank shell is made from durable plates that resist rust and chemical reaction for a long, safe service life."
      },
      {
        "t": "قاعدة مخروطية لتفريغ كامل وسلس",
        "d": "تصميم الجزء السفلي بقاع مخروطي يضمن التفريغ الكامل والتلقائي للمواد والترسبات دون الحاجة إلى مضخات إضافية أو مجهود يدوي.",
        "tEn": "Conical bottom for full discharge",
        "dEn": "The cone-shaped base empties contents and sediment completely by gravity, with no extra pumps or manual effort."
      },
      {
        "t": "أرجل وقواعد تثبيت هيكلية خرسانية/معدنية",
        "d": "دعم الخزان بأربعة أرجل معدنية قوية مجهزة بقواعد تثبيت مسطحة لتوزيع الوزن بالتساوي وضمان الثبات التام على الأرضيات المستوية داخل الهناجر والمستودعات.",
        "tEn": "Structural legs and base plates",
        "dEn": "Four strong steel legs with flat base plates spread the load evenly and keep the tank stable on level floors in hangars and warehouses."
      },
      {
        "t": "لحامات صناعية محكمة وربط دقيق",
        "d": "تنفيذ لحامات هيكلية متواصلة ودقيقة على كامل محيط الخزان والجسم الخارجي لمنع التسريب وضمان تحمل الضغوط المختلفة.",
        "tEn": "Tight industrial welding",
        "dEn": "Continuous, precise welds around the whole shell prevent leaks and handle varying pressures."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-001/1.webp",
        "w": 831,
        "h": 1800
      },
      {
        "src": "/images/projects/ham-tnk-001/2.webp",
        "w": 830,
        "h": 1800
      }
    ]
  },
  {
    "slug": "ham-tnk-002",
    "code": "HAM-TNK-002",
    "category": "tanks",
    "title": "تصنيع وتفصيل خزانات حديدية أفقية ومضلعة للوقود والسوائل",
    "titleEn": "Horizontal ribbed steel tanks for fuel and liquids",
    "body": [
      "تُنفّذ شركة حمشو عمليات تصنيع وتفصيل الخزانات المعدنية الأفقية والتجميعية المصنوعة من أسطح الصاج المجلفن والمقاوم، والمزودة بفتحات تفتيش وتعبئة علوية محكمة. تُصمم هذه الخزانات خصيصاً للتثبيت الأفيقي على المركبات، أو الشاحنات، أو القواعد الأرضية بالمصانع والموقع للتخزين الآمن للوقود، الزيوت، والمياه الصناعية."
    ],
    "bodyEn": [
      "Hamsho fabricates horizontal steel tanks from galvanised sheet with sealed top inspection and filling hatches, designed for mounting on vehicles, trucks or ground bases for the safe storage of fuel, oils and industrial water."
    ],
    "features": [
      {
        "t": "هيكل معدني مضلع ومقاوم للصدمات",
        "d": "تصنيع جسم الخزان من صاج حديدي مجلفن عالي السمك مع حواف مائلة ودعامات تقوية طولية لزيادة الصلابة وتحمل الضغوط أثناء النقل والتثبيت.",
        "tEn": "Ribbed, impact-resistant body",
        "dEn": "Thick galvanised sheet with chamfered edges and lengthwise stiffeners for rigidity in transport and installation."
      },
      {
        "t": "فتحة تعبئة وتفتيش علوية",
        "d": "تزويد أعلى الخزان بصندوق فتحة صيانة وتعبئة مرتفعة مع غطاء محكم لحماية المحتويات من التلوث الخارجي والتسريب.",
        "tEn": "Top filling and inspection hatch",
        "dEn": "A raised manhole with a tight lid on top of the tank keeps contents clean and leak-free."
      },
      {
        "t": "لحامات متواصلة ومعالجة للصدا",
        "d": "تنفيذ أعمال لحام دقيقة ومتطورة على جميع زوايا ووصلات الخزان مع اختبار التسريب لضمان أعلى مستويات الأمان ومقاومة الصدأ.",
        "tEn": "Continuous welds and rust treatment",
        "dEn": "Precise welding on every corner and joint, leak-tested for safety and rust resistance."
      },
      {
        "t": "تصميم أفقي منخفض المركز",
        "d": "يضمن الثبات العالي أثناء التركيب على الشاحنات أو الأسطح المستوية، مما يقلل من اهتزاز السوائل أثناء الحركة.",
        "tEn": "Low-centre horizontal design",
        "dEn": "Stays stable on trucks or flat surfaces and reduces liquid sloshing on the move."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-002/1.webp",
        "w": 1673,
        "h": 940
      },
      {
        "src": "/images/projects/ham-tnk-002/2.webp",
        "w": 1674,
        "h": 940
      },
      {
        "src": "/images/projects/ham-tnk-002/3.webp",
        "w": 1673,
        "h": 940
      }
    ]
  },
  {
    "slug": "ham-tnk-003",
    "code": "HAM-TNK-003",
    "category": "tanks",
    "title": "تصنيع ونقل خزانات وقود وسوائل مضلعة ضخمة مدهونة بمادة معالجة",
    "titleEn": "Large ribbed fuel and liquid tanks — fabrication and transport",
    "body": [
      "تُنفّذ شركة حمشو مشاريع تصنيع وتوريد الخزانات المعدنية الضخمة ذات السعة العالية، المصممة خصيصاً للتثبيت والنقل على الشاحنات الكبيرة ومركبات الشحن الثقيل. تُصنع هذه الخزانات من ألواح صاج مصفحة ومزودة بطلاء أفراني حمايتي مقاوم للعوامل الجوية والصدأ، لتأمين نقل وتخزين المواد البترولية، الوقود، والمياه في المواقع الإنشائية والنائية بكفاءة وأمان تامين."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies large, high-capacity steel tanks designed to be mounted on and carried by heavy trucks. They are built from heavy sheet with a weather- and rust-resistant protective coat to transport and store petroleum products, fuel and water on construction and remote sites."
    ],
    "features": [
      {
        "t": "هيكل معدني مضلع عالي التحمل",
        "d": "تصنيع جسم الخزان بستة زوايا وحواف مائلة لتعزيز الصلابة الهيكلية وتحمل الضغوط الداخلية والأوزان الثقيلة أثناء التنقل.",
        "tEn": "Heavy-duty ribbed body",
        "dEn": "A six-sided shell with chamfered edges for structural rigidity under internal pressure and heavy loads in transit."
      },
      {
        "t": "طلاء حماية خارجي معالج",
        "d": "معالجة السطح الخارجي بطلاء رمادي/أسود مقاوم للظروف الجوية القاسية، أشعة الشمس، والتآكل الناتج عن المواد الكيميائية.",
        "tEn": "Treated exterior coating",
        "dEn": "Grey/black paint that withstands harsh weather, sun and chemical corrosion."
      },
      {
        "t": "نقاط تثبيت وسلاسل ربط أمنية",
        "d": "تصميم الخزان بأبعاد متناسقة ومحسوبة لسهولة شحنه وتثبيته بأربطة وحبال صلبة على متن شاحنات النقل والكرينات الهيدروليكية.",
        "tEn": "Tie-down points for transport",
        "dEn": "Dimensioned for easy shipping and secure strapping on trucks and hydraulic cranes."
      },
      {
        "t": "لحامات هيدروليكية واختبارات تسريب",
        "d": "تنفيذ لحامات متواصلة فائقة الدقة على طول الألواح المجمعة لضمان منع أي تسريب للسوائل أو الوقود نهائياً.",
        "tEn": "Precise welds and leak tests",
        "dEn": "Continuous welds along all assembled plates to rule out any leakage of liquid or fuel."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-003/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-003/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-003/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-003/4.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-tnk-004",
    "code": "HAM-TNK-004",
    "category": "tanks",
    "title": "تصنيع وتوريد خزانات حديدية أسطوانية أفقية للمياه والوقود",
    "titleEn": "Horizontal cylindrical steel tanks for water and fuel",
    "body": [
      "تُنفّذ شركة حمشو مشاريع التوريد والتصنيع الكثيف للخزانات المعدنية الأسطوانية الأفقية (Horizontal Cylindrical Steel Tanks) المصنوعة من ألواح صاج مجلفنة عالية الجودة ومزودة بقواعد تثبيت مدمجة. تُصمم هذه الخزانات لتوفير حلول تخزين آمنة وموثوقة للمياه، المواد البترولية، والزيوت بالمنازل، المشاريع الزراعية، المنشآت الصناعية، والتجمعات السكنية."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies horizontal cylindrical tanks in volume, made from quality galvanised sheet with built-in saddles. They provide safe, reliable storage for water, petroleum products and oils for homes, farms, industrial plants and residential communities."
    ],
    "features": [
      {
        "t": "هيكل أسطواني معزز بخطوط تحزيم وتقوية",
        "d": "تصميم الهيكل الأسطواني بأخاديد تحزيم دائرية ممتدة على طول الخزان لزيادة المقاومة الهيكلية ضد الضغط الداخلي ولتأمين حماية مضاعفة.",
        "tEn": "Cylinder reinforced with rolled ribs",
        "dEn": "Circular stiffening ribs along the tank increase resistance to internal pressure."
      },
      {
        "t": "قواعد تثبيت سفيلة مدمجة",
        "d": "تزويد الخزان بقواعد تثبيت حمالية متينة تضمن التوازن الكامل والاستقرار على مختلف الأرضيات والمناطق الخارجية.",
        "tEn": "Integrated saddle feet",
        "dEn": "Sturdy saddles keep the tank balanced and stable on any ground, indoors or out."
      },
      {
        "t": "فتحات تعبئة وتفريغ وصيانة متكاملة",
        "d": "يحتوي الخزان على فتحة علوية مرتفعة للتعبئة والتفتيش مع غطاء، بالإضافة إلى منافذ توصيل سفلية مسننة لتسهيل ربط الأنابيب والمحابس.",
        "tEn": "Complete filling, discharge and service ports",
        "dEn": "A raised top hatch with a lid for filling and inspection, plus threaded bottom outlets for pipes and valves."
      },
      {
        "t": "طلاء حماية ومعالجة ضد الصدأ",
        "d": "توفر خيارات صاج مجلفن مقاوم للعوامل الجوية أو معالج بطلاء أفراني حمايتي ذو مقاومة عالية للتآكل والتأكسد.",
        "tEn": "Anti-rust protection",
        "dEn": "Available in weather-resistant galvanised sheet or with a protective paint coat against corrosion."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-004/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-tnk-004/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-tnk-004/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-tnk-004/4.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-tnk-004/5.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-tnk-004/6.webp",
        "w": 1536,
        "h": 1024
      }
    ]
  },
  {
    "slug": "ham-tnk-005",
    "code": "HAM-TNK-005",
    "category": "tanks",
    "title": "تصنيع وتثبيت صهاريج صهريجية أسطوانية ضخمة للشاحنات والمواقع",
    "titleEn": "Large cylindrical tankers for trucks and site storage",
    "body": [
      "تُنفّذ شركة حمشو مشاريع تصنيع وتفصيل الصهاريج المعدنية الأسطوانية الكبيرة (Tanker Body & Heavy Duty Storage Tanks) المخصصة للتثبيت على صهاريج وشاحنات النقل الثقيل أو للاستخدام كخزانات تخزين أرضية ضخمة للوقود، المياه، والمواد السائلة. تُصنع هذه الصهاريج وفق أرقام قياسية ومعايير هندسية متقدمة تضمن سلامة النقل والتثبيت وتوفير صيانة وسهولة وصول كاملة."
    ],
    "bodyEn": [
      "Hamsho fabricates large cylindrical steel tanker bodies for mounting on heavy trucks, or for use as large ground storage tanks for fuel, water and liquids. They are built to engineering standards that ensure safe transport and mounting and full access for maintenance."
    ],
    "features": [
      {
        "t": "هيكل صهريجي أسطواني مصفح",
        "d": "تصنيع جسم الصهريج من ألواح صاج سميكة ومجففة مقسمة إلى مقاطع دائرية ملحومة بعناية فائقة لتحمل ضغط السوائل واهتزازات الطرق.",
        "tEn": "Heavy cylindrical shell",
        "dEn": "Thick sheet formed into circular sections and carefully welded to withstand liquid pressure and road vibration."
      },
      {
        "t": "سلم حديدي للصيانة وعيون رفيعة للتنزيل",
        "d": "تزويد الخزان بسلم جانبي/علوي مدمج للوصول لفتحة التفتيش العلوية، بالإضافة إلى عيون رفع صلبة (Lifting Lugs) لتسهيل عمليات التنزيل والرفع بالكرينات الهيدروليكية.",
        "tEn": "Service ladder and lifting lugs",
        "dEn": "A built-in ladder to the top inspection hatch, plus solid lifting lugs for loading and unloading by crane."
      },
      {
        "t": "تجهيز للتثبيت على شواصي الشاحنات",
        "d": "دعم الصهريج بقواعد وأسس حديدية متينة تثبت بشكل آمن على هياكل شاحنات النقل (مثل شاحنات فورد وميرسيدس) لضمان أقصى درجات الثبات أثناء القيادة.",
        "tEn": "Ready for truck chassis mounting",
        "dEn": "Sturdy steel supports fix the tanker securely to truck chassis (such as Ford and Mercedes) for stability on the road."
      },
      {
        "t": "معالجة حماية وطلاء مقاوم",
        "d": "طلاء الأسطح الخارجية بمواد عازلة ومقاومة للتآكل والظروف المناخية القاسية، مع لحامات محكمة تضمن منع التسريب تحت أقصى ظروف التشغيل.",
        "tEn": "Protective treatment and coating",
        "dEn": "Exterior coated against corrosion and harsh weather, with tight welds that prevent leaks under heavy use."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-005/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-005/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-005/3.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-tnk-006",
    "code": "HAM-TNK-006",
    "category": "tanks",
    "title": "تصنيع وتجهيز خزانات ونقل الوقود والسوائل مدهونة ومزودة بسلم صيانة",
    "titleEn": "Painted fuel and liquid transport tanks with service ladders",
    "body": [
      "تُنفّذ شركة حمشو عمليات تصنيع وتجهيز الخزانات المعدنية الضخمة المخصصة للتثبيت على شاحنات النقل الثقيل أو للاستخدام كخزانات تخزين موقعية ذات سعة عالية. يتم تصنيع الخزانات مع تطبيق عزل بطلاء أسود حمايتي معالج ضد التآكل والظروف الجوية، إضافةً إلى تزويدها بسلالم صيانة رأسية ومنافذ توصيل متعددة لضمان أقصى درجات الأمان والاعتمادية."
    ],
    "bodyEn": [
      "Hamsho fabricates large steel tanks for mounting on heavy trucks or for use as high-capacity site storage. The tanks are finished with a black anti-corrosion coat and fitted with vertical service ladders and several connection outlets for safety and reliability."
    ],
    "features": [
      {
        "t": "هيكل معدني مضلع عالي التحمل",
        "d": "تصنيع الخزان من ألواح صاج صلبة مقسّمة ومجمّعة بلحامات متواصلة فائقة المتانة لضمان تحمل الضغط الداخلي واهتزازات النقل.",
        "tEn": "Heavy-duty ribbed body",
        "dEn": "Solid sheet panels assembled with continuous welds to handle internal pressure and transport vibration."
      },
      {
        "t": "طلاء وعزل خارجي مضاد للتآكل",
        "d": "طلاء السطح الخارجي بطبقة عزل داكنة تحمي الصاج من التأكسد، الرطوبة، والمواد الكيميائية في مختلف ظروف العمل.",
        "tEn": "Anti-corrosion exterior coat",
        "dEn": "A dark protective layer shields the sheet from oxidation, moisture and chemicals."
      },
      {
        "t": "سلم صيانة رأسي مدمج",
        "d": "تثبيت سلم معدني رأسي على الجهة الخلفية أو الجانبية لسهولة الوصول الآمن إلى أعلى الخزان وأغطية التفتيش.",
        "tEn": "Built-in vertical ladder",
        "dEn": "A steel ladder on the back or side for safe access to the top and inspection covers."
      },
      {
        "t": "منافذ توصيل ومحابس متعددة",
        "d": "تجهيز الواجهة السفلية بمخرج ومنافذ توصيل مسننة ومحكمة لسهولة ربط أنابيب الشفط والتفريغ.",
        "tEn": "Multiple outlets and valves",
        "dEn": "Threaded, sealed outlets at the bottom for easy connection of suction and discharge hoses."
      },
      {
        "t": "قواعد وتثبيت أمني للشاحنات",
        "d": "تصميم الخزان بقواعد تثبيت سفلية متينة تسمح بربطه وسحبه بأمان وسلاسل ربط على متن الشاحنات والهياكل المستوية.",
        "tEn": "Secure truck mounting",
        "dEn": "Sturdy base supports let the tank be strapped and chained safely onto trucks and flat beds."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-006/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-006/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-006/3.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-tnk-006/4.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-tnk-007",
    "code": "HAM-TNK-007",
    "category": "tanks",
    "title": "تصنيع صوامع وخزانات حديدية عمودية بقاعدة مخروطية وسلم صيانة",
    "titleEn": "Vertical steel silos and tanks with hopper bottoms and ladders",
    "body": [
      "تُنفّذ شركة حمشو أعمال تصنيع وتوريد الصوامع والخزانات المعدنية العمودية ذات الشكل الصندوقي المضلع والقاعدة المخروطية (Hopper Bottom Vertical Steel Silos & Tanks). تُصمم هذه الخزانات لتوفير حلول تخزين رأسية متقدمة للحبوب، المواد الجافة، السوائل، والزيوت للمصانع، المزارع، والمنشآت الصناعية بأسلوب تفريغ انسيابي آمن وسهل."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies vertical box-shaped steel silos and tanks with hopper bottoms, providing upright storage for grain, dry materials, liquids and oils in factories, farms and industrial plants, with smooth, safe discharge."
    ],
    "features": [
      {
        "t": "تصميم عمودي بقاعدة مخروطية",
        "d": "يتيح القاع المخروطي إمكانية التفريغ الكامل والسريع للمحتويات والمواد المخزنة بالاعتماد على الجاذبية الأرضية ودون أي ترسبات.",
        "tEn": "Vertical design with a hopper bottom",
        "dEn": "The conical hopper empties stored material completely and quickly by gravity, without residue."
      },
      {
        "t": "هيكل معدني مضلع ومحزّم",
        "d": "تصنيع جسم الخزان من ألواح الصاج الصلبة المدعمة بكسرات وهياكل تقوية زاوية لرفع درجة المقاومة ضد الضغوط والأحجام الثقيلة.",
        "tEn": "Ribbed, braced steel body",
        "dEn": "Solid sheet panels stiffened with folds and angle frames to resist pressure and heavy volumes."
      },
      {
        "t": "سلم صيانة رأسي مدمج ومحابس تفريغ",
        "d": "تزويد الخزان بسلم جانبي قوي ومحكم يتيح الوصول الآمن للفتحة العلوية، بالإضافة إلى صنافير ومحابس تحكم سفلية للتفريغ والقياس.",
        "tEn": "Built-in ladder and discharge valves",
        "dEn": "A strong side ladder gives safe access to the top hatch, with bottom taps and valves for discharge and measurement."
      },
      {
        "t": "أنبوب مؤشر مستوى السائل",
        "d": "تزويد الخزان بأنبوب قياس شفاف خارجي ممتد على الارتفاع لمراقبة وقراءة مستوى السائل المخزن بسهولة.",
        "tEn": "Level indicator gauge",
        "dEn": "A transparent external sight tube running up the tank shows the liquid level at a glance."
      },
      {
        "t": "طلاء حمايتي مقاوم للتآكل",
        "d": "تطبيق طبقات دهان حماية حاري (رمادي/أسود/أحمر) معالج لمنع الصدأ والعوامل الجوية وضمان الجودة والتحمل العالي.",
        "tEn": "Corrosion-resistant coating",
        "dEn": "Protective paint layers (grey, black or red) against rust and weather."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-007/1.webp",
        "w": 1672,
        "h": 940
      },
      {
        "src": "/images/projects/ham-tnk-007/2.webp",
        "w": 1672,
        "h": 940
      },
      {
        "src": "/images/projects/ham-tnk-007/3.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-tnk-007/4.webp",
        "w": 1672,
        "h": 940
      }
    ]
  },
  {
    "slug": "ham-tnk-008",
    "code": "HAM-TNK-008",
    "category": "tanks",
    "title": "تصنيع صهاريج مضلعة أفقية للشاحنات من الشبك والصاج المجلفن",
    "titleEn": "Horizontal ribbed galvanised tankers for trucks",
    "body": [
      "تُنفّذ شركة حمشو مشاريع تصنيع وتفصيل الصهاريج والخزانات المعدنية الأفقية المضلعة المصنوعة من ألواح الصاج المجلفن المقاوم للتآكل والمثبتة مباشرة على شواصي شاحنات نقل المياه والوقود. تُصمم هذه الصهاريج بهياكل حماية علوية ومزاريب حماية مدمجة، إضافة إلى سلالم صيانة خلفية ومنافذ تفريغ مزدوجة لضمان أداء استثنائي وأمان تام أثناء الحركة والتوزيع."
    ],
    "bodyEn": [
      "Hamsho fabricates ribbed horizontal tanks from corrosion-resistant galvanised sheet, mounted directly on water and fuel truck chassis. They come with a top retaining rim, rear service ladders and twin discharge outlets for safe, dependable delivery."
    ],
    "features": [
      {
        "t": "هيكل مضلع بحواف بيضاوية/سداسية",
        "d": "تصنيع جسم الخزان بتصميم مضلع مع حواف مائلة لتقليل اهتزاز الحركة الداخلية للسوائل وتوزيع الوزن بكفاءة على محور الشاحنة.",
        "tEn": "Moulded truck-tank body",
        "dEn": "A ribbed shell with chamfered edges reduces liquid surge and spreads the weight evenly over the truck axle."
      },
      {
        "t": "حاجز حماية ومجرى حوافي علوي",
        "d": "تزويد أعلى الخزان بحافة سور محيطية ومجرى حماية متكامل يحيط بفتحة التعبئة العلوية للحد من انسكاب السوائل لحماية جسم الشاحنة والبيئة.",
        "tEn": "Top retaining rim and tray",
        "dEn": "A raised rim and channel around the filling hatch contain spills to protect the truck and the environment."
      },
      {
        "t": "سلم صيانة رأسي مزدوج ومصد خلفي",
        "d": "تجهيز خلفية الصهريج بسلمين معدنيين للتسلق الآمن، إضافة إلى واقٍ ومصد سفلي لحماية منافذ التفريغ والمحابس.",
        "tEn": "Twin rear ladders and bumper",
        "dEn": "Two steel ladders at the back for safe climbing, plus a lower guard protecting the outlets and valves."
      },
      {
        "t": "منافذ تفريغ مزدوجة سفلية",
        "d": "تحتوي الواجهة الخلفية على مخرجين مسننين لربط أنابيب التفريغ والتوزيع السريع للمياه والوقود.",
        "tEn": "Twin bottom outlets",
        "dEn": "Two threaded rear outlets for hoses and fast distribution of water and fuel."
      },
      {
        "t": "تثبيت محكم على شواصي الشاحنات",
        "d": "دعم الخزان بقواعد تثبيت أفقية وهياكل فرعية متينة تثبت بمسامير وسلاسل ربط صلبة على هياكل الشاحنات المتوسطة والكبيرة.",
        "tEn": "Secure chassis mounting",
        "dEn": "Horizontal supports and sub-frames bolted and chained firmly onto medium and large trucks."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-008/1.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-tnk-008/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-tnk-008/3.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-tnk-008/4.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-tnk-009",
    "code": "HAM-TNK-009",
    "category": "tanks",
    "title": "تصنيع وتوريد خزانات حديدية مستطيلة ومكعبة من الصاج المجلفن المقوى",
    "titleEn": "Rectangular and cubic tanks in reinforced galvanised sheet",
    "body": [
      "تُنفّذ شركة حمشو مشاريع تصنيع وتوريد الخزانات المعدنية الصندوقية (المستطيلة والمكعبة) المصنوعة من ألواح الصاج المجلفن المضلع. تُصمم هذه الخزانات لتوفير أقصى استغلال للمساحات التخزينية في المباني، المزارع، الهناجر، والمصانع، وتُجهز بفتحات تعبئة علوية محكمة وأرجل رفع أرضية لحمايتها وتسهيل نقلها بالرافعات."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies box-shaped steel tanks (rectangular and cubic) in ribbed galvanised sheet. They make the most of storage space in buildings, farms, hangars and factories, with sealed top filling hatches and raised feet for protection and easy lifting."
    ],
    "features": [
      {
        "t": "تصميم مضلع معزز بكسرات تقوية",
        "d": "تشكيل جدران الخزان بكسرات قطرية متقاطعة تزيد من متانة الصاج وتمنع انتفاخه تحت ضغط السوائل المخزنة.",
        "tEn": "X-embossed reinforced panels",
        "dEn": "Diagonal cross-breaks in the walls stiffen the sheet and stop it bulging under liquid pressure."
      },
      {
        "t": "فتحة تعبئة وتفتيش علوية بمقبض وقفل",
        "d": "تزويد الخزان بصندوق تعبئة علوي مرتفع مزود بغطاء مفصلي محكم ومقبض لسهولة الفتح والإغلاق ومنع التلوث.",
        "tEn": "Top filling hatch with handle and lock",
        "dEn": "A raised filling box with a tight hinged lid and handle for easy opening and protection from contamination."
      },
      {
        "t": "أرجل وقواعد رفع أرضية",
        "d": "رفع الخزان عن سطح الأرض بأرجل صلبة تسمح بمرور شوكات الرافعات الشوكية (Forklifts) وتسهيل النقل والتنزيل.",
        "tEn": "Raised feet for forklifts",
        "dEn": "Solid legs lift the tank off the ground and let forklift tines pass under for easy moving."
      },
      {
        "t": "منافذ تفريغ ومقابض حمل جانبية",
        "d": "تجهيز الواجهة السفلية بمنافذ تفريغ مسننة لتوصيل المحابس، مع مقابض صلبة على الأجناب لسهولة السحب والتحريك.",
        "tEn": "Outlets and side handles",
        "dEn": "Threaded bottom outlets for valves, and solid side handles for pulling and moving."
      },
      {
        "t": "لحامات هيدروليكية مجلفنة مقاومة للتآكل",
        "d": "استخدام ألواح صاج مجلفنة عالية الجودة مع لحامات دقيقة متواصلة تضمن عدم التسريب ومقاومة الصدأ على المدى الطويل.",
        "tEn": "Corrosion-resistant galvanised welds",
        "dEn": "Quality galvanised sheet with precise continuous welds for leak-free, rust-free service."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-tnk-009/1.webp",
        "w": 1450,
        "h": 1085
      },
      {
        "src": "/images/projects/ham-tnk-009/2.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-tnk-009/3.webp",
        "w": 1450,
        "h": 1085
      },
      {
        "src": "/images/projects/ham-tnk-009/4.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-tnk-009/5.webp",
        "w": 1536,
        "h": 1024
      },
      {
        "src": "/images/projects/ham-tnk-009/6.webp",
        "w": 1536,
        "h": 1024
      }
    ]
  },
  {
    "slug": "ham-fnc-001",
    "code": "HAM-FNC-001",
    "category": "fencing",
    "title": "تركيب أسوار شباك مجلفن وحمايات أمنية لمحطات الطاقة الشمسية",
    "titleEn": "Galvanised chain-link fencing and security for solar power plants",
    "body": [
      "تُنفّذ شركة حمشو مشاريع توريد وتركيب الأسوار الشباكية المجلفنة (Chain-Link Fence Systems) المخصصة لتأمين وحماية محطات الطاقة الشمسية، الأراضي الزراعية، والمرافق المفتوحة وفق أعلى معايير السلامة والمتانة."
    ],
    "bodyEn": [
      "Hamsho supplies and installs galvanised chain-link fence systems to secure solar power plants, farmland and open facilities to high standards of safety and durability."
    ],
    "features": [
      {
        "t": "شبك حديد مجلفن مقاوم للصدأ",
        "d": "استخدام شبك سلكي مائل ومجلفن يضمن مقاومة عالية للتآكل والظروف الجوية المختلفة والصدمات.",
        "tEn": "Rust-resistant galvanised mesh",
        "dEn": "Diagonal galvanised wire mesh that stands up to corrosion, weather and impact."
      },
      {
        "t": "أعمدة حديدية مدهونة ومزودة بزوايا حماية علوية",
        "d": "تركيب أعمدة دعم خضراء مدهونة بطلاء أفراني مقاوم للعوامل الجوية مع زوايا علوية مائلة لتثبيت الأسلاك الشائكة وحماية الموقع من التسلق.",
        "tEn": "Painted posts with angled top arms",
        "dEn": "Green support posts in weather-resistant paint, with angled top arms to carry barbed wire and stop climbing."
      },
      {
        "t": "قواعد خرسانية مسلحة مستمرة",
        "d": "صب حزام خرساني سفلي محكم يضمن ثبات السور ومنع انجراف التربة أو التسلل من الأسفل.",
        "tEn": "Continuous reinforced concrete footing",
        "dEn": "A concrete strip footing keeps the fence stable and prevents soil washout or entry from below."
      },
      {
        "t": "تأمين الشواخص والمحطات",
        "d": "تصميم مثالي لتأمين حقول الألواح الشمسية والمنشآت الحساسة بأسوار رؤية مفتوحة تسمح بمرور الهواء وتمنع الدخول غير المصرح به.",
        "tEn": "Securing plants and facilities",
        "dEn": "An ideal way to secure solar fields and sensitive sites with see-through fencing that lets air pass and keeps intruders out."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-fnc-001/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-fnc-001/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-fnc-001/3.webp",
        "w": 1446,
        "h": 1088
      }
    ]
  },
  {
    "slug": "ham-fnc-002",
    "code": "HAM-FNC-002",
    "category": "fencing",
    "title": "تركيب أسوار شباك مع عشب صناعي حامي وموفر للخصوصية",
    "titleEn": "Mesh fencing with artificial grass for protection and privacy",
    "body": [
      "تُنفّذ شركة حمشو مشاريع توريد وتثبيت الأسوار الشباكية المغطاة بالعشب الصناعي الأخضر (Grass Fence Panels) التي تجمع بين الأمان العالي، توفير الخصوصية التامة (Privacy Fencing)، والجمالية الطبيعية الفائقة للمباني والمستودعات والمجمعات."
    ],
    "bodyEn": [
      "Hamsho supplies and installs mesh fencing covered with green artificial grass panels, combining security, full privacy and a natural look for buildings, warehouses and compounds."
    ],
    "features": [
      {
        "t": "شبك سلكي معزز بعشب صناعي مقاوم للشرارة وأشعة الشمس",
        "d": "تركيب ألواح سياج شبكي مجلفن مدمج بألياف عشبية خضراء معالجة ضد الأشعة فوق البنفسجية (UV-Resistant) لضمان عدم تغير اللون على مدار السنة.",
        "tEn": "Mesh with UV-resistant artificial grass",
        "dEn": "Galvanised mesh panels woven with green grass fibres treated against UV so the colour holds all year."
      },
      {
        "t": "تثبيت على أسوار جدارية وخرسانية",
        "d": "تثبيت الأعمدة الحديدية الهيكلية ببراغي تثبيت خرسانية متينة على أعلى الأسوار والجدران لتوفير ارتفاع أمان إضافي.",
        "tEn": "Mounted on boundary and concrete walls",
        "dEn": "Steel posts fixed with heavy anchor bolts on top of walls to add extra security height."
      },
      {
        "t": "خصوصية ومظهر بيئي جذاب",
        "d": "يمنع الرؤية الخارجية تماماً ويمنح المجمعات والمرافق مظهراً جمالياً يتناغم مع الطبيعة والمساحات الخضراء.",
        "tEn": "Privacy with a green look",
        "dEn": "Blocks the view from outside completely and gives compounds an appearance that blends with green spaces."
      },
      {
        "t": "هيكل حماية علوي بأسلاك شائكة",
        "d": "خيار إضافة حماية علوية من الأسلاك الشائكة لرفع مستوى الأمان ضد التسلل.",
        "tEn": "Optional barbed-wire top",
        "dEn": "Barbed wire can be added on top for extra protection against intrusion."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-fnc-002/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-fnc-002/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-fnc-002/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-fnc-002/4.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-fnc-003",
    "code": "HAM-FNC-003",
    "category": "fencing",
    "title": "تركيب أسوار حماية شبكية بأسلاك شائكة أعلى جدران المنشآت والمنشآت الرياضية",
    "titleEn": "Mesh security fencing with barbed wire on top of facility and sports-ground walls",
    "body": [
      "تُنفّذ شركة حمشو أعمال تصنيع وتركيب أنظمة الحماية والأستار الحديدية الشبكية المزودة بأسلاك شائكة (Security Fence with Barbed Wire) المثبتة أعلى الجدران والأسوار الخرسانية للمدارس، المنشآت الرياضية، والمجمعات الحكومية والخدمية."
    ],
    "bodyEn": [
      "Hamsho fabricates and installs steel mesh security fencing with barbed wire, fixed on top of concrete walls for schools, sports facilities, and government and service compounds."
    ],
    "features": [
      {
        "t": "إطارات وأعمدة حديدية مجلفنة ومدهونة",
        "d": "تشكيل إطارات وهياكل حديدية مفرغة عالي التحمل ومدهونة بطلاء حماية حاري مضاد للصدأ والتآكل.",
        "tEn": "Galvanised and painted steel frames and posts",
        "dEn": "Heavy-duty hollow steel frames coated with anti-rust, anti-corrosion paint."
      },
      {
        "t": "شبك سلكي مائل متين",
        "d": "دمج شبك حديدي مصفح توفر أعلى مستويات التأمين ومنع التسلل مع الرؤية المفتوحة.",
        "tEn": "Sturdy diagonal wire mesh",
        "dEn": "Strong steel mesh that prevents climbing while keeping an open view."
      },
      {
        "t": "حماية علوية ثلاثية بالأسلاك الشائكة",
        "d": "تزويد الهياكل الحديدية بزوايا وأذرع مائلة علوية مخصصة لشد الأسلاك الشائكة بمسارات متعددة لرفع درجة الأمان لأقصى حد.",
        "tEn": "Triple barbed-wire top",
        "dEn": "Angled top arms carry several strands of barbed wire for the highest level of security."
      },
      {
        "t": "تثبيت أمن ومحكم على الأسوار",
        "d": "تثبيت حوامل الأسوار بشكل دائم ومحكم بدعامة خرسانية ومحاور تثبيت قوية تلائم الأسوار والأبنية المدرسية والرياضية.",
        "tEn": "Firm fixing on walls",
        "dEn": "Fence brackets are anchored permanently into the concrete, suited to school and sports-ground walls."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-fnc-003/1.webp",
        "w": 1800,
        "h": 828
      },
      {
        "src": "/images/projects/ham-fnc-003/2.webp",
        "w": 1800,
        "h": 831
      },
      {
        "src": "/images/projects/ham-fnc-003/3.webp",
        "w": 1800,
        "h": 831
      }
    ]
  },
  {
    "slug": "ham-lgt-001",
    "code": "HAM-LGT-001",
    "category": "lighting",
    "title": "مشروع تركيب أعمدة إنارة شوارع تعمل بالطاقة الشمسية",
    "titleEn": "Installation of solar-powered street-lighting poles",
    "body": [
      "تنفذ شركة حمشو مشاريع توريد وتركيب أعمدة الإنارة المعدنية المجلفنة المجهزة بكشافات طاقة شمسية عالية الكفاءة (LED Solar Street Lights)."
    ],
    "bodyEn": [
      "Hamsho supplies and installs galvanised steel lighting poles fitted with high-efficiency LED solar street lights."
    ],
    "features": [
      {
        "t": "الأعمدة المفرغة والمجلفنة",
        "d": "لمقاومة العوامل الجوية والصدأ والتآكل على المدى الطويل.",
        "tEn": "Hollow galvanised poles",
        "dEn": "Built to resist weather, rust and corrosion over the long term."
      },
      {
        "t": "أنظمة إنارة بالطاقة الشمسية",
        "d": "كشافات LED مدمجة مع لوح شمسي مدمج ونظام استشعار للتشغيل الذاتي، مما يوفر حلاً مستداماً واقتصادياً لإنارة المزارع، الطرق، والمنشآت.",
        "tEn": "Solar lighting systems",
        "dEn": "LED fixtures with an integrated solar panel and an automatic sensor — a sustainable, economical way to light farms, roads and facilities."
      },
      {
        "t": "قواعد خرسانية وتثبيت ببراغي عالية التحمل",
        "d": "لضمان أعلى مستويات الأمان والاستقرار ضد الرياح والظروف الجوية القاسية.",
        "tEn": "Concrete bases with anchor bolts",
        "dEn": "Heavy-duty anchor bolts for maximum safety and stability against wind and harsh weather."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-lgt-001/1.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-lgt-001/2.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-lgt-001/3.webp",
        "w": 1086,
        "h": 1448
      }
    ]
  },
  {
    "slug": "ham-lgt-002",
    "code": "HAM-LGT-002",
    "category": "lighting",
    "title": "تصنيع وتركيب أعمدة إنارة طاقة شمسية منفصلة مع لوح وزاوية توجيه",
    "titleEn": "Off-grid solar lighting poles with an angled panel mount",
    "body": [
      "يقدم مشروع HAM-LGT-002 المُنَفّذ من شركة حمشو حلاً احترافياً ومتقدماً لإنارة الطرقات المفتوحة، والمناطق النائية، والمجمعات السكنية والصناعية باستخدام نظام إنارة طاقة شمسية منفصل (Off-Grid Solar Street Light System)."
    ],
    "bodyEn": [
      "Project HAM-LGT-002 delivers a professional lighting solution for open roads, remote areas, and residential and industrial compounds using an off-grid solar street-light system."
    ],
    "features": [
      {
        "t": "أنبوب فولاذي مجلفن متين",
        "d": "عمود إنارة عالي التحمل ذو قاعدة مقواة بدعامات حديدية (Gussets) لضمان أقصى درجات الاستقرار والثبات على الأرض.",
        "tEn": "Sturdy galvanised steel tube",
        "dEn": "A heavy-duty pole with a base reinforced by steel gussets for maximum stability."
      },
      {
        "t": "لوح شمس مائل بزاوية توجيه",
        "d": "حامل علوي مخصص لتركيب اللوح الشمسي بزاوية ميلان مثالية لامتصاص أكبر قدر من الأشعة الشمسية على مدار اليوم.",
        "tEn": "Angled solar panel mount",
        "dEn": "A top bracket that holds the solar panel at the ideal tilt to capture the most sunlight through the day."
      },
      {
        "t": "صندوق حماية للبطاريات والتحكم",
        "d": "صندوق معدني مثبّت أعلى العمود وحامي ومُعزّل لحماية منظم الشحن والبطاريات من الظروف الجوية القاسية والحرارة المرتفعة.",
        "tEn": "Control and battery box",
        "dEn": "A sealed steel box at the top of the pole protects the charge controller and batteries from harsh weather and high heat."
      },
      {
        "t": "تصميم موفر ومستدام",
        "d": "يعتمد بالكامل على الطاقة Clean Energy لتوفير إنارة ليلية مستمرة بدون الحاجة للربط بالشبكة الكهربائية.",
        "tEn": "Efficient, sustainable design",
        "dEn": "Runs entirely on clean energy to provide light all night with no grid connection."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-lgt-002/1.webp",
        "w": 720,
        "h": 1280
      },
      {
        "src": "/images/projects/ham-lgt-002/2.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-lgt-002/3.webp",
        "w": 941,
        "h": 1672
      }
    ]
  },
  {
    "slug": "ham-lgt-003",
    "code": "HAM-LGT-003",
    "category": "lighting",
    "title": "تصنيع وتوريد أعمدة إنارة مجلفنة ومدهونة لطرق المجمعات والساحات",
    "titleEn": "Galvanised and painted lighting poles for compound roads and squares",
    "body": [
      "تنفذ شركة حمشو أعمال تصنيع وتركيب أعمدة الإنارة الحديدية المجلفنة المخصصة للشوارع والمجمعات السكنية والصناعية والساحات المفتوحة."
    ],
    "bodyEn": [
      "Hamsho fabricates and installs galvanised steel lighting poles for streets, residential and industrial compounds, and open squares."
    ],
    "features": [
      {
        "t": "جلفنة وطبقات طلاء تحذيرية",
        "d": "تصنيع أعمدة مفرغة مجلفنة ضد الصدأ، مع طلاء احترافي بألوان عالية التباين (أحمر، أبيض، أسود، أخضر) للرؤية الليلة والتنبيه المروري.",
        "tEn": "Galvanising and high-visibility paint",
        "dEn": "Hollow poles galvanised against rust, painted in high-contrast colours (red, white, black, green) for night visibility and traffic warning."
      },
      {
        "t": "تصنيع هيدروليكي وجودة لحام عالية",
        "d": "إعداد وتجهيز ساريات الأعمدة وقواعدها (Base Plates) بدقة هندسية تضمن الجودة والمتانة قبل التركيب.",
        "tEn": "Precise fabrication and quality welding",
        "dEn": "Pole shafts and base plates are prepared to engineering accuracy for quality and durability before installation."
      },
      {
        "t": "كشافات LED عالية الكفاءة",
        "d": "تزويد الأعمدة بأجهزة إنارة LED حديثة وموفرة للطاقة توفر إضاءة واسعة النطاق وممتازة للمحيط.",
        "tEn": "High-efficiency LED fixtures",
        "dEn": "Modern energy-saving LED luminaires that light a wide area."
      },
      {
        "t": "قواعد تثبيت متينة",
        "d": "تثبيت الألواح القاعدة السفلية باستخدام براغي تثبيت خرسانية (Anchor Bolts) لضمان أعلى ثبات ضد الرياح والعوامل الجوية.",
        "tEn": "Sturdy mounting bases",
        "dEn": "Base plates fixed with concrete anchor bolts for maximum stability against wind and weather."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-lgt-003/1.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-lgt-003/2.webp",
        "w": 830,
        "h": 1800
      },
      {
        "src": "/images/projects/ham-lgt-003/3.webp",
        "w": 831,
        "h": 1800
      }
    ]
  },
  {
    "slug": "ham-wwd-001",
    "code": "HAM-WWD-001",
    "category": "ironwork",
    "title": "تصنيع وتركيب أبواب حديد مصفحة ومصنوعة بنقوش معشقة للمباني والمجمعات",
    "titleEn": "Armoured steel doors with interlocking relief patterns for buildings and compounds",
    "body": [
      "تنفّذ شركة حمشو أعمال تصنيع وتوريد الأبواب الحديدية الخارجية والمصفحة المصممة بأعلى معايير المتانة والأمان للمنازل والمجمعات السكنية والمشاريع العمرانية."
    ],
    "bodyEn": [
      "Hamsho manufactures and supplies exterior and armoured steel doors built to high standards of strength and security for homes, residential compounds and development projects."
    ],
    "features": [
      {
        "t": "تصميم ونقوش معشّقة جدارية",
        "d": "تتميز الأبواب بنقوش حديدية بارزة وزخارف هندسية تعطي مظهراً جمالياً وفخماً يعزز من المظهر الخارجي للمبنى.",
        "tEn": "Interlocking relief design",
        "dEn": "Raised steel patterns and geometric ornaments give the doors a rich look that lifts the building's façade."
      },
      {
        "t": "طلاء حماية مقاوم للصدأ والظروف الجوية",
        "d": "مدهونة بطلاء حراري مقاوم للرطوبة والعوامل الجوية باللون البني الكلاسيكي لضمان المحافظة على المظهر والجودة لأطول فترة.",
        "tEn": "Rust- and weather-resistant coating",
        "dEn": "Finished in classic brown with a heat-cured paint that resists moisture and weather, keeping its look for years."
      },
      {
        "t": "أقفال وإكسسوارات عالية الأمان",
        "d": "مزودة بمقابض وأقفال ذهبية متينة توفر أقصى درجات الحماية والأمان.",
        "tEn": "High-security locks and fittings",
        "dEn": "Fitted with sturdy gold-tone handles and locks for maximum protection."
      },
      {
        "t": "تركيب احترافي محكم",
        "d": "تركيب الأبواب داخل إطارات حديدية مثبتة بدقة ضمن الجدران الخرسانية والبلوك.",
        "tEn": "Precise professional installation",
        "dEn": "Doors are set in steel frames anchored accurately into concrete and block walls."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-001/1.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-wwd-001/2.webp",
        "w": 1800,
        "h": 1013
      },
      {
        "src": "/images/projects/ham-wwd-001/3.webp",
        "w": 1013,
        "h": 1800
      }
    ]
  },
  {
    "slug": "ham-wwd-002",
    "code": "HAM-WWD-002",
    "category": "ironwork",
    "title": "تصنيع أبواب حديد مصفحة بتصميم مكعبات ثلاثية الأبعاد ثلاثية الأمان",
    "titleEn": "Armoured steel doors with a 3D cube relief design",
    "body": [
      "تقدم شركة حمشو أعمال تصنيع وتنفيذ الأبواب الحديدية المصفحة ذات التصميم الهندسي العصري والمصممة لتوفير أقصى درجات الأمان والعزل للمشاريع السكنية والتجارية."
    ],
    "bodyEn": [
      "Hamsho fabricates armoured steel doors with a modern geometric design, built for maximum security and insulation in residential and commercial projects."
    ],
    "features": [
      {
        "t": "نقوش هندسية مكعبة (3D Panel Design)",
        "d": "ألواح حديدية مشكّلة بنمط مربعات ومكعبات بارزة مع إطار محيطي مموج يمنح الباب متانة مضاعفة ومظهراً مودرن أنيق.",
        "tEn": "3D cube panel design",
        "dEn": "Steel panels pressed into raised squares and cubes, with a ribbed perimeter frame that doubles the strength and gives a clean modern look."
      },
      {
        "t": "طلاء حراري بني غامق",
        "d": "معالجة الأسطح بطلاء مقاوم للخدش، الصدأ، والعوامل الجوية المباشرة لضمان عمر افتراضي طويل.",
        "tEn": "Dark brown heat-cured finish",
        "dEn": "A scratch-, rust- and weather-resistant coating for a long service life."
      },
      {
        "t": "إطارات ومفصلات حديدية عالية التحمل",
        "d": "تثبيت الأبواب ضمن كشوفات وإطارات متينة (Sub-frames) مع مفصلات محملة لضمان سلاسة الفتح وإغلاق محكم.",
        "tEn": "Heavy-duty frames and hinges",
        "dEn": "Doors are fixed in sturdy sub-frames with load-bearing hinges for smooth opening and a tight close."
      },
      {
        "t": "حلول للمجمعات والشقق",
        "d": "مناسب تماماً للمداخل الرئيسية، مداخل الشقق، المكاتب، والمنشآت الخدمية.",
        "tEn": "Made for compounds and apartments",
        "dEn": "Ideal for main entrances, apartment doors, offices and service buildings."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-002/1.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-wwd-002/2.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-wwd-002/3.webp",
        "w": 941,
        "h": 1672
      }
    ]
  },
  {
    "slug": "ham-wwd-003",
    "code": "HAM-WWD-003",
    "category": "ironwork",
    "title": "تصنيع أبواب حديدية مصفحة باللون الأسود الملكي بنقوش زخرفية مموجة",
    "titleEn": "Royal black armoured steel doors with wave-pattern ornaments",
    "body": [
      "تقدم شركة حمشو أعمال توريد وتصنيع الأبواب الحديدية المصفحة باللون الأسود الملكي (Black Matte/Gloss Finish) المصممة وفق أحدث الزخارف المعمارية والنقوش المفرغة لتوفير الأمان والمظهر الجمالي المتميز."
    ],
    "bodyEn": [
      "Hamsho supplies and fabricates armoured steel doors in royal black (matte or gloss), designed with modern architectural ornaments and cut-out patterns for security with a striking look."
    ],
    "features": [
      {
        "t": "نقوش وزخارف هندسية مموجة",
        "d": "تصاميم تجمع بين الأشكال الدائرية والألواح المنسوجة البارزة والخطوط الانسيابية التي تضفي لمسة فنية فريدة على مداخل المبانى والشقق.",
        "tEn": "Wave-pattern geometric ornaments",
        "dEn": "Designs that combine circles, raised woven panels and flowing lines for a distinctive entrance to buildings and apartments."
      },
      {
        "t": "طلاء حماية حار باللون الأسود الفاخر",
        "d": "معالجة أسطح الحديد بالطلاء الحاري المقاوم للخدش والتآكل والظروف الجوية المختلفة لضمان ثبات اللون واستدامته.",
        "tEn": "Premium black protective coating",
        "dEn": "Heat-cured paint that resists scratches, corrosion and weather to keep the colour lasting."
      },
      {
        "t": "هياكل وإطارات حديدية معززة",
        "d": "إطارات حديدية متينة تم تثبيتها بإحكام داخل كشوفات المباني والجدران لتأمين أعلى مستويات الحماية والأمان ضد الاقتحام.",
        "tEn": "Reinforced steel frames",
        "dEn": "Sturdy frames anchored firmly into the wall openings for the highest protection against break-ins."
      },
      {
        "t": "تطبيقات متعددة",
        "d": "مثالية لاستخدامها كأبواب خارجية للمنازل، الشقق السكنية، المكاتب التجارية، والمستودعات.",
        "tEn": "Many applications",
        "dEn": "Ideal as exterior doors for houses, apartments, commercial offices and warehouses."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-003/1.webp",
        "w": 899,
        "h": 1599
      },
      {
        "src": "/images/projects/ham-wwd-003/2.webp",
        "w": 540,
        "h": 960
      },
      {
        "src": "/images/projects/ham-wwd-003/3.webp",
        "w": 540,
        "h": 960
      }
    ]
  },
  {
    "slug": "ham-wwd-004",
    "code": "HAM-WWD-004",
    "category": "ironwork",
    "title": "تصنيع بوابات حديد ضخمة وأبواب مصفحة بإكسسوارات ونقوش نحاسية",
    "titleEn": "Large steel gates and armoured doors with brass ornaments",
    "body": [
      "تتخصص شركة حمشو في تصميم وتصنيع البوابات الحديدية الخارجية والأبواب الكبيرة المخصصة للفيلات، المجمعات السكنية، والمرافق الخدمية والتجارية بمواصفات أمان عالية وتشطيبات فخمة."
    ],
    "bodyEn": [
      "Hamsho designs and builds exterior steel gates and large doors for villas, residential compounds, and service and commercial facilities, with high security specs and premium finishes."
    ],
    "features": [
      {
        "t": "هياكل صفائح معززة بقطاعات حديدية",
        "d": "تصنيع أبواب وبوابات ذات دفتين وأربع ضلف بصفائح حديدية عالية السماكة توفر أعلى مستويات المتانة والعزل.",
        "tEn": "Plate bodies reinforced with steel sections",
        "dEn": "Double-leaf and four-leaf doors and gates in thick steel plate for maximum strength and insulation."
      },
      {
        "t": "زخارف ونقوش نحاسية كلاسيكية",
        "d": "تزيين الواجهات بإكسسوارات ونقوش معدنية مذهبة ونحاسية بارزة (إطارات وزهور زخرفية) تعطي مظهراً كلاسيكياً فاخراً.",
        "tEn": "Classic brass ornaments",
        "dEn": "Façades decorated with raised gold-tone and brass fittings — frames and floral ornaments — for a classic, luxurious look."
      },
      {
        "t": "طلاء حماية مطفي",
        "d": "تشطيب بطلاء أسود ورادي مطفي مقاوم للصدمات للحد من التأثر بالشمس والرطوبة والصدأ.",
        "tEn": "Matte protective paint",
        "dEn": "A matte black and grey impact-resistant finish that limits damage from sun, moisture and rust."
      },
      {
        "t": "أنظمة إغلاق ومفصلات ثقيلة",
        "d": "تجهيز البوابات بمفصلات ومقابض حديدية ضخمة تناسب أحجام البوابات وتضمن سهولة وسلاسة الفتح والإغلاق.",
        "tEn": "Heavy closing systems and hinges",
        "dEn": "Gates are fitted with large steel hinges and handles sized to the gate for easy, smooth opening and closing."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-004/1.webp",
        "w": 1054,
        "h": 1492
      },
      {
        "src": "/images/projects/ham-wwd-004/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wwd-004/3.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-wwd-004/4.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-wwd-004/5.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-wwd-004/6.webp",
        "w": 899,
        "h": 1599
      },
      {
        "src": "/images/projects/ham-wwd-004/7.webp",
        "w": 969,
        "h": 1622
      }
    ]
  },
  {
    "slug": "ham-wwd-005",
    "code": "HAM-WWD-005",
    "category": "ironwork",
    "title": "تصنيع بوابة حديد خارجية زرقاء بزخارف فورفورجيه مذهبة",
    "titleEn": "Blue exterior steel gate with silver wrought-iron ornaments",
    "body": [
      "تُقدم شركة حمشو خدمات تصنيع وتوريد البوابات الحديدية الخارجية الكبيرة للمنازل، الفيلات، والمزارع بتصاميم فورفورجيه (Wrought Iron) متميزة تجمع بين المتانة العالية واللمسة الجمالية العصرية."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies large exterior steel gates for homes, villas and farms, in distinctive wrought-iron designs that combine strength with a modern look."
    ],
    "features": [
      {
        "t": "تصميم متعدد الضلف مع باب مشاة مدمج",
        "d": "تحتوي البوابة على ثلاث ضلف رئيسية لدخول السيارات بالإضافة إلى باب جانبي مخصص لمشاة.",
        "tEn": "Multi-leaf design with a pedestrian door",
        "dEn": "Three main leaves for vehicle access plus a separate side door for pedestrians."
      },
      {
        "t": "طلاء ملكي باللون الأزرق الجذاب",
        "d": "دهان حراري خارجي مقاوم للصدأ والتقشّر والعوامل الجوية باللون الأزرق الناصع.",
        "tEn": "Striking royal blue finish",
        "dEn": "Exterior heat-cured paint in bright blue that resists rust, peeling and weather."
      },
      {
        "t": "زخارف حديد مشغولة (فورفورجيه) باللون الفضي/المذهب",
        "d": "تزيين الواجهات بنقوش هندسية مزخرفة على شكل قلوب وعيون مع زوايا معدنية أضفت تبايناً ورونقاً استثنائياً.",
        "tEn": "Silver/gold wrought-iron ornaments",
        "dEn": "Heart and eye motifs with metal corner pieces add contrast and character to the panels."
      },
      {
        "t": "هيكل وفريم حديدي مجلفن متين",
        "d": "صفائح وإطارات حديدية سميكة توفر الخصوصية التامة والأمان العالي للمنشأة.",
        "tEn": "Sturdy galvanised frame",
        "dEn": "Thick steel plates and frames give full privacy and high security."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-005/1.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-wwd-006",
    "code": "HAM-WWD-006",
    "category": "ironwork",
    "title": "تصنيع حمايات ونوافذ حديد فورفورجيه وشبك أمان للمباني والفيلات",
    "titleEn": "Wrought-iron window guards and security grilles for buildings and villas",
    "body": [
      "تنفذ شركة حمشو أعمال تصنيع وتفصيل حمايات النوافذ والشبابيك الحديدية (Window Security Grilles) والمنجور الحديدي الزخرفي المخصص للمنازل والفيلات والمنشآت السكنية والتجارية بمستويات أمان عالية."
    ],
    "bodyEn": [
      "Hamsho fabricates made-to-measure steel window guards and decorative ironwork for homes, villas, and residential and commercial buildings, with a high level of security."
    ],
    "features": [
      {
        "t": "تشكيلات وزخارف فورفورجيه أنيقة",
        "d": "تصميم حمايات شبابيك بنقوش فورفورجيه ملتوية وانحناءات كلاسيكية تضفي لمسة جمالية على الواجهات المعمارية مع توفير الأمان الكامل.",
        "tEn": "Elegant wrought-iron designs",
        "dEn": "Window guards with twisted scrolls and classic curves that dress up the façade while giving full protection."
      },
      {
        "t": "تقنيات قص الليزر والتشكيل الهيكلي",
        "d": "تصنيع إطارات وحمايات حديدية مفرغة بفرزات هندسية دقيقة (Laser-cut Patterns) ونقوش شرقية مفرغة تناسب كافة القياسات.",
        "tEn": "Laser cutting and structural forming",
        "dEn": "Steel frames and guards with precise laser-cut geometric and oriental patterns, made to any size."
      },
      {
        "t": "طلاء حماية حاري للأسطح",
        "d": "دهان أسطح الحديد بالطلاء الحاري الحراري باللون الأسود أو الرمادي الفاخر المقاوم للصدأ والعوامل الجوية الخارجية.",
        "tEn": "Heat-cured protective paint",
        "dEn": "Finished in premium black or grey paint that resists rust and outdoor weather."
      },
      {
        "t": "تجهيز وتثبيت محكم",
        "d": "دقة فائقة في تجهيز الإطارات الحديدية وتثبيتها بدقة على الواجهات الحجرية والخرسانية لضمان المتانة العالية والسلامة.",
        "tEn": "Accurate preparation and fixing",
        "dEn": "Frames are prepared precisely and fixed firmly to stone and concrete façades for strength and safety."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-006/1.webp",
        "w": 941,
        "h": 1672
      },
      {
        "src": "/images/projects/ham-wwd-006/2.webp",
        "w": 1181,
        "h": 1332
      },
      {
        "src": "/images/projects/ham-wwd-006/3.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-wwd-006/4.webp",
        "w": 1232,
        "h": 1277
      },
      {
        "src": "/images/projects/ham-wwd-006/5.webp",
        "w": 1448,
        "h": 1086
      }
    ]
  },
  {
    "slug": "ham-wwd-007",
    "code": "HAM-WWD-007",
    "category": "ironwork",
    "title": "تصنيع حمايات شبابيك فورفورجيه وشبك أمان مع المنجور الحديدي الزخرفي",
    "titleEn": "Wrought-iron window guards with insect mesh and decorative ironwork",
    "body": [
      "تُقدّم شركة حمشو أعمال تصنيع وتنفيذ حمايات النوافذ والشبابيك الحديدية (Wrought Iron Window Grilles) المشغولة يدوياً وآلياً بأدق التفاصيل الفنية والزخرفية."
    ],
    "bodyEn": [
      "Hamsho fabricates steel window guards worked by hand and machine with fine artistic and decorative detail."
    ],
    "features": [
      {
        "t": "شبك سلكي مدمج مع فورفورجيه",
        "d": "تركيب حمايات شبابيك تدعم شبكاً سلكياً خلفياً لمنع دخول الحشرات مع إطار فورفورجيه زخرفي أمامي يحقق الحماية والمظهر الجمالي.",
        "tEn": "Wire mesh combined with wrought iron",
        "dEn": "Guards with a wire mesh behind them to keep insects out, and a decorative wrought-iron front for protection and looks."
      },
      {
        "t": "تصاميم منحنية وعصرية",
        "d": "تصنيع حمايات بتصاميم محدبة وخارجية توفر مساحة للزهور والنباتات مع الحفاظ على القوة والهيكل الصلب.",
        "tEn": "Modern curved designs",
        "dEn": "Bowed, projecting guards that leave room for flowers and plants while keeping a solid structure."
      },
      {
        "t": "حليات ونقوش مذهبة وفضية",
        "d": "تزيين قضبان الحديد بفرزات ورؤوس حربة مذهبة وفضية تعزز الفخامة وتناسب واجهات المباني والفيلات.",
        "tEn": "Gold and silver details",
        "dEn": "Bars finished with gold and silver collars and spear tips for a refined look on buildings and villas."
      },
      {
        "t": "طلاء مقاوِم للرطوبة والصدأ",
        "d": "معالجة الأسطح بدقة بالطلاء الأسود المطفي أو البيج الحاري لمنع التآكل والصدأ على مدار الاستخدام.",
        "tEn": "Moisture- and rust-resistant coating",
        "dEn": "Surfaces carefully treated with matte black or beige paint to prevent corrosion over years of use."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wwd-007/1.webp",
        "w": 1800,
        "h": 1200
      },
      {
        "src": "/images/projects/ham-wwd-007/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wwd-007/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wwd-007/4.webp",
        "w": 1672,
        "h": 941
      }
    ]
  },
  {
    "slug": "ham-wst-001",
    "code": "HAM-WST-001",
    "category": "waste",
    "title": "تصنيع وتوريد حاويات النفايات البرميلية والحرارية الصلبة مع أغطية وأرجل تثبيت",
    "titleEn": "Barrel waste bins with lids and raised legs",
    "body": [
      "تُقدم شركة حمشو حلولاً متكاملة لتصنيع وتوريد حاويات وحاويات النفايات المعدنية والحرارية المخصصة للبلديات والمشاريع الميدانية والقطاعات الخدمية (Metal Waste Containers & Barrel Bins). يعتمد هذا المشروع على إعادة هيكلة وتصنيع البراميل المعدنية وتجهيزها بأغطية صلبة مزودة بمقابض وأرجل تثبيت حديدية مدهونة بطلاء أفراني حراري مقاوم للتآكل والعوامل الجوية باللونين الأحمر والأخضر، مما يضمن كفاءة عالية في جمع وإدارة النفايات الميدانية والمنزلية."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies metal waste bins for municipalities, field projects and service sectors. This project reworks steel barrels and fits them with solid lids and handles and steel legs, finished in red and green heat-cured paint that resists corrosion and weather, for efficient waste collection in the field and at home."
    ],
    "features": [
      {
        "t": "هياكل برميلية معدنية عالية الصلابة",
        "d": "تصنيع وتجهيز براميل حديدية سميكة مخصصة لجمع ونقل النفايات الصلبة بفعالية ودون تسريب.",
        "tEn": "Rigid steel barrel bodies",
        "dEn": "Thick steel barrels prepared to collect and move solid waste without leaks."
      },
      {
        "t": "أغطية معزولة بمقابض علوية",
        "d": "تزويد كل حاوية بغطاء معدني محكم يفتح عبر مقابض متينة للحد من انتشار الرواسب والروائح الكريهة وحماية المحتويات من الأمطار.",
        "tEn": "Lids with top handles",
        "dEn": "Each bin has a tight steel lid with sturdy handles to contain odours and keep rain out."
      },
      {
        "t": "أرجل وقواعد تثبيت مرفوعة عن الأرض",
        "d": "تركيب أرجل وقواعد فولاذية أسفل كل برميل لرفعه عن مستوى الأرض وحمايته من التآكل والرطوبة وتسهيل عملية التفريغ والنقل.",
        "tEn": "Raised legs and bases",
        "dEn": "Steel legs lift each barrel off the ground to protect it from corrosion and moisture and make emptying easier."
      },
      {
        "t": "طلاء حراري مقاوم للصدمات والصدأ",
        "d": "طلاء الحاويات بطلاء أفراني باللونين الأحمر والأخضر لتمييز أنواع النفايات وزيادة عمرها الافتراضي في ساحات العمل المفتوحة.",
        "tEn": "Impact- and rust-resistant coating",
        "dEn": "Red and green heat-cured paint distinguishes waste types and extends the bins' life outdoors."
      },
      {
        "t": "جاهزية للتوريد والتجميع بالكميات",
        "d": "إنتاج وتخزين أعداد كبيرة من الحاويات وتوريدها للمشروعات الخدمية والبلدية ومخيمات الإيواء بسرعة ودقة عالية.",
        "tEn": "Ready for supply in quantity",
        "dEn": "Large numbers are produced and delivered quickly to municipal projects, service sites and shelter camps."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wst-001/1.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wst-001/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wst-001/3.webp",
        "w": 1181,
        "h": 1331
      },
      {
        "src": "/images/projects/ham-wst-001/4.webp",
        "w": 1800,
        "h": 810
      },
      {
        "src": "/images/projects/ham-wst-001/5.webp",
        "w": 940,
        "h": 1674
      },
      {
        "src": "/images/projects/ham-wst-001/6.webp",
        "w": 1376,
        "h": 1143
      }
    ]
  },
  {
    "slug": "ham-wst-002",
    "code": "HAM-WST-002",
    "category": "waste",
    "title": "تصنيع وتوريد حاويات النظافة الحدائقية والمعدنية المزدوجة مع مظلة وقواعد زخرفية",
    "titleEn": "Park litter bins with canopy and decorative stands",
    "body": [
      "تُصمّم وتُنتج شركة حمشو سلات وحاويات القمامة المعدنية الأنيقة المخصصة للحدائق، المتنزهات العامة، والمشروعات العمرانية والسياحية (Park & Street Metal Dustbins with Sunshades). يتضمن هذا المشروع تصنيع حاوية برميلية معلقة ومدهونة باللون الأخضر الملكي، مثبّتة داخل إطار فولاذي أسود مزود بمظلة علوية لحماية الحاوية من الأمطار وأشعة الشمس، بالإضافة إلى قواعد حديدية بزخارف فورفورجيه جمالية وشعارات توعوية مطبوعة (\"النظافة حضارة\") لتعزيز الوعي البيئي."
    ],
    "bodyEn": [
      "Hamsho designs and produces elegant metal litter bins for parks, public gardens, and urban and tourism projects. This project features a tilting barrel bin in royal green, held in a black steel frame with a top canopy against rain and sun, on decorative wrought-iron stands with printed awareness slogans to encourage clean public spaces."
    ],
    "features": [
      {
        "t": "هيكل معدني معلق بقابليّة الدوران والتفريغ",
        "d": "تثبيت الحاوية البرميلية بنظام تعليق محوري يسهل عملية إمالتها وتفريغ محتوياتها بسرعة وسهولة.",
        "tEn": "Pivoting bin for easy emptying",
        "dEn": "The barrel hangs on a pivot so it tilts and empties quickly and easily."
      },
      {
        "t": "مظلة حديدية علوية عازلة",
        "d": "حماية فتحة الحاوية بمظلة سوداء مائلة لمنع دخول مياه الأمطار والحفاظ على مظهريتها النظيفة.",
        "tEn": "Steel canopy on top",
        "dEn": "An angled black canopy keeps rain out of the opening and the bin looking clean."
      },
      {
        "t": "طلاء فرن مقاوم للعوامل الجوية",
        "d": "طلاء الأجزاء الفولاذية باللونين الأخضر والأسود بأصباغ أفرانية حرارية تحميها من الصدأ وتغير الألوان تحت أشعة الشمس.",
        "tEn": "Weather-resistant baked finish",
        "dEn": "Green and black heat-cured paint protects against rust and sun fading."
      },
      {
        "t": "قواعد وقوائم فورفورجيه مزخرفة",
        "d": "قواعد تثبيت حديدية بتصاميم ملتوية تثبت الحاوية بثبات وتمنحها طابعاً معمارياً متناسقاً مع الحدائق والأرصفة.",
        "tEn": "Decorative wrought-iron stands",
        "dEn": "Scrolled steel stands hold the bin firmly and suit gardens and pavements."
      },
      {
        "t": "طباعة شعارات وعبارات توعوية",
        "d": "إمكانية طباعة الشعارات والعبارات البيئية باللون الأبيض لتعزيز المشهد الحضاري للمرافق والخدمات العامة.",
        "tEn": "Printed slogans and logos",
        "dEn": "Environmental slogans and logos can be printed in white to enhance public spaces."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wst-002/1.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-wst-002/2.webp",
        "w": 1086,
        "h": 1448
      },
      {
        "src": "/images/projects/ham-wst-002/3.webp",
        "w": 1086,
        "h": 1448
      }
    ]
  },
  {
    "slug": "ham-wst-003",
    "code": "HAM-WST-003",
    "category": "waste",
    "title": "تصنيع وتوريد حاويات وحاويات النفايات المعدنية المجلفنة بأغطية مفصلية وأرجل مرتفعة",
    "titleEn": "Galvanised steel waste bins with hinged lids and raised legs",
    "body": [
      "تُقدم شركة حمشو خدمات التصنيع المتقدم للتجهيزات والمعدات الخدمية، ومنها حاويات النفايات البرميلية المصنوعة من الصاج المجلفن المقاوم للصدأ والتآكل (Heavy-Duty Galvanized Metal Dustbins). يُركّز هذا المشروع على تصنيع حاويات صلبة مجهزة بأغطية مفصلية سريعة الفتح ومقابض جانبية سميكة لتسهيل الحمل والتفريغ، بالإضافة إلى أرجل تثبيت دائرية مرتفعة لحماية قاع الحاوية وزيادة ثباتها على الأسطح المختلفة، وتوفير خيارات ألوان متعددة تشمل الخضراء، الزرقاء، الرمادية، والحمراء."
    ],
    "bodyEn": [
      "Hamsho fabricates heavy-duty barrel waste bins in rust- and corrosion-resistant galvanised sheet. This project focuses on solid bins with quick-opening hinged lids, thick side handles for carrying and emptying, and raised legs on round feet that protect the base and keep the bin steady, in green, blue, grey and red."
    ],
    "features": [
      {
        "t": "هياكل معدنية مجلفنة عالية التحمل",
        "d": "تصنيع الحاويات من ألواح الفولاذ المجلفن المقاوم للرطوبة والمواد الكيميائية وضمان متانة عالية في الاستخدام اليومي الشديد.",
        "tEn": "Heavy-duty galvanised bodies",
        "dEn": "Galvanised steel that resists moisture and chemicals for durability in heavy daily use."
      },
      {
        "t": "أغطية مفصلية سهلة الفتح بمقابض مدمجة",
        "d": "تزويد الحاوية بغطاء مزود بمفصلات حديدية متينة ومقبض علوي يسهل عملية الفتح والإغلاق المحكم للحفاظ على البيئة النظيفة.",
        "tEn": "Hinged lids with built-in handles",
        "dEn": "Sturdy steel hinges and a top handle for easy opening and a tight close."
      },
      {
        "t": "أرجل تثبيت مرتفعة بصفائح دائرية",
        "d": "قواعد وأرجل حديدية ترفع جسم الحاوية عن الأرض لتجنب تجمّع المياه وتسهيل عملية الغسيل والتنظيف.",
        "tEn": "Raised legs with disc feet",
        "dEn": "Steel legs keep the bin off the ground so water doesn't collect and cleaning is easy."
      },
      {
        "t": "مقابض رفع جانبية مجهزة للحمل ثقيل",
        "d": "تركيب مقابض فولاذية على الجانبين لتسهيل نقل ونقل الحاوية بواسطة عمال النظافة أو المعدات الميكانيكية.",
        "tEn": "Heavy-duty side handles",
        "dEn": "Steel handles on both sides for carrying by hand or by machine."
      },
      {
        "t": "طلاء أفراني حراري بألوان متعددة",
        "d": "طلاء الحاويات بألوان زاهية ومقاومة للتقشر (أخضر، أزرق، رمادي، أحمر) لتمكين التفرقة بين أنواع النفايات وإعادة التدوير.",
        "tEn": "Heat-cured paint in several colours",
        "dEn": "Bright, peel-resistant colours (green, blue, grey, red) for sorting waste and recycling."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wst-003/1.webp",
        "w": 1800,
        "h": 811
      },
      {
        "src": "/images/projects/ham-wst-003/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wst-003/3.webp",
        "w": 1181,
        "h": 1332
      },
      {
        "src": "/images/projects/ham-wst-003/4.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wst-003/5.webp",
        "w": 1672,
        "h": 940
      }
    ]
  },
  {
    "slug": "ham-wst-004",
    "code": "HAM-WST-004",
    "category": "waste",
    "title": "تصنيع وتوريد حاويات النفايات المعدنية الضخمة للبلديات مع مقابض وأرجُل تثبيت وعجلات",
    "titleEn": "Large municipal steel waste containers with handles, legs or wheels",
    "body": [
      "تُصنّع وتُورّد شركة حمشو حاويات النفايات المعدنية الثقيلة والضخمة والمخصصة للمجالس البلدية، الأحياء السكنية، والمشاريع الإغاثية والميدانية (Municipal Heavy-Duty Metal Waste Dumpsters). يتضمن هذا المشروع تصنيع حاويات صلبة من صفائح الحديد المجلفن ومقاطع الفولاذ السميكة، والمزودة بمقابض سحب وتفريغ جانبية متينة تتماشى مع آليات وشاحنات ضغط وتفريغ القمامة. تتوفر الحاويات إما بنظام أرجل تثبيت قوية ومجوفة للرفع الميكانيكي أو بنظام عجلات متينة لسلس الحركة، مع طلاء حراري مقاوم للصدأ والعوامل الجوية وطباعة عبارات توعوية (\"نظافة بلدنا واجب علينا\")."
    ],
    "bodyEn": [
      "Hamsho fabricates and supplies heavy-duty steel waste dumpsters for municipal councils, neighbourhoods, and relief and field projects. They are built from galvanised steel sheet and thick steel sections, with strong side lifting bars that match municipal refuse trucks. Containers come on sturdy hollow legs for mechanical lifting or on heavy-duty wheels, with weather-resistant heat-cured paint and printed awareness slogans."
    ],
    "features": [
      {
        "t": "هيكل معدني من صفائح الفولاذ الملحومة",
        "d": "تصنيع جسم الحاوية من ألواح صاج سميكة وملحومة بدقة متناهية لضمان عدم التسريب وتحمل الأحمال الثقيلة والنفايات الصلبة.",
        "tEn": "Welded heavy steel sheet body",
        "dEn": "Thick sheet welded precisely to prevent leaks and carry heavy solid waste."
      },
      {
        "t": "مقابض سحب وتفريغ انبوبية امتدادية",
        "d": "تزويد الحاوية بأنبوبين حديديين على الجانبين يتناسبان تماماً مع رافعات شاحنات وسيور البلدية لعمليات الرفع والتفريغ الميكانيكي السريع.",
        "tEn": "Tubular lifting and tipping bars",
        "dEn": "Two steel tubes on the sides fit municipal truck lifters for fast mechanical emptying."
      },
      {
        "t": "أنظمة تثبيت وتحريك متنوعة (أرجل مجوفة أو عجلات)",
        "d": "خيارات متعددة للقواعد تشمل أرجل فولاذية ثابتة ومجوفة تسمح برفعها بواسطة الشوكات، أو عجلات متحركة شديدة التحمل ومزودة بكوابل تثبيت.",
        "tEn": "Legs or wheels",
        "dEn": "Fixed hollow steel legs for forklift lifting, or heavy-duty castors with brakes."
      },
      {
        "t": "طلاء حماية أفراني عالي المقاومة",
        "d": "طلاء خارجي باللونين الأخضر الزيتي أو الرمادي لحماية الحاوية من التآكل والرطوبة وتأثيرات أشعة الشمس المباشرة.",
        "tEn": "High-resistance protective coating",
        "dEn": "Olive green or grey exterior paint against corrosion, moisture and direct sun."
      },
      {
        "t": "طباعة عبارات توعوية وشعارات بلدية",
        "d": "طباعة شعارات النظافة والعبارات التوعوية البيئية باللون الأبيض لتعزيز الوعي الاجتماعي بالبيئة.",
        "tEn": "Printed slogans and municipal logos",
        "dEn": "Cleanliness slogans and environmental messages printed in white."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wst-004/1.webp",
        "w": 1448,
        "h": 1086
      },
      {
        "src": "/images/projects/ham-wst-004/2.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wst-004/3.webp",
        "w": 1672,
        "h": 941
      },
      {
        "src": "/images/projects/ham-wst-004/4.webp",
        "w": 1254,
        "h": 1254
      }
    ]
  },
  {
    "slug": "ham-wst-005",
    "code": "HAM-WST-005",
    "category": "waste",
    "title": "تصنيع وتوريد حاويات النفايات المعدنية المربعة المزودة بغطاء مفصلي وأرجل رفيعة",
    "titleEn": "Square steel waste bins with hinged lids and raised legs",
    "body": [
      "تُصمّم وتصنّع شركة حمشو حاويات القمامة المعدنية الحديثة ذات الشكل الهرمي المقلوب والمربع للمؤسسات، المكاتب، والحدائق العامة (Modern Square Metal Trash Cans). يتضمن المشروع تصنيع حاويات صلبة باللون الرمادي الفاتح من ألواح صاج مسحوبة ومزودة بغطاء فولاذي محكم بمفصلات علوية ومقبض وسطي لسهولة الاستخدام، بالإضافة إلى مقابض جانبية للحمل وأرجل دائرية مرتفعة تدعم الثبات وتسهل عملية التنظيف."
    ],
    "bodyEn": [
      "Hamsho designs and fabricates modern square, tapered steel bins for institutions, offices and public gardens. The project produces solid light-grey bins in drawn sheet with a tight hinged steel lid and central handle, side carrying handles, and raised legs on round feet for stability and easy cleaning."
    ],
    "features": [
      {
        "t": "تصميم هندسي متدرج ومربع",
        "d": "تصنيع جسم الحاوية بزوايا دقيقة واتساع من الأعلى لأسفل لزيادة السعة الاستيعابية وسهولة التفريغ.",
        "tEn": "Tapered square design",
        "dEn": "Precise angles widening from top to bottom for more capacity and easy emptying."
      },
      {
        "t": "غطاء علوي مفصلي بمقبض صلب",
        "d": "غطاء صاج قوي يفتح بزاوية واسعة ومزود بمقبض علوي متين يمنع تسرب الروائح والأمطار.",
        "tEn": "Hinged top lid with a solid handle",
        "dEn": "A strong lid that opens wide and keeps in odours and keeps out rain."
      },
      {
        "t": "أرجل تثبيت مرتفعة بصفائح دائرية",
        "d": "قواعد أنبوبية قصيرة مثبتة بصفائح دائرية ترفع جسم الحاوية عن الأرض لتجنب تجمّع المياه وتآكل القاعدة.",
        "tEn": "Raised legs with disc feet",
        "dEn": "Short tubular legs keep the bin off the ground so water doesn't collect and the base doesn't corrode."
      },
      {
        "t": "مقابض نقل جدارية متينة",
        "d": "مقابض جانبية مسطحة مدمجة على الجدران الخارجية تسهل حمل ونقل الحاوية ميكانيكياً أو يدوياً.",
        "tEn": "Sturdy side handles",
        "dEn": "Flat handles built into the walls for carrying by hand or by machine."
      },
      {
        "t": "طلاء فرن حراري باللون الرمادي المحايد",
        "d": "طلاء أفراني مقاوم للصدمات والصدأ يضمن مظهراً عصرياً يناسب الواجهات الخارجية والداخلية للمنشآت.",
        "tEn": "Neutral grey baked finish",
        "dEn": "Impact- and rust-resistant heat-cured paint for a modern look indoors and out."
      }
    ],
    "images": [
      {
        "src": "/images/projects/ham-wst-005/1.webp",
        "w": 1085,
        "h": 1450
      },
      {
        "src": "/images/projects/ham-wst-005/2.webp",
        "w": 1085,
        "h": 1450
      },
      {
        "src": "/images/projects/ham-wst-005/3.webp",
        "w": 1084,
        "h": 1451
      }
    ]
  }
];

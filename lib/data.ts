// Paths of numbered product images, e.g. /images/products/doors/product-1.webp
const productImgs = (id: string, prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/images/products/${id}/${prefix}-${i + 1}.webp`);

export const D = {
  brand: {
    nameAr: "حمشو",
    fullAr: "شركة حمشو للإنشاءات المعدنية",
    fullEn: "Hamsho for Metal Constructions",
  },
  nav: [
    { id: "home",       label: "الرئيسية",   labelEn: "Home",       href: "/" },
    { id: "about",      label: "من نحن",      labelEn: "About",      href: "/about" },
    { id: "products",   label: "المنتجات",    labelEn: "Products",   href: "/products" },
    { id: "projects",   label: "المشاريع",    labelEn: "Projects",   href: "/projects" },
    // { id: "industries", label: "القطاعات",    labelEn: "Industries", href: "/industries" }, // مخفي من الموقع — الصفحة والكود ما زالوا موجودين بـ app/industries
    { id: "contact",    label: "تواصل معنا",  labelEn: "Contact",    href: "/contact" },
  ],
  hero: {
    eyebrow:      "منذ 2005 · حلب — التوامة",
    title:        "إنشاءات معدنية بمعايير الجودة والإتقان",
    subtitle:     "مكتب هندسي داخلي متخصّص، مشاغل تصنيع متكاملة، وفرق تركيب احترافية — خبرة تتجاوز عشرين عاماً في الإنشاءات المعدنية بحلب وسوريا.",
    primaryCta:   "اطلب عرض سعر",
    secondaryCta: "تعرّف على خدماتنا",
  },
  stats: [
    { value: "+20",  unit: "عاماً", label: "خبرة في السوق الصناعية",         cat: "EXPERIENCE" },
    { value: "B2B",  unit: "",      label: "خدمة قطاع الأعمال والمنظمات",    cat: "MARKET" },
    { value: "2",    unit: "",      label: "فرعا التشغيل",                    cat: "BRANCHES" },
    { value: "100%", unit: "",      label: "تصميم هندسي قبل التنفيذ",         cat: "ENGINEERING" },
  ],
  process: [
    { num: '01', title: 'الدراسة الهندسية', titleEn: 'Engineering Study',    body: 'تصميم هيكلي دقيق بأحمال الرياح والثقل',    bodyEn: 'Precise structural design with wind & load calculations' },
    { num: '02', title: 'التصميم والتخطيط', titleEn: 'Design & Planning',    body: 'مخططات تنفيذية ومواصفات فنية مفصّلة',       bodyEn: 'Execution drawings and detailed technical specs' },
    { num: '03', title: 'التصنيع والتجهيز', titleEn: 'Fabrication',          body: 'تصنيع بمعايير جودة عالية في مشاغلنا',      bodyEn: 'High-standard fabrication in our workshops' },
    { num: '04', title: 'التركيب والتسليم', titleEn: 'Install & Handover',   body: 'تركيب احترافي وتسليم نهائي في الموعد',    bodyEn: 'Professional on-site installation, on-schedule delivery' },
  ],
  about: {
    title:  "من نحن",
    body:   "تأسست شركة حمشو للدراسة والإنشاءات المعدنية عام 2005، ونالت الخبرة والشهرة بالسمعة الجيدة في الوسط الصناعي والتجاري من خلال تعاملنا مع العديد من المنظمات الإنسانية والجمعيات الخيرية والقطاعات الخاصة والحكومية. تخصّصت المؤسسة في أعمال الإنشاءات المعدنية وتشكيل الحديد والصاج على البارد وغيرها من الأعمال المتعلقة في مجال لحام الحديد والصاج.",
    bodyEn: "Founded in 2005, Hamsho earned its reputation in Aleppo's industrial market through work with humanitarian organisations, charities, and private and government sectors. We specialise in metal construction, cold forming of steel and sheet metal, and all welding work in iron and sheet.",
    pillars: [
      { title: "الهدف",   titleEn: "Goal",    body: "الإبداع والإبتكار في مجال إنشاء المعادن، مع بذل قصارى جهدنا لإرضاء العملاء وتلبية احتياجاتهم.", bodyEn: "Creativity and innovation in metal construction, with our full effort behind every client request." },
      { title: "الرؤية",  titleEn: "Vision",  body: "التوسّع في الأعمال التي تعتمد على تكنولوجيا الطاقة البديلة.", bodyEn: "Expand into work that depends on alternative-energy technology." },
      { title: "الرسالة", titleEn: "Mission", body: "نشر ثقافة الجودة والإتقان في مجال الإنشاءات المعدنية.",   bodyEn: "Spread a culture of quality and craftsmanship in metal construction." },
    ],
    pillarIcons: ["target", "eye", "send"],
  },
  services: [
    { slug: 'engineering-design',   icon: "ruler",    title: "الدراسة والتصميم الإنشائي", titleEn: "Engineering study & design",   body: "نقوم بدراسة وتصميم جميع الهياكل المعدنية للهنكارات والمصانع وقواعد الطاقة البديلة والخزانات المعدنية، من خلال مكتبنا المختص.", bodyEn: "In-house engineering office that designs every steel structure — hangars, factories, solar bases, metal tanks.", tag: "ENGINEERING", tagEn: "ENGINEERING" },
    { slug: 'solar-bases',          icon: "sun",      title: "قواعد الطاقة الشمسية",       titleEn: "Solar mounting bases",         body: "قواعد طاقة شمسية ثابتة ومتحركة، وفق دراسة متخصّصة تتضمّن حمولات الرياح، بجميع الأشكال والمقاسات والأحجام.", bodyEn: "Fixed and tracking solar bases, engineered for regional wind loads in any shape or scale.", tag: "SOLAR", tagEn: "SOLAR" },
    { slug: 'caravans',             icon: "container",title: "كرفانات مسبقة الصنع",        titleEn: "Prefabricated caravans",       body: "كرفانات بمواصفات متنوّعة بجدران ساندويش عازلة للصوت والحرارة والرطوبة، مقاومة للحريق، ويمكن جعلها متنقلة على مقطورة.", bodyEn: "Sandwich-panel cabins — acoustic, thermal and moisture insulated, fire-resistant, optionally trailer-mounted.", tag: "PREFAB", tagEn: "PREFAB" },
    { slug: 'tanks',                icon: "cylinder", title: "الخزانات والصهاريج",          titleEn: "Tanks & reservoirs",           body: "خزانات منزلية وصناعية وصحية بجميع الأنواع، وصهاريج ماء ووقود للكازيات والمشافي، بتقنية اللحام أو الكبس (الغلفنة).", bodyEn: "Domestic, industrial and sanitary tanks; water and fuel reservoirs welded or galvanised.", tag: "TANKS", tagEn: "TANKS" },
    { slug: 'hangars',              icon: "factory",  title: "الهنكارات والصاج الأمريكي",  titleEn: "Industrial hangars",           body: "هنكارات صناعية بمقاطع معدنية عالمية أو من صناعتنا، بتقنية الفك والتركيب أو اللحام، مع إمكانية تقديم الصاج الأمريكي.", bodyEn: "Hangars in international or in-house steel profiles — bolt-up or welded — with American-profile sheet metal.", tag: "HANGARS", tagEn: "HANGARS" },
    { slug: 'sheet-metal-welding',  icon: "flame",    title: "أعمال الصاج واللحام",         titleEn: "Sheet metal & welding",        body: "قصّ وطعج وتشكيل ولحام (كهرباء ونحاس) لجميع أنواع وسماكات الصاج الأسود والمزيبق والستانلس والكروم.", bodyEn: "Cutting, bending, forming and welding (electric or brass) for all gauges of black, galvanised, stainless and chrome sheet.", tag: "METALWORK", tagEn: "METALWORK" },
    { slug: 'fencing',              icon: "grid-2x2", title: "الشبك المعدني والأسوار",      titleEn: "Mesh & fencing",               body: "أعمال شبك وسور الملاعب والحدائق والهنكارات والتجمّعات السكنية، وفقًا لمعايير ومواصفات مختلفة.", bodyEn: "Mesh and steel fencing for fields, gardens, hangars and residential compounds, to any spec.", tag: "FENCING", tagEn: "FENCING" },
  ],
  // Product categories — shown as filter chips on /products, in this order.
  productCategories: [
    { id: 'ironwork',  title: 'المنجور',            titleEn: 'Ironwork' },
    { id: 'tanks',     title: 'الخزانات والصهاريج', titleEn: 'Tanks & tankers' },
    { id: 'waste',     title: 'حاويات النفايات',     titleEn: 'Waste containers' },
    { id: 'lighting',  title: 'أعمدة الإنارة',      titleEn: 'Lighting poles' },
    { id: 'boilers',   title: 'القازانات',          titleEn: 'Boilers' },
  ],
  // Product catalogue. Images live in public/images/products/<id>/:
  //   product-N.webp  — studio product images (the first one is the card cover)
  //   real-N.webp     — real photos from the workshop/site, shown inside the product page
  //   model-N.webp + model-N-real.webp — design + real photo pairs for products sold in many models
  products: [
    // ── Ironwork ─────────────────────────────────────────
    {
      id: 'doors', category: 'ironwork',
      title: 'أبواب حديد', titleEn: 'Steel doors',
      tagline: 'أبواب حديد وصاج للبيوت والبنايات والمحلات بموديلات متعدّدة',
      taglineEn: 'Steel and sheet-metal doors for homes, buildings and shops in many models',
      body: [
        'نصنّع في مشغلنا أبواب الحديد والصاج بأنواعها: أبواب خارجية للبيوت والبنايات، أبواب صاج مكبوس بنقشات بارزة، أبواب حديد مشغول مع زجاج، وأبواب بدرفة أو درفتين أو أكثر للمحلات والمخازن.',
        'كل باب يُفصَّل على مقاس الفتحة، ويُتَّفق مع الزبون على الموديل واللون والإكسسوارات قبل التنفيذ. الدهان أساس مضاد للصدأ مع وجه نهائي باللون المطلوب، مع إمكانية التركيب في الموقع.',
      ],
      bodyEn: [
        'Our workshop makes steel and sheet-metal doors of every kind: exterior doors for homes and buildings, pressed-sheet doors with raised patterns, wrought-iron doors with glass, and single, double or multi-leaf doors for shops and warehouses.',
        'Every door is made to the size of its opening, and the model, colour and fittings are agreed with the client before work starts. Painting is an anti-rust primer with a top coat in the chosen colour, and we can install on site.',
      ],
      features: ['تفصيل على مقاس الفتحة', 'درفة أو درفتين أو أكثر', 'صاج مكبوس أو حديد مشغول', 'إكسسوارات وزخارف حسب الطلب', 'أساس مضاد للصدأ ووجه نهائي', 'تركيب في الموقع'],
      featuresEn: ['Made to the opening size', 'Single, double or multi-leaf', 'Pressed sheet or wrought iron', 'Fittings and ornaments to order', 'Anti-rust primer and top coat', 'On-site installation'],
      specs: [
        { k: 'المادة', kEn: 'Material', v: 'صاج / حديد', vEn: 'Sheet / steel' },
        { k: 'المقاس', kEn: 'Size', v: 'حسب الفتحة', vEn: 'To the opening' },
        { k: 'الدهان', kEn: 'Finish', v: 'أساس + وجه نهائي', vEn: 'Primer + top coat' },
      ],
      models: 15,
    },
    {
      id: 'gates', category: 'ironwork',
      title: 'بوابات حديد', titleEn: 'Steel gates',
      tagline: 'بوابات مداخل للمنازل والمعامل والمزارع',
      taglineEn: 'Entrance gates for homes, factories and farms',
      body: [
        'نصنّع بوابات الحديد للمداخل والأسوار: بوابات مفصلية بعدّة درفات، وبوابات سحّابة للمداخل العريضة، لمداخل البيوت والبنايات والمعامل والمزارع.',
        'تُنفَّذ سادة أو مع زخارف ونقشات معدنية حسب الطلب، بهيكل متين يتحمّل الاستخدام اليومي، مع دهان أساس مضاد للصدأ ووجه نهائي باللون المطلوب، وتُركَّب في الموقع.',
      ],
      bodyEn: [
        'We make steel gates for entrances and boundary walls: hinged gates with several leaves and sliding gates for wide openings, for homes, buildings, factories and farms.',
        'Gates are made plain or with metal ornaments on request, on a sturdy frame built for daily use, finished with an anti-rust primer and a top coat in the chosen colour, and installed on site.',
      ],
      features: ['مفصلية أو سحّابة', 'عدد درفات حسب عرض المدخل', 'سادة أو مع زخارف معدنية', 'هيكل يتحمّل الاستخدام اليومي', 'تركيب في الموقع'],
      featuresEn: ['Hinged or sliding', 'Leaves to suit the opening width', 'Plain or with metal ornaments', 'Frame built for daily use', 'On-site installation'],
      specs: [
        { k: 'النوع', kEn: 'Type', v: 'مفصلية / سحّابة', vEn: 'Hinged / sliding' },
        { k: 'المقاس', kEn: 'Size', v: 'حسب المدخل', vEn: 'To the entrance' },
        { k: 'الدهان', kEn: 'Finish', v: 'أساس + وجه نهائي', vEn: 'Primer + top coat' },
      ],
      renders: 1, photos: 1,
    },
    {
      id: 'windows', category: 'ironwork',
      title: 'شبابيك وحمايات', titleEn: 'Windows & window guards',
      tagline: 'شبابيك حديد وحمايات مشغولة للمنازل والمحلات',
      taglineEn: 'Steel windows and wrought-iron guards for homes and shops',
      body: [
        'نصنّع شبابيك الحديد وحمايات الشبابيك بموديلات متعدّدة: تصاميم هندسية بخطوط ودوائر، وحديد مشغول بزخارف ولفّات، للبيوت والمحلات والمدارس والمنشآت.',
        'تؤخذ المقاسات بدقة حتى يأتي التركيب مضبوطاً على الفتحة، والدهان أساس مضاد للصدأ يناسب الواجهات الخارجية مع وجه نهائي باللون المطلوب.',
      ],
      bodyEn: [
        'We make steel windows and window guards in many models: geometric designs of bars and circles and wrought iron with scrolls, for homes, shops, schools and facilities.',
        'Openings are measured precisely so the guard fits exactly, finished with an anti-rust primer suited to exterior façades and a top coat in the chosen colour.',
      ],
      features: ['موديلات هندسية ومشغولة', 'مقاسات مضبوطة حسب الفتحة', 'لحام نظيف', 'أساس مضاد للصدأ', 'تركيب في الموقع'],
      featuresEn: ['Geometric and wrought models', 'Sized to the opening', 'Clean welding', 'Anti-rust primer', 'On-site installation'],
      specs: [
        { k: 'المادة', kEn: 'Material', v: 'حديد', vEn: 'Steel' },
        { k: 'المقاس', kEn: 'Size', v: 'حسب الفتحة', vEn: 'To the opening' },
        { k: 'الاستخدام', kEn: 'Use', v: 'بيوت ومحلات ومنشآت', vEn: 'Homes, shops & facilities' },
      ],
      models: 8,
    },
    {
      id: 'protection-arches', category: 'ironwork',
      title: 'قناطر حماية', titleEn: 'Protective window arches',
      tagline: 'قناطر حماية بارزة للشبابيك بتصاميم مشغولة',
      taglineEn: 'Projecting protective arches for windows in wrought designs',
      body: [
        'قناطر الحماية حمايات حديد بارزة عن الجدار تُركَّب على الشبابيك، تؤمّن الحماية وتترك مساحة أمام الشبّاك للتهوية ووضع النباتات، وتعطي الواجهة شكلاً مميّزاً.',
        'ننفّذها بتصاميم متعدّدة: قضبان مقوّسة، زخارف ولفّات مشغولة، ومع شبك ناعم خلف الزخرفة عند الطلب، بالمقاس واللون المطلوبين.',
      ],
      bodyEn: [
        'Protective arches are steel guards that project out from the wall over a window. They secure the window while leaving space in front of it for ventilation and plants, and give the façade a distinctive look.',
        'We make them in many designs — curved bars, wrought scrolls, and with fine mesh behind the ornament on request — to the size and colour required.',
      ],
      features: ['بارزة عن الجدار', 'تصاميم مشغولة متعدّدة', 'شبك ناعم عند الطلب', 'مقاس ولون حسب الطلب', 'تركيب في الموقع'],
      featuresEn: ['Projects out from the wall', 'Many wrought designs', 'Optional fine mesh', 'Size and colour to order', 'On-site installation'],
      specs: [
        { k: 'المادة', kEn: 'Material', v: 'حديد مشغول', vEn: 'Wrought steel' },
        { k: 'المقاس', kEn: 'Size', v: 'حسب الشبّاك', vEn: 'To the window' },
        { k: 'الدهان', kEn: 'Finish', v: 'أساس + وجه نهائي', vEn: 'Primer + top coat' },
      ],
      models: 7,
    },

    // ── Tanks & tankers ──────────────────────────────────
    {
      id: 'fuel-transport-tank', category: 'tanks',
      title: 'خزان معدني لتخزين ونقل الوقود', titleEn: 'Fuel storage & transport tank',
      tagline: 'خزان وقود بسعة 40,000 ليتر مجهّز للتعبئة والتفريغ والنقل',
      taglineEn: 'A 40,000-litre fuel tank equipped for filling, discharge and transport',
      body: [
        'مصمّم ومصنّع لتحمّل ظروف التشغيل والنقل، بهيكل معدني متين وتقويات داخلية وخارجية لتعزيز الثبات والسلامة، مع تجهيزات متكاملة للتعبئة والتفريغ والتهوية.',
        'يُصنَّع الجسم من صاج بسماكة 4 مم على قاعدة بسماكة 5 مم، مع 4 قواطع دعم داخلية (Baffles) تحدّ من حركة الوقود أثناء النقل، وشاسيه معدني مع طبقات حماية مقاومة للصدأ والتآكل.',
      ],
      bodyEn: [
        'Designed and built to withstand operation and transport, with a sturdy steel body and internal and external reinforcement for stability and safety, plus complete fittings for filling, discharge and venting.',
        'The shell is 4 mm sheet on a 5 mm base, with 4 internal baffles that limit fuel surge in transit, on a steel chassis with rust- and corrosion-resistant protective coats.',
      ],
      features: ['سعة لا تقل عن 40,000 ليتر', '4 قواطع دعم داخلية (Baffles)', 'فتحة تعبئة علوية محكمة', 'فتحات تهوية ومعادلة ضغط', 'صمام تفريغ نحاسي', 'طبقات حماية ضد الصدأ والتآكل'],
      featuresEn: ['At least 40,000 L capacity', '4 internal baffles', 'Sealed top filling hatch', 'Vent and pressure-equalising openings', 'Brass discharge valve', 'Rust and corrosion protection'],
      specs: [
        { k: 'السعة', kEn: 'Capacity', v: '40,000 ليتر', vEn: '40,000 L' },
        { k: 'سماكة الجسم', kEn: 'Shell', v: '4 مم', vEn: '4 mm' },
        { k: 'سماكة القاعدة', kEn: 'Base', v: '5 مم', vEn: '5 mm' },
        { k: 'الاستخدام', kEn: 'Use', v: 'تخزين ونقل الوقود', vEn: 'Fuel storage & transport' },
      ],
      renders: 4, photos: 12,
    },
    {
      id: 'large-cylindrical-tank', category: 'tanks',
      title: 'خزان معدني أسطواني بسعة كبيرة', titleEn: 'Large cylindrical steel tank',
      tagline: 'خزان صناعي أفقي لتخزين ونقل السوائل',
      taglineEn: 'A horizontal industrial tank for storing and transporting liquids',
      body: [
        'خزان صناعي أفقي مصنّع من الفولاذ، مصمّم لتوفير حل عملي ومتين لأعمال تخزين ونقل السوائل ضمن المشاريع والمنشآت الصناعية والخدمية، بهيكل أسطواني قوي وقاعدة معدنية داعمة.',
        'يُصنَّع الجسم من صفائح معدنية تُشكَّل وتُجمَّع وتُلحَم بعناية، ويتضمّن فتحة علوية للتعبئة والفحص، سلّماً معدنياً للوصول، ومخارج للتفريغ والتوصيل. الأبعاد والسعة والتجهيزات والدهان حسب متطلبات كل مشروع.',
      ],
      bodyEn: [
        'A horizontal industrial tank made of steel — a practical, durable solution for storing and moving liquids on industrial and service projects — with a strong cylindrical body and a supporting steel base.',
        'The shell is formed, assembled and welded from steel plate, with a top hatch for filling and inspection, an access ladder, and outlets for discharge and connections. Dimensions, capacity, fittings and coating are set per project.',
      ],
      features: ['هيكل فولاذي أسطواني أفقي', 'فتحة تعبئة وفحص علوية', 'سلّم وصول معدني', 'مخارج للتفريغ والتوصيلات', 'قاعدة معدنية قوية', 'سعات وأبعاد حسب الطلب'],
      featuresEn: ['Horizontal cylindrical steel body', 'Top filling & inspection hatch', 'Steel access ladder', 'Discharge & connection outlets', 'Strong steel base', 'Capacity and size to order'],
      specs: [
        { k: 'الشكل', kEn: 'Shape', v: 'أسطواني أفقي', vEn: 'Horizontal cylinder' },
        { k: 'المادة', kEn: 'Material', v: 'فولاذ', vEn: 'Steel' },
        { k: 'السعة', kEn: 'Capacity', v: 'حسب الطلب', vEn: 'To order' },
      ],
      renders: 3, photos: 9,
    },
    {
      id: 'large-diesel-tank', category: 'tanks',
      title: 'خزان مازوت كورج', titleEn: 'Large rectangular diesel tank',
      tagline: 'خزان مازوت مستطيل بسعة كبيرة للمحطات والمنشآت',
      taglineEn: 'A large-capacity rectangular diesel tank for stations and facilities',
      body: [
        'خزان مازوت مستطيل بسعة كبيرة، يُصنَّع من صاج حديد سميك بهيكل مدعّم وزوايا مشطوفة، مناسب لمحطات الوقود والأفران والمعامل والمنشآت التي تحتاج تخزين كميات كبيرة من المازوت.',
        'مزوّد بسلّم معدني للوصول إلى فتحة التعبئة العلوية ومخارج سفلية للتفريغ، ويُفحص اللحام ضد التسريب قبل التسليم. يُنقل الخزان جاهزاً إلى الموقع ويُنزَّل بالرافعة.',
      ],
      bodyEn: [
        'A large-capacity rectangular diesel tank made from heavy steel sheet on a reinforced frame with chamfered corners — suited to fuel stations, bakeries, factories and facilities that store large volumes of diesel.',
        'It comes with a steel ladder to the top filling hatch and bottom discharge outlets, and the welds are leak-tested before delivery. The tank is delivered ready to site and set in place by crane.',
      ],
      features: ['سعة تخزين كبيرة', 'صاج سميك بهيكل مدعّم', 'سلّم وفتحة تعبئة علوية', 'مخارج تفريغ سفلية', 'فحص ضد التسريب', 'توصيل وتنزيل في الموقع'],
      featuresEn: ['Large storage capacity', 'Heavy sheet on a reinforced frame', 'Ladder and top filling hatch', 'Bottom discharge outlets', 'Leak-tested', 'Delivered and set on site'],
      specs: [
        { k: 'الشكل', kEn: 'Shape', v: 'مستطيل', vEn: 'Rectangular' },
        { k: 'الاستخدام', kEn: 'Use', v: 'تخزين المازوت', vEn: 'Diesel storage' },
        { k: 'السعة', kEn: 'Capacity', v: 'حسب الطلب', vEn: 'To order' },
      ],
      renders: 3, photos: 10,
    },
    {
      id: 'truck-tanker-40', category: 'tanks',
      title: 'صهريج سيارة 40 برميل', titleEn: 'Truck-mounted tanker — 40 barrels',
      tagline: 'صهريج مجلفن يُركَّب على السيارة لنقل المياه',
      taglineEn: 'A galvanised tanker mounted on a truck for water transport',
      body: [
        'صهريج بسعة 40 برميلاً (حوالي 8,000 ليتر) يُصنَّع من الصاج المجلفن على قياس صندوق السيارة، ويُركَّب عليها في مشغلنا. الجسم مدعّم بتقويات وتضليعات تمنع التشوّه أثناء الحركة.',
        'مزوّد بفتحة تعبئة علوية بغطاء، سلالم جانبية للوصول، ومخارج سفلية للتفريغ، مع إطار حماية ومصدّ خلفي. مناسب لنقل المياه للأحياء والمنشآت والمشاريع.',
      ],
      bodyEn: [
        'A 40-barrel tanker (about 8,000 litres) made from galvanised sheet to fit the truck bed and mounted on the vehicle at our workshop. The body is braced and ribbed to prevent deformation on the move.',
        'It has a lidded top filling hatch, side access ladders and bottom discharge outlets, with a protective frame and rear bumper. Suited to delivering water to neighbourhoods, facilities and projects.',
      ],
      features: ['سعة 40 برميلاً (~8,000 ليتر)', 'صاج مجلفن ضد الصدأ', 'على قياس السيارة', 'فتحة تعبئة وسلالم وصول', 'مخارج تفريغ سفلية', 'تركيب على السيارة في المشغل'],
      featuresEn: ['40 barrels (~8,000 L)', 'Rust-proof galvanised sheet', 'Made to fit the truck', 'Filling hatch and access ladders', 'Bottom discharge outlets', 'Mounted at our workshop'],
      specs: [
        { k: 'السعة', kEn: 'Capacity', v: '40 برميل (~8,000 ليتر)', vEn: '40 barrels (~8,000 L)' },
        { k: 'المادة', kEn: 'Material', v: 'صاج مجلفن', vEn: 'Galvanised sheet' },
        { k: 'التركيب', kEn: 'Mounting', v: 'على السيارة', vEn: 'Truck-mounted' },
      ],
      renders: 4, photos: 10,
    },
    {
      id: 'round-pressed-tank', category: 'tanks',
      title: 'خزان مياه أسطواني أفقي', titleEn: 'Horizontal cylindrical water tank',
      tagline: 'خزان مياه فولاذي مدعّم بحلقات تقوية خارجية',
      taglineEn: 'A steel water tank braced with external stiffening rings',
      body: [
        'خزان فولاذي متين مصمّم لتخزين المياه بسعات كبيرة، يتميّز بهيكل أسطواني مدعّم بحلقات تقوية خارجية وقواعد تثبيت قوية لضمان الثبات والتحمّل.',
        'مزوّد بفتحة علوية للفحص والتعبئة ومخارج سفلية لتسهيل التغذية والتفريغ، مع تشطيب خارجي مقاوم للعوامل البيئية. تصميم صناعي عملي يُنفَّذ بسعات وأبعاد مختلفة حسب متطلبات المشروع.',
      ],
      bodyEn: [
        'A sturdy steel tank for storing large volumes of water, with a cylindrical body braced by external stiffening rings and strong mounting saddles for stability.',
        'It has a top hatch for inspection and filling and bottom outlets for supply and drainage, with a weather-resistant exterior finish. A practical industrial design built in different capacities and sizes to suit each project.',
      ],
      features: ['حلقات تقوية خارجية', 'قواعد تثبيت قوية', 'فتحة علوية للفحص والتعبئة', 'مخارج سفلية للتغذية والتفريغ', 'تشطيب مقاوم للعوامل الجوية'],
      featuresEn: ['External stiffening rings', 'Strong mounting saddles', 'Top inspection & filling hatch', 'Bottom supply & drain outlets', 'Weather-resistant finish'],
      specs: [
        { k: 'الشكل', kEn: 'Shape', v: 'أسطواني أفقي', vEn: 'Horizontal cylinder' },
        { k: 'الاستخدام', kEn: 'Use', v: 'تخزين المياه', vEn: 'Water storage' },
        { k: 'السعة', kEn: 'Capacity', v: 'حسب الطلب', vEn: 'To order' },
      ],
      renders: 4, photos: 5,
    },
    {
      id: 'square-tanks', category: 'tanks',
      title: 'خزانات مربّعة', titleEn: 'Square tanks',
      tagline: 'خزانات مجلفنة مربّعة للمياه والمازوت على المقاس',
      taglineEn: 'Galvanised square tanks for water and diesel, made to measure',
      body: [
        'نصنّع الخزانات المربّعة من الصاج المجلفن بالسعة المطلوبة، وهي الخيار العملي للسطوح والزوايا والمساحات الضيقة لأنها تستغل المكان بالكامل. جوانب الخزان مكسّرة بشكل X لزيادة الصلابة.',
        'مزوّدة بفتحة علوية بغطاء مفصلي، مخارج للتوصيل، مقابض جانبية، وأرجل ترفع الخزان عن الأرض. يُفحص اللحام ضد التسريب قبل التسليم.',
      ],
      bodyEn: [
        'We make square tanks from galvanised sheet in the required capacity — the practical choice for rooftops, corners and tight spaces because they use the full area. The sides are cross-broken in an X pattern for added stiffness.',
        'They have a top hatch with a hinged lid, connection outlets, side handles and legs that raise the tank off the ground. Welds are leak-tested before delivery.',
      ],
      features: ['صاج مجلفن ضد الصدأ', 'تكسير X لزيادة الصلابة', 'فتحة علوية بغطاء مفصلي', 'مخارج ومقابض جانبية', 'أرجل ترفع الخزان عن الأرض', 'فحص ضد التسريب'],
      featuresEn: ['Rust-proof galvanised sheet', 'X-break panels for stiffness', 'Top hatch with hinged lid', 'Outlets and side handles', 'Legs raise it off the ground', 'Leak-tested'],
      specs: [
        { k: 'الشكل', kEn: 'Shape', v: 'مربّع / مستطيل', vEn: 'Square / rectangular' },
        { k: 'المادة', kEn: 'Material', v: 'صاج مجلفن', vEn: 'Galvanised sheet' },
        { k: 'الاستخدام', kEn: 'Use', v: 'مياه / مازوت', vEn: 'Water / diesel' },
      ],
      renders: 3, photos: 9,
    },
    {
      id: 'silo-tanks', category: 'tanks',
      title: 'خزانات سيلو', titleEn: 'Silo tanks',
      tagline: 'خزانات سيلو بقاع قمعي على قواعد معدنية',
      taglineEn: 'Hopper-bottom silo tanks on steel stands',
      body: [
        'خزانات سيلو معدنية بقاع قمعي يسهّل التفريغ من الأسفل، تُركَّب على قواعد وأرجل فولاذية مرتفعة مع سلّم جانبي للوصول إلى فتحة التعبئة العلوية.',
        'تُصنَّع من الصاج المجلفن أو الصاج الأسود المدهون، بسعات وأبعاد حسب الطلب، وتناسب تخزين المواد والسوائل في المعامل والمنشآت.',
      ],
      bodyEn: [
        'Steel silo tanks with a hopper bottom for easy discharge from below, mounted on raised steel stands with a side ladder to the top filling hatch.',
        'They are made from galvanised sheet or painted black sheet, in capacities and sizes to order, and suit storing materials and liquids in factories and facilities.',
      ],
      features: ['قاع قمعي للتفريغ السفلي', 'قواعد وأرجل فولاذية مرتفعة', 'سلّم جانبي للوصول', 'صاج مجلفن أو مدهون', 'سعات حسب الطلب'],
      featuresEn: ['Hopper bottom for discharge', 'Raised steel stands', 'Side access ladder', 'Galvanised or painted sheet', 'Capacity to order'],
      specs: [
        { k: 'الشكل', kEn: 'Shape', v: 'سيلو بقاع قمعي', vEn: 'Hopper-bottom silo' },
        { k: 'المادة', kEn: 'Material', v: 'صاج مجلفن / مدهون', vEn: 'Galvanised / painted sheet' },
        { k: 'السعة', kEn: 'Capacity', v: 'حسب الطلب', vEn: 'To order' },
      ],
      renders: 3, photos: 12,
    },

    // ── Waste containers ─────────────────────────────────
    {
      id: 'outdoor-waste-bin', category: 'waste',
      title: 'حاوية نفايات خارجية معدنية', titleEn: 'Outdoor steel litter bin',
      tagline: 'تصميم عملي وأنيق للحدائق والشوارع والساحات',
      taglineEn: 'A practical, elegant design for parks, streets and squares',
      body: [
        'حل يجمع بين المتانة وسهولة الاستخدام والمظهر الجمالي، مصمّم ليناسب الحدائق والشوارع والممرات والساحات العامة.',
        'مصنوعة بهيكل معدني متين، ومزوّدة بسلّة مثبّتة على مفاصل دورانية تسمح بإمالتها بسهولة لتسريع التفريغ والتنظيف، مع مظلّة علوية تحمي محتويات السلّة، وقاعدة بتفاصيل معدنية زخرفية تمنحها مظهراً مميّزاً.',
      ],
      bodyEn: [
        'A bin that combines durability, ease of use and good looks, designed for parks, streets, walkways and public squares.',
        'It has a sturdy steel frame and a basket mounted on pivots that tilts easily for fast emptying and cleaning, a top canopy that shelters the contents, and a base with decorative metal detailing.',
      ],
      features: ['هيكل معدني قوي', 'مفاصل دورانية لسهولة التفريغ', 'تصميم مفتوح وسهل الاستخدام', 'مظلّة علوية', 'قاعدة ثابتة بزخرفة معدنية', 'طلاء وتخصيص حسب الطلب'],
      featuresEn: ['Strong steel frame', 'Pivoting basket for easy emptying', 'Open, easy-to-use design', 'Top canopy', 'Fixed base with metal ornament', 'Paint and customisation to order'],
      specs: [
        { k: 'المادة', kEn: 'Material', v: 'معدن', vEn: 'Steel' },
        { k: 'التفريغ', kEn: 'Emptying', v: 'سلّة قلّابة', vEn: 'Tilting basket' },
        { k: 'الاستخدام', kEn: 'Use', v: 'حدائق وشوارع وساحات', vEn: 'Parks, streets & squares' },
      ],
      renders: 3, photos: 5,
    },
    {
      id: 'round-waste-bin', category: 'waste',
      title: 'حاوية نفايات معدنية دائرية', titleEn: 'Round steel waste bin',
      tagline: 'حاوية بسعة 120 ليتر بعدّة ألوان لفرز النفايات',
      taglineEn: 'A 120-litre bin in several colours for waste sorting',
      body: [
        'حاوية معدنية متينة بسعة 120 ليتر، مصمّمة لجمع النفايات والاستخدام اليومي في الأماكن العامة والمنشآت والمصانع.',
        'تتميّز بهيكل معدني مدعّم، وغطاء علوي قابل للفتح مع مقبض، وقواعد ثابتة ترفع الحاوية عن الأرض. متوفرة بعدّة ألوان حسب الطلب: الأخضر، الأزرق، الأبيض، الأصفر والرمادي، ما يجعلها مناسبة لتخصيص ألوان فرز النفايات.',
      ],
      bodyEn: [
        'A sturdy 120-litre steel bin for collecting waste in everyday use in public spaces, facilities and factories.',
        'It has a reinforced steel body, a lidded top with a handle, and fixed legs that keep it off the ground. Available in green, blue, white, yellow and grey on request, so colours can be matched to waste-sorting streams.',
      ],
      features: ['سعة 120 ليتر', 'هيكل معدني مدعّم', 'غطاء علوي مع مقبض', 'قواعد ترفعها عن الأرض', 'ألوان متعدّدة لفرز النفايات'],
      featuresEn: ['120-litre capacity', 'Reinforced steel body', 'Top lid with handle', 'Legs keep it off the ground', 'Colours for waste sorting'],
      specs: [
        { k: 'السعة', kEn: 'Capacity', v: '120 ليتر', vEn: '120 L' },
        { k: 'الألوان', kEn: 'Colours', v: 'أخضر، أزرق، أبيض، أصفر، رمادي', vEn: 'Green, blue, white, yellow, grey' },
        { k: 'الغطاء', kEn: 'Lid', v: 'علوي مع مقبض', vEn: 'Top lid with handle' },
      ],
      renders: 5, photos: 6,
    },
    {
      id: 'ribbed-waste-bin', category: 'waste',
      title: 'حاوية نفايات معدنية مضلّعة', titleEn: 'Ribbed steel waste bin',
      tagline: 'حاوية بسعة 200 ليتر بتضليعات تزيد صلابتها',
      taglineEn: 'A 200-litre bin with ribbed sides for added strength',
      body: [
        'حاوية نفايات معدنية بسعة 200 ليتر، مصمّمة بهيكل متين وتضليعات جانبية تعزّز من قوة وصلابة الحاوية. مزوّدة بغطاء علوي مفصلي مع مقبض لسهولة الفتح والإغلاق، وقاعدة مرتفعة عن الأرض.',
        'مناسبة للأماكن العامة والمنشآت والمصانع والحدائق والمرافق الخدمية، مع إمكانية الطلاء وإضافة الشعارات والعبارات حسب الطلب.',
      ],
      bodyEn: [
        'A 200-litre steel waste bin with a sturdy body and ribbed sides that add strength and stiffness. It has a hinged top lid with a handle for easy opening and closing, and a raised base.',
        'Suited to public spaces, facilities, factories, parks and service areas, with custom paint, logos and slogans on request.',
      ],
      features: ['سعة 200 ليتر', 'تضليعات جانبية للصلابة', 'غطاء مفصلي مع مقبض', 'قاعدة مرتفعة عن الأرض', 'طلاء وشعارات حسب الطلب'],
      featuresEn: ['200-litre capacity', 'Ribbed sides for stiffness', 'Hinged lid with handle', 'Raised base', 'Custom paint and logos'],
      specs: [
        { k: 'السعة', kEn: 'Capacity', v: '200 ليتر', vEn: '200 L' },
        { k: 'الخامة', kEn: 'Material', v: 'معدن', vEn: 'Steel' },
        { k: 'الغطاء', kEn: 'Lid', v: 'مفصلي مع مقبض', vEn: 'Hinged with handle' },
        { k: 'الاستخدام', kEn: 'Use', v: 'داخلي وخارجي', vEn: 'Indoor & outdoor' },
      ],
      renders: 3, photos: 7,
    },
    {
      id: 'large-waste-container', category: 'waste',
      title: 'حاوية نفايات معدنية كبيرة', titleEn: 'Large steel waste container',
      tagline: 'متانة وسعة للاستخدام المكثّف',
      taglineEn: 'Strength and capacity for heavy-duty use',
      body: [
        'مصمّمة لتلبية احتياجات النظافة في الشوارع والمنشآت والمصانع والمجمّعات السكنية والأماكن العامة، بهيكل معدني متين وسعة كبيرة تستوعب كميات كبيرة من النفايات.',
        'تصميم عملي يدعم سهولة الاستخدام والنقل والتفريغ، مع هيكل مدعّم لتحمّل الاستخدام الخارجي المستمر، وإمكانية تجهيزها بعجلات لتسهيل الحركة.',
      ],
      bodyEn: [
        'Built for cleaning needs in streets, facilities, factories, residential compounds and public spaces, with a sturdy steel body and a large capacity for high volumes of waste.',
        'A practical design that makes use, transport and emptying easy, with a reinforced body for constant outdoor use and optional wheels for moving it around.',
      ],
      features: ['سعة تخزين كبيرة', 'هيكل معدني قوي ومدعّم', 'سهلة النقل والتفريغ', 'عجلات عند الطلب', 'مناسبة للاستخدام الخارجي المكثّف', 'طلاء باللون المطلوب'],
      featuresEn: ['Large capacity', 'Strong reinforced steel body', 'Easy to move and empty', 'Optional wheels', 'Built for heavy outdoor use', 'Painted in the chosen colour'],
      specs: [
        { k: 'المادة', kEn: 'Material', v: 'صاج حديد', vEn: 'Steel sheet' },
        { k: 'السعة', kEn: 'Capacity', v: 'كبيرة / حسب الطلب', vEn: 'Large / to order' },
        { k: 'الحركة', kEn: 'Mobility', v: 'عجلات اختيارية', vEn: 'Optional wheels' },
      ],
      renders: 3, photos: 8,
    },

    // ── Lighting poles ───────────────────────────────────
    {
      id: 'solar-light-pole', category: 'lighting',
      title: 'عمود إنارة بالطاقة الشمسية', titleEn: 'Solar street-light pole',
      tagline: 'إنارة مستقلة عن الشبكة بلوح شمسي وبطارية ليثيوم',
      taglineEn: 'Off-grid lighting with a solar panel and lithium battery',
      body: [
        'عمود إنارة معدني مصمّم للاستخدام الخارجي، مصنّع بهيكل فولاذي متين ومجهّز لتحمّل ظروف التشغيل والعوامل الجوية، مع قاعدة تثبيت مدعّمة لضمان الثبات وسهولة التركيب.',
        'يأتي مزوّداً بوحدة إنارة LED عالية الكفاءة ولوح طاقة شمسية في الجزء العلوي يحوّل الطاقة الشمسية إلى كهرباء خلال النهار ويخزّنها في بطارية ليثيوم لتشغيل الإنارة ليلاً. حساس ضوئي (Photocell) يشغّل الإنارة عند انخفاض الضوء ويطفئها مع ضوء النهار تلقائياً.',
      ],
      bodyEn: [
        'A steel lighting pole for outdoor use, built on a sturdy frame to withstand operation and weather, with a reinforced mounting base for stability and easy installation.',
        'It carries a high-efficiency LED luminaire and a top-mounted solar panel that charges a lithium battery by day to run the light at night. A photocell switches the light on at dusk and off at daylight automatically.',
      ],
      features: ['هيكل فولاذي للاستخدام الخارجي', 'قاعدة تثبيت مدعّمة', 'إنارة LED موفّرة للطاقة', 'لوح شمسي علوي', 'بطارية ليثيوم', 'حساس ضوئي للتشغيل التلقائي', 'دون تمديدات كهربائية خارجية'],
      featuresEn: ['Steel frame for outdoor use', 'Reinforced mounting base', 'Energy-saving LED', 'Top solar panel', 'Lithium battery', 'Automatic photocell switching', 'No external wiring needed'],
      specs: [
        { k: 'الإنارة', kEn: 'Light', v: 'LED', vEn: 'LED' },
        { k: 'الطاقة', kEn: 'Power', v: 'لوح شمسي + بطارية ليثيوم', vEn: 'Solar panel + lithium battery' },
        { k: 'التحكم', kEn: 'Control', v: 'حساس ضوئي', vEn: 'Photocell' },
      ],
      renders: 3, photos: 4,
    },
    {
      id: 'solar-pole-separate-panel', category: 'lighting',
      title: 'عمود إنارة شمسي بلوح منفصل', titleEn: 'Solar pole with separate panel',
      tagline: 'لوح شمسي قابل للتوجيه مع صندوق تحكّم وحماية مستقل',
      taglineEn: 'An adjustable solar panel with a separate control and protection box',
      body: [
        'عمود معدني مخصّص لأنظمة الإنارة المستقلة بالطاقة الشمسية، يوفّر حلاً عملياً للمواقع التي تحتاج إنارة دون الاعتماد على شبكة الكهرباء.',
        'يتميّز بلوح طاقة شمسية مستقل مثبّت أعلى العمود بزاوية مدروسة، يشحن بطارية ليثيوم لتشغيل الإنارة ليلاً. يحتوي على وحدة تحكّم وصندوق حماية مستقل للمكوّنات والبطارية، وحساس ضوئي للتشغيل التلقائي. العمود من الفولاذ مع إمكانية الطلاء حسب المشروع، على قاعدة تثبيت مدعّمة.',
      ],
      bodyEn: [
        'A steel pole for stand-alone solar lighting — a practical solution for sites that need light without relying on the grid.',
        'A separate solar panel is mounted at the top at a calculated angle and charges a lithium battery to run the light at night. A separate control unit and protection box house the electronics and battery, and a photocell handles automatic switching. The steel pole can be coated to project requirements and stands on a reinforced base.',
      ],
      features: ['لوح شمسي منفصل قابل للتوجيه', 'بطارية ليثيوم', 'تشغيل تلقائي بحساس ضوئي', 'وحدة تحكّم وصندوق حماية مستقل', 'دون الحاجة لشبكة الكهرباء', 'أبعاد وتجهيزات حسب المشروع'],
      featuresEn: ['Separate adjustable solar panel', 'Lithium battery', 'Automatic photocell switching', 'Separate control & protection box', 'No grid connection needed', 'Size and fit-out per project'],
      specs: [
        { k: 'اللوح', kEn: 'Panel', v: 'منفصل قابل للتوجيه', vEn: 'Separate, adjustable' },
        { k: 'الطاقة', kEn: 'Power', v: 'بطارية ليثيوم', vEn: 'Lithium battery' },
        { k: 'التحكم', kEn: 'Control', v: 'حساس ضوئي', vEn: 'Photocell' },
      ],
      renders: 3, photos: 1,
    },
    {
      id: 'street-light-side-arm', category: 'lighting',
      title: 'عمود إنارة طرق بذراع جانبي', titleEn: 'Street-light pole with side arm',
      tagline: 'إنارة للطرق والشوارع والممرات بذراع يوجّه الضوء',
      taglineEn: 'Lighting for roads, streets and walkways with an arm that directs the light',
      body: [
        'حل هندسي عملي لإنارة الطرق والشوارع والممرات الضيقة، بتصميم معدني متين وذراع علوي ممتد يوجّه وحدة الإنارة نحو مسار الطريق لانتشار أفضل للضوء.',
        'يُصنَّع العمود من الفولاذ بتشطيب معدني أو مطلي حسب المشروع، على قاعدة تثبيت فولاذية مدعّمة، ويُزوَّد بكشاف LED عالي الكفاءة. التصميم المعياري يسمح بتصنيعه بارتفاعات وأبعاد مختلفة، ويناسب الشوارع الداخلية والمجمّعات السكنية والمنشآت الصناعية.',
      ],
      bodyEn: [
        'A practical engineered solution for lighting roads, streets and narrow walkways, with a sturdy steel design and an extended top arm that points the luminaire over the road for better light spread.',
        'The pole is steel, supplied bare or coated to project needs, on a reinforced steel base, and fitted with a high-efficiency LED floodlight. Its modular design allows different heights and sizes, and it suits internal streets, residential compounds and industrial sites.',
      ],
      features: ['هيكل فولاذي متين', 'ذراع جانبي لتوجيه الإضاءة', 'كشاف LED موفّر للطاقة', 'قاعدة تثبيت مدعّمة', 'طلاء وتشطيب حسب المشروع', 'ارتفاعات ومقاسات حسب الطلب'],
      featuresEn: ['Sturdy steel frame', 'Side arm to direct the light', 'Energy-saving LED floodlight', 'Reinforced base', 'Coating per project', 'Heights and sizes to order'],
      specs: [
        { k: 'الإنارة', kEn: 'Light', v: 'كشاف LED', vEn: 'LED floodlight' },
        { k: 'المادة', kEn: 'Material', v: 'فولاذ', vEn: 'Steel' },
        { k: 'الارتفاع', kEn: 'Height', v: 'حسب الطلب', vEn: 'To order' },
      ],
      renders: 3, photos: 4,
    },

    // ── Boilers ──────────────────────────────────────────
    {
      id: 'boilers', category: 'boilers',
      title: 'قازانات تسخين المياه', titleEn: 'Water-heating boilers',
      tagline: 'قازانات أسطوانية مجلفنة لتسخين المياه',
      taglineEn: 'Galvanised cylindrical boilers for heating water',
      body: [
        'نصنّع القازانات الأسطوانية لتسخين المياه من الصاج المجلفن المقاوم للصدأ، بلحام محكم يتحمّل الحرارة والضغط، مع فتحات علوية وجانبية للتوصيل حسب نظام التدفئة أو التسخين.',
        'تتوفر بأحجام وارتفاعات مختلفة، ونصنّعها بالمفرّق أو بكميات للمحلات والموزّعين.',
      ],
      bodyEn: [
        'We make cylindrical water-heating boilers from rust-resistant galvanised sheet, with tight welds that withstand heat and pressure, and top and side connection ports to suit the heating system.',
        'They come in different sizes and heights, sold individually or in quantity to shops and distributors.',
      ],
      features: ['صاج مجلفن مقاوم للصدأ', 'لحام يتحمّل الحرارة والضغط', 'فتحات توصيل علوية وجانبية', 'أحجام وارتفاعات مختلفة', 'بيع بالمفرّق أو بالجملة'],
      featuresEn: ['Rust-resistant galvanised sheet', 'Heat- and pressure-proof welds', 'Top and side connection ports', 'Various sizes and heights', 'Retail or wholesale'],
      specs: [
        { k: 'الشكل', kEn: 'Shape', v: 'أسطواني', vEn: 'Cylindrical' },
        { k: 'المادة', kEn: 'Material', v: 'صاج مجلفن', vEn: 'Galvanised sheet' },
        { k: 'الحجم', kEn: 'Size', v: 'حسب الطلب', vEn: 'To order' },
      ],
      renders: 3, photos: 2,
    },
  ].map((p) => ({
    ...p,
    renders: productImgs(p.id, 'product', p.renders ?? 0),
    photos:  productImgs(p.id, 'real', p.photos ?? 0),
    models:  Array.from({ length: p.models ?? 0 }, (_, i) => ({
      render: `/images/products/${p.id}/model-${i + 1}.webp`,
      photo:  `/images/products/${p.id}/model-${i + 1}-real.webp`,
    })),
  })),
  // Projects live in lib/projects.ts
  industries: [
    {
      id: 'humanitarian',
      name: 'منظّمات إنسانية',    nameEn: 'Humanitarian Organizations',
      icon: 'heart-handshake',
      body: 'نعمل مع المنظّمات الإنسانية لتوريد وتركيب قواعد الطاقة الشمسية، والكرفانات مسبقة الصنع، وأعمال الشبك والأسوار اللازمة في المشاريع الإغاثية والتنموية في محيط حلب وريفها.',
      bodyEn: 'We work with humanitarian organizations to supply and install solar mounting bases, prefabricated caravans, and steel fencing for relief and development projects across Aleppo and its surroundings.',
    },
    {
      id: 'charities',
      name: 'جمعيات خيرية',       nameEn: 'Charitable Associations',
      icon: 'hand-helping',
      body: 'نقدّم حلولاً إنشائية معدنية للجمعيات الخيرية تشمل الأسوار المعدنية، وهياكل المستودعات، وأعمال الحديد المنجور لمشاريعهم الخيرية والتطوّعية.',
      bodyEn: 'We provide metal construction solutions for charities including steel fencing, warehouse structures, and ironwork for community and voluntary projects.',
    },
    {
      id: 'private-sector',
      name: 'القطاع الخاص',       nameEn: 'Private Sector',
      icon: 'building-2',
      body: 'من المصانع والمستودعات إلى المجمّعات التجارية — نصمّم وننفّذ الهنكارات الصناعية، والكرفانات، وأعمال الصاج والحديد المنجور وفق متطلّبات كل عميل.',
      bodyEn: 'From factories and warehouses to commercial complexes — we design and execute industrial hangars, caravans, sheet metal work, and ironwork to each client\'s requirements.',
    },
    {
      id: 'government',
      name: 'القطاع الحكومي',     nameEn: 'Government Sector',
      icon: 'landmark',
      body: 'نتعامل مع الجهات الحكومية لتوريد وتركيب الهياكل المعدنية، والصهاريج، والأسوار في المنشآت العامة والمشافي والمجمّعات الرسمية.',
      bodyEn: 'We work with government bodies to supply and install steel structures, reservoirs, and fencing for public facilities, hospitals, and official complexes.',
    },
    {
      id: 'factories',
      name: 'مصانع',              nameEn: 'Factories & Industry',
      icon: 'factory',
      body: 'نبني الهنكارات الصناعية بمواصفات عالية تشمل الدراسة الهندسية وتحليل الأحمال، بتقنية الفك والتركيب أو اللحام، مع إمكانية تركيب الصاج الأمريكي.',
      bodyEn: 'We build industrial hangars to high specs — engineering study and load analysis included — bolt-up or welded construction, with American-profile sheet metal option.',
    },
    {
      id: 'fuel-stations',
      name: 'محطّات الوقود',      nameEn: 'Fuel Stations',
      icon: 'fuel',
      body: 'نصنّع ونركّب صهاريج الوقود لجميع السعات، مع ضمان معايير السلامة في اللحام وسلامة الهيكل. نقدّم أيضاً الصهاريج الصحية وخزانات المياه للمنشآت الصحية.',
      bodyEn: 'We manufacture and install fuel tanks of all capacities, ensuring welding safety standards and structural integrity. We also supply sanitary tanks and water reservoirs.',
    },
  ],
  testimonials: [
    {
      quote: "تعاملنا مع شركة حمشو لتنفيذ قواعد طاقة شمسية لمشروع إنساني في ريف حلب، فالتزموا بالجدول الزمني وقدّموا دراسة هندسية دقيقة لحموالت الرياح.",
      quoteEn: "We worked with Hamsho on solar mounting bases for a humanitarian project in rural Aleppo. They kept to the schedule and delivered a precise wind-load engineering study.",
      author: "م. محمد الحلبي", authorEn: "Eng. Mohammad Al-Halabi",
      role: "مدير مشاريع — منظّمة إنسانية", roleEn: "Project manager — Humanitarian org.",
      city: "حلب", cityEn: "Aleppo",
      service: "قواعد الطاقة الشمسية", serviceEn: "Solar mounting bases",
    },
    {
      quote: "نفّذت حمشو هنكارًا صناعيًا بتقنية الفك والتركيب لمصنعنا، الجودة عالية واللحامات نظيفة، والفريق متعاون في كل تفصيل.",
      quoteEn: "Hamsho built a bolt-up industrial hangar for our factory. High quality, clean welds, and a team that cooperated on every detail.",
      author: "أ. هيثم الناصر", authorEn: "Mr. Haitham Al-Nasser",
      role: "مالك — مصنع تعبئة وتغليف", roleEn: "Owner — Packaging factory",
      city: "ريف حلب", cityEn: "Rural Aleppo",
      service: "هنكارات صناعية", serviceEn: "Industrial hangars",
    },
    {
      quote: "اخترنا حمشو لتوريد كرفانات سكنية بجدران ساندويش لعمالنا في الموقع. العزل ممتاز والتجهيزات الداخلية بمستوى عالٍ.",
      quoteEn: "We chose Hamsho to supply sandwich-panel residential caravans for our site workers. Excellent insulation and a high-grade interior fit-out.",
      author: "م. ليلى عبد الرحمن", authorEn: "Eng. Layla Abdulrahman",
      role: "مديرة موقع — قطاع المقاوالت", roleEn: "Site manager — Contracting sector",
      city: "حماة", cityEn: "Hama",
      service: "كرفانات مسبقة الصنع", serviceEn: "Prefabricated caravans",
    },
    {
      quote: "صهاريج الوقود التي صنّعتها لنا حمشو تعمل بكفاءة منذ أكثر من سنتين بدون أي خلل. تعامل احترافي مع الوثائق الفنية.",
      quoteEn: "The fuel tanks Hamsho fabricated for us have run efficiently for over two years without a single fault. Professional handling of the technical documentation.",
      author: "أ. عبد الكريم اليوسف", authorEn: "Mr. Abdulkarim Al-Yousef",
      role: "مدير محطّة وقود", roleEn: "Fuel station manager",
      city: "حلب", cityEn: "Aleppo",
      service: "الصهاريج والخزانات", serviceEn: "Tanks & reservoirs",
    },
    {
      quote: "فريق حمشو الفنّي قدّم لنا تصميمًا متكاملاً للسور المعدني وشبك التجمّع السكني، وأنجزوا الأعمال قبل المدّة المتّفق عليها.",
      quoteEn: "Hamsho's technical team delivered a complete design for our estate's steel fence and mesh, and finished the work ahead of the agreed deadline.",
      author: "م. فادي السيد", authorEn: "Eng. Fadi Al-Sayed",
      role: "مهندس إشراف — مجمّع سكني", roleEn: "Supervising engineer — Residential estate",
      city: "إدلب", cityEn: "Idlib",
      service: "شبك وأسوار معدنية", serviceEn: "Steel fencing & mesh",
    },
    {
      quote: "أعمال الحديد المنجور التي نفّذتها لنا حمشو لمشفى ميداني كانت دقيقة المقاسات، والتسليم تمّ في الوقت المحدّد رغم ظروف الموقع.",
      quoteEn: "The wrought ironwork Hamsho executed for a field hospital was precisely dimensioned and delivered on time despite the site conditions.",
      author: "د. سامي الشيخ", authorEn: "Dr. Sami Al-Sheikh",
      role: "مدير لوجستيات — جمعية خيرية", roleEn: "Logistics manager — Charitable org.",
      city: "حلب", cityEn: "Aleppo",
      service: "الحديد المنجور", serviceEn: "Wrought ironwork",
    },
  ],
  testimonialsHead: {
    eyebrow:  "TESTIMONIALS — آراء العملاء",
    title:    "ماذا يقول شركاؤنا",
    subtitle: "من المنظّمات الإنسانية إلى المصانع ومحطّات الوقود — يثق بنا أكثر من قطاع منذ 2005.",
  },
  contact: {
    phoneSales: "+963 968 535 054",
    phoneMgmt:  "+963 959 998 222",
    email:      "infohamshoco@gmail.com",
    address:    "سوريا — حلب، التوامة، طريق التوامة الزراعي",
    addressEn:  "Syria — Aleppo, Tawameh agricultural road",
    hours:      "السبت – الخميس، من 8 صباحًا حتى 5 مساءً",
    hoursEn:    "Saturday – Thursday, 8 AM to 5 PM",
    waSales:    "https://wa.me/963968535054",
  },
  en: {
    hero: { eyebrow: "Since 2005 · Aleppo — Tawameh", title: "Metal structures, engineered from study to handover.", subtitle: "In-house engineering office, full fabrication workshops, and specialist installation teams — 20+ years of metal construction in Aleppo, Syria.", primaryCta: "Request a quote", secondaryCta: "See our services" },
    sectionTitles: { about: "About us", services: "What we build", projects: "Work we're proud of", testimonials: "What our partners say", contact: "Ready to answer your questions", industries: "Industries we serve" },
    sectionSubs: { services: "Seven specialties — from engineering studies through hand-off of finished structures.", testimonials: "From humanitarian organizations to factories and fuel stations — trusted across sectors since 2005.", contact: "For any inquiry or quote, reach our team directly through the channels below.", industries: "Over twenty years serving clients across Aleppo's industrial, humanitarian, and government sectors." },
    buttons: { quote: "Request a quote", details: "Details", send: "Send", close: "Close", cancel: "Cancel" },
    contactLabels: { sales: "Sales department", mgmt: "Management", email: "Email", wa: "WhatsApp sales", instant: "Instant chat" },
    stats: [
      { value: "+20",  unit: "yrs", label: "in the industrial market",          cat: "EXPERIENCE" },
      { value: "B2B",  unit: "",    label: "businesses & organisations",         cat: "MARKET" },
      { value: "2",    unit: "",    label: "operating branches",                 cat: "BRANCHES" },
      { value: "100%", unit: "",    label: "engineering study before execution", cat: "ENGINEERING" },
    ],
    footer: { about: "Specialists in studying, designing and executing steel structures — committed to quality and safety on every project.", company: "Company", services: "Services", contact: "Contact", rights: "All rights reserved.", privacy: "Privacy · Terms" },
  },
};

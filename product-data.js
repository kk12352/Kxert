const products = [
  {
    id: 1,
    image: "assets/product1-nestride-stroller.png",
    page: "product1.html",
    category: { zh: "出行", en: "On The Go" },
    name: { zh: "Kxert NestRide Stroller", en: "Kxert NestRide Stroller" },
    price: "$329.00",
    short: {
      zh: "轻便婴儿推车，适合日常散步、短途出行和家庭收纳。",
      en: "A lightweight stroller for daily walks, quick trips, and easy home storage."
    },
    desc: {
      zh: "NestRide Stroller 用柔和篷布、轻量车架和顺手收纳篮，让照护者在家门口、商场和公园之间移动得更从容。",
      en: "NestRide Stroller pairs a soft canopy, lightweight frame, and easy-reach basket for smoother everyday movement between home, shops, and parks."
    },
    specs: [
      { zh: "轻量折叠车架", en: "Lightweight folding frame" },
      { zh: "可调节遮阳篷", en: "Adjustable canopy" },
      { zh: "底部随身收纳篮", en: "Under-seat storage basket" },
      { zh: "Kxert 篷布品牌标识", en: "Kxert canopy brand mark" }
    ]
  },
  {
    id: 2,
    image: "assets/product2-dreamnest-crib.png",
    page: "product2.html",
    category: { zh: "睡眠", en: "Sleep" },
    name: { zh: "Kxert DreamNest Crib", en: "Kxert DreamNest Crib" },
    price: "$249.00",
    short: {
      zh: "床边婴儿床，网面侧围和圆角木质框架适合温柔育儿空间。",
      en: "A bedside crib with mesh sides and rounded wood details for calm nursery spaces."
    },
    desc: {
      zh: "DreamNest Crib 以床边放置、网面观察和下方收纳为核心，帮助夜间照护用品更集中，也让房间保持轻盈。",
      en: "DreamNest Crib focuses on bedside placement, mesh visibility, and lower storage so night-care items stay close without adding visual clutter."
    },
    specs: [
      { zh: "透气网面侧围", en: "Breathable mesh sides" },
      { zh: "圆角浅木框架", en: "Rounded light-wood frame" },
      { zh: "下方开放收纳层", en: "Open lower storage shelf" },
      { zh: "织物边缘 Kxert 标识", en: "Kxert mark on fabric rail" }
    ]
  },
  {
    id: 3,
    image: "assets/product3-carrycloud-carrier.png",
    page: "product3.html",
    category: { zh: "贴身照护", en: "Carrying" },
    name: { zh: "Kxert CarryCloud Carrier", en: "Kxert CarryCloud Carrier" },
    price: "$119.00",
    short: {
      zh: "柔软结构式婴儿背带，适合短途外出和家庭内移动。",
      en: "A soft structured carrier for short trips and around-home movement."
    },
    desc: {
      zh: "CarryCloud Carrier 采用柔软前片、加宽肩带和清晰扣具布局，减少找扣、调节和临时出门时的忙乱。",
      en: "CarryCloud Carrier uses a soft front panel, padded shoulder straps, and clear buckle layout to make quick outings easier to prepare."
    },
    specs: [
      { zh: "加宽肩带与腰托", en: "Padded shoulder and waist support" },
      { zh: "透气前片结构", en: "Breathable front panel" },
      { zh: "直观扣具布局", en: "Intuitive buckle layout" },
      { zh: "前片织唛 Kxert 标识", en: "Woven Kxert front label" }
    ]
  },
  {
    id: 4,
    image: "assets/product4-tinytable-high-chair.png",
    page: "product4.html",
    category: { zh: "喂养", en: "Feeding" },
    name: { zh: "Kxert TinyTable High Chair", en: "Kxert TinyTable High Chair" },
    price: "$189.00",
    short: {
      zh: "高脚餐椅，圆角托盘和软垫坐垫让喂养场景更整洁。",
      en: "A high chair with rounded tray and soft seat insert for tidier feeding moments."
    },
    desc: {
      zh: "TinyTable High Chair 使用浅木椅脚、可擦托盘和柔和坐垫，适合家庭餐桌旁的日常喂养与陪伴。",
      en: "TinyTable High Chair combines light-wood legs, an easy-wipe tray, and a soft seat insert for everyday feeding beside the family table."
    },
    specs: [
      { zh: "圆角可擦托盘", en: "Rounded easy-wipe tray" },
      { zh: "柔软可拆坐垫", en: "Removable soft seat insert" },
      { zh: "浅木质感椅脚", en: "Light-wood leg finish" },
      { zh: "托盘前缘 Kxert 标识", en: "Kxert mark on tray front" }
    ]
  },
  {
    id: 5,
    image: "assets/product5-daynest-diaper-bag.png",
    page: "product5.html",
    category: { zh: "收纳", en: "Storage" },
    name: { zh: "Kxert DayNest Diaper Bag", en: "Kxert DayNest Diaper Bag" },
    price: "$89.00",
    short: {
      zh: "结构式妈咪包，分区收纳奶瓶、湿巾、衣物和随身小物。",
      en: "A structured diaper bag for bottles, wipes, clothes, and everyday carry items."
    },
    desc: {
      zh: "DayNest Diaper Bag 用挺括包型、侧袋和可折叠换垫，让外出时的物品分类更清楚，拿取也更快。",
      en: "DayNest Diaper Bag uses a structured body, side pockets, and foldable changing mat pouch so everyday items stay visible and reachable."
    },
    specs: [
      { zh: "多分区主仓", en: "Multi-zone main compartment" },
      { zh: "保温奶瓶侧袋", en: "Insulated side bottle pocket" },
      { zh: "随附折叠换垫收纳位", en: "Foldable changing mat pocket" },
      { zh: "前袋 Kxert 刺绣标识", en: "Kxert embroidered front pocket" }
    ]
  },
  {
    id: 6,
    image: "assets/product6-warmflow-care-station.png",
    page: "product6.html",
    category: { zh: "护理", en: "Care" },
    name: { zh: "Kxert WarmFlow Care Station", en: "Kxert WarmFlow Care Station" },
    price: "$139.00",
    short: {
      zh: "温奶与护理小物整理台，让夜间准备更集中。",
      en: "A bottle-warming and care station that keeps night-prep essentials together."
    },
    desc: {
      zh: "WarmFlow Care Station 将温奶区、小物托盘和柔和状态灯整合在紧凑机身里，适合放在育儿台、餐边柜或厨房角落。",
      en: "WarmFlow Care Station brings a warming chamber, small-item tray, and gentle status light into a compact counter-friendly body."
    },
    specs: [
      { zh: "圆角温奶腔体", en: "Rounded warming chamber" },
      { zh: "小物收纳托盘", en: "Small-item storage tray" },
      { zh: "柔和状态指示灯", en: "Gentle status indicator" },
      { zh: "机身前置 Kxert 标识", en: "Front Kxert body mark" }
    ]
  },
  {
    id: 7,
    image: "assets/product7-softmeadow-play-mat.png",
    page: "product7.html",
    category: { zh: "玩耍", en: "Play" },
    name: { zh: "Kxert SoftMeadow Play Mat", en: "Kxert SoftMeadow Play Mat" },
    price: "$99.00",
    short: {
      zh: "柔软爬行游戏垫，带活动拱架和温和挂件。",
      en: "A soft play mat with activity arch and gentle hanging shapes."
    },
    desc: {
      zh: "SoftMeadow Play Mat 用圆形软垫、活动拱架和柔和色块构成宝宝地面活动区，也方便照护者快速收起整理。",
      en: "SoftMeadow Play Mat uses a round padded mat, activity arch, and gentle color blocks to create a calm floor-play area that is easy to tidy."
    },
    specs: [
      { zh: "圆形加厚软垫", en: "Round padded mat" },
      { zh: "可拆活动拱架", en: "Removable activity arch" },
      { zh: "柔软挂件与边缘标签", en: "Soft hanging shapes and edge tag" },
      { zh: "垫边 Kxert 织唛", en: "Kxert woven edge label" }
    ]
  },
  {
    id: 8,
    image: "assets/product8-lumawatch-monitor.png",
    page: "product8.html",
    category: { zh: "看护", en: "Monitoring" },
    name: { zh: "Kxert LumaWatch Monitor", en: "Kxert LumaWatch Monitor" },
    price: "$159.00",
    short: {
      zh: "婴儿看护器套装，包含圆角摄像头和小型家长显示屏。",
      en: "A nursery monitor set with rounded camera and compact parent display."
    },
    desc: {
      zh: "LumaWatch Monitor 使用圆角摄像头、小型显示屏和柔和按钮布局，帮助照护者更清楚地查看房间状态。",
      en: "LumaWatch Monitor uses a rounded camera, compact parent display, and gentle button layout to help caregivers check the nursery more clearly."
    },
    specs: [
      { zh: "圆角摄像头机身", en: "Rounded camera body" },
      { zh: "小型家长显示屏", en: "Compact parent display" },
      { zh: "低亮度夜间提示灯", en: "Low-brightness night indicator" },
      { zh: "底座 Kxert 标识", en: "Kxert mark on base" }
    ]
  }
];

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "母婴用品品牌",
    "hero.title": "给日常照护多一点柔和秩序",
    "hero.body": "Kxert 以柔和材质、清晰结构和温暖配色，打造婴儿推车、婴儿床、背带、餐椅、妈咪包和看护用品。",
    "hero.ctaProducts": "探索产品",
    "hero.ctaAbout": "了解品牌",
    "hero.note": "提示：Kxert 是日常母婴用品概念品牌，不是医疗设备品牌。所有婴幼儿用品均应由照护者按产品说明使用并保持陪伴。",
    "intro.kicker": "Gentle Everyday Care",
    "intro.title": "从出行、睡眠到喂养与陪伴",
    "intro.body": "Kxert 把母婴用品做得更统一：轻便移动、柔和触感、收纳清楚、操作直观，让家庭里的每一次准备都更顺手。",
    "products.kicker": "Featured Products",
    "products.title": "精选产品",
    "products.body": "8 款首发母婴用品覆盖推车、床边床、背带、高脚餐椅、妈咪包、温奶护理台、爬行游戏垫与婴儿看护器。",
    "products.view": "查看详情",
    "about.kicker": "About Kxert",
    "about.title": "为新家庭设计的柔和用品系统",
    "about.body": "Kxert 关注照护者每天都会触碰到的细节：好拿、好放、好清洁，也容易融入家里的空间。品牌不做夸张承诺，只把常用产品做得更可靠、更好看。",
    "about.statProducts": "款首发产品",
    "about.statIdentity": "原创亲子标识",
    "about.statMedical": "医疗产品定位",
    "contact.kicker": "Contact",
    "contact.title": "把母婴日常做得更轻一点",
    "contact.body": "如需品牌合作、渠道洽谈或产品资料，请联系 Kxert 母婴用品团队。",
    "contact.cta": "联系品牌团队",
    "footer.copy": "© 2026 Kxert. Mother & baby essentials brand.",
    "footer.note": "Everyday baby products only. Not medical devices; caregivers should follow product instructions and supervise use.",
    "detail.back": "返回首页",
    "detail.overview": "产品概览",
    "detail.specs": "核心规格",
    "detail.next": "下一款产品",
    "detail.contact": "咨询产品",
    "detail.note": "日常母婴用品概念品牌，非医疗设备；请照护者按说明使用并保持陪伴。"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Mother & Baby Essentials",
    "hero.title": "Gentle Order For Everyday Care",
    "hero.body": "Kxert creates strollers, cribs, carriers, high chairs, diaper bags, and nursery care products with soft materials, clear structure, and warm color.",
    "hero.ctaProducts": "Explore Products",
    "hero.ctaAbout": "About Brand",
    "hero.note": "Note: Kxert is an everyday mother-and-baby essentials concept brand, not a medical-device brand. Baby products should be used by caregivers according to product instructions with supervision.",
    "intro.kicker": "Gentle Everyday Care",
    "intro.title": "From Travel And Sleep To Feeding And Presence",
    "intro.body": "Kxert gives everyday baby products a unified feel: light movement, gentle touch, clear storage, and intuitive use, so every family preparation feels easier.",
    "products.kicker": "Featured Products",
    "products.title": "Featured Products",
    "products.body": "Eight launch products across strollers, bedside cribs, carriers, high chairs, diaper bags, warming care stations, play mats, and nursery monitors.",
    "products.view": "View Details",
    "about.kicker": "About Kxert",
    "about.title": "A Gentle Product System For New Families",
    "about.body": "Kxert focuses on details caregivers touch every day: easy to hold, place, clean, and fit into the home. The brand avoids exaggerated promises and makes common products feel more dependable and beautiful.",
    "about.statProducts": "Launch products",
    "about.statIdentity": "Original parent-child mark",
    "about.statMedical": "Medical positioning",
    "contact.kicker": "Contact",
    "contact.title": "Making Baby Care Feel A Little Lighter",
    "contact.body": "For brand partnerships, channel discussions, or product materials, contact the Kxert mother-and-baby team.",
    "contact.cta": "Contact Brand Team",
    "footer.copy": "© 2026 Kxert. Mother & baby essentials brand.",
    "footer.note": "Everyday baby products only. Not medical devices; caregivers should follow product instructions and supervise use.",
    "detail.back": "Back Home",
    "detail.overview": "Overview",
    "detail.specs": "Key Specs",
    "detail.next": "Next Product",
    "detail.contact": "Ask About Product",
    "detail.note": "Everyday mother-and-baby essentials concept brand, not medical devices. Caregivers should follow instructions and supervise use."
  }
};

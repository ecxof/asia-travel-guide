import heroImage from "../assets/maldives.jpg";
import maldivesImage from "../assets/maldives.jpg";
import uaeImage from "../assets/uae.jpg";
import kazakhstanImage from "../assets/kazakhstan.jpg";
import uzbekistanImage from "../assets/uzbekistan.jpg";
import qatarImage from "../assets/qatar.jpg";

export type Language = "en" | "zh";

export type LocalizedText = Record<Language, string>;

export type Destination = {
  slug: string;
  country: LocalizedText;
  image: string;
  visaStay: LocalizedText;
  flightTime: LocalizedText;
  budget: LocalizedText;
  bestFor: LocalizedText;
  tagline: LocalizedText;
  overview: LocalizedText;
  highlight: LocalizedText;
  interestingFact: LocalizedText;
  whyChineseTravelers: LocalizedText[];
  topPlaces: LocalizedText[];
  bestTime: LocalizedText[];
  practicalTips: LocalizedText[];
};

export const siteUrl = "https://id-preview--6c0f0938-527a-44b7-ab9c-3b2d76c8fbc9.lovable.app";
export const lastVerified = "2026-04-23";
export const brandName: LocalizedText = {
  en: "Asia Travel Explorer",
  zh: "亚洲轻松出行指南",
};

export const homeSeo = {
  title: "Asia Travel Explorer | Easy-Entry Asia Trips",
  description:
    "Bilingual travel inspiration for Chinese passport holders exploring easy-entry destinations across Asia.",
};

export const uiCopy = {
  nav: {
    home: { en: "Home", zh: "首页" },
    destinations: { en: "Destinations", zh: "目的地" },
    quiz: { en: "Quiz", zh: "测一测" },
    about: { en: "About", zh: "说明" },
  },
  hero: {
    kicker: { en: "Bilingual editorial travel guide", zh: "双语出境旅行灵感指南" },
    title: {
      en: "Easy-entry Asia, curated for Chinese travelers.",
      zh: "为中国旅客精选的亚洲轻松出行目的地。",
    },
    description: {
      en: "Skip visa uncertainty and compare five short-haul escapes with clearer entry rules, smarter timing, and practical tips that actually matter before you book.",
      zh: "减少签证焦虑，用更清晰的入境信息、更适合中国假期的出行时机，以及真正有用的实用建议，快速锁定下一段亚洲短途旅行。",
    },
    primaryCta: { en: "Explore destinations", zh: "查看目的地" },
    secondaryCta: { en: "Take the quiz", zh: "开始测一测" },
  },
  travelers: {
    title: { en: "Built around real outbound China travel habits", zh: "围绕中国出境旅行习惯打造" },
    points: [
      {
        en: "Holiday-aware timing for Golden Week, Lunar New Year, and May Day.",
        zh: "结合黄金周、春节、五一等中国假期安排出行时机。",
      },
      {
        en: "Practical notes on Mandarin-friendly service, familiar payments, and short-haul routing.",
        zh: "关注中文服务、支付便利度和短途航线衔接等真实需求。",
      },
      {
        en: "A magazine-style overview first, then clear next steps when you are ready to compare.",
        zh: "先用编辑式内容激发灵感，再给出清晰可执行的下一步参考。",
      },
    ],
  },
  disclaimer: {
    title: { en: "Travel policy reminder", zh: "出行政策提醒" },
    body: {
      en: "Visa and entry requirements can change. Use this site as a planning guide and confirm the latest rules through official embassy, immigration, or Ministry of Foreign Affairs sources before booking.",
      zh: "签证与入境政策可能随时调整。本站内容适合作为行程规划参考，预订前请务必以使领馆、移民局或官方渠道公布的最新信息为准。",
    },
  },
};

export const quizQuestions = [
  {
    id: "pace",
    label: {
      en: "What kind of trip do you want first?",
      zh: "你现在最想要哪种旅行节奏？",
    },
    options: [
      { value: "beach", label: { en: "Beach calm", zh: "海岛放松" } },
      { value: "city", label: { en: "City energy", zh: "城市活力" } },
      { value: "culture", label: { en: "Culture and history", zh: "文化历史" } },
      { value: "nature", label: { en: "Nature and scenery", zh: "自然风景" } },
    ],
  },
  {
    id: "style",
    label: {
      en: "Which style feels right?",
      zh: "你更偏好哪种旅行风格？",
    },
    options: [
      { value: "luxury", label: { en: "Luxury", zh: "轻奢品质" } },
      { value: "balanced", label: { en: "Balanced", zh: "舒适平衡" } },
      { value: "adventure", label: { en: "Adventure", zh: "探索体验" } },
      { value: "romance", label: { en: "Romantic", zh: "浪漫氛围" } },
    ],
  },
  {
    id: "group",
    label: {
      en: "Who are you likely traveling with?",
      zh: "你更可能和谁一起出发？",
    },
    options: [
      { value: "partner", label: { en: "Partner", zh: "伴侣" } },
      { value: "friends", label: { en: "Friends", zh: "朋友" } },
      { value: "family", label: { en: "Family", zh: "家人" } },
      { value: "solo", label: { en: "Solo", zh: "一个人" } },
    ],
  },
];

export const destinations: Destination[] = [
  {
    slug: "maldives",
    country: { en: "Maldives", zh: "马尔代夫" },
    image: maldivesImage,
    visaStay: { en: "Visa on arrival · up to 60 days", zh: "落地签 · 最长 60 天" },
    flightTime: { en: "About 9 to 10 hours from Shanghai", zh: "从上海出发约 9 到 10 小时" },
    budget: { en: "RMB 16,000 to 35,000 for 5 days", zh: "5 天约人民币 1.6 万到 3.5 万" },
    bestFor: { en: "Honeymoons and premium island escapes", zh: "蜜月与高品质海岛度假" },
    tagline: {
      en: "The easiest way to make a short trip feel cinematic.",
      zh: "让短途旅行瞬间变成电影画面的海岛目的地。",
    },
    overview: {
      en: "The Maldives offers maximum emotional payoff with minimal planning friction: direct resort logistics, striking lagoon scenery, and a style of travel that works especially well for couples, celebrations, and once-a-year splurge trips.",
      zh: "马尔代夫能以较低的规划难度带来极高的度假满足感：度假村接驳成熟、海水景观惊艳，非常适合情侣、纪念日和一年一次的犒赏型旅行。",
    },
    highlight: { en: "Overwater villa dream trip", zh: "水上别墅梦想旅行" },
    interestingFact: {
      en: "The Maldives has one of the highest concentrations of overwater villas in the world, making it unusually easy to turn a resort stay into the entire trip.",
      zh: "马尔代夫拥有全球密度极高的水上别墅资源，一家度假村就足以构成整段旅程。",
    },
    whyChineseTravelers: [
      { en: "Popular for anniversaries, proposals, and Golden Week luxury escapes.", zh: "非常适合纪念日、求婚和黄金周高品质度假。" },
      { en: "Many resorts already understand Chinese dining preferences and celebration packages.", zh: "不少度假村对中国旅客的餐饮偏好和庆祝场景更熟悉。" },
      { en: "Low-pressure planning once airport transfer and resort package are set.", zh: "选好接送和度假村套餐后，整体规划压力很低。" },
    ],
    topPlaces: [
      { en: "North Malé Atoll for classic luxury resorts and convenient speedboat transfers", zh: "北马累环礁：经典奢华度假村和便捷快艇接送" },
      { en: "Baa Atoll for manta ray season and quieter marine experiences", zh: "芭环礁：蝠鲼季和更静谧的海洋体验" },
      { en: "South Ari Atoll for whale shark excursions and strong snorkeling", zh: "南阿里环礁：鲸鲨出海与优质浮潜" },
    ],
    bestTime: [
      { en: "December to April for dry weather and postcard skies", zh: "12 月到次年 4 月：天气稳定，景观最梦幻" },
      { en: "November for a softer price-to-weather balance before peak crowds", zh: "11 月：价格与天气表现更平衡，旺季前更从容" },
    ],
    practicalTips: [
      { en: "Compare full-board and half-board resort pricing before booking flights.", zh: "订机票前先比较含餐套餐，整体预算差异很大。" },
      { en: "Seaplane transfer timing can shape your first and last day more than expected.", zh: "水上飞机接驳时间会明显影响到达日和离开日安排。" },
      { en: "Bring lightweight sun gear and underwater-friendly phone protection.", zh: "记得带轻便防晒装备和适合下水的手机防护。" },
    ],
  },
  {
    slug: "uae",
    country: { en: "United Arab Emirates", zh: "阿联酋" },
    image: uaeImage,
    visaStay: { en: "Visa free entry · 30 days", zh: "免签入境 · 30 天" },
    flightTime: { en: "About 9 hours from East China hubs", zh: "华东主要城市出发约 9 小时" },
    budget: { en: "RMB 10,000 to 22,000 for 5 days", zh: "5 天约人民币 1 万到 2.2 万" },
    bestFor: { en: "Luxury shopping, city breaks, family comfort", zh: "购物、城市短假、家庭舒适出行" },
    tagline: {
      en: "A polished short-haul luxury break with almost no learning curve.",
      zh: "几乎没有适应门槛的轻奢城市假期。",
    },
    overview: {
      en: "Dubai and Abu Dhabi make the UAE an efficient choice for travelers who want premium hotels, landmark attractions, and smooth urban logistics without giving up convenience, safety, or familiar dining options.",
      zh: "迪拜和阿布扎比让阿联酋成为高效率的轻奢短途目的地：酒店选择成熟、地标密集、城市交通清晰，同时兼顾安全感与餐饮便利。",
    },
    highlight: { en: "Modern skyline with easy luxury", zh: "现代天际线与轻松奢享" },
    interestingFact: {
      en: "For many first-time Gulf travelers, the UAE feels easier than expected because major neighborhoods, malls, and hotels are built for international visitors from the start.",
      zh: "对很多第一次去海湾地区的旅客来说，阿联酋比想象中更容易上手，因为主要商圈、酒店和景点一开始就是面向国际游客打造的。",
    },
    whyChineseTravelers: [
      { en: "Mandarin service is increasingly common in premium hotels and retail environments.", zh: "高端酒店和零售场景中，中文服务越来越常见。" },
      { en: "Shopping, desert experiences, and landmark architecture work well for couples and families alike.", zh: "购物、沙漠体验和地标建筑适合情侣也适合家庭同行。" },
      { en: "A strong option for winter sunshine when East Asia weather feels dull or cold.", zh: "当东亚进入阴冷季节时，是很好的冬日阳光选择。" },
    ],
    topPlaces: [
      { en: "Downtown Dubai for Burj Khalifa, Dubai Mall, and dramatic skyline energy", zh: "迪拜市中心：哈利法塔、Dubai Mall 与标志性天际线" },
      { en: "Palm Jumeirah for beachfront resort stays and polished nightlife", zh: "朱美拉棕榈岛：海滨度假与精致夜生活" },
      { en: "Abu Dhabi Cultural District for Louvre Abu Dhabi and architectural icons", zh: "阿布扎比文化区：卢浮宫阿布扎比与地标建筑" },
    ],
    bestTime: [
      { en: "November to March for the most comfortable outdoor weather", zh: "11 月到次年 3 月：最适合户外活动" },
      { en: "January for shopping festival energy and cooler city touring", zh: "1 月：购物节氛围更强，城市观光舒适" },
    ],
    practicalTips: [
      { en: "Reserve headline attractions early if you travel during Chinese holidays.", zh: "如果在中国假期出行，热门项目建议提前预约。" },
      { en: "Taxi and ride-hailing are often simpler than self-driving for short stays.", zh: "短途停留时，打车和网约车通常比自驾更省心。" },
      { en: "Plan indoor attractions for midday when desert heat rises outside winter months.", zh: "非冬季中午更适合安排室内项目，避开高温时段。" },
    ],
  },
  {
    slug: "kazakhstan",
    country: { en: "Kazakhstan", zh: "哈萨克斯坦" },
    image: kazakhstanImage,
    visaStay: { en: "Visa free entry · 30 days", zh: "免签入境 · 30 天" },
    flightTime: { en: "About 5 to 7 hours depending on route", zh: "按航线不同约 5 到 7 小时" },
    budget: { en: "RMB 6,000 to 12,000 for 5 days", zh: "5 天约人民币 6000 到 1.2 万" },
    bestFor: { en: "Mountains, fresh air, and value-driven adventure", zh: "高山风景、自然空气、性价比探索" },
    tagline: {
      en: "A surprisingly easy Silk Road nature trip from China.",
      zh: "从中国出发就能轻松抵达的丝路自然风景线。",
    },
    overview: {
      en: "Kazakhstan combines wide-open mountain scenery, urban ease in Almaty, and a sense of discovery that feels fresher than mainstream city breaks. It is one of the best fits for travelers who want nature without sacrificing direct flight logic.",
      zh: "哈萨克斯坦把开阔山景、阿拉木图的城市便利和新鲜感结合在一起。对于想看自然风光、又不想牺牲直飞便利的旅客，它是很有吸引力的选择。",
    },
    highlight: { en: "Mountain air with low visa friction", zh: "低门槛入境的高山自然目的地" },
    interestingFact: {
      en: "Kazakhstan can feel far more alpine than many first-time visitors expect, especially around the Tian Shan range near Almaty.",
      zh: "很多第一次去哈萨克斯坦的旅客都会惊讶于它的高山气质，尤其是阿拉木图周边的天山景观。",
    },
    whyChineseTravelers: [
      { en: "Direct flight options and border familiarity make it approachable for short holidays.", zh: "直飞航线和地缘熟悉感让它适合短假出行。" },
      { en: "Costs stay more manageable than many beach luxury destinations.", zh: "整体成本通常比海岛轻奢目的地更可控。" },
      { en: "A good answer when you want scenery, hiking, and cafés rather than malls or resorts.", zh: "如果你更想要风景、徒步和咖啡馆，而不是商场或海岛，它会很对味。" },
    ],
    topPlaces: [
      { en: "Almaty for leafy city life, cafés, and a strong base for day trips", zh: "阿拉木图：城市气质舒适，也是周边游的最佳基地" },
      { en: "Big Almaty Lake for dramatic blue water and mountain framing", zh: "大阿拉木图湖：湖水颜色惊艳，山景层次分明" },
      { en: "Charyn Canyon for a more cinematic desert-and-rock contrast", zh: "恰伦峡谷：更具大片感的峡谷与岩层景观" },
    ],
    bestTime: [
      { en: "May to June for green landscapes and comfortable temperatures", zh: "5 到 6 月：草木最美，温度舒适" },
      { en: "September for crisp air, fewer crowds, and stable sightseeing weather", zh: "9 月：空气清爽，人流更轻，适合观景" },
    ],
    practicalTips: [
      { en: "Layer clothing because mountain weather changes quickly across one day.", zh: "山区天气变化快，穿搭建议分层。" },
      { en: "Use Almaty as the anchor and keep longer drives for one or two headline days.", zh: "建议以阿拉木图为核心，把长途车程留给一到两个重点日程。" },
      { en: "Cashless payment is improving, but keep a backup card and some cash outside urban centers.", zh: "无现金支付越来越方便，但离开城市后最好备少量现金和备用卡。" },
    ],
  },
  {
    slug: "uzbekistan",
    country: { en: "Uzbekistan", zh: "乌兹别克斯坦" },
    image: uzbekistanImage,
    visaStay: { en: "Visa free entry · 30 days", zh: "免签入境 · 30 天" },
    flightTime: { en: "About 6 to 8 hours depending on city pair", zh: "按出发城市不同约 6 到 8 小时" },
    budget: { en: "RMB 6,500 to 13,000 for 5 days", zh: "5 天约人民币 6500 到 1.3 万" },
    bestFor: { en: "Architecture lovers and Silk Road depth", zh: "建筑爱好者与丝路文化深度游" },
    tagline: {
      en: "The most visually dramatic culture-first escape in this list.",
      zh: "这份清单里最具视觉冲击力的文化型目的地。",
    },
    overview: {
      en: "Uzbekistan turns history into a full visual experience. Blue-tile madrasas, caravan-route cities, and a slower rhythm make it ideal for travelers who want meaning, photography, and memorable architecture over pure resort comfort.",
      zh: "乌兹别克斯坦能把历史直接变成视觉体验。蓝色瓷砖建筑、丝路古城和更慢的节奏，非常适合喜欢文化、拍照和建筑细节的旅行者。",
    },
    highlight: { en: "Silk Road architecture in real life", zh: "把丝路建筑实景装进旅程" },
    interestingFact: {
      en: "Samarkand often feels instantly recognizable even for first-time visitors because so many of its forms shaped how the wider world imagines the Silk Road.",
      zh: "即使第一次到访，很多人也会对撒马尔罕产生强烈熟悉感，因为它几乎定义了大众对丝绸之路的想象。",
    },
    whyChineseTravelers: [
      { en: "Strong storytelling value for travelers who like history, museums, and meaningful photography.", zh: "对于喜欢历史、博物馆和旅行影像的人，这里有很强的内容感。" },
      { en: "Costs are comparatively friendly while the sense of uniqueness stays very high.", zh: "相对友好的预算，换来很高的独特性。" },
      { en: "A compelling alternative when mainstream beach destinations feel too familiar.", zh: "如果海岛和都市目的地已经看得太多，它会带来明显新鲜感。" },
    ],
    topPlaces: [
      { en: "Samarkand for Registan Square and the most iconic blue-tile scenery", zh: "撒马尔罕：雷吉斯坦广场和最经典的蓝砖建筑" },
      { en: "Bukhara for atmospheric old-city streets and heritage depth", zh: "布哈拉：老城街巷氛围与深厚历史层次" },
      { en: "Tashkent for a softer arrival with metro design and modern comforts", zh: "塔什干：更轻松的落地体验与现代城市配套" },
    ],
    bestTime: [
      { en: "April to May for mild weather and vivid city walks", zh: "4 到 5 月：天气温和，适合徒步观城" },
      { en: "September to October for golden light and comfortable cultural touring", zh: "9 到 10 月：光线漂亮，适合文化观光" },
    ],
    practicalTips: [
      { en: "Split nights between Samarkand and Bukhara instead of rushing both as day trips.", zh: "建议在撒马尔罕和布哈拉分别住一晚，不要都做成赶路式一日游。" },
      { en: "Morning and late afternoon light make the architecture look dramatically better for photos.", zh: "如果想拍好建筑，清晨和傍晚的光线会好很多。" },
      { en: "Comfortable walking shoes matter because old-city sightseeing is more on-foot than expected.", zh: "老城观光步行为主，鞋子舒适度很重要。" },
    ],
  },
  {
    slug: "qatar",
    country: { en: "Qatar", zh: "卡塔尔" },
    image: qatarImage,
    visaStay: { en: "Visa free entry · 30 days", zh: "免签入境 · 30 天" },
    flightTime: { en: "About 8 to 9 hours from major China gateways", zh: "中国主要口岸出发约 8 到 9 小时" },
    budget: { en: "RMB 9,000 to 18,000 for 4 to 5 days", zh: "4 到 5 天约人民币 9000 到 1.8 万" },
    bestFor: { en: "Short premium urban breaks and design-led stays", zh: "精致城市短假与设计感酒店体验" },
    tagline: {
      en: "Small in scale, smooth in execution, and ideal for a polished long weekend.",
      zh: "体量精致、节奏顺滑，很适合高完成度的周末短假。",
    },
    overview: {
      en: "Qatar is compact enough to feel efficient and upscale enough to feel special. Doha works particularly well for travelers who want stylish hotels, museums, waterfront evenings, and a clean city rhythm without overcomplicating the itinerary.",
      zh: "卡塔尔足够紧凑，所以旅程效率高；同时又足够精致，能让人感到特别。多哈尤其适合偏爱设计酒店、博物馆、海滨夜景和干净城市节奏的旅客。",
    },
    highlight: { en: "Compact luxury city break", zh: "紧凑而有质感的城市短假" },
    interestingFact: {
      en: "Qatar is often most appealing when travelers do less, not more. Its strength is not endless checklists but a calm, high-finish urban experience.",
      zh: "卡塔尔最迷人的地方往往不是项目越多越好，而是把有限的城市体验做得很完整、很精致。",
    },
    whyChineseTravelers: [
      { en: "Comfortable for premium stopovers, long weekends, or a calmer luxury trip than Dubai.", zh: "适合轻奢中转、长周末或比迪拜更安静一些的品质旅行。" },
      { en: "Museum and architecture lovers get a strong reward in a compact area.", zh: "喜欢博物馆和建筑的旅客能在紧凑城市尺度中获得很高回报。" },
      { en: "The city format suits travelers who prefer one base hotel and easy movement.", zh: "城市结构很适合以一家酒店为基地、轻松串联行程。" },
    ],
    topPlaces: [
      { en: "Msheireb Downtown for design-focused city wandering and cafés", zh: "姆希里布市中心：设计感街区与咖啡空间" },
      { en: "Museum of Islamic Art waterfront for skyline views and cultural depth", zh: "伊斯兰艺术博物馆海滨区：文化与天际线兼具" },
      { en: "Souq Waqif for evening atmosphere and a more local rhythm", zh: "瓦其夫老市场：夜晚氛围感更强，也更有在地气息" },
    ],
    bestTime: [
      { en: "November to March for outdoor comfort and waterfront evenings", zh: "11 月到次年 3 月：适合户外和海滨夜景" },
      { en: "December for event season and especially pleasant walking weather", zh: "12 月：活动多，步行舒适度更高" },
    ],
    practicalTips: [
      { en: "Pair museums with waterfront promenades to keep the pace balanced.", zh: "建议把博物馆和海边散步搭配安排，节奏会更舒服。" },
      { en: "Doha is easier when you stay central rather than splitting hotels.", zh: "住在市区核心位置通常比换酒店更省心。" },
      { en: "Keep one evening free for skyline dining or a slow corniche walk.", zh: "预留一个晚上给天际线餐厅或海滨长廊散步，会很值得。" },
    ],
  },
];

export const featuredStats = [
  { value: "5", label: { en: "easy-entry destinations", zh: "个轻松入境目的地" } },
  { value: "30–60", label: { en: "days of stay", zh: "天停留区间" } },
  { value: "Bilingual", label: { en: "English + Chinese", zh: "中英双语体验" } },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function localize(language: Language, text: LocalizedText) {
  return text[language];
}

export { heroImage };
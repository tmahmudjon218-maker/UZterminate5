/**
 * data.js — Initial recipe database for Taomlar Retsepti
 * 40 sample recipes (Uzbek national dishes + popular world cuisine)
 * Expand to 200+ by adding more objects to the RECIPES array.
 */

const RECIPES = [
  // ──────────────────────────────────────────────────────────────
  // O'ZBEK MILLIY TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "uz-001",
    title: "O'zbek Oshi (Palov)",
    title_ru: "Узбекский плов",
    title_en: "Uzbek Plov (Rice Pilaf)",
    image: "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "1 kg qo'y go'shti",
      "1 kg basmati guruch",
      "500 g sabzi (yirik qiyilgan)",
      "3 ta piyoz",
      "200 ml paxta moyi",
      "2 bosh sarimsoq",
      "1 osh qoshiq zira",
      "Tuz, qora qalampir",
      "1 litr iliq suv"
    ],
    steps: [
      "Guruchni sovuq suvda 30 daqiqa ivitib qo'ying.",
      "Qozonga moyni qizdiring. Piyozni oltin rangga qadar qovuring.",
      "Go'shtni yirik bo'laklarga to'g'rang va piyoz ustiga soling. Har tomonini qovouring.",
      "Sabzini piyoz-go'sht ustiga soling va 10 daqiqa qovuring.",
      "Tuz, qalampir, zira soling. 1 litr iliq suv quyib, 30 daqiqa qaynatib pishiring (zirvak).",
      "Sarimsoq boshlarini butun holda zirvakka tiqing.",
      "Ivitilgan guruchni zirvak ustiga tekis yoyib soling. Suvni guruch ustidan 2 sm baland bo'ladigan qilib qo'shing.",
      "Qozonni yopmay qattiq olovda suvini ichib ketsin. So'ng o'rtada chuqurcha ochib, qopqoq yoping.",
      "Eng past olovda 20 daqiqa dim qiling. Aralashtirib dasturxonga torting."
    ],
    time: 90,
    likes: 245,
    rating: 4.9
  },
  {
    id: "uz-002",
    title: "Lag'mon",
    title_ru: "Лагман",
    title_en: "Laghman Noodle Soup",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "500 g mol go'shti",
      "400 g o'ziga xos lag'mon makaron",
      "2 ta piyoz",
      "3 ta pomidor",
      "2 ta bolgar qalampiri",
      "3 ta kartoshka",
      "2 ta sabzi",
      "100 g karam",
      "4 ta sarimsoq tishi",
      "2 osh qoshiq o'simlik moyi",
      "Tuz, zira, qizil qalampir"
    ],
    steps: [
      "Go'shtni kubik shaklida to'g'rang va moyda yaxshilab qovuring.",
      "Piyozni yarimdaira shaklida to'g'rang, go'sht ustiga soling va qovuring.",
      "Sabzi va kartoshkani kubik shaklida to'g'rang, qo'shing.",
      "Pomidor va bolgar qalampirini qo'shing, aralashtirib qovuring.",
      "Tuz, zira, sarimsoq soling. Suv quyib, 40 daqiqa qaynatib pishiring.",
      "Alohida qaynoq suvda makaronni pishiring.",
      "Makaronni chiqarib, ustidan tayyor vak quyib torting."
    ],
    time: 60,
    likes: 187,
    rating: 4.7
  },
  {
    id: "uz-003",
    title: "So'msa (Tandir So'msasi)",
    title_ru: "Самса тандырная",
    title_en: "Tandoor Samsa",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "500 g bug'doy uni",
      "200 ml iliq suv",
      "1 choy qoshiq tuz (xamir uchun)",
      "400 g qo'y go'shti (maydalangan)",
      "3 ta piyoz (tuxum to'g'ralgan)",
      "50 g qo'y yog'i",
      "Tuz, qora qalampir, zira (ichlik uchun)"
    ],
    steps: [
      "Undan, suvdan va tuzdan qattiqroq xamir qurib, 30 daqiqa turib yotsın.",
      "Go'sht, piyoz, yog', tuz va zira aralashtirib ichlik tayyorlang.",
      "Xamirni yupqa qilib yoying, dumaloq shakllarga kesing.",
      "Har bir aylantirgan doirachaga bir qoshiq ichlik soling va uchburchak shakliga yoping.",
      "So'msalarni tandirga yoki 200°C da 35-40 daqiqa dammovga pishiring."
    ],
    time: 70,
    likes: 210,
    rating: 4.8
  },
  {
    id: "uz-004",
    title: "Manti",
    title_ru: "Манты",
    title_en: "Manti (Steamed Dumplings)",
    image: "https://images.unsplash.com/photo-1534353341740-c3e74ef17bf1?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "1 ta tuxum",
      "100 ml suv",
      "1 choy qoshiq tuz",
      "500 g qo'y go'shti (mayda to'g'ralgan)",
      "4 ta piyoz (mayda to'g'ralgan)",
      "Tuz, qora qalampir, zira"
    ],
    steps: [
      "Un, tuxum, suv va tuzdan elastik xamir qurib, 20 daqiqa turib yotsın.",
      "Go'sht, piyoz, tuz, qalampir va zira aralashtirib ichlik tayyorlang.",
      "Xamirni ingichka qilib yoyib, kvadrat shakllarga kesing (10x10 sm).",
      "Har bir kvadratga ichlik soling va mantilarni qo'lda yoping.",
      "Mantilarni moylab qo'yilgan mantovkaga tergab, 40-45 daqiqa bug'da pishiring.",
      "Qatiq yoki smetana bilan torting."
    ],
    time: 75,
    likes: 199,
    rating: 4.8
  },
  {
    id: "uz-005",
    title: "Shurpa",
    title_ru: "Шурпа",
    title_en: "Shurpa (Lamb Soup)",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "1 kg qo'y go'shti (suyakli)",
      "4 ta kartoshka",
      "3 ta sabzi",
      "2 ta piyoz",
      "3 ta pomidor",
      "2 ta bolgar qalampiri",
      "1 bosh sarimsoq",
      "Tuz, qora qalampir, zira, koriander",
      "Ko'k piyoz, ko'k koriander"
    ],
    steps: [
      "Go'shtni katta qozon ichiga solib, sovuq suv quying.",
      "Qaynagach ko'pini olib, 1 soat sekin olovda qaynatib pishiring.",
      "Piyozni xalqa shaklida to'g'rang va qo'shing.",
      "Sabzi va kartoshkani yirik bo'laklarda soling.",
      "Pomidor va qalampirni qo'shing. Tuz, zira va sarimsoq qo'shing.",
      "Yana 30 daqiqa pishiring. Ko'k piyoz va koriander bilan torting."
    ],
    time: 100,
    likes: 156,
    rating: 4.6
  },
  {
    id: "uz-006",
    title: "Dimlama",
    title_ru: "Димляма",
    title_en: "Dimlama (Stew)",
    image: "https://images.unsplash.com/photo-1585644143527-72ef58a6023d?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "800 g qo'y go'shti",
      "4 ta kartoshka",
      "3 ta sabzi",
      "2 ta piyoz",
      "300 g karam",
      "2 ta pomidor",
      "3 ta bolgar qalampiri",
      "2 bosh sarimsoq",
      "Tuz, zira, koriander"
    ],
    steps: [
      "Qozon tubiga go'shtni soling.",
      "Ustiga xalqa piyozni yoyib soling.",
      "Sabzi va kartoshkani yirik bo'laklarda, go'sht ustiga soling.",
      "Pomidor, bolgar qalampiri, karam va sarimsoq boshlarini qo'shing.",
      "Tuz, zira va koriander sepib, qopqoqni yoping.",
      "Eng past olovda 1.5 soat dim qiling. Suv qo'shmang — sabzavotlar o'z sharbatida pishadi."
    ],
    time: 110,
    likes: 134,
    rating: 4.5
  },
  {
    id: "uz-007",
    title: "Qozon Kabob",
    title_ru: "Казан-кабоб",
    title_en: "Kazan Kabob",
    image: "https://images.unsplash.com/photo-1544025162-d76594e5c5d5?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "O'zbek",
    ingredients: [
      "1 kg qo'y go'shti (suyakli, bo'laklangan)",
      "4 ta kartoshka (yirik bo'laklangan)",
      "2 ta piyoz (xalqa)",
      "5 ta sarimsoq tishi",
      "100 ml o'simlik moyi",
      "Tuz, qora qalampir, zira, bargi dafna"
    ],
    steps: [
      "Qozon ichiga moyni qizdiring.",
      "Go'sht bo'laklarini bir tomonini yaxshi qovouring.",
      "Go'shtni ag'daring, piyozni qo'shing va qovuring.",
      "Sarimsoq, tuz, zira, bargi dafna solib, 500 ml suv quyib qaynating.",
      "Kartoshkani solib, qopqoqni yoping.",
      "O'rtacha olovda 40 daqiqa pishiring. Limon bilan torting."
    ],
    time: 60,
    likes: 178,
    rating: 4.7
  },
  {
    id: "uz-008",
    title: "Non (O'zbek Tандир Noni)",
    title_ru: "Узбекские лепёшки",
    title_en: "Uzbek Tandoor Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "7 g quruq achitqi",
      "250 ml iliq suv",
      "1 choy qoshiq tuz",
      "1 choy qoshiq qand",
      "2 osh qoshiq o'simlik moyi",
      "Kunjut (sirtiga sepish uchun)"
    ],
    steps: [
      "Iliq suvda achitqi va qandni eritib 10 daqiqa turib yotsın.",
      "Unga tuz, moy, achitqili suvni qo'shib yaxshi xumir quring.",
      "Xumir ko'targuncha iliq joyda 1 soat turib yotsın.",
      "Xumir bo'laklarga bo'lib, dumaloq shakliga keltiring.",
      "Non o'rtasini pishki bilan teshib, sirtiga suv artib kunjut sepib ayting.",
      "Tandirga yoki 220°C da 15-20 daqiqa pishiring."
    ],
    time: 90,
    likes: 145,
    rating: 4.6
  },
  {
    id: "uz-009",
    title: "Mastava",
    title_ru: "Мастава",
    title_en: "Mastava (Rice Soup)",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "400 g mol go'shti",
      "150 g guruch",
      "2 ta kartoshka",
      "2 ta sabzi",
      "1 ta piyoz",
      "2 ta pomidor",
      "Sarimsoq, tuz, zira",
      "Qatiq (servis uchun)"
    ],
    steps: [
      "Go'shtni katta qozonda 2 litr suvda 1 soat qaynatib sho'rva tayyorlang.",
      "Go'shtni chiqarib, bo'laklang va sho'rvaga qaytaring.",
      "Piyoz, sabzi va pomidorni qovurib, sho'rvaga soling.",
      "Kartoshka va yuvilgan guruchni soling.",
      "Tuz, zira, sarimsoq solib 25 daqiqa pishiring.",
      "Ustiga qatiq quyi torting."
    ],
    time: 80,
    likes: 112,
    rating: 4.4
  },
  {
    id: "uz-010",
    title: "Halim",
    title_ru: "Халим",
    title_en: "Halim (Wheat Porridge)",
    image: "https://images.unsplash.com/photo-1569562007744-b7e401b57c2d?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "500 g qo'y go'shti",
      "300 g bug'doy (yaxshi yuvilgan)",
      "2 ta piyoz",
      "4 osh qoshiq moy",
      "Tuz, zira",
      "Ko'k piyoz va ziravor"
    ],
    steps: [
      "Bug'doyni 6 soat ivitib qo'ying.",
      "Go'shtni va bug'doyni 2 litr suvda birga 2 soat pishiring.",
      "Go'shtni chiqarib tolalarga bo'ling.",
      "Piyozni moyda oltin rangga qovuring.",
      "Guruch porridge ustiga qovurilgan piyoz, go'sht va ziravor solib torting."
    ],
    time: 180,
    likes: 89,
    rating: 4.3
  },
  {
    id: "uz-011",
    title: "Qovoqli Somsa",
    title_ru: "Самса с тыквой",
    title_en: "Pumpkin Samsa",
    image: "https://images.unsplash.com/photo-1626200534498-4a2a29a9dddb?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "200 ml suv",
      "1 choy qoshiq tuz",
      "600 g qovoq (tarvaqaygan, maydalangan)",
      "2 ta piyoz",
      "50 g moy",
      "Tuz, qand, qora qalampir"
    ],
    steps: [
      "Xamir tayyorlab, 30 daqiqa turib yotsın.",
      "Qovoqni mayda qiyib, piyoz, moy, tuz va bir oz qand soling.",
      "Xamirni yupqa qilib yoyib, aylantirgan doirachalarga kesing.",
      "Har biriga qovoqli ichlik solib, uchburchak yoping.",
      "200°C da 30 daqiqa pishiring."
    ],
    time: 60,
    likes: 123,
    rating: 4.5
  },
  {
    id: "uz-012",
    title: "Norin",
    title_ru: "Нарын",
    title_en: "Norin (Noodles with Meat)",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "2 ta tuxum",
      "100 ml suv",
      "1 kg qo'y go'shti",
      "3 ta piyoz",
      "Tuz, qora qalampir"
    ],
    steps: [
      "Tuxum, suv va un bilan qattiq xamir qurib, 20 daqiqa turib yotsın.",
      "Go'shtni 2 soat qaynatib pishiring. So'ng mayda to'g'rang.",
      "Piyozni yarimdaira shaklida to'g'rang, go'sht sharbatida 10 daqiqa pishiring.",
      "Xamirni juda yupqa qilib yoyib, ingichka yo'g'oncha kesing.",
      "Makaronni sho'rvada pishirib, ustiga go'sht va piyoz solib torting."
    ],
    time: 90,
    likes: 98,
    rating: 4.4
  },
  // ──────────────────────────────────────────────────────────────
  // ITALIYA TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "it-001",
    title: "Spaghetti Karbonara",
    title_ru: "Спагетти Карбонара",
    title_en: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    category: "Tushlik",
    cuisine: "Italiya",
    ingredients: [
      "400 g spaghetti",
      "200 g pancetta yoki bikon",
      "4 ta tuxum sarisi",
      "100 g Pecorino Romano pishloq (qo'r qilingan)",
      "100 g Parmezan",
      "Qora qalampir",
      "Tuz"
    ],
    steps: [
      "Spagettini sho'rlangan suvda al dente pishiring.",
      "Bikoni kichik bo'laklarga to'g'rang va quruq tovada oltin rangga qovuring.",
      "Katta idishga tuxum sarisi, pishloqlar va mo'l qalampir solib aralashtiring.",
      "Spagettini chiqarib (biroz suvini saqlang), bikon ustiga soling.",
      "Tuxumli aralashmani quyib, qizdirmasdan tez aralashtirib kremoyre tosa hosil qiling.",
      "Pishirish suvi qo'shib, kremni sozlang. Darhol torting."
    ],
    time: 25,
    likes: 267,
    rating: 4.9
  },
  {
    id: "it-002",
    title: "Pizza Margarita",
    title_ru: "Пицца Маргарита",
    title_en: "Pizza Margherita",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "Italiya",
    ingredients: [
      "500 g un (tip 00)",
      "325 ml iliq suv",
      "7 g quruq achitqi",
      "10 g tuz",
      "400 g konservalangan pomidor",
      "250 g taoza mozzarella",
      "Yangi reyhan barglari",
      "Zaytun moyi"
    ],
    steps: [
      "Suvda achitqini eritib 5 daqiqa turib yotsın.",
      "Un va tuz bilan yaxshi xamir qurib, moyda yog'lab 2 soat ko'tartiring.",
      "Pomidorni ezib, oz tuz va zaytun moyi bilan sousga aylantiring.",
      "Xamirni sochiq yuzasiga yupqa yoyib, dumaloq shaklga keltiring.",
      "Pomidor sous, mozzarella bo'laklari soling.",
      "280°C da 8-10 daqiqa pishiring. Reyhan bilan torting."
    ],
    time: 150,
    likes: 234,
    rating: 4.8
  },
  {
    id: "it-003",
    title: "Rizotto Pecherk Bilan",
    title_ru: "Ризотто с грибами",
    title_en: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "Italiya",
    ingredients: [
      "320 g Arborio guruchi",
      "300 g qo'ziqorin",
      "1 ta piyoz (mayda to'g'ralgan)",
      "2 ta sarimsoq tishi",
      "100 ml oq vino",
      "1 l sabzavot sho'rvasi",
      "60 g sariyog'",
      "80 g Parmezan",
      "Tuz, qalampir, maydanoz"
    ],
    steps: [
      "Sho'rvani issiq ushlab turing.",
      "Katta tovada sariyog'da piyoz va sarimsoqni shaffof qilib qovuring.",
      "Qo'ziqorinni solib yuqori olovda qovuring.",
      "Guruchni solib, shisha rangiga qadar qovuring.",
      "Vinoni quyib bug'latib yuboring.",
      "Sho'rvani qoshiqlab qo'shib, har safar guruchning so'rib olishini kuting.",
      "20 daqiqa davomida aralashtirib pishiring. Parmezan va sariyog' solib torting."
    ],
    time: 40,
    likes: 198,
    rating: 4.7
  },
  // ──────────────────────────────────────────────────────────────
  // XITOY TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "cn-001",
    title: "Fritirovanniy Guruch",
    title_ru: "Жареный рис по-китайски",
    title_en: "Chinese Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    category: "Tushlik",
    cuisine: "Xitoy",
    ingredients: [
      "3 stakan pishirilgan sovuq guruch",
      "2 ta tuxum",
      "100 g qorishmali qovurilgan taomlar",
      "2 ta ko'k piyoz",
      "3 osh qoshiq soya sousi",
      "1 osh qoshiq sezam moyi",
      "1 osh qoshiq zanjabil (qo'r qilingan)",
      "2 ta sarimsoq tishi",
      "O'simlik moyi"
    ],
    steps: [
      "Wok yoki katta tovani yuqori olovda juda isiting.",
      "Moyni quying, tuxumlarni qo'shib tez aralashtiring.",
      "Sarimsoq va zanjabilni soling, 30 soniya qovuring.",
      "Sovuq guruchni qo'shib tez aralashtirib qovuring (5 daqiqa).",
      "Soya sousi va sezam moyi soling, aralashtirib davom eting.",
      "Ko'k piyoz qo'shib torting."
    ],
    time: 15,
    likes: 189,
    rating: 4.6
  },
  {
    id: "cn-002",
    title: "Kung Pao Tovuq",
    title_ru: "Курица Кунг Пао",
    title_en: "Kung Pao Chicken",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "Xitoy",
    ingredients: [
      "500 g tovuq go'shti (kubik)",
      "100 g yerfıstığı",
      "4 ta quruq qizil chili",
      "3 ta ko'k piyoz",
      "3 osh qoshiq soya sousi",
      "2 osh qoshiq sirka",
      "1 osh qoshiq qand",
      "1 choy qoshiq kraxmal",
      "Zanjabil, sarimsoq"
    ],
    steps: [
      "Tovuqni soya sousi va kraxmalda 15 daqiqa marinatlang.",
      "Wokni qizdiring, yerfıstığını qovurib chiqarib oling.",
      "Moyni quying, chili, zanjabil, sarimsoq qovuring (30 sek).",
      "Tovuqni solib yuqori olovda qovuring.",
      "Soya sousi, sirka va qand aralashmasi quyib qaynating.",
      "Ko'k piyoz va yerfıstığını solib torting."
    ],
    time: 30,
    likes: 167,
    rating: 4.7
  },
  // ──────────────────────────────────────────────────────────────
  // HIND TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "in-001",
    title: "Tovuq Tikka Masala",
    title_ru: "Курица Тикка Масала",
    title_en: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "Hind",
    ingredients: [
      "700 g tovuq go'shti",
      "200 g yogurt",
      "400 g pomidor konservasi",
      "200 ml qaymaq",
      "2 ta piyoz",
      "4 ta sarimsoq tishi",
      "1 osh qoshiq zanjabil",
      "2 osh qoshiq garam masala",
      "1 osh qoshiq kuruma",
      "Tuz, zaytun moyi"
    ],
    steps: [
      "Tovuqni yogurt, garam masala, kuruma, sarimsoq va tuzda 2 soat marinatlang.",
      "Marinatlangan tovuqni grill yoki tovada qovuring.",
      "Alohida piyoz va zanjabilni moyda qovuring.",
      "Pomidor konservasi va spetsiyalarni solib 15 daqiqa pishiring.",
      "Tovuqni sous ichiga solib 10 daqiqa qaynatib pishiring.",
      "Qaymaq quyib, naan yoki guruch bilan torting."
    ],
    time: 50,
    likes: 256,
    rating: 4.9
  },
  {
    id: "in-002",
    title: "Dal Lentil Shorva",
    title_ru: "Дал (чечевичный суп)",
    title_en: "Dal (Lentil Soup)",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80",
    category: "Tushlik",
    cuisine: "Hind",
    ingredients: [
      "300 g sariq yoki qizil yasmiq",
      "1 ta piyoz",
      "3 ta pomidor",
      "2 ta sarimsoq tishi",
      "1 choy qoshiq kuruma",
      "1 choy qoshiq koriander",
      "1 choy qoshiq zira",
      "Tuz, limon",
      "Maydanoz"
    ],
    steps: [
      "Yasmiqni yuving va 30 daqiqa iviting.",
      "Piyozni moyda qovuring, sarimsoq va spetsiyalar soling.",
      "Pomidorni qo'shib 5 daqiqa qovuring.",
      "Yasmiq va 600 ml suv solib 25 daqiqa pishiring.",
      "Limon sharbati va tuz solib torting."
    ],
    time: 40,
    likes: 143,
    rating: 4.5
  },
  // ──────────────────────────────────────────────────────────────
  // TURK TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "tr-001",
    title: "Turk Mantisi",
    title_ru: "Турецкие манты",
    title_en: "Turkish Manti",
    image: "https://images.unsplash.com/photo-1614548539924-5c1f205b3747?w=600&q=80",
    category: "Tushlik",
    cuisine: "Turk",
    ingredients: [
      "300 g un",
      "2 ta tuxum",
      "1 choy qoshiq tuz",
      "300 g mol go'shti (maydalangan)",
      "1 ta piyoz",
      "200 g yogurt",
      "3 ta sarimsoq tishi",
      "Qizil chili sousi",
      "Yog'da qovurilgan qizil qalampir"
    ],
    steps: [
      "Un va tuxum bilan qattiq xamir qurib, 20 daqiqa turib yotsın.",
      "Go'sht va piyozdan ichlik tayyorlang.",
      "Xamirni juda yupqa yoyib, kichik kvadratlarga kesing.",
      "Har biriga inch ichlik solib, turt burchagidan o'rab uguling.",
      "Sho'rlangan suvda 10 daqiqa qaynatib pishiring.",
      "Sarimsoqli yogurt va qizil yog'li sous bilan torting."
    ],
    time: 60,
    likes: 189,
    rating: 4.7
  },
  {
    id: "tr-002",
    title: "Adana Kabob",
    title_ru: "Кебаб Адана",
    title_en: "Adana Kebab",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "Turk",
    ingredients: [
      "700 g qo'y go'shti (maydalangan)",
      "1 ta piyoz (rendalangan)",
      "2 ta sarimsoq tishi",
      "1 choy qoshiq qizil chili",
      "1 choy qoshiq sumak",
      "Tuz, qalampir",
      "Ko'k piyoz, pomidor, lavaş"
    ],
    steps: [
      "Go'sht, piyoz, sarimsoq va spetsiyalarni yaxshi aralashtirib yoging.",
      "Aralashmani 1 soat sovutgichda turib yotsın.",
      "Shampurga o'rab, oval shaklida yasang.",
      "Grill yoki mangalda 12-15 daqiqa qovuring.",
      "Lavaş, pomidor va ko'k piyoz bilan torting."
    ],
    time: 80,
    likes: 201,
    rating: 4.8
  },
  // ──────────────────────────────────────────────────────────────
  // YAPON TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "jp-001",
    title: "Sushi Roli",
    title_ru: "Суши-роллы",
    title_en: "Sushi Rolls",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    category: "Tushlik",
    cuisine: "Yapon",
    ingredients: [
      "300 g sushi guruchi",
      "6 ta nori (dengiz o'ti varaq)",
      "100 g semga yoki krevetek",
      "1 ta avokado",
      "1 ta bodring",
      "3 osh qoshiq sirka (guruch uchun)",
      "Vasabi, soya sousi, zanjabil",
      "Krem pishloq (ixtiyoriy)"
    ],
    steps: [
      "Guruchni pishirib, sirka, qand va tuz bilan aralashtiring.",
      "Bambu to'shak ustiga nori qo'ying, guruchni yoyib soling.",
      "Avokado, bodring va semgani chiziq qilib joylashtiring.",
      "Nori bilan birga bambu to'shakni ehtiyotlik bilan o'rang.",
      "O'tkir pichoq bilan 2 sm qalinlikda kesing.",
      "Vasabi va soya sousi bilan torting."
    ],
    time: 50,
    likes: 223,
    rating: 4.8
  },
  {
    id: "jp-002",
    title: "Ramen",
    title_ru: "Рамен",
    title_en: "Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    category: "Tushlik",
    cuisine: "Yapon",
    ingredients: [
      "400 g ramen makaron",
      "1 l cho'chqa yoki tovuq sho'rvasi",
      "2 ta yumshoq qaynatilgan tuxum",
      "200 g cho'chqa go'shti (yopilgan)",
      "100 g bambuk pishloq",
      "Ko'k piyoz",
      "Nori, tsuyu sousi",
      "Miso yoki soy sousi"
    ],
    steps: [
      "Sho'rvani kaynating, soy sousi yoki miso soling.",
      "Makaronni alohida pishirib chiqaring.",
      "Tuxumni 7 daqiqa qaynatib, ikki bo'lakka kesing.",
      "Chuqur kosacha ichiga makaronni soling.",
      "Ustiga issiq sho'rva quying.",
      "Tuxum, go'sht bo'laklari, ko'k piyoz va nori bilan bezating."
    ],
    time: 30,
    likes: 246,
    rating: 4.8
  },
  // ──────────────────────────────────────────────────────────────
  // MEKSIKA TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "mx-001",
    title: "Takos (Tovuqli)",
    title_ru: "Такос с курицей",
    title_en: "Chicken Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    category: "Tushlik",
    cuisine: "Meksika",
    ingredients: [
      "500 g tovuq go'shti",
      "8 ta kichik makkajo'xori tortilla",
      "1 ta avokado",
      "100 g qizil karam",
      "100 g koriander",
      "1 ta limon",
      "Taco spetsiyasi",
      "Salsa sousi",
      "Smetana"
    ],
    steps: [
      "Tovuqni taco spetsiyasida pishirib, tolalarga b'lang.",
      "Avokadoni ezip limon sharbati soling (guacamole).",
      "Tortillalarni quruq tovada isitin.",
      "Har bir tortillaga tovuq, karam, guacamole, salsa va smetana soling.",
      "Koriander va limon bilan torting."
    ],
    time: 25,
    likes: 178,
    rating: 4.6
  },
  // ──────────────────────────────────────────────────────────────
  // KOREYS TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "kr-001",
    title: "Bibimbap",
    title_ru: "Бибимбап",
    title_en: "Bibimbap",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&q=80",
    category: "Tushlik",
    cuisine: "Koreys",
    ingredients: [
      "2 stakan pishirilgan guruch",
      "100 g mol go'shti (ingichka kesilgan)",
      "2 ta tuxum",
      "100 g isbitek (sieved)",
      "1 ta sabzi (ingichka kesilgan)",
      "100 g sıpanax",
      "50 g qo'ziqorin",
      "3 osh qoshiq gochujang sousi",
      "Sezam moyi, soya sousi"
    ],
    steps: [
      "Har bir sabzavotni alohida sezam moyi va tuzda bir oz qovuring.",
      "Go'shtni soya sousi va sarimsoqda marinatlang va qovuring.",
      "Tuxumni qovurib yumurtlang (sarisi suyuq qolsin).",
      "Guruchni katta kosaga soling.",
      "Go'sht, sabzavotlarni va tuxumni ustiga chiroyli joylashtirib soling.",
      "Gochujang sousi quyi, aralashtiring va yeng."
    ],
    time: 35,
    likes: 194,
    rating: 4.7
  },
  // ──────────────────────────────────────────────────────────────
  // YANGI O'ZBEK VA DESERT TAOMLARI
  // ──────────────────────────────────────────────────────────────
  {
    id: "uz-013",
    title: "Chuchvara",
    title_ru: "Чучвара",
    title_en: "Chuchvara (Boiled Dumplings)",
    image: "https://images.unsplash.com/photo-1534353341740-c3e74ef17bf1?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "2 ta tuxum",
      "100 ml suv",
      "300 g mol go'shti (maydalangan)",
      "2 ta piyoz",
      "Tuz, qalampir, zira",
      "Qatiq va shirin chili sousi"
    ],
    steps: [
      "Un, tuxum va suvdan qattiq xamir qurib, 15 daqiqa turib yotsın.",
      "Go'sht, piyoz, tuz, qalampir va ziradan ichlik tayyorlang.",
      "Xamirni yupqa yoyib, kichik kvadratlarga kesing (5x5 sm).",
      "Har biriga bir kichik qoshiq ichlik solib, uchburchak yoping va ikki uchini ulang.",
      "Qaynab turgan sho'rlangan suvda 7 daqiqa qaynatib pishiring.",
      "Qatiq yoki sho'rva ichida torting."
    ],
    time: 45,
    likes: 156,
    rating: 4.6
  },
  {
    id: "uz-014",
    title: "Sumalak",
    title_ru: "Сумалак",
    title_en: "Sumalak (Wheat Sprout Halva)",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    category: "Desert",
    cuisine: "O'zbek",
    ingredients: [
      "500 g unib chiqqan bug'doy",
      "200 g un",
      "100 ml o'simlik moyi",
      "3 litr suv"
    ],
    steps: [
      "Unib chiqqan bug'doyni yaxshilab yuvib, suv bilan birga maydalang.",
      "Süzib sharbatini ajrating (jami 2 litr bo'lishi kerak).",
      "Moyni qozonda qizdiring, uni solib biroz qovuring.",
      "Bug'doy sharbatini qo'shib, doimiy aralashtiring.",
      "Eng past olovda 8-10 soat qaynatib pishiring. Qoziqdek quyuqlashishi kerak.",
      "Yuqoriga ko'tarilganda tayyor. Sovuq holda torting."
    ],
    time: 600,
    likes: 67,
    rating: 4.2
  },
  {
    id: "uz-015",
    title: "Qatiq (Uy Qatiqi)",
    title_ru: "Домашний катык (йогурт)",
    title_en: "Katyk (Homemade Yogurt)",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "1 litr sut",
      "2 osh qoshiq tayyor qatiq (uychi)"
    ],
    steps: [
      "Sutni 85°C gacha qizdiring (bug' chiqmas, lekin qaynamasin).",
      "So'ng 42-45°C gacha soviting.",
      "Qatiqni oz sut bilan aralashtiring, so'ng umumiy sutga soling.",
      "Issiq joyda (termos yoki yostiq ostida) 6-8 soat turib yotsın.",
      "Sovutgichga qo'ying. Ertasi kuni tayyor."
    ],
    time: 480,
    likes: 89,
    rating: 4.3
  },
  {
    id: "uz-016",
    title: "Domlama (Kabob Qozonida)",
    title_ru: "Дамлама",
    title_en: "Damlama (Slow Cooked Stew)",
    image: "https://images.unsplash.com/photo-1585644143527-72ef58a6023d?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "O'zbek",
    ingredients: [
      "1 kg qo'y yoki mol go'shti",
      "5 ta kartoshka",
      "3 ta sabzi",
      "2 ta piyoz",
      "2 ta pomidor",
      "1 ta kichik karam boshi",
      "Tuz, zira, koriander, qalampir"
    ],
    steps: [
      "Qozon tubiga go'shtni yiring tartibda joylashtiring.",
      "Piyozni xalqa qilib ustiga soling.",
      "Sabzi, kartoshka, pomidor ketma-ket qavatlab soling.",
      "Karam barglarini eng ustiga yoting.",
      "Tuz va spetsiyalar sepib qopqoqni mahkam yoping.",
      "Eng past olovda 1.5-2 soat dim qiling. Suv qo'shmang."
    ],
    time: 130,
    likes: 147,
    rating: 4.6
  },
  {
    id: "fr-001",
    title: "Krep (Fransuz Blini)",
    title_ru: "Французские блины (крепы)",
    title_en: "French Crêpes",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80",
    category: "Nonushta",
    cuisine: "Fransiya",
    ingredients: [
      "200 g un",
      "3 ta tuxum",
      "500 ml sut",
      "30 g sariyog' (eritilgan)",
      "1 choy qoshiq qand",
      "Bir oz tuz",
      "Vanilin"
    ],
    steps: [
      "Tuxum, sut, un, qand, tuz va vanilinni blender bilan aralashtiring.",
      "Eritilgan sariyog' soling. 30 daqiqa turib yotsın.",
      "Yupqa tovani yaxshi qizdiring va bir oz moy surtib oling.",
      "Kichik ko'za xatiradan xamir quying va tovani aylantiring.",
      "Har ikki tomonini 1 daqiqadan qovuring.",
      "Murabbo, qaymoq yoki lemón bilan torting."
    ],
    time: 30,
    likes: 212,
    rating: 4.7
  },
  {
    id: "gr-001",
    title: "Gretsiya Salati",
    title_ru: "Греческий салат",
    title_en: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
    category: "Tushlik",
    cuisine: "Yunoniston",
    ingredients: [
      "3 ta pomidor",
      "1 ta bodring",
      "1 ta qizil piyoz",
      "100 g zaitun (qora)",
      "200 g feta pishloq",
      "Zaytun moyi",
      "Limon sharbati",
      "Oregano, tuz, qalampir"
    ],
    steps: [
      "Pomidor va bodringni yirik bo'laklarga kesing.",
      "Qizil piyozni yarimdaira shaklida to'g'rang.",
      "Hamma sabzavotlarni katta idishga soling.",
      "Zaitunni soling.",
      "Feta pishloqni bo'laklarga kesib ustiga joylashtiring.",
      "Zaytun moyi, limon sharbati, oregano, tuz va qalampir quyib torting."
    ],
    time: 10,
    likes: 198,
    rating: 4.7
  },
  {
    id: "des-001",
    title: "Shokoladli Keks",
    title_ru: "Шоколадный кекс",
    title_en: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    category: "Desert",
    cuisine: "Fransiya",
    ingredients: [
      "200 g un",
      "200 g qand",
      "3 ta tuxum",
      "100 g sariyog'",
      "100 g qora shokolad",
      "50 g kakao kukuni",
      "1 choy qoshiq qabartma kukuni",
      "100 ml sut"
    ],
    steps: [
      "Pechni 180°C ga qizdiring.",
      "Shokolad va sariyog'ni bulatib eriiting.",
      "Qand va tuxumlarni ko'pirtiring.",
      "Eritilgan shokolad va sut soling.",
      "Un, kakao, qabartma kukuni aralashtirib soling.",
      "Moy surtilgan muffin qolipiga quying.",
      "35-40 daqiqa pishiring. Sovigandan keyin torting."
    ],
    time: 55,
    likes: 231,
    rating: 4.8
  },
  {
    id: "des-002",
    title: "Tiramisu",
    title_ru: "Тирамису",
    title_en: "Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    category: "Desert",
    cuisine: "Italiya",
    ingredients: [
      "300 g Savoiardi (barmoq biskvit)",
      "500 g mascarpone",
      "4 ta tuxum sarisi",
      "100 g qand",
      "300 ml kuchli kofe",
      "Kakao kukuni",
      "50 ml rom (ixtiyoriy)"
    ],
    steps: [
      "Kofeni qaynating va soviting. Rom soling.",
      "Tuxum sarisi va qandni oq ko'pik hosil bo'lguncha ko'pirtiring.",
      "Mascarpone krémini solib aralashtiring.",
      "Biskvitlarni kofe bilan ho'llang va idishga qatlam qiling.",
      "Ustiga mascarpone kremini yoing.",
      "Yana biskvit va krem qatlami qiling.",
      "Kakao sepib, 4 soat sovutgichda turib yotsın."
    ],
    time: 30,
    likes: 289,
    rating: 4.9
  },
  {
    id: "uz-017",
    title: "Tandir Tovuq",
    title_ru: "Курица в тандыре",
    title_en: "Tandoor Chicken",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "O'zbek",
    ingredients: [
      "1 ta butun tovuq",
      "200 g qatiq",
      "4 ta sarimsoq tishi",
      "2 osh qoshiq zira",
      "1 osh qoshiq kuruma",
      "Tuz, qizil qalampir",
      "Limon sharbati"
    ],
    steps: [
      "Tovuqni yaxshi yuving va quritib oling.",
      "Qatiq, sarimsoq, zira, kuruma, tuz va limon sharbatini aralashtiring.",
      "Tovuqni ichidan ham tashqaridan ham marinadga beling.",
      "6-8 soat sovutgichda marinadlab yotsın.",
      "Tandirga yoki 200°C da 1-1.5 soat pishiring.",
      "Non va sabzavotlar bilan torting."
    ],
    time: 90,
    likes: 167,
    rating: 4.7
  },
  {
    id: "it-004",
    title: "Bruschetta",
    title_ru: "Брускетта",
    title_en: "Bruschetta",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80",
    category: "Nonushta",
    cuisine: "Italiya",
    ingredients: [
      "6 ta italyan non dilimi",
      "4 ta pomidor",
      "3 ta sarimsoq tishi",
      "Yangi reyhan",
      "Zaytun moyi",
      "Tuz, qalampir",
      "Balzamik sirka (ixtiyoriy)"
    ],
    steps: [
      "Non dilimlarini grill yoki pechda qovouring.",
      "Issiq non ustini sarimsoq tishi bilan ishqalang.",
      "Pomidorni mayda to'g'rang, reyhan va zaytun moyi soling.",
      "Tuz va qalampir qo'shing.",
      "Non ustiga pomidor aralashmasini soling.",
      "Balzamik sirka tomizib torting."
    ],
    time: 15,
    likes: 145,
    rating: 4.5
  },
  {
    id: "uz-018",
    title: "Qovoq Ko'porisi",
    title_ru: "Оладьи из тыквы",
    title_en: "Pumpkin Pancakes",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "500 g qovoq (qo'r qilingan)",
      "300 g un",
      "2 ta tuxum",
      "100 ml sut",
      "1 osh qoshiq qand",
      "Tuz, o'simlik moyi"
    ],
    steps: [
      "Qovoqni rendalab, suvini siqib oling.",
      "Tuxum, sut, qand va tuzni aralashtiring.",
      "Qovoq va un solib yaxshi aralashtirib xamir tayyorlang.",
      "Tovada moyda har tomonini qovouring.",
      "Qatiq yoki smetana bilan torting."
    ],
    time: 30,
    likes: 112,
    rating: 4.4
  },
  {
    id: "uz-019",
    title: "Misol Kabob (Tovuq)",
    title_ru: "Кебаб из курицы",
    title_en: "Chicken Shish Kebab",
    image: "https://images.unsplash.com/photo-1529050629-df8273b70a6c?w=600&q=80",
    category: "Kechki ovqat",
    cuisine: "O'zbek",
    ingredients: [
      "1 kg tovuq go'shti (kubik)",
      "200 g qatiq",
      "3 ta sarimsoq tishi",
      "1 ta limon",
      "Zira, paprika, tuz, qalampir",
      "Bolgar qalampiri (shampurga)"
    ],
    steps: [
      "Tovuqni qatiq, sarimsoq, limon sharbati va spetsiyalarda 2 soat marinatlang.",
      "Shampurlarga tovuq va bolgar qalampirini galma-gal tering.",
      "Grill yoki mangalda 10-12 daqiqa qovuring.",
      "Non va sabzavotlar bilan torting."
    ],
    time: 135,
    likes: 189,
    rating: 4.7
  },
  {
    id: "mx-002",
    title: "Gvakamole",
    title_ru: "Гуакамоле",
    title_en: "Guacamole",
    image: "https://images.unsplash.com/photo-1541528551664-f544f6e5d1d8?w=600&q=80",
    category: "Nonushta",
    cuisine: "Meksika",
    ingredients: [
      "3 ta pishgan avokado",
      "1 ta limon (sharbati)",
      "1 ta pomidor (mayda to'g'ralgan)",
      "1/2 ta qizil piyoz",
      "Koriander",
      "Tuz, qalampir",
      "1 ta jalapeno chili (ixtiyoriy)"
    ],
    steps: [
      "Avokadoni ikki bo'lakka bo'lib, shaqasini olib, go'shtini idishga chiqaring.",
      "Vil yordamida ezib, lekin o'ta silliq bo'lmasin.",
      "Limon sharbatini quying.",
      "Pomidor, piyoz, koriander va jalapeño soling.",
      "Tuz va qalampir solib aralashtiring.",
      "Darhol tortilla chiпslari bilan torting."
    ],
    time: 10,
    likes: 176,
    rating: 4.6
  },
  {
    id: "uz-020",
    title: "Ko'za Sho'rva",
    title_ru: "Суп в горшочке",
    title_en: "Pot Soup (Koza Shorva)",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "400 g qo'y go'shti (bo'laklangan)",
      "3 ta kartoshka",
      "2 ta piyoz",
      "2 ta pomidor",
      "Sarimsoq, tuz, zira",
      "Ko'k piyoz va koriander"
    ],
    steps: [
      "Ko'za sho'rva idishlariga go'sht bo'laklarini soling.",
      "Piyoz, pomidor va kartoshkani ustiga soling.",
      "Sarimsoq, tuz va zira soling.",
      "Suv quying (go'shtning ustidan 2 sm baland).",
      "Ko'zani non xamiri bilan yopib, 170°C da 1.5 soat pishiring.",
      "Ko'k piyoz va koriander bilan torting."
    ],
    time: 110,
    likes: 134,
    rating: 4.5
  },
  {
    id: "it-005",
    title: "Panna Kotta",
    title_ru: "Панна Котта",
    title_en: "Panna Cotta",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    category: "Desert",
    cuisine: "Italiya",
    ingredients: [
      "500 ml qaymaq (35%)",
      "60 g qand",
      "10 g jelatin (varaqcha)",
      "Vanilin",
      "Meva sousi (servis uchun)"
    ],
    steps: [
      "Jelatinni sovuq suvda 10 daqiqa iviting.",
      "Qaymaqni qand va vanilin bilan qaynating.",
      "Olovdan turib, ivitilgan jelatinni soling va eritib aralashtiring.",
      "Qoliplarga quyib, 4 soat sovutgichda turib yotsın.",
      "Qoliplardan chiqarib, meva sousi bilan torting."
    ],
    time: 20,
    likes: 215,
    rating: 4.8
  },
  {
    id: "uz-021",
    title: "Sharoba (Ichimlik)",
    title_ru: "Шарбат (напиток)",
    title_en: "Sharoba (Refreshing Drink)",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    category: "Ichimlik",
    cuisine: "O'zbek",
    ingredients: [
      "1 litr suv",
      "200 g qand",
      "1 ta limon",
      "100 g o'rik yoki qulupnay",
      "Nanalar"
    ],
    steps: [
      "Qandni suvda eritib sirop tayyorlang.",
      "Limon sharbatini soling.",
      "O'rik yoki qulupnayni ezip sharbatini chiqaring.",
      "Meva sharbatini siropga soling.",
      "Muzlab, nanalar bilan torting."
    ],
    time: 15,
    likes: 98,
    rating: 4.3
  },
  {
    id: "uz-022",
    title: "Gaz (O'zbek Non Qatlama)",
    title_ru: "Катлама (слоёная лепёшка)",
    title_en: "Katlama (Layered Flatbread)",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&q=80",
    category: "Nonushta",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "250 ml suv",
      "1 choy qoshiq tuz",
      "100 g sariyog' (eritilgan)",
      "Ko'k piyoz"
    ],
    steps: [
      "Un, suv va tuzdan elastik xamir qurib, 20 daqiqa turib yotsın.",
      "Xamirni yupqa qilib yoyib, eritilgan sariyog' surtib, ko'k piyoz sepib o'rang.",
      "O'rash to'g'ridan dumaloq shaklga keltiring.",
      "Yana yupqa yoyib, yana sariyog' surtib, bir necha marta takrorlang.",
      "Quruq tovada har tomonini qovuring.",
      "Issiq holda torting."
    ],
    time: 40,
    likes: 167,
    rating: 4.6
  },
  {
    id: "jp-003",
    title: "Miso Shorva",
    title_ru: "Мисо-суп",
    title_en: "Miso Soup",
    image: "https://images.unsplash.com/photo-1547592183-23fb939c3c16?w=600&q=80",
    category: "Nonushta",
    cuisine: "Yapon",
    ingredients: [
      "4 stakan dashi sho'rvasi",
      "3 osh qoshiq miso pasta",
      "100 g tofu (kubik)",
      "2 ta ko'k piyoz",
      "1 ta nori varaq (tasma)"
    ],
    steps: [
      "Dashi sho'rvani qaynating.",
      "Miso pastasini bir oz iliq sho'rvada eritib soling.",
      "Tofuni kubik shaklda soling.",
      "Ko'k piyoz va nori tasmalari soling.",
      "Qaynamasdan isitib torting."
    ],
    time: 15,
    likes: 145,
    rating: 4.5
  },
  {
    id: "uz-023",
    title: "Navruz Ko'ji",
    title_ru: "Навруз кугири",
    title_en: "Navruz Ko'ji (Salty Meat Dumplings)",
    image: "https://images.unsplash.com/photo-1534353341740-c3e74ef17bf1?w=600&q=80",
    category: "Tushlik",
    cuisine: "O'zbek",
    ingredients: [
      "500 g un",
      "300 ml suv",
      "400 g mol go'shti",
      "3 ta piyoz",
      "Tuz, zira"
    ],
    steps: [
      "Xamir tayyorlab, dam oldiring.",
      "Go'sht va piyozdan yaxshi aralashtirilgan ichlik tayyorlang.",
      "Xamirni qatlamlarga bo'lib ichlik soling va yoping.",
      "Qozon ichida qovuring yoki pishiring.",
      "Issiq holda torting."
    ],
    time: 60,
    likes: 89,
    rating: 4.2
  }
];

/**
 * getInitialRecipes() → returns RECIPES array
 * Used by app.js to seed localStorage on first run.
 */
function getInitialRecipes() {
  return RECIPES;
}

//資料來源：政府資料開放平臺「臺灣地區地名資料_行政區域類」

const DistrictList = {
    全部: ["全部"],
    // 北部
    基隆市: ["全部", "仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"],
    台北市: ["全部", "中正區", "萬華區", "大同區", "中山區", "松山區", "大安區", "信義區", "內湖區", "南港區", "士林區", "北投區", "文山區"],
    新北市: ["全部",
      "板橋區",
      "三重區",
      "中和區",
      "永和區",
      "新莊區",
      "新店區",
      "土城區",
      "蘆洲區",
      "汐止區",
      "樹林區",
      "鶯歌區",
      "三峽區",
      "淡水區",
      "瑞芳區",
      "五股區",
      "泰山區",
      "林口區",
      "八里區",
      "深坑區",
      "石碇區",
      "坪林區",
      "三芝區",
      "石門區",
      "金山區",
      "萬里區",
      "平溪區",
      "雙溪區",
      "貢寮區",
      "烏來區",
    ],
    宜蘭縣: ["全部",
      "宜蘭市",
      "頭城鎮",
      "礁溪鄉",
      "壯圍鄉",
      "員山鄉",
      "羅東鎮",
      "三星鄉",
      "大同鄉",
      "五結鄉",
      "冬山鄉",
      "蘇澳鎮",
      "南澳鄉",
    ],
    桃園市: ["全部",
      "中壢區",
      "平鎮區",
      "龍潭區",
      "楊梅區",
      "新屋區",
      "觀音區",
      "桃園區",
      "龜山區",
      "八德區",
      "大溪區",
      "復興區",
      "大園區",
      "蘆竹區",
    ],
    新竹市: ["全部","東區", "北區", "香山區"],
    新竹縣: ["全部",
      "竹北市",
      "湖口鄉",
      "新豐鄉",
      "新埔鎮",
      "關西鎮",
      "芎林鄉",
      "寶山鄉",
      "竹東鎮",
      "五峰鄉",
      "橫山鄉",
      "尖石鄉",
      "北埔鄉",
      "峨眉鄉",
    ],
    // 中部
    苗栗縣: ["全部",
      "苗栗市",
      "頭份市",
      "竹南鎮",
      "後龍鎮",
      "通霄鎮",
      "苑裡鎮",
      "卓蘭鎮",
      "造橋鄉",
      "西湖鄉",
      "頭屋鄉",
      "公館鄉",
      "銅鑼鄉",
      "三義鄉",
      "大湖鄉",
      "獅潭鄉",
      "三灣鄉",
      "南庄鄉",
      "泰安鄉",
    ],
    台中市: ["全部",
      "中區",
      "東區",
      "南區",
      "西區",
      "北區",
      "北屯區",
      "西屯區",
      "南屯區",
      "太平區",
      "大里區",
      "霧峰區",
      "烏日區",
      "豐原區",
      "后里區",
      "石岡區",
      "東勢區",
      "和平區",
      "新社區",
      "潭子區",
      "大雅區",
      "神岡區",
      "大肚區",
      "沙鹿區",
      "龍井區",
      "梧棲區",
      "清水區",
      "大甲區",
      "外埔區",
      "大安區",
    ],
    彰化縣: ["全部",
      "彰化市",
      "員林市",
      "和美鎮",
      "鹿港鎮",
      "溪湖鎮",
      "二林鎮",
      "田中鎮",
      "北斗鎮",
      "花壇鄉",
      "芬園鄉",
      "大村鄉",
      "永靖鄉",
      "伸港鄉",
      "線西鄉",
      "福興鄉",
      "秀水鄉",
      "埔心鄉",
      "埔鹽鄉",
      "大城鄉",
      "芳苑鄉",
      "竹塘鄉",
      "社頭鄉",
      "二水鄉",
      "田尾鄉",
      "埤頭鄉",
      "溪州鄉",
    ],
    南投縣: ["全部",
      "南投市",
      "埔里鎮",
      "草屯鎮",
      "竹山鎮",
      "集集鎮",
      "名間鄉",
      "鹿谷鄉",
      "中寮鄉",
      "魚池鄉",
      "國姓鄉",
      "水里鄉",
      "信義鄉",
      "仁愛鄉",
    ],
    雲林縣: ["全部",
      "斗六市",
      "斗南鎮",
      "虎尾鎮",
      "西螺鎮",
      "土庫鎮",
      "北港鎮",
      "古坑鄉",
      "大埤鄉",
      "莿桐鄉",
      "林內鄉",
      "二崙鄉",
      "崙背鄉",
      "麥寮鄉",
      "東勢鄉",
      "褒忠鄉",
      "台西鄉",
      "元長鄉",
      "四湖鄉",
      "口湖鄉",
      "水林鄉",
    ],
    // 南部
    嘉義縣: ["全部",
      "太保市",
      "朴子市",
      "布袋鎮",
      "大林鎮",
      "民雄鄉",
      "溪口鄉",
      "新港鄉",
      "六腳鄉",
      "東石鄉",
      "義竹鄉",
      "鹿草鄉",
      "水上鄉",
      "中埔鄉",
      "竹崎鄉",
      "梅山鄉",
      "番路鄉",
      "大埔鄉",
      "阿里山鄉",
    ],
    嘉義市: ["全部","東區", "西區"],
    台南市: ["全部",
      "中西區",
      "東區",
      "南區",
      "北區",
      "安平區",
      "安南區",
      "永康區",
      "歸仁區",
      "新化區",
      "左鎮區",
      "玉井區",
      "楠西區",
      "南化區",
      "仁德區",
      "關廟區",
      "龍崎區",
      "官田區",
      "麻豆區",
      "佳里區",
      "西港區",
      "七股區",
      "將軍區",
      "學甲區",
      "北門區",
      "新營區",
      "後壁區",
      "白河區",
      "東山區",
      "六甲區",
      "下營區",
      "柳營區",
      "鹽水區",
      "善化區",
      "大內區",
      "山上區",
      "新市區",
      "安定區",
    ],
    高雄市: ["阿蓮區", "橋頭區", "桃源區", "那瑪夏區", "內門區", "茂林區", "六龜區", "甲仙區", "杉林區", "楠梓區", "梓官區", "旗山區", "美濃區", "彌陀區", "茄萣區", "永安區", "路竹區", "湖內區", "田寮區", "左營區", "燕巢區", "岡山區", "大樹區", "大社區", "仁武區", "鳥松區", "林園區", "大寮區", "小港區", "前鎮區", "旗津區", "苓雅區", "前金區", "新興區", "鼓山區", "鹽埕區", "三民區", "鳳山區"],
    屏東縣: ["全部",
      "屏東市",
      "潮州鎮",
      "東港鎮",
      "恆春鎮",
      "萬丹鄉",
      "長治鄉",
      "麟洛鄉",
      "九如鄉",
      "里港鄉",
      "鹽埔鄉",
      "高樹鄉",
      "萬巒鄉",
      "內埔鄉",
      "竹田鄉",
      "新埤鄉",
      "枋寮鄉",
      "新園鄉",
      "崁頂鄉",
      "林邊鄉",
      "南州鄉",
      "佳冬鄉",
      "琉球鄉",
      "車城鄉",
      "滿州鄉",
      "枋山鄉",
      "三地門鄉",
      "霧台鄉",
      "瑪家鄉",
      "泰武鄉",
      "來義鄉",
      "春日鄉",
      "獅子鄉",
      "牡丹鄉",
    ],
    // 東部
    花蓮縣: ["全部",
      "花蓮市",
      "鳳林鎮",
      "玉里鎮",
      "新城鄉",
      "吉安鄉",
      "壽豐鄉",
      "光復鄉",
      "豐濱鄉",
      "瑞穗鄉",
      "富里鄉",
      "秀林鄉",
      "萬榮鄉",
      "卓溪鄉",
    ],
    台東縣: ["全部",
      "台東市",
      "成功鎮",
      "關山鎮",
      "卑南鄉",
      "鹿野鄉",
      "池上鄉",
      "東河鄉",
      "長濱鄉",
      "太麻里鄉",
      "大武鄉",
      "綠島鄉",
      "海端鄉",
      "延平鄉",
      "金峰鄉",
      "達仁鄉",
      "蘭嶼鄉",
    ],
    // 離島
    澎湖縣: ["全部","馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
    金門縣:["全部","金城鎮", "金沙鎮", "金寧鄉", "烈嶼鄉", "金湖鎮", "烏坵鄉"],
    連江縣:["全部","東引鄉", "莒光鄉", "北竿鄉", "南竿鄉"]

  };

  export default DistrictList
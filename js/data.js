/**
 * 初中历史复习全景时间线 - 核心数据
 * 包含：年份, 事件名, 类别, 内容详情, 历史意义, 核心要点, 类型(event/summary)
 */
const historyEvents = [
  {
    type: "summary",
    title: "一、中国古代史（七上 + 七下，约 170 万年前 —1840）",
    content: ""
  },
  {
    type: "summary",
    title: "（一）史前时期（远古 — 前 2070）",
    content: ""
  },
  {
    type: "event",
    year: "距今约 170 万年",
    title: "元谋人（云南，我国境内最早古人类）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "距今约 70 万 —20 万年",
    title: "北京人（周口店，打制石器、用天然火）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "距今约 3 万年",
    title: "山顶洞人（人工取火、磨光钻孔）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "距今约 7000 年",
    title: "河姆渡人（长江流域，种水稻、干栏式）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "距今约 6000 年",
    title: "半坡人（黄河流域，种粟、半地穴式）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "距今约 4000 多年",
    title: "炎黄部落联盟（涿鹿之战，华夏族形成）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（二）夏商周：早期国家与社会变革（前 2070— 前 221）",
    content: ""
  },
  {
    type: "event",
    year: "约前 2070 年",
    title: "夏朝建立（禹，第一个王朝，启世袭）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "约前 1600 年",
    title: "商汤灭夏，商朝建立（盘庚迁殷）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 1046 年",
    title: "牧野之战，西周建立（武王，镐京）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "西周",
    title: "分封制、宗法制、礼乐制",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 771 年",
    title: "西周灭亡（犬戎破镐京）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 770 年",
    title: "平王东迁洛邑，东周开始（春秋：前 770— 前 476；战国：前 475— 前 221）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "春秋",
    title: "王室衰微、诸侯争霸（齐桓公、晋文公、楚庄王）；铁农具、牛耕出现",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 356 年",
    title: "商鞅变法（秦）—— 确立县制、废井田、奖励耕战，为统一奠基",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "战国",
    title: "七雄并立；都江堰（李冰）；百家争鸣（儒墨道法）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（三）秦汉：统一多民族国家建立与巩固（前 221—220）",
    content: ""
  },
  {
    type: "event",
    year: "前 221 年",
    title: "秦统一六国（嬴政，咸阳，第一个统一多民族封建国家）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "秦朝",
    title: "皇帝制、三公九卿、郡县制；统一货币（半两钱）、度量衡、文字（小篆）；焚书坑儒；修长城、灵渠",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 209 年",
    title: "陈胜吴广起义（大泽乡，首次农民起义）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 207 年",
    title: "巨鹿之战（项羽）；秦亡",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "前 202 年",
    title: "西汉建立（刘邦，长安）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "西汉",
    title: "休养生息、文景之治；汉武帝大一统—— 推恩令、罢黜百家独尊儒术、盐铁专卖、北击匈奴；张骞通西域（前 138/119）；丝绸之路；前 60 年设西域都护（新疆正式入版图）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "公元 9 年",
    title: "王莽篡汉",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "25 年",
    title: "东汉建立（刘秀，洛阳，光武中兴）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "东汉",
    title: "蔡伦改进造纸术；张仲景（医圣）、华佗；184 年黄巾起义",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（四）三国两晋南北朝：政权分立与民族交融（220—589）",
    content: ""
  },
  {
    type: "event",
    year: "220 年",
    title: "魏建立（曹丕），东汉亡",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "221 年",
    title: "蜀建立（刘备）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "222 年",
    title: "吴建立（孙权），三国鼎立形成",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "230 年",
    title: "卫温到夷洲（台湾）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "266 年",
    title: "西晋建立（司马炎）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "280 年",
    title: "西晋统一全国",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "316 年",
    title: "西晋灭亡",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "317 年",
    title: "东晋建立（司马睿，建康）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "南北朝",
    title: "北魏孝文帝改革（485 年起）—— 迁都洛阳、汉化政策，北方民族大交融；江南地区开发；祖冲之圆周率、王羲之书法、云冈 / 龙门石窟",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（五）隋唐：繁荣与开放的时代（581—907）",
    content: ""
  },
  {
    type: "event",
    year: "581 年",
    title: "隋朝建立（杨坚，长安）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "589 年",
    title: "隋统一全国",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "隋朝",
    title: "大运河（605 年起）；科举制创立（隋文帝分科考试，隋炀帝设进士科）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "618 年",
    title: "隋亡；唐朝建立（李渊，长安）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "唐太宗（李世民）",
    title: "贞观之治；完善三省六部制、科举制；文成公主入藏（松赞干布）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "武则天",
    title: "中国唯一女皇帝，贞观遗风",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "唐玄宗",
    title: "开元盛世（鼎盛）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "唐朝",
    title: "曲辕犁、筒车；玄奘西行（天竺）、鉴真东渡（日本）；唐诗（李白、杜甫）；安史之乱（755—763）由盛转衰；藩镇割据、黄巢起义（875）；907 年唐亡",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（六）五代十国辽宋夏金元：民族关系发展与社会变化（907—1368）",
    content: ""
  },
  {
    type: "event",
    year: "907—960",
    title: "五代十国（政权分立，武将专权）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "960 年",
    title: "北宋建立（赵匡胤，陈桥兵变、杯酒释兵权）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "北宋",
    title: "重文轻武；辽（契丹）、西夏（党项）并立；澶渊之盟（宋辽）；王安石变法（1069）；经济重心南移（唐中期开始，南宋完成）；交子（世界最早纸币）；活字印刷（毕昇）、指南针应用航海、火药广泛用于军事",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1127 年",
    title: "靖康之变，北宋亡；南宋建立（赵构，临安）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "南宋",
    title: "岳飞抗金；宋金对峙",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1206 年",
    title: "成吉思汗统一蒙古",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1271 年",
    title: "元朝建立（忽必烈，大都）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1276 年",
    title: "元灭南宋，统一全国",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "元朝",
    title: "行省制度；设宣政院管辖西藏（正式入版图）；设澎湖巡检司管辖澎湖和琉球；民族交融（回族形成）；元曲（关汉卿）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（七）明清：统一多民族国家巩固与发展（1368—1840）",
    content: ""
  },
  {
    type: "event",
    year: "1368 年",
    title: "明朝建立（朱元璋，应天→北京）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "明朝",
    title: "废丞相、设内阁、厂卫特务机构；八股取士；郑和下西洋（1405—1433，七次，亚非 30 多国）；戚继光抗倭；1553 年葡萄牙占澳门；明长城、北京城（紫禁城）；李时珍《本草纲目》、宋应星《天工开物》、徐光启《农政全书》；明末农民起义（李自成，1644 年攻入北京，明亡）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1636 年",
    title: "后金改清（皇太极）",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1644 年",
    title: "清军入关，定都北京",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "清朝前期",
    title: "康乾盛世；巩固边疆——①台湾：1662 年郑成功收复台湾；1684 年清设台湾府，隶属福建省；②东北：雅克萨之战（1685/1686），1689 年《尼布楚条约》；③西藏：册封达赖、班禅，1727 年设驻藏大臣；④新疆：平定大小和卓叛乱，1762 年设伊犁将军；闭关锁国：1757 年只留广州十三行通商",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "detail",
    year: "1840 年",
    title: "鸦片战争爆发，中国近代史开始",
    category: "中国近代史",
    text: "标志中国开始沦为半殖民地半封建社会的历史进程。"
  },
  {
    type: "summary",
    title: "二、中国近代史（八上，1840—1949）",
    content: ""
  },
  {
    type: "summary",
    title: "（一）开始沦为半殖民地半封建社会（1840—1860）",
    content: ""
  },
  {
    type: "event",
    year: "1839 年 6 月",
    title: "林则徐虎门销烟（广州）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1840.6",
    title: "鸦片战争爆发（英军侵广州）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1842.8",
    title: "《南京条约》—— 割香港岛、赔款 2100 万银元、开广州等五口通商、协定关税；中国开始沦为半殖民地半封建社会，近代史开端",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1851",
    title: "太平天国运动（洪秀全，金田起义）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1856.10",
    title: "第二次鸦片战争爆发（英法联军）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1860",
    title: "火烧圆明园；《北京条约》—— 增开天津、割九龙司；半殖民地化程度进一步加深",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（二）近代化早期探索与民族危机加剧（1860—1901）",
    content: ""
  },
  {
    type: "event",
    year: "1861",
    title: "洋务运动开始（奕䜣、曾左李张）—— 自强（军事工业）、求富（民用企业）；中国近代化开端",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1894.7",
    title: "甲午中日战争爆发；黄海海战（邓世昌）；威海卫战役，北洋舰队覆没",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1895.4",
    title: "《马关条约》—— 割辽东半岛（后赎回）、台湾全岛及附属各岛屿、澎湖列岛；赔款 2 亿两；开放沙市、重庆、苏州、杭州；允许日本在通商口岸设厂；半殖民地化程度大大加深，列强瓜分中国狂潮",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1895",
    title: "公车上书（康梁），维新变法序幕",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1898.6.11—9.21",
    title: "戊戌变法（百日维新），资产阶级维新派，君主立宪尝试，思想启蒙",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1900.6",
    title: "八国联军侵华（英美俄日法德意奥）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1901.9",
    title: "《辛丑条约》—— 赔款 4.5 亿两；严禁人民反帝；拆毁大沽炮台，允许列强派兵驻扎北京到山海关铁路沿线；划定北京东交民巷为使馆界；清政府沦为帝国主义统治中国工具，中国完全沦为半殖民地半封建社会",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（三）资产阶级民主革命与中华民国建立（1901—1919）",
    content: ""
  },
  {
    type: "event",
    year: "1905",
    title: "中国同盟会成立（东京，孙中山），第一个全国性资产阶级革命政党，“三民主义”",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1911.4.27",
    title: "黄花岗起义（广州）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1911.10.10",
    title: "武昌起义（辛亥革命爆发）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1912.1.1",
    title: "中华民国成立（南京，孙中山任临时大总统）；《中华民国临时约法》（第一部资产阶级共和国宪法）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1912.2.12",
    title: "宣统帝退位，清朝灭亡，两千多年君主专制结束",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1912—1919",
    title: "北洋军阀统治（袁世凯复辟、军阀混战）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1915",
    title: "新文化运动开始（陈独秀《青年杂志》）—— 民主、科学，批判封建礼教，后期传播马克思主义，思想解放",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（四）新民主主义革命开始与国民革命（1919—1927）",
    content: ""
  },
  {
    type: "event",
    year: "1919.5.4",
    title: "五四运动（北京→上海）—— 外争主权、内除国贼；新民主主义革命开端，无产阶级登上历史舞台",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1921.7.23",
    title: "中共一大（上海→嘉兴南湖），中国共产党成立，开天辟地，革命面貌焕然一新",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1924",
    title: "国民党一大（广州），第一次国共合作正式形成",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1926",
    title: "北伐战争（广州出师），打倒列强、除军阀，基本推翻北洋军阀统治",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1927.4.12",
    title: "四一二反革命政变（蒋介石）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1927.7.15",
    title: "七一五反革命政变（汪精卫），第一次国共合作破裂，国民革命失败",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（五）土地革命战争（1927—1937）",
    content: ""
  },
  {
    type: "event",
    year: "1927.8.1",
    title: "南昌起义，打响武装反抗国民党反动派第一枪，人民军队诞生",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1927.8.7",
    title: "八七会议（汉口），土地革命、武装起义，毛泽东 “政权是枪杆子中取得”",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1927.9",
    title: "秋收起义（毛泽东），转向农村，创建井冈山根据地",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1927.10",
    title: "井冈山革命根据地建立，第一个农村革命根据地，开辟 “农村包围城市、武装夺取政权” 道路",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1931.9.18",
    title: "九一八事变（沈阳），日本侵华开端，东北沦陷",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1931.11",
    title: "中华苏维埃共和国临时中央政府（瑞金）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1934.10—1936.10",
    title: "红军长征——1935.1遵义会议（生死攸关转折点）；1936.10会宁会师，长征胜利，保存革命力量",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（六）抗日战争（1937—1945）",
    content: ""
  },
  {
    type: "event",
    year: "1937.7.7",
    title: "七七事变（卢沟桥事变），全面抗战爆发",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1937.8.13",
    title: "八一三事变（上海）",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1937.9",
    title: "国共第二次合作正式形成，抗日民族统一战线建立",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1937.12.13",
    title: "南京大屠杀，30 万以上同胞遇难",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1938. 春",
    title: "台儿庄战役（李宗仁），正面战场最大胜利",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1940.8",
    title: "百团大战（彭德怀），敌后战场最大规模战役",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1945.4",
    title: "中共七大（延安），确立毛泽东思想为指导思想，为抗战胜利和新民主主义革命胜利奠基",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1945.8.15",
    title: "日本宣布无条件投降；9.2 签署投降书，抗战胜利，近代以来首次完全胜利的民族解放战争，提高中国国际地位",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（七）解放战争（1945—1949）",
    content: ""
  },
  {
    type: "event",
    year: "1945.8—10",
    title: "重庆谈判（毛泽东、蒋介石），签署《双十协定》，争取和平民主",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1946.6",
    title: "国民党进攻中原解放区，全面内战爆发",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1947.3",
    title: "重点进攻陕甘宁、山东解放区",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1947.6",
    title: "刘邓大军千里跃进大别山，揭开战略反攻序幕",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1948.9—1949.1",
    title: "三大战役—— 辽沈、淮海、平津，基本消灭国民党主力",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1949.4.21",
    title: "渡江战役；4.23 解放南京，国民党政权垮台",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1949.10.1",
    title: "中华人民共和国成立，新民主主义革命胜利，中国现代史开始",
    category: "中国近代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "三、中国现代史（八下，1949— 至今）",
    content: ""
  },
  {
    type: "summary",
    title: "（一）新中国成立与巩固（1949—1956）",
    content: ""
  },
  {
    type: "event",
    year: "1949.10.1",
    title: "开国大典，新中国成立",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1950—1953",
    title: "抗美援朝（彭德怀，志愿军），保家卫国，提高国际地位",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1950—1952",
    title: "土地改革，废除封建土地制度，农民翻身做主人",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1953—1957",
    title: "一五计划，优先发展重工业，初步建立独立工业体系，鞍山钢铁、长春一汽、沈阳机床、鹰厦铁路、武汉长江大桥",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1953—1956",
    title: "三大改造—— 农业、手工业、资本主义工商业社会主义改造，1956 年底完成，社会主义制度确立，进入社会主义初级阶段",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（二）社会主义建设探索与失误（1956—1978）",
    content: ""
  },
  {
    type: "event",
    year: "1956",
    title: "中共八大，正确分析主要矛盾，集中力量发展社会生产力，良好开端",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1958",
    title: "大跃进、人民公社化运动，急于求成，左倾错误，国民经济严重困难",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1961",
    title: "调整、巩固、充实、提高，恢复发展经济",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1966—1976",
    title: "文化大革命，严重内乱，民主法制遭践踏，经济停滞倒退；1976.10 粉碎四人帮，文革结束",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1971",
    title: "中国恢复联合国合法席位（26 届联大）",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1972",
    title: "尼克松访华，中美《联合公报》发表，关系开始正常化",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（三）改革开放与社会主义现代化建设新时期（1978— 至今）",
    content: ""
  },
  {
    type: "event",
    year: "1978.12",
    title: "十一届三中全会，工作重心转移到经济建设，实行改革开放，新中国成立以来伟大转折，开启改革开放新时期",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1979",
    title: "中美正式建交",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1980",
    title: "设深圳、珠海、汕头、厦门 4 个经济特区（广东 3 个），对外开放窗口",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1982",
    title: "中共十二大，建设有中国特色社会主义",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1984",
    title: "开放 14 个沿海城市；城市经济体制改革全面展开（国企改革）",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1987",
    title: "中共十三大，社会主义初级阶段理论，基本路线（一个中心、两个基本点）",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1990",
    title: "开发开放上海浦东",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1992",
    title: "邓小平南方谈话，解放思想；中共十四大，建立社会主义市场经济体制目标",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1997",
    title: "中共十五大，邓小平思想确立为指导思想；7.1 香港回归（中英《南京条约》155 年后）",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1999",
    title: "12.20 澳门回归",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "2001",
    title: "加入 WTO，融入经济全球化；上海 APEC 会议",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "2012",
    title: "中共十八大，习近平当选总书记，中国特色社会主义进入新时代",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "2017",
    title: "中共十九大，习近平新时代中国特色社会主义思想确立为指导思想",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "2020",
    title: "全面建成小康社会",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "2021",
    title: "中国共产党成立 100 周年",
    category: "中国现代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "四、世界史（九上 + 九下，史前 — 至今）",
    content: ""
  },
  {
    type: "summary",
    title: "（一）古代亚非欧文明（史前 —5 世纪）",
    content: ""
  },
  {
    type: "event",
    year: "古代埃及",
    title: "约前 3500 年尼罗河流域，金字塔、象形文字",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "古代巴比伦",
    title: "约前 3500 年两河流域，《汉谟拉比法典》（前 18 世纪，现存最早成文法）、楔形文字",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "古代印度",
    title: "约前 2300 年印度河流域，种姓制度、佛教（前 6 世纪，乔达摩・悉达多）、阿拉伯数字",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "古代希腊",
    title: "西方文明之源；雅典民主政治（伯里克利，前 5 世纪，成年男性公民）；斯巴达寡头政治；荷马史诗、帕特农神庙、苏格拉底、柏拉图、亚里士多德",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "古代罗马",
    title: "前 509 年罗马共和国建立；前 2 世纪称霸地中海；前 27 年屋大维建立罗马帝国；395 年分裂为东西罗马；476 年西罗马灭亡，西欧奴隶社会结束；《十二铜表法》、基督教（1 世纪，耶稣）、罗马法、万神殿、凯旋门",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（二）中世纪的欧洲（5—15 世纪）",
    content: ""
  },
  {
    type: "event",
    year: "西欧封建制度",
    title: "封君封臣制（8 世纪查理・马特改革）；庄园经济（自给自足）；基督教会神权统治",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "城市兴起",
    title: "11 世纪后，意大利、法兰西、英格兰、德意志；市民阶层形成，早期资产阶级",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "拜占庭帝国",
    title: "395—1453，君士坦丁堡，《查士丁尼法典》，文艺复兴前文化保存",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（三）走向近代（14—17 世纪）",
    content: ""
  },
  {
    type: "event",
    year: "14—16 世纪",
    title: "文艺复兴（意大利→欧洲）—— 人文主义，但丁《神曲》、达・芬奇《蒙娜丽莎》、莎士比亚《哈姆雷特》，思想解放，为资本主义发展奠基",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "15—16 世纪",
    title: "新航路开辟—— 迪亚士（好望角）、达・伽马（印度）、哥伦布（美洲，1492）、麦哲伦（环球航行，1519—1522）；世界开始连为一个整体，世界市场雏形出现，欧洲商业革命、价格革命，促进资本主义发展",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "16—19 世纪",
    title: "早期殖民掠夺—— 葡萄牙、西班牙、荷兰、英国、法国；三角贸易（黑奴贸易），资本原始积累，促进欧洲资本主义，给亚非拉带来灾难",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（四）早期殖民掠夺与资本主义制度确立（17—18 世纪）",
    content: ""
  },
  {
    type: "event",
    year: "1640—1688",
    title: "英国资产阶级革命——1640 议会召开；1649 处死查理一世；1688 光荣革命；1689《权利法案》，君主立宪制确立",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1775—1783",
    title: "美国独立战争——1775 来克星顿枪声；1776.7.4《独立宣言》（杰斐逊，天赋人权、主权在民）；1781 约克镇投降；1783 英国承认美国独立；1787 宪法，联邦制、三权分立，世界第一部资产阶级成文宪法",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1789—1794",
    title: "法国大革命——1789.7.14 攻占巴士底狱；1789《人权宣言》（自由、平等、私有财产神圣不可侵犯）；1792 建立共和国，处死路易十六；1793 雅各宾派专政（罗伯斯庇尔）；摧毁法国封建制度，传播资产阶级自由民主思想，世界近代史转折点",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1799—1815",
    title: "拿破仑帝国——1799 雾月政变；1804 建立法兰西第一帝国，加冕称帝；《拿破仑法典》（民法典），资本主义社会立法规范；1815 滑铁卢战败，帝国覆灭",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（五）工业革命与马克思主义诞生（18 世纪 60 年代 —19 世纪中期）",
    content: ""
  },
  {
    type: "event",
    year: "18 世纪 60 年代 —19 世纪中期",
    title: "第一次工业革命（英国→世界）——1765 瓦特改良蒸汽机；1807 富尔顿汽船；1814 史蒂芬孙蒸汽机车；进入蒸汽时代；极大提高生产力，城市化加速，阶级分化（工业资产阶级、工业无产阶级），世界市场初步形成，东方从属于西方",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1848.2",
    title: "《共产党宣言》发表（马克思、恩格斯），马克思主义诞生，无产阶级斗争有了科学理论指导",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1871",
    title: "巴黎公社，第一个无产阶级政权，无产阶级建立政权的伟大尝试",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（六）第二次工业革命与列强瓜分世界（19 世纪 70 年代 —20 世纪初）",
    content: ""
  },
  {
    type: "event",
    year: "19 世纪 70 年代 —20 世纪初",
    title: "第二次工业革命——电力广泛应用（电气时代）；爱迪生电灯、贝尔电话、卡尔・本茨汽车、莱特兄弟飞机；化学工业、钢铁工业、内燃机；垄断组织出现（帝国主义）；资本主义世界市场最终形成",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "19 世纪末 20 世纪初",
    title: "帝国主义瓜分世界，亚非拉基本被瓜分完毕，资本主义世界体系最终形成",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（七）两次世界大战与凡尔赛 — 华盛顿体系（1914—1945）",
    content: ""
  },
  {
    type: "event",
    year: "1914.7.28—1918.11.11",
    title: "第一次世界大战—— 三国同盟（德、奥匈、意）、三国协约（英、法、俄）；1914 萨拉热窝事件；1916 凡尔登战役（绞肉机）；1917 美国参战、俄国十月革命退出；1918 德国投降，同盟国失败；给人类带来深重灾难，削弱帝国主义，促进民族解放运动，为十月革命创造条件",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1919—1922",
    title: "凡尔赛 — 华盛顿体系——1919 巴黎和会《凡尔赛和约》（制裁德国，瓜分殖民地）；1921—1922 华盛顿会议《九国公约》（重新瓜分远东太平洋，中国回复到列强共同支配局面）；暂时缓和帝国主义矛盾，埋下二战隐患",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1929—1933",
    title: "资本主义世界经济大危机—— 范围广、时间长、破坏性强；美国罗斯福新政（1933），国家干预经济，缓解危机，开创国家垄断资本主义模式；德日建立法西斯专政，欧亚战争策源地形成",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1939.9.1—1945.9.2",
    title: "第二次世界大战——1939 德国闪击波兰，英法宣战，全面爆发；1941.6 苏德战争爆发；1941.12.7 日本偷袭珍珠港，太平洋战争爆发，美国参战；1942.1《联合国家宣言》，世界反法西斯同盟建立；1942.7—1943.2 斯大林格勒战役（转折点）；1944.6.6 诺曼底登陆，开辟欧洲第二战场；1945.5.8 德国投降，欧洲战场结束；1945.8.15 日本投降，9.2 签署投降书，二战结束；人类空前浩劫，摧毁法西斯，削弱帝国主义，社会主义阵营形成，民族解放运动高涨，联合国成立（1945）",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（八）冷战与两极格局、多极化趋势（1945— 至今）",
    content: ""
  },
  {
    type: "event",
    year: "1947—1991",
    title: "冷战（美苏对峙）——1947 杜鲁门主义出台（冷战开始）；1947 马歇尔计划（援助西欧，控制西欧）；1949 北约成立（美欧军事同盟）；1955 华约成立（苏联东欧军事同盟），两极格局正式形成；1962 古巴导弹危机（冷战最激烈）；1989 东欧剧变；1991 苏联解体，冷战结束，两极格局瓦解",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "event",
    year: "1991 后",
    title: "多极化趋势加强——一超多强（一超：美国；多强：欧盟、日本、中国、俄罗斯）；经济全球化趋势（WTO、跨国公司）",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  },
  {
    type: "summary",
    title: "（九）第三次科技革命（20 世纪四五十年代 — 至今）",
    content: ""
  },
  {
    type: "event",
    year: "20 世纪四五十年代开始",
    title: "第三次科技革命——原子能、计算机、航天技术、生物工程；1946 电子计算机诞生；20 世纪 90 年代互联网普及；进入信息时代；极大推动生产力，改变生产生活方式，推动全球化，加剧国际竞争",
    category: "世界史",
    summary: "",
    significance: "",
    examPoints: "待补充"
  }
];

historyEvents.forEach((item) => {
  if (!item || item.type !== "event") return;
  if (item.summary) return;
  if (typeof item.title !== "string") return;

  const title = item.title.trim();
  const openParenIndex = title.indexOf("（");
  const closeParenIndex = title.lastIndexOf("）");

  if (openParenIndex > 0 && closeParenIndex === title.length - 1) {
    item.title = title.slice(0, openParenIndex).trim();
    item.summary = title.slice(openParenIndex + 1, closeParenIndex).trim();
    return;
  }

  const dashIndex = title.indexOf("——");
  if (dashIndex > 0) {
    item.title = title.slice(0, dashIndex).trim();
    item.summary = title.slice(dashIndex + 2).trim();
  }
});

function insertAfterTitle(title, items) {
  const index = historyEvents.findIndex((item) => item && item.title === title);
  if (index === -1) return;

  const existingKeys = new Set(
    historyEvents
      .filter((item) => item && (item.type === "event" || item.type === "detail" || item.type === "summary"))
      .map((item) => `${item.type}|${item.year || ""}|${item.title || ""}`)
  );

  const nextItems = items.filter((item) => {
    const key = `${item.type}|${item.year || ""}|${item.title || ""}`;
    if (existingKeys.has(key)) return false;
    existingKeys.add(key);
    return true;
  });

  if (nextItems.length) historyEvents.splice(index + 1, 0, ...nextItems);
}

function insertAfterMatch(matchFn, items) {
  const index = historyEvents.findIndex((item) => matchFn(item));
  if (index === -1) return;

  const existingKeys = new Set(
    historyEvents
      .filter((item) => item && (item.type === "event" || item.type === "detail" || item.type === "summary"))
      .map((item) => `${item.type}|${item.year || ""}|${item.title || ""}`)
  );

  const nextItems = items.filter((item) => {
    const key = `${item.type}|${item.year || ""}|${item.title || ""}`;
    if (existingKeys.has(key)) return false;
    existingKeys.add(key);
    return true;
  });

  if (nextItems.length) historyEvents.splice(index + 1, 0, ...nextItems);
}

insertAfterTitle("（一）史前时期（远古 — 前 2070）", [
  {
    type: "detail",
    year: "新石器时代",
    title: "私有制出现、贫富分化与早期国家产生",
    category: "中国古代史",
    text: "大汶口、良渚、陶寺遗址等反映社会分化与早期国家萌芽。"
  },
  {
    type: "detail",
    title: "原始农业兴起标志",
    category: "中国古代史",
    text: "农作物种植、家畜饲养、磨制石器、聚落。"
  },
  {
    type: "detail",
    title: "人文初祖",
    category: "中国古代史",
    text: "炎帝、黄帝。"
  }
]);

insertAfterTitle("商汤灭夏，商朝建立", [
  {
    type: "detail",
    title: "我国有文字可考的历史从商朝开始",
    category: "中国古代史",
    text: "甲骨文是已发现古代文字中年代最早、体系较为完整的文字。"
  }
]);

insertAfterTitle("西晋统一全国", [
  {
    type: "detail",
    title: "八王之乱与人口南迁",
    category: "中国古代史",
    text: "西晋八王之乱引发社会动荡，推动汉族人口南迁，促进江南开发。"
  }
]);

insertAfterTitle("红军长征", [
  {
    type: "event",
    year: "1936.12",
    title: "西安事变和平解决",
    category: "中国近代史",
    summary: "张学良、杨虎城发动西安事变，后和平解决。",
    significance: "揭开国共两党由内战到联合抗日的序幕，成为扭转时局的关键；十年内战基本停止，抗日民族统一战线初步形成。",
    examPoints: "关键：和平解决；人物：张学良、杨虎城。"
  }
]);

insertAfterMatch(
  (item) => item && item.type === "event" && item.category === "中国古代史" && item.year === "北宋" && typeof item.title === "string" && item.title.includes("交子"),
  [
    {
      type: "detail",
      year: "1069 年",
      title: "王安石变法",
      category: "中国古代史",
      text: "目的富国强兵，反映宋代改革探索。"
    },
    {
      type: "detail",
      title: "宋朝管理财权",
      category: "中国古代史",
      text: "宋太祖设置转运使，把地方财政收归中央。"
    }
  ]
);

insertAfterMatch(
  (item) => item && item.type === "event" && item.category === "中国古代史" && item.year === "明朝" && typeof item.title === "string" && item.title.includes("废丞相"),
  [
    {
      type: "detail",
      title: "明朝强化皇权措施",
      category: "中国古代史",
      text: "朱元璋废丞相制度和中书省，六部向皇帝负责；设锦衣卫；地方设三司；明成祖设内阁与东厂（厂卫）。"
    },
    {
      type: "detail",
      year: "1405—1433",
      title: "郑和下西洋",
      category: "中国古代史",
      text: "目的：提高明朝在国外的地位和威望；最远到非洲东海岸和红海沿岸。"
    },
    {
      type: "detail",
      title: "明长城",
      category: "中国古代史",
      text: "东起鸭绿江，西至嘉峪关。"
    },
    {
      type: "detail",
      title: "北京城布局特点",
      category: "中国古代史",
      text: "平面呈“凸”字形；沿中轴线对称；以宫殿为重心。"
    },
    {
      type: "detail",
      title: "明代经济发展表现",
      category: "中国古代史",
      text: "引进玉米、甘薯、马铃薯等高产作物；棉纺织基地出现；苏州丝织业中心；景德镇制瓷中心；北京南京商贸城市；晋商徽商活跃。"
    }
  ]
);

insertAfterMatch(
  (item) => item && item.type === "summary" && typeof item.title === "string" && item.title.includes("三国两晋南北朝"),
  [
    {
      type: "detail",
      year: "200 年",
      title: "官渡之战",
      category: "中国古代史",
      text: "袁绍VS曹操（曹操胜），奠定北方统一基础。"
    },
    {
      type: "detail",
      year: "208 年",
      title: "赤壁之战",
      category: "中国古代史",
      text: "孙刘联军VS曹操（孙刘胜），奠定三国鼎立基础。"
    },
    {
      type: "detail",
      title: "北方民族交融表现",
      category: "中国古代史",
      text: "胡汉观念逐渐淡薄，民族隔阂与偏见减少。"
    },
    {
      type: "detail",
      title: "江南开发根本原因",
      category: "中国古代史",
      text: "北人南迁带来劳动力、先进生产工具和生产技术。"
    }
  ]
);

insertAfterMatch(
  (item) => item && item.type === "summary" && typeof item.title === "string" && item.title.includes("（二）中世纪的欧洲"),
  [
    {
      type: "detail",
      title: "封君封臣制特点",
      category: "世界史",
      text: "等级性强、不能越级从属、权利义务交织、有契约意义、以土地封赐为纽带。"
    },
    {
      type: "detail",
      title: "庄园经济",
      category: "世界史",
      text: "自给自足的政治经济单位；庄园法庭维护秩序。"
    },
    {
      type: "detail",
      title: "城市自治形式",
      category: "世界史",
      text: "通过取得国王或领主特许状获得自治或自由（不能完全摆脱封建控制）。"
    },
    {
      type: "detail",
      title: "大学",
      category: "世界史",
      text: "被誉为中世纪教育“最美好的花朵”。"
    }
  ]
);

insertAfterMatch(
  (item) => item && item.type === "summary" && typeof item.title === "string" && item.title.includes("（三）走向近代"),
  [
    {
      type: "detail",
      year: "14 世纪",
      title: "资本主义萌芽",
      category: "世界史",
      text: "租地农场和手工工场出现，具有资本主义性质、面向市场并存在雇佣关系。"
    }
  ]
);

insertAfterMatch(
  (item) => item && item.type === "event" && item.category === "世界史" && typeof item.title === "string" && item.title.includes("第二次工业革命——电力广泛应用"),
  [
    {
      type: "detail",
      title: "第二次工业革命特点",
      category: "世界史",
      text: "最突出特点：科学研究与工业生产紧密结合；主要资本主义国家同时展开；侧重重工业。"
    },
    {
      type: "detail",
      title: "代表人物与发明",
      category: "世界史",
      text: "爱迪生电灯；本茨汽车；莱特兄弟飞机；福特流水线生产汽车；诺贝尔炸药。"
    }
  ]
);

const summaryEnrichments = [
  {
    titleIncludes: "（二）夏商周",
    content: "特征：早期国家产生与发展；西周分封制巩固统治但也埋下分裂隐患。"
  },
  {
    titleIncludes: "（三）秦汉",
    content: "朝代特征：统一多民族国家的建立和巩固；中央集权制度确立并发展。"
  },
  {
    titleIncludes: "（四）三国两晋南北朝",
    content: "朝代特征：政权分立与民族交融；北方民族交融、江南开发为经济重心南移奠基。"
  }
];

historyEvents.forEach((item) => {
  if (!item || item.type !== "summary") return;
  if (typeof item.title !== "string") return;

  summaryEnrichments.forEach((rule) => {
    if (!rule.titleIncludes) return;
    if (!item.title.includes(rule.titleIncludes)) return;
    item.content = rule.content || item.content || "";
  });
});

const eventEnrichments = [
  {
    category: "中国古代史",
    titleIncludes: "元谋人",
    summary: "我国境内目前已确认的最早古人类化石发现于云南元谋。",
    significance: "为研究人类起源提供重要证据。",
    examPoints: "距今约170万年；会使用打制石器。"
  },
  {
    category: "中国古代史",
    titleIncludes: "北京人",
    summary: "北京周口店遗址发现，使用打制石器，会使用天然火。",
    significance: "化石遗存是研究人类起源的重要证据。",
    examPoints: "距今约70—20万年；打制石器；使用天然火。"
  },
  {
    category: "中国古代史",
    titleIncludes: "山顶洞人",
    summary: "北京周口店遗址发现，掌握人工取火与磨光钻孔技术。",
    significance: "反映旧石器晚期人类生产生活的发展水平。",
    examPoints: "会人工取火；有爱美意识；会磨光与钻孔。"
  },
  {
    category: "中国古代史",
    titleIncludes: "河姆渡",
    summary: "长江流域原始农耕文明代表，生活在浙江一带。",
    significance: "反映南方原始农耕的发展水平。",
    examPoints: "种植水稻；住干栏式房屋。"
  },
  {
    category: "中国古代史",
    titleIncludes: "半坡",
    summary: "黄河流域原始农耕文明代表，生活在陕西一带。",
    significance: "反映北方原始农耕的发展水平。",
    examPoints: "种植粟；住半地穴式房屋。"
  },
  {
    category: "中国古代史",
    titleIncludes: "炎黄部落联盟",
    summary: "阪泉之战：炎帝VS黄帝；涿鹿之战：炎黄联盟VS蚩尤。",
    significance: "推动华夏族形成与早期文明发展。",
    examPoints: "炎黄被尊为人文初祖；阪泉之战与涿鹿之战。"
  },
  {
    category: "中国古代史",
    titleIncludes: "分封制、宗法制、礼乐制",
    summary: "西周实行分封制，以血缘和功劳为纽带分封诸侯。",
    significance: "积极：稳定政局、扩大统治范围、促进边远地区开发与民族交融；消极：诸侯独立性强，埋下春秋战国分裂动荡隐患。",
    examPoints: "分封制积极与消极影响；诸侯独立性是后期动荡原因之一。"
  },
  {
    category: "中国古代史",
    titleIncludes: "王室衰微、诸侯争霸",
    summary: "春秋时期时代特征：王室衰微、诸侯争霸、分封制瓦解。",
    significance: "社会结构与政治格局发生深刻变化。",
    examPoints: "春秋特征：王室衰微、诸侯争霸、分封制瓦解。"
  },
  {
    category: "中国古代史",
    titleIncludes: "七雄并立",
    summary: "战国时期时代特征：奴隶社会向封建社会转变。根因：铁农具和牛耕的推广推动生产力发展。",
    significance: "变法运动与思想解放并行，为统一奠基。",
    examPoints: "根因：铁农具与牛耕推广；战国特征：社会转型。"
  },
  {
    category: "中国古代史",
    titleIncludes: "商鞅变法",
    summary: "前356年秦孝公支持商鞅变法。政治：确立县制；经济：废井田、允许土地买卖；并奖励耕战。",
    significance: "秦国国力增强、军队战斗力提高，成为战国最强诸侯国，为秦统一全国奠基。",
    examPoints: "确立县制；废井田、土地私有；奖励耕战；根因：铁农具和牛耕推广。"
  },
  {
    category: "中国古代史",
    titleIncludes: "百家争鸣",
    summary: "战国时期思想活跃：儒、道、墨、法等学派形成与发展。",
    significance: "促进思想学术繁荣，成为中国古代第一次思想文化高峰，对后世影响深远。",
    examPoints: "孔子：仁、以德治国；老子：无为；墨子：兼爱非攻；孟子：仁政民贵君轻；韩非：以法治国。"
  },
  {
    category: "中国古代史",
    titleIncludes: "秦统一六国",
    summary: "前221年秦始皇完成统一，定都咸阳。",
    significance: "结束长期割据局面，开创统一多民族国家新局面。",
    examPoints: "统一时间：前221年；都城：咸阳。"
  },
  {
    category: "中国古代史",
    titleIncludes: "皇帝制、三公九卿、郡县制",
    summary: "秦始皇巩固统一：统一文字小篆、度量衡、车轨与货币（半两钱）；修长城；开凿灵渠等。",
    significance: "建立君主专制中央集权制度，奠定两千多年封建政治制度基本格局。",
    examPoints: "统一文字小篆、度量衡、车轨、货币半两钱；修长城（东起辽东西至临洮）；开凿灵渠；三公九卿与郡县制。"
  },
  {
    category: "中国古代史",
    titleIncludes: "陈胜吴广起义",
    summary: "前209年大泽乡起义，建立张楚政权，是我国历史上第一次农民起义。",
    significance: "沉重打击秦朝统治，加速秦朝灭亡。",
    examPoints: "时间：前209年；地点：大泽乡；我国第一次农民起义。"
  },
  {
    category: "中国古代史",
    titleIncludes: "西汉建立",
    summary: "前202年刘邦建立西汉，定都长安。",
    significance: "统一政权确立，为恢复经济与大一统奠定基础。",
    examPoints: "西汉都城：长安。"
  },
  {
    category: "中国古代史",
    titleIncludes: "休养生息、文景之治",
    summary: "汉初实行休养生息，文帝景帝时期出现“文景之治”。汉武帝通过推恩令、刺史、尊崇儒术、盐铁官营等巩固大一统。",
    significance: "汉武帝从政治、经济、思想、军事等方面巩固大一统，使西汉进入鼎盛。",
    examPoints: "休养生息皇帝：刘邦、文帝、景帝；推恩令（主父偃）、刺史；尊崇儒术（董仲舒）；五铢钱、盐铁官营；北击匈奴（卫青、霍去病）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "东汉建立",
    summary: "25年刘秀建立东汉，定都洛阳，史称“光武中兴”。",
    significance: "恢复社会秩序，推动经济文化恢复发展。",
    examPoints: "东汉都城：洛阳；建立者：刘秀；光武中兴。"
  },
  {
    category: "中国古代史",
    titleIncludes: "蔡伦改进造纸术",
    summary: "东汉时期科技与医学发展：蔡伦改进造纸术；张仲景著《伤寒杂病论》；华佗发明麻沸散并创编五禽戏。",
    significance: "促进文化传播与医学发展，影响深远。",
    examPoints: "医圣：张仲景；《伤寒杂病论》；华佗：麻沸散、五禽戏；东汉末农民起义：黄巾起义（张角）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "北魏孝文帝改革",
    summary: "北魏孝文帝迁都洛阳，推行汉化政策，促进民族交融；江南开发加快。",
    significance: "胡汉观念逐渐淡薄，民族隔阂与偏见减少；江南开发为经济重心南移奠基。",
    examPoints: "汉化措施：迁都洛阳、改汉姓、说汉语、穿汉服、通汉婚；江南开发根因：北人南迁带来劳动力与技术。"
  },
  {
    category: "中国古代史",
    titleIncludes: "大运河",
    summary: "隋朝开凿大运河，沟通南北水运，强化南北联系。",
    significance: "促进经济文化交流与国家统一治理。",
    examPoints: "目的：加强南北交通，巩固隋对全国统治。"
  },
  {
    category: "中国古代史",
    titleIncludes: "曲辕犁",
    summary: "唐朝兴盛原因：国家统一社会稳定；以民为本；开明民族政策与开放对外政策；生产力发展（曲辕犁、筒车）；完善科举制度与重视文教。",
    significance: "形成繁荣开放的局面，文化交流活跃，影响深远。",
    examPoints: "兴盛原因关键词：统一稳定、以民为本、开明民族政策、开放对外政策、曲辕犁筒车、科举完善、文教繁荣。"
  },
  {
    category: "中国古代史",
    titleIncludes: "交子",
    summary: "宋朝商业繁荣，经济重心南移完成；科技发明与文化成就突出，海外贸易活跃。",
    significance: "推动社会经济发展与城市繁荣，促进中外交流。",
    examPoints: "交子：世界最早纸币（北宋四川）；市舶司管理海外贸易；瓦子是娱乐兼营商业场所；商业打破时间空间限制。"
  },
  {
    category: "中国古代史",
    titleIncludes: "闭关锁国",
    summary: "清朝实行闭关锁国：1757年只留广州一处通商口岸，由广州十三行统一经营对外贸易。",
    significance: "曾起到一定自卫作用，但使中国逐渐落伍于世界历史发展进程。",
    examPoints: "原因：自认为物产丰富、担心西方侵略与沿海交流危及统治；表现：只留广州十三行；影响：自卫但导致落伍。"
  },
  {
    category: "中国近代史",
    titleIncludes: "虎门销烟",
    summary: "1839年林则徐在广州虎门销烟，打击鸦片走私。",
    significance: "显示中国人民反侵略决心，成为鸦片战争导火线。",
    examPoints: "时间：1839年6月；地点：广州虎门；人物：林则徐。"
  },
  {
    category: "中国近代史",
    titleIncludes: "《南京条约》",
    summary: "1842年签订《南京条约》，割香港岛、赔款2100万银元、开五口通商、协定关税。",
    significance: "中国开始沦为半殖民地半封建社会，是中国近代史的开端。",
    examPoints: "割香港岛；赔款2100万；五口通商；协定关税。"
  },
  {
    category: "中国近代史",
    titleIncludes: "第二次鸦片战争",
    summary: "1856—1860年第二次鸦片战争爆发，英法联军火烧圆明园并迫使清政府签订《北京条约》。",
    significance: "中国半殖民地化程度进一步加深，西方侵略势力由沿海深入长江中下游地区，俄国侵占北方大片领土。",
    examPoints: "根本原因：列强为打开中国市场、倾销商品、掠夺原材料；影响：半殖民地化加深。"
  },
  {
    category: "中国近代史",
    titleIncludes: "洋务运动",
    summary: "19世纪60年代起洋务派以“自强”“求富”为口号，兴办近代军事工业与民用企业。",
    significance: "中国近代化开端，客观上促进民族资本主义产生。",
    examPoints: "近代化开端：洋务运动；教育近代化：京师同文馆；破产标志：甲午战争北洋舰队覆没。"
  },
  {
    category: "中国近代史",
    titleIncludes: "甲午中日战争",
    summary: "1894—1895年甲午中日战争爆发，清政府战败签订《马关条约》。",
    significance: "大大加深半殖民地化程度，刺激列强瓜分中国狂潮，加剧民族危机，激起民族觉醒并推动救亡图存运动。",
    examPoints: "《马关条约》：割辽东半岛、台湾、澎湖；赔款2亿两；开四口；允许日本设厂。"
  },
  {
    category: "中国近代史",
    titleIncludes: "《辛丑条约》",
    summary: "1901年《辛丑条约》签订：赔款4.5亿两，严禁人民反帝，允许列强驻兵等。",
    significance: "清政府沦为帝国主义列强统治中国的工具，中国完全陷入半殖民地半封建社会的深渊。",
    examPoints: "赔款4.5亿两；严禁反帝；驻兵；使馆界；“沦为洋人的朝廷”。"
  },
  {
    category: "中国近代史",
    titleIncludes: "新文化运动",
    summary: "1915年新文化运动兴起，提倡民主与科学，批判封建礼教，推动思想解放与白话文普及。",
    significance: "动摇封建道德礼教统治地位，为五四运动爆发提供思想宣传与铺垫。",
    examPoints: "口号：民主、科学；作用：思想解放、白话文普及。"
  },
  {
    category: "中国近代史",
    titleIncludes: "五四运动",
    summary: "1919年五四运动爆发，是一场彻底的反帝反封建爱国运动。",
    significance: "标志新民主主义革命开端，无产阶级登上政治舞台。",
    examPoints: "口号：外争主权、内除国贼；工人阶级登上政治舞台。"
  },
  {
    category: "中国近代史",
    titleIncludes: "南昌起义",
    summary: "1927年8月1日南昌起义打响武装反抗国民党反动派第一枪。",
    significance: "标志中共独立领导革命战争、创建人民军队和武装夺取政权的开端。",
    examPoints: "时间：1927.8.1；意义：人民军队诞生的重要标志。"
  },
  {
    category: "中国近代史",
    titleIncludes: "九一八事变",
    summary: "1931年9月18日九一八事变，日本侵华开端，东北沦陷。",
    significance: "成为中国人民抗日战争的起点，揭开世界反法西斯战争序幕。",
    examPoints: "时间：1931.9.18；地点：沈阳；日本侵华开端。"
  },
  {
    category: "中国近代史",
    titleIncludes: "红军长征",
    summary: "1934—1936年红军长征，1935年遵义会议纠正“左”倾错误。",
    significance: "粉碎国民党消灭红军企图，保存革命力量；长征播下革命种子，铸就长征精神；遵义会议是生死攸关转折点，中共从幼年走向成熟的重要标志。",
    examPoints: "关键节点：渡过金沙江、四渡赤水、会宁会师；遵义会议：转折点。"
  },
  {
    category: "中国近代史",
    titleIncludes: "抗战胜利",
    summary: "1945年日本无条件投降，中国取得近代以来反侵略第一次完全胜利。",
    significance: "促进民族觉醒，为实现彻底民族独立与人民解放奠基；中国国际地位提高；中国战场是世界反法西斯战争东方主战场。",
    examPoints: "决定性因素：中共发挥中流砥柱作用。"
  },
  {
    category: "中国现代史",
    titleIncludes: "抗美援朝",
    summary: "1950—1953年抗美援朝，志愿军赴朝作战，保家卫国。",
    significance: "捍卫新中国安全，提高国际地位；打破美军不可战胜神话；稳定朝鲜半岛局势，维护亚洲与世界和平。",
    examPoints: "精神：爱国主义、革命英雄主义；意义关键词：安全、地位、和平。"
  },
  {
    category: "中国现代史",
    titleIncludes: "十一届三中全会",
    summary: "1978年十一届三中全会把党和国家工作重心转移到经济建设，实行改革开放。",
    significance: "新中国成立以来具有深远意义的伟大转折，开启改革开放和社会主义现代化建设新时期，形成以邓小平为核心的第二代中央领导集体。",
    examPoints: "关键词：经济建设为中心、改革开放、伟大转折。"
  },
  {
    category: "中国现代史",
    titleIncludes: "经济特区",
    summary: "1980年设立深圳、珠海、汕头、厦门等经济特区，作为对外开放窗口。",
    significance: "引进外资、先进技术与管理经验，推动改革深化与对外经济交流，促进社会主义现代化建设。",
    examPoints: "时间：1980；特区：深圳、珠海、汕头、厦门；作用：窗口。"
  },
  {
    category: "世界史",
    titleIncludes: "《汉谟拉比法典》",
    summary: "《汉谟拉比法典》体现古巴比伦社会等级森严、家庭奴隶制与商品经济活跃。",
    significance: "是迄今所知世界上第一部较为完整的成文法典，表明人类社会法制传统源远流长。",
    examPoints: "目的：维护奴隶主利益；地位：较完整成文法典；意义：宝贵文化遗产。"
  },
  {
    category: "世界史",
    titleIncludes: "雅典民主政治",
    summary: "雅典民主政治特点：直接民主、轮番而治、主权在民，并实行津贴制度鼓励参政。",
    significance: "是西方民主政治的重要源头，但实质是奴隶制民主。",
    examPoints: "全盛人物：伯里克利；最高权力机构：公民大会；实质：奴隶制民主。"
  },
  {
    category: "世界史",
    titleIncludes: "第二次工业革命",
    summary: "第二次工业革命最突出特点是科学研究与工业生产紧密结合，并在主要资本主义国家同时展开。",
    significance: "人类进入“电气时代”，促进生产力发展；垄断组织出现，资本主义向帝国主义阶段过渡，掀起瓜分世界狂潮；也带来环境污染与贫富分化等问题。",
    examPoints: "最突出特点：科工结合；主要国家：美德为主；影响：电气时代、垄断组织、帝国主义。"
  },
  {
    category: "世界史",
    titleIncludes: "第一次世界大战",
    summary: "第一次世界大战是帝国主义国家瓜分世界、争夺霸权的战争，导火线为萨拉热窝事件。",
    significance: "造成巨大灾难，削弱帝国主义力量与欧洲优势地位，促进殖民地半殖民地民族觉醒。",
    examPoints: "根因：帝国主义发展不平衡；导火线：萨拉热窝事件；转折点：凡尔登战役；特点：时间长、范围广、破坏性大。"
  },
  {
    category: "世界史",
    titleIncludes: "凡尔赛",
    summary: "凡尔赛—华盛顿体系调整帝国主义在欧洲与亚太地区的关系，暂时缓和矛盾但埋下二战隐患。",
    significance: "中国回到列强共同支配局面，美国推进“门户开放”政策。",
    examPoints: "巴黎和会（1919）《凡尔赛条约》；华盛顿会议（1922）《九国公约》。"
  },
  {
    category: "世界史",
    titleIncludes: "冷战（美苏对峙）",
    summary: "冷战开始于1947年杜鲁门主义，表现为政治对抗、经济援助与军事同盟对峙。",
    significance: "形成长期两极对峙格局，1991年苏联解体标志冷战结束。",
    examPoints: "时间：1947—1991；实质：美苏争夺世界霸权；表现：杜鲁门主义、马歇尔计划、北约（1949）、华约（1955）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "夏朝建立",
    summary: "约前2070年禹建立夏朝，后启继位，世袭制代替禅让制，“家天下”开始。",
    significance: "我国早期国家与王朝形态的重要开端。",
    examPoints: "启继位：世袭制代替禅让制；家天下开始。"
  },
  {
    category: "中国古代史",
    titleIncludes: "商汤灭夏",
    summary: "约前1600年商汤灭夏建立商朝，盘庚迁殷后国势稳定。",
    significance: "我国有文字可考的历史从商朝开始。",
    examPoints: "甲骨文：年代最早、体系较完整的古文字。"
  },
  {
    category: "中国古代史",
    titleIncludes: "牧野之战",
    summary: "前1046年牧野之战，周武王伐纣胜利，建立西周。",
    significance: "西周建立并推行分封制等制度，巩固统治。",
    examPoints: "牧野之战：武王伐纣。"
  },
  {
    category: "中国古代史",
    titleIncludes: "平王东迁",
    summary: "前770年周平王东迁洛邑，东周开始，进入春秋战国时期。",
    significance: "周王室衰微、诸侯争霸的时代展开。",
    examPoints: "东周分春秋（前770—前476）与战国（前475—前221）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "巨鹿之战",
    summary: "前207年巨鹿之战，项羽击败秦军主力。",
    significance: "加速秦朝灭亡，推动楚汉之争局势变化。",
    examPoints: "巨鹿：项羽对秦军主力。"
  },
  {
    category: "中国古代史",
    titleIncludes: "王莽篡汉",
    summary: "公元9年王莽篡夺西汉政权，建立新朝。",
    significance: "西汉灭亡的重要标志，随后东汉建立。",
    examPoints: "西汉如何灭亡：王莽建立新朝。"
  },
  {
    category: "中国古代史",
    titleIncludes: "魏建立",
    summary: "220年曹丕建立魏，东汉灭亡，三国时期开始。",
    significance: "政权分立格局形成并持续发展。",
    examPoints: "三国鼎立形成：魏（220）、蜀（221）、吴（222）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "蜀建立",
    summary: "221年刘备建立蜀汉，与魏、吴形成三国鼎立趋势。",
    significance: "三国鼎立局面逐步形成。",
    examPoints: "蜀建立：221年刘备。"
  },
  {
    category: "中国古代史",
    titleIncludes: "吴建立",
    summary: "222年孙权建立吴，三国鼎立形成。",
    significance: "三国鼎立格局确立。",
    examPoints: "吴建立：222年孙权；卫温到夷洲（台湾）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "卫温到夷洲",
    summary: "230年孙权派卫温到达夷洲（今台湾）。",
    significance: "反映古代中国与台湾地区的早期联系。",
    examPoints: "夷洲：台湾。"
  },
  {
    category: "中国古代史",
    titleIncludes: "西晋建立",
    summary: "266年司马炎建立西晋。",
    significance: "结束三国分立趋势，走向短暂统一。",
    examPoints: "灭三国统一全国的政权：西晋。"
  },
  {
    category: "中国古代史",
    titleIncludes: "西晋统一全国",
    summary: "280年西晋统一全国。",
    significance: "短暂结束长期分裂局面。",
    examPoints: "西晋统一：280年。"
  },
  {
    category: "中国古代史",
    titleIncludes: "东晋建立",
    summary: "317年司马睿建立东晋，定都建康。",
    significance: "江南地区得到进一步开发，南方经济文化发展加快。",
    examPoints: "东晋都城：建康（南京）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "隋朝建立",
    summary: "581年杨坚建立隋朝。",
    significance: "为隋统一全国与制度创新奠定基础。",
    examPoints: "隋朝建立：581年。"
  },
  {
    category: "中国古代史",
    titleIncludes: "隋统一全国",
    summary: "589年隋统一全国。",
    significance: "结束长期分裂，实现大一统。",
    examPoints: "隋统一：589年。"
  },
  {
    category: "中国古代史",
    titleIncludes: "科举制创立",
    summary: "隋朝创立科举制，隋炀帝设进士科，推动选官制度变革。",
    significance: "选官方式发生根本变化，影响深远。",
    examPoints: "科举制正式创立标志：隋炀帝设进士科。"
  },
  {
    category: "中国古代史",
    titleIncludes: "贞观之治",
    summary: "唐太宗时期出现“贞观之治”，完善制度，推动国家治理走向成熟。",
    significance: "为唐朝鼎盛奠定基础。",
    examPoints: "唐对西域管理：设安西都护府、北庭都护府（并有击败突厥等措施）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "开元盛世",
    summary: "唐玄宗时期出现“开元盛世”，国力强盛、经济文化繁荣。",
    significance: "唐朝达到鼎盛。",
    examPoints: "开元盛世：唐玄宗。"
  },
  {
    category: "中国古代史",
    titleIncludes: "五代十国",
    summary: "五代十国时期政权更迭频繁，实质是藩镇割据的延续。",
    significance: "为北宋统一与“重文轻武”政策提供历史背景。",
    examPoints: "五代十国实质：藩镇割据延续。"
  },
  {
    category: "中国古代史",
    titleIncludes: "北宋建立",
    summary: "960年赵匡胤建立北宋，发动陈桥兵变，并以“杯酒释兵权”加强中央集权。",
    significance: "强化皇权，削弱武将割据隐患。",
    examPoints: "陈桥兵变；杯酒释兵权；宋朝重文轻武。"
  },
  {
    category: "中国古代史",
    titleIncludes: "王安石变法",
    summary: "1069年王安石变法，试图富国强兵，缓解财政与军事压力。",
    significance: "推动制度调整，反映宋代改革探索。",
    examPoints: "王安石变法时间：1069年。"
  },
  {
    category: "中国古代史",
    titleIncludes: "靖康之变",
    summary: "1127年靖康之变，北宋灭亡，南宋建立。",
    significance: "宋金对峙格局形成，南宋时期经济重心南移最终完成。",
    examPoints: "北宋亡：靖康之变（1127）；南宋都城：临安。"
  },
  {
    category: "中国古代史",
    titleIncludes: "岳飞抗金",
    summary: "南宋名将岳飞抗金，维护南宋政权与民族气节。",
    significance: "体现宋金对峙时期的民族抗争。",
    examPoints: "宋金对峙；岳飞抗金。"
  },
  {
    category: "中国古代史",
    titleIncludes: "成吉思汗统一蒙古",
    summary: "1206年铁木真统一蒙古草原，被尊为成吉思汗。",
    significance: "为蒙古扩张与元朝建立奠定基础。",
    examPoints: "统一蒙古草原：铁木真（成吉思汗）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "元朝建立",
    summary: "1271年忽必烈建立元朝，定都大都。",
    significance: "推动全国统一与多民族国家发展。",
    examPoints: "元朝建立者：忽必烈；腹里由中书省管理。"
  },
  {
    category: "中国古代史",
    titleIncludes: "行省制度",
    summary: "元朝实行行省制度，加强对地方的有效管理；设宣政院管理西藏，设澎湖巡检司管辖台湾地区。",
    significance: "加强中央对边疆与地方的管辖，促进民族交融。",
    examPoints: "元中央机构：中书省（行政）、枢密院（军事）、御史台（监察）；台湾：澎湖巡检司；西藏：宣政院。"
  },
  {
    category: "中国古代史",
    titleIncludes: "明朝建立",
    summary: "1368年朱元璋建立明朝。",
    significance: "恢复统一政权，推动社会经济重建与发展。",
    examPoints: "明朝建立：1368年；建立者：朱元璋。"
  },
  {
    category: "中国古代史",
    titleIncludes: "废丞相",
    summary: "明朝强化皇权，形成以内阁协助皇帝处理政务的体制，并设厂卫特务机构。",
    significance: "君主专制进一步强化，推动国家治理体系变化；对外交流活跃，经济文化繁荣。",
    examPoints: "强化皇权：废丞相、六部对皇帝负责；明成祖设内阁；厂卫机构；郑和下西洋（1405—1433）。"
  },
  {
    category: "中国古代史",
    titleIncludes: "清军入关",
    summary: "1644年清军入关并定都北京，清朝统治逐步确立。",
    significance: "中国统一多民族国家进入新的巩固与发展阶段。",
    examPoints: "清军入关：1644年；定都北京。"
  },
  {
    category: "中国古代史",
    titleIncludes: "后金改清",
    summary: "1636年皇太极改国号为清，为入关建立统治奠定基础。",
    significance: "清朝建立进程的重要节点。",
    examPoints: "改国号改族名为清：皇太极。"
  },
  {
    category: "中国古代史",
    titleIncludes: "康乾盛世",
    summary: "清朝前期经济恢复发展，国家统一与社会相对安定，人口增长，边疆治理加强。",
    significance: "为清朝前期兴盛奠基，但闭关锁国使中国逐渐落伍于世界潮流。",
    examPoints: "清朝疆域四至：西跨葱岭、北接西伯利亚、东临太平洋、南到南海诸岛；西藏管理：册封达赖班禅、驻藏大臣、金瓶掣签等。"
  },
  {
    category: "中国近代史",
    titleIncludes: "太平天国运动",
    summary: "1851—1864年太平天国运动，洪秀全领导，是近代中国规模最大的农民起义之一。",
    significance: "沉重打击清朝统治并冲击旧秩序，但最终失败。",
    examPoints: "军事上全盛：北伐、西征；时间：1851—1864。"
  },
  {
    category: "中国近代史",
    titleIncludes: "八国联军侵华",
    summary: "1900年八国联军侵华，清政府被迫签订《辛丑条约》。",
    significance: "清政府沦为帝国主义列强统治中国的工具，中国完全陷入半殖民地半封建社会。",
    examPoints: "八国联军：英美俄日法德意奥；结果：签订《辛丑条约》。"
  },
  {
    category: "中国近代史",
    titleIncludes: "公车上书",
    summary: "1895年康有为、梁启超发动公车上书，拉开维新变法序幕。",
    significance: "推动政治近代化探索，促成百日维新。",
    examPoints: "维新变法序幕：公车上书。"
  },
  {
    category: "中国近代史",
    titleIncludes: "戊戌变法",
    summary: "1898年戊戌变法（百日维新），维新派推动君主立宪改革尝试。",
    significance: "在思想启蒙与政治近代化方面产生影响，但改革失败。",
    examPoints: "政治近代化开端（之一）：百日维新；维新派：康有为、梁启超。"
  },
  {
    category: "中国近代史",
    titleIncludes: "中国同盟会",
    summary: "1905年孙中山在东京成立中国同盟会，是第一个全国规模的资产阶级革命政党。",
    significance: "推动资产阶级民主革命发展，为辛亥革命做组织与思想准备。",
    examPoints: "政治纲领：驱除鞑虏、恢复中华、创立民国、平均地权；机关报：《民报》。"
  },
  {
    category: "中国近代史",
    titleIncludes: "黄花岗起义",
    summary: "1911年广州黄花岗起义，革命党人英勇牺牲。",
    significance: "体现不屈不挠精神，鼓舞全国人民斗志，为辛亥革命造势。",
    examPoints: "时间：1911.4.27；地点：广州。"
  },
  {
    category: "中国近代史",
    titleIncludes: "武昌起义",
    summary: "1911年10月10日武昌起义爆发，辛亥革命开始。",
    significance: "推动清朝统治瓦解，促成中华民国建立。",
    examPoints: "辛亥革命：1911.10.10 武昌。"
  },
  {
    category: "中国近代史",
    titleIncludes: "中华民国成立",
    summary: "1912年中华民国成立，颁布《中华民国临时约法》。",
    significance: "确立资产阶级民主共和原则，推动民主共和观念传播。",
    examPoints: "《临时约法》性质：资产阶级共和国宪法性质的重要文件。"
  },
  {
    category: "中国近代史",
    titleIncludes: "宣统帝退位",
    summary: "1912年宣统帝退位，清朝灭亡。",
    significance: "两千多年封建君主专制终结。",
    examPoints: "清朝灭亡：1912.2.12。"
  },
  {
    category: "中国近代史",
    titleIncludes: "八七会议",
    summary: "1927年八七会议确定实行土地革命和武装反抗国民党反动派的方针。",
    significance: "推动革命重心转向农村武装斗争，提出“政权是由枪杆子中取得的”。",
    examPoints: "八七会议：1927 汉口；土地革命、武装起义。"
  },
  {
    category: "中国近代史",
    titleIncludes: "井冈山革命根据地",
    summary: "井冈山革命根据地建立，开辟“农村包围城市、武装夺取政权”道路。",
    significance: "为中国革命道路探索奠定实践基础。",
    examPoints: "中国革命道路：农村包围城市、武装夺取政权、工农武装割据。"
  },
  {
    category: "中国近代史",
    titleIncludes: "七七事变",
    summary: "1937年七七事变爆发，全面抗战开始。",
    significance: "中国抗日战争进入全民族抗战阶段。",
    examPoints: "全面抗战爆发：七七事变（卢沟桥事变）。"
  },
  {
    category: "中国近代史",
    titleIncludes: "台儿庄战役",
    summary: "1938年台儿庄战役取得正面战场重大胜利。",
    significance: "鼓舞全国抗战信心，提高民族士气。",
    examPoints: "台儿庄战役：李宗仁。"
  },
  {
    category: "中国近代史",
    titleIncludes: "百团大战",
    summary: "1940年百团大战在华北地区展开，彭德怀指挥，重点破坏日军交通线。",
    significance: "提高共产党和八路军威望，打击侵略者气焰。",
    examPoints: "百团大战：华北；彭德怀；破坏交通线。"
  },
  {
    category: "中国近代史",
    titleIncludes: "三大战役",
    summary: "1948—1949年三大战役（辽沈、淮海、平津）基本消灭国民党主力。",
    significance: "为全国胜利奠定决定性基础。",
    examPoints: "淮海战役：解放长江中下游以北广大地区。"
  },
  {
    category: "中国现代史",
    titleIncludes: "开国大典",
    summary: "1949年10月1日开国大典，新中国成立。",
    significance: "中国人民站起来，开启中国现代史新阶段。",
    examPoints: "新中国成立：1949.10.1。"
  },
  {
    category: "中国现代史",
    titleIncludes: "土地改革",
    summary: "1950—1952年土地改革，废除封建土地制度，农民翻身做主人。",
    significance: "巩固新生政权，解放农村生产力。",
    examPoints: "巩固新生政权三件大事：西藏和平解放、土地改革、抗美援朝。"
  },
  {
    category: "中国现代史",
    titleIncludes: "一五计划",
    summary: "1953—1957年“一五计划”优先发展重工业，开始改变工业落后面貌。",
    significance: "初步奠定工业化基础，为现代化建设提供物质支撑。",
    examPoints: "一五计划：1953—1957；特点：优先发展重工业。"
  },
  {
    category: "中国现代史",
    titleIncludes: "三大改造",
    summary: "1953—1956年三大改造基本完成，实现生产资料私有制向社会主义公有制转变。",
    significance: "社会主义基本制度在我国建立，进入社会主义初级阶段。",
    examPoints: "农业手工业：合作社；资本主义工商业：公私合营、赎买政策；完成标志：1956年底。"
  },
  {
    category: "中国现代史",
    titleIncludes: "中共八大",
    summary: "1956年中共八大分析主要矛盾，集中力量发展社会生产力。",
    significance: "探索建设社会主义道路的良好开端。",
    examPoints: "中共八大：1956 北京；任务：落后农业国→先进工业国。"
  },
  {
    category: "中国现代史",
    titleIncludes: "文化大革命",
    summary: "1966—1976年文化大革命造成严重内乱与挫折，民主法制遭践踏。",
    significance: "留下沉重教训，但同时期我国取得若干重要科技成就。",
    examPoints: "成就：1964原子弹、1967氢弹、1970东方红一号、1973籼型杂交水稻；1976.10粉碎四人帮标志结束。"
  },
  {
    category: "中国现代史",
    titleIncludes: "中国恢复联合国合法席位",
    summary: "1971年中国恢复联合国合法席位。",
    significance: "中国外交重大胜利，国际地位和影响力进一步提高，中国积极参与国际事务。",
    examPoints: "根本原因：中国国际地位提高；时间：1971年（26届联大）。"
  },
  {
    category: "中国现代史",
    titleIncludes: "尼克松访华",
    summary: "1972年尼克松访华并发表《联合公报》，中美关系开始正常化。",
    significance: "推动国际社会与中国建交高潮，为改革开放营造良好国际环境。",
    examPoints: "中美关系正常化：1972尼克松访华；1979正式建交。"
  },
  {
    category: "中国现代史",
    titleIncludes: "中美正式建交",
    summary: "1979年中美正式建交。",
    significance: "许多国家纷纷与中国建立外交关系，为改革开放和现代化建设提供良好国际环境。",
    examPoints: "中美建交：1979年。"
  },
  {
    category: "中国现代史",
    titleIncludes: "开放 14 个沿海城市",
    summary: "1984年开放14个沿海城市，城市经济体制改革全面展开。",
    significance: "对外开放格局不断扩大，改革开放进入新阶段。",
    examPoints: "对外开放格局：经济特区→沿海开放城市→沿海经济开放区→内地。"
  },
  {
    category: "中国现代史",
    titleIncludes: "社会主义初级阶段理论",
    summary: "1987年中共十三大提出社会主义初级阶段理论与基本路线。",
    significance: "为改革开放与现代化建设提供理论指导。",
    examPoints: "基本路线：一个中心、两个基本点。"
  },
  {
    category: "中国现代史",
    titleIncludes: "邓小平南方谈话",
    summary: "1992年邓小平南方谈话进一步解放思想，推动改革开放和现代化建设进入新阶段。",
    significance: "为建立社会主义市场经济体制目标提供思想动力。",
    examPoints: "1992：南方谈话；中共十四大提出建立社会主义市场经济体制目标。"
  },
  {
    category: "中国现代史",
    titleIncludes: "香港回归",
    summary: "1997年7月1日香港回归祖国。",
    significance: "洗雪百年国耻，在完成祖国统一大业道路上迈出重要一步。",
    examPoints: "香港回归：1997.7.1。"
  },
  {
    category: "中国现代史",
    titleIncludes: "澳门回归",
    summary: "1999年12月20日澳门回归祖国。",
    significance: "完成祖国统一大业取得重要进展。",
    examPoints: "澳门回归：1999.12.20。"
  },
  {
    category: "中国现代史",
    titleIncludes: "加入 WTO",
    summary: "2001年中国加入世界贸易组织（WTO），更深融入经济全球化。",
    significance: "为我国参与经济全球化开辟新途径，为国民经济和社会发展开拓新空间。",
    examPoints: "入世意义：开辟新途径、拓展新空间。"
  },
  {
    category: "世界史",
    titleIncludes: "古代埃及",
    summary: "古埃及文明发源于尼罗河流域，金字塔与象形文字是其代表。",
    significance: "金字塔反映古埃及社会经济较高水平，是古埃及人智慧结晶。",
    examPoints: "金字塔：古埃及文明象征；尼罗河流域。"
  },
  {
    category: "世界史",
    titleIncludes: "古代印度",
    summary: "古代印度文明形成于印度河流域，种姓制度森严，佛教产生于前6世纪。",
    significance: "佛教反对婆罗门特权；种姓制度体现等级分明、世代相袭。",
    examPoints: "佛教：前6世纪释迦牟尼；种姓制度特点：世代相袭、贵贱分明。"
  },
  {
    category: "世界史",
    titleIncludes: "古代罗马",
    summary: "罗马从共和国到帝国并形成罗马法传统，对后世影响深远。",
    significance: "《十二铜表法》是成文法的重要开端，《罗马民法大全》奠定欧洲民法基础。",
    examPoints: "罗马法演变：习惯法→《十二铜表法》→万民法→《罗马民法大全》。"
  },
  {
    category: "世界史",
    titleIncludes: "封君封臣制",
    summary: "西欧封建制度以封君封臣制与庄园经济为基础，基督教会影响深远。",
    significance: "塑造中世纪西欧政治经济结构，并孕育城市与大学兴起的土壤。",
    examPoints: "封君封臣特点：等级森严、不能越级从属、权利义务交织、有契约意义、以土地封赐为纽带；庄园性质：自给自足的政治经济单位。"
  },
  {
    category: "世界史",
    titleIncludes: "城市兴起",
    summary: "中世纪后期西欧城市兴起，市民阶层形成，早期资产阶级出现。",
    significance: "促进商品经济与社会结构变化，为近代转型积累力量。",
    examPoints: "城市自治形式：取得国王或领主特许状（仍受封建控制）；大学被称为中世纪教育“最美好的花朵”。"
  },
  {
    category: "世界史",
    titleIncludes: "拜占庭帝国",
    summary: "拜占庭帝国保留并传承古希腊罗马文化，《查士丁尼法典》影响深远。",
    significance: "为文艺复兴提供精神营养，奠定欧洲民法传统的重要基础之一。",
    examPoints: "1453年灭亡；查士丁尼编纂《罗马民法大全》。"
  },
  {
    category: "世界史",
    titleIncludes: "文艺复兴",
    summary: "文艺复兴核心思潮是人文主义，反对教会神权至上，强调人的价值与现世幸福。",
    significance: "思想解放运动，为资本主义发展奠基。",
    examPoints: "先驱：但丁《神曲》；人文主义：以人为中心，发扬个性。"
  },
  {
    category: "世界史",
    titleIncludes: "新航路开辟",
    summary: "新航路开辟把世界连接为整体，推动世界市场雏形形成。",
    significance: "引发商业革命与价格革命，促进资本主义发展，同时加剧殖民掠夺。",
    examPoints: "哥伦布（1492）；麦哲伦环球航行（1519—1522）；最早殖民国家：西葡；“日不落帝国”：英国。"
  },
  {
    category: "世界史",
    titleIncludes: "三角贸易",
    summary: "早期殖民掠夺与三角贸易促进资本原始积累，推动欧洲资本主义发展。",
    significance: "给亚非拉带来深重灾难，扩大殖民压迫。",
    examPoints: "三角贸易核心：黑奴贸易。"
  },
  {
    category: "世界史",
    titleIncludes: "英国资产阶级革命",
    summary: "英国资产阶级革命通过限制王权确立君主立宪制。",
    significance: "确立资产阶级统治，促进资本主义发展，推动从人治向法治转变。",
    examPoints: "《权利法案》（1689）确立君主立宪。"
  },
  {
    category: "世界史",
    titleIncludes: "美国独立战争",
    summary: "美国独立战争既是资产阶级革命，也是民族解放战争，形成联邦制国家。",
    significance: "确立资产阶级民主政治制度，推动资本主义发展。",
    examPoints: "1776《独立宣言》；1787宪法：联邦制、三权分立。"
  },
  {
    category: "世界史",
    titleIncludes: "法国大革命",
    summary: "法国大革命摧毁封建制度，传播自由平等思想。",
    significance: "世界近代史的重要转折点之一。",
    examPoints: "1789攻占巴士底狱；《人权宣言》：自由、平等、私有财产神圣不可侵犯。"
  },
  {
    category: "世界史",
    titleIncludes: "拿破仑帝国",
    summary: "拿破仑通过战争扩张并推动法律制度建设，《拿破仑法典》规范资本主义社会关系。",
    significance: "巩固并传播资产阶级革命成果，同时引发欧洲反法同盟。",
    examPoints: "《拿破仑法典》：民法典；1815滑铁卢失败。"
  },
  {
    category: "世界史",
    titleIncludes: "第一次工业革命",
    summary: "第一次工业革命以蒸汽机改良为标志，生产组织从手工工场走向机器工厂。",
    significance: "人类进入“蒸汽时代”，生产力大幅提高，城市化与阶级分化加速。",
    examPoints: "标志性发明：瓦特改良蒸汽机；首先发生行业：棉纺织业；特点：技术多源于工匠经验，科学与技术尚未紧密结合。"
  },
  {
    category: "世界史",
    titleIncludes: "《共产党宣言》",
    summary: "1848年《共产党宣言》发表，马克思主义诞生。",
    significance: "为无产阶级斗争提供科学理论指导，推动国际共产主义运动发展。",
    examPoints: "发表时间：1848年；作者：马克思、恩格斯。"
  },
  {
    category: "世界史",
    titleIncludes: "巴黎公社",
    summary: "1871年巴黎公社是无产阶级建立政权的伟大尝试。",
    significance: "为国际工人运动提供经验与教训。",
    examPoints: "巴黎公社：1871年；性质：第一个无产阶级政权。"
  },
  {
    category: "世界史",
    titleIncludes: "资本主义世界经济大危机",
    summary: "1929—1933年资本主义世界经济大危机范围广、时间长、破坏性强。",
    significance: "加剧资本主义国家矛盾；美国罗斯福新政强化国家干预；德日法西斯上台为二战埋下隐患。",
    examPoints: "特点：时间长、范围广、破坏性大；罗斯福新政（1933）特点：加强国家对经济干预；根因：资本主义制度基本矛盾。"
  },
  {
    category: "世界史",
    titleIncludes: "第二次世界大战",
    summary: "第二次世界大战是人类历史上规模空前的战争，世界反法西斯同盟建立并最终取得胜利。",
    significance: "彻底粉碎法西斯称霸世界野心，促进殖民体系瓦解，深刻改变世界格局。",
    examPoints: "欧洲战场转折点：斯大林格勒战役；1945日本投降；影响：促进世界殖民体系瓦解。"
  },
  {
    category: "世界史",
    titleIncludes: "多极化趋势加强",
    summary: "冷战结束后世界格局呈现“一超多强”，多极化趋势增强。",
    significance: "国际力量对比更趋多元，经济全球化加深。",
    examPoints: "推动多极化力量：俄、日、中、欧盟、发展中国家；世界政治经济支柱：联合国、世贸组织。"
  },
  {
    category: "世界史",
    titleIncludes: "第三次科技革命",
    summary: "第三次科技革命以原子能、计算机、航天技术、生物工程等为代表，信息化推动全球化。",
    significance: "极大提升生产力并改变生产生活方式，同时加剧国际竞争。",
    examPoints: "1946电子计算机诞生；20世纪90年代互联网普及；进入信息时代。"
  }
];

historyEvents.forEach((item) => {
  if (!item || item.type !== "event") return;
  if (typeof item.title !== "string") return;

  eventEnrichments.forEach((rule) => {
    if (rule.category && item.category !== rule.category) return;
    if (rule.titleIncludes && !item.title.includes(rule.titleIncludes)) return;
    if (rule.summary !== undefined) item.summary = rule.summary;
    if (rule.significance !== undefined) item.significance = rule.significance;
    if (rule.examPoints !== undefined) item.examPoints = rule.examPoints;
  });
});

const PLACEHOLDER_TEXT = "\\";
historyEvents.forEach((item) => {
  if (!item || item.type !== "event") return;

  ["summary", "significance", "examPoints"].forEach((key) => {
    if (item[key] === undefined || item[key] === null || item[key] === "" || item[key] === "待补充") {
      item[key] = PLACEHOLDER_TEXT;
    }
  });
});

// 导出数据
if (typeof module !== 'undefined') {
  module.exports = historyEvents;
}

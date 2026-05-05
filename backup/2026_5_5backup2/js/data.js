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
    type: "event",
    year: "1840 年",
    title: "鸦片战争爆发，中国近代史开始",
    category: "中国古代史",
    summary: "",
    significance: "",
    examPoints: "待补充"
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

// 导出数据
if (typeof module !== 'undefined') {
  module.exports = historyEvents;
}

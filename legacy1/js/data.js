/**
 * 初中历史复习全景时间线 - 核心数据
 * 包含：年份, 事件名, 类别, 内容详情, 历史意义, 核心要点, 类型(event/summary)
 */
const historyEvents = [
  // --- 中国古代史 ---
  {
    type: "summary",
    title: "史前时期：原始社会",
    content: "特征：从打制石器到磨制石器，从采集狩猎到原始农耕。标志：农作物种植、家畜饲养、聚落、磨制石器。"
  },
  {
    type: "event",
    year: "约170万年前",
    title: "元谋人",
    category: "中国古代史",
    summary: "在云南元谋县发现，是我国境内目前已确认的最早古人类。",
    significance: "揭开了中国历史的第一页。",
    examPoints: "使用打制石器，知道使用火。"
  },
  {
    type: "event",
    year: "约70-20万年前",
    title: "北京人",
    category: "中国古代史",
    summary: "北京周口店龙骨山发现，保留猿的某些特征。",
    significance: "是世界上最重要的原始人类遗址之一。",
    examPoints: "打制石器（旧石器），学会使用火并保存火种。"
  },
  {
    type: "event",
    year: "约3万年前",
    title: "山顶洞人",
    category: "中国古代史",
    summary: "北京周口店龙骨山顶部发现，外貌特征与现代人基本相同。",
    significance: "人类进化的重要阶段。",
    examPoints: "掌握磨光和钻孔技术，懂得人工取火，有爱美意识。"
  },
  {
    type: "event",
    year: "约7000年前",
    title: "河姆渡居民",
    category: "中国古代史",
    summary: "长江流域代表，浙江余姚发现。",
    significance: "南方原始农耕文明的代表。",
    examPoints: "种植水稻，住干栏式房屋，使用木结构榫卯技术。"
  },
  {
    type: "event",
    year: "约6000年前",
    title: "半坡居民",
    category: "中国古代史",
    summary: "黄河流域代表，陕西西安发现。",
    significance: "北方原始农耕文明的代表。",
    examPoints: "种植粟，住半地穴式圆形房屋，制作彩陶。"
  },
  {
    type: "event",
    year: "远古传说",
    title: "炎黄部落与早期战争",
    category: "中国古代史",
    summary: "阪泉之战（炎黄战，黄帝胜）；涿鹿之战（炎黄联盟战蚩尤，炎黄胜）。",
    significance: "奠定了华夏族形成的基础。",
    examPoints: "黄帝、炎帝被尊为‘人文初祖’。原始农业兴起标志：农作物种植、家畜饲养、磨制石器、聚落。"
  },
  {
    type: "summary",
    title: "夏商西周时期：奴隶社会",
    content: "特征：早期国家的产生，‘家天下’取代‘公天下’。核心：青铜文明、甲骨文、分封制。"
  },
  {
    type: "event",
    year: "约前2070年/1046年",
    title: "夏商周的建立与更替",
    category: "中国古代史",
    summary: "禹建夏（家天下开始）；汤灭夏建商；武王伐纣（牧野之战）建西周，行分封制。",
    significance: "早期国家产生。分封制稳定了政局，扩大了统治范围。",
    examPoints: "启继位标志世袭制代替禅让制。甲骨文（商）。分封制：以血缘和功劳为准。"
  },
  {
    type: "summary",
    title: "春秋战国时期：社会变革与百家争鸣",
    content: "特征：王室衰微、诸侯争霸、分封制瓦解。根因：铁农具和牛耕的使用推广。"
  },
  {
    type: "event",
    year: "战国时期",
    title: "商鞅变法与都江堰",
    category: "中国古代史",
    summary: "秦国商鞅变法；李冰在岷江修筑都江堰。",
    significance: "秦国最强，为统一奠基。成都平原成‘天府之国’。",
    examPoints: "商鞅变法：确立县制、废井田、奖励耕战。都江堰：防洪灌溉水运。"
  },
  {
    type: "event",
    year: "春秋战国",
    title: "百家争鸣",
    category: "中国古代史",
    summary: "儒、道、法、墨、兵等学派兴起。孔子提倡‘仁’，老子主张‘无为’。",
    significance: "思想文化高峰，为中国古代文化奠定基础。",
    examPoints: "孔子：有教无类。韩非：以法治国，建立中央集权统治。墨子：兼爱非攻。"
  },
  {
    type: "summary",
    title: "秦汉时期：统一多民族国家的建立和巩固",
    content: "特征：君主专制中央集权制度的确立与巩固。朝代特征：统一多民族国家的建立和巩固。"
  },
  {
    type: "event",
    year: "前221年",
    title: "秦朝统一与巩固措施",
    category: "中国古代史",
    summary: "秦始皇建立第一个统一多民族封建国家。统一文字、货币、度量衡。",
    significance: "奠定了中国两千多年封建政治制度的基本格局。",
    examPoints: "中央集权制（皇帝、三公九卿、郡县制）。小篆、半两钱。灵渠。长城（临洮-辽东）。"
  },
  {
    type: "event",
    year: "前209年",
    title: "陈胜吴广起义",
    category: "中国古代史",
    summary: "大泽乡起义，我国历史上第一次农民大起义。",
    significance: "沉重打击了秦朝统治。",
    examPoints: "口号：‘王侯将相宁有种乎’。"
  },
  {
    type: "event",
    year: "汉武帝时期",
    title: "汉武帝巩固大一统",
    category: "中国古代史",
    summary: "政治：推恩令、刺史制度；思想：罢黜百家尊崇儒术；经济：盐铁官营、五铢钱。",
    significance: "西汉进入鼎盛时期。",
    examPoints: "董仲舒（思想）、主父偃（推恩令）。"
  },
  {
    type: "event",
    year: "前138/119年",
    title: "张骞通西域",
    category: "中国古代史",
    summary: "汉武帝派张骞两次出使西域。",
    significance: "开辟了通往西域的道路，促进了物产和文化的交流。",
    examPoints: "丝绸之路：长安-河西走廊-西域-中亚-西亚-欧洲。"
  },
  {
    type: "event",
    year: "前60年",
    title: "西域都护设置",
    category: "中国古代史",
    summary: "西汉在西域设置管理机构。",
    significance: "标志着新疆正式归属中央政权。",
    examPoints: "前60年，西域都护。"
  },
  {
    type: "event",
    year: "东汉时期",
    title: "医学与科技成就",
    category: "中国古代史",
    summary: "蔡伦改进造纸术；张仲景《伤寒杂病论》；华佗‘麻沸散’、‘五禽戏’。",
    significance: "对后世医药学和文化传播影响深远。",
    examPoints: "医圣张仲景；蔡侯纸。"
  },
  {
    type: "summary",
    title: "三国两晋南北朝：政权分立与民族交融",
    content: "特征：北方民族大交融，南方经济得到开发。核心：孝文帝改革。"
  },
  {
    type: "event",
    year: "200/208年",
    title: "官渡/赤壁之战",
    category: "中国古代史",
    summary: "官渡：曹操胜袁绍；赤壁：孙刘联军胜曹操。",
    significance: "官渡奠定北方统一基础；赤壁奠定三国鼎立基础。",
    examPoints: "以少胜多的典型战例。"
  },
  {
    type: "event",
    year: "魏晋南北朝",
    title: "江南地区开发",
    category: "中国古代史",
    summary: "北方战乱导致北人南迁，带来技术和劳动力。",
    significance: "为经济重心南移奠定基础。",
    examPoints: "根本原因：北人南迁。自然条件优越。"
  },
  {
    type: "event",
    year: "494年",
    title: "北魏孝文帝改革",
    category: "中国古代史",
    summary: "迁都洛阳，推行汉化政策（穿汉服、说汉语、改汉姓、通汉婚）。",
    significance: "促进了北方民族的大交融。",
    examPoints: "胡汉观念淡薄，民族隔阂减少。"
  },
  {
    type: "event",
    year: "南北朝时期",
    title: "科技与艺术成就",
    category: "中国古代史",
    summary: "祖冲之圆周率；贾思勰《齐民要术》；王羲之《兰亭集序》；顾恺之《女史箴图》。",
    significance: "展示了辉煌的文化成就。",
    examPoints: "《齐民要术》是我国现存最早的一部完整农书。"
  },
  {
    type: "summary",
    title: "隋唐时期：繁荣与开放的时代",
    content: "特征：制度创新、中外交流、盛世局面。核心：科举制、大运河、贞观之治。"
  },
  {
    type: "event",
    year: "581-618年",
    title: "隋朝建立与贡献",
    category: "中国古代史",
    summary: "杨坚建立隋朝。隋炀帝开通大运河，创立科举制。",
    significance: "加强了南北联系，选官制度发生根本变化。",
    examPoints: "大运河以洛阳为中心。进士科标志科举制诞生。"
  },
  {
    type: "event",
    year: "唐朝前期",
    title: "唐朝盛世与兴盛原因",
    category: "中国古代史",
    summary: "贞观之治（太宗）、开元盛世（玄宗）。国家统一，社会稳定；统治者以民为本，完善科举制。",
    significance: "唐朝进入全盛时期，为后世繁荣奠定基础。",
    examPoints: "兴盛原因：曲辕犁、筒车（经济）；开明的民族政策；开放的对外政策。文成公主入藏。"
  },
  {
    type: "event",
    year: "唐朝",
    title: "中外交流与文化艺术",
    category: "中国古代史",
    summary: "鉴真东渡（日本）、玄奘西行（天竺）。书法家：颜真卿、柳公权、欧阳询。",
    significance: "展示了唐朝开放的外交和繁荣的文化。",
    examPoints: "唐招提寺（日本）；《大唐西域记》。颜筋柳骨。"
  },
  {
    type: "summary",
    title: "辽宋夏金元时期：民族关系发展和社会变化",
    content: "特征：经济重心南移完成，多元文化碰撞交融。民族政权并立（辽、西夏、金）。"
  },
  {
    type: "event",
    year: "北宋/南宋",
    title: "经济重心南移与宋代繁荣",
    category: "中国古代史",
    summary: "唐中叶开始，南宋完成。‘苏湖熟，天下足’。农业技术进步（秧马、复种技术）。",
    significance: "南方成为全国经济重心，商业打破时空限制。",
    examPoints: "交子（最早纸币，北宋四川）、市舶司（管理外贸）、瓦子（娱乐兼营商业）。"
  },
  {
    type: "event",
    year: "元朝",
    title: "元朝统治与疆域拓展",
    category: "中国古代史",
    summary: "忽必烈建立元朝。实行行省制度。新纳入版图：西藏、台湾。",
    significance: "加强了对边疆的管辖，奠定了近代疆域基础。",
    examPoints: "澎湖巡检司（管台湾）、宣政院（管西藏）。中书省直辖‘腹里’（山、鲁、冀）。"
  },
  {
    type: "event",
    year: "宋元时期",
    title: "科技发明与史学巨著",
    category: "中国古代史",
    summary: "活字印刷术（毕昇）、指南针、火药广泛应用。《资治通鉴》（司马光）。",
    significance: "推动了世界文明的进程。《资治通鉴》记述战国到五代史。",
    examPoints: "指南针由阿拉伯人传到欧洲。毕昇活字印刷术。"
  },
  {
    type: "summary",
    title: "明清时期：统一多民族国家的巩固与发展",
    content: "特征：皇权高度强化，边疆管理完善。趋势：君主专制顶峰、闭关锁国。"
  },
  {
    type: "event",
    year: "明朝前期",
    title: "明朝皇权强化与外交",
    category: "中国古代史",
    summary: "朱元璋废丞相，设锦衣卫。郑和下西洋。",
    significance: "君主专制加强。郑和下西洋提高明朝威望。",
    examPoints: "郑和最远达非洲东海岸和红海沿岸。"
  },
  {
    type: "event",
    year: "明清时期",
    title: "边疆巩固与疆域四至",
    category: "中国古代史",
    summary: "戚继光抗倭；郑成功收复台湾（1662）；雅克萨之战。清朝疆域：西跨葱岭，北接西伯利亚，南到南海诸岛。",
    significance: "捍卫了国家主权，巩固了统一多民族国家。",
    examPoints: "1684年设台湾府。康熙册封班禅、顺治册封达赖。驻藏大臣。"
  },
  {
    type: "event",
    year: "清朝",
    title: "皇权顶峰与闭关锁国政策",
    category: "中国古代史",
    summary: "雍正设军机处。乾隆实行‘闭关锁国’政策（只留广州十三行）。文字狱。",
    significance: "专制达到顶峰。中国逐渐落后于世界潮流。",
    examPoints: "闭关锁国原因：天朝物产丰富、防范西方殖民者。影响：自卫作用但导致落伍。"
  },
  {
    type: "event",
    year: "明清文化",
    title: "科技巨著与文学艺术",
    category: "中国古代史",
    summary: "《天工开物》（宋应星）、《农政全书》（徐光启）、《本草纲目》、《红楼梦》、京剧。",
    significance: "集古代科技文化之大成。小说反映了时代特征。",
    examPoints: "《天工开物》：17世纪工艺百科全书。《红楼梦》：思想性艺术性最高。"
  },

  // --- 中国近代史 (1840-1949) ---
  {
    type: "summary",
    title: "晚清时期：侵略与抗争",
    content: "特征：半殖民地半封建社会形成。主题：救亡图存、近代化探索。"
  },
  {
    type: "event",
    year: "1840-1842年",
    title: "鸦片战争与《南京条约》",
    category: "中国近代史",
    summary: "林则徐虎门销烟为导火线。英国发动侵华战争。签订《南京条约》。",
    significance: "中国开始沦为半殖民地半封建社会，是中国近代史的开端。",
    examPoints: "《南京条约》：割香港岛、赔款2100万银元、五口通商、协定关税。失败根因：封建制度腐败。"
  },
  {
    type: "event",
    year: "1856-1860年",
    title: "第二次鸦片战争",
    category: "中国近代史",
    summary: "英法联军发动，火烧圆明园。签订《天津条约》、《北京条约》。",
    significance: "中国半殖民地化程度进一步加深。",
    examPoints: "俄国侵占我国北方150多万平方千米领土。侵略势力由沿海深入长江中下游。"
  },
  {
    type: "event",
    year: "19世纪60-90年代",
    title: "洋务运动与近代化开端",
    category: "中国近代史",
    summary: "口号‘自强’（军事）、‘求富’（民用）。北洋舰队全军覆没标志其破产。",
    significance: "中国近代化的开端，客观上促进了民族资本主义产生。",
    examPoints: "江南机器制造总局、京师同文馆。性质：封建统治者的自救运动。"
  },
  {
    type: "event",
    year: "1894-1895年",
    title: "甲午中日战争与《马关条约》",
    category: "中国近代史",
    summary: "黄海海战邓世昌牺牲。签订《马关条约》。刺激列强瓜分中国狂潮。",
    significance: "大大加深了中国半殖民地化程度，激起民族觉醒。",
    examPoints: "《马关条约》：割辽台澎、赔款两亿、开四口、允设厂（资本输出）。"
  },
  {
    type: "event",
    year: "1898-1901年",
    title: "戊戌变法、义和团与《辛丑条约》",
    category: "中国近代史",
    summary: "公车上书与百日维新。义和团‘扶清灭洋’。八国联军侵华并签订《辛丑条约》。",
    significance: "变法思想启蒙。条约标志中国完全沦为半殖民地半封建社会。",
    examPoints: "《辛丑条约》：赔款4.5亿两，沦为‘洋人的朝廷’。义和团性质：反帝爱国运动。"
  },
  {
    type: "event",
    year: "1911年",
    title: "辛亥革命与中华民国建立",
    category: "中国近代史",
    summary: "孙中山领导，武昌起义。建立中华民国，颁布《临时约法》。",
    significance: "推翻清朝统治，终结两千多年君主专制，开创近代民族民主革命，民主共和观念深入人心。",
    examPoints: "三民主义。局限：未改变社会性质。影响：推动民族工业发展，促进移风易俗。"
  },
  {
    type: "event",
    year: "1915-1919年",
    title: "新文化运动与五四运动",
    category: "中国近代史",
    summary: "陈独秀、鲁迅提倡‘德先生’与‘赛先生’。五四运动是一场彻底的反帝反封建爱国运动。",
    significance: "动摇了封建礼教统治地位。五四运动标志着新民主主义革命的开端。",
    examPoints: "《新青年》。外争主权，内除国贼。工人阶级登上政治舞台。"
  },
  {
    type: "event",
    year: "1921-1949年",
    title: "中共历次会议与奋斗历程",
    category: "中国近代史",
    summary: "中共一大（建党）；二大（民主革命纲领）；八七会议（枪杆子里出政权）；七大（毛泽东思想）。",
    significance: "自从有了中共，中国革命面貌焕然一新。",
    examPoints: "一大：开天辟地。二大：反帝反封建。七大：确立指导思想。"
  },
  {
    type: "event",
    year: "1934-1936年",
    title: "红军长征与遵义会议",
    category: "中国近代史",
    summary: "第五次反围剿失败后战略转移。遵义会议纠正‘左’倾错误。",
    significance: "长征铸就长征精神，播下革命种子。遵义会议是生死攸关的转折点。",
    examPoints: "遵义会议：从幼年走向成熟的标志。挽救了党和红军。"
  },
  {
    type: "summary",
    title: "抗日战争与解放战争",
    content: "特征：全民族抗战，推翻国民党统治。"
  },
  {
    type: "event",
    year: "1931/1936年",
    title: "局部抗战与西安事变",
    category: "中国近代史",
    summary: "九一八事变（局部抗战开始）。西安事变和平解决。",
    significance: "西安事变和平解决标志着抗日民族统一战线初步形成。",
    examPoints: "张学良、杨虎城。扭转时局的关键。"
  },
  {
    type: "event",
    year: "1937年",
    title: "七七事变与全面抗战",
    category: "中国近代史",
    summary: "卢沟桥事变爆发，日本全面侵华。",
    significance: "中国全民族抗战的开始。",
    examPoints: "淞沪会战（打破三月灭华迷梦）、台儿庄战役、百团大战。"
  },
  {
    type: "event",
    year: "1945年",
    title: "抗日战争胜利",
    category: "中国近代史",
    summary: "日本签署投降书。中共七大召开。",
    significance: "近代以来第一次取得完全胜利的民族解放战争。",
    examPoints: "中共在抗战中发挥了中流砥柱作用。毛泽东思想确立为指导思想。"
  },
  {
    type: "event",
    year: "1946-1949年",
    title: "人民解放战争",
    category: "中国近代史",
    summary: "内战爆发。三大战役、渡江战役。",
    significance: "推翻了国民党在大陆的统治。",
    examPoints: "三大战役：辽沈、淮海、平津。1949年4月23日南京解放。"
  },

  // --- 中国现代史 (1949-至今) ---
  {
    type: "summary",
    title: "新中国成立与社会主义建设探索",
    content: "特征：社会主义制度的建立，艰难曲折的探索。"
  },
  {
    type: "event",
    year: "1950-1953年",
    title: "抗美援朝与保家卫国",
    category: "中国现代史",
    summary: "中国人民志愿军跨过鸭绿江。彭德怀任司令员。",
    significance: "捍卫了新中国安全，大大提高了我国的国际地位，是民族复兴的重要里程碑。",
    examPoints: "意义：打破了美军不可战胜的神话。英雄：黄继光、邱少云。"
  },
  {
    type: "event",
    year: "1953-1957年",
    title: "一五计划与三大改造完成",
    category: "中国现代史",
    summary: "一五计划优先发展重工业。三大改造对农业、手工业和资本主义工商业进行改造。",
    significance: "开始改变工业落后面貌。1956年底，社会主义基本制度在我国建立。",
    examPoints: "三大改造实质：生产资料私有制向社会主义公有制转变。赎买政策。"
  },
  {
    type: "event",
    year: "1956/1958年",
    title: "探索与失误",
    category: "中国现代史",
    summary: "中共八大（良好开端）；大跃进与人民公社化运动（失误）。",
    significance: "曲折中前进。",
    examPoints: "1961年‘调整、巩固、充实、提高’八字方针。"
  },
  {
    type: "event",
    year: "1966-1976年",
    title: "文化大革命",
    category: "中国现代史",
    summary: "给党和国家带来严重挫折。期间取得一些科技成就。",
    significance: "沉重的教训。",
    examPoints: "氢弹成功（1967）、东方红一号（1970）、籼型杂交水稻（1973）。"
  },
  {
    type: "summary",
    title: "改革开放与新时代",
    content: "特征：中国特色社会主义道路，民族复兴。"
  },
  {
    type: "event",
    year: "1978年",
    title: "十一届三中全会",
    category: "中国现代史",
    summary: "停止‘阶级斗争为纲’，重心转到经济建设。",
    significance: "具有深远意义的伟大转折，改革开放开端。",
    examPoints: "实事求是。形成以邓小平为核心的第二代中央领导集体。"
  },
  {
    type: "event",
    year: "1980年代",
    title: "改革开放的推进与特区设立",
    category: "中国现代史",
    summary: "家庭联产承包责任制；1980年设深圳、珠海、汕头、厦门特区。城市改革中心环节是增强企业活力。",
    significance: "极大地解放了生产力，特区成为‘窗口’。",
    examPoints: "经济特区作用：引进外资、技术、管理经验。对外开放格局形成。"
  },
  {
    type: "event",
    year: "1990年代至今",
    title: "深化改革与加入世贸",
    category: "中国现代史",
    summary: "1992年邓小平南方谈话。2001年中国加入世界贸易组织（WTO）。",
    significance: "进一步解放思想。入世为参与经济全球化开辟新途径。",
    examPoints: "南方谈话：推动改革开放进入新阶段。入世意义：开拓国民经济发展空间。"
  },
  {
    type: "event",
    year: "1970年代至今",
    title: "新中国外交成就与格局",
    category: "中国现代史",
    summary: "恢复联合国合法席位（1971）；尼克松访华；中美建交。全方位外交布局。",
    significance: "国际地位提高，为现代化建设提供良好环境。中国在国际事务中发挥日益重要作用。",
    examPoints: "恢复席位意义：外交重大胜利。改革开放后布局：全方位、多层次、立体化。"
  },

  // --- 世界史 ---
  {
    type: "summary",
    title: "古代世界文明",
    content: "特征：大河文明与海洋文明。奴隶制社会形态。"
  },
  {
    type: "event",
    year: "公元前3000年左右",
    title: "古代亚非文明：大河文明",
    category: "世界史",
    summary: "古埃及（尼罗河、金字塔）、古巴比伦（两河流域、《汉谟拉比法典》）、古印度（印度河、种姓制度）。",
    significance: "农耕文明的代表，人类法治传统和文明的源头。",
    examPoints: "《汉谟拉比法典》：世界上第一部较为完整的成文法典。种姓制度：等级森严，世代相袭。"
  },
  {
    type: "event",
    year: "公元前5世纪",
    title: "希腊民主政治与罗马法律",
    category: "世界史",
    summary: "雅典伯里克利主政，民主达到全盛。罗马共和国建立，颁布《十二铜表法》。",
    significance: "雅典民主是近代西方民主的源头；《十二铜表法》是欧洲法学渊源。",
    examPoints: "公民大会是最高权力机构。直接民主（奴隶制民主）。津贴制度。"
  },
  {
    type: "event",
    year: "公元前4世纪-2世纪",
    title: "古典帝国与文化",
    category: "世界史",
    summary: "亚历山大东征；罗马帝国全盛（2世纪地中海为内湖）。希腊神话、哲学（苏格拉底、亚里士多德）。",
    significance: "促进了东西方文化大交融。希腊文化带有人文主义色彩。",
    examPoints: "《荷马史诗》。帕特农神庙。儒略历（现代公历基础）。"
  },
  {
    type: "summary",
    title: "中世纪的欧亚世界",
    content: "特征：封建制度确立，土地封赐为纽带。西欧庄园、城市与大学兴起。"
  },
  {
    type: "event",
    year: "8/9世纪",
    title: "西欧封建制、庄园与城市",
    category: "世界史",
    summary: "封君封臣制度（以土地封赐为纽带）；庄园（自给自足单位）；城市重新兴起（10世纪）。",
    significance: "西欧封建社会的基础。大学兴起被誉为‘最美好的花朵’。",
    examPoints: "封建制特点：等级森严，不可越级从属。庄园法庭维护秩序。"
  },
  {
    type: "event",
    year: "6世纪-15世纪",
    title: "拜占庭帝国与《罗马民法大全》",
    category: "世界史",
    summary: "查士丁尼编纂《罗马民法大全》。拜占庭保留了古希腊罗马文化。",
    significance: "奠定了欧洲民法的基础。为文艺复兴提供了精神营养。",
    examPoints: "《查士丁尼法典》。1453年被奥斯曼土耳其所灭。"
  },
  {
    type: "event",
    year: "646年/7世纪",
    title: "大化改新与阿拉伯帝国",
    category: "世界史",
    summary: "日本大化改新（学唐朝）；穆罕默德创立伊斯兰教，阿拉伯半岛统一。",
    significance: "日本成为中央集权制封建国家；阿拉伯人是东西方文化交流使者。",
    examPoints: "孝德天皇。阿拉伯数字（印度人发明）。《医典》、《天方夜谭》。"
  },
  {
    type: "event",
    year: "14-16世纪",
    title: "走向近代：文艺复兴与新航路开辟",
    category: "世界史",
    summary: "文艺复兴（人文主义）；新航路开辟（哥伦布、麦哲伦）；早期殖民掠夺。",
    significance: "世界开始连为一个整体，促进了资本主义产生与发展。",
    examPoints: "文艺复兴先驱但丁（《神曲》）；达芬奇、莎士比亚。租地农场与手工工场标志资本主义萌芽。"
  },
  {
    type: "summary",
    title: "资本主义制度的初步确立",
    content: "特征：早期资产阶级革命，从人治向法治、专制向民主转变。"
  },
  {
    type: "event",
    year: "17-18世纪",
    title: "英美法资产阶级革命",
    category: "世界史",
    summary: "英国《权利法案》（君主立宪）；美国《独立宣言》、1787年宪法；法国《人权宣言》。",
    significance: "扫清了资本主义发展障碍，传播了自由平等思想。",
    examPoints: "美国内战既是资产阶级革命也是民族解放战争。华盛顿、拿破仑。"
  },
  {
    type: "event",
    year: "18世纪60年代",
    title: "第一次工业革命",
    category: "世界史",
    summary: "瓦特改良蒸汽机；斯蒂芬孙发明火车。大工厂制度取代手工工场。",
    significance: "人类进入‘蒸汽时代’。英国成为世界工业中心。",
    examPoints: "特点：经验积累，科学与技术尚未紧密结合。首先发生于英国棉纺织业。"
  },
  {
    type: "event",
    year: "1848年",
    title: "马克思主义诞生",
    category: "世界史",
    summary: "《共产党宣言》发表。",
    significance: "无产阶级斗争有了科学理论指导。",
    examPoints: "马克思、恩格斯。巴黎公社（第一次政权尝试）。"
  },
  {
    type: "summary",
    title: "资本主义的扩展与剧变",
    content: "特征：工业文明扩展，世界大战与政治格局演变。"
  },
  {
    type: "event",
    year: "19世纪60年代",
    title: "俄美日重大改革与战争",
    category: "世界史",
    summary: "俄国农奴制改革；美国内战；日本明治维新。",
    significance: "资本主义制度在世界范围内进一步扩展。",
    examPoints: "林肯《解放黑人奴隶宣言》。明治维新‘文明开化’。"
  },
  {
    type: "event",
    year: "19世纪70年代",
    title: "第二次工业革命",
    category: "世界史",
    summary: "电力应用（爱迪生）；内燃机与汽车（本茨）、飞机（莱特兄弟）。",
    significance: "人类进入‘电气时代’。产生垄断组织，资本主义向帝国主义过渡。",
    examPoints: "最突出特点：科学研究同工业生产紧密结合。欧美多国同时进行。"
  },
  {
    type: "event",
    year: "1914-1918年",
    title: "第一次世界大战",
    category: "世界史",
    summary: "萨拉热窝事件为导火线。同盟国vs协约国。",
    significance: "动摇欧洲优势地位。形成凡尔赛-华盛顿体系。",
    examPoints: "凡尔登战役。帝国主义掠夺战争。"
  },
  {
    type: "event",
    year: "1917/1933年",
    title: "苏联模式与罗斯福新政",
    category: "世界史",
    summary: "十月革命；列宁新经济政策；苏联模式（斯大林）；罗斯福新政。",
    significance: "探索不同的社会发展模式。苏联由落后农业国变先进工业国。",
    examPoints: "新经济政策特点：允许多种经济并存。罗斯福新政：国家干预经济。"
  },
  {
    type: "event",
    year: "1939-1945年",
    title: "第二次世界大战",
    category: "世界史",
    summary: "世界反法西斯同盟建立。《联合国家宣言》。",
    significance: "粉碎了法西斯野心。深刻改变世界格局。",
    examPoints: "斯大林格勒保卫战（转折）。雅尔塔会议。"
  },
  {
    type: "event",
    year: "1947-1991年",
    title: "冷战对峙与两极格局",
    category: "世界史",
    summary: "杜鲁门主义（政治）、马歇尔计划（经济）、北约与华约（军事）。",
    significance: "形成了长期的冷战对峙局面。1991年两极格局结束。",
    examPoints: "冷战实质：美苏争夺世界霸权。1991年苏联解体。"
  },
  {
    type: "event",
    year: "二战后",
    title: "资本主义新变化与欧洲联合",
    category: "世界史",
    summary: "美国‘新经济’；日本成为第二经济大国；欧共体与欧盟建立。",
    significance: "世界格局向多极化发展。欧洲一体化进程加快。",
    examPoints: "1993年欧盟成立。1968年日本成为第二经济大国。社会保障制度维护统治。"
  },
  {
    type: "event",
    year: "20世纪90年代至今",
    title: "冷战后的世界格局",
    category: "世界史",
    summary: "政治多极化趋势；经济全球化（WTO）。",
    significance: "和平与发展是时代主题。",
    examPoints: "‘一超多强’。中国是多极化中重要一极。"
  }
];

// 导出数据
if (typeof module !== 'undefined') {
  module.exports = historyEvents;
}

﻿angular.module('marlon.input.data', [])
.value('marlonInputTabsItemList', {
    industryClassic: [{
        text: "互联网/游戏/软件",
        value: 000,
        items: [{
            text: "互联网/移动互联网/电子商务",
            value: 00,
        }, {
            text: "网络游戏",
            value: 00,
        }, {
            text: "计算机软件",
            value: 00,
        }, {
            text: "IT服务/系统集成",
            value: 00,
        }, ],
    }, {
        text: "电子/通信/硬件",
        value: 000,
        items: [{
            text: "电子技术/半导体/集成电路",
            value: 00,
        }, {
            text: "通信",
            value: 00,
        }, {
            text: "计算机硬件/网络设备",
            value: 00,
        }, ],
    }, {
        text: "房地产/建筑/物业",
        value: 000,
        items: [{
            text: "房地产开发/建筑/建材/工程",
            value: 00,
        }, {
            text: "规划/设计/装潢",
            value: 00,
        }, {
            text: "房地产服务",
            value: 00,
        }, ],
    }, {
        text: "金融",
        value: 000,
        items: [{
            text: "银行",
            value: 00,
        }, {
            text: "保险",
            value: 00,
        }, {
            text: "基金/证券/期货/投资",
            value: 00,
        }, {
            text: "会计/审计",
            value: 00,
        }, {
            text: "信托/担保/拍卖/典当",
            value: 00,
        }, ],
    }, {
        text: "消费品",
        value: 000,
        items: [{
            text: "食品/饮料/烟酒/日化",
            value: 00,
        }, {
            text: "百货/批发/零售",
            value: 00,
        }, {
            text: "服装服饰/纺织/皮革",
            value: 00,
        }, {
            text: "家具/家电",
            value: 00,
        }, {
            text: "办公用品及设备",
            value: 00,
        }, {
            text: "奢侈品/收藏品",
            value: 00,
        }, {
            text: "工艺品/珠宝/玩具",
            value: 00,
        }, ],
    }, {
        text: "汽车/机械/制造",
        value: 000,
        items: [{
            text: "汽车/摩托车",
            value: 00,
        }, {
            text: "机械制造/机电/重工",
            value: 00,
        }, {
            text: "印刷/包装/造纸",
            value: 00,
        }, {
            text: "原材料及加工",
            value: 00,
        }, {
            text: "仪器/仪表/工业自动化/电气",
            value: 00,
        }, ],
    }, {
        text: "服务/外包/中介",
        value: 000,
        items: [{
            text: "专业服务",
            value: 00,
        }, {
            text: "中介服务",
            value: 00,
        }, {
            text: "外包服务",
            value: 00,
        }, {
            text: "检测/认证",
            value: 00,
        }, {
            text: "旅游/酒店/餐饮/生活服务",
            value: 00,
        }, {
            text: "娱乐/休闲/体育",
            value: 00,
        }, {
            text: "租赁服务",
            value: 00,
        }, ],
    }, {
        text: "广告/传媒/教育/文化",
        value: 000,
        items: [{
            text: "广告/公关/市场推广/会展",
            value: 00,
        }, {
            text: "影视/媒体/艺术/文化/出版",
            value: 00,
        }, {
            text: "教育/培训/学术/科研/院校",
            value: 00,
        }, ],
    }, {
        text: "交通/贸易/物流",
        value: 000,
        items: [{
            text: "交通/物流/运输",
            value: 00,
        }, {
            text: "贸易/进出口",
            value: 00,
        }, {
            text: "航空/航天",
            value: 00,
        }, ],
    }, {
        text: "制药/医疗",
        value: 000,
        items: [{
            text: "制药/生物工程",
            value: 00,
        }, {
            text: "医疗/保健/美容/卫生服务",
            value: 00,
        }, {
            text: "医疗设备/器械",
            value: 00,
        }, ],
    }, {
        text: "能源/化工/环保",
        value: 000,
        items: [{
            text: "能源",
            value: 00,
        }, {
            text: "石油/化工",
            value: 00,
        }, {
            text: "采掘/冶炼/矿产",
            value: 00,
        }, {
            text: "环保",
            value: 00,
        }, {
            text: "新能源",
            value: 00,
        }, ],
    }, {
        text: "政府/农林牧渔",
        value: 000,
        items: [{
            text: "政府/公共事业/非营利机构",
            value: 00,
        }, {
            text: "农林牧渔",
            value: 00,
        }, {
            text: "其它",
            value: 00,
        }, ],
    },
    ],
    industry: [
				{
				    text: "机器人",
				    value: 000,
				    items: [
                    { text: "工业机器人", value: 00, },
                    { text: "服务机器人", value: 00, },
				    ]
				},
				{
				    text: "无人机",
				    value: 000,
				    items: [
                    { text: "军用无人机", value: 00, },
                    { text: "民用无人机", value: 00, },
                    { text: "消费级无人机", value: 00, },
				    ]
				},
		 		 {
		 		     text: "虚拟现实",
		 		     value: 000,
		 		     items: [
                     { text: "AR/AugmentedReality/增强现实", value: 00, },
                     { text: "VR/VirtualReality/虚拟现实", value: 00, },
                     { text: "MR/Mix Reality/混合现实", value: 00, },
                     { text: "CR/CinematicReality/影像现实", value: 00, },
                     { text: "ER/ExpandedReality/拓展现实", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "区块链",
		 		     value: 000,
		 		     items: [
                     { text: "数字货币", value: 00, },
                     { text: "跨境支付与结算", value: 00, },
                     { text: "票据与供应链金融业务", value: 00, },
                     { text: "证券发行与交易", value: 00, },
                     { text: "客户征信与反欺诈", value: 00, },
                     { text: "公证", value: 00, },
                     { text: "移动钱包", value: 00, },
                     { text: "医疗档案管理", value: 00, },
                     { text: "租房", value: 00, },
                     { text: "智能锁", value: 00, },
                     { text: "奢侈品收藏认证", value: 00, },
                     { text: "虚拟现实", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "物联网",
		 		     value: 000,
		 		     items: [
                     { text: "传感器/芯片", value: 00, },
                     { text: "通信模块", value: 00, },
                     { text: "电信运营", value: 00, },
                     { text: "中间件及应用", value: 00, },
                     { text: "系统集成", value: 00, },
                     { text: "服务提供", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "大数据",
		 		     value: 000,
		 		     items: [
                     { text: "硬件", value: 00, },
                     { text: "基础软件", value: 00, },
                     { text: "应用软件", value: 00, },
                     { text: "信息服务", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "云计算",
		 		     value: 000,
		 		     items: [
                     { text: "IaaS/基础设施即服务", value: 00, },
                     { text: "PaaS/平台即服务", value: 00, },
                     { text: "SaaS/软件即服务", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "人工智能",
		 		     value: 000,
		 		     items: [
                     { text: "深度学习/机器学习（通用）", value: 00, },
                     { text: "深度学习/机器学习（应用）", value: 00, },
                     { text: "自然语言处理（通用）", value: 00, },
                     { text: "自然语言处理（语音识别）", value: 00, },
                     { text: "计算机视觉/图像识别（通用）", value: 00, },
                     { text: "计算机视觉/图像识别（应用）", value: 00, },
                     { text: "手势控制", value: 00, },
                     { text: "虚拟私人助手", value: 00, },
                     { text: "智能机器人", value: 00, },
                     { text: "推荐引擎和协助过滤算法", value: 00, },
                     { text: "情境感知计算", value: 00, },
                     { text: "语音翻译", value: 00, },
                     { text: "视频内容自动识别", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "工业设计智能化",
		 		     value: 000,
		 		     items: [
                     { text: "产品设计", value: 00, },
                     { text: "环境设计", value: 00, },
                     { text: "传播设计", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能制造装备",
		 		     value: 000,
		 		     items: [
                     { text: "高档数控机床与基础制造装备", value: 00, },
                     { text: "自动化成套生产线", value: 00, },
                     { text: "精密和智能仪器仪表与试验设备", value: 00, },
                     { text: "智能控制系统", value: 00, },
                     { text: "关键基础零部件和元器件及通用部件", value: 00, },
                     { text: "智能专用装备", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能化生产建材",
		 		     value: 000,
		 		     items: [
                     { text: "智能化生产建材", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能物流",
		 		     value: 000,
		 		     items: [
                     { text: "智能仓储物流", value: 00, },
                     { text: "智能分拣", value: 00, },
                     { text: "智能物流系统集成", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能交通",
		 		     value: 000,
		 		     items: [
                     { text: "智能公交", value: 00, },
                     { text: "电子警察", value: 00, },
                     { text: "交通信号控制", value: 00, },
                     { text: "卡口", value: 00, },
                     { text: "交通视频监控", value: 00, },
                     { text: "出租车信息服务管理", value: 00, },
                     { text: "城市客运枢纽信息化", value: 00, },
                     { text: "GPS与警用系统", value: 00, },
                     { text: "交通信息采集与发布", value: 00, },
                     { text: "交通指挥类平台", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "3D打印",
		 		     value: 000,
		 		     items: [
                     { text: "零件", value: 00, },
                     { text: "医疗", value: 00, },
                     { text: "航空航天", value: 00, },
                     { text: "消费电子", value: 00, },
                     { text: "汽车行业", value: 00, },
                     { text: "模具开发", value: 00, },
                     { text: "功能性设计模型", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能家居",
		 		     value: 000,
		 		     items: [
                     { text: "智能家电", value: 00, },
                     { text: "智能控制类", value: 00, },
                     { text: "节能类", value: 00, },
                     { text: "园艺类", value: 00, },
                     { text: "控制平台类", value: 00, },
                     { text: "医疗健康类", value: 00, },
                     { text: "家居机器人类", value: 00, },
                     { text: "智能灯具类", value: 00, },
                     { text: "宠物/婴儿监测类", value: 00, },
                     { text: "安全防护类", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能穿戴",
		 		     value: 000,
		 		     items: [
                     { text: "老人看护领域", value: 00, },
                     { text: "移动医疗", value: 00, },
                     { text: "儿童防丢", value: 00, },
                     { text: "运动健身", value: 00, },
                     { text: "智能服饰", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能医疗",
		 		     value: 000,
		 		     items: [
                     { text: "业务管理系统", value: 00, },
                     { text: "电子病历系统", value: 00, },
                     { text: "临床应用系统", value: 00, },
                     { text: "慢性疾病管理系统", value: 00, },
                     { text: "区域医疗信息交换系统", value: 00, },
                     { text: "临床支持决策系统", value: 00, },
                     { text: "公共健康卫生系统", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "智能电网",
		 		     value: 000,
		 		     items: [
                     { text: "智能电网及智能成套设备", value: 00, },
                     { text: "智能配电", value: 00, },
                     { text: "控制系统", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "无人驾驶",
		 		     value: 000,
		 		     items: [
                     { text: "无人驾驶汽车", value: 00, },
                     { text: "无人驾驶船", value: 00, },
                     { text: "无人驾驶地铁", value: 00, },
                     { text: "无人驾驶列车", value: 00, },
		 		     ]
		 		 },
    ],
    positionClassic: [{
        text: "通用职能类",
        value: 000,
        items: [{
            text: "高级管理",
            value: 00,
            items: [{
                text: "首席执行官CEO/总裁/总经理",
                value: 0
            }, {
                text: "首席运营官COO",
                value: 0,
            }, {
                text: "合伙人",
                value: 0
            }, {
                text: "副总裁/副总经理",
                value: 0,
            }, {
                text: "分公司/代表处负责人",
                value: 0
            }, {
                text: "部门/事业部管理",
                value: 0,
            }, {
                text: "投资者关系",
                value: 0,
            }, {
                text: "总裁助理/总经理助理",
                value: 0,
            }, {
                text: "企业秘书/董事会秘书",
                value: 0,
            }, ],
        }, {
            text: "人力资源",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "财务/审计/税务",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "市场",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "公关/媒介",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "销售/客服/技术支持",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "法务",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "行政/后勤/文秘",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "IT/互联网/通信",
        value: 000,
        items: [{
            text: "软件/互联网开发/系统集成",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "产品/运营/设计",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "IT质量管理/测试/配置管理",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {
        text: "房地产/建筑/物业",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "金融",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "生产/制造",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "质量管理/项目管理",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "教育/咨询/翻译",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "广告/传媒/设计",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "采购/贸易/交通/物流",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "医疗护理/生活服务",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "能源/矿产/环保",
        value: 000,
        items: [{
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    }, {

        text: "公务员/农林牧渔/其他",
        value: 000,
        items: [{
            text: "公务员/公益事业/科研",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "农/林/牧/渔",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "实习生/培训生/储备干部",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, {
            text: "其他",
            value: 00,
            items: [{
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, {
                text: "",
                value: 0
            }, {
                text: "",
                value: 0,
            }, ],
        }, ],
    },

    ],
    position: [

				{
				    text: "高级管理",
				    value: 000,
				    items: [
                    { text: "首席执行官CEO", value: 00, },
                    { text: "首席运营官COO", value: 00, },
                    { text: "合伙人", value: 00, },
                    { text: "事业部管理", value: 00, },
                    { text: "总裁助理", value: 00, },
                    { text: "董事会秘书", value: 00, },
				    ]
				},
				{
				    text: "人力资源",
				    value: 000,
				    items: [
                    { text: "人力资源经理", value: 00, },
                    { text: "人力资源专员", value: 00, },
                    { text: "招聘经理", value: 00, },
                    { text: "培训经理", value: 00, },
                    { text: "薪资福利经理", value: 00, },
                    { text: "绩效经理", value: 00, }
				    ]
				},
		 		 {
		 		     text: "财务",
		 		     value: 000,
		 		     items: [
                     { text: "财务经理", value: 00, },
                     { text: "会计师", value: 00, },
                     { text: "出纳员", value: 00, },
                     { text: "审计员", value: 00, },
                     { text: "财务分析员", value: 00, },
                     { text: "投融资经理", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "市场",
		 		     value: 000,
		 		     items: [
                     { text: "市场企划", value: 00, },
                     { text: "市场拓展", value: 00, },
                     { text: "产品经理", value: 00, },
		 		     ]
		 		 },
				 {
				     text: "销售",
				     value: 000,
				     items: [
                     { text: "销售经理", value: 00, },
                     { text: "销售代表", value: 00, },
                     { text: "销售工程师", value: 00, },
                     { text: "销售行政专员", value: 00, },
				     ]
				 },
		 		 {
		 		     text: "公关",
		 		     value: 000,
		 		     items: [
                     { text: "公关经理", value: 00, },
                     { text: "公关专员", value: 00, },
                     { text: "媒介策划", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "法务",
		 		     value: 000,
		 		     items: [
                     { text: "律师", value: 00, },
                     { text: "律师助理", value: 00, },
                     { text: "法务经理", value: 00, },
                     { text: "法务专员", value: 00, },
                     { text: "法律顾问", value: 00, },
                     { text: "合规主管", value: 00, },
					 { text: "知识产权", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "行政后勤",
		 		     value: 000,
		 		     items: [
                     { text: "行政经理", value: 00, },
                     { text: "行政专员", value: 00, },
                     { text: "助理/秘书/文员", value: 00, },
                     { text: "前台", value: 00, },
                     { text: "后勤/总务", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "硬件开发",
		 		     value: 000,
		 		     items: [
                     { text: "嵌入式硬件开发", value: 00, },
                     { text: "硬件工程师", value: 00, },
		 		     ]
		 		 },
		 		 {
		 		     text: "软件开发",
		 		     value: 000,
		 		     items: [
                     { text: "算法工程师", value: 00, },
                     { text: "数据挖掘", value: 00, },
                     { text: "数据分析师", value: 00, },
                     { text: "嵌入式软件开发", value: 00, },
		 		     ]
		 		 },
    ],
    location: [
    {
        text: "北京",
        items: [
            {
                text: "北京"
            }, {
                text: "东城区"
            },
            {
                text: "西城区"
            },
            {
                text: "崇文区"
            },
            {
                text: "宣武区"
            },
            {
                text: "朝阳区"
            },
            {
                text: "丰台区"
            },
            {
                text: "石景山区"
            },
            {
                text: "海淀区"
            },
            {
                text: "门头沟区"
            },
            {
                text: "房山区"
            },
            {
                text: "通州区"
            },
            {
                text: "顺义区"
            },
            {
                text: "昌平区"
            },
            {
                text: "大兴区"
            },
            {
                text: "平谷区"
            },
            {
                text: "怀柔区"
            },
            {
                text: "密云县"
            },
            {
                text: "延庆县"
            }
        ]
    },
    {
        text: "天津",
        items: [
            {
                text: "天津"
            }, {
                text: "和平区"
            },
            {
                text: "河东区"
            },
            {
                text: "河西区"
            },
            {
                text: "南开区"
            },
            {
                text: "河北区"
            },
            {
                text: "红挢区"
            },
            {
                text: "滨海新区"
            },
            {
                text: "东丽区"
            },
            {
                text: "西青区"
            },
            {
                text: "津南区"
            },
            {
                text: "北辰区"
            },
            {
                text: "宁河区"
            },
            {
                text: "武清区"
            },
            {
                text: "静海县"
            },
            {
                text: "宝坻区"
            },
            {
                text: "蓟县"
            }
        ]
    },
	    {
	        text: "上海",
	        items: [
                {
                    text: "上海"
                }, {
                    text: "黄浦区"
                },
                {
                    text: "卢湾区"
                },
                {
                    text: "徐汇区"
                },
                {
                    text: "长宁区"
                },
                {
                    text: "静安区"
                },
                {
                    text: "普陀区"
                },
                {
                    text: "闸北区"
                },
                {
                    text: "虹口区"
                },
                {
                    text: "杨浦区"
                },
                {
                    text: "闵行区"
                },
                {
                    text: "宝山区"
                },
                {
                    text: "嘉定区"
                },
                {
                    text: "浦东新区"
                },
                {
                    text: "金山区"
                },
                {
                    text: "松江区"
                },
                {
                    text: "奉贤区"
                },
                {
                    text: "青浦区"
                },
                {
                    text: "崇明县"
                }
	        ]
	    },
	    {
	        text: "重庆",
	        items: [
                {
                    text: "重庆"
                }, {
                    text: "万州区"
                },
                {
                    text: "涪陵区"
                },
                {
                    text: "渝中区"
                },
                {
                    text: "大渡口区"
                },
                {
                    text: "江北区"
                },
                {
                    text: "沙坪坝区"
                },
                {
                    text: "九龙坡区"
                },
                {
                    text: "南岸区"
                },
                {
                    text: "北碚区"
                },
                {
                    text: "万盛区"
                },
                {
                    text: "双挢区"
                },
                {
                    text: "渝北区"
                },
                {
                    text: "巴南区"
                },
                {
                    text: "长寿区"
                },
                {
                    text: "綦江县"
                },
                {
                    text: "潼南县"
                },
                {
                    text: "铜梁县"
                },
                {
                    text: "大足县"
                },
                {
                    text: "荣昌县"
                },
                {
                    text: "壁山县"
                },
                {
                    text: "梁平县"
                },
                {
                    text: "城口县"
                },
                {
                    text: "丰都县"
                },
                {
                    text: "垫江县"
                },
                {
                    text: "武隆县"
                },
                {
                    text: "忠县"
                },
                {
                    text: "开县"
                },
                {
                    text: "云阳县"
                },
                {
                    text: "奉节县"
                },
                {
                    text: "巫山县"
                },
                {
                    text: "巫溪县"
                },
                {
                    text: "黔江区"
                },
                {
                    text: "石柱土家族自治县"
                },
                {
                    text: "秀山土家族苗族自治县"
                },
                {
                    text: "酉阳土家族苗族自治县"
                },
                {
                    text: "彭水苗族土家族自治县"
                },
                {
                    text: "江津区"
                },
                {
                    text: "合川区"
                },
                {
                    text: "永川区"
                },
                {
                    text: "南川区"
                }
	        ]
	    },
    {
        text: "香港",
        items: [
            {
                text: "香港"
            }, {
                text: "中西区"
            },
            {
                text: "东区"
            },
            {
                text: "九龙城区"
            },
            {
                text: "观塘区"
            },
            {
                text: "南区"
            },
            {
                text: "深水区"
            },
            {
                text: "湾仔区"
            },
            {
                text: "黄大仙区"
            },
            {
                text: "油尖旺区"
            },
            {
                text: "离岛区"
            },
            {
                text: "葵青区"
            },
            {
                text: "北区"
            },
            {
                text: "西贡区"
            },
            {
                text: "沙田区"
            },
            {
                text: "屯门区"
            },
            {
                text: "大埔区"
            },
            {
                text: "荃湾区"
            },
            {
                text: "元朗区"
            }
        ]
    },
    {
        text: "澳门",
        items: [
            {
                text: "澳门"
            }, {
                text: "花地玛堂区"
            },
            {
                text: "圣安多尼堂区"
            },
            {
                text: "大堂区"
            },
            {
                text: "望德堂区"
            },
            {
                text: "风顺堂区"
            },
            {
                text: "嘉模堂区"
            },
            {
                text: "圣方济各堂区"
            }
        ]
    },
    {
        text: "河北",
        items: [
            {
                text: "石家庄",
                items: [
                    {
                        text: "长安区"
                    },
                    {
                        text: "桥东区"
                    },
                    {
                        text: "桥西区"
                    },
                    {
                        text: "新华区"
                    },
                    {
                        text: "井陉矿区"
                    },
                    {
                        text: "裕华区"
                    },
                    {
                        text: "井陉县"
                    },
                    {
                        text: "正定县"
                    },
                    {
                        text: "栾城县"
                    },
                    {
                        text: "行唐县"
                    },
                    {
                        text: "灵寿县"
                    },
                    {
                        text: "高邑县"
                    },
                    {
                        text: "深泽县"
                    },
                    {
                        text: "赞皇县"
                    },
                    {
                        text: "无极县"
                    },
                    {
                        text: "平山县"
                    },
                    {
                        text: "元氏县"
                    },
                    {
                        text: "赵县"
                    },
                    {
                        text: "辛集市"
                    },
                    {
                        text: "藁城市"
                    },
                    {
                        text: "晋州市"
                    },
                    {
                        text: "新乐市"
                    },
                    {
                        text: "鹿泉市"
                    }
                ]
            },
            {
                text: "唐山",
                items: [
                    {
                        text: "路南区"
                    },
                    {
                        text: "路北区"
                    },
                    {
                        text: "古冶区"
                    },
                    {
                        text: "开平区"
                    },
                    {
                        text: "丰南区"
                    },
                    {
                        text: "丰润区"
                    },
                    {
                        text: "滦县"
                    },
                    {
                        text: "滦南县"
                    },
                    {
                        text: "乐亭县"
                    },
                    {
                        text: "迁西县"
                    },
                    {
                        text: "玉田县"
                    },
                    {
                        text: "唐海县"
                    },
                    {
                        text: "遵化市"
                    },
                    {
                        text: "迁安市"
                    }
                ]
            },
            {
                text: "秦皇岛",
                items: [
                    {
                        text: "海港区"
                    },
                    {
                        text: "山海关区"
                    },
                    {
                        text: "北戴河区"
                    },
                    {
                        text: "青龙满族自治县"
                    },
                    {
                        text: "昌黎县"
                    },
                    {
                        text: "抚宁县"
                    },
                    {
                        text: "卢龙县"
                    }
                ]
            },
            {
                text: "邯郸",
                items: [
                    {
                        text: "邯山区"
                    },
                    {
                        text: "丛台区"
                    },
                    {
                        text: "复兴区"
                    },
                    {
                        text: "峰峰矿区"
                    },
                    {
                        text: "邯郸县"
                    },
                    {
                        text: "临漳县"
                    },
                    {
                        text: "成安县"
                    },
                    {
                        text: "大名县"
                    },
                    {
                        text: "涉县"
                    },
                    {
                        text: "磁县"
                    },
                    {
                        text: "肥乡县"
                    },
                    {
                        text: "永年县"
                    },
                    {
                        text: "邱县"
                    },
                    {
                        text: "鸡泽县"
                    },
                    {
                        text: "广平县"
                    },
                    {
                        text: "馆陶县"
                    },
                    {
                        text: "魏县"
                    },
                    {
                        text: "曲周县"
                    },
                    {
                        text: "武安市"
                    }
                ]
            },
            {
                text: "邢台",
                items: [
                    {
                        text: "桥东区"
                    },
                    {
                        text: "桥西区"
                    },
                    {
                        text: "邢台县"
                    },
                    {
                        text: "临城县"
                    },
                    {
                        text: "内丘县"
                    },
                    {
                        text: "柏乡县"
                    },
                    {
                        text: "隆尧县"
                    },
                    {
                        text: "任县"
                    },
                    {
                        text: "南和县"
                    },
                    {
                        text: "宁晋县"
                    },
                    {
                        text: "巨鹿县"
                    },
                    {
                        text: "新河县"
                    },
                    {
                        text: "广宗县"
                    },
                    {
                        text: "平乡县"
                    },
                    {
                        text: "威县"
                    },
                    {
                        text: "清河县"
                    },
                    {
                        text: "临西县"
                    },
                    {
                        text: "南宫市"
                    },
                    {
                        text: "沙河市"
                    }
                ]
            },
            {
                text: "保定",
                items: [
                    {
                        text: "新市区"
                    },
                    {
                        text: "北市区"
                    },
                    {
                        text: "南市区"
                    },
                    {
                        text: "满城县"
                    },
                    {
                        text: "清苑县"
                    },
                    {
                        text: "涞水县"
                    },
                    {
                        text: "阜平县"
                    },
                    {
                        text: "徐水县"
                    },
                    {
                        text: "定兴县"
                    },
                    {
                        text: "唐县"
                    },
                    {
                        text: "高阳县"
                    },
                    {
                        text: "容城县"
                    },
                    {
                        text: "涞源县"
                    },
                    {
                        text: "望都县"
                    },
                    {
                        text: "安新县"
                    },
                    {
                        text: "易县"
                    },
                    {
                        text: "曲阳县"
                    },
                    {
                        text: "蠡县"
                    },
                    {
                        text: "顺平县"
                    },
                    {
                        text: "博野县"
                    },
                    {
                        text: "雄县"
                    },
                    {
                        text: "涿州市"
                    },
                    {
                        text: "定州市"
                    },
                    {
                        text: "安国市"
                    },
                    {
                        text: "高碑店市"
                    }
                ]
            },
            {
                text: "张家口",
                items: [
                    {
                        text: "桥东区"
                    },
                    {
                        text: "桥西区"
                    },
                    {
                        text: "宣化区"
                    },
                    {
                        text: "下花园区"
                    },
                    {
                        text: "宣化县"
                    },
                    {
                        text: "张北县"
                    },
                    {
                        text: "康保县"
                    },
                    {
                        text: "沽源县"
                    },
                    {
                        text: "尚义县"
                    },
                    {
                        text: "蔚县"
                    },
                    {
                        text: "阳原县"
                    },
                    {
                        text: "怀安县"
                    },
                    {
                        text: "万全县"
                    },
                    {
                        text: "怀来县"
                    },
                    {
                        text: "涿鹿县"
                    },
                    {
                        text: "赤城县"
                    },
                    {
                        text: "崇礼县"
                    }
                ]
            },
            {
                text: "承德",
                items: [
                    {
                        text: "双桥区"
                    },
                    {
                        text: "双滦区"
                    },
                    {
                        text: "鹰手营子矿区"
                    },
                    {
                        text: "承德县"
                    },
                    {
                        text: "兴隆县"
                    },
                    {
                        text: "平泉县"
                    },
                    {
                        text: "滦平县"
                    },
                    {
                        text: "隆化县"
                    },
                    {
                        text: "丰宁满族自治县"
                    },
                    {
                        text: "宽城满族自治县"
                    },
                    {
                        text: "围场满族蒙古族自治县"
                    }
                ]
            },
            {
                text: "沧州",
                items: [
                    {
                        text: "新华区"
                    },
                    {
                        text: "运河区"
                    },
                    {
                        text: "沧县"
                    },
                    {
                        text: "青县"
                    },
                    {
                        text: "东光县"
                    },
                    {
                        text: "海兴县"
                    },
                    {
                        text: "盐山县"
                    },
                    {
                        text: "肃宁县"
                    },
                    {
                        text: "南皮县"
                    },
                    {
                        text: "吴桥县"
                    },
                    {
                        text: "献县"
                    },
                    {
                        text: "孟村回族自治县"
                    },
                    {
                        text: "泊头市"
                    },
                    {
                        text: "任丘市"
                    },
                    {
                        text: "黄骅市"
                    },
                    {
                        text: "河间市"
                    }
                ]
            },
            {
                text: "廊坊",
                items: [
                    {
                        text: "安次区"
                    },
                    {
                        text: "广阳区"
                    },
                    {
                        text: "固安县"
                    },
                    {
                        text: "永清县"
                    },
                    {
                        text: "香河县"
                    },
                    {
                        text: "大城县"
                    },
                    {
                        text: "文安县"
                    },
                    {
                        text: "大厂回族自治县"
                    },
                    {
                        text: "霸州市"
                    },
                    {
                        text: "三河市"
                    }
                ]
            },
            {
                text: "衡水",
                items: [
                    {
                        text: "桃城区"
                    },
                    {
                        text: "枣强县"
                    },
                    {
                        text: "武邑县"
                    },
                    {
                        text: "武强县"
                    },
                    {
                        text: "饶阳县"
                    },
                    {
                        text: "安平县"
                    },
                    {
                        text: "故城县"
                    },
                    {
                        text: "景县"
                    },
                    {
                        text: "阜城县"
                    },
                    {
                        text: "冀州市"
                    },
                    {
                        text: "深州市"
                    }
                ]
            }
        ]
    },
    {
        text: "山西",
        items: [
            {
                text: "太原",
                items: [
                    {
                        text: "小店区"
                    },
                    {
                        text: "迎泽区"
                    },
                    {
                        text: "杏花岭区"
                    },
                    {
                        text: "尖草坪区"
                    },
                    {
                        text: "万柏林区"
                    },
                    {
                        text: "晋源区"
                    },
                    {
                        text: "清徐县"
                    },
                    {
                        text: "阳曲县"
                    },
                    {
                        text: "娄烦县"
                    },
                    {
                        text: "古交市"
                    }
                ]
            },
            {
                text: "大同",
                items: [
                    {
                        text: "城区"
                    },
                    {
                        text: "矿区"
                    },
                    {
                        text: "南郊区"
                    },
                    {
                        text: "新荣区"
                    },
                    {
                        text: "阳高县"
                    },
                    {
                        text: "天镇县"
                    },
                    {
                        text: "广灵县"
                    },
                    {
                        text: "灵丘县"
                    },
                    {
                        text: "浑源县"
                    },
                    {
                        text: "左云县"
                    },
                    {
                        text: "大同县"
                    }
                ]
            },
            {
                text: "阳泉",
                items: [
                    {
                        text: "城区"
                    },
                    {
                        text: "矿区"
                    },
                    {
                        text: "郊区"
                    },
                    {
                        text: "平定县"
                    },
                    {
                        text: "盂县"
                    }
                ]
            },
            {
                text: "长治",
                items: [
                    {
                        text: "城区"
                    },
                    {
                        text: "郊区"
                    },
                    {
                        text: "长治县"
                    },
                    {
                        text: "襄垣县"
                    },
                    {
                        text: "屯留县"
                    },
                    {
                        text: "平顺县"
                    },
                    {
                        text: "黎城县"
                    },
                    {
                        text: "壶关县"
                    },
                    {
                        text: "长子县"
                    },
                    {
                        text: "武乡县"
                    },
                    {
                        text: "沁县"
                    },
                    {
                        text: "沁源县"
                    },
                    {
                        text: "潞城市"
                    }
                ]
            },
            {
                text: "晋城",
                items: [
                    {
                        text: "城区"
                    },
                    {
                        text: "沁水县"
                    },
                    {
                        text: "阳城县"
                    },
                    {
                        text: "陵川县"
                    },
                    {
                        text: "泽州县"
                    },
                    {
                        text: "高平市"
                    }
                ]
            },
            {
                text: "朔州",
                items: [
                    {
                        text: "朔城区"
                    },
                    {
                        text: "平鲁区"
                    },
                    {
                        text: "山阴县"
                    },
                    {
                        text: "应县"
                    },
                    {
                        text: "右玉县"
                    },
                    {
                        text: "怀仁县"
                    }
                ]
            },
            {
                text: "晋中",
                items: [
                    {
                        text: "榆次区"
                    },
                    {
                        text: "榆社县"
                    },
                    {
                        text: "左权县"
                    },
                    {
                        text: "和顺县"
                    },
                    {
                        text: "昔阳县"
                    },
                    {
                        text: "寿阳县"
                    },
                    {
                        text: "太谷县"
                    },
                    {
                        text: "祁县"
                    },
                    {
                        text: "平遥县"
                    },
                    {
                        text: "灵石县"
                    },
                    {
                        text: "介休市"
                    }
                ]
            },
            {
                text: "运城",
                items: [
                    {
                        text: "盐湖区"
                    },
                    {
                        text: "临猗县"
                    },
                    {
                        text: "万荣县"
                    },
                    {
                        text: "闻喜县"
                    },
                    {
                        text: "稷山县"
                    },
                    {
                        text: "新绛县"
                    },
                    {
                        text: "绛县"
                    },
                    {
                        text: "垣曲县"
                    },
                    {
                        text: "夏县"
                    },
                    {
                        text: "平陆县"
                    },
                    {
                        text: "芮城县"
                    },
                    {
                        text: "永济市"
                    },
                    {
                        text: "河津市"
                    }
                ]
            },
            {
                text: "忻州",
                items: [
                    {
                        text: "忻府区"
                    },
                    {
                        text: "定襄县"
                    },
                    {
                        text: "五台县"
                    },
                    {
                        text: "代县"
                    },
                    {
                        text: "繁峙县"
                    },
                    {
                        text: "宁武县"
                    },
                    {
                        text: "静乐县"
                    },
                    {
                        text: "神池县"
                    },
                    {
                        text: "五寨县"
                    },
                    {
                        text: "岢岚县"
                    },
                    {
                        text: "河曲县"
                    },
                    {
                        text: "保德县"
                    },
                    {
                        text: "偏关县"
                    },
                    {
                        text: "原平市"
                    }
                ]
            },
            {
                text: "临汾",
                items: [
                    {
                        text: "尧都区"
                    },
                    {
                        text: "曲沃县"
                    },
                    {
                        text: "翼城县"
                    },
                    {
                        text: "襄汾县"
                    },
                    {
                        text: "洪洞县"
                    },
                    {
                        text: "古县"
                    },
                    {
                        text: "安泽县"
                    },
                    {
                        text: "浮山县"
                    },
                    {
                        text: "吉县"
                    },
                    {
                        text: "乡宁县"
                    },
                    {
                        text: "大宁县"
                    },
                    {
                        text: "隰县"
                    },
                    {
                        text: "永和县"
                    },
                    {
                        text: "蒲县"
                    },
                    {
                        text: "汾西县"
                    },
                    {
                        text: "侯马市"
                    },
                    {
                        text: "霍州市"
                    }
                ]
            },
            {
                text: "吕梁",
                items: [
                    {
                        text: "离石区"
                    },
                    {
                        text: "文水县"
                    },
                    {
                        text: "交城县"
                    },
                    {
                        text: "兴县"
                    },
                    {
                        text: "临县"
                    },
                    {
                        text: "柳林县"
                    },
                    {
                        text: "石楼县"
                    },
                    {
                        text: "岚县"
                    },
                    {
                        text: "方山县"
                    },
                    {
                        text: "中阳县"
                    },
                    {
                        text: "交口县"
                    },
                    {
                        text: "孝义市"
                    },
                    {
                        text: "汾阳市"
                    }
                ]
            }
        ]
    },
    {
        text: "内蒙古",
        items: [
            {
                text: "呼和浩特",
                items: [
                    {
                        text: "新城区"
                    },
                    {
                        text: "回民区"
                    },
                    {
                        text: "玉泉区"
                    },
                    {
                        text: "玉泉区"
                    },
                    {
                        text: "赛罕区"
                    },
                    {
                        text: "土默特左旗"
                    },
                    {
                        text: "托克托县"
                    },
                    {
                        text: "和林格尔县"
                    },
                    {
                        text: "清水河县"
                    },
                    {
                        text: "武川县"
                    }
                ]
            },
            {
                text: "包头",
                items: [
                    {
                        text: "东河区"
                    },
                    {
                        text: "昆都仑区"
                    },
                    {
                        text: "青山区"
                    },
                    {
                        text: "石拐区"
                    },
                    {
                        text: "白云矿区"
                    },
                    {
                        text: "九原区"
                    },
                    {
                        text: "土默特右旗"
                    },
                    {
                        text: "固阳县"
                    },
                    {
                        text: "达尔罕茂明安联合旗"
                    }
                ]
            },
            {
                text: "乌海",
                items: [
                    {
                        text: "海勃湾区"
                    },
                    {
                        text: "海南区"
                    },
                    {
                        text: "乌达区"
                    }
                ]
            },
            {
                text: "赤峰",
                items: [
                    {
                        text: "红山区"
                    },
                    {
                        text: "元宝山区"
                    },
                    {
                        text: "松山区"
                    },
                    {
                        text: "阿鲁科尔沁旗"
                    },
                    {
                        text: "巴林左旗"
                    },
                    {
                        text: "巴林右旗"
                    },
                    {
                        text: "林西县"
                    },
                    {
                        text: "克什克腾旗"
                    },
                    {
                        text: "翁牛特旗"
                    },
                    {
                        text: "喀喇沁旗"
                    },
                    {
                        text: "宁城县"
                    },
                    {
                        text: "敖汉旗"
                    }
                ]
            },
            {
                text: "通辽",
                items: [
                    {
                        text: "科尔沁区"
                    },
                    {
                        text: "科尔沁左翼中旗"
                    },
                    {
                        text: "科尔沁左翼后旗"
                    },
                    {
                        text: "开鲁县"
                    },
                    {
                        text: "库伦旗"
                    },
                    {
                        text: "奈曼旗"
                    },
                    {
                        text: "扎鲁特旗"
                    },
                    {
                        text: "霍林郭勒市"
                    }
                ]
            },
            {
                text: "鄂尔多斯",
                items: [
                    {
                        text: "东胜区"
                    },
                    {
                        text: "达拉特旗"
                    },
                    {
                        text: "准格尔旗"
                    },
                    {
                        text: "鄂托克前旗"
                    },
                    {
                        text: "鄂托克旗"
                    },
                    {
                        text: "杭锦旗"
                    },
                    {
                        text: "乌审旗"
                    },
                    {
                        text: "伊金霍洛旗"
                    }
                ]
            },
            {
                text: "呼伦贝尔",
                items: [
                    {
                        text: "海拉尔区"
                    },
                    {
                        text: "阿荣旗"
                    },
                    {
                        text: "莫力达瓦达斡尔族自治旗"
                    },
                    {
                        text: "鄂伦春自治旗"
                    },
                    {
                        text: "鄂温克族自治旗"
                    },
                    {
                        text: "陈巴尔虎旗"
                    },
                    {
                        text: "新巴尔虎左旗"
                    },
                    {
                        text: "新巴尔虎右旗"
                    },
                    {
                        text: "满洲里市"
                    },
                    {
                        text: "牙克石市"
                    },
                    {
                        text: "扎兰屯市"
                    },
                    {
                        text: "额尔古纳市"
                    },
                    {
                        text: "根河市"
                    }
                ]
            },
            {
                text: "巴彦淖尔",
                items: [
                    {
                        text: "临河区"
                    },
                    {
                        text: "五原县"
                    },
                    {
                        text: "磴口县"
                    },
                    {
                        text: "乌拉特前旗"
                    },
                    {
                        text: "乌拉特中旗"
                    },
                    {
                        text: "乌拉特后旗"
                    },
                    {
                        text: "杭锦后旗"
                    }
                ]
            },
            {
                text: "乌兰察布",
                items: [
                    {
                        text: "集宁区"
                    },
                    {
                        text: "卓资县"
                    },
                    {
                        text: "化德县"
                    },
                    {
                        text: "商都县"
                    },
                    {
                        text: "兴和县"
                    },
                    {
                        text: "凉城县"
                    },
                    {
                        text: "察哈尔右翼前旗"
                    },
                    {
                        text: "察哈尔右翼中旗"
                    },
                    {
                        text: "察哈尔右翼后旗"
                    },
                    {
                        text: "四子王旗"
                    },
                    {
                        text: "丰镇市"
                    }
                ]
            },
            {
                text: "兴安",
                items: [
                    {
                        text: "乌兰浩特市"
                    },
                    {
                        text: "阿尔山市"
                    },
                    {
                        text: "科尔沁右翼前旗"
                    },
                    {
                        text: "科尔沁右翼中旗"
                    },
                    {
                        text: "扎赉特旗"
                    },
                    {
                        text: "突泉县"
                    }
                ]
            },
            {
                text: "锡林郭勒",
                items: [
                    {
                        text: "二连浩特市"
                    },
                    {
                        text: "锡林浩特市"
                    },
                    {
                        text: "阿巴嘎旗"
                    },
                    {
                        text: "苏尼特左旗"
                    },
                    {
                        text: "苏尼特右旗"
                    },
                    {
                        text: "东乌珠穆沁旗"
                    },
                    {
                        text: "西乌珠穆沁旗"
                    },
                    {
                        text: "太仆寺旗"
                    },
                    {
                        text: "镶黄旗"
                    },
                    {
                        text: "正镶白旗"
                    },
                    {
                        text: "正蓝旗"
                    },
                    {
                        text: "多伦县"
                    }
                ]
            },
            {
                text: "阿拉善",
                items: [
                    {
                        text: "阿拉善左旗"
                    },
                    {
                        text: "阿拉善右旗"
                    },
                    {
                        text: "额济纳旗"
                    }
                ]
            }
        ]
    },
    {
        text: "辽宁",
        items: [
            {
                text: "沈阳",
                items: [
                    {
                        text: "和平区"
                    },
                    {
                        text: "沈河区"
                    },
                    {
                        text: "大东区"
                    },
                    {
                        text: "皇姑区"
                    },
                    {
                        text: "铁西区"
                    },
                    {
                        text: "苏家屯区"
                    },
                    {
                        text: "东陵区"
                    },
                    {
                        text: "新城子区"
                    },
                    {
                        text: "于洪区"
                    },
                    {
                        text: "辽中县"
                    },
                    {
                        text: "康平县"
                    },
                    {
                        text: "法库县"
                    },
                    {
                        text: "新民市"
                    }
                ]
            },
            {
                text: "大连",
                items: [
                    {
                        text: "中山区"
                    },
                    {
                        text: "西岗区"
                    },
                    {
                        text: "沙河口区"
                    },
                    {
                        text: "甘井子区"
                    },
                    {
                        text: "旅顺口区"
                    },
                    {
                        text: "金州区"
                    },
                    {
                        text: "长海县"
                    },
                    {
                        text: "瓦房店市"
                    },
                    {
                        text: "普兰店市"
                    },
                    {
                        text: "庄河市"
                    }
                ]
            },
            {
                text: "鞍山",
                items: [
                    {
                        text: "铁东区"
                    },
                    {
                        text: "铁西区"
                    },
                    {
                        text: "立山区"
                    },
                    {
                        text: "千山区"
                    },
                    {
                        text: "台安县"
                    },
                    {
                        text: "210323"
                    },
                    {
                        text: "海城市"
                    }
                ]
            },
            {
                text: "抚顺",
                items: [
                    {
                        text: "新抚区"
                    },
                    {
                        text: "东洲区"
                    },
                    {
                        text: "望花区"
                    },
                    {
                        text: "顺城区"
                    },
                    {
                        text: "抚顺县"
                    },
                    {
                        text: "新宾满族自治县"
                    },
                    {
                        text: "清原满族自治县"
                    }
                ]
            },
            {
                text: "本溪",
                items: [
                    {
                        text: "平山区"
                    },
                    {
                        text: "溪湖区"
                    },
                    {
                        text: "明山区"
                    },
                    {
                        text: "南芬区"
                    },
                    {
                        text: "本溪满族自治县"
                    },
                    {
                        text: "桓仁满族自治县"
                    }
                ]
            },
            {
                text: "丹东",
                items: [
                    {
                        text: "元宝区"
                    },
                    {
                        text: "振兴区"
                    },
                    {
                        text: "振安区"
                    },
                    {
                        text: "宽甸满族自治县"
                    },
                    {
                        text: "东港市"
                    },
                    {
                        text: "凤城市"
                    }
                ]
            },
            {
                text: "锦州",
                items: [
                    {
                        text: "古塔区"
                    },
                    {
                        text: "凌河区"
                    },
                    {
                        text: "太和区"
                    },
                    {
                        text: "黑山县"
                    },
                    {
                        text: "义县"
                    },
                    {
                        text: "凌海市"
                    },
                    {
                        text: "北镇市"
                    }
                ]
            },
            {
                text: "营口",
                items: [
                    {
                        text: "站前区"
                    },
                    {
                        text: "西市区"
                    },
                    {
                        text: "鲅鱼圈区"
                    },
                    {
                        text: "老边区"
                    },
                    {
                        text: "盖州市"
                    },
                    {
                        text: "大石桥市"
                    }
                ]
            },
            {
                text: "阜新",
                items: [
                    {
                        text: "海州区"
                    },
                    {
                        text: "新邱区"
                    },
                    {
                        text: "太平区"
                    },
                    {
                        text: "清河门区"
                    },
                    {
                        text: "细河区"
                    },
                    {
                        text: "阜新蒙古族自治县"
                    },
                    {
                        text: "彰武县"
                    }
                ]
            },
            {
                text: "辽阳",
                items: [
                    {
                        text: "白塔区"
                    },
                    {
                        text: "文圣区"
                    },
                    {
                        text: "宏伟区"
                    },
                    {
                        text: "弓长岭区"
                    },
                    {
                        text: "太子河区"
                    },
                    {
                        text: "辽阳县"
                    },
                    {
                        text: "灯塔市"
                    }
                ]
            },
            {
                text: "盘锦",
                items: [
                    {
                        text: "双台子区"
                    },
                    {
                        text: "兴隆台区"
                    },
                    {
                        text: "大洼县"
                    },
                    {
                        text: "盘山县"
                    }
                ]
            },
            {
                text: "铁岭",
                items: [
                    {
                        text: "银州区"
                    },
                    {
                        text: "清河区"
                    },
                    {
                        text: "铁岭县"
                    },
                    {
                        text: "西丰县"
                    },
                    {
                        text: "昌图县"
                    },
                    {
                        text: "调兵山市"
                    },
                    {
                        text: "开原市"
                    }
                ]
            },
            {
                text: "朝阳",
                items: [
                    {
                        text: "双塔区"
                    },
                    {
                        text: "龙城区"
                    },
                    {
                        text: "朝阳县"
                    },
                    {
                        text: "建平县"
                    },
                    {
                        text: "喀喇沁左翼蒙古族自治县"
                    },
                    {
                        text: "北票市"
                    },
                    {
                        text: "凌源市"
                    }
                ]
            },
            {
                text: "葫芦岛",
                items: [
                    {
                        text: "连山区"
                    },
                    {
                        text: "龙港区"
                    },
                    {
                        text: "南票区"
                    },
                    {
                        text: "绥中县"
                    },
                    {
                        text: "建昌县"
                    },
                    {
                        text: "兴城市"
                    }
                ]
            }
        ]
    },
    {
        text: "吉林",
        items: [
            {
                text: "长春",
                items: [
                    {
                        text: "南关区"
                    },
                    {
                        text: "宽城区"
                    },
                    {
                        text: "朝阳区"
                    },
                    {
                        text: "二道区"
                    },
                    {
                        text: "绿园区"
                    },
                    {
                        text: "双阳区"
                    },
                    {
                        text: "农安县"
                    },
                    {
                        text: "九台市"
                    },
                    {
                        text: "榆树市"
                    },
                    {
                        text: "德惠市"
                    }
                ]
            },
            {
                text: "吉林",
                items: [
                    {
                        text: "昌邑区"
                    },
                    {
                        text: "龙潭区"
                    },
                    {
                        text: "船营区"
                    },
                    {
                        text: "丰满区"
                    },
                    {
                        text: "永吉县"
                    },
                    {
                        text: "蛟河市"
                    },
                    {
                        text: "桦甸市"
                    },
                    {
                        text: "舒兰市"
                    },
                    {
                        text: "磐石市"
                    }
                ]
            },
            {
                text: "四平",
                items: [
                    {
                        text: "铁西区"
                    },
                    {
                        text: "铁东区"
                    },
                    {
                        text: "梨树县"
                    },
                    {
                        text: "伊通满族自治县"
                    },
                    {
                        text: "公主岭市"
                    },
                    {
                        text: "双辽市"
                    }
                ]
            },
            {
                text: "辽源",
                items: [
                    {
                        text: "龙山区"
                    },
                    {
                        text: "西安区"
                    },
                    {
                        text: "东丰县"
                    },
                    {
                        text: "东辽县"
                    }
                ]
            },
            {
                text: "通化",
                items: [
                    {
                        text: "东昌区"
                    },
                    {
                        text: "二道江区"
                    },
                    {
                        text: "通化县"
                    },
                    {
                        text: "辉南县"
                    },
                    {
                        text: "柳河县"
                    },
                    {
                        text: "梅河口市"
                    },
                    {
                        text: "集安市"
                    }
                ]
            },
            {
                text: "白山",
                items: [
                    {
                        text: "八道江区"
                    },
                    {
                        text: "江源区"
                    },
                    {
                        text: "抚松县"
                    },
                    {
                        text: "靖宇县"
                    },
                    {
                        text: "长白朝鲜族自治县"
                    },
                    {
                        text: "临江市"
                    }
                ]
            },
            {
                text: "松原",
                items: [
                    {
                        text: "宁江区"
                    },
                    {
                        text: "前郭尔罗斯蒙古族自治县"
                    },
                    {
                        text: "长岭县"
                    },
                    {
                        text: "乾安县"
                    },
                    {
                        text: "扶余县"
                    }
                ]
            },
            {
                text: "白城",
                items: [
                    {
                        text: "洮北区"
                    },
                    {
                        text: "镇赉县"
                    },
                    {
                        text: "通榆县"
                    },
                    {
                        text: "洮南市"
                    },
                    {
                        text: "大安市"
                    }
                ]
            },
            {
                text: "延边",
                items: [
                    {
                        text: "延吉市"
                    },
                    {
                        text: "图们市"
                    },
                    {
                        text: "敦化市"
                    },
                    {
                        text: "珲春市"
                    },
                    {
                        text: "龙井市"
                    },
                    {
                        text: "和龙市"
                    },
                    {
                        text: "汪清县"
                    },
                    {
                        text: "安图县"
                    }
                ]
            }
        ]
    },
    {
        text: "黑龙江",
        items: [
            {
                text: "哈尔滨",
                items: [
                    {
                        text: "道里区"
                    },
                    {
                        text: "南岗区"
                    },
                    {
                        text: "道外区"
                    },
                    {
                        text: "平房区"
                    },
                    {
                        text: "松北区"
                    },
                    {
                        text: "香坊区"
                    },
                    {
                        text: "呼兰区"
                    },
                    {
                        text: "阿城区"
                    },
                    {
                        text: "依兰县"
                    },
                    {
                        text: "方正县"
                    },
                    {
                        text: "宾县"
                    },
                    {
                        text: "巴彦县"
                    },
                    {
                        text: "木兰县"
                    },
                    {
                        text: "通河县"
                    },
                    {
                        text: "延寿县"
                    },
                    {
                        text: "双城市"
                    },
                    {
                        text: "尚志市"
                    },
                    {
                        text: "五常市"
                    }
                ]
            },
            {
                text: "齐齐哈尔",
                items: [
                    {
                        text: "龙沙区"
                    },
                    {
                        text: "建华区"
                    },
                    {
                        text: "铁锋区"
                    },
                    {
                        text: "昂昂溪区"
                    },
                    {
                        text: "富拉尔基区"
                    },
                    {
                        text: "碾子山区"
                    },
                    {
                        text: "梅里斯达斡尔族区"
                    },
                    {
                        text: "龙江县"
                    },
                    {
                        text: "依安县"
                    },
                    {
                        text: "泰来县"
                    },
                    {
                        text: "甘南县"
                    },
                    {
                        text: "富裕县"
                    },
                    {
                        text: "克山县"
                    },
                    {
                        text: "克东县"
                    },
                    {
                        text: "拜泉县"
                    },
                    {
                        text: "讷河市"
                    }
                ]
            },
            {
                text: "鸡西",
                items: [
                    {
                        text: "鸡冠区"
                    },
                    {
                        text: "恒山区"
                    },
                    {
                        text: "滴道区"
                    },
                    {
                        text: "梨树区"
                    },
                    {
                        text: "城子河区"
                    },
                    {
                        text: "麻山区"
                    },
                    {
                        text: "鸡东县"
                    },
                    {
                        text: "虎林市"
                    },
                    {
                        text: "密山市"
                    }
                ]
            },
            {
                text: "鹤岗",
                items: [
                    {
                        text: "向阳区"
                    },
                    {
                        text: "工农区"
                    },
                    {
                        text: "南山区"
                    },
                    {
                        text: "兴安区"
                    },
                    {
                        text: "东山区"
                    },
                    {
                        text: "兴山区"
                    },
                    {
                        text: "萝北县"
                    },
                    {
                        text: "绥滨县"
                    }
                ]
            },
            {
                text: "双鸭山",
                items: [
                    {
                        text: "尖山区"
                    },
                    {
                        text: "岭东区"
                    },
                    {
                        text: "四方台区"
                    },
                    {
                        text: "宝山区"
                    },
                    {
                        text: "集贤县"
                    },
                    {
                        text: "友谊县"
                    },
                    {
                        text: "宝清县"
                    },
                    {
                        text: "饶河县"
                    }
                ]
            },
            {
                text: "大庆",
                items: [
                    {
                        text: "萨尔图区"
                    },
                    {
                        text: "龙凤区"
                    },
                    {
                        text: "让胡路区"
                    },
                    {
                        text: "红岗区"
                    },
                    {
                        text: "大同区"
                    },
                    {
                        text: "肇州县"
                    },
                    {
                        text: "肇源县"
                    },
                    {
                        text: "林甸县"
                    },
                    {
                        text: "杜尔伯特蒙古族自治县"
                    }
                ]
            },
            {
                text: "伊春",
                items: [
                    {
                        text: "伊春区"
                    },
                    {
                        text: "南岔区"
                    },
                    {
                        text: "友好区"
                    },
                    {
                        text: "西林区"
                    },
                    {
                        text: "翠峦区"
                    },
                    {
                        text: "新青区"
                    },
                    {
                        text: "美溪区"
                    },
                    {
                        text: "金山屯区"
                    },
                    {
                        text: "五营区"
                    },
                    {
                        text: "乌马河区"
                    },
                    {
                        text: "汤旺河区"
                    },
                    {
                        text: "带岭区"
                    },
                    {
                        text: "乌伊岭区"
                    },
                    {
                        text: "红星区"
                    },
                    {
                        text: "上甘岭区"
                    },
                    {
                        text: "嘉荫县"
                    },
                    {
                        text: "铁力市"
                    }
                ]
            },
            {
                text: "佳木斯",
                items: [
                    {
                        text: "向阳区"
                    },
                    {
                        text: "前进区"
                    },
                    {
                        text: "东风区"
                    },
                    {
                        text: "郊区"
                    },
                    {
                        text: "桦南县"
                    },
                    {
                        text: "桦川县"
                    },
                    {
                        text: "汤原县"
                    },
                    {
                        text: "抚远县"
                    },
                    {
                        text: "同江市"
                    },
                    {
                        text: "富锦市"
                    }
                ]
            },
            {
                text: "七台河",
                items: [
                    {
                        text: "新兴区"
                    },
                    {
                        text: "桃山区"
                    },
                    {
                        text: "茄子河区"
                    },
                    {
                        text: "勃利县"
                    }
                ]
            },
            {
                text: "牡丹江",
                items: [
                    {
                        text: "东安区"
                    },
                    {
                        text: "阳明区"
                    },
                    {
                        text: "爱民区"
                    },
                    {
                        text: "西安区"
                    },
                    {
                        text: "东宁县"
                    },
                    {
                        text: "林口县"
                    },
                    {
                        text: "绥芬河市"
                    },
                    {
                        text: "海林市"
                    },
                    {
                        text: "宁安市"
                    },
                    {
                        text: "穆棱市"
                    }
                ]
            },
            {
                text: "黑河",
                items: [
                    {
                        text: "爱辉区"
                    },
                    {
                        text: "嫩江县"
                    },
                    {
                        text: "逊克县"
                    },
                    {
                        text: "孙吴县"
                    },
                    {
                        text: "北安市"
                    },
                    {
                        text: "五大连池市"
                    }
                ]
            },
            {
                text: "绥化",
                items: [
                    {
                        text: "北林区"
                    },
                    {
                        text: "望奎县"
                    },
                    {
                        text: "兰西县"
                    },
                    {
                        text: "青冈县"
                    },
                    {
                        text: "庆安县"
                    },
                    {
                        text: "明水县"
                    },
                    {
                        text: "绥棱县"
                    },
                    {
                        text: "安达市"
                    },
                    {
                        text: "肇东市"
                    },
                    {
                        text: "海伦市"
                    }
                ]
            },
            {
                text: "大兴安岭",
                items: [
                    {
                        text: "加格达奇区"
                    },
                    {
                        text: "松岭区"
                    },
                    {
                        text: "新林区"
                    },
                    {
                        text: "呼中区"
                    },
                    {
                        text: "呼玛县"
                    },
                    {
                        text: "塔河县"
                    },
                    {
                        text: "漠河县"
                    }
                ]
            }
        ]
    },

    {
        text: "江苏",
        items: [
            {
                text: "南京",
                items: [
                    {
                        text: "玄武区"
                    },
                    {
                        text: "白下区"
                    },
                    {
                        text: "秦淮区"
                    },
                    {
                        text: "建邺区"
                    },
                    {
                        text: "鼓楼区"
                    },
                    {
                        text: "下关区"
                    },
                    {
                        text: "浦口区"
                    },
                    {
                        text: "栖霞区"
                    },
                    {
                        text: "雨花台区"
                    },
                    {
                        text: "江宁区"
                    },
                    {
                        text: "六合区"
                    },
                    {
                        text: "溧水县"
                    },
                    {
                        text: "高淳县"
                    }
                ]
            },
            {
                text: "无锡",
                items: [
                    {
                        text: "崇安区"
                    },
                    {
                        text: "南长区"
                    },
                    {
                        text: "北塘区"
                    },
                    {
                        text: "锡山区"
                    },
                    {
                        text: "惠山区"
                    },
                    {
                        text: "滨湖区"
                    },
                    {
                        text: "江阴市"
                    },
                    {
                        text: "宜兴市"
                    }
                ]
            },
            {
                text: "徐州",
                items: [
                    {
                        text: "鼓楼区"
                    },
                    {
                        text: "云龙区"
                    },
                    {
                        text: "九里区"
                    },
                    {
                        text: "贾汪区"
                    },
                    {
                        text: "泉山区"
                    },
                    {
                        text: "丰县"
                    },
                    {
                        text: "沛县"
                    },
                    {
                        text: "铜山县"
                    },
                    {
                        text: "睢宁县"
                    },
                    {
                        text: "新沂市"
                    },
                    {
                        text: "邳州市"
                    }
                ]
            },
            {
                text: "常州",
                items: [
                    {
                        text: "天宁区"
                    },
                    {
                        text: "钟楼区"
                    },
                    {
                        text: "戚墅堰区"
                    },
                    {
                        text: "新北区"
                    },
                    {
                        text: "武进区"
                    },
                    {
                        text: "溧阳市"
                    },
                    {
                        text: "金坛市"
                    }
                ]
            },
            {
                text: "苏州",
                items: [
                    {
                        text: "沧浪区"
                    },
                    {
                        text: "平江区"
                    },
                    {
                        text: "金阊区"
                    },
                    {
                        text: "虎丘区"
                    },
                    {
                        text: "吴中区"
                    },
                    {
                        text: "相城区"
                    },
                    {
                        text: "常熟市"
                    },
                    {
                        text: "张家港市"
                    },
                    {
                        text: "昆山市"
                    },
                    {
                        text: "吴江市"
                    },
                    {
                        text: "太仓市"
                    }
                ]
            },
            {
                text: "南通",
                items: [
                    {
                        text: "崇川区"
                    },
                    {
                        text: "港闸区"
                    },
                    {
                        text: "海安县"
                    },
                    {
                        text: "如东县"
                    },
                    {
                        text: "启东市"
                    },
                    {
                        text: "如皋市"
                    },
                    {
                        text: "通州市"
                    },
                    {
                        text: "海门市"
                    }
                ]
            },
            {
                text: "连云港",
                items: [
                    {
                        text: "连云区"
                    },
                    {
                        text: "新浦区"
                    },
                    {
                        text: "海州区"
                    },
                    {
                        text: "赣榆县"
                    },
                    {
                        text: "东海县"
                    },
                    {
                        text: "灌云县"
                    },
                    {
                        text: "灌南县"
                    }
                ]
            },
            {
                text: "淮安",
                items: [
                    {
                        text: "清河区"
                    },
                    {
                        text: "楚州区"
                    },
                    {
                        text: "淮阴区"
                    },
                    {
                        text: "清浦区"
                    },
                    {
                        text: "涟水县"
                    },
                    {
                        text: "洪泽县"
                    },
                    {
                        text: "盱眙县"
                    },
                    {
                        text: "金湖县"
                    }
                ]
            },
            {
                text: "盐城",
                items: [
                    {
                        text: "亭湖区"
                    },
                    {
                        text: "盐都区"
                    },
                    {
                        text: "响水县"
                    },
                    {
                        text: "滨海县"
                    },
                    {
                        text: "阜宁县"
                    },
                    {
                        text: "射阳县"
                    },
                    {
                        text: "建湖县"
                    },
                    {
                        text: "东台市"
                    },
                    {
                        text: "大丰市"
                    }
                ]
            },
            {
                text: "扬州",
                items: [
                    {
                        text: "广陵区"
                    },
                    {
                        text: "邗江区"
                    },
                    {
                        text: "维扬区"
                    },
                    {
                        text: "宝应县"
                    },
                    {
                        text: "仪征市"
                    },
                    {
                        text: "高邮市"
                    },
                    {
                        text: "江都市"
                    }
                ]
            },
            {
                text: "镇江",
                items: [
                    {
                        text: "京口区"
                    },
                    {
                        text: "润州区"
                    },
                    {
                        text: "丹徒区"
                    },
                    {
                        text: "丹阳市"
                    },
                    {
                        text: "扬中市"
                    },
                    {
                        text: "句容市"
                    }
                ]
            },
            {
                text: "泰州",
                items: [
                    {
                        text: "海陵区"
                    },
                    {
                        text: "高港区"
                    },
                    {
                        text: "兴化市"
                    },
                    {
                        text: "靖江市"
                    },
                    {
                        text: "泰兴市"
                    },
                    {
                        text: "姜堰市"
                    }
                ]
            },
            {
                text: "宿迁",
                items: [
                    {
                        text: "宿城区"
                    },
                    {
                        text: "宿豫区"
                    },
                    {
                        text: "沭阳县"
                    },
                    {
                        text: "泗阳县"
                    },
                    {
                        text: "泗洪县"
                    }
                ]
            }
        ]
    },
    {
        text: "浙江",
        items: [
            {
                text: "杭州",
                items: [
                    {
                        text: "上城区"
                    },
                    {
                        text: "下城区"
                    },
                    {
                        text: "江干区"
                    },
                    {
                        text: "拱墅区"
                    },
                    {
                        text: "西湖区"
                    },
                    {
                        text: "滨江区"
                    },
                    {
                        text: "萧山区"
                    },
                    {
                        text: "余杭区"
                    },
                    {
                        text: "桐庐县"
                    },
                    {
                        text: "淳安县"
                    },
                    {
                        text: "建德市"
                    },
                    {
                        text: "富阳市"
                    },
                    {
                        text: "临安市"
                    }
                ]
            },
            {
                text: "宁波",
                items: [
                    {
                        text: "海曙区"
                    },
                    {
                        text: "江东区"
                    },
                    {
                        text: "江北区"
                    },
                    {
                        text: "北仑区"
                    },
                    {
                        text: "镇海区"
                    },
                    {
                        text: "鄞州区"
                    },
                    {
                        text: "象山县"
                    },
                    {
                        text: "宁海县"
                    },
                    {
                        text: "余姚市"
                    },
                    {
                        text: "慈溪市"
                    },
                    {
                        text: "奉化市"
                    }
                ]
            },
            {
                text: "温州",
                items: [
                    {
                        text: "鹿城区"
                    },
                    {
                        text: "龙湾区"
                    },
                    {
                        text: "瓯海区"
                    },
                    {
                        text: "洞头县"
                    },
                    {
                        text: "永嘉县"
                    },
                    {
                        text: "平阳县"
                    },
                    {
                        text: "苍南县"
                    },
                    {
                        text: "文成县"
                    },
                    {
                        text: "泰顺县"
                    },
                    {
                        text: "瑞安市"
                    },
                    {
                        text: "乐清市"
                    }
                ]
            },
            {
                text: "嘉兴",
                items: [
                    {
                        text: "南湖区"
                    },
                    {
                        text: "秀洲区"
                    },
                    {
                        text: "嘉善县"
                    },
                    {
                        text: "海盐县"
                    },
                    {
                        text: "海宁市"
                    },
                    {
                        text: "平湖市"
                    },
                    {
                        text: "桐乡市"
                    }
                ]
            },
            {
                text: "湖州",
                items: [
                    {
                        text: "吴兴区"
                    },
                    {
                        text: "南浔区"
                    },
                    {
                        text: "德清县"
                    },
                    {
                        text: "长兴县"
                    },
                    {
                        text: "安吉县"
                    }
                ]
            },
            {
                text: "绍兴",
                items: [
                    {
                        text: "越城区"
                    },
                    {
                        text: "绍兴县"
                    },
                    {
                        text: "新昌县"
                    },
                    {
                        text: "诸暨市"
                    },
                    {
                        text: "上虞市"
                    },
                    {
                        text: "嵊州市"
                    }
                ]
            },
            {
                text: "金华",
                items: [
                    {
                        text: "婺城区"
                    },
                    {
                        text: "金东区"
                    },
                    {
                        text: "武义县"
                    },
                    {
                        text: "浦江县"
                    },
                    {
                        text: "磐安县"
                    },
                    {
                        text: "兰溪市"
                    },
                    {
                        text: "义乌市"
                    },
                    {
                        text: "东阳市"
                    },
                    {
                        text: "永康市"
                    }
                ]
            },
            {
                text: "衢州",
                items: [
                    {
                        text: "柯城区"
                    },
                    {
                        text: "衢江区"
                    },
                    {
                        text: "常山县"
                    },
                    {
                        text: "开化县"
                    },
                    {
                        text: "龙游县"
                    },
                    {
                        text: "江山市"
                    }
                ]
            },
            {
                text: "舟山",
                items: [
                    {
                        text: "定海区"
                    },
                    {
                        text: "普陀区"
                    },
                    {
                        text: "岱山县"
                    },
                    {
                        text: "嵊泗县"
                    }
                ]
            },
            {
                text: "台州",
                items: [
                    {
                        text: "椒江区"
                    },
                    {
                        text: "黄岩区"
                    },
                    {
                        text: "路桥区"
                    },
                    {
                        text: "玉环县"
                    },
                    {
                        text: "三门县"
                    },
                    {
                        text: "天台县"
                    },
                    {
                        text: "仙居县"
                    },
                    {
                        text: "温岭市"
                    },
                    {
                        text: "临海市"
                    }
                ]
            },
            {
                text: "丽水",
                items: [
                    {
                        text: "莲都区"
                    },
                    {
                        text: "青田县"
                    },
                    {
                        text: "缙云县"
                    },
                    {
                        text: "遂昌县"
                    },
                    {
                        text: "松阳县"
                    },
                    {
                        text: "云和县"
                    },
                    {
                        text: "庆元县"
                    },
                    {
                        text: "景宁畲族自治县"
                    },
                    {
                        text: "龙泉市"
                    }
                ]
            }
        ]
    },
    {
        text: "安徽",
        items: [
            {
                text: "合肥",
                items: [
                    {
                        text: "瑶海区"
                    },
                    {
                        text: "庐阳区"
                    },
                    {
                        text: "蜀山区"
                    },
                    {
                        text: "包河区"
                    },
                    {
                        text: "长丰县"
                    },
                    {
                        text: "肥东县"
                    },
                    {
                        text: "肥西县"
                    }
                ]
            },
            {
                text: "芜湖",
                items: [
                    {
                        text: "镜湖区"
                    },
                    {
                        text: "弋江区"
                    },
                    {
                        text: "鸠江区"
                    },
                    {
                        text: "三山区"
                    },
                    {
                        text: "芜湖县"
                    },
                    {
                        text: "繁昌县"
                    },
                    {
                        text: "南陵县"
                    }
                ]
            },
            {
                text: "蚌埠",
                items: [
                    {
                        text: "龙子湖区"
                    },
                    {
                        text: "蚌山区"
                    },
                    {
                        text: "禹会区"
                    },
                    {
                        text: "淮上区"
                    },
                    {
                        text: "怀远县"
                    },
                    {
                        text: "五河县"
                    },
                    {
                        text: "固镇县"
                    }
                ]
            },
            {
                text: "淮南",
                items: [
                    {
                        text: "大通区"
                    },
                    {
                        text: "田家庵区"
                    },
                    {
                        text: "谢家集区"
                    },
                    {
                        text: "八公山区"
                    },
                    {
                        text: "潘集区"
                    },
                    {
                        text: "凤台县"
                    }
                ]
            },
            {
                text: "马鞍山",
                items: [
                    {
                        text: "金家庄区"
                    },
                    {
                        text: "花山区"
                    },
                    {
                        text: "雨山区"
                    },
                    {
                        text: "当涂县"
                    }
                ]
            },
            {
                text: "淮北",
                items: [
                    {
                        text: "杜集区"
                    },
                    {
                        text: "相山区"
                    },
                    {
                        text: "烈山区"
                    },
                    {
                        text: "濉溪县"
                    }
                ]
            },
            {
                text: "铜陵",
                items: [
                    {
                        text: "铜官山区"
                    },
                    {
                        text: "狮子山区"
                    },
                    {
                        text: "郊区"
                    },
                    {
                        text: "铜陵县"
                    }
                ]
            },
            {
                text: "安庆",
                items: [
                    {
                        text: "迎江区"
                    },
                    {
                        text: "大观区"
                    },
                    {
                        text: "宜秀区"
                    },
                    {
                        text: "怀宁县"
                    },
                    {
                        text: "枞阳县"
                    },
                    {
                        text: "潜山县"
                    },
                    {
                        text: "太湖县"
                    },
                    {
                        text: "宿松县"
                    },
                    {
                        text: "望江县"
                    },
                    {
                        text: "岳西县"
                    },
                    {
                        text: "桐城市"
                    }
                ]
            },
            {
                text: "黄山",
                items: [
                    {
                        text: "屯溪区"
                    },
                    {
                        text: "黄山区"
                    },
                    {
                        text: "徽州区"
                    },
                    {
                        text: "歙县"
                    },
                    {
                        text: "休宁县"
                    },
                    {
                        text: "黟县"
                    },
                    {
                        text: "祁门县"
                    }
                ]
            },
            {
                text: "滁州",
                items: [
                    {
                        text: "琅琊区"
                    },
                    {
                        text: "南谯区"
                    },
                    {
                        text: "来安县"
                    },
                    {
                        text: "全椒县"
                    },
                    {
                        text: "定远县"
                    },
                    {
                        text: "凤阳县"
                    },
                    {
                        text: "天长市"
                    },
                    {
                        text: "明光市"
                    }
                ]
            },
            {
                text: "阜阳",
                items: [
                    {
                        text: "颍州区"
                    },
                    {
                        text: "颍东区"
                    },
                    {
                        text: "颍泉区"
                    },
                    {
                        text: "临泉县"
                    },
                    {
                        text: "太和县"
                    },
                    {
                        text: "阜南县"
                    },
                    {
                        text: "颍上县"
                    },
                    {
                        text: "界首市"
                    }
                ]
            },
            {
                text: "宿州",
                items: [
                    {
                        text: "埇桥区"
                    },
                    {
                        text: "砀山县"
                    },
                    {
                        text: "萧县"
                    },
                    {
                        text: "灵璧县"
                    },
                    {
                        text: "泗县"
                    }
                ]
            },
            {
                text: "巢湖",
                items: [
                    {
                        text: "居巢区"
                    },
                    {
                        text: "庐江县"
                    },
                    {
                        text: "无为县"
                    },
                    {
                        text: "含山县"
                    },
                    {
                        text: "和县"
                    }
                ]
            },
            {
                text: "六安",
                items: [
                    {
                        text: "金安区"
                    },
                    {
                        text: "裕安区"
                    },
                    {
                        text: "寿县"
                    },
                    {
                        text: "霍邱县"
                    },
                    {
                        text: "舒城县"
                    },
                    {
                        text: "金寨县"
                    },
                    {
                        text: "霍山县"
                    }
                ]
            },
            {
                text: "亳州",
                items: [
                    {
                        text: "谯城区"
                    },
                    {
                        text: "涡阳县"
                    },
                    {
                        text: "蒙城县"
                    },
                    {
                        text: "利辛县"
                    }
                ]
            },
            {
                text: "池州",
                items: [
                    {
                        text: "贵池区"
                    },
                    {
                        text: "东至县"
                    },
                    {
                        text: "石台县"
                    },
                    {
                        text: "青阳县"
                    }
                ]
            },
            {
                text: "宣城",
                items: [
                    {
                        text: "宣州区"
                    },
                    {
                        text: "郎溪县"
                    },
                    {
                        text: "广德县"
                    },
                    {
                        text: "泾县"
                    },
                    {
                        text: "绩溪县"
                    },
                    {
                        text: "旌德县"
                    },
                    {
                        text: "宁国市"
                    }
                ]
            }
        ]
    },
    {
        text: "福建",
        items: [
            {
                text: "福州",
                items: [
                    {
                        text: "鼓楼区"
                    },
                    {
                        text: "台江区"
                    },
                    {
                        text: "仓山区"
                    },
                    {
                        text: "马尾区"
                    },
                    {
                        text: "晋安区"
                    },
                    {
                        text: "闽侯县"
                    },
                    {
                        text: "连江县"
                    },
                    {
                        text: "罗源县"
                    },
                    {
                        text: "闽清县"
                    },
                    {
                        text: "永泰县"
                    },
                    {
                        text: "平潭县"
                    },
                    {
                        text: "福清市"
                    },
                    {
                        text: "长乐市"
                    }
                ]
            },
            {
                text: "厦门",
                items: [
                    {
                        text: "思明区"
                    },
                    {
                        text: "海沧区"
                    },
                    {
                        text: "湖里区"
                    },
                    {
                        text: "集美区"
                    },
                    {
                        text: "同安区"
                    },
                    {
                        text: "翔安区"
                    }
                ]
            },
            {
                text: "莆田",
                items: [
                    {
                        text: "城厢区"
                    },
                    {
                        text: "涵江区"
                    },
                    {
                        text: "荔城区"
                    },
                    {
                        text: "秀屿区"
                    },
                    {
                        text: "仙游县"
                    }
                ]
            },
            {
                text: "三明",
                items: [
                    {
                        text: "梅列区"
                    },
                    {
                        text: "三元区"
                    },
                    {
                        text: "明溪县"
                    },
                    {
                        text: "清流县"
                    },
                    {
                        text: "宁化县"
                    },
                    {
                        text: "大田县"
                    },
                    {
                        text: "尤溪县"
                    },
                    {
                        text: "沙县"
                    },
                    {
                        text: "将乐县"
                    },
                    {
                        text: "泰宁县"
                    },
                    {
                        text: "建宁县"
                    },
                    {
                        text: "永安市"
                    }
                ]
            },
            {
                text: "泉州",
                items: [
                    {
                        text: "鲤城区"
                    },
                    {
                        text: "丰泽区"
                    },
                    {
                        text: "洛江区"
                    },
                    {
                        text: "泉港区"
                    },
                    {
                        text: "惠安县"
                    },
                    {
                        text: "安溪县"
                    },
                    {
                        text: "永春县"
                    },
                    {
                        text: "德化县"
                    },
                    {
                        text: "金门县"
                    },
                    {
                        text: "石狮市"
                    },
                    {
                        text: "晋江市"
                    },
                    {
                        text: "南安市"
                    }
                ]
            },
            {
                text: "漳州",
                items: [
                    {
                        text: "芗城区"
                    },
                    {
                        text: "龙文区"
                    },
                    {
                        text: "云霄县"
                    },
                    {
                        text: "漳浦县"
                    },
                    {
                        text: "诏安县"
                    },
                    {
                        text: "长泰县"
                    },
                    {
                        text: "东山县"
                    },
                    {
                        text: "南靖县"
                    },
                    {
                        text: "平和县"
                    },
                    {
                        text: "华安县"
                    },
                    {
                        text: "龙海市"
                    }
                ]
            },
            {
                text: "南平",
                items: [
                    {
                        text: "延平区"
                    },
                    {
                        text: "顺昌县"
                    },
                    {
                        text: "浦城县"
                    },
                    {
                        text: "光泽县"
                    },
                    {
                        text: "松溪县"
                    },
                    {
                        text: "政和县"
                    },
                    {
                        text: "邵武市"
                    },
                    {
                        text: "武夷山市"
                    },
                    {
                        text: "建瓯市"
                    },
                    {
                        text: "建阳市"
                    }
                ]
            },
            {
                text: "龙岩",
                items: [
                    {
                        text: "新罗区"
                    },
                    {
                        text: "长汀县"
                    },
                    {
                        text: "永定县"
                    },
                    {
                        text: "上杭县"
                    },
                    {
                        text: "武平县"
                    },
                    {
                        text: "连城县"
                    },
                    {
                        text: "漳平市"
                    }
                ]
            },
            {
                text: "宁德",
                items: [
                    {
                        text: "蕉城区"
                    },
                    {
                        text: "霞浦县"
                    },
                    {
                        text: "古田县"
                    },
                    {
                        text: "屏南县"
                    },
                    {
                        text: "寿宁县"
                    },
                    {
                        text: "周宁县"
                    },
                    {
                        text: "柘荣县"
                    },
                    {
                        text: "福安市"
                    },
                    {
                        text: "福鼎市"
                    }
                ]
            }
        ]
    },
    {
        text: "江西",
        items: [
            {
                text: "南昌",
                items: [
                    {
                        text: "东湖区"
                    },
                    {
                        text: "西湖区"
                    },
                    {
                        text: "青云谱区"
                    },
                    {
                        text: "湾里区"
                    },
                    {
                        text: "青山湖区"
                    },
                    {
                        text: "南昌县"
                    },
                    {
                        text: "新建县"
                    },
                    {
                        text: "安义县"
                    },
                    {
                        text: "进贤县"
                    }
                ]
            },
            {
                text: "景德镇",
                items: [
                    {
                        text: "昌江区"
                    },
                    {
                        text: "珠山区"
                    },
                    {
                        text: "浮梁县"
                    },
                    {
                        text: "乐平市"
                    }
                ]
            },
            {
                text: "萍乡",
                items: [
                    {
                        text: "安源区"
                    },
                    {
                        text: "湘东区"
                    },
                    {
                        text: "莲花县"
                    },
                    {
                        text: "上栗县"
                    },
                    {
                        text: "芦溪县"
                    }
                ]
            },
            {
                text: "九江",
                items: [
                    {
                        text: "庐山区"
                    },
                    {
                        text: "浔阳区"
                    },
                    {
                        text: "九江县"
                    },
                    {
                        text: "武宁县"
                    },
                    {
                        text: "修水县"
                    },
                    {
                        text: "永修县"
                    },
                    {
                        text: "德安县"
                    },
                    {
                        text: "星子县"
                    },
                    {
                        text: "都昌县"
                    },
                    {
                        text: "湖口县"
                    },
                    {
                        text: "彭泽县"
                    },
                    {
                        text: "瑞昌市"
                    }
                ]
            },
            {
                text: "新余",
                items: [
                    {
                        text: "渝水区"
                    },
                    {
                        text: "分宜县"
                    }
                ]
            },
            {
                text: "鹰潭",
                items: [
                    {
                        text: "月湖区"
                    },
                    {
                        text: "余江县"
                    },
                    {
                        text: "贵溪市"
                    }
                ]
            },
            {
                text: "赣州",
                items: [
                    {
                        text: "章贡区"
                    },
                    {
                        text: "赣县"
                    },
                    {
                        text: "信丰县"
                    },
                    {
                        text: "大余县"
                    },
                    {
                        text: "上犹县"
                    },
                    {
                        text: "崇义县"
                    },
                    {
                        text: "安远县"
                    },
                    {
                        text: "龙南县"
                    },
                    {
                        text: "定南县"
                    },
                    {
                        text: "全南县"
                    },
                    {
                        text: "宁都县"
                    },
                    {
                        text: "于都县"
                    },
                    {
                        text: "兴国县"
                    },
                    {
                        text: "会昌县"
                    },
                    {
                        text: "寻乌县"
                    },
                    {
                        text: "石城县"
                    },
                    {
                        text: "瑞金市"
                    },
                    {
                        text: "南康市"
                    }
                ]
            },
            {
                text: "吉安",
                items: [
                    {
                        text: "吉州区"
                    },
                    {
                        text: "青原区"
                    },
                    {
                        text: "吉安县"
                    },
                    {
                        text: "吉水县"
                    },
                    {
                        text: "峡江县"
                    },
                    {
                        text: "新干县"
                    },
                    {
                        text: "永丰县"
                    },
                    {
                        text: "泰和县"
                    },
                    {
                        text: "遂川县"
                    },
                    {
                        text: "万安县"
                    },
                    {
                        text: "安福县"
                    },
                    {
                        text: "永新县"
                    },
                    {
                        text: "井冈山市"
                    }
                ]
            },
            {
                text: "宜春",
                items: [
                    {
                        text: "袁州区"
                    },
                    {
                        text: "奉新县"
                    },
                    {
                        text: "万载县"
                    },
                    {
                        text: "上高县"
                    },
                    {
                        text: "宜丰县"
                    },
                    {
                        text: "靖安县"
                    },
                    {
                        text: "铜鼓县"
                    },
                    {
                        text: "丰城市"
                    },
                    {
                        text: "樟树市"
                    },
                    {
                        text: "高安市"
                    }
                ]
            },
            {
                text: "抚州",
                items: [
                    {
                        text: "临川区"
                    },
                    {
                        text: "南城县"
                    },
                    {
                        text: "黎川县"
                    },
                    {
                        text: "南丰县"
                    },
                    {
                        text: "崇仁县"
                    },
                    {
                        text: "乐安县"
                    },
                    {
                        text: "宜黄县"
                    },
                    {
                        text: "金溪县"
                    },
                    {
                        text: "资溪县"
                    },
                    {
                        text: "东乡县"
                    },
                    {
                        text: "广昌县"
                    }
                ]
            },
            {
                text: "上饶",
                items: [
                    {
                        text: "信州区"
                    },
                    {
                        text: "上饶县"
                    },
                    {
                        text: "广丰县"
                    },
                    {
                        text: "玉山县"
                    },
                    {
                        text: "铅山县"
                    },
                    {
                        text: "横峰县"
                    },
                    {
                        text: "弋阳县"
                    },
                    {
                        text: "余干县"
                    },
                    {
                        text: "鄱阳县"
                    },
                    {
                        text: "万年县"
                    },
                    {
                        text: "婺源县"
                    },
                    {
                        text: "德兴市"
                    }
                ]
            }
        ]
    },
    {
        text: "山东",
        items: [
            {
                text: "济南",
                items: [
                    {
                        text: "历下区"
                    },
                    {
                        text: "市中区"
                    },
                    {
                        text: "槐荫区"
                    },
                    {
                        text: "天桥区"
                    },
                    {
                        text: "历城区"
                    },
                    {
                        text: "长清区"
                    },
                    {
                        text: "平阴县"
                    },
                    {
                        text: "济阳县"
                    },
                    {
                        text: "商河县"
                    },
                    {
                        text: "章丘市"
                    }
                ]
            },
            {
                text: "青岛",
                items: [
                    {
                        text: "市南区"
                    },
                    {
                        text: "市北区"
                    },
                    {
                        text: "四方区"
                    },
                    {
                        text: "黄岛区"
                    },
                    {
                        text: "崂山区"
                    },
                    {
                        text: "李沧区"
                    },
                    {
                        text: "城阳区"
                    },
                    {
                        text: "胶州市"
                    },
                    {
                        text: "即墨市"
                    },
                    {
                        text: "平度市"
                    },
                    {
                        text: "胶南市"
                    },
                    {
                        text: "莱西市"
                    }
                ]
            },
            {
                text: "淄博",
                items: [
                    {
                        text: "淄川区"
                    },
                    {
                        text: "张店区"
                    },
                    {
                        text: "博山区"
                    },
                    {
                        text: "临淄区"
                    },
                    {
                        text: "周村区"
                    },
                    {
                        text: "桓台县"
                    },
                    {
                        text: "高青县"
                    },
                    {
                        text: "沂源县"
                    }
                ]
            },
            {
                text: "枣庄",
                items: [
                    {
                        text: "市中区"
                    },
                    {
                        text: "薛城区"
                    },
                    {
                        text: "峄城区"
                    },
                    {
                        text: "台儿庄区"
                    },
                    {
                        text: "山亭区"
                    },
                    {
                        text: "滕州市"
                    }
                ]
            },
            {
                text: "东营",
                items: [
                    {
                        text: "东营区"
                    },
                    {
                        text: "河口区"
                    },
                    {
                        text: "垦利县"
                    },
                    {
                        text: "利津县"
                    },
                    {
                        text: "广饶县"
                    }
                ]
            },
            {
                text: "烟台",
                items: [
                    {
                        text: "芝罘区"
                    },
                    {
                        text: "福山区"
                    },
                    {
                        text: "牟平区"
                    },
                    {
                        text: "莱山区"
                    },
                    {
                        text: "长岛县"
                    },
                    {
                        text: "龙口市"
                    },
                    {
                        text: "莱阳市"
                    },
                    {
                        text: "莱州市"
                    },
                    {
                        text: "蓬莱市"
                    },
                    {
                        text: "招远市"
                    },
                    {
                        text: "栖霞市"
                    },
                    {
                        text: "海阳市"
                    }
                ]
            },
            {
                text: "潍坊",
                items: [
                    {
                        text: "潍城区"
                    },
                    {
                        text: "寒亭区"
                    },
                    {
                        text: "坊子区"
                    },
                    {
                        text: "奎文区"
                    },
                    {
                        text: "临朐县"
                    },
                    {
                        text: "昌乐县"
                    },
                    {
                        text: "青州市"
                    },
                    {
                        text: "诸城市"
                    },
                    {
                        text: "寿光市"
                    },
                    {
                        text: "安丘市"
                    },
                    {
                        text: "高密市"
                    },
                    {
                        text: "昌邑市"
                    }
                ]
            },
            {
                text: "济宁",
                items: [
                    {
                        text: "市中区"
                    },
                    {
                        text: "任城区"
                    },
                    {
                        text: "微山县"
                    },
                    {
                        text: "鱼台县"
                    },
                    {
                        text: "金乡县"
                    },
                    {
                        text: "嘉祥县"
                    },
                    {
                        text: "汶上县"
                    },
                    {
                        text: "泗水县"
                    },
                    {
                        text: "梁山县"
                    },
                    {
                        text: "曲阜市"
                    },
                    {
                        text: "兖州市"
                    },
                    {
                        text: "邹城市"
                    }
                ]
            },
            {
                text: "泰安",
                items: [
                    {
                        text: "泰山区"
                    },
                    {
                        text: "岱岳区"
                    },
                    {
                        text: "宁阳县"
                    },
                    {
                        text: "东平县"
                    },
                    {
                        text: "新泰市"
                    },
                    {
                        text: "肥城市"
                    }
                ]
            },
            {
                text: "威海",
                items: [
                    {
                        text: "环翠区"
                    },
                    {
                        text: "文登市"
                    },
                    {
                        text: "荣成市"
                    },
                    {
                        text: "乳山市"
                    }
                ]
            },
            {
                text: "日照",
                items: [
                    {
                        text: "东港区"
                    },
                    {
                        text: "岚山区"
                    },
                    {
                        text: "五莲县"
                    },
                    {
                        text: "莒县"
                    }
                ]
            },
            {
                text: "莱芜",
                items: [
                    {
                        text: "莱城区"
                    },
                    {
                        text: "钢城区"
                    }
                ]
            },
            {
                text: "临沂",
                items: [
                    {
                        text: "兰山区"
                    },
                    {
                        text: "罗庄区"
                    },
                    {
                        text: "河东区"
                    },
                    {
                        text: "沂南县"
                    },
                    {
                        text: "郯城县"
                    },
                    {
                        text: "沂水县"
                    },
                    {
                        text: "苍山县"
                    },
                    {
                        text: "费县"
                    },
                    {
                        text: "平邑县"
                    },
                    {
                        text: "莒南县"
                    },
                    {
                        text: "蒙阴县"
                    },
                    {
                        text: "临沭县"
                    }
                ]
            },
            {
                text: "德州",
                items: [
                    {
                        text: "德城区"
                    },
                    {
                        text: "陵县"
                    },
                    {
                        text: "宁津县"
                    },
                    {
                        text: "庆云县"
                    },
                    {
                        text: "临邑县"
                    },
                    {
                        text: "齐河县"
                    },
                    {
                        text: "平原县"
                    },
                    {
                        text: "夏津县"
                    },
                    {
                        text: "武城县"
                    },
                    {
                        text: "乐陵市"
                    },
                    {
                        text: "禹城市"
                    }
                ]
            },
            {
                text: "聊城",
                items: [
                    {
                        text: "东昌府区"
                    },
                    {
                        text: "阳谷县"
                    },
                    {
                        text: "莘县"
                    },
                    {
                        text: "茌平县"
                    },
                    {
                        text: "东阿县"
                    },
                    {
                        text: "冠县"
                    },
                    {
                        text: "高唐县"
                    },
                    {
                        text: "临清市"
                    }
                ]
            },
            {
                text: "滨州",
                items: [
                    {
                        text: "滨城区"
                    },
                    {
                        text: "惠民县"
                    },
                    {
                        text: "阳信县"
                    },
                    {
                        text: "无棣县"
                    },
                    {
                        text: "沾化县"
                    },
                    {
                        text: "博兴县"
                    },
                    {
                        text: "邹平县"
                    }
                ]
            },
            {
                text: "菏泽",
                items: [
                    {
                        text: "牡丹区"
                    },
                    {
                        text: "曹县"
                    },
                    {
                        text: "单县"
                    },
                    {
                        text: "成武县"
                    },
                    {
                        text: "巨野县"
                    },
                    {
                        text: "郓城县"
                    },
                    {
                        text: "鄄城县"
                    },
                    {
                        text: "定陶县"
                    },
                    {
                        text: "东明县"
                    }
                ]
            }
        ]
    },
    {
        text: "河南",
        items: [
            {
                text: "郑州",
                items: [
                    {
                        text: "中原区"
                    },
                    {
                        text: "二七区"
                    },
                    {
                        text: "管城回族区"
                    },
                    {
                        text: "金水区"
                    },
                    {
                        text: "上街区"
                    },
                    {
                        text: "惠济区"
                    },
                    {
                        text: "中牟县"
                    },
                    {
                        text: "巩义市"
                    },
                    {
                        text: "荥阳市"
                    },
                    {
                        text: "新密市"
                    },
                    {
                        text: "新郑市"
                    },
                    {
                        text: "登封市"
                    }
                ]
            },
            {
                text: "开封",
                items: [
                    {
                        text: "龙亭区"
                    },
                    {
                        text: "顺河回族区"
                    },
                    {
                        text: "鼓楼区"
                    },
                    {
                        text: "禹王台区"
                    },
                    {
                        text: "金明区"
                    },
                    {
                        text: "杞县"
                    },
                    {
                        text: "通许县"
                    },
                    {
                        text: "尉氏县"
                    },
                    {
                        text: "开封县"
                    },
                    {
                        text: "兰考县"
                    }
                ]
            },
            {
                text: "洛阳",
                items: [
                    {
                        text: "老城区"
                    },
                    {
                        text: "西工区"
                    },
                    {
                        text: "廛河回族区"
                    },
                    {
                        text: "涧西区"
                    },
                    {
                        text: "吉利区"
                    },
                    {
                        text: "洛龙区"
                    },
                    {
                        text: "孟津县"
                    },
                    {
                        text: "新安县"
                    },
                    {
                        text: "栾川县"
                    },
                    {
                        text: "嵩县"
                    },
                    {
                        text: "汝阳县"
                    },
                    {
                        text: "宜阳县"
                    },
                    {
                        text: "洛宁县"
                    },
                    {
                        text: "伊川县"
                    },
                    {
                        text: "偃师市"
                    }
                ]
            },
            {
                text: "平顶山",
                items: [
                    {
                        text: "新华区"
                    },
                    {
                        text: "卫东区"
                    },
                    {
                        text: "石龙区"
                    },
                    {
                        text: "湛河区"
                    },
                    {
                        text: "宝丰县"
                    },
                    {
                        text: "叶县"
                    },
                    {
                        text: "鲁山县"
                    },
                    {
                        text: "郏县"
                    },
                    {
                        text: "舞钢市"
                    },
                    {
                        text: "汝州市"
                    }
                ]
            },
            {
                text: "安阳",
                items: [
                    {
                        text: "文峰区"
                    },
                    {
                        text: "北关区"
                    },
                    {
                        text: "殷都区"
                    },
                    {
                        text: "龙安区"
                    },
                    {
                        text: "安阳县"
                    },
                    {
                        text: "汤阴县"
                    },
                    {
                        text: "滑县"
                    },
                    {
                        text: "内黄县"
                    },
                    {
                        text: "林州市"
                    }
                ]
            },
            {
                text: "鹤壁",
                items: [
                    {
                        text: "鹤山区"
                    },
                    {
                        text: "山城区"
                    },
                    {
                        text: "淇滨区"
                    },
                    {
                        text: "浚县"
                    },
                    {
                        text: "淇县"
                    }
                ]
            },
            {
                text: "新乡",
                items: [
                    {
                        text: "红旗区"
                    },
                    {
                        text: "卫滨区"
                    },
                    {
                        text: "凤泉区"
                    },
                    {
                        text: "牧野区"
                    },
                    {
                        text: "新乡县"
                    },
                    {
                        text: "获嘉县"
                    },
                    {
                        text: "原阳县"
                    },
                    {
                        text: "延津县"
                    },
                    {
                        text: "封丘县"
                    },
                    {
                        text: "长垣县"
                    },
                    {
                        text: "卫辉市"
                    },
                    {
                        text: "辉县市"
                    }
                ]
            },
            {
                text: "焦作",
                items: [
                    {
                        text: "解放区"
                    },
                    {
                        text: "中站区"
                    },
                    {
                        text: "马村区"
                    },
                    {
                        text: "山阳区"
                    },
                    {
                        text: "修武县"
                    },
                    {
                        text: "博爱县"
                    },
                    {
                        text: "武陟县"
                    },
                    {
                        text: "温县"
                    },
                    {
                        text: "沁阳市"
                    },
                    {
                        text: "孟州市"
                    }
                ]
            },
            {
                text: "濮阳",
                items: [
                    {
                        text: "华龙区"
                    },
                    {
                        text: "清丰县"
                    },
                    {
                        text: "南乐县"
                    },
                    {
                        text: "范县"
                    },
                    {
                        text: "台前县"
                    },
                    {
                        text: "濮阳县"
                    }
                ]
            },
            {
                text: "许昌",
                items: [
                    {
                        text: "魏都区"
                    },
                    {
                        text: "许昌县"
                    },
                    {
                        text: "鄢陵县"
                    },
                    {
                        text: "襄城县"
                    },
                    {
                        text: "禹州市"
                    },
                    {
                        text: "长葛市"
                    }
                ]
            },
            {
                text: "漯河",
                items: [
                    {
                        text: "源汇区"
                    },
                    {
                        text: "郾城区"
                    },
                    {
                        text: "召陵区"
                    },
                    {
                        text: "舞阳县"
                    },
                    {
                        text: "临颍县"
                    }
                ]
            },
            {
                text: "三门峡",
                items: [
                    {
                        text: "湖滨区"
                    },
                    {
                        text: "渑池县"
                    },
                    {
                        text: "陕县"
                    },
                    {
                        text: "卢氏县"
                    },
                    {
                        text: "义马市"
                    },
                    {
                        text: "灵宝市"
                    }
                ]
            },
            {
                text: "南阳",
                items: [
                    {
                        text: "宛城区"
                    },
                    {
                        text: "卧龙区"
                    },
                    {
                        text: "南召县"
                    },
                    {
                        text: "方城县"
                    },
                    {
                        text: "西峡县"
                    },
                    {
                        text: "镇平县"
                    },
                    {
                        text: "内乡县"
                    },
                    {
                        text: "淅川县"
                    },
                    {
                        text: "社旗县"
                    },
                    {
                        text: "唐河县"
                    },
                    {
                        text: "新野县"
                    },
                    {
                        text: "桐柏县"
                    },
                    {
                        text: "邓州市"
                    }
                ]
            },
            {
                text: "商丘",
                items: [
                    {
                        text: "梁园区"
                    },
                    {
                        text: "睢阳区"
                    },
                    {
                        text: "民权县"
                    },
                    {
                        text: "睢县"
                    },
                    {
                        text: "宁陵县"
                    },
                    {
                        text: "柘城县"
                    },
                    {
                        text: "虞城县"
                    },
                    {
                        text: "夏邑县"
                    },
                    {
                        text: "永城市"
                    }
                ]
            },
            {
                text: "信阳",
                items: [
                    {
                        text: "浉河区"
                    },
                    {
                        text: "平桥区"
                    },
                    {
                        text: "罗山县"
                    },
                    {
                        text: "光山县"
                    },
                    {
                        text: "新县"
                    },
                    {
                        text: "商城县"
                    },
                    {
                        text: "固始县"
                    },
                    {
                        text: "潢川县"
                    },
                    {
                        text: "淮滨县"
                    },
                    {
                        text: "息县"
                    }
                ]
            },
            {
                text: "周口",
                items: [
                    {
                        text: "川汇区"
                    },
                    {
                        text: "扶沟县"
                    },
                    {
                        text: "西华县"
                    },
                    {
                        text: "商水县"
                    },
                    {
                        text: "沈丘县"
                    },
                    {
                        text: "郸城县"
                    },
                    {
                        text: "淮阳县"
                    },
                    {
                        text: "太康县"
                    },
                    {
                        text: "鹿邑县"
                    },
                    {
                        text: "项城市"
                    }
                ]
            },
            {
                text: "驻马店",
                items: [
                    {
                        text: "驿城区"
                    },
                    {
                        text: "西平县"
                    },
                    {
                        text: "上蔡县"
                    },
                    {
                        text: "平舆县"
                    },
                    {
                        text: "正阳县"
                    },
                    {
                        text: "确山县"
                    },
                    {
                        text: "泌阳县"
                    },
                    {
                        text: "汝南县"
                    },
                    {
                        text: "遂平县"
                    },
                    {
                        text: "新蔡县"
                    }
                ]
            },
            {
                text: "济源",
                items: [
                    {
                        text: "济源"
                    }
                ]
            }
        ]
    },
    {
        text: "湖北",
        items: [
            {
                text: "武汉",
                items: [
                    {
                        text: "江岸区"
                    },
                    {
                        text: "江汉区"
                    },
                    {
                        text: "硚口区"
                    },
                    {
                        text: "汉阳区"
                    },
                    {
                        text: "武昌区"
                    },
                    {
                        text: "青山区"
                    },
                    {
                        text: "洪山区"
                    },
                    {
                        text: "东西湖区"
                    },
                    {
                        text: "汉南区"
                    },
                    {
                        text: "蔡甸区"
                    },
                    {
                        text: "江夏区"
                    },
                    {
                        text: "黄陂区"
                    },
                    {
                        text: "新洲区"
                    }
                ]
            },
            {
                text: "黄石",
                items: [
                    {
                        text: "黄石港区"
                    },
                    {
                        text: "西塞山区"
                    },
                    {
                        text: "下陆区"
                    },
                    {
                        text: "铁山区"
                    },
                    {
                        text: "阳新县"
                    },
                    {
                        text: "大冶市"
                    }
                ]
            },
            {
                text: "十堰",
                items: [
                    {
                        text: "茅箭区"
                    },
                    {
                        text: "张湾区"
                    },
                    {
                        text: "郧县"
                    },
                    {
                        text: "郧西县"
                    },
                    {
                        text: "竹山县"
                    },
                    {
                        text: "竹溪县"
                    },
                    {
                        text: "房县"
                    },
                    {
                        text: "丹江口市"
                    }
                ]
            },
            {
                text: "宜昌",
                items: [
                    {
                        text: "西陵区"
                    },
                    {
                        text: "伍家岗区"
                    },
                    {
                        text: "点军区"
                    },
                    {
                        text: "猇亭区"
                    },
                    {
                        text: "夷陵区"
                    },
                    {
                        text: "远安县"
                    },
                    {
                        text: "兴山县"
                    },
                    {
                        text: "秭归县"
                    },
                    {
                        text: "长阳土家族自治县"
                    },
                    {
                        text: "五峰土家族自治县"
                    },
                    {
                        text: "宜都市"
                    },
                    {
                        text: "当阳市"
                    },
                    {
                        text: "枝江市"
                    }
                ]
            },
            {
                text: "襄樊",
                items: [
                    {
                        text: "襄城区"
                    },
                    {
                        text: "樊城区"
                    },
                    {
                        text: "襄阳区"
                    },
                    {
                        text: "南漳县"
                    },
                    {
                        text: "谷城县"
                    },
                    {
                        text: "保康县"
                    },
                    {
                        text: "老河口市"
                    },
                    {
                        text: "枣阳市"
                    },
                    {
                        text: "宜城市"
                    }
                ]
            },
            {
                text: "鄂州",
                items: [
                    {
                        text: "梁子湖区"
                    },
                    {
                        text: "华容区"
                    },
                    {
                        text: "鄂城区"
                    }
                ]
            },
            {
                text: "荆门",
                items: [
                    {
                        text: "东宝区"
                    },
                    {
                        text: "掇刀区"
                    },
                    {
                        text: "京山县"
                    },
                    {
                        text: "沙洋县"
                    },
                    {
                        text: "钟祥市"
                    }
                ]
            },
            {
                text: "孝感",
                items: [
                    {
                        text: "孝南区"
                    },
                    {
                        text: "孝昌县"
                    },
                    {
                        text: "大悟县"
                    },
                    {
                        text: "云梦县"
                    },
                    {
                        text: "应城市"
                    },
                    {
                        text: "安陆市"
                    },
                    {
                        text: "汉川市"
                    }
                ]
            },
            {
                text: "荆州",
                items: [
                    {
                        text: "沙市区"
                    },
                    {
                        text: "荆州区"
                    },
                    {
                        text: "公安县"
                    },
                    {
                        text: "监利县"
                    },
                    {
                        text: "江陵县"
                    },
                    {
                        text: "石首市"
                    },
                    {
                        text: "洪湖市"
                    },
                    {
                        text: "松滋市"
                    }
                ]
            },
            {
                text: "黄冈",
                items: [
                    {
                        text: "黄州区"
                    },
                    {
                        text: "团风县"
                    },
                    {
                        text: "红安县"
                    },
                    {
                        text: "罗田县"
                    },
                    {
                        text: "英山县"
                    },
                    {
                        text: "浠水县"
                    },
                    {
                        text: "蕲春县"
                    },
                    {
                        text: "黄梅县"
                    },
                    {
                        text: "麻城市"
                    },
                    {
                        text: "武穴市"
                    }
                ]
            },
            {
                text: "咸宁",
                items: [
                    {
                        text: "咸安区"
                    },
                    {
                        text: "嘉鱼县"
                    },
                    {
                        text: "通城县"
                    },
                    {
                        text: "崇阳县"
                    },
                    {
                        text: "通山县"
                    },
                    {
                        text: "赤壁市"
                    }
                ]
            },
            {
                text: "随州",
                items: [
                    {
                        text: "曾都区"
                    },
                    {
                        text: "随县"
                    },
                    {
                        text: "广水市"
                    }
                ]
            },
            {
                text: "恩施",
                items: [
                    {
                        text: "恩施市"
                    },
                    {
                        text: "利川市"
                    },
                    {
                        text: "建始县"
                    },
                    {
                        text: "巴东县"
                    },
                    {
                        text: "宣恩县"
                    },
                    {
                        text: "咸丰县"
                    },
                    {
                        text: "来凤县"
                    },
                    {
                        text: "鹤峰县"
                    }
                ]
            },
            {
                text: "仙桃",
                items: [
                    {
                        text: "仙桃"
                    }
                ]
            },
            {
                text: "潜江",
                items: [
                    {
                        text: "潜江"
                    }
                ]
            },
            {
                text: "天门",
                items: [
                    {
                        text: "天门"
                    }
                ]
            },
            {
                text: "神农架",
                items: [
                    {
                        text: "神农架"
                    }
                ]
            }
        ]
    },
    {
        text: "湖南",
        items: [
            {
                text: "长沙",
                items: [
                    {
                        text: "芙蓉区"
                    },
                    {
                        text: "天心区"
                    },
                    {
                        text: "岳麓区"
                    },
                    {
                        text: "开福区"
                    },
                    {
                        text: "雨花区"
                    },
                    {
                        text: "长沙县"
                    },
                    {
                        text: "望城县"
                    },
                    {
                        text: "宁乡县"
                    },
                    {
                        text: "浏阳市"
                    }
                ]
            },
            {
                text: "株洲",
                items: [
                    {
                        text: "荷塘区"
                    },
                    {
                        text: "芦淞区"
                    },
                    {
                        text: "石峰区"
                    },
                    {
                        text: "天元区"
                    },
                    {
                        text: "株洲县"
                    },
                    {
                        text: "攸县"
                    },
                    {
                        text: "茶陵县"
                    },
                    {
                        text: "炎陵县"
                    },
                    {
                        text: "醴陵市"
                    }
                ]
            },
            {
                text: "湘潭",
                items: [
                    {
                        text: "雨湖区"
                    },
                    {
                        text: "岳塘区"
                    },
                    {
                        text: "湘潭县"
                    },
                    {
                        text: "湘乡市"
                    },
                    {
                        text: "韶山市"
                    }
                ]
            },
            {
                text: "衡阳",
                items: [
                    {
                        text: "珠晖区"
                    },
                    {
                        text: "雁峰区"
                    },
                    {
                        text: "石鼓区"
                    },
                    {
                        text: "蒸湘区"
                    },
                    {
                        text: "南岳区"
                    },
                    {
                        text: "衡阳县"
                    },
                    {
                        text: "衡南县"
                    },
                    {
                        text: "衡山县"
                    },
                    {
                        text: "衡东县"
                    },
                    {
                        text: "祁东县"
                    },
                    {
                        text: "耒阳市"
                    },
                    {
                        text: "常宁市"
                    }
                ]
            },
            {
                text: "邵阳",
                items: [
                    {
                        text: "双清区"
                    },
                    {
                        text: "大祥区"
                    },
                    {
                        text: "北塔区"
                    },
                    {
                        text: "邵东县"
                    },
                    {
                        text: "新邵县"
                    },
                    {
                        text: "邵阳县"
                    },
                    {
                        text: "隆回县"
                    },
                    {
                        text: "洞口县"
                    },
                    {
                        text: "绥宁县"
                    },
                    {
                        text: "新宁县"
                    },
                    {
                        text: "城步苗族自治县"
                    },
                    {
                        text: "武冈市"
                    }
                ]
            },
            {
                text: "岳阳",
                items: [
                    {
                        text: "岳阳楼区"
                    },
                    {
                        text: "云溪区"
                    },
                    {
                        text: "君山区"
                    },
                    {
                        text: "岳阳县"
                    },
                    {
                        text: "华容县"
                    },
                    {
                        text: "湘阴县"
                    },
                    {
                        text: "平江县"
                    },
                    {
                        text: "汨罗市"
                    },
                    {
                        text: "临湘市"
                    }
                ]
            },
            {
                text: "常德",
                items: [
                    {
                        text: "武陵区"
                    },
                    {
                        text: "鼎城区"
                    },
                    {
                        text: "安乡县"
                    },
                    {
                        text: "汉寿县"
                    },
                    {
                        text: "澧县"
                    },
                    {
                        text: "临澧县"
                    },
                    {
                        text: "桃源县"
                    },
                    {
                        text: "石门县"
                    },
                    {
                        text: "津市市"
                    }
                ]
            },
            {
                text: "张家界",
                items: [
                    {
                        text: "永定区"
                    },
                    {
                        text: "武陵源区"
                    },
                    {
                        text: "慈利县"
                    },
                    {
                        text: "桑植县"
                    }
                ]
            },
            {
                text: "益阳",
                items: [
                    {
                        text: "资阳区"
                    },
                    {
                        text: "赫山区"
                    },
                    {
                        text: "南县"
                    },
                    {
                        text: "桃江县"
                    },
                    {
                        text: "安化县"
                    },
                    {
                        text: "沅江市"
                    }
                ]
            },
            {
                text: "郴州",
                items: [
                    {
                        text: "北湖区"
                    },
                    {
                        text: "苏仙区"
                    },
                    {
                        text: "桂阳县"
                    },
                    {
                        text: "宜章县"
                    },
                    {
                        text: "永兴县"
                    },
                    {
                        text: "嘉禾县"
                    },
                    {
                        text: "临武县"
                    },
                    {
                        text: "汝城县"
                    },
                    {
                        text: "桂东县"
                    },
                    {
                        text: "安仁县"
                    },
                    {
                        text: "资兴市"
                    }
                ]
            },
            {
                text: "永州",
                items: [
                    {
                        text: "零陵区"
                    },
                    {
                        text: "冷水滩区"
                    },
                    {
                        text: "祁阳县"
                    },
                    {
                        text: "东安县"
                    },
                    {
                        text: "双牌县"
                    },
                    {
                        text: "道县"
                    },
                    {
                        text: "江永县"
                    },
                    {
                        text: "宁远县"
                    },
                    {
                        text: "蓝山县"
                    },
                    {
                        text: "新田县"
                    },
                    {
                        text: "江华瑶族自治县"
                    }
                ]
            },
            {
                text: "怀化",
                items: [
                    {
                        text: "鹤城区"
                    },
                    {
                        text: "中方县"
                    },
                    {
                        text: "沅陵县"
                    },
                    {
                        text: "辰溪县"
                    },
                    {
                        text: "溆浦县"
                    },
                    {
                        text: "会同县"
                    },
                    {
                        text: "麻阳苗族自治县"
                    },
                    {
                        text: "新晃侗族自治县"
                    },
                    {
                        text: "芷江侗族自治县"
                    },
                    {
                        text: "靖州苗族侗族自治县"
                    },
                    {
                        text: "通道侗族自治县"
                    },
                    {
                        text: "洪江市"
                    }
                ]
            },
            {
                text: "娄底",
                items: [
                    {
                        text: "娄星区"
                    },
                    {
                        text: "双峰县"
                    },
                    {
                        text: "新化县"
                    },
                    {
                        text: "冷水江市"
                    },
                    {
                        text: "涟源市"
                    }
                ]
            },
            {
                text: "湘西",
                items: [
                    {
                        text: "吉首市"
                    },
                    {
                        text: "泸溪县"
                    },
                    {
                        text: "凤凰县"
                    },
                    {
                        text: "花垣县"
                    },
                    {
                        text: "保靖县"
                    },
                    {
                        text: "古丈县"
                    },
                    {
                        text: "永顺县"
                    },
                    {
                        text: "龙山县"
                    }
                ]
            }
        ]
    },
    {
        text: "广东",
        items: [
            {
                text: "广州",
                items: [
                    {
                        text: "荔湾区"
                    },
                    {
                        text: "越秀区"
                    },
                    {
                        text: "海珠区"
                    },
                    {
                        text: "天河区"
                    },
                    {
                        text: "白云区"
                    },
                    {
                        text: "黄埔区"
                    },
                    {
                        text: "番禺区"
                    },
                    {
                        text: "花都区"
                    },
                    {
                        text: "南沙区"
                    },
                    {
                        text: "萝岗区"
                    },
                    {
                        text: "增城市"
                    },
                    {
                        text: "从化市"
                    }
                ]
            },
            {
                text: "韶关",
                items: [
                    {
                        text: "武江区"
                    },
                    {
                        text: "浈江区"
                    },
                    {
                        text: "曲江区"
                    },
                    {
                        text: "始兴县"
                    },
                    {
                        text: "仁化县"
                    },
                    {
                        text: "翁源县"
                    },
                    {
                        text: "乳源瑶族自治县"
                    },
                    {
                        text: "新丰县"
                    },
                    {
                        text: "乐昌市"
                    },
                    {
                        text: "南雄市"
                    }
                ]
            },
            {
                text: "深圳",
                items: [
                    {
                        text: "罗湖区"
                    },
                    {
                        text: "福田区"
                    },
                    {
                        text: "南山区"
                    },
                    {
                        text: "宝安区"
                    },
                    {
                        text: "龙岗区"
                    },
                    {
                        text: "盐田区"
                    }
                ]
            },
            {
                text: "珠海",
                items: [
                    {
                        text: "香洲区"
                    },
                    {
                        text: "斗门区"
                    },
                    {
                        text: "金湾区"
                    }
                ]
            },
            {
                text: "汕头",
                items: [
                    {
                        text: "龙湖区"
                    },
                    {
                        text: "金平区"
                    },
                    {
                        text: "濠江区"
                    },
                    {
                        text: "潮阳区"
                    },
                    {
                        text: "潮南区"
                    },
                    {
                        text: "澄海区"
                    },
                    {
                        text: "南澳县"
                    }
                ]
            },
            {
                text: "佛山",
                items: [
                    {
                        text: "禅城区"
                    },
                    {
                        text: "南海区"
                    },
                    {
                        text: "顺德区"
                    },
                    {
                        text: "三水区"
                    },
                    {
                        text: "高明区"
                    }
                ]
            },
            {
                text: "江门",
                items: [
                    {
                        text: "蓬江区"
                    },
                    {
                        text: "江海区"
                    },
                    {
                        text: "新会区"
                    },
                    {
                        text: "台山市"
                    },
                    {
                        text: "开平市"
                    },
                    {
                        text: "鹤山市"
                    },
                    {
                        text: "恩平市"
                    }
                ]
            },
            {
                text: "湛江",
                items: [
                    {
                        text: "赤坎区"
                    },
                    {
                        text: "霞山区"
                    },
                    {
                        text: "坡头区"
                    },
                    {
                        text: "麻章区"
                    },
                    {
                        text: "遂溪县"
                    },
                    {
                        text: "徐闻县"
                    },
                    {
                        text: "廉江市"
                    },
                    {
                        text: "雷州市"
                    },
                    {
                        text: "吴川市"
                    }
                ]
            },
            {
                text: "茂名",
                items: [
                    {
                        text: "茂南区"
                    },
                    {
                        text: "茂港区"
                    },
                    {
                        text: "电白县"
                    },
                    {
                        text: "高州市"
                    },
                    {
                        text: "化州市"
                    },
                    {
                        text: "信宜市"
                    }
                ]
            },
            {
                text: "肇庆",
                items: [
                    {
                        text: "端州区"
                    },
                    {
                        text: "鼎湖区"
                    },
                    {
                        text: "广宁县"
                    },
                    {
                        text: "怀集县"
                    },
                    {
                        text: "封开县"
                    },
                    {
                        text: "德庆县"
                    },
                    {
                        text: "高要市"
                    },
                    {
                        text: "四会市"
                    }
                ]
            },
            {
                text: "惠州",
                items: [
                    {
                        text: "惠城区"
                    },
                    {
                        text: "惠阳区"
                    },
                    {
                        text: "博罗县"
                    },
                    {
                        text: "惠东县"
                    },
                    {
                        text: "龙门县"
                    }
                ]
            },
            {
                text: "梅州",
                items: [
                    {
                        text: "梅江区"
                    },
                    {
                        text: "梅县"
                    },
                    {
                        text: "大埔县"
                    },
                    {
                        text: "丰顺县"
                    },
                    {
                        text: "五华县"
                    },
                    {
                        text: "平远县"
                    },
                    {
                        text: "蕉岭县"
                    },
                    {
                        text: "兴宁市"
                    }
                ]
            },
            {
                text: "汕尾",
                items: [
                    {
                        text: "城区"
                    },
                    {
                        text: "海丰县"
                    },
                    {
                        text: "陆河县"
                    },
                    {
                        text: "陆丰市"
                    }
                ]
            },
            {
                text: "河源",
                items: [
                    {
                        text: "源城区"
                    },
                    {
                        text: "紫金县"
                    },
                    {
                        text: "龙川县"
                    },
                    {
                        text: "连平县"
                    },
                    {
                        text: "和平县"
                    },
                    {
                        text: "东源县"
                    }
                ]
            },
            {
                text: "阳江",
                items: [
                    {
                        text: "江城区"
                    },
                    {
                        text: "阳西县"
                    },
                    {
                        text: "阳东县"
                    },
                    {
                        text: "阳春市"
                    }
                ]
            },
            {
                text: "清远",
                items: [
                    {
                        text: "清城区"
                    },
                    {
                        text: "佛冈县"
                    },
                    {
                        text: "阳山县"
                    },
                    {
                        text: "连山壮族瑶族自治县"
                    },
                    {
                        text: "连南瑶族自治县"
                    },
                    {
                        text: "清新县"
                    },
                    {
                        text: "英德市"
                    },
                    {
                        text: "连州市"
                    }
                ]
            },
            {
                text: "东莞",
                items: [
                    {
                        text: "东莞市"
                    }
                ]
            },
            {
                text: "中山",
                items: [
                    {
                        text: "石岐"
                    },
                    {
                        text: "东区"
                    },
                    {
                        text: "南区"
                    },
                    {
                        text: "西区"
                    },
                    {
                        text: "开发区"
                    },
                    {
                        text: "板芙"
                    },
                    {
                        text: "大涌"
                    },
                    {
                        text: "东凤"
                    },
                    {
                        text: "东升"
                    },
                    {
                        text: "阜沙"
                    },
                    {
                        text: "港口",
                        "j": [{ "j": "港口社区" }, { "j": "民主社区" }, { "j": "群众社区" }]
                    },
                    {
                        text: "古镇"
                    },
                    {
                        text: "横栏"
                    },
                    {
                        text: "黄圃"
                    },
                    {
                        text: "民众"
                    },
                    {
                        text: "南朗"
                    },
                    {
                        text: "南头"
                    },
                    {
                        text: "三角"
                    },
                    {
                        text: "三乡"
                    },
                    {
                        text: "沙溪"
                    },
                    {
                        text: "神湾"
                    },
                    {
                        text: "坦洲"
                    },
                    {
                        text: "小榄"

                    }
                ]
            },
            {
                text: "潮州",
                items: [
                    {
                        text: "湘桥区"
                    },
                    {
                        text: "潮安县"
                    },
                    {
                        text: "饶平县"
                    }
                ]
            },
            {
                text: "揭阳",
                items: [
                    {
                        text: "榕城区"
                    },
                    {
                        text: "揭东县"
                    },
                    {
                        text: "揭西县"
                    },
                    {
                        text: "惠来县"
                    },
                    {
                        text: "普宁市"
                    }
                ]
            },
            {
                text: "云浮",
                items: [
                    {
                        text: "云城区"
                    },
                    {
                        text: "新兴县"
                    },
                    {
                        text: "郁南县"
                    },
                    {
                        text: "云安县"
                    },
                    {
                        text: "罗定市"
                    }
                ]
            }
        ]
    },
    {
        text: "广西",
        items: [
            {
                text: "南宁",
                items: [
                    {
                        text: "兴宁区"
                    },
                    {
                        text: "青秀区"
                    },
                    {
                        text: "江南区"
                    },
                    {
                        text: "西乡塘区"
                    },
                    {
                        text: "良庆区"
                    },
                    {
                        text: "邕宁区"
                    },
                    {
                        text: "武鸣县"
                    },
                    {
                        text: "隆安县"
                    },
                    {
                        text: "马山县"
                    },
                    {
                        text: "上林县"
                    },
                    {
                        text: "宾阳县"
                    },
                    {
                        text: "横县"
                    }
                ]
            },
            {
                text: "柳州",
                items: [
                    {
                        text: "城中区"
                    },
                    {
                        text: "鱼峰区"
                    },
                    {
                        text: "柳南区"
                    },
                    {
                        text: "柳北区"
                    },
                    {
                        text: "柳江县"
                    },
                    {
                        text: "柳城县"
                    },
                    {
                        text: "鹿寨县"
                    },
                    {
                        text: "融安县"
                    },
                    {
                        text: "融水苗族自治县"
                    },
                    {
                        text: "三江侗族自治县"
                    }
                ]
            },
            {
                text: "桂林",
                items: [
                    {
                        text: "秀峰区"
                    },
                    {
                        text: "叠彩区"
                    },
                    {
                        text: "象山区"
                    },
                    {
                        text: "七星区"
                    },
                    {
                        text: "雁山区"
                    },
                    {
                        text: "阳朔县"
                    },
                    {
                        text: "临桂县"
                    },
                    {
                        text: "灵川县"
                    },
                    {
                        text: "全州县"
                    },
                    {
                        text: "兴安县"
                    },
                    {
                        text: "永福县"
                    },
                    {
                        text: "灌阳县"
                    },
                    {
                        text: "龙胜各族自治县"
                    },
                    {
                        text: "资源县"
                    },
                    {
                        text: "平乐县"
                    },
                    {
                        text: "荔蒲县"
                    },
                    {
                        text: "恭城瑶族自治县"
                    }
                ]
            },
            {
                text: "梧州",
                items: [
                    {
                        text: "万秀区"
                    },
                    {
                        text: "蝶山区"
                    },
                    {
                        text: "长洲区"
                    },
                    {
                        text: "苍梧县"
                    },
                    {
                        text: "藤县"
                    },
                    {
                        text: "蒙山县"
                    },
                    {
                        text: "岑溪市"
                    }
                ]
            },
            {
                text: "北海",
                items: [
                    {
                        text: "海城区"
                    },
                    {
                        text: "银海区"
                    },
                    {
                        text: "铁山港区"
                    },
                    {
                        text: "合浦县"
                    }
                ]
            },
            {
                text: "防城港",
                items: [
                    {
                        text: "港口区"
                    },
                    {
                        text: "防城区"
                    },
                    {
                        text: "上思县"
                    },
                    {
                        text: "东兴市"
                    }
                ]
            },
            {
                text: "钦州",
                items: [
                    {
                        text: "钦南区"
                    },
                    {
                        text: "钦北区"
                    },
                    {
                        text: "灵山县"
                    },
                    {
                        text: "浦北县"
                    }
                ]
            },
            {
                text: "贵港",
                items: [
                    {
                        text: "港北区"
                    },
                    {
                        text: "港南区"
                    },
                    {
                        text: "覃塘区"
                    },
                    {
                        text: "平南县"
                    },
                    {
                        text: "桂平市"
                    }
                ]
            },
            {
                text: "玉林",
                items: [
                    {
                        text: "玉州区"
                    },
                    {
                        text: "容县"
                    },
                    {
                        text: "陆川县"
                    },
                    {
                        text: "博白县"
                    },
                    {
                        text: "兴业县"
                    },
                    {
                        text: "北流市"
                    }
                ]
            },
            {
                text: "百色",
                items: [
                    {
                        text: "右江区"
                    },
                    {
                        text: "田阳县"
                    },
                    {
                        text: "田东县"
                    },
                    {
                        text: "平果县"
                    },
                    {
                        text: "德保县"
                    },
                    {
                        text: "靖西县"
                    },
                    {
                        text: "那坡县"
                    },
                    {
                        text: "凌云县"
                    },
                    {
                        text: "乐业县"
                    },
                    {
                        text: "田林县"
                    },
                    {
                        text: "西林县"
                    },
                    {
                        text: "隆林各族自治县"
                    }
                ]
            },
            {
                text: "贺州",
                items: [
                    {
                        text: "八步区"
                    },
                    {
                        text: "昭平县"
                    },
                    {
                        text: "钟山县"
                    },
                    {
                        text: "富川瑶族自治县"
                    }
                ]
            },
            {
                text: "河池",
                items: [
                    {
                        text: "金城江区"
                    },
                    {
                        text: "南丹县"
                    },
                    {
                        text: "天峨县"
                    },
                    {
                        text: "凤山县"
                    },
                    {
                        text: "东兰县"
                    },
                    {
                        text: "罗城仫佬族自治县"
                    },
                    {
                        text: "环江毛南族自治县"
                    },
                    {
                        text: "巴马瑶族自治县"
                    },
                    {
                        text: "都安瑶族自治县"
                    },
                    {
                        text: "大化瑶族自治县"
                    },
                    {
                        text: "宜州市"
                    }
                ]
            },
            {
                text: "来宾",
                items: [
                    {
                        text: "兴宾区"
                    },
                    {
                        text: "忻城县"
                    },
                    {
                        text: "象州县"
                    },
                    {
                        text: "武宣县"
                    },
                    {
                        text: "金秀瑶族自治县"
                    },
                    {
                        text: "合山市"
                    }
                ]
            },
            {
                text: "崇左",
                items: [
                    {
                        text: "江洲区"
                    },
                    {
                        text: "扶绥县"
                    },
                    {
                        text: "宁明县"
                    },
                    {
                        text: "龙州县"
                    },
                    {
                        text: "大新县"
                    },
                    {
                        text: "天等县"
                    },
                    {
                        text: "凭祥市"
                    }
                ]
            }
        ]
    },
    {
        text: "海南",
        items: [
            {
                text: "海口",
                items: [
                    {
                        text: "秀英区"
                    },
                    {
                        text: "龙华区"
                    },
                    {
                        text: "琼山区"
                    },
                    {
                        text: "美兰区"
                    }
                ]
            },
            {
                text: "三亚",
                items: [
                    {
                        text: "三亚市"
                    }
                ]
            },
            {
                text: "五指山",
                items: [
                    {
                        text: "五指山"
                    }
                ]
            },
            {
                text: "琼海",
                items: [
                    {
                        text: "琼海"
                    }
                ]
            },
            {
                text: "儋州",
                items: [
                    {
                        text: "儋州"
                    }
                ]
            },
            {
                text: "文昌",
                items: [
                    {
                        text: "文昌"
                    }
                ]
            },
            {
                text: "万宁",
                items: [
                    {
                        text: "万宁"
                    }
                ]
            },
            {
                text: "东方",
                items: [
                    {
                        text: "东方"
                    }
                ]
            }
        ]
    },

    {
        text: "四川",
        items: [
            {
                text: "成都",
                items: [
                    {
                        text: "锦江区"
                    },
                    {
                        text: "青羊区"
                    },
                    {
                        text: "金牛区"
                    },
                    {
                        text: "武侯区"
                    },
                    {
                        text: "成华区"
                    },
                    {
                        text: "龙泉驿区"
                    },
                    {
                        text: "青白江区"
                    },
                    {
                        text: "新都区"
                    },
                    {
                        text: "温江区"
                    },
                    {
                        text: "金堂县"
                    },
                    {
                        text: "双流县"
                    },
                    {
                        text: "郫县"
                    },
                    {
                        text: "大邑县"
                    },
                    {
                        text: "蒲江县"
                    },
                    {
                        text: "新津县"
                    },
                    {
                        text: "都江堰市"
                    },
                    {
                        text: "彭州市"
                    },
                    {
                        text: "邛崃市"
                    },
                    {
                        text: "崇州市"
                    }
                ]
            },
            {
                text: "自贡",
                items: [
                    {
                        text: "自流井区"
                    },
                    {
                        text: "贡井区"
                    },
                    {
                        text: "大安区"
                    },
                    {
                        text: "沿滩区"
                    },
                    {
                        text: "荣县"
                    },
                    {
                        text: "富顺县"
                    }
                ]
            },
            {
                text: "攀枝花",
                items: [
                    {
                        text: "东区"
                    },
                    {
                        text: "西区"
                    },
                    {
                        text: "仁和区"
                    },
                    {
                        text: "米易县"
                    },
                    {
                        text: "盐边县"
                    }
                ]
            },
            {
                text: "泸州",
                items: [
                    {
                        text: "江阳区"
                    },
                    {
                        text: "纳溪区"
                    },
                    {
                        text: "龙马潭区"
                    },
                    {
                        text: "泸县"
                    },
                    {
                        text: "合江县"
                    },
                    {
                        text: "叙永县"
                    },
                    {
                        text: "古蔺县"
                    }
                ]
            },
            {
                text: "德阳",
                items: [
                    {
                        text: "旌阳区"
                    },
                    {
                        text: "中江县"
                    },
                    {
                        text: "罗江县"
                    },
                    {
                        text: "广汉市"
                    },
                    {
                        text: "什邡市"
                    },
                    {
                        text: "绵竹市"
                    }
                ]
            },
            {
                text: "绵阳",
                items: [
                    {
                        text: "涪城区"
                    },
                    {
                        text: "游仙区"
                    },
                    {
                        text: "三台县"
                    },
                    {
                        text: "盐亭县"
                    },
                    {
                        text: "安县"
                    },
                    {
                        text: "梓潼县"
                    },
                    {
                        text: "北川羌族自治县"
                    },
                    {
                        text: "平武县"
                    },
                    {
                        text: "江油市"
                    }
                ]
            },
            {
                text: "广元",
                items: [
                    {
                        text: "利州区"
                    },
                    {
                        text: "元坝区"
                    },
                    {
                        text: "朝天区"
                    },
                    {
                        text: "旺苍县"
                    },
                    {
                        text: "青川县"
                    },
                    {
                        text: "剑阁县"
                    },
                    {
                        text: "苍溪县"
                    }
                ]
            },
            {
                text: "遂宁",
                items: [
                    {
                        text: "船山区"
                    },
                    {
                        text: ">安居区"
                    },
                    {
                        text: ">蓬溪县"
                    },
                    {
                        text: ">射洪县"
                    },
                    {
                        text: ">大英县"
                    }
                ]
            },
            {
                text: "内江",
                items: [
                    {
                        text: "市中区"
                    },
                    {
                        text: "东兴区"
                    },
                    {
                        text: "威远县"
                    },
                    {
                        text: "资中县"
                    },
                    {
                        text: "隆昌县"
                    }
                ]
            },
            {
                text: "乐山",
                items: [
                    {
                        text: "市中区"
                    },
                    {
                        text: "沙湾区"
                    },
                    {
                        text: "五通桥区"
                    },
                    {
                        text: "金口河区"
                    },
                    {
                        text: "犍为县"
                    },
                    {
                        text: "井研县"
                    },
                    {
                        text: "夹江县"
                    },
                    {
                        text: "沐川县"
                    },
                    {
                        text: "峨边彝族自治县"
                    },
                    {
                        text: "马边彝族自治县"
                    },
                    {
                        text: "峨眉山市"
                    }
                ]
            },
            {
                text: "南充",
                items: [
                    {
                        text: "顺庆区"
                    },
                    {
                        text: "高坪区"
                    },
                    {
                        text: "嘉陵区"
                    },
                    {
                        text: "南部县"
                    },
                    {
                        text: "营山县"
                    },
                    {
                        text: "蓬安县"
                    },
                    {
                        text: "仪陇县"
                    },
                    {
                        text: "西充县"
                    },
                    {
                        text: "阆中市"
                    }
                ]
            },
            {
                text: "眉山",
                items: [
                    {
                        text: "东坡区"
                    },
                    {
                        text: "仁寿县"
                    },
                    {
                        text: "彭山县"
                    },
                    {
                        text: "洪雅县"
                    },
                    {
                        text: "丹棱县"
                    },
                    {
                        text: "青神县"
                    }
                ]
            },
            {
                text: "宜宾",
                items: [
                    {
                        text: "翠屏区"
                    },
                    {
                        text: "宜宾县"
                    },
                    {
                        text: "南溪县"
                    },
                    {
                        text: "江安县"
                    },
                    {
                        text: "长宁县"
                    },
                    {
                        text: "高县"
                    },
                    {
                        text: "珙县"
                    },
                    {
                        text: "筠连县"
                    },
                    {
                        text: "兴文县"
                    },
                    {
                        text: "屏山县"
                    }
                ]
            },
            {
                text: "广安",
                items: [
                    {
                        text: "广安区"
                    },
                    {
                        text: "岳池县"
                    },
                    {
                        text: "武胜县"
                    },
                    {
                        text: "邻水县"
                    },
                    {
                        text: "华蓥市"
                    }
                ]
            },
            {
                text: "达川",
                items: [
                    {
                        text: "通川区"
                    },
                    {
                        text: "达县"
                    },
                    {
                        text: "宣汉县"
                    },
                    {
                        text: "开江县"
                    },
                    {
                        text: "大竹县"
                    },
                    {
                        text: "渠县"
                    },
                    {
                        text: "万源市"
                    }
                ]
            },
            {
                text: "雅安",
                items: [
                    {
                        text: "雨城区"
                    },
                    {
                        text: "名山县"
                    },
                    {
                        text: "荥经县"
                    },
                    {
                        text: "汉源县"
                    },
                    {
                        text: "石棉县"
                    },
                    {
                        text: "天全县"
                    },
                    {
                        text: "芦山县"
                    },
                    {
                        text: "宝兴县"
                    }
                ]
            },
            {
                text: "巴中",
                items: [
                    {
                        text: "巴州区"
                    },
                    {
                        text: "通江县"
                    },
                    {
                        text: "南江县"
                    },
                    {
                        text: "平昌县"
                    }
                ]
            },
            {
                text: "资阳",
                items: [
                    {
                        text: "雁江区"
                    },
                    {
                        text: "安岳县"
                    },
                    {
                        text: "乐至县"
                    },
                    {
                        text: "简阳市"
                    }
                ]
            },
            {
                text: "阿坝",
                items: [
                    {
                        text: "汶川县"
                    },
                    {
                        text: "理县"
                    },
                    {
                        text: "茂县"
                    },
                    {
                        text: "松潘县"
                    },
                    {
                        text: "九寨沟县"
                    },
                    {
                        text: "金川县"
                    },
                    {
                        text: "小金县"
                    },
                    {
                        text: "黑水县"
                    },
                    {
                        text: "马尔康县"
                    },
                    {
                        text: "壤塘县"
                    },
                    {
                        text: "阿坝县"
                    },
                    {
                        text: "若尔盖县"
                    },
                    {
                        text: "红原县"
                    }
                ]
            },
            {
                text: "甘孜",
                items: [
                    {
                        text: "康定县"
                    },
                    {
                        text: "泸定县"
                    },
                    {
                        text: "丹巴县"
                    },
                    {
                        text: "九龙县"
                    },
                    {
                        text: "雅江县"
                    },
                    {
                        text: "道孚县"
                    },
                    {
                        text: "炉霍县"
                    },
                    {
                        text: "甘孜县"
                    },
                    {
                        text: "新龙县"
                    },
                    {
                        text: "德格县"
                    },
                    {
                        text: "白玉县"
                    },
                    {
                        text: "石渠县"
                    },
                    {
                        text: "色达县"
                    },
                    {
                        text: "理塘县"
                    },
                    {
                        text: "巴塘县"
                    },
                    {
                        text: "乡城县"
                    },
                    {
                        text: "稻城县"
                    },
                    {
                        text: "得荣县"
                    }
                ]
            },
            {
                text: "凉山",
                items: [
                    {
                        text: "西昌市"
                    },
                    {
                        text: "木里藏族自治县"
                    },
                    {
                        text: "盐源县"
                    },
                    {
                        text: "德昌县"
                    },
                    {
                        text: "会理县"
                    },
                    {
                        text: "会东县"
                    },
                    {
                        text: "宁南县"
                    },
                    {
                        text: "普格县"
                    },
                    {
                        text: "布拖县"
                    },
                    {
                        text: "金阳县"
                    },
                    {
                        text: "昭觉县"
                    },
                    {
                        text: "喜德县"
                    },
                    {
                        text: "冕宁县"
                    },
                    {
                        text: "越西县"
                    },
                    {
                        text: "甘洛县"
                    },
                    {
                        text: "美姑县"
                    },
                    {
                        text: "雷波县"
                    }
                ]
            }
        ]
    },
    {
        text: "贵州",
        items: [
            {
                text: "贵阳",
                items: [
                    {
                        text: "南明区"
                    },
                    {
                        text: "云岩区"
                    },
                    {
                        text: "花溪区"
                    },
                    {
                        text: "乌当区"
                    },
                    {
                        text: "白云区"
                    },
                    {
                        text: "小河区"
                    },
                    {
                        text: "开阳县"
                    },
                    {
                        text: "息烽县"
                    },
                    {
                        text: "修文县"
                    },
                    {
                        text: "清镇市"
                    }
                ]
            },
            {
                text: "六盘水",
                items: [
                    {
                        text: "钟山区"
                    },
                    {
                        text: "六枝特区"
                    },
                    {
                        text: "水城县"
                    },
                    {
                        text: "盘县"
                    }
                ]
            },
            {
                text: "遵义",
                items: [
                    {
                        text: "红花岗区"
                    },
                    {
                        text: "汇川区"
                    },
                    {
                        text: "遵义县"
                    },
                    {
                        text: "桐梓县"
                    },
                    {
                        text: "绥阳县"
                    },
                    {
                        text: "正安县"
                    },
                    {
                        text: "道真仡佬族苗族自治县"
                    },
                    {
                        text: "务川仡佬族苗族自治县"
                    },
                    {
                        text: "凤冈县"
                    },
                    {
                        text: "湄潭县"
                    },
                    {
                        text: "余庆县"
                    },
                    {
                        text: "习水县"
                    },
                    {
                        text: "赤水市"
                    },
                    {
                        text: "仁怀市"
                    }
                ]
            },
            {
                text: "安顺",
                items: [
                    {
                        text: "西秀区"
                    },
                    {
                        text: "平坝县"
                    },
                    {
                        text: "普定县"
                    },
                    {
                        text: "镇宁布依族苗族自治县"
                    },
                    {
                        text: "关岭布依族苗族自治县"
                    },
                    {
                        text: "紫云苗族布依族自治县"
                    }
                ]
            },
            {
                text: "铜仁",
                items: [
                    {
                        text: "铜仁市"
                    },
                    {
                        text: "江口县"
                    },
                    {
                        text: "玉屏侗族自治县"
                    },
                    {
                        text: "石阡县"
                    },
                    {
                        text: "思南县"
                    },
                    {
                        text: "印江土家族苗族自治县"
                    },
                    {
                        text: "德江县"
                    },
                    {
                        text: "沿河土家族自治县"
                    },
                    {
                        text: "松桃苗族自治县"
                    },
                    {
                        text: "万山特区"
                    }
                ]
            },
            {
                text: "黔西南",
                items: [
                    {
                        text: "兴义市"
                    },
                    {
                        text: "兴仁县"
                    },
                    {
                        text: "普安县"
                    },
                    {
                        text: "晴隆县"
                    },
                    {
                        text: "贞丰县"
                    },
                    {
                        text: "望谟县"
                    },
                    {
                        text: "册亨县"
                    },
                    {
                        text: "安龙县"
                    }
                ]
            },
            {
                text: "毕节",
                items: [
                    {
                        text: "毕节市"
                    },
                    {
                        text: "大方县"
                    },
                    {
                        text: "黔西县"
                    },
                    {
                        text: "金沙县"
                    },
                    {
                        text: "织金县"
                    },
                    {
                        text: "纳雍县"
                    },
                    {
                        text: "威宁彝族回族苗族自治县"
                    },
                    {
                        text: "赫章县"
                    }
                ]
            },
            {
                text: "黔东南",
                items: [
                    {
                        text: "凯里市"
                    },
                    {
                        text: "黄平县"
                    },
                    {
                        text: "施秉县"
                    },
                    {
                        text: "三穗县"
                    },
                    {
                        text: "镇远县"
                    },
                    {
                        text: "岑巩县"
                    },
                    {
                        text: "天柱县"
                    },
                    {
                        text: "锦屏县"
                    },
                    {
                        text: "剑河县"
                    },
                    {
                        text: "台江县"
                    },
                    {
                        text: "黎平县"
                    },
                    {
                        text: "榕江县"
                    },
                    {
                        text: "从江县"
                    },
                    {
                        text: "雷山县"
                    },
                    {
                        text: "麻江县"
                    },
                    {
                        text: "丹寨县"
                    }
                ]
            },
            {
                text: "黔南",
                items: [
                    {
                        text: "都匀市"
                    },
                    {
                        text: "福泉市"
                    },
                    {
                        text: "荔波县"
                    },
                    {
                        text: "贵定县"
                    },
                    {
                        text: "瓮安县"
                    },
                    {
                        text: "独山县"
                    },
                    {
                        text: "平塘县"
                    },
                    {
                        text: "罗甸县"
                    },
                    {
                        text: "长顺县"
                    },
                    {
                        text: "龙里县"
                    },
                    {
                        text: "惠水县"
                    },
                    {
                        text: "三都水族自治县"
                    }
                ]
            }
        ]
    },
    {
        text: "云南",
        items: [
            {
                text: "昆明",
                items: [
                    {
                        text: "五华区"
                    },
                    {
                        text: "盘龙区"
                    },
                    {
                        text: "官渡区"
                    },
                    {
                        text: "西山区"
                    },
                    {
                        text: "东川区"
                    },
                    {
                        text: "呈贡县"
                    },
                    {
                        text: "晋宁县"
                    },
                    {
                        text: "富民县"
                    },
                    {
                        text: "宜良县"
                    },
                    {
                        text: "石林彝族自治县"
                    },
                    {
                        text: "嵩明县"
                    },
                    {
                        text: "禄劝彝族苗族自治县"
                    },
                    {
                        text: "寻甸回族彝族自治县"
                    },
                    {
                        text: "安宁市"
                    }
                ]
            },
            {
                text: "曲靖",
                items: [
                    {
                        text: "麒麟区"
                    },
                    {
                        text: "马龙县"
                    },
                    {
                        text: "陆良县"
                    },
                    {
                        text: "师宗县"
                    },
                    {
                        text: "罗平县"
                    },
                    {
                        text: "富源县"
                    },
                    {
                        text: "会泽县"
                    },
                    {
                        text: "沾益县"
                    },
                    {
                        text: "宣威市"
                    }
                ]
            },
            {
                text: "玉溪",
                items: [
                    {
                        text: "红塔区"
                    },
                    {
                        text: "江川县"
                    },
                    {
                        text: "澄江县"
                    },
                    {
                        text: "通海县"
                    },
                    {
                        text: "华宁县"
                    },
                    {
                        text: "易门县"
                    },
                    {
                        text: "峨山彝族自治县"
                    },
                    {
                        text: "新平彝族傣族自治县"
                    },
                    {
                        text: "元江哈尼族彝族傣族自治县"
                    }
                ]
            },
            {
                text: "保山",
                items: [
                    {
                        text: "隆阳区"
                    },
                    {
                        text: "施甸县"
                    },
                    {
                        text: "腾冲县"
                    },
                    {
                        text: "龙陵县"
                    },
                    {
                        text: "昌宁县"
                    }
                ]
            },
            {
                text: "昭通",
                items: [
                    {
                        text: "昭阳区"
                    },
                    {
                        text: "鲁甸县"
                    },
                    {
                        text: "巧家县"
                    },
                    {
                        text: "盐津县"
                    },
                    {
                        text: "大关县"
                    },
                    {
                        text: "永善县"
                    },
                    {
                        text: "绥江县"
                    },
                    {
                        text: "镇雄县"
                    },
                    {
                        text: "彝良县"
                    },
                    {
                        text: "威信县"
                    },
                    {
                        text: "水富县"
                    }
                ]
            },
            {
                text: "丽江",
                items: [
                    {
                        text: "古城区"
                    },
                    {
                        text: "玉龙纳西族自治县"
                    },
                    {
                        text: "永胜县"
                    },
                    {
                        text: "华坪县"
                    },
                    {
                        text: "宁蒗彝族自治县"
                    }
                ]
            },
            {
                text: "普洱",
                items: [
                    {
                        text: "思茅区"
                    },
                    {
                        text: "宁洱镇"
                    },
                    {
                        text: "墨江哈尼族自治县"
                    },
                    {
                        text: "景东彝族自治县"
                    },
                    {
                        text: "景谷傣族彝族自治县"
                    },
                    {
                        text: "镇沅彝族哈尼族拉祜族自治县"
                    },
                    {
                        text: "江城哈尼族彝族自治县"
                    },
                    {
                        text: "孟连傣族拉祜族佤族自治县"
                    },
                    {
                        text: "澜沧拉祜族自治县"
                    },
                    {
                        text: "西盟佤族自治县"
                    }
                ]
            },
            {
                text: "临沧",
                items: [
                    {
                        text: "临翔区"
                    },
                    {
                        text: "凤庆县"
                    },
                    {
                        text: "云县"
                    },
                    {
                        text: "永德县"
                    },
                    {
                        text: "镇康县"
                    },
                    {
                        text: "双江拉祜族佤族布朗族傣族自治县"
                    },
                    {
                        text: "耿马傣族佤族自治县"
                    },
                    {
                        text: "沧源佤族自治县"
                    }
                ]
            },
            {
                text: "楚雄",
                items: [
                    {
                        text: "楚雄市"
                    },
                    {
                        text: "双柏县"
                    },
                    {
                        text: "牟定县"
                    },
                    {
                        text: "南华县"
                    },
                    {
                        text: "姚安县"
                    },
                    {
                        text: "大姚县"
                    },
                    {
                        text: "永仁县"
                    },
                    {
                        text: "元谋县"
                    },
                    {
                        text: "武定县"
                    },
                    {
                        text: "禄丰县"
                    }
                ]
            },
            {
                text: "红河",
                items: [
                    {
                        text: "个旧市"
                    },
                    {
                        text: "开远市"
                    },
                    {
                        text: "蒙自县"
                    },
                    {
                        text: "屏边苗族自治县"
                    },
                    {
                        text: "建水县"
                    },
                    {
                        text: "石屏县"
                    },
                    {
                        text: "弥勒县"
                    },
                    {
                        text: "泸西县"
                    },
                    {
                        text: "元阳县"
                    },
                    {
                        text: "红河县"
                    },
                    {
                        text: "金平苗族瑶族傣族自治县"
                    },
                    {
                        text: "绿春县"
                    },
                    {
                        text: "河口瑶族自治县"
                    }
                ]
            },
            {
                text: "文山",
                items: [
                    {
                        text: "文山县"
                    },
                    {
                        text: "砚山县"
                    },
                    {
                        text: "西畴县"
                    },
                    {
                        text: "麻栗坡县"
                    },
                    {
                        text: "马关县"
                    },
                    {
                        text: "丘北县"
                    },
                    {
                        text: "广南县"
                    },
                    {
                        text: "富宁县"
                    }
                ]
            },
            {
                text: "西双版纳",
                items: [
                    {
                        text: "景洪市"
                    },
                    {
                        text: "勐海县"
                    },
                    {
                        text: "勐腊县"
                    }
                ]
            },
            {
                text: "大理",
                items: [
                    {
                        text: "大理市"
                    },
                    {
                        text: "漾濞彝族自治县"
                    },
                    {
                        text: "祥云县"
                    },
                    {
                        text: "宾川县"
                    },
                    {
                        text: "弥渡县"
                    },
                    {
                        text: "南涧彝族自治县"
                    },
                    {
                        text: "巍山彝族回族自治县"
                    },
                    {
                        text: "永平县"
                    },
                    {
                        text: "云龙县"
                    },
                    {
                        text: "洱源县"
                    },
                    {
                        text: "剑川县"
                    },
                    {
                        text: "鹤庆县"
                    }
                ]
            },
            {
                text: "德宏",
                items: [
                    {
                        text: "瑞丽市"
                    },
                    {
                        text: "潞西市"
                    },
                    {
                        text: "梁河县"
                    },
                    {
                        text: "盈江县"
                    },
                    {
                        text: "陇川县"
                    }
                ]
            },
            {
                text: "怒江傈",
                items: [
                    {
                        text: "泸水县"
                    },
                    {
                        text: "福贡县"
                    },
                    {
                        text: "贡山独龙族怒族自治县"
                    },
                    {
                        text: "兰坪白族普米族自治县"
                    }
                ]
            },
            {
                text: "迪庆",
                items: [
                    {
                        text: "香格里拉县"
                    },
                    {
                        text: "德钦县"
                    },
                    {
                        text: "维西傈僳族自治县"
                    }
                ]
            }
        ]
    },
    {
        text: "西藏",
        items: [
            {
                text: "拉萨",
                items: [
                    {
                        text: "城关区"
                    },
                    {
                        text: "林周县"
                    },
                    {
                        text: "当雄县"
                    },
                    {
                        text: "尼木县"
                    },
                    {
                        text: "曲水县"
                    },
                    {
                        text: "堆龙德庆县"
                    },
                    {
                        text: "达孜县"
                    },
                    {
                        text: "墨竹工卡县"
                    }
                ]
            },
            {
                text: "昌都",
                items: [
                    {
                        text: "昌都县"
                    },
                    {
                        text: "江达县"
                    },
                    {
                        text: "贡觉县"
                    },
                    {
                        text: "类乌齐县"
                    },
                    {
                        text: "丁青县"
                    },
                    {
                        text: "察雅县"
                    },
                    {
                        text: "八宿县"
                    },
                    {
                        text: "左贡县"
                    },
                    {
                        text: "芒康县"
                    },
                    {
                        text: "洛隆县"
                    },
                    {
                        text: "边坝县"
                    }
                ]
            },
            {
                text: "山南",
                items: [
                    {
                        text: "乃东县"
                    },
                    {
                        text: "扎囊县"
                    },
                    {
                        text: "贡嘎县"
                    },
                    {
                        text: "桑日县"
                    },
                    {
                        text: "琼结县"
                    },
                    {
                        text: "曲松县"
                    },
                    {
                        text: "措美县"
                    },
                    {
                        text: "洛扎县"
                    },
                    {
                        text: "加查县"
                    },
                    {
                        text: "隆子县"
                    },
                    {
                        text: "错那县"
                    },
                    {
                        text: "浪卡子县"
                    }
                ]
            },
            {
                text: "日喀则",
                items: [
                    {
                        text: "日喀则市"
                    },
                    {
                        text: "南木林县"
                    },
                    {
                        text: "江孜县"
                    },
                    {
                        text: "定日县"
                    },
                    {
                        text: "萨迦县"
                    },
                    {
                        text: "拉孜县"
                    },
                    {
                        text: "昂仁县"
                    },
                    {
                        text: "谢通门县"
                    },
                    {
                        text: "白朗县"
                    },
                    {
                        text: "仁布县"
                    },
                    {
                        text: "康马县"
                    },
                    {
                        text: "定结县"
                    },
                    {
                        text: "仲巴县"
                    },
                    {
                        text: "亚东县"
                    },
                    {
                        text: "吉隆县"
                    },
                    {
                        text: "聂拉木县"
                    },
                    {
                        text: "萨嘎县"
                    },
                    {
                        text: "岗巴县"
                    }
                ]
            },
            {
                text: "那曲",
                items: [
                    {
                        text: "那曲县"
                    },
                    {
                        text: "嘉黎县"
                    },
                    {
                        text: "比如县"
                    },
                    {
                        text: "聂荣县"
                    },
                    {
                        text: "安多县"
                    },
                    {
                        text: "申扎县"
                    },
                    {
                        text: "索县"
                    },
                    {
                        text: "班戈县"
                    },
                    {
                        text: "巴青县"
                    },
                    {
                        text: "尼玛县"
                    }
                ]
            },
            {
                text: "阿里",
                items: [
                    {
                        text: "普兰县"
                    },
                    {
                        text: "札达县"
                    },
                    {
                        text: "噶尔县"
                    },
                    {
                        text: "日土县"
                    },
                    {
                        text: "革吉县"
                    },
                    {
                        text: "改则县"
                    },
                    {
                        text: "措勤县"
                    }
                ]
            },
            {
                text: "林芝",
                items: [
                    {
                        text: "林芝县"
                    },
                    {
                        text: "工布江达县"
                    },
                    {
                        text: "米林县"
                    },
                    {
                        text: "墨脱县"
                    },
                    {
                        text: "波密县"
                    },
                    {
                        text: "察隅县"
                    },
                    {
                        text: "朗县"
                    }
                ]
            }
        ]
    },
    {
        text: "陕西",
        items: [
            {
                text: "西安",
                items: [
                    {
                        text: "新城区"
                    },
                    {
                        text: "碑林区"
                    },
                    {
                        text: "莲湖区"
                    },
                    {
                        text: "灞桥区"
                    },
                    {
                        text: "未央区"
                    },
                    {
                        text: "雁塔区"
                    },
                    {
                        text: "阎良区"
                    },
                    {
                        text: "临潼区"
                    },
                    {
                        text: "长安区"
                    },
                    {
                        text: "蓝田县"
                    },
                    {
                        text: "周至县"
                    },
                    {
                        text: "户县"
                    },
                    {
                        text: "高陵县"
                    }
                ]
            },
            {
                text: "铜川",
                items: [
                    {
                        text: "王益区"
                    },
                    {
                        text: "印台区"
                    },
                    {
                        text: "耀州区"
                    },
                    {
                        text: "宜君县"
                    }
                ]
            },
            {
                text: "宝鸡",
                items: [
                    {
                        text: "渭滨区"
                    },
                    {
                        text: "金台区"
                    },
                    {
                        text: "陈仓区"
                    },
                    {
                        text: "凤翔县"
                    },
                    {
                        text: "岐山县"
                    },
                    {
                        text: "扶风县"
                    },
                    {
                        text: "眉县"
                    },
                    {
                        text: "陇县"
                    },
                    {
                        text: "千阳县"
                    },
                    {
                        text: "麟游县"
                    },
                    {
                        text: "凤县"
                    },
                    {
                        text: "太白县"
                    }
                ]
            },
            {
                text: "咸阳",
                items: [
                    {
                        text: "秦都区"
                    },
                    {
                        text: "杨凌区"
                    },
                    {
                        text: "渭城区"
                    },
                    {
                        text: "三原县"
                    },
                    {
                        text: "泾阳县"
                    },
                    {
                        text: "乾县"
                    },
                    {
                        text: "礼泉县"
                    },
                    {
                        text: "永寿县"
                    },
                    {
                        text: "彬县"
                    },
                    {
                        text: "长武县"
                    },
                    {
                        text: "旬邑县"
                    },
                    {
                        text: "淳化县"
                    },
                    {
                        text: "武功县"
                    },
                    {
                        text: "兴平市"
                    }
                ]
            },
            {
                text: "渭南",
                items: [
                    {
                        text: "临渭区"
                    },
                    {
                        text: "华县"
                    },
                    {
                        text: "潼关县"
                    },
                    {
                        text: "大荔县"
                    },
                    {
                        text: "合阳县"
                    },
                    {
                        text: "澄城县"
                    },
                    {
                        text: "蒲城县"
                    },
                    {
                        text: "白水县"
                    },
                    {
                        text: "富平县"
                    },
                    {
                        text: "韩城市"
                    },
                    {
                        text: "华阴市"
                    }
                ]
            },
            {
                text: "延安",
                items: [
                    {
                        text: "宝塔区"
                    },
                    {
                        text: "延长县"
                    },
                    {
                        text: "延川县"
                    },
                    {
                        text: "子长县"
                    },
                    {
                        text: "安塞县"
                    },
                    {
                        text: "志丹县"
                    },
                    {
                        text: "吴起县"
                    },
                    {
                        text: "甘泉县"
                    },
                    {
                        text: "富县"
                    },
                    {
                        text: "洛川县"
                    },
                    {
                        text: "宜川县"
                    },
                    {
                        text: "黄龙县"
                    },
                    {
                        text: "黄陵县"
                    }
                ]
            },
            {
                text: "汉中",
                items: [
                    {
                        text: "汉台区"
                    },
                    {
                        text: "南郑县"
                    },
                    {
                        text: "城固县"
                    },
                    {
                        text: "洋县"
                    },
                    {
                        text: "西乡县"
                    },
                    {
                        text: "勉县"
                    },
                    {
                        text: "宁强县"
                    },
                    {
                        text: "略阳县"
                    },
                    {
                        text: "镇巴县"
                    },
                    {
                        text: "留坝县"
                    },
                    {
                        text: "佛坪县"
                    }
                ]
            },
            {
                text: "榆林",
                items: [
                    {
                        text: "榆阳区"
                    },
                    {
                        text: "神木县"
                    },
                    {
                        text: "府谷县"
                    },
                    {
                        text: "横山县"
                    },
                    {
                        text: "靖边县"
                    },
                    {
                        text: "定边县"
                    },
                    {
                        text: "绥德县"
                    },
                    {
                        text: "米脂县"
                    },
                    {
                        text: "佳县"
                    },
                    {
                        text: "吴堡县"
                    },
                    {
                        text: "清涧县"
                    },
                    {
                        text: "子洲县"
                    }
                ]
            },
            {
                text: "安康",
                items: [
                    {
                        text: "汉滨区"
                    },
                    {
                        text: "汉阴县"
                    },
                    {
                        text: "石泉县"
                    },
                    {
                        text: "宁陕县"
                    },
                    {
                        text: "紫阳县"
                    },
                    {
                        text: "岚皋县"
                    },
                    {
                        text: "平利县"
                    },
                    {
                        text: "镇坪县"
                    },
                    {
                        text: "旬阳县"
                    },
                    {
                        text: "白河县"
                    }
                ]
            },
            {
                text: "商洛",
                items: [
                    {
                        text: "商州区"
                    },
                    {
                        text: "洛南县"
                    },
                    {
                        text: "丹凤县"
                    },
                    {
                        text: "商南县"
                    },
                    {
                        text: "山阳县"
                    },
                    {
                        text: "镇安县"
                    },
                    {
                        text: "柞水县"
                    }
                ]
            }
        ]
    },
    {
        text: "甘肃",
        items: [
            {
                text: "兰州",
                items: [
                    {
                        text: "区(县)"
                    },
                    {
                        text: "城关区"
                    },
                    {
                        text: "七里河区"
                    },
                    {
                        text: "西固区"
                    },
                    {
                        text: "安宁区"
                    },
                    {
                        text: "红古区"
                    },
                    {
                        text: "永登县"
                    },
                    {
                        text: "皋兰县"
                    },
                    {
                        text: "榆中县"
                    }
                ]
            },
            {
                text: "嘉峪关",
                items: [
                    {
                        text: "嘉峪关市"
                    }
                ]
            },
            {
                text: "金昌",
                items: [
                    {
                        text: "金川区"
                    },
                    {
                        text: "永昌县"
                    }
                ]
            },
            {
                text: "白银",
                items: [
                    {
                        text: "白银区"
                    },
                    {
                        text: "平川区"
                    },
                    {
                        text: "靖远县"
                    },
                    {
                        text: "会宁县"
                    },
                    {
                        text: "景泰县"
                    }
                ]
            },
            {
                text: "天水",
                items: [
                    {
                        text: "秦城区"
                    },
                    {
                        text: "麦积区"
                    },
                    {
                        text: "清水县"
                    },
                    {
                        text: "秦安县"
                    },
                    {
                        text: "甘谷县"
                    },
                    {
                        text: "武山县"
                    },
                    {
                        text: "张家川回族自治县"
                    }
                ]
            },
            {
                text: "武威",
                items: [
                    {
                        text: "凉州区"
                    },
                    {
                        text: "民勤县"
                    },
                    {
                        text: "古浪县"
                    },
                    {
                        text: "天祝藏族自治县"
                    }
                ]
            },
            {
                text: "张掖",
                items: [
                    {
                        text: "甘州区"
                    },
                    {
                        text: "肃南裕固族自治县"
                    },
                    {
                        text: "民乐县"
                    },
                    {
                        text: "临泽县"
                    },
                    {
                        text: "高台县"
                    },
                    {
                        text: "山丹县"
                    }
                ]
            },
            {
                text: "平凉",
                items: [
                    {
                        text: "崆峒区"
                    },
                    {
                        text: "泾川县"
                    },
                    {
                        text: "灵台县"
                    },
                    {
                        text: "崇信县"
                    },
                    {
                        text: "华亭县"
                    },
                    {
                        text: "庄浪县"
                    },
                    {
                        text: "静宁县"
                    }
                ]
            },
            {
                text: "酒泉",
                items: [
                    {
                        text: "肃州区"
                    },
                    {
                        text: "金塔县"
                    },
                    {
                        text: "瓜州县"
                    },
                    {
                        text: "肃北蒙古族自治县"
                    },
                    {
                        text: "阿克塞哈萨克族自治县"
                    },
                    {
                        text: "玉门市"
                    },
                    {
                        text: "敦煌市"
                    }
                ]
            },
            {
                text: "庆阳",
                items: [
                    {
                        text: "西峰区"
                    },
                    {
                        text: "庆城县"
                    },
                    {
                        text: "环县"
                    },
                    {
                        text: "华池县"
                    },
                    {
                        text: "合水县"
                    },
                    {
                        text: "正宁县"
                    },
                    {
                        text: "宁县"
                    },
                    {
                        text: "镇原县"
                    }
                ]
            },
            {
                text: "定西",
                items: [
                    {
                        text: "安定区"
                    },
                    {
                        text: "通渭县"
                    },
                    {
                        text: "陇西县"
                    },
                    {
                        text: "渭源县"
                    },
                    {
                        text: "临洮县"
                    },
                    {
                        text: "漳县"
                    },
                    {
                        text: "岷县"
                    }
                ]
            },
            {
                text: "陇南",
                items: [
                    {
                        text: "武都区"
                    },
                    {
                        text: "成县"
                    },
                    {
                        text: "文县"
                    },
                    {
                        text: "宕昌县"
                    },
                    {
                        text: "康县"
                    },
                    {
                        text: "西和县"
                    },
                    {
                        text: "礼县"
                    },
                    {
                        text: "徽县"
                    },
                    {
                        text: "两当县"
                    }
                ]
            },
            {
                text: "临夏",
                items: [
                    {
                        text: "临夏市"
                    },
                    {
                        text: "临夏县"
                    },
                    {
                        text: "康乐县"
                    },
                    {
                        text: "永靖县"
                    },
                    {
                        text: "广河县"
                    },
                    {
                        text: "和政县"
                    },
                    {
                        text: "东乡族自治县"
                    },
                    {
                        text: "积石山保安族东乡族撒拉族自治县"
                    }
                ]
            },
            {
                text: "甘南",
                items: [
                    {
                        text: "合作市"
                    },
                    {
                        text: "临潭县"
                    },
                    {
                        text: "卓尼县"
                    },
                    {
                        text: "舟曲县"
                    },
                    {
                        text: "迭部县"
                    },
                    {
                        text: "玛曲县"
                    },
                    {
                        text: "碌曲县"
                    },
                    {
                        text: "夏河县"
                    }
                ]
            }
        ]
    },
    {
        text: "青海",
        items: [
            {
                text: "西宁",
                items: [
                    {
                        text: "城东区"
                    },
                    {
                        text: "城中区"
                    },
                    {
                        text: "城西区"
                    },
                    {
                        text: "城北区"
                    },
                    {
                        text: "大通回族土族自治县"
                    },
                    {
                        text: "湟中县"
                    },
                    {
                        text: "湟源县"
                    }
                ]
            },
            {
                text: "海东",
                items: [
                    {
                        text: "平安县"
                    },
                    {
                        text: "民和回族土族自治县"
                    },
                    {
                        text: "乐都县"
                    },
                    {
                        text: "互助土族自治县"
                    },
                    {
                        text: "化隆回族自治县"
                    },
                    {
                        text: "循化撒拉族自治县"
                    }
                ]
            },
            {
                text: "海北",
                items: [
                    {
                        text: "门源回族自治县"
                    },
                    {
                        text: "祁连县"
                    },
                    {
                        text: "海晏县"
                    },
                    {
                        text: "刚察县"
                    }
                ]
            },
            {
                text: "黄南",
                items: [
                    {
                        text: "同仁县"
                    },
                    {
                        text: "尖扎县"
                    },
                    {
                        text: "泽库县"
                    },
                    {
                        text: "河南蒙古族自治县"
                    }
                ]
            },
            {
                text: "海南",
                items: [
                    {
                        text: "共和县"
                    },
                    {
                        text: "同德县"
                    },
                    {
                        text: "贵德县"
                    },
                    {
                        text: "兴海县"
                    },
                    {
                        text: "贵南县"
                    }
                ]
            },
            {
                text: "果洛",
                items: [
                    {
                        text: "玛沁县"
                    },
                    {
                        text: "班玛县"
                    },
                    {
                        text: "甘德县"
                    },
                    {
                        text: "达日县"
                    },
                    {
                        text: "久治县"
                    },
                    {
                        text: "玛多县"
                    }
                ]
            },
            {
                text: "玉树",
                items: [
                    {
                        text: "玉树县"
                    },
                    {
                        text: "杂多县"
                    },
                    {
                        text: "称多县"
                    },
                    {
                        text: "治多县"
                    },
                    {
                        text: "囊谦县"
                    },
                    {
                        text: "曲麻莱县"
                    }
                ]
            },
            {
                text: "梅西",
                items: [
                    {
                        text: "格尔木市"
                    },
                    {
                        text: "德令哈市"
                    },
                    {
                        text: "乌兰县"
                    },
                    {
                        text: "都兰县"
                    },
                    {
                        text: "天峻县"
                    }
                ]
            }
        ]
    },
    {
        text: "宁夏",
        items: [
            {
                text: "银川",
                items: [
                    {
                        text: "兴庆区"
                    },
                    {
                        text: "西夏区"
                    },
                    {
                        text: "金凤区"
                    },
                    {
                        text: "永宁县"
                    },
                    {
                        text: "贺兰县"
                    },
                    {
                        text: "灵武市"
                    }
                ]
            },
            {
                text: "石嘴山",
                items: [
                    {
                        text: "大武口区"
                    },
                    {
                        text: "惠农区"
                    },
                    {
                        text: "平罗县"
                    }
                ]
            },
            {
                text: "吴忠",
                items: [
                    {
                        text: "利通区"
                    },
                    {
                        text: "红寺堡区"
                    },
                    {
                        text: "盐池县"
                    },
                    {
                        text: "同心县"
                    },
                    {
                        text: "青铜峡市"
                    }
                ]
            },
            {
                text: "固原",
                items: [
                    {
                        text: "原州区"
                    },
                    {
                        text: "西吉县"
                    },
                    {
                        text: "隆德县"
                    },
                    {
                        text: "泾源县"
                    },
                    {
                        text: "彭阳县"
                    }
                ]
            },
            {
                text: "中卫",
                items: [
                    {
                        text: "沙坡头区"
                    },
                    {
                        text: "中宁县"
                    },
                    {
                        text: "海原县"
                    }
                ]
            }
        ]
    },
    {
        text: "新疆",
        items: [
            {
                text: "乌鲁木齐",
                items: [
                    {
                        text: "天山区"
                    },
                    {
                        text: "沙依巴克区"
                    },
                    {
                        text: "新市区"
                    },
                    {
                        text: "水磨沟区"
                    },
                    {
                        text: "头屯河区"
                    },
                    {
                        text: "达坂城区"
                    },
                    {
                        text: "米东区"
                    },
                    {
                        text: "乌鲁木齐县"
                    }
                ]
            },
            {
                text: "克拉玛依",
                items: [
                    {
                        text: "独山子区"
                    },
                    {
                        text: "克拉玛依区"
                    },
                    {
                        text: "白碱滩区"
                    },
                    {
                        text: "乌尔禾区"
                    }
                ]
            },
            {
                text: "吐鲁番",
                items: [
                    {
                        text: "吐鲁番市"
                    },
                    {
                        text: "鄯善县"
                    },
                    {
                        text: "托克逊县"
                    }
                ]
            },
            {
                text: "哈密",
                items: [
                    {
                        text: "哈密市"
                    },
                    {
                        text: "巴里坤哈萨克自治县"
                    },
                    {
                        text: "伊吾县"
                    }
                ]
            },
            {
                text: "昌吉",
                items: [
                    {
                        text: "昌吉市"
                    },
                    {
                        text: "阜康市"
                    },
                    {
                        text: "呼图壁县"
                    },
                    {
                        text: "玛纳斯县"
                    },
                    {
                        text: "奇台县"
                    },
                    {
                        text: "吉木萨尔县"
                    },
                    {
                        text: "木垒哈萨克自治县"
                    }
                ]
            },
            {
                text: "博尔塔拉",
                items: [
                    {
                        text: "博乐市"
                    },
                    {
                        text: "精河县"
                    },
                    {
                        text: "温泉县"
                    }
                ]
            },
            {
                text: "巴音郭楞",
                items: [
                    {
                        text: "库尔勒市"
                    },
                    {
                        text: "轮台县"
                    },
                    {
                        text: "尉犁县"
                    },
                    {
                        text: "若羌县"
                    },
                    {
                        text: "且末县"
                    },
                    {
                        text: "焉耆回族自治县"
                    },
                    {
                        text: "和静县"
                    },
                    {
                        text: "和硕县"
                    },
                    {
                        text: "博湖县"
                    }
                ]
            },
            {
                text: "阿克苏",
                items: [
                    {
                        text: "阿克苏市"
                    },
                    {
                        text: "温宿县"
                    },
                    {
                        text: "库车县"
                    },
                    {
                        text: "沙雅县"
                    },
                    {
                        text: "新和县"
                    },
                    {
                        text: "拜城县"
                    },
                    {
                        text: "乌什县"
                    },
                    {
                        text: "阿瓦提县"
                    },
                    {
                        text: "柯坪县"
                    }
                ]
            },
            {
                text: "克孜勒苏",
                items: [
                    {
                        text: "阿图什市"
                    },
                    {
                        text: "阿克陶县"
                    },
                    {
                        text: "阿合奇县"
                    },
                    {
                        text: "乌恰县"
                    }
                ]
            },
            {
                text: "喀什",
                items: [
                    {
                        text: "喀什市"
                    },
                    {
                        text: "疏附县"
                    },
                    {
                        text: "疏勒县"
                    },
                    {
                        text: "英吉沙县"
                    },
                    {
                        text: "泽普县"
                    },
                    {
                        text: "莎车县"
                    },
                    {
                        text: "叶城县"
                    },
                    {
                        text: "麦盖提县"
                    },
                    {
                        text: "岳普湖县"
                    },
                    {
                        text: "伽师县"
                    },
                    {
                        text: "巴楚县"
                    },
                    {
                        text: "塔什库尔干县塔吉克自治"
                    }
                ]
            },
            {
                text: "和田",
                items: [
                    {
                        text: "和田市"
                    },
                    {
                        text: "和田县"
                    },
                    {
                        text: "墨玉县"
                    },
                    {
                        text: "皮山县"
                    },
                    {
                        text: "洛浦县"
                    },
                    {
                        text: "策勒县"
                    },
                    {
                        text: "于田县"
                    },
                    {
                        text: "民丰县"
                    }
                ]
            },
            {
                text: "伊犁",
                items: [
                    {
                        text: "伊宁市"
                    },
                    {
                        text: "奎屯市"
                    },
                    {
                        text: "伊宁县"
                    },
                    {
                        text: "察布查尔锡伯自治县"
                    },
                    {
                        text: "霍城县"
                    },
                    {
                        text: "巩留县"
                    },
                    {
                        text: "新源县"
                    },
                    {
                        text: "昭苏县"
                    },
                    {
                        text: "特克斯县"
                    },
                    {
                        text: "尼勒克县"
                    }
                ]
            },
            {
                text: "塔城",
                items: [
                    {
                        text: "塔城市"
                    },
                    {
                        text: "乌苏市"
                    },
                    {
                        text: "额敏县"
                    },
                    {
                        text: "沙湾县"
                    },
                    {
                        text: "托里县"
                    },
                    {
                        text: "裕民县"
                    },
                    {
                        text: "和布克赛尔蒙古自治县"
                    }
                ]
            },
            {
                text: "阿勒泰",
                items: [
                    {
                        text: "阿勒泰市"
                    },
                    {
                        text: "布尔津县"
                    },
                    {
                        text: "富蕴县"
                    },
                    {
                        text: "福海县"
                    },
                    {
                        text: "哈巴河县"
                    },
                    {
                        text: "青河县"
                    },
                    {
                        text: "吉木乃县"
                    }
                ]
            },
            {
                text: "石河子",
                items: [
                    {
                        text: "石河子"
                    }
                ]
            },
            {
                text: "阿拉尔",
                items: [
                    {
                        text: "阿拉尔"
                    }
                ]
            },
            {
                text: "图木舒克",
                items: [
                    {
                        text: "图木舒克"
                    }
                ]
            },
            {
                text: "五家渠",
                items: [
                    {
                        text: "五家渠"
                    }
                ]
            }
        ]
    },
    {
        text: "台湾",
        items: [
            {
                text: "台北市"
            },
            {
                text: "高雄市"
            },
            {
                text: "基隆市"
            },
            {
                text: "台中市"
            },
            {
                text: "台南市"
            },
            {
                text: "新竹市"
            },
            {
                text: "嘉义市"
            },
            {
                text: "台北县"
            },
            {
                text: "宜兰县"
            },
            {
                text: "新竹县"
            },
            {
                text: "桃园县"
            },
            {
                text: "苗栗县"
            },
            {
                text: "台中县"
            },
            {
                text: "彰化县"
            },
            {
                text: "南投县"
            },
            {
                text: "嘉义县"
            },
            {
                text: "云林县"
            },
            {
                text: "台南县"
            },
            {
                text: "高雄县"
            },
            {
                text: "屏东县"
            },
            {
                text: "台东县"
            },
            {
                text: "花莲县"
            },
            {
                text: "澎湖县"
            }
        ]
    },
    ],


});
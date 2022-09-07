export const devicesData = {
    // "home": {
    //     "tab": "家庭"
    // },
    "keting": {
        "tab": "客厅",
        "climate": {
            "id": "climate.ke_ting_kong_diao",
            "icon": {
                "style": "z-index: 8;top: 68%;left: 40%;position: absolute",
                "src": "undefined.png"
            },
        },
        "light": [{
            "id": "switch.ke_ting_da_deng",
            "icon": {
                "style": "z-index: 10;top: 60%;left: 38.5%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "325,325,428,400"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/keda.png",
                "show": false
            }
        },
            {
                "id": "light.ke_ting_tong_deng",
                "icon": {
                    "style": "z-index: 10;top: 60%;left: 29.7%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "poly",
                    "coords": "278,283,456,276,456,305,312,316,302,430,427,424,419,453,273,453"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/ketong.png",
                    "show": false
                }
            },
            {
                "id": "light.dian_shi_tong_deng",
                "icon": {
                    "style": "z-index: 10;top: 60%;;left: 46.8%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "434,288,455,441"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/diantong.png",
                    "show": false
                }
            },
            {
                "id": "light.diao_yu_deng",
                "icon": {
                    "style": "z-index: 10;top: 69%;left: 35.1%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "327,403,348,424"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/luodi.png",
                    "show": false
                }
            }]
    },
    "canting": {
        "tab": "餐厅",
        "climate": {
            "id": "climate.can_ting_kong_diao",
            "icon": {
                "style": "z-index: 8;top: 10%;left: 38%;position: absolute",
            }
        },
        "light": [{
            "id": "switch.can_ting_da_deng",
            "icon": {
                "style": "z-index: 10;top: 25%;left: 38%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "327,85,414,197"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/canda.png",
                "show": false
            }
        },
            {
                "id": "switch.can_ting_tong_deng",
                "icon": {
                    "style": "z-index: 10;top: 28%;left: 30%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "poly",
                    "coords": "285,23,279,219,460,208,456,64,436,62,431,198,308,202,308,26"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/cantong.png",
                    "show": false
                }
            }]
    },
    "yangtai": {
        "tab": "阳台",
        "light": [{
            "id": "light.yang_tai_deng",
            "icon": {
                "style": "z-index: 10;top: 81%;left: 39%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "290,470,453,517"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/yangtai.png",
                "show": false
            }
        }]
    },
    "chufang": {
        "tab": "厨房",
        "light": [{
            "id": "switch.chu_fang_ding_deng",
            "icon": {
                "style": "z-index: 10;top: 8%;left: 22%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "155,23,236,81"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/chuding.png",
                "show": false
            }
        },
            {
                "id": "switch.chu_fang_tong_deng",
                "icon": {
                    "style": "z-index: 10;top: 18%;left: 24%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "161,93,266,176"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/chutong.png",
                    "show": false
                }
            }]
    },
    "zhuwo": {
        "tab": "主卧",
        "climate": {
            "id": "climate.zhu_wo_kong_diao",
            "icon": {
                "style": "z-index: 8;top: 85%;left: 69%;position: absolute",
            }
        },
        "light": [
            {
                "id": "switch.zhu_wo_da_deng",
                "icon": {
                    "style": "z-index: 10;top: 75%;left: 70%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "595,394,700,503"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/zhuda.png",
                    "show": false
                }
            },
            {
                "id": "switch.zhu_wo_she_deng",
                "icon": {
                    "style": "z-index: 10;top: 74%;left: 79%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "709,424,753,457"
                },
                "image": {
                    "style": "z-index:3",
                    "src": "bright/zhushe.png",
                    "show": false
                }
            }, {
                "id": "switch.zou_lang_deng",
                "icon": {
                    "style": "z-index: 10;top: 57%;left: 64%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "583,275,632,385"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/zhutong.png",
                    "show": false
                }
            },
            {
                "id": "switch.zuo_bi_deng",
                "icon": {
                    "style": "z-index: 10;top: 68%;left: 77.5%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "710,363,755,422"
                },
                "image": {
                    "style": "z-index:3",
                    "src": "bright/zuobi.png",
                    "show": false
                }
            },
            {
                "id": "switch.you_bi_deng",
                "icon": {
                    "style": "z-index: 10;top: 80%;left: 77.5%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "706,460,759,511"
                },
                "image": {
                    "style": "z-index:3",
                    "src": "bright/youbi.png",
                    "show": false
                }
            }]
    },
    "zhuwei": {
        "tab": "主卫",
        "light": [{
            "id": "switch.zhu_wei_ding_deng",
            "icon": {
                "style": "z-index: 10;top: 53%;left: 75%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "poly",
                "coords": "646,314,695,317,714,274,786,352,646,354"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/zhuwei.png",
                "show": false
            }
        },
            {
                "id": "switch.zhu_wei_jing_qian_deng",
                "icon": {
                    "style": "z-index: 10;top: 48%;left: 71%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "642,273,693,307"
                },
                "image": {
                    "style": "z-index:4",
                    "src": "bright/zhuweijing.png",
                    "show": false
                }
            }]
    },
    "ciwo": {
        "tab": "次卧",
        "climate": {
            "id": "climate.ci_wo_kong_diao",
            "icon": {
                "style": "z-index: 8;top: 80%;left: 53%;position: absolut;",
            }
        },
        "light": [{
            "id": "switch.ci_wo_da_deng",
            "icon": {
                "style": "z-index: 10;top:63%;left: 54%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "459,277,580,435"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/ciwo.png",
                "show": false
            }
        }]
    },
    "ciwei": {
        "tab": "次卫",
        "light": [{
            "id": "switch.ci_wei_ding_deng",
            "icon": {
                "style": "z-index: 10;top: 25%;left: 51.5%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "458,103,524,203"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/ciwei.png",
                "show": false
            }
        }]
    },
    "shufang": {
        "tab": "书房",
        "climate": {
            "id": "climate.shu_fang_kong_diao",
            "icon": {
                "style": "z-index: 8;top: 15%;left: 60%;position: absolute",
            }
        },
        "light": [{
            "id": "switch.shu_fang_da_deng",
            "icon": {
                "style": "z-index: 10;top: 26%;left: 61%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "531,108,644,204"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/shufang.png",
                "show": false
            }
        }, {
            "id": "light.liang_zi_deng",
        }, {
            "id": "switch.shu_fang_rgb",
        }]
    },
    "yimaojian": {
        "tab": "衣帽间",
        "climate": {
            "id": "climate.yi_mao_jian_kong_diao",
            "icon": {
                "style": "z-index: 8;top: 16%;left: 74%;position: absolute",
            }
        },
        "light": [{
            "id": "switch.yi_mao_jian_da_deng",
            "icon": {
                "style": "z-index: 10;top: 31%;left: 74%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "644,123,778,267"
            },
            "image": {
                "style": "z-index:4",
                "src": "bright/yimaojian.png",
                "show": false
            }
        }]
    },
    "zoulang": {
        "tab": "走廊",
        "light": [{
            "id": "switch.zou_lang_yi",
            "icon": {
                "style": "z-index: 10;top: 41%;left: 25%;zoom:0.5;",
                "src": "undefined.png"
            },
            "area": {
                "shape": "rect",
                "coords": "150,212,283,281"
            },
            "image": {
                "style": "z-index:3",
                "src": "bright/zouyi.png",
                "show": false
            }
        },
            {
                "id": "switch.zou_lang_er",
                "icon": {
                    "style": "z-index: 10;top: 41%;left: 40%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "304,223,455,272"
                },
                "image": {
                    "style": "z-index:3",
                    "src": "bright/zouer.png",
                    "show": false
                }
            },
            {
                "id": "switch.zou_lang_san",
                "icon": {
                    "style": "z-index: 10;top: 41%;left: 57%;zoom:0.5;",
                    "src": "undefined.png"
                },
                "area": {
                    "shape": "rect",
                    "coords": "458,212,647,269"
                },
                "image": {
                    "style": "z-index:3",
                    "src": "bright/zousan.png",
                    "show": false
                }
            }]
    }
}
"use strict";
(self["webpackChunkdigital_ganbo_website"] = self["webpackChunkdigital_ganbo_website"] || []).push([[361], {
    24361: function(t, i, s) {
        s.r(i),
        s.d(i, {
            default: function() {
                return p
            }
        });
        s(70560);
        var e = function() {
            var t = this
              , i = t._self._c;
            return i("div", {
                staticClass: "h5-home"
            }, [i("h5-nav"), i("div", {
                staticClass: "swiper-container page-swiper"
            }, [i("div", {
                staticClass: "swiper-wrapper"
            }, [i("div", {
                staticClass: "swiper-slide"
            }, [i("div", {
                staticClass: "swiper-container page-01-swiper"
            }, [i("div", {
                staticClass: "swiper-wrapper"
            }, [i("div", {
                staticClass: "swiper-slide",
                class: 0 == t.bannerIndex ? "animation-in" : "",
                style: `background-image: url(${s(32911)});`
            }, [i("canvas", {
                staticClass: "particle",
                attrs: {
                    id: "canvas"
                }
            }), i("img", {
                staticClass: "img-01",
                attrs: {
                    src: s(91447),
                    alt: ""
                }
            }), i("div", {
                staticClass: "button",
                on: {
                    click: function(i) {
                        return t.$router.push("/h5Collect")
                    }
                }
            }, [t._v(" 前往了解 ")])]), i("div", {
                staticClass: "swiper-slide",
                class: 1 == t.bannerIndex ? "animation-in" : "",
                style: `background-image: url(${s(35220)});`
            }, [i("img", {
                staticClass: "img-02",
                attrs: {
                    src: s(87436),
                    alt: ""
                }
            }), i("img", {
                staticClass: "img-03",
                attrs: {
                    src: s(31113),
                    alt: ""
                }
            }), i("div", {
                staticClass: "button",
                on: {
                    click: function(i) {
                        return t.$router.push("/h5Exhibition")
                    }
                }
            }, [t._v(" 前往了解 ")])])]), i("div", {
                staticClass: "swiper-pagination"
            })]), i("div", {
                staticClass: "page-swiper-tip"
            }, [t._v("滑动查看更多")])]), i("div", {
                staticClass: "swiper-slide"
            }, [i("div", {
                staticClass: "page-02-wrap"
            }, [i("img", {
                staticClass: "page-02-title",
                attrs: {
                    src: s(1998),
                    alt: ""
                }
            }), i("div", {
                staticClass: "list-wrap"
            }, [i("div", {
                staticClass: "list-item"
            }, [i("div", {
                staticClass: "open-time",
                on: {
                    click: function(i) {
                        return t.$router.push("/h5VisiteNotice")
                    }
                }
            }, [i("div", {
                staticClass: "title"
            }, [t._v("参观须知")])]), i("div", {
                staticClass: "time-list",
                on: {
                    click: function(i) {
                        return t.$router.push("/h5VisiteNotice")
                    }
                }
            }, [t._m(0), t._m(1), t._m(2)]), i("div", {
                staticClass: "info-box"
            }, [i("div", {
                staticClass: "info",
                on: {
                    click: function(i) {
                        return t.$router.push("/h5VisiteNotice")
                    }
                }
            }, [i("div", {
                staticClass: "info-01"
            }, [t._v("甘肃省博物馆免费预约参观")]), i("div", {
                staticClass: "info-02"
            }, [t._v(" 每星期二至星期日对外开放，星期一闭馆 (节假日除外)入馆参观需刷身份证登记 ")])]), t._m(3)])]), i("div", {
                staticClass: "list-item"
            }, [i("div", {
                staticClass: "item-title"
            }, [t._v("交通")]), t._l(t.traffic, (function(s) {
                return [i("div", {
                    staticClass: "sub-title"
                }, [t._v(t._s(s.title))]), i("div", {
                    staticClass: "info"
                }, [t._v(t._s(s.description))])]
            }
            ))], 2)])]), i("div", {
                staticClass: "page-swiper-tip"
            }, [t._v("滑动查看更多")])]), i("div", {
                staticClass: "swiper-slide"
            }, [i("div", {
                staticClass: "page-04-wrap"
            }, [i("img", {
                staticClass: "light",
                class: t.page04LightShow ? "show" : "",
                attrs: {
                    src: s(2438),
                    alt: ""
                }
            }), i("div", {
                staticClass: "swiper-container page-04-swiper"
            }, [i("div", {
                staticClass: "swiper-wrapper"
            }, t._l(t.collectionList, (function(t, s) {
                return i("div", {
                    key: s,
                    staticClass: "swiper-slide"
                }, [i("img", {
                    staticClass: "img",
                    attrs: {
                        src: t.img,
                        alt: ""
                    }
                })])
            }
            )), 0), i("div", {
                staticClass: "swiper-pagination"
            })]), i("div", {
                staticClass: "right-box"
            }, [i("img", {
                staticClass: "page-04-title",
                attrs: {
                    src: s(77253),
                    alt: ""
                }
            }), i("div", {
                staticClass: "pro-name"
            }, [t._v(" " + t._s(t.collectionList[t.collectionIndex].name) + " ")]), i("div", {
                staticClass: "pro-info"
            }, [t._v(" " + t._s(t.collectionList[t.collectionIndex].brief) + " ")]), i("div", {
                staticClass: "button",
                on: {
                    click: function(i) {
                        return t.$router.push("h5Collect")
                    }
                }
            }, [t._v(" 查看更多 ")])])]), i("div", {
                staticClass: "page-swiper-tip"
            }, [t._v("滑动查看更多")])]), i("div", {
                staticClass: "swiper-slide"
            }, [i("div", {
                staticClass: "page-03-wrap"
            }, [i("img", {
                staticClass: "page-03-title",
                attrs: {
                    src: s(56042),
                    alt: ""
                }
            }), i("div", {
                staticClass: "swiper-container swiper-0301"
            }, [i("div", {
                staticClass: "swiper-wrapper"
            }, t._l(t.page03Tabs[t.page03TabsActive].imgList, (function(s, e) {
                return i("div", {
                    key: e,
                    staticClass: "swiper-slide"
                }, t._l(s, (function(s, e) {
                    return i("div", {
                        key: e,
                        staticClass: "slide-box"
                    }, [i("img", {
                        staticClass: "img",
                        attrs: {
                            src: t.fileBaseUrl + s.titleImage,
                            alt: ""
                        },
                        on: {
                            click: function(i) {
                                return t.goDetail(s.id)
                            }
                        }
                    })])
                }
                )), 0)
            }
            )), 0), i("div", {
                staticClass: "swiper-progress-bar"
            })]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === t.page03TabsActive,
                    expression: "page03TabsActive === 0"
                }],
                staticClass: "button",
                on: {
                    click: function(i) {
                        return t.$router.push("/h5Exhibition")
                    }
                }
            }, [t._v(" 查看更多 ")])]), i("H5Footer", {
                attrs: {
                    isHome: !0
                }
            })], 1)])])], 1)
        }
          , a = [function() {
            var t = this
              , i = t._self._c;
            return i("div", {
                staticClass: "item"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("开放时间")]), i("div", {
                staticClass: "time"
            }, [t._v("：9:00 ~ 17:00")])])
        }
        , function() {
            var t = this
              , i = t._self._c;
            return i("div", {
                staticClass: "item"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("止票时间")]), i("div", {
                staticClass: "time"
            }, [t._v("：16:00")])])
        }
        , function() {
            var t = this
              , i = t._self._c;
            return i("div", {
                staticClass: "item"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("停止入馆时间")]), i("div", {
                staticClass: "time"
            }, [t._v("：16:30")])])
        }
        , function() {
            var t = this
              , i = t._self._c;
            return i("div", {
                staticClass: "img-box"
            }, [i("img", {
                staticClass: "code",
                attrs: {
                    src: s(24783),
                    alt: ""
                }
            }), i("div", {
                staticClass: "info-03"
            }, [i("img", {
                attrs: {
                    src: s(33425),
                    alt: ""
                }
            }), t._v("扫码预约 ")])])
        }
        ]
          , n = (s(79847),
        s(40781))
          , r = s(54926)
          , l = {
            data() {
                return {
                    flag: !1,
                    bannerIndex: 0,
                    leaveWordShow: !1,
                    traffic: [],
                    page03Tabs: [{
                        name: "常规展览",
                        imgList: []
                    }, {
                        name: "专题展览",
                        imgList: []
                    }],
                    page03TabsActive: 0,
                    swiper03: {},
                    collectionList: [{
                        name: "铜奔马",
                        brief: "汉代，武威市雷台汉墓出土，通高34.5厘米，长45厘米，宽13.1厘米，重7.3千克。造型矫健精美，作昂首嘶鸣，疾足奔驰状。塑造者摄取了奔马三足腾空、一足超掠飞鹰的刹那瞬间。让飞鹰回首惊顾，更增强奔马急速向前的动势。其全身的着力点集注于超越飞鹰的那一足上，准确地掌握了力学的平衡原理，具有卓越的工艺技术水平。铜奔马是按照良马式的标准去塑造的，集西域马和蒙古马等马钟的优点于一身，特别是表现出河西走马秉赋的对侧步特征。构思巧妙，艺术造型精炼，铸铜工艺卓越。铜奔马被认为是东、西方文化交往的使者和象征，被视为中国旅游的标志。",
                        img: s(64729)
                    }, {
                        name: "鲵鱼纹彩陶瓶",
                        brief: "仰韶文化石岭下类型（距今5200年前），甘谷县西坪出土，高38.4厘米，口径7厘米，底径12厘米。小口、长颈、平底、腹上部有双耳，颈部有堆纹一圈。瓶腹绘黑色人首形的鲵鱼图样，一双短臂向外伸出，全身为斜格纹，尾部弯曲。",
                        img: s(76728)
                    }, {
                        name: "莲花形玻璃托盏",
                        brief: "元代，漳县汪世显家族墓出土，盏高4.9厘米，口径8.9厘米，底径3.4厘米；盏托高1.2厘米，口径15.2厘米。玻璃托盏为普蓝色玻璃制成，半透明，胎内含气泡。盏为七瓣莲花形，饼形足；托口为平口，边沿呈八瓣莲花形，平底，腹壁呈正八角形。托盏造型优美，色彩艳丽，工艺精湛，是迄今出土最完整的一套元代玻璃托盏。",
                        img: s(54323)
                    }, {
                        name: "人头形器口彩陶瓶",
                        brief: "仰韶文化庙底沟类型（距今5500年前），秦安县大地湾遗址出土，高32.3厘米，口径4厘米，底径6.8厘米。瓶口呈圆雕的人头像，头的左右和后部都是披发，前额也垂着一排整齐的短发。眼和嘴都雕成孔洞，两耳皆有一小穿孔，是垂系饰物的耳孔。陶瓶的腹部以黑彩画三横排大致相同的弧线三角纹和斜线组成的二方连续图案。",
                        img: s(36985)
                    }, {
                        name: "“驿使图”壁画砖",
                        brief: "魏晋，嘉峪关市魏晋5号墓出土，砖长35厘米，宽17厘米。砖上绘一信使，头戴黑帻，着皂缘领袖中衣，左手持棨传文书，跃马疾驰。棨传为通过关卡、驿站时的信物。驿马四蹄腾空，奔驰在戈壁绿洲的道路上。这块写实砖画，在我国邮政史上具有重大意义。20世纪80年代初，在世界万国邮政博览会上，此画曾作为中国邮政标志物。为纪念中华全国集邮联合会第一次代表大会的召开，邮电部于1982年8月25日发行《驿使图》纪念邮票（小型张）一枚。",
                        img: s(8946)
                    }, {
                        name: "红陶人面像",
                        brief: "仰韶文化石岭下类型（距今5200年前），天水市柴家坪出土，残高15.3厘米，宽14.6厘米。人像高颧阔面，眉稍隆起，嘴、眼镂空成横条状，鼻呈三角形，两耳垂各有一穿孔。",
                        img: s(10201)
                    }, {
                        name: "木舞俑",
                        brief: "汉代，武威市磨嘴子汉墓出土，舞俑高16.3厘米，底宽6.2厘米。木俑以黑、红色彩绘五官和衣服领缘，作舞蹈状，束发，身着长袍，一臂放于胸前，另一臂平上伸，头侧向。",
                        img: s(76465)
                    }],
                    collectionIndex: 0,
                    page04LightShow: !0,
                    product: [{
                        img: s(53306),
                        hoverImg: s(30221)
                    }, {
                        img: s(22426),
                        hoverImg: s(39045)
                    }, {
                        img: s(17148),
                        hoverImg: s(82783)
                    }, {
                        img: s(50691),
                        hoverImg: s(10794)
                    }, {
                        img: s(72785),
                        hoverImg: s(13511)
                    }, {
                        img: s(43635),
                        hoverImg: s(51912)
                    }, {
                        img: s(41702),
                        hoverImg: s(2926)
                    }, {
                        img: s(68446),
                        hoverImg: s(99090)
                    }]
                }
            },
            created() {
                this.initData()
            },
            mounted() {
                const t = this;
                new n.Z(".page-swiper",{
                    speed: 1e3,
                    direction: "vertical",
                    mousewheel: !0,
                    allowTouchMove: !0,
                    on: {
                        slideChangeTransitionStart: function() {
                            t.leaveWordShow = 0 != this.activeIndex
                        }
                    }
                }),
                new n.Z(".page-01-swiper",{
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    on: {
                        slideChangeTransitionStart: function() {
                            t.bannerIndex = this.activeIndex
                        }
                    }
                }),
                new n.Z(".page-04-swiper",{
                    watchSlidesProgress: !0,
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    loop: !0,
                    loopedSlides: 5,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: !0
                    },
                    navigation: {
                        nextEl: ".slide-prev",
                        prevEl: ".slide-next"
                    },
                    on: {
                        slideChangeTransitionStart: function() {
                            t.collectionIndex = this.realIndex % t.collectionList.length,
                            t.page04LightShow = !1
                        },
                        slideChangeTransitionEnd: function() {
                            t.page04LightShow = !0
                        },
                        progress: function(t) {
                            for (let i = 0; i < this.slides.length; i++) {
                                let t = this.slides.eq(i)
                                  , s = this.slides[i].progress
                                  , e = 1;
                                Math.abs(s) > 1 && (e = .3 * (Math.abs(s) - 1) + 1);
                                let a = s * e * 80 + "px"
                                  , n = 1 - Math.abs(s) / 5
                                  , r = 999 - Math.abs(Math.round(10 * s));
                                t.transform("translateX(" + a + ") scale(" + n + ")"),
                                t.css("zIndex", r),
                                t.css("opacity", 1),
                                Math.abs(s) > 3 && t.css("opacity", 0)
                            }
                        },
                        setTransition: function(t) {
                            for (let i = 0; i < this.slides.length; i++) {
                                let s = this.slides.eq(i);
                                s.transition(t)
                            }
                        },
                        slideChange: function() {
                            t.collectionIndex = this.realIndex % t.collectionList.length
                        }
                    }
                })
            },
            methods: {
                goDetail(t) {
                    this.$router.push("/h5ExhibitionDetail?id=" + t)
                },
                format(t) {
                    const i = 2
                      , s = t.reduce(((t,s,e)=>{
                        const a = Math.floor(e / i);
                        return t[a] || (t[a] = []),
                        t[a].push(s),
                        t
                    }
                    ), []);
                    return s
                },
                initData() {
                    (0,
                    r.AO)({
                        catalogCode: this.H5CONSTANT.jtlx,
                        page: 0,
                        size: 2
                    }).then((t=>{
                        this.traffic = t.data.content
                    }
                    )),
                    (0,
                    r.AO)({
                        catalogCode: this.H5CONSTANT.cgzl,
                        page: 0,
                        size: 5
                    }).then((t=>{
                        const i = t.data.content.slice(0, 4);
                        this.page03Tabs[0].imgList = this.format(i),
                        this.flag = !0
                    }
                    ))
                },
                initSwiper() {
                    this.swiper03 = new n.Z(".swiper-0301",{
                        spaceBetween: 16,
                        freeMode: !0,
                        slidesPerView: "auto",
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        pagination: {
                            el: ".swiper-progress-bar",
                            type: "progressbar"
                        }
                    })
                }
            },
            updated() {
                this.$nextTick((()=>{
                    this.flag && setTimeout((()=>{
                        this.initSwiper(),
                        this.flag = !1
                    }
                    ), 50)
                }
                ))
            }
        }
          , c = l
          , o = s(1001)
          , d = (0,
        o.Z)(c, e, a, !1, null, "75b788a8", null)
          , p = d.exports
    },
    79847: function(t, i, s) {
        s.d(i, {
            Ds: function() {
                return n
            },
            Sx: function() {
                return a
            },
            sZ: function() {
                return e
            }
        });
        s(24224),
        s(61121),
        s(37133);
        function e() {
            const t = new Uint32Array(1)
              , i = 4294967295;
            return crypto.getRandomValues(t)[0] / i
        }
        function a() {
            const t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
              , i = document.documentElement.scrollHeight || document.body.scrollHeight
              , s = document.documentElement.clientHeight || document.body.clientHeight;
            return Math.ceil(t) + s >= i
        }
        function n(t, i) {
            let s;
            return function() {
                i = i || 500,
                s && clearTimeout(s),
                s = setTimeout((()=>{
                    t.apply(this)
                }
                ), i)
            }
        }
    }
}]);

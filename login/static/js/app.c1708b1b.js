(function() {
    "use strict";
    var e = {
        69151: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    staticClass: "left-tab-page"
                }, [t("div", {
                    staticClass: "tab"
                }, [t("div", {
                    staticClass: "close",
                    on: {
                        click: e.close
                    }
                }), t("div", {
                    staticClass: "tab_warp"
                }, [e.tabList.length > 6 ? t("div", {
                    staticClass: "swiper"
                }, [t("div", {
                    ref: "tabSwiper",
                    staticClass: "swiper-container"
                }, [t("div", {
                    staticClass: "swiper-wrapper"
                }, e._l(e.tabList, (function(i, n) {
                    return t("div", {
                        key: n,
                        staticClass: "swiper-slide tab_item",
                        on: {
                            click: function(t) {
                                return e.hander(n)
                            }
                        }
                    }, [t("span", [e._v(e._s(i.title))])])
                }
                )), 0)])]) : t("div", {
                    staticClass: "tab_box"
                }, e._l(e.tabList, (function(i, n) {
                    return t("div", {
                        key: n,
                        class: e.currentIndex == n ? "tab_item1 active" : "tab_item1",
                        on: {
                            click: function(t) {
                                return e.hander(n)
                            }
                        }
                    }, [t("span", [e._v(e._s(i.title))])])
                }
                )), 0)])])])
            }
              , a = []
              , o = i(40781)
              , s = {
                props: {
                    tabList: {
                        type: Array,
                        default: ()=>{}
                    },
                    currentIndex: {
                        type: Number,
                        default: 0
                    }
                },
                data() {
                    return {
                        tabSwiper: {}
                    }
                },
                mounted() {
                    this.tabList.length > 6 && this.initSwiper()
                },
                methods: {
                    initSwiper() {
                        const e = this;
                        e.$nextTick((()=>{
                            e.tabSwiper = new o.Z(".swiper-container",{
                                direction: "vertical",
                                slidesPerView: "7",
                                centeredSlides: !0
                            }),
                            e.tabSwiper.slideTo(e.currentIndex, 600, !1)
                        }
                        ))
                    },
                    hander(e) {
                        this.$emit("handleTab", e)
                    },
                    close() {
                        this.$emit("close")
                    }
                }
            }
              , r = s
              , l = i(1001)
              , c = (0,
            l.Z)(r, n, a, !1, null, "4146e301", null)
              , u = c.exports
        },
        54926: function(e, t, i) {
            i.d(t, {
                AO: function() {
                    return r
                },
                Al: function() {
                    return c
                },
                Db: function() {
                    return u
                },
                Eg: function() {
                    return p
                },
                Ik: function() {
                    return o
                },
                Jj: function() {
                    return g
                },
                VV: function() {
                    return h
                },
                i0: function() {
                    return s
                },
                kb: function() {
                    return l
                },
                tH: function() {
                    return m
                },
                uU: function() {
                    return f
                }
            });
            var n = i(47184)
              , a = i(13378);
            const o = e=>{
                let t = e.catalogCode;
                return e.catalogCode = a.Z[d()][t],
                e.deptCode = a.Z[d()].dept_code,
                (0,
                n.A_)("/public/news/page", e)
            }
              , s = e=>(e.deptCode = a.Z[d()].dept_code,
            (0,
            n.A_)("/public/news/page", e))
              , r = e=>(e.deptCode = a.Z["zh"].dept_code,
            (0,
            n.A_)("/public/news/page", e))
              , l = e=>(0,
            n.A_)("/public/news/rank", e)
              , c = (e,t)=>(0,
            n.A_)(`/public/news/${e}`, t)
              , u = e=>{
                let t = e.code;
                return e.code = a.Z[d()][t],
                e.deptCode = a.Z[d()].dept_code,
                (0,
                n.A_)("/public/newsCatalog/findByPcode", e)
            }
              , h = e=>(e.deptCode = a.Z[d()].dept_code,
            (0,
            n.A_)("/public/newsCatalog/findByPcode", e));
            function d() {
                return localStorage.getItem("language") || "zh"
            }
            const m = e=>(0,
            n.A_)(`/public/topicRelic/3D/${e}`)
              , g = ()=>(0,
            n.A_)("/public/window/conf")
              , p = ()=>(0,
            n.A_)("/public/banner/conf")
              , f = e=>(0,
            n.A_)("/public/visit/conf", e)
        },
        47184: function(e, t, i) {
            i.d(t, {
                A_: function() {
                    return o
                }
            });
            var n = i(91076);
            const a = "sccp/api/sccp-cms";
            n.Z.defaults.timeout = 15e3,
            n.Z.interceptors.request.use((e=>e), (e=>(console.log("请求超时"),
            Promise.resolve(e)))),
            n.Z.interceptors.response.use((e=>200 === e.status ? Promise.resolve(e.data) : Promise.reject(e)), (e=>{
                if (e.response && e.response.status) {
                    const t = e.response.data;
                    switch (e.response.status) {
                    case 404:
                        console.log("网络请求不存在");
                        break;
                    case 500:
                        console.log("网络服务异常");
                        break;
                    default:
                        "" != t.message || "" != t.msg ? console.log(t.message || t.msg) : console.log("未知错误")
                    }
                    return Promise.reject(e.response)
                }
                return console.log(e.toString()),
                Promise.resolve(e)
            }
            ));
            const o = (e,t)=>(0,
            n.Z)({
                method: "get",
                url: `${a}${e}`,
                params: {
                    ...t
                }
            })
        },
        13378: function(e, t) {
            const i = {
                zh: {
                    dept_code: "10002",
                    yy: "00000000,1702864474756,1702864638648",
                    jtlx: "00000000,1702864474756,1702864652493",
                    zhl: "00000000,1702864485151",
                    cgzl: "00000000,1702864485151,1702864716713",
                    ztzl: "00000000,1702864485151,1702864726593",
                    cp: "00000000,1702864504053",
                    zc: "00000000,1702864522994,1702864744952,1702864803297",
                    llxx: "00000000,1702864522994,1702864744952,1702864813033",
                    sjhd: "00000000,1702864522994,1702864744952,1702864821554",
                    zx: "00000000,1702864522994",
                    bgxw: "00000000,1702864522994,1702864756036",
                    hyzx: "00000000,1702864522994,1702864765825",
                    cggg: "00000000,1702864522994,1702864776907,1702864836528",
                    tzgg: "00000000,1702864522994,1702864776907,1702864847091",
                    zyz: "00000000,1702864522994,1702864776907,1702864856066",
                    hdyy: "00000000,1702864522994,1702864776907,1702864865653",
                    kj: "00000000,1702864533743",
                    st: "00000000,1702864522994,1702864790520",
                    xshd: "00000000,1702864533743,1702867610645",
                    gk: "00000000,1702864533743,1702867623792,1702867643853",
                    zl: "00000000,1702864533743,1702867623792,1702867654863",
                    sj: "00000000,1702864551239",
                    qsnjy: "00000000,1702864551239,1702867675143",
                    ldbwg: "00000000,1702864551239,1702867684254",
                    wc: "00000000,1702864563154",
                    jj: "00000000,1702864573437,1702867702759",
                    xrld: "00000000,1702864573437,1702867712879",
                    zcfg: "00000000,1702864573437,1702867720429,1702867773958",
                    yjsgk: "00000000,1702864573437,1702867720429,1702867787458",
                    jgsz: "00000000,1702864573437,1702867729561",
                    cgxz: "00000000,1702864474756,1708240493426",
                    zj: "00000000,1702864573437,1708242826903",
                    wwzj: "00000000,1702864522994,1702864776907,1708243996345",
                    ylgl: "00000000,1702864474756,1708240363565",
                    djjy: "00000000,1702864522994,1702864744952,1713842428501"
                },
                en: {
                    dept_code: "10002",
                    yy: "00000000,1704164434762,1704799326656,1704800116533",
                    jtlx: "00000000,1704164434762,1704799326656,1704800127983",
                    zhl: "00000000,1704164434762,1704799348339",
                    cgzl: "00000000,1704164434762,1704799348339,1704800147805",
                    ztzl: "00000000,1702864485151,1702864726593",
                    cp: "00000000,1702864504053",
                    zc: "00000000,1702864522994,1702864744952,1702864803297",
                    llxx: "00000000,1702864522994,1702864744952,1702864813033",
                    sjhd: "00000000,1702864522994,1702864744952,1702864821554",
                    zx: "00000000,1702864522994",
                    bgxw: "00000000,1702864522994,1702864756036",
                    hyzx: "00000000,1702864522994,1702864765825",
                    cggg: "00000000,1702864522994,1702864776907,1702864836528",
                    tzgg: "00000000,1702864522994,1702864776907,1702864847091",
                    zyz: "00000000,1702864522994,1702864776907,1702864856066",
                    hdyy: "00000000,1702864522994,1702864776907,1702864865653",
                    kj: "00000000,1702864533743",
                    st: "00000000,1702864522994,1702864790520",
                    xshd: "00000000,1702864533743,1702867610645",
                    gk: "00000000,1702864533743,1702867623792,1702867643853",
                    zl: "00000000,1702864533743,1702867623792,1702867654863",
                    sj: "00000000,1702864551239",
                    qsnjy: "00000000,1704350513711,1704446845907,1704446879043",
                    ldbwg: "00000000,1702864551239,1702867684254",
                    wc: "00000000,1702864563154",
                    jj: "00000000,1702864573437,1702867702759",
                    xrld: "00000000,1702864573437,1702867712879",
                    zcfg: "00000000,1702864573437,1702867720429,1702867773958",
                    yjsgk: "00000000,1702864573437,1702867720429,1702867787458",
                    jgsz: "00000000,1702864573437,1702867729561",
                    cgxz: "00000000,1704164434762,1704799326656,1708242092274"
                }
            };
            t.Z = i
        },
        83169: function(e, t, i) {
            var n = i(36369)
              , a = function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e.isMobile ? e._e() : t("Header"), t("keep-alive", [e.$route.meta.keepAlive ? t("router-view") : e._e()], 1), e.$route.meta.keepAlive ? e._e() : t("router-view"), e.isMobile ? e._e() : t("Footer")], 1)
            }
              , o = []
              , s = (i(70560),
            {
                name: "App",
                data() {
                    return {
                        isMobile: !1,
                        width: 0
                    }
                },
                mounted() {
                    this.isMobile = this._isMobile(),
                    this.isMobile && this.$router.push("/h5home"),
                    this.handleResize(),
                    window.addEventListener("resize", this.handleResize),
                    this.detail()
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.handleResize)
                },
                methods: {
                    _isMobile() {
                        let e = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                        return !!e
                    },
                    handleResize(e) {
                        const t = window?.innerWidth;
                        if (t !== this.width) {
                            if (this.isMobile && t > 768)
                                this.isMobile = !1,
                                this.$nextTick((()=>{
                                    const e = JSON.parse(sessionStorage.getItem("routerInfo"));
                                    e ? this.$router.push({
                                        path: e.path,
                                        query: e.query
                                    }) : this.$router.push("/")
                                }
                                ));
                            else if (!this.isMobile && t < 768) {
                                this.isMobile = !0;
                                const {fullPath: e, path: t, query: i} = this.$route;
                                sessionStorage.setItem("routerInfo", JSON.stringify({
                                    fullPath: e,
                                    path: t,
                                    query: i
                                })),
                                this.$router.push("/h5home")
                            }
                            this.width = t
                        }
                    },
                    detail() {
                        "zh" == this.$i18n.locale && "/enDetails" == window.location.pathname ? this.$router.push({
                            path: "/about?nav=8-0"
                        }) : "en" == this.$i18n.locale && "/about" == window.location.pathname && this.$router.push({
                            path: "/enDetails?nav=8-0"
                        })
                    }
                }
            })
              , r = s
              , l = i(1001)
              , c = (0,
            l.Z)(r, a, o, !1, null, "2ed47dc8", null)
              , u = c.exports
              , h = i(72631);
            const d = [{
                path: "/h5Home",
                name: "h5Home",
                meta: {
                    title: "首页",
                    selectNav: !1
                },
                component: ()=>Promise.all([i.e(264), i.e(361)]).then(i.bind(i, 24361))
            }, {
                path: "/h5Collect",
                name: "h5Collect",
                meta: {
                    title: "藏品"
                },
                component: ()=>i.e(710).then(i.bind(i, 92710))
            }, {
                path: "/h5CollectDetail",
                name: "h5CollectDetail",
                meta: {
                    title: "藏品详情",
                    selectNav: !1
                },
                component: ()=>i.e(261).then(i.bind(i, 71261))
            }, {
                path: "/h5Exhibition",
                name: "h5Exhibition",
                meta: {
                    title: "展览"
                },
                component: ()=>i.e(852).then(i.bind(i, 51852))
            }, {
                path: "/h5ExhibitionDetail",
                name: "h5ExhibitionDetail",
                meta: {
                    title: "展览",
                    selectNav: !1
                },
                component: ()=>i.e(958).then(i.bind(i, 1958))
            }, {
                path: "/h5Synopsis",
                name: "h5Synopsis",
                meta: {
                    title: "关于"
                },
                component: ()=>i.e(931).then(i.bind(i, 24240))
            }, {
                path: "/h5VisiteNotice",
                name: "h5VisiteNotice",
                meta: {
                    title: "参观须知"
                },
                component: ()=>i.e(337).then(i.bind(i, 83337))
            }];
            var m = d;
            let g = h.ZP.prototype.push
              , p = h.ZP.prototype.replace;
            h.ZP.prototype.push = function(e) {
                g.call(this, e, (()=>{}
                ), (()=>{}
                ))
            }
            ,
            h.ZP.prototype.replace = function(e) {
                p.apply(this, [e, ()=>{}
                , ()=>{}
                ])
            }
            ,
            n.ZP.use(h.ZP);
            const f = [{
                path: "/",
                name: "welcome",
                component: ()=>i.e(860).then(i.bind(i, 59860))
            }, {
                path: "/home",
                name: "home",
                component: ()=>i.e(797).then(i.bind(i, 77797))
            }, {
                path: "/search",
                name: "search",
                meta: {
                    title: "搜索",
                    keepAlive: !0
                },
                component: ()=>i.e(653).then(i.bind(i, 51653))
            }, {
                path: "/leaveAMessage",
                name: "leaveAMessage",
                meta: {
                    title: "我要留言"
                },
                component: ()=>i.e(85).then(i.bind(i, 68085))
            }, {
                path: "/audioVisual",
                name: "audioVisual",
                component: ()=>i.e(675).then(i.bind(i, 11675))
            }, {
                path: "/regularExhibition",
                name: "regularExhibition",
                meta: {
                    title: "常设展览"
                },
                component: ()=>i.e(336).then(i.bind(i, 52336))
            }, {
                path: "/otherExhibition",
                name: "otherExhibition",
                meta: {
                    title: "其他展览"
                },
                component: ()=>i.e(624).then(i.bind(i, 71624))
            }, {
                path: "/detailsPage",
                name: "detailsPage",
                meta: {
                    title: "详情",
                    toHome: !0
                },
                component: ()=>Promise.all([i.e(355), i.e(162), i.e(204), i.e(264), i.e(625)]).then(i.bind(i, 99625))
            }, {
                path: "/listImgLeft",
                name: "listImgLeft",
                meta: {
                    title: "列表",
                    dec: "左图右文模式"
                },
                component: ()=>i.e(839).then(i.bind(i, 71839))
            }, {
                path: "/listImgRight",
                name: "listImgRight",
                meta: {
                    title: "列表",
                    dec: "左文右图模式"
                },
                component: ()=>i.e(722).then(i.bind(i, 38722))
            }, {
                path: "/listPage",
                name: "listPage",
                meta: {
                    title: "列表",
                    dec: "无图模式"
                },
                component: ()=>i.e(454).then(i.bind(i, 53454))
            }, {
                path: "/regularDetials",
                name: "regularDetials",
                meta: {
                    title: "常设展览详情"
                },
                component: ()=>i.e(973).then(i.bind(i, 81973))
            }, {
                path: "/party",
                name: "party",
                meta: {
                    title: "党建",
                    enHide: !0
                },
                component: ()=>i.e(858).then(i.bind(i, 13858))
            }, {
                path: "/partyList",
                name: "partyList",
                meta: {
                    title: "党建列表",
                    enHide: !0
                },
                component: ()=>i.e(964).then(i.bind(i, 95964))
            }, {
                path: "/partyDetails",
                name: "partyDetails",
                meta: {
                    title: "党建详情",
                    enHide: !0
                },
                component: ()=>i.e(335).then(i.bind(i, 68335))
            }, {
                path: "/news",
                name: "news",
                meta: {
                    title: "本馆新闻",
                    enHide: !0
                },
                component: ()=>i.e(3).then(i.bind(i, 64003))
            }, {
                path: "/newsList",
                name: "newsList",
                meta: {
                    title: "新闻列表",
                    enHide: !0
                },
                component: ()=>i.e(606).then(i.bind(i, 98606))
            }, {
                path: "/scienceEducation",
                name: "scienceEducation",
                meta: {
                    title: "科教",
                    enHide: !0
                },
                component: ()=>Promise.all([i.e(355), i.e(285)]).then(i.bind(i, 61285))
            }, {
                path: "/academicActivities",
                name: "academicActivities",
                meta: {
                    title: "学术活动",
                    enHide: !0
                },
                component: ()=>Promise.all([i.e(355), i.e(446)]).then(i.bind(i, 59446))
            }, {
                path: "/academicAchievements",
                name: "academicAchievements",
                meta: {
                    title: "学术成果",
                    enHide: !0
                },
                component: ()=>Promise.all([i.e(355), i.e(517)]).then(i.bind(i, 39517))
            }, {
                path: "/socialEducation",
                name: "socialEducation",
                meta: {
                    title: "社教",
                    enHide: !0
                },
                component: ()=>Promise.all([i.e(355), i.e(981)]).then(i.bind(i, 38981))
            }, {
                path: "/mobileMuseum",
                name: "mobileMuseum",
                meta: {
                    title: "流动博物馆",
                    enHide: !0
                },
                component: ()=>i.e(897).then(i.bind(i, 17897))
            }, {
                path: "/youthEducation",
                name: "youthEducation",
                meta: {
                    title: "青少年教育",
                    enHide: !0
                },
                component: ()=>i.e(235).then(i.bind(i, 36235))
            }, {
                path: "/about",
                name: "about",
                meta: {
                    title: "关于",
                    enHide: !0
                },
                component: ()=>i.e(819).then(i.bind(i, 95819))
            }, {
                path: "/visiteNotice",
                name: "visiteNotice",
                component: ()=>i.e(785).then(i.bind(i, 58785))
            }, {
                path: "/collection",
                name: "collection",
                component: ()=>Promise.all([i.e(204), i.e(477)]).then(i.bind(i, 32477))
            }, {
                path: "/collectionList",
                name: "collectionList",
                meta: {
                    title: "文物列表"
                },
                component: ()=>i.e(307).then(i.bind(i, 5307))
            }, {
                path: "/collectionDetail",
                name: "collectionDetail",
                meta: {
                    title: "藏品详情",
                    toHome: !0
                },
                component: ()=>i.e(702).then(i.bind(i, 88702))
            }, {
                path: "/culturalModel",
                name: "culturalModel",
                meta: {
                    title: "文物模型"
                },
                component: ()=>i.e(8).then(i.bind(i, 45008))
            }, {
                path: "/navMap",
                name: "navMap",
                component: ()=>Promise.all([i.e(162), i.e(899)]).then(i.bind(i, 50899))
            }, {
                path: "/visiteRoute",
                name: "visiteRoute",
                component: ()=>i.e(689).then(i.bind(i, 67689))
            }, {
                path: "/culturalProduct",
                name: "culturalProduct",
                meta: {
                    title: "文创产品",
                    enHide: !0
                },
                component: ()=>i.e(407).then(i.bind(i, 37407))
            }, {
                path: "/enDetails",
                name: "enDetails",
                component: ()=>i.e(903).then(i.bind(i, 74903))
            }]
              , b = h.ZP.prototype.replace;
            h.ZP.prototype.replace = function(e) {
                return b.call(this, e).catch((e=>e))
            }
            ;
            const v = new h.ZP({
                mode: "history",
                base: "/",
                routes: [...f, ...m]
            });
            v.beforeEach(((e,t,i)=>{
                e.path === t.path && e.query.anchorPoint || (document.body.scrollTop = 0,
                document.documentElement.scrollTop = 0,
                window.pageYOffset = 0),
                i()
            }
            ));
            var A = v
              , C = i(63822);
            n.ZP.use(C.ZP);
            var w = new C.ZP.Store({
                state: {
                    collectType: ""
                },
                getters: {
                    collectType: e=>e.collectType
                },
                mutations: {
                    SET_COLLECT_TYPE(e, t) {
                        e.collectType = t
                    }
                },
                actions: {
                    setCollectType({commit: e}, t) {
                        e("SET_COLLECT_TYPE", t)
                    }
                }
            })
              , x = (i(53434),
            i(9372))
              , E = function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: -1 != e.menuActive,
                        expression: "menuActive != -1"
                    }],
                    staticClass: "header-container",
                    class: e.headerFixed ? "fixed" : ""
                }, [t("div", {
                    staticClass: "header-wrap"
                }, [t("img", {
                    staticClass: "logo",
                    attrs: {
                        src: i(14464),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "menu"
                }, [e._l(e.menu, (function(i, n) {
                    return ["zh" === e.$i18n.locale || "en" === e.$i18n.locale && !i.enHide ? t("div", {
                        key: n,
                        staticClass: "menu-item"
                    }, [t("div", {
                        staticClass: "menu-name",
                        class: n == e.menuActive ? "active" : "",
                        on: {
                            click: function(t) {
                                return e.toPage(i.link)
                            }
                        }
                    }, [e._v(" " + e._s(e.$t(i.name)) + " ")]), i.subMenu && !e.headerFixed ? t("div", {
                        staticClass: "sub-menu"
                    }, [t("div", {
                        staticClass: "sub-menu-wrap"
                    }, e._l(i.subMenu, (function(i, a) {
                        return t("div", {
                            key: a,
                            staticClass: "sub-menu-name",
                            class: n == e.menuActive && a == e.subMenuActive ? "active" : "",
                            on: {
                                click: function(t) {
                                    return e.toPage(i.link)
                                }
                            }
                        }, [e._v(e._s(e.$t(i.name)) + " ")])
                    }
                    )), 0)]) : e._e()]) : e._e()]
                }
                ))], 2), t("div", {
                    staticClass: "header-right"
                }, [t("div", {
                    staticClass: "language"
                }, [t("div", {
                    staticClass: "item",
                    class: {
                        active: "zh" === e.$i18n.locale
                    },
                    on: {
                        click: function(t) {
                            return e.changeLang("zh")
                        }
                    }
                }, [e._v("中文简体")]), t("div", {
                    staticClass: "break"
                }), t("div", {
                    staticClass: "item",
                    class: {
                        active: "en" === e.$i18n.locale
                    },
                    on: {
                        click: function(t) {
                            return e.changeLang("en")
                        }
                    }
                }, [e._v("English")])]), t("div", {
                    staticClass: "search-box"
                }, ["zh" === e.$i18n.locale ? t("div", {
                    staticClass: "search",
                    on: {
                        click: e.gotoSearch
                    }
                }, [e._v("搜索")]) : e._e()])])]), e.menu[e.menuActive] && e.menu[e.menuActive].subMenu && !e.headerFixed ? t("div", {
                    staticClass: "crumb-wrap"
                }, [t("div", {
                    staticClass: "crumb"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(22675),
                        alt: ""
                    },
                    on: {
                        click: function(t) {
                            return e.toPage(e.menu[0].link)
                        }
                    }
                }), e.menu[e.menuActive] ? t("span", {
                    on: {
                        click: function(t) {
                            return e.toPage(e.menu[e.menuActive].link)
                        }
                    }
                }, [e._v("》 " + e._s(e.$t(e.menu[e.menuActive].name)))]) : e._e(), e.menu[e.menuActive].subMenu[e.subMenuActive] ? t("span", [e._v("》 " + e._s(e.$t(e.menu[e.menuActive].subMenu[e.subMenuActive].name)))]) : e._e()]), t("div", {
                    staticClass: "sub-menu-wrap"
                }, e._l(e.menu[e.menuActive].subMenu, (function(i, n) {
                    return t("div", {
                        key: n,
                        staticClass: "sub-menu-name",
                        class: n == e.subMenuActive ? "active" : "",
                        on: {
                            click: function(t) {
                                return e.toPage(i.link)
                            }
                        }
                    }, [e._v(e._s(e.$t(i.name)) + " ")])
                }
                )), 0)]) : e._e()])
            }
              , y = []
              , I = {
                name: "Header",
                data() {
                    return {
                        headerFixed: !0,
                        menuActive: -1,
                        subMenuActive: -1,
                        relationshipTable: {
                            nav4: 1,
                            nav1: 2,
                            nav2: 3,
                            nav3: 4,
                            nav5: 5,
                            nav6: 6,
                            nav7: 7,
                            nav8: 8
                        },
                        menuList: [{
                            name: "nav.home",
                            zhName: "首页",
                            link: "/home"
                        }, {
                            name: "nav.realTimeInfo",
                            zhName: "资讯",
                            enHide: !0,
                            link: "/party?nav=4-0",
                            subMenu: [{
                                name: "nav.partyBuilding",
                                link: "/party?nav=4-0"
                            }, {
                                name: "nav.news",
                                link: "/news?nav=4-1&anchorPoint=ganboNews"
                            }, {
                                name: "nav.industryInformation",
                                link: "/news?nav=4-2&anchorPoint=industryDynamics"
                            }, {
                                name: "nav.announcement",
                                link: "/news?nav=4-3&anchorPoint=notice"
                            }, {
                                name: "nav.audiovisual",
                                link: "/audioVisual?nav=4-4&catalogCode=st"
                            }]
                        }, {
                            name: "nav.visit",
                            zhName: "参观",
                            link: "/visiteNotice?nav=1-0",
                            subMenu: [{
                                name: "nav.instructionsForVisiting",
                                link: "/visiteNotice?nav=1-0"
                            }, {
                                name: "nav.guidingMap",
                                link: "/navMap?nav=1-1"
                            }, {
                                name: "nav.trafficRoute",
                                link: "/visiteRoute?nav=1-2"
                            }, {
                                name: "nav.eventReservation",
                                link: "/listPage?nav=1-3&catalogCode=hdyy",
                                enHide: !0
                            }]
                        }, {
                            name: "nav.exhibition",
                            zhName: "展览",
                            link: "/regularExhibition?nav=2-0&type=1",
                            subMenu: [{
                                name: "nav.permanentExhibition",
                                link: "/regularExhibition?nav=2-0&type=1"
                            }, {
                                name: "nav.thematiczExhibition",
                                link: "/regularExhibition?nav=2-1&type=2"
                            }]
                        }, {
                            name: "nav.collection",
                            zhName: "藏品",
                            link: "/collection?nav=3-0",
                            subMenu: [{
                                name: "nav.keyCulturalRelics",
                                link: "/collection?nav=3-0&anchorPoint=culturl"
                            }, {
                                name: "nav.allCulturalRelics",
                                link: "/collectionList?nav=3-1"
                            }]
                        }, {
                            name: "nav.scienceEducation",
                            zhName: "科教",
                            enHide: !0,
                            link: "/scienceEducation?nav=5-0",
                            subMenu: [{
                                name: "nav.academicActivities",
                                link: "/scienceEducation?nav=5-0&anchorPoint=academicActivities"
                            }, {
                                name: "nav.academicAchievements",
                                link: "/scienceEducation?nav=5-1&anchorPoint=academicAchievements"
                            }]
                        }, {
                            name: "nav.socialEducation",
                            zhName: "社教",
                            enHide: !0,
                            link: "/socialEducation?nav=6-0",
                            subMenu: [{
                                name: "nav.youthEducation",
                                link: "/socialEducation?nav=6-0&anchorPoint=youthEducation"
                            }, {
                                name: "nav.mobileMuseum",
                                link: "/socialEducation?nav=6-1&anchorPoint=mobileMuseum"
                            }]
                        }, {
                            name: "nav.culturalAndCreativeIndustries",
                            zhName: "文创",
                            enHide: !0,
                            link: "/culturalProduct?nav=7-0",
                            subMenu: [{
                                name: "nav.culturalAndCreativeProducts",
                                link: "/culturalProduct?nav=7-0"
                            }]
                        }, {
                            name: "nav.about",
                            zhName: "关于",
                            link: "/about?nav=8-0",
                            subMenu: [{
                                name: "nav.museumProfile",
                                link: "/about?nav=8-0&anchorPoint=introduce"
                            }, {
                                name: "nav.informationDisclosure",
                                link: "/about?nav=8-1&anchorPoint=infoPublic"
                            }, {
                                name: "nav.institutionalSetup",
                                link: "/about?nav=8-2&anchorPoint=institutional"
                            }, {
                                name: "nav.expert",
                                link: "/about?nav=8-3&anchorPoint=expert"
                            }]
                        }]
                    }
                },
                computed: {
                    menu() {
                        const e = {
                            name: "nav.museumProfile",
                            link: "/enDetails?nav=8-0"
                        }
                          , t = JSON.parse(JSON.stringify(this.menuList));
                        return "en" === this.$i18n.locale && t.map((t=>{
                            "nav.about" === t.name && (t.link = "/enDetails?nav=8-0",
                            t.subMenu = [e]),
                            "nav.visit" === t.name && (t.subMenu = t.subMenu.filter((e=>!0 !== e.enHide)))
                        }
                        )),
                        t
                    }
                },
                methods: {
                    toPage(e) {
                        e && e != this.$route.fullPath && this.$router.push(e)
                    },
                    gotoSearch() {
                        this.$router.push({
                            path: "/search",
                            query: {
                                nav: "0-0"
                            }
                        })
                    },
                    changeLang(e) {
                        this.$i18n.locale = e,
                        localStorage.getItem("language") && localStorage.getItem("language") == e || (localStorage.setItem("language", e),
                        "home" == this.$route.name ? window.location.reload(!0) : this.$router.push({
                            path: "/home"
                        }))
                    },
                    toAnchorPoint(e) {
                        this.$nextTick((()=>{
                            if (e.query?.anchorPoint) {
                                const t = e.query.anchorPoint
                                  , i = document.getElementById(t);
                                i && window.scrollTo({
                                    top: i.offsetTop,
                                    behavior: "smooth"
                                })
                            }
                        }
                        ))
                    }
                },
                watch: {
                    $route(e, t) {
                        if (this.headerFixed = "home" == e.name,
                        "welcome" != e.name) {
                            if (e.query.nav) {
                                const t = e.query.nav.split("-");
                                this.menuActive = t[0] ? this.relationshipTable["nav" + t[0]] : 0,
                                this.subMenuActive = t[1] ? t[1] : -1
                            } else
                                this.menuActive = 0,
                                this.subMenuActive = -1;
                            this.toAnchorPoint(e)
                        } else
                            this.menuActive = -1
                    }
                }
            }
              , B = I
              , P = (0,
            l.Z)(B, E, y, !1, null, "a0035a06", null)
              , k = P.exports
              , H = function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    staticClass: "h5-nav",
                    class: {
                        "nav-bg": "h5Home" !== e.$route.name
                    }
                }, [t("div", {
                    staticClass: "nav"
                }, ["h5Home" !== e.$route.name ? t("div", {
                    staticClass: "nav-1",
                    on: {
                        click: e.goBack
                    }
                }) : e._e(), t("div", {
                    staticClass: "nav-2",
                    on: {
                        click: e.goLeftTab
                    }
                }), "h5Home" !== e.$route.name ? t("div", {
                    staticClass: "nav-3",
                    on: {
                        click: e.goHome
                    }
                }) : e._e()]), t("div", {
                    staticClass: "nav-4"
                }), e.showMenu ? t("leftTab", {
                    attrs: {
                        tabList: e.tabList,
                        currentIndex: e.menuIndex
                    },
                    on: {
                        handleTab: e.handleTab,
                        close: e.close
                    }
                }) : e._e()], 1)
            }
              , T = []
              , M = i(69151)
              , N = (i(54926),
            {
                components: {
                    leftTab: M.Z
                },
                data() {
                    return {
                        showMenu: !1,
                        tabList: [{
                            title: "参观",
                            path: "/h5VisiteNotice"
                        }, {
                            title: "藏品",
                            path: "/h5Collect"
                        }, {
                            title: "展览",
                            path: "/h5Exhibition"
                        }, {
                            title: "关于",
                            path: "/h5Synopsis"
                        }],
                        menuIndex: 0
                    }
                },
                watch: {
                    $route: {
                        handler: function(e, t) {
                            !1 !== e.meta?.selectNav ? this.tabList.forEach(((t,i)=>{
                                t.path === e.path && (this.menuIndex = i)
                            }
                            )) : this.menuIndex = -1
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    goBack() {
                        "h5Home" !== this.$route.name ? this.$router.go(-1) : console.log("已在h5Home页面，不再向上一级页面跳转")
                    },
                    goLeftTab() {
                        this.showMenu = !0
                    },
                    goHome() {
                        this.$router.push("/h5Home")
                    },
                    handleTab(e) {
                        this.$router.push(this.tabList[e].path),
                        this.showMenu = !1
                    },
                    close() {
                        this.showMenu = !1
                    }
                }
            })
              , G = N
              , L = (0,
            l.Z)(G, H, T, !1, null, "05f92244", null)
              , S = L.exports
              , D = function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.footerShow || e.isHome,
                        expression: "footerShow || isHome"
                    }],
                    staticClass: "footer-container",
                    class: e.isHome ? "home" : ""
                }, [t("div", {
                    staticClass: "line"
                }), t("div", {
                    staticClass: "footer-wrap"
                }, [t("div", {
                    staticClass: "visits"
                }, [t("div", {
                    staticClass: "label"
                }, [e._v(e._s(e.$t("footer.WebsiteVisits")))]), t("div", {
                    staticClass: "nums"
                }, e._l(e.num, (function(i, n) {
                    return t("div", {
                        key: n,
                        staticClass: "item"
                    }, [e._v(e._s(i))])
                }
                )), 0)]), t("div", {
                    staticClass: "info-box"
                }, [t("div", {
                    staticClass: "label"
                }, [e._v(e._s(e.$t("footer.Links")) + "："), t("a", {
                    attrs: {
                        href: "http://www.ncha.gov.cn",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.CulturalRelicsBureau")))]), t("a", {
                    attrs: {
                        href: "https://wlt.gansu.gov.cn/",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.GansuDepartment")))]), t("a", {
                    attrs: {
                        href: "https://wwj.gansu.gov.cn/",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.GansuProvincialBureauofCulturalRelics")))]), t("a", {
                    attrs: {
                        href: "https://www.mgk.org.cn",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.DunhuangAcademy")))]), t("a", {
                    attrs: {
                        href: "https://mjssk.cn",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.MaiJiShan")))])]), t("div", {
                    staticClass: "info"
                }, [e._v(" Copyright @ 2018-2029      " + e._s(e.$t("footer.GansuProvincialMuseum")) + " " + e._s(e.$t("footer.Copyright")) + "     备案号："), t("a", {
                    attrs: {
                        href: "https://beian.miit.gov.cn",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.ICPPreparation")))]), e._v("   "), t("a", {
                    attrs: {
                        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62010302000972",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("footer.GangongNetworkSecurity")) + " " + e._s(e.$t("footer.number")))])])]), e._m(0)])])
            }
              , Q = [function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    staticClass: "right"
                }, [t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(94653),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(81651),
                        alt: ""
                    }
                })])]), t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(44473),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(90749),
                        alt: ""
                    }
                })])]), t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(63191),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(80212),
                        alt: ""
                    }
                })])]), t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(812),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(22489),
                        alt: ""
                    }
                })])])])
            }
            ]
              , F = i(47184)
              , Y = {
                name: "Footer",
                props: {
                    isHome: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        footerShow: !1,
                        num: []
                    }
                },
                watch: {
                    $route(e, t) {
                        "welcome" == e.name || "home" == e.name ? this.footerShow = !1 : this.footerShow = !0
                    }
                },
                mounted() {
                    (0,
                    F.A_)("/public/news/access").then((e=>{
                        this.num = e.data ? e.data.toString().split("") : ["0"]
                    }
                    ))
                }
            }
              , V = Y
              , z = (0,
            l.Z)(V, D, Q, !1, null, "492c1f4d", null)
              , j = z.exports
              , O = function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.footerShow || e.isHome,
                        expression: "footerShow || isHome"
                    }],
                    staticClass: "footer-container",
                    class: e.isHome ? "home" : ""
                }, [t("div", {
                    staticClass: "footer-wrap"
                }, [t("div", {
                    staticClass: "visits"
                }, [t("div", {
                    staticClass: "nums"
                }, e._l(e.num, (function(i, n) {
                    return t("div", {
                        key: n,
                        staticClass: "item"
                    }, [e._v(e._s(i))])
                }
                )), 0), t("div", {
                    staticClass: "label"
                }, [e._v("网站访问量")])]), e._m(0), e._m(1)])])
            }
              , R = [function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    staticClass: "right"
                }, [t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(94653),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "text"
                }, [e._v("公众号")]), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(81651),
                        alt: ""
                    }
                })])]), t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(44473),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "text"
                }, [e._v("微博")]), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(90749),
                        alt: ""
                    }
                })])]), t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(63191),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "text"
                }, [e._v("抖音")]), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(80212),
                        alt: ""
                    }
                })])]), t("div", {
                    staticClass: "item"
                }, [t("img", {
                    staticClass: "icon",
                    attrs: {
                        src: i(812),
                        alt: ""
                    }
                }), t("div", {
                    staticClass: "text"
                }, [e._v("小红书")]), t("div", {
                    staticClass: "code-box"
                }, [t("img", {
                    attrs: {
                        src: i(22489),
                        alt: ""
                    }
                })])])])
            }
            , function() {
                var e = this
                  , t = e._self._c;
                return t("div", {
                    staticClass: "info-box"
                }, [t("div", {
                    staticClass: "label"
                }, [t("p", [e._v(" 友情链接 ")]), t("a", {
                    attrs: {
                        href: "http://www.ncha.gov.cn",
                        target: "_blank"
                    }
                }, [e._v("国家文物局")]), t("a", {
                    attrs: {
                        href: "https://wlt.gansu.gov.cn/",
                        target: "_blank"
                    }
                }, [e._v("甘肃省文化和旅游厅")]), t("a", {
                    attrs: {
                        href: "https://wwj.gansu.gov.cn/",
                        target: "_blank"
                    }
                }, [e._v("甘肃省文物局")]), t("a", {
                    attrs: {
                        href: "https://www.mgk.org.cn",
                        target: "_blank"
                    }
                }, [e._v("敦煌研究院")]), t("a", {
                    attrs: {
                        href: "https://mjssk.cn",
                        target: "_blank"
                    }
                }, [e._v("麦积山石窟艺术研究所")])]), t("div", {
                    staticClass: "info"
                }, [e._v(" Copyright @ 2018-2029      甘肃省博物馆 版权所有     备案号："), t("a", {
                    attrs: {
                        href: "https://beian.miit.gov.cn",
                        target: "_blank"
                    }
                }, [e._v("陇ICP备12000579号")]), e._v("   "), t("a", {
                    attrs: {
                        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62010302000972",
                        target: "_blank"
                    }
                }, [e._v("甘公网安备 62010302000972号")])])])
            }
            ]
              , Z = {
                name: "Footer",
                props: {
                    isHome: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        footerShow: !1,
                        num: []
                    }
                },
                watch: {
                    $route(e, t) {
                        "welcome" == e.name || "home" == e.name ? this.footerShow = !1 : this.footerShow = !0
                    }
                },
                mounted() {
                    (0,
                    F.A_)("/public/news/access").then((e=>{
                        this.num = e.data ? e.data.toString().split("") : ["0"]
                    }
                    ))
                }
            }
              , q = Z
              , X = (0,
            l.Z)(q, O, R, !1, null, "8f8d27a2", null)
              , K = X.exports
              , W = function() {
                var e = this
                  , t = e._self._c;
                return t("nav", [t("ul", {
                    staticClass: "pagination"
                }, [e.showBtn ? t("li", {
                    class: {
                        disabled: 1 == e.current
                    }
                }, [t("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            return e.setCurrent(e.current - 1)
                        }
                    }
                }, [e._v(" « ")])]) : e._e(), e.showBtn ? t("li", {
                    class: {
                        disabled: 1 == e.current
                    }
                }, [t("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            return e.setCurrent(1)
                        }
                    }
                }, [e._v(" 首页 ")])]) : e._e(), e._l(e.grouplist, (function(i, n) {
                    return t("li", {
                        key: n,
                        class: {
                            active: e.current == i.val
                        }
                    }, [t("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(t) {
                                return e.setCurrent(i.val)
                            }
                        }
                    }, [e._v(" " + e._s(i.text) + " ")])])
                }
                )), e.showBtn ? t("li", {
                    class: {
                        disabled: e.current == e.page
                    }
                }, [t("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            return e.setCurrent(e.page)
                        }
                    }
                }, [e._v(" 尾页 ")])]) : e._e(), e.showBtn ? t("li", {
                    class: {
                        disabled: e.current == e.page
                    }
                }, [t("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            return e.setCurrent(e.current + 1)
                        }
                    }
                }, [e._v(" »")])]) : e._e(), e.showBtn ? t("li", {
                    staticClass: "input-box"
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.inputNumber,
                        expression: "inputNumber"
                    }],
                    attrs: {
                        type: "text",
                        autocomplete: "off",
                        spellcheck: "false"
                    },
                    domProps: {
                        value: e.inputNumber
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.inputNumber = t.target.value)
                        }
                    }
                })]) : e._e(), e.showBtn ? t("li", {
                    staticClass: "confirm",
                    on: {
                        click: e.goToPage
                    }
                }, [e._v("确认")]) : e._e()], 2)])
            }
              , U = []
              , J = {
                data() {
                    return {
                        current: this.currentPage,
                        inputNumber: ""
                    }
                },
                props: {
                    total: {
                        type: Number,
                        default: 0
                    },
                    pageSize: {
                        type: Number,
                        default: 10
                    },
                    currentPage: {
                        type: Number,
                        default: 1
                    },
                    pagegroup: {
                        type: Number,
                        default: 5
                    }
                },
                watch: {
                    currentPage: function(e) {
                        this.current = e
                    }
                },
                computed: {
                    showBtn: function() {
                        return this.page > this.pagegroup
                    },
                    page: function() {
                        return Math.ceil(this.total / this.pageSize)
                    },
                    grouplist: function() {
                        var e = this.page
                          , t = []
                          , i = []
                          , n = Math.floor(this.pagegroup / 2)
                          , a = this.current;
                        if (e <= this.pagegroup) {
                            while (e--)
                                t.push({
                                    text: this.page - e,
                                    val: this.page - e
                                });
                            return t
                        }
                        while (e--)
                            t.push(this.page - e);
                        var o = t.indexOf(a);
                        o < n && (a = a + n - o),
                        this.current > this.page - n && (a = this.page - n),
                        t = t.splice(a - n - 1, this.pagegroup);
                        do {
                            var s = t.shift();
                            i.push({
                                text: s,
                                val: s
                            })
                        } while (t.length);
                        return this.page > this.pagegroup && (this.current > n + 1 && i.unshift({
                            text: "...",
                            val: i[0].val - 1
                        }),
                        this.current < this.page - n && i.push({
                            text: "...",
                            val: i[i.length - 1].val + 1
                        })),
                        i
                    }
                },
                methods: {
                    setCurrent: function(e) {
                        this.current != e && e > 0 && e < this.page + 1 && (this.current = e,
                        this.$emit("pagechange", this.current),
                        this.inputNumber = "")
                    },
                    goToPage: function() {
                        /^[1-9]\d*$/.test(this.inputNumber) ? (this.inputNumber > this.page && (this.inputNumber = this.page),
                        this.inputNumber = parseInt(this.inputNumber),
                        this.inputNumber && this.setCurrent(this.inputNumber)) : this.inputNumber = ""
                    }
                }
            }
              , _ = J
              , $ = (0,
            l.Z)(_, W, U, !1, null, null, null)
              , ee = $.exports
              , te = i(13378)
              , ie = i(76018)
              , ne = i(56605)
              , ae = i(81458)
              , oe = i(90284)
              , se = i(94958);
            n.ZP.use(ne.Z),
            n.ZP.use(ae.Z),
            n.ZP.use(oe.Z),
            n.ZP.use(se.Z);
            i(5110);
            var re = i(33387);
            n.ZP.config.productionTip = !1,
            n.ZP.use(x.Z),
            n.ZP.component("Header", k),
            n.ZP.component("Footer", j),
            n.ZP.component("H5Footer", K),
            n.ZP.component("H5Nav", S),
            n.ZP.component("Page", ee),
            n.ZP.use(re.Z),
            n.ZP.prototype.fileBaseUrl = "http://www.gansumuseum.com/sccp-file/",
            n.ZP.use(ie.Z);
            const le = new ie.Z({
                locale: localStorage.getItem("language") || "zh",
                messages: {
                    zh: i(91958),
                    en: i(29653)
                }
            });
            console.log(le.locale),
            n.ZP.prototype.H5CONSTANT = te.Z["zh"],
            new n.ZP({
                i18n: le,
                router: A,
                store: w,
                render: e=>e(u)
            }).$mount("#app")
        },
        22675: function(e) {
            e.exports = "data:image/png;base64,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"
        },
        80212: function(e, t, i) {
            e.exports = i.p + "img/dy_code.403ab780.png"
        },
        94653: function(e, t, i) {
            e.exports = i.p + "img/footer_01.26a61662.png"
        },
        44473: function(e, t, i) {
            e.exports = i.p + "img/footer_02.37d30cb8.png"
        },
        63191: function(e) {
            e.exports = "data:image/png;base64,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"
        },
        812: function(e, t, i) {
            e.exports = i.p + "img/footer_04.78438f78.png"
        },
        14464: function(e, t, i) {
            e.exports = i.p + "img/logo.731344db.png"
        },
        90749: function(e, t, i) {
            e.exports = i.p + "img/wb_code.f65112f9.png"
        },
        81651: function(e, t, i) {
            e.exports = i.p + "img/wx_code.1f5d65a2.png"
        },
        22489: function(e) {
            e.exports = "data:image/png;base64,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"
        },
        29653: function(e) {
            e.exports = JSON.parse('{"nav":{"home":"Home","visit":"Visit","exhibition":"Exhibition","collection":"Collection","realTimeInfo":"资讯","scienceEducation":"研究","socialEducation":"社教","culturalAndCreativeIndustries":"文创","about":"About","guidingMap":"Guiding Map","trafficRoute":"Transportation Routes","permanentExhibition":"Current Exhibitions","thematiczExhibition":"Thematic Exhibition","keyCulturalRelics":"Highlights","allCulturalRelics":"Collection","museumProfile":"Introduction","instructionsForVisiting":"Instructions For Visiting","partyBuilding":"党建","news":"本馆新闻","industryInformation":"行业资讯","announcement":"公告","audiovisual":"视听","academicActivities":"学术活动","academicAchievements":"学术成果","youthEducation":"青少年教育","mobileMuseum":"流动博物馆","culturalAndCreativeProducts":"文创产品","informationDisclosure":"博物馆信息公开","institutionalSetup":"机构设置","eventReservation":"Event Reservation","travelTips":"Travel Tips","expert":"专家学者"},"welcome":"Click to explore Gansu Provincial Museum cultural relics","home":{"title":"Home","description":"This is the home page.","instructionsForVisiting":"Visiting Information","opening":"Opening","endAppointment":"End of Reservations","permanentExhibition":"Permanent Exhibition","thematiczExhibition":"Thematic Exhibition","stopEnteringTheMuseum":"Suspension of Entry","closed":"Closure","reservation":"Free Reservation for Gansu Provincial Museum Visit","message":"Open from Tuesday to Sunday, Closed on Mondays (except holidays)","scanCode":"Scan to Reserve","explain":"Explain","traffic":"Guide","onlineGuiding":"Online Guiding","more":"More","MainBuildingNews":"本馆新闻","notice":"通知公告","IndustryInformation":"行业资讯","ScienceAndEducation":"研究","SocialEducation":"社教","SlidetoViewMore":"Slide to view more"},"visit":{"openingHours":"Opening","time01":"Tuesday to Sunday","time02":"End of Reservations","time03":"Suspension of Entry","time04":"Monday","time05":"Closed，except holidays","time06":"09:00-17:00","guidingMap":"Guiding Map","firstFloor":"1F","secondFloor":"2F","thirdFloor":"3F","touristRoutes":"Tourist Routes","anHour":"1h","halfADay":"0.5d","fiveHours":"5h","exhibitionHall1_0":"Art Exhibition Hall","exhibitionHall1_1":"Calligraphy and Painting Exhibition Hall","exhibitionHall1_2":"Academic Lecture Hall","exhibitionHall1_3":"Service Desk","exhibitionHall1_4":"Reception","exhibitionHall1_5":"Temporary Exhibition Hall","exhibitionHall2_0":"Gansu Silk Road Civilization Exhibition Hall","exhibitionHall2_1":"Coffee Shop Lounge Area","exhibitionHall2_2":"Gansu Paleontological Fossil Exhibition Hall","exhibitionHall2_3":"Red Gansu","exhibitionHall2_4":"Key Cultural Relics","exhibitionHall3_0":"Treasures Exhibition Hall","exhibitionHall3_1":"Ancient Pottery Soul—Gansu Colored Pottery Exhibition Hall","exhibitionHall3_2":"VIP Reception Room","exhibitionHall3_3":"Gansu Paleontological Fossil Exhibition Hall","exhibitionHall3_4":"Dignified and Exquisite—Buddhist Art Exhibition","exhibitionHall3_5":"Key Cultural Relics","toile":"Restrooms","elevator":"Wheelchair Accessible Elevator","staircase":"Fire Emergency Exits","relics2_0":"The Galloping Horse Treading on a Flying Swallow","relics2_1":"Tripod-shaped copper lamp","relics2_2":"Five-fold Buddha\'s relics treasure box","relics2_3":"Stegosaurus","relics3_0":"Spinning pointed bottom bottle","relics3_1":"Fish pattern colored pottery bottle","relics3_2":"Head-shaped mouth color pottery bottle","relics3_3":"Silk painting of repay parents\' kindness","relics3_4":"Ancient elephant of Yellow River","code1":"[Gansu Provincial Museum] Ticket Reservation","code2":"[This is Gansu Provincial Museum] Ticket Reservation"},"common":{"serach":"Search","instructionsForVisiting":"Instructions For Visiting","trafficRoute":"Transportation Routes"},"regularExhibition":{"WatchNow":"Exhibition Introductions","vr":"VR Panorama","Thematic":"Digital Cloud Exhibition"},"colloection":{"allCulturalRelics":"All Cultural Relics"},"footer":{"WebsiteVisits":"网站访问量","Links":"友情链接","CulturalRelicsBureau":"国家文物局","GansuDepartment":"甘肃省文化和旅游厅","GansuProvincialBureauofCulturalRelics":"甘肃省文物局","DunhuangAcademy":"敦煌研究院","MaiJiShan":"麦积山石窟艺术研究所","GansuProvincialMuseum":"甘肃省博物馆","Copyright":"版权所有","ICPPreparation":"陇ICP备12000579号","GangongNetworkSecurity":"甘公网安备","number":"62010302000972号","technicalSupport":"技术支持：中电万维信息技术有限公司"},"collectionList":[{"name":"Bronze Galloping Horse","brief":"From the Han Dynasty, unearthed from the Han Tomb at Leitai in Wuwei City. The horse stands at a total height of 34.5 centimeters, with a length of 45 centimeters, a width of 13.1 centimeters, and weighs 7.3 kilograms. The sculpture depicts a vigorous and exquisite posture, with the horse\'s head held high and neighing, galloping swiftly. The sculptor captured the moment when the galloping horse lifts three hooves off the ground while one hoof extends forward, resembling a flying eagle. This composition makes the flying eagle turn its head in astonishment, enhancing the horse\'s sense of rapid forward motion."},{"name":"Painted Pottery Vase with Giant-Salamander Design","brief":"From the Shilingxia type of the Yangshao Culture (approximately 5,200 years ago), unearthed from Xiping, Ganggu County. The vase stands 38.4 centimeters tall with a mouth diameter of 7 centimeters and a base diameter of 12 centimeters. It features a narrow mouth, long neck, flat bottom, and double ears on the upper abdomen, with a ring of stacked lines around the neck. The belly of the vase is painted with a black salamander motif resembling a human head, with two short arms extending outward. The body is adorned with diagonal grid patterns, and the tail is curved."},{"name":"Glass Lotus-Shaped Calix and Pad","brief":"From the Yuan Dynasty, unearthed from the tomb of the Wang Shixian family in Zhang County. The cup stands 4.9 centimeters tall with a mouth diameter of 8.9 centimeters and a base diameter of 3.4 centimeters. The calix and pad are 1.2 centimeters tall with a mouth diameter of 15.2 centimeters. Made of transparent blue glass, the calix and pad contain air bubbles within its body."},{"name":"Painted Pottery Vase with Human-head-shaped Mouth","brief":"From the Miaodigou type of the Yangshao Culture (approximately 5,500 years ago), unearthed from the Dadiwan site in Qin\'an County. The vase stands 32.3 centimeters tall with a mouth diameter of 4 centimeters and a base diameter of 6.8 centimeters. The mouth of the vase is sculpted in the shape of a human head, with flowing hair on the sides and back, and a neat row of short hair on the forehead."},{"name":"“Postman Map” Mural Brick","brief":"From the Wei and Jin Dynasties, excavated from Tomb No. 5 of the Wei and Jin Period in Jiayuguan City, the brick measures 35 centimeters in length and 17 centimeters in width. The mural depicts a messenger wearing a black headdress and a robe with black borders, holding a dispatch in his left hand, swiftly riding a horse. The dispatch is a token used when passing through checkpoints and relay stations. The horse\'s hooves are lifted as it gallops across the roads of the Gobi Desert oasis."},{"name":"Red Pottery Human-Faced Statue","brief":"Belonging to the Shilingxia type of the Yangshao Culture (approximately 5,200 years ago), unearthed from Chaijiaping in Tianshui City. The artifact measures 15.3 centimeters in height and 14.6 centimeters in width. The human face depicted has a broad forehead and wide cheeks, slightly raised eyebrows, with hollowed-out eyes and mouth forming horizontal bars. The nose is triangular, and there is a perforation in each earlobe."},{"name":"Wooden Dancing Figurine","brief":"From the Han Dynasty, unearthed from the Han Tomb at Mozuizi in Wuwei City. The figurine measures 16.3 centimeters in height and 6.2 centimeters in width at the base. The wooden figurine is painted with black and red colors to depict facial features and clothing edges. It is shown in a dancing posture, with hair tied up, wearing a long robe. One arm is placed across the chest, while the other arm is raised horizontally, and the head is turned to the side."}]}')
        },
        91958: function(e) {
            e.exports = JSON.parse('{"nav":{"home":"首页","visit":"参观","exhibition":"展览","collection":"藏品","realTimeInfo":"资讯","scienceEducation":"研究","socialEducation":"社教","culturalAndCreativeIndustries":"文创","about":"关于","guidingMap":"导览地图","trafficRoute":"交通路线","permanentExhibition":"基本陈列","thematiczExhibition":"临时展览","keyCulturalRelics":"精品","allCulturalRelics":"典藏","museumProfile":"博物馆简介","instructionsForVisiting":"参观须知","partyBuilding":"党建","news":"本馆新闻","industryInformation":"行业资讯","announcement":"公告","audiovisual":"视听","academicActivities":"学术活动","academicAchievements":"学术成果","youthEducation":"青少年教育","mobileMuseum":"流动博物馆","culturalAndCreativeProducts":"文创产品","informationDisclosure":"博物馆信息公开","institutionalSetup":"机构设置","eventReservation":"活动预约","travelTips":"游览攻略","expert":"专家学者"},"welcome":"点击探寻甘博文物","home":{"title":"首页","description":"这是首页.","instructionsForVisiting":"参观须知","opening":"开馆","endAppointment":"结束预约","permanentExhibition":"常设展览","thematiczExhibition":"临时展览","stopEnteringTheMuseum":"暂停进入场馆","closed":"闭馆","reservation":"甘肃省博物馆免费预约参观","message":"每周二至周天对外开放，周一闭馆（节假日除外）","scanCode":"扫码预约","explain":"讲解","traffic":"攻略","onlineGuiding":"在线导览","more":"更多","MainBuildingNews":"本馆新闻","notice":"通知公告","IndustryInformation":"行业资讯","ScienceAndEducation":"研究","SocialEducation":"社教","SlidetoViewMore":"滑动查看更多"},"visit":{"openingHours":"开放时间","time01":"周二至周日","time02":"停止预约","time03":"停止入馆","time04":"周一","time05":"闭馆，法定节假日除外","time06":"09:00-17:00","guidingMap":"导览地图","firstFloor":"一层 ( 1F )","secondFloor":"二层 ( 2F )","thirdFloor":"三层 ( 3F )","touristRoutes":"游览路线","anHour":"一小时","halfADay":"半天","fiveHours":"五小时","exhibitionHall1_0":"艺术品展厅","exhibitionHall1_1":"书画展厅","exhibitionHall1_2":"学术报告厅","exhibitionHall1_3":"贵宾接待室","exhibitionHall1_4":"服务台","exhibitionHall1_5":"临时展厅","exhibitionHall2_0":"甘肃丝绸之路文明展厅","exhibitionHall2_1":"咖啡厅休闲区","exhibitionHall2_2":"甘肃古生物化石展厅","exhibitionHall2_3":"红色甘肃","exhibitionHall2_4":"重点文物","exhibitionHall3_0":"珍品展厅","exhibitionHall3_1":"古韵陶魂——甘肃彩陶展厅","exhibitionHall3_2":"贵宾接待室","exhibitionHall3_3":"甘肃古生物化石展厅","exhibitionHall3_4":"庄严妙相——佛教艺术展","exhibitionHall3_5":"重点文物","toile":"卫生间","elevator":"无障碍电梯","staircase":"消防应急通道","relics2_0":"铜奔马","relics2_1":"鼎型铜行灯","relics2_2":"五重舍利宝函","relics2_3":"剑龙","relics3_0":"旋纹尖底瓶","relics3_1":"鲵鱼纹彩陶瓶","relics3_2":"人头型器口彩陶瓶","relics3_3":"报父母恩重经变","relics3_4":"黄河古象","code1":"【甘肃省博物馆】预约门票","code2":"【这里是甘博】预约门票"},"common":{"serach":"搜索","instructionsForVisiting":"参观须知","trafficRoute":"交通路线"},"regularExhibition":{"WatchNow":"展览简介","vr":"VR 全景","Thematic":"数字云展"},"colloection":{"allCulturalRelics":"藏品总目"},"footer":{"WebsiteVisits":"网站访问量","Links":"友情链接","CulturalRelicsBureau":"国家文物局","GansuDepartment":"甘肃省文化和旅游厅","GansuProvincialBureauofCulturalRelics":"甘肃省文物局","DunhuangAcademy":"敦煌研究院","MaiJiShan":"麦积山石窟艺术研究所","GansuProvincialMuseum":"甘肃省博物馆","Copyright":"版权所有","ICPPreparation":"陇ICP备12000579号","GangongNetworkSecurity":"甘公网安备","number":"62010302000972号","technicalSupport":"技术支持：中电万维信息技术有限公司"},"collectionList":[{"name":"铜奔马","brief":"汉代，武威市雷台汉墓出土，通高34.5厘米，长45厘米，宽13.1厘米，重7.3千克。造型矫健精美，作昂首嘶鸣，疾足奔驰状。塑造者摄取了奔马三足腾空、一足超掠飞鹰的刹那瞬间。让飞鹰回首惊顾，更增强奔马急速向前的动势。其全身的着力点集注于超越飞鹰的那一足上，准确地掌握了力学的平衡原理，具有卓越的工艺技术水平。铜奔马是按照良马式的标准去塑造的，集西域马和蒙古马等马钟的优点于一身，特别是表现出河西走马秉赋的对侧步特征。构思巧妙，艺术造型精炼，铸铜工艺卓越。铜奔马被认为是东、西方文化交往的使者和象征，被视为中国旅游的标志。"},{"name":"鲵鱼纹彩陶瓶","brief":"仰韶文化石岭下类型（距今5200年前），甘谷县西坪出土，高38.4厘米，口径7厘米，底径12厘米。小口、长颈、平底、腹上部有双耳，颈部有堆纹一圈。瓶腹绘黑色人首形的鲵鱼图样，一双短臂向外伸出，全身为斜格纹，尾部弯曲。"},{"name":"莲花形玻璃托盏","brief":"元代，漳县汪世显家族墓出土，盏高4.9厘米，口径8.9厘米，底径3.4厘米；盏托高1.2厘米，口径15.2厘米。玻璃托盏为普蓝色玻璃制成，半透明，胎内含气泡。盏为七瓣莲花形，饼形足；托口为平口，边沿呈八瓣莲花形，平底，腹壁呈正八角形。托盏造型优美，色彩艳丽，工艺精湛，是迄今出土最完整的一套元代玻璃托盏。"},{"name":"人头形器口彩陶瓶","brief":"仰韶文化庙底沟类型（距今5500年前），秦安县大地湾遗址出土，高32.3厘米，口径4厘米，底径6.8厘米。瓶口呈圆雕的人头像，头的左右和后部都是披发，前额也垂着一排整齐的短发。眼和嘴都雕成孔洞，两耳皆有一小穿孔，是垂系饰物的耳孔。陶瓶的腹部以黑彩画三横排大致相同的弧线三角纹和斜线组成的二方连续图案。"},{"name":"“驿使图”壁画砖","brief":"魏晋，嘉峪关市魏晋5号墓出土，砖长35厘米，宽17厘米。砖上绘一信使，头戴黑帻，着皂缘领袖中衣，左手持棨传文书，跃马疾驰。棨传为通过关卡、驿站时的信物。驿马四蹄腾空，奔驰在戈壁绿洲的道路上。这块写实砖画，在我国邮政史上具有重大意义。20世纪80年代初，在世界万国邮政博览会上，此画曾作为中国邮政标志物。为纪念中华全国集邮联合会第一次代表大会的召开，邮电部于1982年8月25日发行《驿使图》纪念邮票（小型张）一枚。"},{"name":"红陶人面像","brief":"仰韶文化石岭下类型（距今5200年前），天水市柴家坪出土，残高15.3厘米，宽14.6厘米。人像高颧阔面，眉稍隆起，嘴、眼镂空成横条状，鼻呈三角形，两耳垂各有一穿孔。"},{"name":"木舞俑","brief":"汉代，武威市磨嘴子汉墓出土，舞俑高16.3厘米，底宽6.2厘米。木俑以黑、红色彩绘五官和衣服领缘，作舞蹈状，束发，身着长袍，一臂放于胸前，另一臂平上伸，头侧向。"}]}')
        }
    }
      , t = {};
    function i(n) {
        var a = t[n];
        if (void 0 !== a)
            return a.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.exports
    }
    i.m = e,
    function() {
        var e = [];
        i.O = function(t, n, a, o) {
            if (!n) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    n = e[u][0],
                    a = e[u][1],
                    o = e[u][2];
                    for (var r = !0, l = 0; l < n.length; l++)
                        (!1 & o || s >= o) && Object.keys(i.O).every((function(e) {
                            return i.O[e](n[l])
                        }
                        )) ? n.splice(l--, 1) : (r = !1,
                        o < s && (s = o));
                    if (r) {
                        e.splice(u--, 1);
                        var c = a();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
                e[u] = e[u - 1];
            e[u] = [n, a, o]
        }
    }(),
    function() {
        i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return i.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        i.d = function(e, t) {
            for (var n in t)
                i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
    }(),
    function() {
        i.f = {},
        i.e = function(e) {
            return Promise.all(Object.keys(i.f).reduce((function(t, n) {
                return i.f[n](e, t),
                t
            }
            ), []))
        }
    }(),
    function() {
        i.u = function(e) {
            return "js/" + e + "." + {
                3: "0b4bda16",
                8: "1652295a",
                85: "c7e13c28",
                162: "f1900253",
                204: "a35db212",
                235: "80f7a6b7",
                261: "e174bde6",
                264: "9d79a184",
                285: "4622f921",
                307: "aaab9496",
                335: "29e76f43",
                336: "f1b206b8",
                337: "5802ff73",
                355: "2b81b497",
                361: "963f2d4c",
                407: "7c410081",
                446: "8b2b85e2",
                454: "6c51952f",
                477: "f1ffd5ec",
                517: "3a53f0e0",
                606: "f308b608",
                624: "d5aff341",
                625: "29a74fd9",
                653: "e536b60d",
                675: "e40943fa",
                689: "347450df",
                702: "81992fe3",
                710: "8bb9baa4",
                722: "9a0c7eb2",
                785: "8c7775ce",
                797: "ac1fa3ba",
                819: "57069133",
                839: "4453bccf",
                852: "99be1150",
                858: "2ec68e9a",
                860: "0d86f7fb",
                897: "112692a0",
                899: "2fdf5e72",
                903: "5c5f9f97",
                931: "1f241ab4",
                958: "ac8c46de",
                964: "1b31f5c9",
                973: "2ae51adf",
                981: "0ecbf82a"
            }[e] + ".js"
        }
    }(),
    function() {
        i.miniCssF = function(e) {
            return "css/" + e + "." + {
                3: "b08c87be",
                8: "af80e0e1",
                85: "9ceb1a96",
                235: "f8896e75",
                261: "54ff3073",
                285: "cbd905b8",
                307: "499825fb",
                335: "4efc432b",
                336: "ab165f51",
                337: "005d28a3",
                361: "f2e89a04",
                407: "65dd84dd",
                446: "aeeca37e",
                454: "951281de",
                477: "9d162d04",
                517: "65a278b6",
                606: "a29c0e9b",
                624: "330b1e1c",
                625: "a245ec5a",
                653: "eff98747",
                675: "081b37a1",
                689: "8a1a416e",
                702: "fdaac792",
                710: "2708c048",
                722: "093a7300",
                785: "6a760610",
                797: "28174e0d",
                819: "a46fa19d",
                839: "ae8dc710",
                852: "c878950e",
                858: "04683256",
                860: "2cc30a54",
                897: "a05539d5",
                899: "3a0f93a9",
                903: "71b0f920",
                931: "cc52d7a0",
                958: "b8d0af6d",
                964: "a9ba2fca",
                973: "ec641db7",
                981: "64bed296"
            }[e] + ".css"
        }
    }(),
    function() {
        i.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        var e = {}
          , t = "digital-ganbo-website:";
        i.l = function(n, a, o, s) {
            if (e[n])
                e[n].push(a);
            else {
                var r, l;
                if (void 0 !== o)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var h = c[u];
                        if (h.getAttribute("src") == n || h.getAttribute("data-webpack") == t + o) {
                            r = h;
                            break
                        }
                    }
                r || (l = !0,
                r = document.createElement("script"),
                r.charset = "utf-8",
                r.timeout = 120,
                i.nc && r.setAttribute("nonce", i.nc),
                r.setAttribute("data-webpack", t + o),
                r.src = n),
                e[n] = [a];
                var d = function(t, i) {
                    r.onerror = r.onload = null,
                    clearTimeout(m);
                    var a = e[n];
                    if (delete e[n],
                    r.parentNode && r.parentNode.removeChild(r),
                    a && a.forEach((function(e) {
                        return e(i)
                    }
                    )),
                    t)
                        return t(i)
                }
                  , m = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
                r.onerror = d.bind(null, r.onerror),
                r.onload = d.bind(null, r.onload),
                l && document.head.appendChild(r)
            }
        }
    }(),
    function() {
        i.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        i.p = "/"
    }(),
    function() {
        if ("undefined" !== typeof document) {
            var e = function(e, t, i, n, a) {
                var o = document.createElement("link");
                o.rel = "stylesheet",
                o.type = "text/css";
                var s = function(i) {
                    if (o.onerror = o.onload = null,
                    "load" === i.type)
                        n();
                    else {
                        var s = i && ("load" === i.type ? "missing" : i.type)
                          , r = i && i.target && i.target.href || t
                          , l = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                        l.code = "CSS_CHUNK_LOAD_FAILED",
                        l.type = s,
                        l.request = r,
                        o.parentNode && o.parentNode.removeChild(o),
                        a(l)
                    }
                };
                return o.onerror = o.onload = s,
                o.href = t,
                i ? i.parentNode.insertBefore(o, i.nextSibling) : document.head.appendChild(o),
                o
            }
              , t = function(e, t) {
                for (var i = document.getElementsByTagName("link"), n = 0; n < i.length; n++) {
                    var a = i[n]
                      , o = a.getAttribute("data-href") || a.getAttribute("href");
                    if ("stylesheet" === a.rel && (o === e || o === t))
                        return a
                }
                var s = document.getElementsByTagName("style");
                for (n = 0; n < s.length; n++) {
                    a = s[n],
                    o = a.getAttribute("data-href");
                    if (o === e || o === t)
                        return a
                }
            }
              , n = function(n) {
                return new Promise((function(a, o) {
                    var s = i.miniCssF(n)
                      , r = i.p + s;
                    if (t(s, r))
                        return a();
                    e(n, r, null, a, o)
                }
                ))
            }
              , a = {
                143: 0
            };
            i.f.miniCss = function(e, t) {
                var i = {
                    3: 1,
                    8: 1,
                    85: 1,
                    235: 1,
                    261: 1,
                    285: 1,
                    307: 1,
                    335: 1,
                    336: 1,
                    337: 1,
                    361: 1,
                    407: 1,
                    446: 1,
                    454: 1,
                    477: 1,
                    517: 1,
                    606: 1,
                    624: 1,
                    625: 1,
                    653: 1,
                    675: 1,
                    689: 1,
                    702: 1,
                    710: 1,
                    722: 1,
                    785: 1,
                    797: 1,
                    819: 1,
                    839: 1,
                    852: 1,
                    858: 1,
                    860: 1,
                    897: 1,
                    899: 1,
                    903: 1,
                    931: 1,
                    958: 1,
                    964: 1,
                    973: 1,
                    981: 1
                };
                a[e] ? t.push(a[e]) : 0 !== a[e] && i[e] && t.push(a[e] = n(e).then((function() {
                    a[e] = 0
                }
                ), (function(t) {
                    throw delete a[e],
                    t
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            143: 0
        };
        i.f.j = function(t, n) {
            var a = i.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    n.push(a[2]);
                else {
                    var o = new Promise((function(i, n) {
                        a = e[t] = [i, n]
                    }
                    ));
                    n.push(a[2] = o);
                    var s = i.p + i.u(t)
                      , r = new Error
                      , l = function(n) {
                        if (i.o(e, t) && (a = e[t],
                        0 !== a && (e[t] = void 0),
                        a)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , s = n && n.target && n.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")",
                            r.name = "ChunkLoadError",
                            r.type = o,
                            r.request = s,
                            a[1](r)
                        }
                    };
                    i.l(s, l, "chunk-" + t, t)
                }
        }
        ,
        i.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var a, o, s = n[0], r = n[1], l = n[2], c = 0;
            if (s.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (a in r)
                    i.o(r, a) && (i.m[a] = r[a]);
                if (l)
                    var u = l(i)
            }
            for (t && t(n); c < s.length; c++)
                o = s[c],
                i.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return i.O(u)
        }
          , n = self["webpackChunkdigital_ganbo_website"] = self["webpackChunkdigital_ganbo_website"] || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var n = i.O(void 0, [998], (function() {
        return i(83169)
    }
    ));
    n = i.O(n)
}
)();

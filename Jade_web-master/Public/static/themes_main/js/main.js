"use strict";
function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i,
        e
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    )(e)
}
function scrollact(e, t, i, s) {
    s = s || function () { }
        ,
        i = i || function () { }
        ,
        0 < $(e).size() && (t || 0 == t || (t = 5),
            t = $(window).height() * t * .1,
            $(window).scrollTop() + t + 0 >= $(e).offset().top ? $(e).hasClass("showd") || ($(e).addClass("showd"),
                i()) : s($(e)))
}
function tabdiv(i, s, o, n, a, r) {
    o = o || "click",
        n = n || 1,
        a = a || 300,
        r = r || function () { }
        ,
        "object" != _typeof(i) && (i = $(i)),
        "object" != _typeof(s) && (s = $(s)),
        s.each(function (e, t) {
            $(this).attr("idx", e)
        }),
        i.each(function (e, t) {
            $(this).bind(o, function () {
                i.removeClass("now"),
                    $(this).addClass("now"),
                    1 == n && s.filter("[idx!='" + e + "']").stop(!0, !0).hide(),
                    2 == n && s.filter("[idx!='" + e + "']").stop(!0, !0).fadeOut(a),
                    3 == n && (s.filter("[idx!='" + e + "']").removeClass("act"),
                        s.filter("[idx='" + e + "']").addClass("act")),
                    3 != n && (s.filter("[idx='" + e + "']").stop(!0, !0).fadeIn(a, function () { }),
                        r(e))
            })
        }),
        (0 == i.parent().find(".now").size() ? i.eq(0) : i.eq(i.parent().find(".now").index())).trigger(o)
}
function GetRandomNum(e, t) {
    var i = t - e
        , t = Math.random();
    return e + Math.round(t * i)
}
gsap.registerPlugin(InertiaPlugin, CSSRulePlugin, Draggable, ScrollToPlugin, ScrollTrigger, SplitText),
    $.utils = {
        temp: {},
        ua: $.ua,
        is_phone: "mobile" == $.ua.device.type,
        is_tablet: "tablet" == $.ua.device.type,
        is_mobile: void 0 !== $.ua.device.type,
        is_ios: "iOS" == $.ua.os.name,
        is_android: "Android" == $.ua.os.name,
        is_wechat: "WeChat" == $.ua.browser.name,
        is_cochat: "wxwork" == $.ua.ua.match(/WxWork/i),
        is_null: function (e) {
            return null === e
        },
        is_undefined: function (e) {
            return void 0 === e
        },
        is_none: function (e) {
            return this.is_null(e) || this.is_undefined(e) || "" === e || "undefined" === e
        },
        is_true: function (e) {
            return !0 === e || "true" === e
        },
        is_false: function (e) {
            return !1 === e || "false" === e
        },
        is_array: function (e) {
            return e instanceof Array
        },
        is_number: function (e) {
            return (e instanceof Number || "number" == typeof e) && !isNaN(e)
        },
        is_percentage: function (e) {
            return this.is_string(e) && "%" == e.slice(-1)
        },
        is_string: function (e) {
            return (e instanceof String || "string" == typeof e) && !this.is_none(e) && !this.is_true(e) && !this.is_false(e)
        },
        is_function: function (e) {
            return e instanceof Function || "function" == typeof e
        },
        is_boolean: function (e) {
            return e instanceof Boolean || "boolean" == typeof e || this.is_true(e) || this.is_false(e)
        },
        is_jquery: function (e) {
            return e instanceof jQuery
        },
        is_object: function (e) {
            return (e instanceof Object || "object" == _typeof(e)) && !this.is_null(e) && !this.is_jquery(e) && !this.is_array(e) && !this.is_function(e)
        },
        is_dom: function (e) {
            return this.is_object(e) && e instanceof HTMLElement
        },
        fireCallbacks: function (e, t, i) {
            if (t.length)
                for (var s = 0; s < t.length; s++)
                    t[s].apply(e, i)
        },
        objectFitPolyfill: function (e) {
            function t() {
                return e.apply(this, arguments)
            }
            return t.toString = function () {
                return e.toString()
            }
                ,
                t
        }(function () {
            window.objectFitPolyfill && objectFitPolyfill()
        }),
        placeholder: function () {
            $.fn.placeholder && $("input, textarea").placeholder()
        },
        screenScrollbar: function () {
            $("body").append('<div class="scrollbar-rails scrollbar-rails-x"><div class="scrollbar-thumb scrollbar-thumb-x"></div></div><div class="scrollbar-rails scrollbar-rails-y"><div class="scrollbar-thumb scrollbar-thumb-y"></div></div>');
            var t = $(window)
                , i = $("body")
                , s = $(".scrollbar-rails-x")
                , o = $(".scrollbar-thumb-x")
                , n = $(".scrollbar-rails-y")
                , a = $(".scrollbar-thumb-y")
                , r = e()
                , l = !1;
            function e() {
                var e = {
                    contWidth: t.width(),
                    contHeight: t.height(),
                    scrollWidth: i.outerWidth(!0),
                    scrollHeight: i.outerHeight(!0),
                    trackWidth: s.width(),
                    trackHeight: n.height(),
                    barWidth: 0,
                    barHeight: 0,
                    maxX: 0,
                    maxY: 0,
                    curX: i.scrollLeft(),
                    curY: i.scrollTop()
                };
                return e.scrollWidth > e.contWidth ? (e.barWidth = Math.round(e.contWidth / e.scrollWidth * e.trackWidth),
                    e.maxX = e.scrollWidth - e.contWidth) : (e.barWidth = e.trackWidth,
                        e.maxX = 0),
                    e.scrollHeight > e.contHeight ? (e.barHeight = Math.round(e.contHeight / e.scrollHeight * e.trackHeight),
                        e.maxY = e.scrollHeight - e.contHeight) : (e.barHeight = e.trackHeight,
                            e.maxY = 0),
                    o.width(e.barWidth),
                    a.height(e.barHeight),
                    e.rateX = Math.min($.utils.is_number(e.curX / e.maxX) ? e.curX / e.maxX : 0, 1),
                    e.rateY = Math.min($.utils.is_number(e.curY / e.maxY) ? e.curY / e.maxY : 0, 1),
                    0 < e.maxX ? s.removeClass("scrollbar-rails-disable") : s.addClass("scrollbar-rails-disable"),
                    0 < e.maxY ? n.removeClass("scrollbar-rails-disable") : n.addClass("scrollbar-rails-disable"),
                    e
            }
            new ResizeObserver($.debounce(250, function () {
                r = e()
            })).observe(i[0]),
                t.on("scroll", function () {
                    r.curX = t.scrollLeft(),
                        r.curY = t.scrollTop(),
                        r.rateX = Math.min(r.curX / r.maxX, 1),
                        r.rateY = Math.min(r.curY / r.maxY, 1),
                        l || (gsap.to(o, {
                            x: (r.trackWidth - r.barWidth) * r.rateX,
                            duration: .1,
                            overwrite: "auto"
                        }),
                            gsap.to(a, {
                                y: (r.trackHeight - r.barHeight) * r.rateY,
                                duration: .1,
                                overwrite: "auto"
                            }))
                }),
                Draggable.create(o, {
                    type: "x",
                    bounds: s,
                    zIndexBoost: !1,
                    onDrag: function () {
                        var e = this.x / (r.trackWidth - r.barWidth);
                        l = !0,
                            gsap.set(t, {
                                scrollTo: {
                                    x: e * r.maxX
                                }
                            })
                    },
                    onDragEnd: function () {
                        l = !1
                    }
                }),
                Draggable.create(a, {
                    type: "y",
                    bounds: n,
                    zIndexBoost: !1,
                    onDrag: function () {
                        var e = this.y / (r.trackHeight - r.barHeight);
                        l = !0,
                            gsap.set(t, {
                                scrollTo: {
                                    y: e * r.maxY
                                }
                            })
                    },
                    onDragEnd: function () {
                        l = !1
                    }
                })
        },
        scrollFade: function (t) {
            var a = this;
            function e() {
                for (var e = 0; e < t.length; e++)
                    !function (e) {
                        var t = e.elm
                            , i = a.is_string(e.cls) ? e.cls : "x-show"
                            , s = a.is_number(e.range) ? e.range : 0
                            , o = !!a.is_boolean(e.always) && e.always
                            , n = 0;
                        if ($(t).length < 1)
                            return;
                        a.is_function(e.bottom) ? n = e.bottom() : a.is_number(e.bottom) && (n = e.bottom);
                        $("body").height() > $(window).height() + s ? $(window).scrollTop() > s ? $(t).hasClass(i) || $(t).addClass(i) : $(t).hasClass(i) && $(t).removeClass(i) : o && $(t).addClass(i);
                        0 < n && ($(window).scrollTop() > n - $(window).height() ? gsap.to(t, {
                            duration: .2,
                            y: n - $(window).height() - $(window).scrollTop()
                        }) : gsap.to(t, {
                            duration: .2,
                            y: 0
                        }))
                    }(t[e])
            }
            a.is_object(t) && (t = [t]),
                a.is_array(t) && (e(),
                    $(window).on("load resize scroll", e))
        },
        backTop: function (e) {
            $(e).on("click", function () {
                gsap.to(window, {
                    scrollTo: 0
                })
            })
        },
        htmlSize: function (t, i) {
            function e() {
                var e = $(window).width() < i ? i : $(window).width();
                t < e ? $("html").css({
                    "font-size": "100px"
                }) : $("html").css({
                    "font-size": e / t * 100 + "px"
                })
            }
            e(),
                $(window).on("load resize", e)
        },
        contHeight: function () {
            var o = this
                , n = 0 < $(".x-header").size() && $(".x-header") || 0 < $(".x-header2").size() && $(".x-header2") || 0 < $(".x-header3").size() && $(".x-header3") || $("null")
                , a = $(".x-container")
                , r = $(".x-footer")
                , l = !!o.is_none(a.data("pt")) || a.data("pt")
                , c = o.is_none(a.data("mh")) ? "" : a.data("mh")
                , d = o.is_none(a.data("ch")) ? "" : a.data("ch")
                , u = o.is_none(a.data("sh")) ? "" : a.data("sh")
                , f = o.is_none(a.data("wh")) ? "" : a.data("wh");
            function e() {
                var e = $(window).height()
                    , t = n.outerHeight()
                    , i = r.outerHeight()
                    , s = e - t - i;
                "fixed" === n.css("position") || "absolute" === n.css("position") ? (o.is_true(l) && a.css({
                    "padding-top": t + "px"
                }),
                    s += t,
                    a.css({
                        "min-height": s + "px"
                    })) : a.css({
                        "min-height": s + "px",
                        "padding-top": 0
                    }),
                    $(c).each(function () {
                        $(this).css({
                            "min-height": s + "px"
                        })
                    }),
                    $(d).each(function () {
                        $(this).css({
                            height: s + "px"
                        })
                    }),
                    $(u).each(function () {
                        $(this).css({
                            height: e - t + "px"
                        })
                    }),
                    $(f).each(function () {
                        $(this).css({
                            height: e + "px"
                        })
                    })
            }
            e(),
                $(window).on("load resize", e)
        },
        horizontalNav: function () {
            function e() {
                $(".nav-lv2").each(function () {
                    var e, t, i, s, o = $(this);
                    o.hasClass("exp") || (s = 0,
                        s = (e = $(window).width()) / 2 < (t = o.parent().width()) / 2 + (i = o.parent().offset().left) ? 2 * (e - (t / 2 + i)) : 2 * (t / 2 + i),
                        o.css({
                            width: e + "px",
                            left: -i + "px"
                        }).find(".nav-grp").css({
                            width: s + "px",
                            "margin-left": t / 2 + i - s / 2 + "px"
                        }))
                })
            }
            $(".x-header").hasClass("hz-nav") && (this.is_mobile || (e(),
                $(window).on("resize", e)))
        },
        getFullScreen: function () {
            function e() {
                $("body").outerHeight() > $(window).height() ? $("body").removeClass("full-screen") : $("body").addClass("full-screen")
            }
            $("body").addClass("init-screen"),
                e(),
                $(window).on("load resize scroll", e)
        },
        unWinScroll: function () {
            $("body").addClass("lock-screen")
        },
        enWinScroll: function () {
            $("body").removeClass("lock-screen")
        },
        unSelect: function (e) {
            $(e).attr("unselectable", "on").css((_defineProperty(e = {
                "-moz-user-select": "-moz-none"
            }, "-moz-user-select", "none"),
                _defineProperty(e, "-o-user-select", "none"),
                _defineProperty(e, "-khtml-user-select", "none"),
                _defineProperty(e, "-webkit-user-select", "none"),
                _defineProperty(e, "-ms-user-select", "none"),
                _defineProperty(e, "user-select", "none"),
                e)).on("selectstart", function () {
                    return !1
                })
        },
        enSelect: function (e) {
            $(e).attr("unselectable", "off").css((_defineProperty(e = {
                "-moz-user-select": "text"
            }, "-moz-user-select", "text"),
                _defineProperty(e, "-o-user-select", "text"),
                _defineProperty(e, "-khtml-user-select", "text"),
                _defineProperty(e, "-webkit-user-select", "text"),
                _defineProperty(e, "-ms-user-select", "text"),
                _defineProperty(e, "user-select", "text"),
                e)).off("selectstart")
        },
        init: function (e) {
            var t = this;
            $(function () {
                t.placeholder(),
                    t.objectFitPolyfill(),
                    (t.is_true(e.htmlSize) || t.is_number(e.htmlSize)) && t.htmlSize(t.is_true(e.htmlSize) ? 750 : e.htmlSize, 320),
                    t.contHeight(),
                    t.horizontalNav(),
                    t.getFullScreen(),
                    t.backTop(e.backTop),
                    t.scrollFade(e.scrollFade)
            })
        },
        initTracker: function () {
            $(".tracker-mod").each(function () {
                var s = $(this)
                    , c = s.find(".tracker-box")
                    , d = s.find(".tracker-track")
                    , u = s.find(".tracker-item")
                    , f = s.find(".tracker-prev")
                    , h = s.find(".tracker-next")
                    , p = 0 < u.filter(".cur").length ? u.filter(".cur").index() : 0
                    , m = !$.utils.is_undefined(s.attr("page"))
                    , g = !$.utils.is_undefined(s.attr("round"))
                    , v = null
                    , b = null
                    , o = null
                    , e = null
                    , n = null;
                function i() {
                    b = d.outerWidth() > c.width() ? "x" : d.outerHeight() > c.height() ? "y" : null,
                        v && 0 < v.length && v[0].vars.type != b && (v[0].kill(),
                            v = null,
                            gsap.set(d, {
                                x: 0,
                                y: 0
                            })),
                        v || u.removeClass("in out over"),
                        $.utils.is_string(b) ? (v ? v[0].update(!0) : v = Draggable.create(d, {
                            type: b,
                            bounds: c,
                            inertia: !0,
                            lockAxis: !0,
                            zIndexBoost: !1,
                            dragResistance: .3,
                            edgeResistance: .9,
                            dragClickables: !0,
                            allowContextMenu: !0,
                            onClick: function () {
                                gsap.killTweensOf(".tracker-track")
                            },
                            onDragEnd: function () {
                                x()
                            },
                            onThrowComplete: function () {
                                m && !g && ("x" == b ? 0 == this.x ? (f.addClass("disable"),
                                    h.removeClass("disable")) : this.x == this.minX ? (h.addClass("disable"),
                                        f.removeClass("disable")) : (f.removeClass("disable"),
                                            h.removeClass("disable")) : "y" == b && (0 == this.y ? (f.addClass("disable"),
                                                h.removeClass("disable")) : this.y == this.minY ? (h.addClass("disable"),
                                                    f.removeClass("disable")) : (f.removeClass("disable"),
                                                        h.removeClass("disable"))))
                            }
                        }),
                            f.removeClass("disdrag"),
                            h.removeClass("disdrag")) : (f.addClass("disdrag"),
                                h.addClass("disdrag")),
                        a(u.eq(p), !0)
                }
                function x() {
                    n = e = o = null,
                        u.removeClass("in out over"),
                        o = u.filter(function () {
                            return "x" == b ? $(this).offset().left >= c.offset().left && $(this).offset().left + $(this).outerWidth() <= c.offset().left + c.width() : "y" == b ? $(this).offset().top >= c.offset().top && $(this).offset().top + $(this).outerHeight() <= c.offset().top + c.height() : void 0
                        }).addClass("in"),
                        e = u.not(o).addClass("out"),
                        n = e.filter(function () {
                            return "x" == b ? $(this).offset().left < c.offset().left && $(this).offset().left + $(this).outerWidth() > c.offset().left || $(this).offset().left < c.offset().left + c.width() && $(this).offset().left + $(this).outerWidth() > c.offset().left + c.width() : "y" == b ? $(this).offset().top < c.offset().top && $(this).offset().top + $(this).outerHeight() > c.offset().top || $(this).offset().top < c.offset().top + c.height() && $(this).offset().top + $(this).outerHeight() > c.offset().top + c.height() : void 0
                        }).addClass("over")
                }
                function a(e, t) {
                    var i, s, o, n, a, r, l;
                    0 == e.length || !t && e.index() == p || (e.trigger("click.tab"),
                        p = e.index(),
                        g || m || (0 == p ? f.addClass("disable") : f.removeClass("disable"),
                            p == u.length - 1 ? h.addClass("disable") : h.removeClass("disable")),
                        e.hasClass("cur") || e.addClass("cur").siblings().removeClass("cur"),
                        v && (t = t ? 0 : .5,
                            "x" == b ? (i = gsap.getProperty(d[0], "x"),
                                s = c.offset().left + c.width() / 2,
                                o = e.offset().left + e.outerWidth() / 2,
                                a = {
                                    duration: t,
                                    x: n = v[0].minX
                                },
                                r = {
                                    duration: t,
                                    x: v[0].maxX
                                },
                                l = {
                                    duration: t,
                                    x: "+=" + (s - o)
                                }) : "y" == b && (i = gsap.getProperty(d[0], "y"),
                                    s = c.offset().top + c.height() / 2,
                                    o = e.offset().top + e.outerHeight() / 2,
                                    a = {
                                        duration: t,
                                        y: n = v[0].minY
                                    },
                                    r = {
                                        duration: t,
                                        y: v[0].maxY
                                    },
                                    l = {
                                        duration: t,
                                        y: "+=" + (s - o)
                                    }),
                            l = s < o ? 0 < n - i + o - s ? gsap.to(d, a) : gsap.to(d, l) : 0 < i + s - o ? gsap.to(d, r) : gsap.to(d, l),
                            0 < t ? l.eventCallback("onComplete", x) : x()))
                }
                i(),
                    $(window).on("resize", $.debounce(300, i)),
                    u.on("click.tracker", function () {
                        a($(this))
                    }),
                    f.on("click.tracker", function () {
                        var e = 0
                            , t = s.attr("page")
                            , i = u.eq(p).prevAll(":visible").first();
                        m ? v && (0 != (i = (i = (0 < o.length ? o : n).first().prevAll(":visible")).filter(function (e) {
                            return 0 < t ? e < t : 0 == e
                        })).length ? (g || (h.removeClass("disable"),
                            v && 1 == o.first().prevAll(":visible").length && f.addClass("disable")),
                            "x" == b ? (0 <= (e = 0 < t ? gsap.getProperty(d[0], "x") + (c.offset().left - i.offset().left) : gsap.getProperty(d[0], "x") + (c.offset().left + c.width() - (i.offset().left + i.outerWidth()))) && (e = 0,
                                g || f.addClass("disable")),
                                gsap.to(d, {
                                    duration: .5,
                                    x: e,
                                    onComplete: x
                                })) : "y" == b && (0 <= (e = 0 < t ? gsap.getProperty(d[0], "y") + (c.offset().top - i.offset().top) : gsap.getProperty(d[0], "y") + (c.offset().top + c.height() - (i.offset().top + i.outerHeight()))) && (e = 0,
                                    g || f.addClass("disable")),
                                    gsap.to(d, {
                                        duration: .5,
                                        y: e,
                                        onComplete: x
                                    }))) : v && g && ("x" == b ? gsap.to(d, {
                                        duration: .5,
                                        x: v[0].minX,
                                        onComplete: x
                                    }) : "y" == b && gsap.to(d, {
                                        duration: .5,
                                        y: v[0].minY,
                                        onComplete: x
                                    }))) : 0 == i.length ? g && a(u.last()) : a(i)
                    }),
                    h.on("click.tracker", function () {
                        var e = 0
                            , t = s.attr("page")
                            , i = u.eq(p).nextAll(":visible").first();
                        m ? v && (0 != (i = (i = (0 < o.length ? o : n).last().nextAll(":visible")).filter(function (e) {
                            return 0 < t ? e < t : 0 == e
                        })).length ? (g || (f.removeClass("disable"),
                            v && 1 == o.last().nextAll(":visible").length && h.addClass("disable")),
                            "x" == b ? ((e = 0 < t ? gsap.getProperty(d[0], "x") - (i.offset().left + i.outerWidth() - (c.offset().left + c.width())) : gsap.getProperty(d[0], "x") - (i.offset().left - c.offset().left)) - v[0].minX <= 0 && (e = v[0].minX,
                                g || h.addClass("disable")),
                                gsap.to(d, {
                                    duration: .5,
                                    x: e,
                                    onComplete: x
                                })) : "y" == b && ((e = 0 < t ? gsap.getProperty(d[0], "y") - (i.offset().top + i.outerHeight() - (c.offset().top + c.height())) : gsap.getProperty(d[0], "y") - (i.offset().top - c.offset().top)) - v[0].minY <= 0 && (e = v[0].minY,
                                    g || h.addClass("disable")),
                                    gsap.to(d, {
                                        duration: .5,
                                        y: e,
                                        onComplete: x
                                    }))) : v && g && ("x" == b ? gsap.to(d, {
                                        duration: .5,
                                        x: 0,
                                        onComplete: x
                                    }) : "y" == b && gsap.to(d, {
                                        duration: .5,
                                        y: 0,
                                        onComplete: x
                                    }))) : 0 == i.length ? g && a(u.first()) : a(i)
                    }),
                    s.on("refresh", function (e, t) {
                        e.stopPropagation(),
                            $.utils.is_undefined(t) && (t = 0),
                            p = t,
                            i()
                    })
            })
        }
    },
    $.fn.xVideo = function () {
        var e = this
            , t = e.find(".video-js");
        if (0 == e.length || 0 == t.length)
            return e;
        if (1 < e.length)
            return e.each(function () {
                $(this).xVideo()
            });
        if (e.data("xVideo"))
            return e;
        if (e.data("xVideo", !0),
            !t.is("video"))
            return t.addClass("vjs-tech vd-adr").removeClass("video-js"),
                void e.addClass("video-js video-native");
        $.utils.is_undefined(t.attr("autoplay"));
        var i = !0;
        t[0].addEventListener("x5videoexitfullscreen", function () {
            $(".video-js").removeClass("vjs-fullscreen")
        }),
            $.utils.is_android && ($.utils.is_wechat || $.utils.is_cochat ? t[0].autoplay = !1 : (i = !1,
                t.addClass("vjs-tech vd-adr").removeClass("video-js"),
                e.addClass("video-js video-native")));
        var s = null
            , s = i ? videojs(t[0], {
                resizeManager: !1,
                controlBar: {
                    children: ["playToggle", "ProgressControl", "RemainingTimeDisplay", "CurrentTimeDisplay", "TimeDivider", "DurationDisplay", {
                        name: "volumePanel",
                        inline: !1
                    }, "fullscreenToggle"]
                }
            }, function () {
                var e = this;
                t.attr("object-fit") && (t.data("object-fit", t.attr("object-fit")),
                    objectFitPolyfill(t)),
                    document.addEventListener("WeixinJSBridgeReady", function () {
                        e.autoplay() && !$.utils.is_android && e.play()
                    }, !1)
            }) : t[0];
        e.on("change", function (e, t) {
            e.stopPropagation(),
                $.utils.is_string(t) ? t = {
                    url: t
                } : ($.utils.is_dom(t) || $.utils.is_jquery(t)) && (t = {
                    url: $(t).data("src"),
                    poster: $(t).data("poster"),
                    autoplay: !!$(t).data("autoplay")
                });
            t = $.extend({
                url: null,
                poster: null,
                autoplay: !1
            }, t);
            t.url && (s.pause(),
                $.utils.is_dom(s) ? s.src = t.url : s.src(t.url),
                t.poster ? ($.utils.is_dom(s) ? s.poster = t.poster : s.posterImage.setSrc(t.poster),
                    $(this).find(".vjs-poster").removeClass("vjs-hidden")) : $(this).find(".vjs-poster").addClass("vjs-hidden"),
                s.load(),
                t.autoplay && s.play())
        })
    }
    ,
    $.fn.xAudio = function (e) {
        var o = this
            , n = null;
        if (0 == o.length)
            return o;
        if (1 < o.length)
            return o.each(function () {
                $(this).xAudio(e)
            });
        if (o.data("xAudio"))
            return o;
        o.data("xAudio", !0);
        var i = $.extend(!0, {}, {
            src: null,
            preload: !0,
            autoplay: !1,
            loop: !1,
            volume: 1,
            ui: {
                control: {
                    play: !0,
                    prev: !1,
                    next: !1
                },
                volume: !1,
                progress: !0,
                time: {
                    current: !0,
                    duration: !0,
                    surplus: !1
                }
            }
        }, l(e), l(o.data("set")))
            , s = 0;
        !function (e) {
            var t = ""
                , i = "";
            e.control.prev && 0 == o.find(".audio-prev").length && (i += '<div class="audio-prev xicon icon-media-prev"></div>');
            e.control.play && 0 == o.find(".audio-play").length && (i += '<div class="audio-play xicon icon-media-play"></div>');
            e.control.next && 0 == o.find(".audio-next").length && (i += '<div class="audio-next xicon icon-media-next"></div>');
            $.utils.is_none(i) || 0 != o.find(".audio-control").length || (t += '<div class="audio-control">' + i + "</div>");
            var s = "";
            e.progress && 0 == o.find(".audio-progress").length && (s += '<div class="audio-progress"><div class="audio-progress-bar"></div></div>');
            i = "";
            e.time.current && 0 == o.find(".audio-current").length && (i += '<div class="audio-current"></div>');
            e.time.duration && 0 == o.find(".audio-duration").length && (i += '<div class="audio-duration"></div>');
            e.time.surplus && 0 == o.find(".audio-surplus").length && (i += '<div class="audio-surplus"></div>');
            $.utils.is_none(i) || 0 != o.find(".audio-time").length || (s += '<div class="audio-time">' + i + "</div>");
            $.utils.is_none(s) || (t += '<div class="audio-panel">' + s + "</div>");
            e.volume && 0 == o.find(".audio-volume").length && (t += '<div class="audio-volume"><div class="audio-mute xicon icon-media-volume"></div><div class="audio-volume-box"><div class="audio-volume-track"><div class="audio-volume-bar"></div></div></div></div>');
            $.utils.is_none(t) || o.addClass("ui").append(t)
        }(i.ui),
            $.utils.is_none(i.src) && (i.src = [""],
                o.data("load", !0)),
            1 == i.src.length && o.find(".audio-next").addClass("disable"),
            o.find(".audio-prev").addClass("disable"),
            o.find(".audio-play").addClass("icon-media-buffer"),
            o.find(".audio-duration").text(c(0)),
            o.find(".audio-current").text(c(0)),
            o.find(".audio-surplus").text(c(0));
        var a = new Audio;
        a.autoplay = !$.utils.is_android,
            a.preload = i.preload,
            a.volume = 0,
            a.loop = i.loop,
            a.src = i.src[0];
        var t = null;
        function r() {
            var e = a.currentTime || 0;
            o.find(".audio-current").text(c(e)),
                o.find(".audio-surplus").text("-" + c(a.duration - e)),
                o.find(".audio-progress-bar").css("width", (e / a.duration * 100 || 0) + "%")
        }
        function l(e) {
            var t = [];
            if ($.utils.is_object(e)) {
                if ($.utils.is_string(e.src))
                    if (0 == e.src.indexOf(".")) {
                        n = o.find(e.src);
                        for (var i = 0; i < $(e.src).length; i++)
                            t.push(n.eq(i).data("src"));
                        e.src = t
                    } else
                        e.src = [e.src];
                $.utils.is_object(e.ui) ? ($.utils.is_boolean(e.ui.control) && (e.ui.control = {
                    play: e.ui.control,
                    prev: e.ui.control,
                    next: e.ui.control
                }),
                    $.utils.is_boolean(e.ui.time) && (e.ui.time = {
                        current: e.ui.time,
                        duration: e.ui.time,
                        surplus: e.ui.time
                    })) : $.utils.is_boolean(e.ui) && (e.ui = {
                        control: {
                            play: e.ui,
                            prev: e.ui,
                            next: e.ui
                        },
                        volume: e.ui,
                        progress: e.ui,
                        time: {
                            current: e.ui,
                            duration: e.ui,
                            surplus: e.ui
                        },
                        error: e.ui
                    })
            } else if ($.utils.is_string(e))
                if (0 == e.indexOf(".")) {
                    n = o.find(e);
                    for (var s = 0; s < $(e).length; s++)
                        t.push(n.eq(s).data("src"));
                    e = {
                        src: t
                    }
                } else
                    e = {
                        src: [e]
                    };
            else
                $.utils.is_array(e) && (e = {
                    src: e
                });
            return e
        }
        function c(e) {
            var t = Math.floor(Math.round(e) / 60) || 0
                , e = Math.round(e) - 60 * t || 0;
            return t + ":" + (e < 10 ? "0" : "") + e
        }
        0 < o.find(".audio-volume-bar").length && (t = Draggable.create(o.find(".audio-volume-bar"), {
            type: "y",
            bounds: o.find(".audio-volume-track"),
            edgeResistance: 1,
            inertia: !1,
            onDrag: function () {
                a.volume = 1 - this.y / this.maxY,
                    0 < a.volume ? (a.muted = !1,
                        $(".audio-mute").removeClass("icon-media-muted")) : (a.muted = !0,
                            $(".audio-mute").addClass("icon-media-muted"))
            }
        })),
            0 < a.volume ? (a.muted = !1,
                t && gsap.set(t[0].target, {
                    y: (1 - a.volume) * t[0].maxY
                })) : a.volume = 0,
            document.addEventListener("WeixinJSBridgeReady", function () {
                a.play()
            }, !1),
            $(document).one("touchstart.once", function () {
                o.data("load") || $.utils.is_android && !$.utils.is_wechat || a.play()
            }),
            $(a).one("play.once", function () {
                !$.utils.is_false(i.autoplay) || o.data("load") || $.utils.is_android && !$.utils.is_wechat || (a.pause(),
                    a.volume = i.volume),
                    $.utils.is_android && !$.utils.is_wechat ? setTimeout(function () {
                        o.data("load", !0),
                            o.find(".audio-duration").text(c(a.duration)),
                            o.find(".audio-surplus").text("-" + c(a.duration))
                    }, 200) : (o.data("load", !0),
                        o.find(".audio-duration").text(c(a.duration)),
                        o.find(".audio-surplus").text("-" + c(a.duration)))
            }),
            $(a).on("canplay canplaythrough", function () {
                $.utils.is_none(i.src[s]) || (o.find(".audio-play").removeClass("icon-media-buffer"),
                    o.find(".audio-duration").text(c(this.duration)),
                    o.find(".audio-surplus").text("-" + c(this.duration)))
            }),
            $(a).on("play", function () {
                $.utils.is_none(i.src[s]) || (o.find(".audio-play").addClass("icon-media-pause").removeClass("icon-media-buffer"),
                    gsap.ticker.add(r))
            }),
            $(a).on("pause ended", function () {
                o.find(".audio-play").removeClass("icon-media-pause"),
                    gsap.ticker.remove(r)
            }),
            o.on("play", function (e, t) {
                e.stopPropagation(),
                    o.find(".audio-play").addClass("icon-media-buffer"),
                    $.utils.is_undefined(t) && (t = s),
                    0 <= t && t < i.src.length && (t != s && (function (e) {
                        0 < e ? o.find(".audio-prev").removeClass("disable") : o.find(".audio-prev").addClass("disable");
                        e < i.src.length - 1 ? o.find(".audio-next").removeClass("disable") : o.find(".audio-next").addClass("disable")
                    }(s = t),
                        a.pause(),
                        a.src = i.src[s],
                        a.load()),
                        a.play())
            }),
            o.on("pause", function (e) {
                e.stopPropagation(),
                    a.pause()
            }),
            o.on("togglePlay", function (e) {
                e.stopPropagation(),
                    a.paused ? o.trigger("play", s) : o.trigger("pause")
            }),
            o.on("stop", function (e) {
                e.stopPropagation(),
                    a.pause(),
                    a.currentTime = 0
            }),
            o.on("prev", function (e) {
                e.stopPropagation(),
                    o.trigger("play", s - 1)
            }),
            o.on("next", function (e) {
                e.stopPropagation(),
                    o.trigger("play", s + 1)
            }),
            o.on("mute", function (e) {
                e.stopPropagation(),
                    a.muted ? ($(".audio-mute").removeClass("icon-media-muted"),
                        t && gsap.to(t[0].target, {
                            y: t[0].y
                        }),
                        a.muted = !1) : ($(".audio-mute").addClass("icon-media-muted"),
                            t && gsap.to(t[0].target, {
                                y: t[0].maxY
                            }),
                            a.muted = !0)
            }),
            o.on("change", function (e, t) {
                e.stopPropagation(),
                    $.utils.is_undefined($(t).data("ad")) && ($(t).data("ad", s + 1),
                        i.src.push($(t).data("src"))),
                    o.trigger("play", $(t).data("ad"))
            }),
            o.find(".audio-play").on("click", function () {
                o.trigger("togglePlay")
            }),
            o.find(".audio-prev").on("click", function () {
                o.trigger("prev")
            }),
            o.find(".audio-next").on("click", function () {
                o.trigger("next")
            }),
            o.find(".audio-mute").on("click", function () {
                o.trigger("mute")
            }),
            n && n.on("click", function () {
                o.trigger("play", $(this).index())
            })
    }
    ,
    $.fn.xScroll = function (e) {
        if (0 == this.length)
            return this;
        if (1 < this.length)
            return this.each(function () {
                $(this).xScroll(e)
            });
        var t = this
            , i = {
                appendTrack: t,
                dragCont: !1,
                preventDefault: !1,
                onScroll: function () { }
            }
            , s = $.extend(!0, {}, i, e);
        t.children().wrapAll('<div class="scroll-cont" />'),
            $(s.appendTrack).append('<div class="scroll-track scroll-track-x"><div class="scroll-bar scroll-bar-x"></div></div><div class="scroll-track scroll-track-y"><div class="scroll-bar scroll-bar-y"></div></div>');
        var o = t.children(".scroll-cont")
            , n = $(s.appendTrack).children(".scroll-track-x")
            , a = n.children(".scroll-bar-x")
            , r = $(s.appendTrack).children(".scroll-track-y")
            , l = r.children(".scroll-bar-y")
            , c = 0 == a.width()
            , d = 0 == l.height()
            , u = null
            , f = !1;
        g();
        var h = m();
        o.on("mousewheel", function (e) {
            s.preventDefault && (0 < h.maxX || 0 < h.maxY) && (0 < e.deltaY && 0 == h.rateY && (e.stopPropagation(),
                e.preventDefault()),
                e.deltaY < 0 && 1 == h.rateY && (e.stopPropagation(),
                    e.preventDefault()));
            0 < h.maxX && (s.preventDefault && 0 == h.maxY && (e.stopPropagation(),
                e.preventDefault()),
                e.deltaY < 0 && (0 == h.maxY || 1 == h.rateY) && h.rateX < 1 && (e.stopPropagation(),
                    e.preventDefault()),
                0 < e.deltaY && (0 == h.maxY || 0 == h.rateY) && 0 < h.rateX && (e.stopPropagation(),
                    e.preventDefault()))
        }),
            o.on("mousewheel", $.throttle(200, function (e) {
                0 < h.maxX && (e.deltaY < 0 && (0 == h.maxY || 1 == h.rateY) && gsap.to(o, {
                    scrollTo: {
                        x: "+=100",
                        duration: .1,
                        overwrite: "auto"
                    }
                }),
                    0 < e.deltaY && (0 == h.maxY || 0 == h.rateY) && gsap.to(o, {
                        scrollTo: {
                            x: "-=100",
                            duration: .1,
                            overwrite: "auto"
                        }
                    }))
            }));
        var p = new ResizeObserver($.debounce(250, function () {
            g(),
                h = m(),
                t.trigger("to", {
                    x: 0,
                    y: 0,
                    d: 0
                })
        }));
        function m() {
            var e = {
                contWidth: o.outerWidth(),
                contHeight: o.outerHeight(),
                scrollWidth: gsap.getProperty(o[0], "scrollWidth"),
                scrollHeight: gsap.getProperty(o[0], "scrollHeight"),
                trackWidth: n.width(),
                trackHeight: r.height(),
                barWidth: 0,
                barHeight: 0,
                maxX: 0,
                maxY: 0,
                curX: o.scrollLeft(),
                curY: o.scrollTop()
            };
            return e.scrollWidth > e.contWidth ? (e.barWidth = Math.round(e.contWidth / e.scrollWidth * e.trackWidth),
                e.maxX = e.scrollWidth - e.contWidth) : (e.barWidth = e.trackWidth,
                    e.maxX = 0),
                e.scrollHeight > e.contHeight ? (e.barHeight = Math.round(e.contHeight / e.scrollHeight * e.trackHeight),
                    e.maxY = e.scrollHeight - e.contHeight) : (e.barHeight = e.trackHeight,
                        e.maxY = 0),
                c && a.width(e.barWidth),
                d && l.height(e.barHeight),
                e.rateX = Math.min($.utils.is_number(e.curX / e.maxX) ? e.curX / e.maxX : 0, 1),
                e.rateY = Math.min($.utils.is_number(e.curY / e.maxY) ? e.curY / e.maxY : 0, 1),
                0 < e.maxX ? (t.addClass("scroll-axis-x"),
                    n.removeClass("scroll-track-disable")) : (t.removeClass("scroll-axis-x"),
                        n.addClass("scroll-track-disable")),
                0 < e.maxY ? (t.addClass("scroll-axis-y"),
                    r.removeClass("scroll-track-disable")) : (t.removeClass("scroll-axis-y"),
                        r.addClass("scroll-track-disable")),
                e
        }
        function g() {
            s.dragCont && ($.utils.is_none(u) || u.kill(),
                $.utils.is_mobile || (u = Draggable.create(o, {
                    type: "scroll",
                    allowContextMenu: !0,
                    allowEventDefault: !0,
                    zIndexBoost: !1,
                    inertia: !0
                })[0]))
        }
        p.observe(o[0]),
            o.children().each(function () {
                p.observe(this)
            }),
            t.on("to", function (e, t) {
                e.stopPropagation();
                e = t.d;
                $.utils.is_undefined(e) && (e = 1),
                    gsap.to(o, {
                        duration: e,
                        scrollTo: {
                            x: t.x,
                            y: t.y
                        }
                    })
            }),
            o.on("scroll", function () {
                h.curX = o.scrollLeft(),
                    h.curY = o.scrollTop(),
                    h.rateX = Math.min(h.curX / h.maxX, 1),
                    h.rateY = Math.min(h.curY / h.maxY, 1),
                    f || (gsap.to(a, {
                        x: (h.trackWidth - h.barWidth) * h.rateX,
                        duration: .1,
                        overwrite: "auto"
                    }),
                        gsap.to(l, {
                            y: (h.trackHeight - h.barHeight) * h.rateY,
                            duration: .1,
                            overwrite: "auto"
                        })),
                    s.onScroll({
                        x: h.curX,
                        y: h.curY,
                        px: h.rateX,
                        py: h.rateY
                    })
            }),
            Draggable.create(a, {
                type: "x",
                bounds: n,
                allowContextMenu: !0,
                zIndexBoost: !1,
                onDrag: function () {
                    var e = this.x / (h.trackWidth - h.barWidth);
                    f = !0,
                        gsap.set(o, {
                            scrollTo: {
                                x: e * h.maxX
                            }
                        })
                },
                onDragEnd: function () {
                    f = !1
                }
            }),
            Draggable.create(l, {
                type: "y",
                bounds: r,
                allowContextMenu: !0,
                zIndexBoost: !1,
                onDrag: function () {
                    var e = this.y / (h.trackHeight - h.barHeight);
                    f = !0,
                        gsap.set(o, {
                            scrollTo: {
                                y: e * h.maxY
                            }
                        })
                },
                onDragEnd: function () {
                    f = !1
                }
            })
    }
    ,
    $.fn.xMap = function (e) {
        var t = this;
        return 0 == t.length ? (console.log("xMap - 未找到元素[" + t.selector + "]"),
            t) : 1 < t.length ? t.each(function () {
                $(this).xMap(e)
            }) : ($.utils.temp.loadMapApi || ($.utils.temp.loadMapApi = new Promise(function (e, t) {
                window.BMap = window.BMap || {},
                    window.BMap.apiLoad = function () {
                        delete window.BMap.apiLoad,
                            e()
                    }
                    ;
                var i = document.createElement("script");
                i.src = "https://api.map.baidu.com/getscript?v=3.0&ak=3c3f2a3587ab7a1d7ac9f2b326d66ec8&services=&t=1" + (new Date).getTime(),
                    document.body.appendChild(i)
            }
            )),
                void $.utils.temp.loadMapApi.then(function () {
                    !function (i, t) {
                        var o = $.extend(!0, {}, {
                            map: {
                                style: "",
                                zoom: 18,
                                mclick: !1
                            },
                            maker: {
                                src: "",
                                size: [100, 100],
                                offset: [0, 0],
                                anim: !1
                            },
                            info: {
                                able: !0,
                                auto: !0,
                                type: "normal",
                                title: null,
                                cont: null
                            },
                            cenOffset: {
                                x: 0,
                                y: 0
                            },
                            control: {
                                zoomBar: !0,
                                miniMap: !1
                            },
                            event: {
                                drag: !0,
                                wheelZoom: !1
                            }
                        }, function () {
                            var e = $.extend(!0, {
                                temp: {}
                            }, t);
                            $.utils.is_number(e.map) ? e.map = {
                                zoom: e.map
                            } : $.utils.is_string(e.map) ? e.map = {
                                style: e.map
                            } : $.utils.is_boolean(e.map) && (e.map = {
                                mclick: e.map
                            });
                            $.utils.is_boolean(e.maker) ? e.maker = {
                                anim: e.maker
                            } : $.utils.is_string(e.maker) && (e.maker = {
                                src: e.maker
                            });
                            $.utils.is_boolean(e.info) && (e.info = {
                                auto: e.info
                            });
                            $.utils.is_number(e.cenOffset) && (e.cenOffset = {
                                x: e.cenOffset
                            });
                            $.utils.is_boolean(e.control) && (e.control = {
                                zoomBar: e.control,
                                miniMap: e.control
                            });
                            $.utils.is_boolean(e.event) && (e.event = {
                                drag: e.event,
                                wheelZoom: e.event
                            });
                            return e
                        }(), {
                            info: {
                                title: i.data("title"),
                                cont: i.data("cont")
                            }
                        });
                        try {
                            $(o.info.cont)
                        } catch (e) {
                            !e && 0 < $(o.info.cont).length && (o.info.cont = $(o.info.cont).html())
                        }
                        "search" == o.info.type && 0 == $("#mapinfoapi").length && $("body").append('<script id="mapinfoapi" type="text/javascript" src="https://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"><\/script><link rel="stylesheet" href="https://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css">');
                        "box" == o.info.type && 0 == $("#mapboxapi").length && $("body").append('<script id="mapboxapi" type="text/javascript" src="https://api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js"><\/script>');
                        var n = new BMap.Map(i[0], {
                            enableMapClick: o.map.mclick
                        });
                        n.centerAndZoom(new BMap.Point(0, 0), o.map.zoom),
                            function () {
                                $.utils.is_true(o.control.zoomBar) && n.addControl(new BMap.NavigationControl);
                                $.utils.is_true(o.control.miniMap) && n.addControl(new BMap.OverviewMapControl({
                                    isOpen: !0,
                                    anchor: BMAP_ANCHOR_BOTTOM_RIGHT
                                }))
                            }(),
                            function () {
                                $.utils.is_true(o.event.drag) ? n.enableDragging() : $.utils.is_false(o.event.drag) && n.disableDragging();
                                $.utils.is_true(o.event.wheelZoom) ? n.enableScrollWheelZoom() : $.utils.is_false(o.event.wheelZoom) && n.disableScrollWheelZoom()
                            }(),
                            $.utils.is_none(o.map.style) || n.setMapStyle({
                                style: o.map.style
                            }),
                            "normal" == o.info.type ? s({
                                key: i.data("search"),
                                title: o.info.title,
                                cont: o.info.cont
                            }) : function () {
                                var t = setTimeout(function e() {
                                    window.BMapLib ? (clearTimeout(t),
                                        t = null,
                                        s({
                                            key: i.data("search"),
                                            title: o.info.title,
                                            cont: o.info.cont
                                        })) : t = setTimeout(e, 100)
                                }, 100)
                            }();
                        function a() {
                            $.utils.is_mobile || n.panBy(o.cenOffset.x, o.cenOffset.y, {
                                noAnimation: !0
                            })
                        }
                        function s(t) {
                            if (($.utils.is_string(t) || $.utils.is_array(t)) && (t = {
                                key: t
                            }),
                                $.utils.is_object(t)) {
                                o.temp.title = t.title,
                                    o.temp.cont = t.cont;
                                try {
                                    $(t.cont)
                                } catch (e) {
                                    !e && 0 < $(t.cont).length && (o.temp.cont = $(t.cont).html())
                                }
                                var e, i;
                                n.clearOverlays(),
                                    o.temp.info = null,
                                    o.temp.point = null,
                                    o.temp.marker = null,
                                    $.utils.is_none(t.key) ? console.log("xMap - 未指定任何查询参数") : $.utils.is_string(t.key) ? 0 < t.key.indexOf(",") ? (o.temp.point = new BMap.Point(t.key.split(",")[0], t.key.split(",")[1]),
                                        s()) : (e = new BMap.Geocoder,
                                            i = new BMap.LocalSearch(n, {
                                                renderOptions: {
                                                    map: n
                                                },
                                                pageCapacity: 1
                                            }),
                                            $.utils.is_none(o.temp.title) && $.utils.is_none(o.temp.cont) ? (i.search(t.key, {
                                                forceLocal: !1
                                            }),
                                                i.setSearchCompleteCallback(function (e) {
                                                    0 < i.getStatus() ? console.log("查询失败 - 无法定位到[" + t.key + "]所在位置，尝试更换查询字符串或指定坐标") : setTimeout(a)
                                                }),
                                                i.setMarkersSetCallback(function (e) {
                                                    var t;
                                                    $.utils.is_none(o.maker.src) || (t = new BMap.Icon(o.maker.src, new BMap.Size(o.maker.size[0], o.maker.size[1]), {
                                                        anchor: new BMap.Size(o.maker.offset[0], o.maker.offset[1])
                                                    }),
                                                        e[0].marker.setIcon(t)),
                                                        $.utils.is_true(o.maker.anim) && e[0].marker.setAnimation(BMAP_ANIMATION_BOUNCE)
                                                })) : e.getPoint(t.key, function (e) {
                                                    e ? (o.temp.point = e,
                                                        s()) : console.log("查询失败 - 无法定位到[" + t.key + "]所在位置，尝试更换查询字符串或指定坐标")
                                                })) : $.utils.is_array(t.key) ? (o.temp.point = new BMap.Point(t.key[0], t.key[1]),
                                                    s()) : console.log("xMap - 指定的查询参数数据类型不正确")
                            } else
                                console.log("xMap - 指定的查询参数数据类型不正确");
                            function s() {
                                var e;
                                !function () {
                                    switch (o.info.type) {
                                        case "search":
                                            o.temp.info = new BMapLib.SearchInfoWindow(n, o.temp.cont || "", {
                                                title: o.temp.title || "",
                                                width: 290,
                                                height: 80,
                                                panel: "panel",
                                                enableAutoPan: !0,
                                                enableSendToPhone: !1,
                                                searchTypes: [BMAPLIB_TAB_SEARCH, BMAPLIB_TAB_TO_HERE, BMAPLIB_TAB_FROM_HERE]
                                            });
                                            break;
                                        case "box":
                                            o.temp.info = new BMapLib.InfoBox(n, o.temp.cont || "", {
                                                closeIconMargin: "0 0 0 0",
                                                closeIconUrl: "https://api.map.baidu.com/images/iw_close1d3.gif",
                                                enableAutoPan: !0,
                                                align: INFOBOX_AT_TOP
                                            });
                                            break;
                                        default:
                                            o.temp.info = new BMap.InfoWindow(o.temp.cont || "", {
                                                title: o.temp.title || "",
                                                width: 290,
                                                enableMessage: !1
                                            })
                                    }
                                }(),
                                    o.temp.marker = new BMap.Marker(o.temp.point),
                                    $.utils.is_none(o.maker.src) || (e = new BMap.Icon(o.maker.src, new BMap.Size(o.maker.size[0], o.maker.size[1]), {
                                        anchor: new BMap.Size(o.maker.offset[0], o.maker.offset[1])
                                    }),
                                        o.temp.marker.setIcon(e)),
                                    n.addOverlay(o.temp.marker),
                                    $.utils.is_true(o.maker.anim) && o.temp.marker.setAnimation(BMAP_ANIMATION_BOUNCE),
                                    o.temp.marker.addEventListener("click", function () {
                                        $.utils.is_true(o.info.able) && !$.utils.is_none(o.temp.info) && ("normal" == o.info.type ? this.openInfoWindow(o.temp.info) : o.temp.info.open(this))
                                    }),
                                    n.centerAndZoom(o.temp.point, o.map.zoom),
                                    a(),
                                    $.utils.is_true(o.info.able) && $.utils.is_true(o.info.auto) && !$.utils.is_none(o.temp.info) && ("normal" == o.info.type ? o.temp.marker.openInfoWindow(o.temp.info) : o.temp.info.open(o.temp.marker))
                            }
                        }
                        i.on("search", function (e, t) {
                            e.stopPropagation(),
                                s(t)
                        })
                    }(t, e)
                }))
    }
    ,
    $.xRoll = function (e, t) {
        var i = {
            container: window,
            scroller: {
                start: "80%",
                end: "top"
            },
            anchor: {
                elm: null,
                start: "top",
                end: "bottom"
            },
            item: {
                elm: null,
                sort: "s"
            },
            tween: [{
                duration: 1,
                stagger: .3,
                autoAlpha: 0
            }],
            config: {
                ncls: "xr-now",
                acls: "xr-act",
                icls: "xr-cur",
                type: "from",
                sync: !1,
                fix: !1,
                snap: null,
                once: !1,
                hz: !1,
                pc: !0,
                act: "play none none reverse",
                debug: !1
            }
        };
        if (($.utils.is_string(e) || $.utils.is_dom(e)) && (e = $(e)),
            $.utils.is_jquery(e)) {
            if (e = {
                anchor: {
                    elm: e.parent()
                },
                item: {
                    elm: e
                }
            },
                $.utils.is_string(t) && (e.tween = [$.xRoll.preset[t]]),
                $.utils.is_object(t) && (e.tween = [t]),
                $.utils.is_array(t)) {
                e.tween = t;
                for (var s = 0; s < t.length; s++)
                    $.utils.is_string(t[s]) && (e.tween[s] = [$.xRoll.preset[t[s]]])
            }
            $.utils.is_true(t) && (e.config = {
                debug: t
            })
        } else if ($.utils.is_object(e)) {
            if ($.utils.is_object(e.scroller) || (e.scroller = {
                start: e.scroller
            }),
                ($.utils.is_string(e.item) || $.utils.is_dom(e.item)) && (e.item = {
                    elm: $(e.item)
                }),
                ($.utils.is_jquery(e.item) || $.utils.is_array(e.item)) && (e.item = {
                    elm: e.item
                }),
                $.utils.is_object(e.item) && ($.utils.is_none(e.item.elm) ? (e.item = {
                    elm: e.item
                },
                    i.tween = {}) : ($.utils.is_string(e.item.elm) || $.utils.is_dom(e.item.elm)) && (e.item.elm = $(e.item.elm))),
                $.utils.is_array(e.item.elm) && (e.item.elm = $(e.item.elm)),
                $.utils.is_jquery(e.item.elm) && function (e, i) {
                    var s = null;
                    if (1 < e.length && !$.utils.is_none(i)) {
                        if ($.utils.is_array(i))
                            $(e).each(function (e) {
                                i.indexOf(e) < 0 && i.push(e)
                            }),
                                s = function (e) {
                                    return i.indexOf($(e).index())
                                }
                                ;
                        else if ($.utils.is_string(i))
                            switch (["t", "w", "h", "a", "r"].indexOf(i.slice(-1))) {
                                case 0:
                                    s = function (e) {
                                        return $(e).offset().top
                                    }
                                        ;
                                    break;
                                case 1:
                                    s = function (e) {
                                        return $(e).outerWidth()
                                    }
                                        ;
                                    break;
                                case 2:
                                    s = function (e) {
                                        return $(e).outerHeight()
                                    }
                                        ;
                                    break;
                                case 3:
                                    s = function (e) {
                                        return $(e).outerWidth() * $(e).outerHeight()
                                    }
                                        ;
                                    break;
                                case 4:
                                    s = function () {
                                        return Math.random()
                                    }
                                        ;
                                    break;
                                default:
                                    s = function (e) {
                                        return $(e).index()
                                    }
                            }
                        e.sort(function (e, t) {
                            t = s(e) > s(t);
                            return "-" == i.slice(0, 1) && (t = !t),
                                t
                        })
                    }
                }(e.item.elm, e.item.sort),
                $.utils.is_none(e.anchor) && ($.utils.is_object(e.item.elm) ? console.log("[anchor] 未指定锚点元素") : e.anchor = {
                    elm: $(e.item.elm).parent()
                }),
                $.utils.is_object(e.anchor) || (e.anchor = {
                    elm: $(e.anchor)
                }),
                $.utils.is_string(e.tween) && (e.tween = [$.xRoll.preset[e.tween]]),
                $.utils.is_object(e.tween) && (e.tween = [e.tween]),
                $.utils.is_array(e.tween))
                for (s = 0; s < e.tween.length; s++)
                    $.utils.is_string(e.tween[s]) && (e.tween[s] = [$.xRoll.preset[e.tween[s]]]);
            $.utils.is_true(t) || $.utils.is_true(e.config) ? e.config = {
                debug: t || e.config
            } : ($.utils.is_string(t) || $.utils.is_string(e.config)) && (e.config = {
                acls: t || e.config
            })
        }
        var o = $.extend(!0, {}, i, e);
        o.config.sync || (o.scroller.end = o.scroller.start,
            o.anchor.end = o.anchor.start);
        i = {
            tl: gsap.timeline()
        };
        function n(e) {
            if ($.utils.is_mobile)
                return !1;
            var t = $("body").hasClass("full-screen") ? e : e - 17;
            return window.matchMedia ? window.matchMedia("(min-width: ".concat(e, "px)")).matches : $(window).width() >= t
        }
        function a(e) {
            if ($.utils.is_jquery(o.item.elm))
                for (var t = 0; t < e.length; t += 2)
                    e[t].style.cssText = e[t + 1]
        }
        i.st = ScrollTrigger.create({
            animation: i.tl,
            scroller: o.container,
            trigger: o.anchor.elm,
            start: o.anchor.start + " " + o.scroller.start,
            end: o.anchor.end + " " + o.scroller.end,
            horizontal: o.config.hz,
            pin: o.config.fix,
            scrub: o.config.sync,
            snap: o.config.snap,
            once: o.config.once,
            toggleClass: o.config.ncls,
            toggleActions: o.config.act,
            markers: o.config.debug,
            onEnter: function (e) {
                $(o.anchor.elm).addClass(o.config.acls),
                    $(o.item.elm).addClass(o.config.icls),
                    $.utils.is_function(o.onEnter) && o.onEnter(e)
            },
            onLeave: function (e) {
                $.utils.is_function(o.onLeave) && o.onLeave(e)
            },
            onEnterBack: function (e) {
                $.utils.is_function(o.onEnterBack) && o.onEnterBack(e)
            },
            onLeaveBack: function (e) {
                $(o.anchor.elm).removeClass(o.config.acls),
                    $(o.item.elm).removeClass(o.config.icls),
                    $.utils.is_function(o.onLeaveBack) && o.onLeaveBack(e)
            },
            onUpdate: function (e) {
                $.utils.is_function(o.onUpdate) && o.onUpdate(e)
            },
            onToggle: function (e) {
                $.utils.is_function(o.onToggle) && o.onToggle(e)
            },
            onRefresh: function (e) {
                $.utils.is_function(o.onRefresh) && o.onRefresh(e)
            }
        }),
            i.state = function (e) {
                var t = [];
                $.utils.is_jquery(e) ? gsap.utils.toArray(e).forEach(function (e) {
                    return t.push(e, e.style.cssText)
                }) : t = e;
                return t
            }(o.item.elm),
            i.init = function () {
                for (var e = this, t = n(1024), i = 0; i < o.tween.length; i++)
                    e.tl.add(gsap.from(o.item.elm, $.extend(!0, {}, o.tween[i], {
                        immediateRender: !o.config.pc || t
                    })));
                function s() {
                    t != n(1024) ? (t = !t,
                        o.config.pc && (t ? e.st.enable() : (e.tl.pause(),
                            e.st.disable(),
                            a(e.state)))) : t && e.st.enable()
                }
                o.config.pc && e.st.disable(),
                    o.config.pc && !t && a(e.state),
                    s(),
                    $(window).on("resize", s)
            }
            ,
            i.kill = function () {
                this.tl.kill(),
                    this.st.kill(),
                    a(this.state)
            }
            ,
            i.init(),
            $.xRoll.list.push(i)
    }
    ,
    $.xRoll.list = [],
    $.xRoll.preset = {
        left: {
            x: "-30%"
        },
        right: {
            x: "30%"
        },
        top: {
            y: "-30%"
        },
        bottom: {
            y: "30%"
        }
    },
    $.utils.init({
        htmlSize: !1,
        backTop: '[class*="topping"]',
        scrollFade: [{
            elm: ".topping-mod",
            bottom: function () {
                var e = $("body").height();
                return 0 < $(".x-footer").length && (e = Math.floor($(".x-footer").offset().top)),
                    e
            }
        }, {
            elm: ".sidebar-mod",
            range: $(window).height() / 2,
            always: !0
        }]
    }),
    $(function () {
        $(".x-header .menu-btn").on("click", function () {
            var e = $(this).closest(".x-header");
            e.find(".nav-mod");
            e.hasClass("menu-open") ? ($("body").removeClass("menu-screen"),
                e.removeClass("menu-open"),
                $.utils.enWinScroll()) : ($("body").addClass("menu-screen"),
                    e.addClass("menu-open"),
                    "fixed" !== e.css("position") && gsap.to(window, {
                        duration: .2,
                        scrollTo: 0
                    }))
        }),
            $(".x-header .nav-box").hover(function () {
                $(".nav_child").addClass("s")
            }, function () {
                $(".nav_child").removeClass("s")
            }),
            $(".x-header .nav_child").hover(function () {
                $(".x-header .nav-box:visible").size() && $(".nav_child").addClass("s")
            }, function () {
                $(".nav_child").removeClass("s")
            }),
            $(".x-header .nav-lv a[href]").on("click", function () {
                $("body").removeClass("menu-screen"),
                    $(".x-header").removeClass("menu-open"),
                    $.utils.enWinScroll()
            }),
            $(".x-header .nav-mod .arr").on("click", function () {
                var e = $(this)
                    , t = e.closest(".nav-item");
                t.hasClass("act") ? t.removeClass("act").children(".nav-lv").slideUp(200) : (t.addClass("act").siblings(".nav-item").removeClass("act").children(".nav-lv").slideUp(0),
                    e.parent().siblings(".nav-lv").slideDown(200))
            }),
            $(".x-header .nav_child .h .arr").click(function () {
                $(this).parents(".item").toggleClass("s"),
                    $(this).parents(".item").siblings().removeClass("s")
            }),
            window.matchMedia("(max-width: 768px)").addListener(function (e) {
                e.matches || ($("body").removeClass("menu-screen"),
                    $(".x-header").removeClass("menu-open").find(".nav-mod").removeAttr("style").find(".nav-item").removeClass("act").find(".nav-lv").removeAttr("style"),
                    0 == $(".pop-mod.x-show").length && $.utils.enWinScroll())
            })
    }),
    $(function () {
        $(".x-header2 .menu-btn").on("click", function () {
            var e = $(this).closest(".x-header2");
            e.find(".nav-mod");
            e.hasClass("menu-open") ? ($("body").removeClass("menu-screen"),
                e.removeClass("menu-open"),
                $.utils.enWinScroll()) : ($("body").addClass("menu-screen"),
                    e.addClass("menu-open"),
                    "fixed" !== e.css("position") && gsap.to(window, {
                        duration: .2,
                        scrollTo: 0
                    }))
        }),
            $(".x-header2 .nav-box").hover(function () {
                $(".nav_child").addClass("s")
            }, function () {
                $(".nav_child").removeClass("s")
            }),
            $(".x-header2 .nav_child").hover(function () {
                $(".x-header2 .nav-box:visible").size() && $(".nav_child").addClass("s")
            }, function () {
                $(".nav_child").removeClass("s")
            }),
            $(".x-header2 .nav-lv a[href]").on("click", function () {
                $("body").removeClass("menu-screen"),
                    $(".x-header2").removeClass("menu-open"),
                    $.utils.enWinScroll()
            }),
            $(".x-header2 .nav-mod .arr").on("click", function () {
                var e = $(this)
                    , t = e.closest(".nav-item");
                t.hasClass("act") ? t.removeClass("act").children(".nav-lv").slideUp(200) : (t.addClass("act").siblings(".nav-item").removeClass("act").children(".nav-lv").slideUp(0),
                    e.parent().siblings(".nav-lv").slideDown(200))
            }),
            $(".x-header2 .nav_child .h .arr").click(function () {
                $(this).parents(".item").toggleClass("s"),
                    $(this).parents(".item").siblings().removeClass("s")
            }),
            window.matchMedia("(max-width: 768px)").addListener(function (e) {
                e.matches || ($("body").removeClass("menu-screen"),
                    $(".x-header2").removeClass("menu-open").find(".nav-mod").removeAttr("style").find(".nav-item").removeClass("act").find(".nav-lv").removeAttr("style"),
                    0 == $(".pop-mod.x-show").length && $.utils.enWinScroll())
            })
    }),
    $(function () {
        $(".header_page .menu-btn").on("click", function () {
            var e = $(this).closest(".header_page");
            e.find(".nav-mod");
            e.hasClass("menu-open") ? ($("body").removeClass("menu-screen"),
                e.removeClass("menu-open"),
                $.utils.enWinScroll()) : ($("body").addClass("menu-screen"),
                    e.addClass("menu-open"),
                    $.utils.unWinScroll(),
                    "fixed" !== e.css("position") && gsap.to(window, {
                        duration: .2,
                        scrollTo: 0
                    }))
        }),
            $(".header_page .nav-lv a[href]").on("click", function () {
                $("body").removeClass("menu-screen"),
                    $(".header_page").removeClass("menu-open"),
                    $.utils.enWinScroll()
            }),
            $(".header_page .nav-mod .arr").on("click", function () {
                var e = $(this)
                    , t = e.closest(".nav-item");
                t.hasClass("act") ? t.removeClass("act").children(".nav-lv").slideUp(0) : (t.addClass("act").siblings(".nav-item").removeClass("act").children(".nav-lv").slideUp(0),
                    e.parent().siblings(".nav-lv").slideDown(0))
            }),
            window.matchMedia("(max-width: 768px)").addListener(function (e) {
                e.matches || ($("body").removeClass("menu-screen"),
                    $(".header_page").removeClass("menu-open").find(".nav-mod").removeAttr("style").find(".nav-item").removeClass("act").find(".nav-lv").removeAttr("style"),
                    0 == $(".pop-mod.x-show").length && $.utils.enWinScroll())
            }),
            $(".header_page .nav-mod").click(function () {
                $(".header_page").removeClass("menu-open"),
                    $("body").removeClass("menu-screen").removeClass("lock-screen")
            }),
            $(".header_page .nav-box .nav-item").click(function (e) {
                e.stopPropagation()
            })
    }),
    $(".banner").slick({
        autoplay: !0,
        autoplaySpeed: 5e3,
        speed: 800,
        dots: !0,
        arrows: !1,
        cssEase: "cubic-bezier(0.5,0,0.3,1)",
        pauseOnHover: !1,
        appendDots: ".banner .nav"
    }),
    $(".banner").on("afterChange", function (e, t, i) {
        0 < $(".banner .slick-current").find("video").size() && ($(".banner.slick-current").find("video")[0].play(),
            $(".banner").slick("slickPause"),
            $(".banner .slick-current").find("video").bind("ended", function () {
                $(".banner").slick("slickPlay")
            }))
    }),
    $(function () {
        $(".scbar .arr").bind("click", function () {
            $(this).parent().toggleClass("act")
        })
    }),
    $(function () {
        $(".scroll-mod").xScroll({})
    }),
    $(function () {
        $(".pop-mod").on("touchmove", function (e) {
            if (!($.utils.is_wechat || $(this).find(".pop-panel").prop("scrollHeight") > $(this).find(".pop-panel").outerHeight()))
                return !1
        }),
            $(".pop-mod").each(function () {
                var s = $(this)
                    , e = s.find(".pop-close")
                    , o = []
                    , n = [];
                function a(e, t) {
                    e.length < 1 || (e.addClass("x-show"),
                        $.utils.unWinScroll(),
                        $.utils.fireCallbacks(e, o, [e, $(t) || null]))
                }
                function r(e, t) {
                    e.length < 1 || (e.removeClass("x-show"),
                        clearTimeout(null),
                        setTimeout(function () {
                            0 < e.find("video").length && e.find("video").each(function () {
                                this.pause()
                            })
                        }, 1e3 * gsap.getProperty(e[0], "transition-duration")),
                        $.utils.enWinScroll(),
                        $.utils.fireCallbacks(e, n, [e, $(t) || null]))
                }
                s.on("show", function (e, t, i) {
                    e.stopPropagation(),
                        $.utils.is_function(t) ? (o.push(t),
                            i && a(s)) : a(s, t)
                }),
                    s.on("hide", function (e, t, i) {
                        e.stopPropagation(),
                            $.utils.is_function(t) ? (n.push(t),
                                i && r(s)) : r(s, t)
                    }),
                    e.on("click", function () {
                        r(s, $(this))
                    })
            }),
            $(document).on("click", "[pop-show]", function (e) {
                e.stopPropagation();
                e = $(this);
                $(e.attr("pop-show")).triggerHandler("show", e)
            }),
            $(document).on("click", "[pop-hide]", function (e) {
                e.stopPropagation();
                var t = $(this)
                    , i = null;
                $.utils.is_undefined($(e.target).attr("pop-hide")) || ($.utils.is_none(t.attr("pop-hide")) ? i = t.closest(".pop-mod") : (i = $(t.attr("pop-hide")),
                    0 < t.closest(".pop-mod").length && (i = i.add(t.closest(".pop-mod")))),
                    i.triggerHandler("hide", t))
            })
    }),
    $(function () {
        $(".search-mod .search-tap").on("click", function (e) {
            e.stopPropagation();
            var t = $(this)
                , e = t.closest(".search-mod")
                , i = e.find(".search-input");
            $(".search-mod").not(e).removeClass("x-show").find(".search-tap").removeClass("icon-close"),
                e.hasClass("x-show") ? e.removeClass("x-show").find(".search-tap").removeClass("icon-close") : (e.addClass("x-show"),
                    !e.hasClass("at-l") && t.hasClass("xicon") && e.find(".search-tap").addClass("icon-close"),
                    setTimeout(function () {
                        i.select()
                    }, 100))
        }),
            $(".search-mod .search-box").on("click", function (e) {
                e.stopPropagation(),
                    $(".search-mod").not($(this).closest(".search-mod")).removeClass("x-show").find(".search-tap").removeClass("icon-close")
            }),
            $(document).on("click", function (e) {
                0 < $(e.target).closest(".search-mod").length && $(e.target).closest(".search-mod").hasClass("x-show") && $(e.target).hasClass("search-input") || $(".search-mod").hasClass("x-show") && $(".search-mod").removeClass("x-show").find(".search-tap").removeClass("icon-close")
            })
    }),
    $(function () {
        $(".select-mod").each(function () {
            var i = $(this)
                , e = i.find(".select-trigger")
                , t = i.find(".select-bar")
                , s = i.find(".select-btn")
                , o = i.find(".select-val")
                , n = i.find(".select-cont")
                , a = i.find(".select-opts")
                , r = i.find(".select-native")
                , l = !$.utils.is_undefined(i.attr("select-hover"))
                , c = [];
            a.xScroll({
                preventDefault: !0
            }),
                0 < e.length ? o.is("input") && !s.hasClass("select-trigger") && (e.removeClass("select-trigger"),
                    e = s.addClass("select-trigger")) : e = (o.is("input") ? s : t).addClass("select-trigger"),
                0 < r.length && (0 < n.find(".cur").length ? r.find("option").eq(n.find(".cur").index())[0].selected = !0 : r.find("option:first")[0].selected = !0),
                0 < n.find(".cur").length && (o.is("input") ? o.val(n.find(".cur").text()) : o.text(n.find(".cur").text()),
                    o.hasClass("placeholder") && o.removeClass("placeholder")),
                e.on("click", function (e) {
                    i.hasClass("sc-show") ? i.removeClass("sc-show") : i.addClass("sc-show").removeClass("sq-show")
                }),
                i.on("mouseenter", function () {
                    $.utils.is_mobile || l && !i.hasClass("sc-show") && i.addClass("sc-show").removeClass("sq-show")
                }),
                i.on("mouseleave", function () {
                    $.utils.is_mobile || l && i.hasClass("sc-show") && i.removeClass("sc-show")
                }),
                i.on("touchmove", function (e) {
                    e.stopPropagation()
                }),
                $(document).on("click", function (e) {
                    (i.hasClass("sc-show") || i.hasClass("sq-show")) && (i.is(e.target) || 0 !== i.has(e.target).length || i.removeClass("sc-show sq-show"))
                }),
                r.on("click", function (e) {
                    e.stopPropagation()
                }),
                r.on("change", function () {
                    0 < this.selectedIndex && i.find(".select-item").eq(this.selectedIndex - 1).trigger("click")
                }),
                i.on("click", ".select-item", function () {
                    var e = $(this)
                        , t = e.text();
                    e.hasClass("cur") || (i.find(".select-item").removeClass("cur"),
                        e.addClass("cur"),
                        i.removeClass("sc-show sq-show"),
                        o.is("input") ? o.val(t) : o.text(t),
                        o.hasClass("placeholder") && o.removeClass("placeholder"),
                        $.utils.fireCallbacks(i, c, [e]))
                }),
                o.on("focus", function () {
                    var e = $(this);
                    i.removeClass("sc-show"),
                        "" !== e.val() && (i.hasClass("sq-show") || i.addClass("sq-show"))
                }),
                o.on("input", function () {
                    "" !== $(this).val() ? i.hasClass("sq-show") || i.addClass("sq-show") : i.hasClass("sq-show") && i.removeClass("sq-show"),
                        0 < i.find(".cur").length && $(this).val() !== i.find(".cur").text() && i.find(".cur").removeClass("cur")
                }),
                i.on("select", function (e, t) {
                    return e.stopPropagation(),
                        $.utils.is_function(t) ? c.push(t) : $.utils.is_number(t) && i.find(".select-item").eq(t).trigger("click"),
                        c
                }),
                i.on("reitem", function (e, t) {
                    e.stopPropagation(),
                        i.find(".select-item").replaceWith(t)
                })
        })
    }),
    $(function () {
        var n = 0 < $("img").length ? $("img")[0].src : "";
        $(".share-box").each(function () {
            var e, t = $(this), i = {
                wb: "http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}",
                qq: "http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary=&pics={{IMAGE}}",
                qz: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&summary={{DESCRIPTION}}&pics={{IMAGE}}&desc=&site=",
                tumblr: "https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url={{URL}}&title={{TITLE}}",
                twitter: "https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}",
                linkedin: "http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{DESCRIPTION}}&armin=armin",
                facebook: "https://www.facebook.com/sharer/sharer.php?s=100&p[title]={{TITLE}}p[summary]={{DESCRIPTION}}&p[url]={{URL}}&p[images]={{IMAGE}}",
                pinterest: "https://www.pinterest.com/pin/create/button/?url={{URL}}&description={{DESCRIPTION}}&media={{IMAGE}}",
                googleplus: "https://plus.google.com/share?url={{URL}}&t={{TITLE}}"
            }, s = {
                url: t.data("url") || location.href,
                title: t.data("title") || document.title,
                image: t.data("image") || n,
                description: t.data("desc") || $('meta[name="description"]').attr("content")
            }, o = {};
            for (e in i)
                o[e] = i[e].replace(/{{([A-Z]*)}}/g, function (e, t) {
                    t = t.toLowerCase();
                    return s[t] ? encodeURIComponent(s[t]) : ""
                });
            t.find('a[href="#"]').each(function () {
                var e = $(this);
                if (e.hasClass("icon-wx"))
                    e.attr("href", "javascript:void(0);"),
                        new QRCode(e.find(".code")[0], {
                            text: s.url
                        });
                else
                    for (var t in o)
                        e.hasClass("icon-" + t) && (e.attr("href", o[t]),
                            e.attr("target", "_blank"))
            })
        })
    }),
    $(function () {
        $(".special_bottom .nav a").hover(function () {
            $(this).hasClass("s") || ($(this).addClass("s"),
                $(this).bind("animationend", function () {
                    $(this).removeClass("s")
                }))
        }),
            0 < $(".special_bottom .now").size() && $(".special_bottom .nav").scrollLeft($(".special_bottom .nav .now").offset().left - $(".special_bottom .nav").offset().left)
    }),
    $(function () {
        $(".suds-target").on("click", function (e) {
            e.stopPropagation();
            e = $(this).closest(".suds-mod");
            e.hasClass("x-show") ? e.removeClass("x-show") : e.addClass("x-show")
        }),
            $(".suds-pop").on("click", function (e) {
                e.stopPropagation()
            }),
            $(document).on("click", function () {
                $(".suds-mod").removeClass("x-show")
            })
    }),
    $(function () {
        $(".tab-mod").each(function (e) {
            $(this).data("tm", e)
        }),
            $(".tab-term").each(function () {
                $(this).data("tt", $(this).closest(".tab-mod").data("tm"))
            }),
            $(".tab-item").each(function () {
                $(this).data("ti", $(this).closest(".tab-mod").data("tm"))
            }),
            $(".tab-mod").each(function () {
                var i = $(this)
                    , s = i.data("tm")
                    , o = i.find(".tab-term").filter(function () {
                        return $(this).data("tt") == s
                    })
                    , n = i.find(".tab-item").filter(function () {
                        return $(this).data("ti") == s
                    })
                    , e = $.utils.is_undefined(i.attr("tab-hover")) ? "click.tab" : "click.tab mouseenter.tab"
                    , a = 0 < o.filter(".cur").length ? o.filter(".cur").index() : 0
                    , r = [];
                o.eq(a).addClass("cur"),
                    n.eq(a).addClass("act"),
                    i.on(e, ".tab-term", function () {
                        var e = $(this)
                            , t = e.index();
                        e.data("tt") == s && t != a && (a = t,
                            o.eq(a).addClass("cur").siblings().removeClass("cur"),
                            n.eq(a).addClass("act").siblings().removeClass("act"),
                            $.utils.fireCallbacks(i, r, [a, e, n.eq(a)]))
                    }),
                    i.on("tab", function (e, t) {
                        return e.stopPropagation(),
                            $.utils.is_function(t) ? r.push(t) : $.utils.is_number(t) && o.eq(t).trigger("click.tab"),
                            r
                    })
            })
    }),
    $(function () {
        $(".video-mod").xVideo()
    }),
    $(function () {
        $(".tracker-mod").each(function () {
            var s = $(this)
                , c = s.find(".tracker-box")
                , d = s.find(".tracker-track")
                , u = s.find(".tracker-item")
                , f = s.find(".tracker-prev")
                , h = s.find(".tracker-next")
                , p = 0 < u.filter(".cur").length ? u.filter(".cur").index() : 0
                , m = !$.utils.is_undefined(s.attr("page"))
                , g = !$.utils.is_undefined(s.attr("round"))
                , v = null
                , b = null
                , o = null
                , e = null
                , n = null;
            function i() {
                b = d.outerWidth() > c.width() ? "x" : d.outerHeight() > c.height() ? "y" : null,
                    v && 0 < v.length && v[0].vars.type != b && (v[0].kill(),
                        v = null,
                        gsap.set(d, {
                            x: 0,
                            y: 0
                        })),
                    v || u.removeClass("in out over"),
                    $.utils.is_string(b) ? (v ? v[0].update(!0) : v = Draggable.create(d, {
                        type: b,
                        bounds: c,
                        inertia: !0,
                        lockAxis: !0,
                        zIndexBoost: !1,
                        dragResistance: .3,
                        edgeResistance: .9,
                        dragClickables: !0,
                        allowContextMenu: !0,
                        onClick: function () {
                            gsap.killTweensOf(".tracker-track")
                        },
                        onDragEnd: function () {
                            x()
                        },
                        onThrowComplete: function () {
                            m && !g && ("x" == b ? 0 == this.x ? (f.addClass("disable"),
                                h.removeClass("disable")) : this.x == this.minX ? (h.addClass("disable"),
                                    f.removeClass("disable")) : (f.removeClass("disable"),
                                        h.removeClass("disable")) : "y" == b && (0 == this.y ? (f.addClass("disable"),
                                            h.removeClass("disable")) : this.y == this.minY ? (h.addClass("disable"),
                                                f.removeClass("disable")) : (f.removeClass("disable"),
                                                    h.removeClass("disable"))))
                        }
                    }),
                        f.removeClass("disdrag"),
                        h.removeClass("disdrag")) : (f.addClass("disdrag"),
                            h.addClass("disdrag")),
                    a(u.eq(p), !0)
            }
            function x() {
                n = e = o = null,
                    u.removeClass("in out over"),
                    o = u.filter(function () {
                        return "x" == b ? $(this).offset().left >= c.offset().left && $(this).offset().left + $(this).outerWidth() <= c.offset().left + c.width() : "y" == b ? $(this).offset().top >= c.offset().top && $(this).offset().top + $(this).outerHeight() <= c.offset().top + c.height() : void 0
                    }).addClass("in"),
                    e = u.not(o).addClass("out"),
                    n = e.filter(function () {
                        return "x" == b ? $(this).offset().left < c.offset().left && $(this).offset().left + $(this).outerWidth() > c.offset().left || $(this).offset().left < c.offset().left + c.width() && $(this).offset().left + $(this).outerWidth() > c.offset().left + c.width() : "y" == b ? $(this).offset().top < c.offset().top && $(this).offset().top + $(this).outerHeight() > c.offset().top || $(this).offset().top < c.offset().top + c.height() && $(this).offset().top + $(this).outerHeight() > c.offset().top + c.height() : void 0
                    }).addClass("over")
            }
            function a(e, t) {
                var i, s, o, n, a, r, l;
                0 == e.length || !t && e.index() == p || (e.trigger("click.tab"),
                    p = e.index(),
                    g || m || (0 == p ? f.addClass("disable") : f.removeClass("disable"),
                        p == u.length - 1 ? h.addClass("disable") : h.removeClass("disable")),
                    e.hasClass("cur") || e.addClass("cur").siblings().removeClass("cur"),
                    v && (t = t ? 0 : .5,
                        "x" == b ? (i = gsap.getProperty(d[0], "x"),
                            s = c.offset().left + c.width() / 2,
                            o = e.offset().left + e.outerWidth() / 2,
                            a = {
                                duration: t,
                                x: n = v[0].minX
                            },
                            r = {
                                duration: t,
                                x: v[0].maxX
                            },
                            l = {
                                duration: t,
                                x: "+=" + (s - o)
                            }) : "y" == b && (i = gsap.getProperty(d[0], "y"),
                                s = c.offset().top + c.height() / 2,
                                o = e.offset().top + e.outerHeight() / 2,
                                a = {
                                    duration: t,
                                    y: n = v[0].minY
                                },
                                r = {
                                    duration: t,
                                    y: v[0].maxY
                                },
                                l = {
                                    duration: t,
                                    y: "+=" + (s - o)
                                }),
                        l = s < o ? 0 < n - i + o - s ? gsap.to(d, a) : gsap.to(d, l) : 0 < i + s - o ? gsap.to(d, r) : gsap.to(d, l),
                        0 < t ? l.eventCallback("onComplete", x) : x()))
            }
            i(),
                $(window).on("resize", $.debounce(300, i)),
                u.on("click.tracker", function () {
                    a($(this))
                }),
                f.on("click.tracker", function () {
                    var e = 0
                        , t = s.attr("page")
                        , i = u.eq(p).prevAll(":visible").first();
                    m ? v && (0 != (i = (i = (0 < o.length ? o : n).first().prevAll(":visible")).filter(function (e) {
                        return 0 < t ? e < t : 0 == e
                    })).length ? (g || (h.removeClass("disable"),
                        v && 1 == o.first().prevAll(":visible").length && f.addClass("disable")),
                        "x" == b ? (0 <= (e = 0 < t ? gsap.getProperty(d[0], "x") + (c.offset().left - i.offset().left) : gsap.getProperty(d[0], "x") + (c.offset().left + c.width() - (i.offset().left + i.outerWidth()))) && (e = 0,
                            g || f.addClass("disable")),
                            gsap.to(d, {
                                duration: .5,
                                x: e,
                                onComplete: x
                            })) : "y" == b && (0 <= (e = 0 < t ? gsap.getProperty(d[0], "y") + (c.offset().top - i.offset().top) : gsap.getProperty(d[0], "y") + (c.offset().top + c.height() - (i.offset().top + i.outerHeight()))) && (e = 0,
                                g || f.addClass("disable")),
                                gsap.to(d, {
                                    duration: .5,
                                    y: e,
                                    onComplete: x
                                }))) : v && g && ("x" == b ? gsap.to(d, {
                                    duration: .5,
                                    x: v[0].minX,
                                    onComplete: x
                                }) : "y" == b && gsap.to(d, {
                                    duration: .5,
                                    y: v[0].minY,
                                    onComplete: x
                                }))) : 0 == i.length ? g && a(u.last()) : a(i)
                }),
                h.on("click.tracker", function () {
                    var e = 0
                        , t = s.attr("page")
                        , i = u.eq(p).nextAll(":visible").first();
                    m ? v && (0 != (i = (i = (0 < o.length ? o : n).last().nextAll(":visible")).filter(function (e) {
                        return 0 < t ? e < t : 0 == e
                    })).length ? (g || (f.removeClass("disable"),
                        v && 1 == o.last().nextAll(":visible").length && h.addClass("disable")),
                        "x" == b ? ((e = 0 < t ? gsap.getProperty(d[0], "x") - (i.offset().left + i.outerWidth() - (c.offset().left + c.width())) : gsap.getProperty(d[0], "x") - (i.offset().left - c.offset().left)) - v[0].minX <= 0 && (e = v[0].minX,
                            g || h.addClass("disable")),
                            gsap.to(d, {
                                duration: .5,
                                x: e,
                                onComplete: x
                            })) : "y" == b && ((e = 0 < t ? gsap.getProperty(d[0], "y") - (i.offset().top + i.outerHeight() - (c.offset().top + c.height())) : gsap.getProperty(d[0], "y") - (i.offset().top - c.offset().top)) - v[0].minY <= 0 && (e = v[0].minY,
                                g || h.addClass("disable")),
                                gsap.to(d, {
                                    duration: .5,
                                    y: e,
                                    onComplete: x
                                }))) : v && g && ("x" == b ? gsap.to(d, {
                                    duration: .5,
                                    x: 0,
                                    onComplete: x
                                }) : "y" == b && gsap.to(d, {
                                    duration: .5,
                                    y: 0,
                                    onComplete: x
                                }))) : 0 == i.length ? g && a(u.first()) : a(i)
                }),
                s.on("refresh", function (e, t) {
                    e.stopPropagation(),
                        $.utils.is_undefined(t) && (t = 0),
                        p = t,
                        i()
                })
        })
    });

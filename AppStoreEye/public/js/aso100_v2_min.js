function centerModals() {
    $(".modal").each(function (a) {
        if (!$(this).hasClass("avatar-modal")) {
            var e = $(this).clone().css("display", "block").appendTo("body"), t = Math.round((e.height() - e.find(".modal-content").height()) / 2);
            t = t > 0 ? t : 0, e.remove(), $(this).find(".modal-content").css("margin-top", t)
        }
    }), $(".modal").on("show.bs.modal", centerModals)
}
function moreBtnShow() {
    $("table.version").length > 0 && $.each($(".version-desc"), function (a, e) {
        200 == $(this).height() && $(this).find("span").removeClass("hide")
    })
}
function wechatShareSuccessCallback(a) {
    return a.sign ? void $.ajax({
        type: "get",
        url: "/account/wechatShare",
        data: {sign: a.sign},
        dataType: "json",
        success: function (a) {
        }
    }) : !1
}
function refreshPage() {
    $.pjax.reload("#container")
}
function pjaxLoad(a, e) {
    a && (e || (e = "#container"), $.pjax({url: a, container: e, scrollTo: !1}))
}
function bindWechat(a, e) {
    var t, n = $(a), i = n.data("qrcodeurl"), o = n.data("checkurl"), s = n.data("bindinwechat"), r = n.data("title") || Lang.bindWechat_title;
    return requestTimes = 0, window.isWechat && !e ? ($.getJSON(s, function (e) {
        if (1e4 == e.code) {
            var t = document.location.href;
            t += -1 != t.indexOf("?") ? "&" : "?";
            var n = t.match(/t=\d+/i);
            t = n ? t.replace(n, "t=" + +new Date) : t + "t=" + +new Date, document.location.href = t
        } else bindWechat(a, !0)
    }), !1) : (swal({
        title: '<div class="wechat-qrcode" id="wechat-qrcode"><h4 class="title-second"><span></span>' + r + '</h4><div class="qrcode-container"><img src="' + sourcePublic + 'app/images/v2/wecaht-loading.jpg" alt="" /><div class="logo"></div></div></div>',
        text: '<div class="wechat-qrcode-desc">&nbsp;</div>',
        showConfirmButton: !0,
        confirmButtonText: Lang.close,
        cancelButtonText: Lang.cancel_btn,
        confirmButtonColor: "#0bb995",
        html: !0
    }, function () {
        -1 !== location.pathname.indexOf("settingSubscribe") && _hmt.push(["_trackEvent", "\u4e2a\u4eba\u4e2d\u5fc3&\u5fae\u4fe1\u8ba2\u9605", "\u53d6\u6d88\u7ed1\u5b9a"]), clearInterval(t)
    }), void(i && $.getJSON(i, function (a) {
        if (1e4 == a.code) {
            if ($("#wechat-qrcode img").attr("src", a.imgsrc), $(".wechat-qrcode-desc").html(a.desc), $("#wechat-qrcode img")[0].onload = function () {
                    $("#wechat-qrcode .logo").show()
                }, !o)return;
            t = setInterval(function () {
                requestTimes++, requestTimes >= 100 && ($(".sa-button-container .confirm").trigger("click"), clearInterval(t)), $.getJSON(o, function (a) {
                    if (1e4 == a.code) {
                        $(".wechat-qrcode-desc").html(a.msg), clearInterval(t);
                        var e = document.location.href;
                        e += -1 != e.indexOf("?") ? "" : "?";
                        var n = e.match(/t=\d+/i);
                        e = n ? e.replace(n, "t=" + +new Date) : e + "&t=" + +new Date, document.location.href = e
                    } else 10108 == a.code && (clearInterval(t), swal({
                        title: a.msg,
                        type: "error",
                        showCancelButton: !1,
                        confirmButtonColor: "#33ba95",
                        confirmButtonText: Lang.confirm_btn,
                        cancelButtonText: Lang.cancel_btn
                    }))
                })
            }, 1500)
        } else swal({
            title: a.msg,
            type: "error",
            showCancelButton: !1,
            confirmButtonColor: "#33ba95",
            confirmButtonText: Lang.confirm_btn,
            cancelButtonText: Lang.cancel_btn
        })
    })))
}
function setTitle(a) {
    $("head title").html(decodeURI(a));
    var e = location.pathname.split("/")[2];
    e = e.replace(/([A-Z])/g, "-$1").toLowerCase(), e = "container-" + e, $("#container").attr("class", "container-box " + e)
}
function unBindWechat(a) {
    var e = $(a), t = e.data("url");
    $.getJSON(t, function (a) {
        1e4 == a.code ? swal({
            title: Lang.unbindWechat_title,
            showConfirmButton: !0,
            confirmButtonText: Lang.confirm_btn,
            cancelButtonText: Lang.cancel_btn,
            confirmButtonColor: "#0bb995"
        }, function () {
            document.location.reload()
        }) : swal(a.msg, "", "error")
    })
}
function dataSearchPush() {
    $.fn.dataTable.ext.search.push(function (a, e, t) {
        var n = parseInt($("#minHints").val(), 10), i = parseInt($("#maxHints").val(), 10), o = parseFloat(e[2]) || 0;
        return !!(isNaN(n) && isNaN(i) || isNaN(n) && i >= o || o >= n && isNaN(i) || o >= n && i >= o)
    }), $.fn.dataTable.ext.search.push(function (a, e, t) {
        var n = parseInt($("#minResult").val(), 10), i = parseInt($("#maxResult").val(), 10), o = parseFloat(e[3]) || 0;
        return !!(isNaN(n) && isNaN(i) || isNaN(n) && i >= o || o >= n && isNaN(i) || o >= n && i >= o)
    }), $.fn.dataTable.ext.search.push(function (a, e, t, n, i) {
        var o = parseInt($("#minRank").val(), 10), s = parseInt($("#maxRank").val(), 10);
        if (window.tableSort)var r = parseFloat(e[1]) || 0;
        if (window.keywordExtend)var r = parseFloat(e[4]) || 0;
        return !!(isNaN(o) && isNaN(s) || isNaN(o) && s >= r || r >= o && isNaN(s) || r >= o && s >= r)
    }), $(document).on("keyup", ".screen-nav .btn-group input", function () {
        var a = $(this);
        a.val() ? a.addClass("hasData") : a.removeClass("hasData"), $(".screen-nav .hasData").length > 0 ? $("#clear-screen").show() : $("#clear-screen").hide(), window.tableSort && window.tableSort.draw(), window.keywordExtend && window.keywordExtend.draw()
    }), $(document).on("click", "#clear-screen", function () {
        $(".screen-nav input").val(""), window.tableSort && window.tableSort.draw(), window.keywordExtend && window.keywordExtend.draw(), $("#clear-screen").hide()
    })
}
function dataTables(a, e) {
    var t = a, n = t.data("keywordurl"), i = t.data("hintsurl"), o = t.data("numberurl"), s = t.data("nosignin");
    return t ? (window.tableSort && (window.tableSort = null), window.diff = e, void(window.tableSort = t.DataTable({
        dom: window.isMobile ? "frtip" : "lfrtip",
        data: window.tableData,
        order: [],
        lengthMenu: [100, 200, 500, 1e3],
        lengthChange: !window.isMobile,
        searching: !0,
        autoWidth: !1,
        createdRow: function (a, e, t) {
            e[4] && $(a).addClass("bg"), $(a).addClass("keyword-histroy")
        },
        columnDefs: [{
            orderSequence: ["desc", "asc"],
            className: "col-md-3 sort-rank",
            type: "numeric",
            data: function (a, e, t, n) {
                if (window.diff)return a[1];
                var i, o, s, r = a[1].split("#");
                return r[0] = parseInt(r[0]), r[1] = parseInt(r[1]), "sort" === e ? r[0] : (0 == r[0] ? i = "- " + Lang.down_list : (i = r[0], r[1] > 0 ? (o = "top", s = Lang.rise + r[1] + Lang.staff) : 0 == r[1] ? (o = "right", s = Lang.unchanged) : (o = "bottom", s = Lang.decline + Math.abs(r[1]) + Lang.staff), i += '<div class="' + o + '" title="' + Lang.compared_to_yesterday_ranking + s + '"><span class="glyphicon glyphicon-triangle-' + o + '" aria-hidden="true"></span><span>' + Math.abs(r[1]) + "</span></div>"), i)
            },
            targets: 1
        }, {
            className: "col-md-3 sort-word", data: function (a, e, t, i) {
                return "sort" === e ? a[5] : ($word = -1 != a[0].indexOf("@") ? a[0].replace(/@/g, " ") : a[0], '<a href="' + n + encodeURIComponent(a[0]) + '" target="_blank">' + $word + "</a>")
            }, targets: 0
        }, {
            orderSequence: ["desc", "asc"], className: "col-md-2 sort-nums", data: function (a, e, t, n) {
                return '<a class="number" href="' + i + a[6] + '" target="_blank">' + a[2] + "</a>"
            }, targets: 2
        }, {
            orderSequence: ["desc", "asc"], className: "col-md-2 sort-index", data: function (a, e, t, n) {
                return '<a class="number" href="' + o + a[6] + '" target="_blank">' + a[3] + "</a>"
            }, targets: 3
        }, {
            className: "col-md-2", orderable: !1, data: function (a, e, t, n) {
                var i, o, r, d, c;
                return c = isMobile ? "" : "tooltip", i = '<span class="icon icon-trend histroy" data-id="' + a[6] + '" data-toggle="' + c + '" data-original-title="' + Lang.show_history_trend + '">' + Lang.trend + "</span>", 0 == s && (1 == a[4] ? (r = Lang.cancel_btn, o = "icon-cancel custom-remove", d = Lang.cancel_attention) : (r = Lang.set_top, o = "icon-top add-custom-keyword-btn", d = Lang.add_attention), i += '<span class="icon ' + o + '" type="add" data-keyword="' + a[0] + '" data-id="' + a[6] + '" data-type="cancel" data-toggle="' + c + '" data-original-title="' + d + '">' + r + "</span>"), i
            }, targets: 4
        }],
        initComplete: function () {
            t.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
        },
        language: {
            sProcessing: Lang.dataTables_sProcessing,
            sLengthMenu: Lang.dataTables_sLengthMenu,
            sZeroRecords: Lang.dataTables_sZeroRecords,
            sInfo: Lang.dataTables_sInfo,
            sInfoEmpty: Lang.dataTables_sInfoEmpty,
            sInfoFiltered: Lang.dataTables_sInfoFiltered,
            sInfoPostFix: "",
            sSearch: Lang.dataTables_sSearch,
            sUrl: "",
            sEmptyTable: Lang.dataTables_sEmptyTable,
            sLoadingRecords: Lang.dataTables_sLoadingRecords,
            sInfoThousands: ",",
            oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
            oAria: {sSortAscending: Lang.dataTables_sSortAscending, sSortDescending: Lang.dataTables_sSortDescending}
        }
    }))) : !1
}
function mobileGotop() {
    var a = $(".top-back-mobile");
    return a.length > 0 && (a.on("click", function () {
        $("html, body").animate({scrollTop: "0px"}, 200)
    }), $(document).on("scroll", function () {
        $(document).scrollTop() > 300 ? a.show() : a.hide()
    })), $(".rank-index").length > 0 && $('a[target="_blank"]').each(function (a, e) {
        $(e).attr("target", "_self")
    }), !1
}
function footerFixed() {
    function a() {
        var a = $(this).width(), s = $(this).height();
        s > t ? e.addClass("fixed") : e.removeClass("fixed"), 1200 > a ? (n.hide(), o = !1) : (o = !0, i && n.show())
    }

    var e = $(".footer");
    if (e.length <= 0)return !1;
    var t = e.offset().top + e.outerHeight(), n = $(".top-back"), i = !1, o = !0;
    parseInt(n.css("right"));
    t < $(window).height() ? e.addClass("fixed") : e.removeClass("fixed"), n.length > 0 && (n.on("click", function () {
        $("html, body").animate({scrollTop: "0px"}, 800)
    }), $(document).on("scroll", function () {
        o && $(document).scrollTop() > 100 ? (n.show(), i = !0) : (n.hide(), i = !1)
    })), a(), $(window).on("resize", a)
}
function addMyApp(a, e, t) {
    if (a) {
        if (e = $(e), e.hasClass("disabled"))return !1;
        var n, i = e.data("name"), o = e.data("url"), s = e.data("reload"), t = t, r = e.html();
        if (s = "undefined" == typeof s ? 1 : s, n = $('input[name="platform-type"]').val(), -1 == $.inArray(n, ["0", "1"]))return swal("\u53c2\u6570\u9519\u8bef\uff0c\u5237\u65b0\u540e\u91cd\u8bd5"), !1;
        e.html(Lang.now_adding);
        var d = "/account/addMyFavorite";
        $.ajax({
            type: "get", url: d, data: {appid: a, platform: n}, dataType: "json", success: function (d) {
                if (d && 1e4 == d.code)if (data = d.data, s)window.location.reload(); else {
                    "app" == t ? e.html('<a role="button" href="javascript:void(0);" class="btn btn-default" onclick="delMyAppAtInfo(' + a + ');"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;' + Lang.cancel_add + "</a>") : e.parent().html('<a role="button" href="javascript:void(0);" data-reload="0" data-url="' + o + '" data-name="' + i + '" class="btn btn-custom btn-default btn-padding" onclick="delMyAppAtInfo(' + a + ', this);"><span class="glyphicon glyphicon-aso-move" aria-hidden="true"></span>&nbsp;' + Lang.cancel_add + "</a>");
                    var c = 0 == data.platform ? "iOS" : "Android", l = ".platform-" + data.platform, p = newDiv = newLi = "";
                    if (newDiv = '<div class="platform-' + data.platform + '">', newDiv += '<div class="clearfix myapp-title"><span class="myapp-text">' + c + '</span><a class="myapp-btn" href="' + data.manageUrl + '">\u7ba1\u7406\u6211\u7684\u5e94\u7528</a></div>', newDiv += '<i class="line myapp-list-' + data.platform + '"></i>', newLi = '<a class="myapp-li-' + data.appid + "-" + data.platform + '" href="' + data.appUrl + '"><li>', newLi += '<table class="myapp-list">', newLi += "<tr>", newLi += '<td rowspan="2" class="icon"><img src="' + data.icon + '" alt=""></td>', newLi += '<td><span class="app-name">' + data.appName + "</span></td>", newLi += '<tr><td><span class="publisher">' + data.publisher + "</span></td></tr>", newLi += "</table>", newLi += "</li></a>", p = newDiv + newLi + "</div>", $(".no-app").length > 0)$(p).insertAfter($(".my-apps").find(".myapp-list-header")), $(".my-apps").find(".no-app").remove(); else if ($(l).length > 0) {
                        var u = ".myapp-list-" + n;
                        $(newLi).insertAfter($(".my-apps").find(u))
                    } else 0 == data.platform ? $(p).insertBefore($(".my-apps").find(".platform-1")) : $(p).insertAfter($(".my-apps").find(".platform-0"))
                } else e.html(r), swal(d.msg)
            }
        })
    }
}
function delMyApp(a, e, t) {
    return -1 == $.inArray(t, [0, 1]) ? (swal("\u53c2\u6570\u9519\u8bef\uff0c\u5237\u65b0\u540e\u91cd\u8bd5"), !1) : void swal({
        title: Lang.delete_app_title,
        text: Lang.delete_app_text,
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: Lang.delete_app_confirmButtonText,
        cancelButtonText: Lang.cancel_btn,
        closeOnConfirm: !1
    }, function () {
        e = $(e);
        var n = (e.html(), "/account/delMyFavorite");
        $.ajax({
            type: "get", url: n, data: {appid: a, platform: t}, dataType: "json", success: function (n) {
                if (n && 1e4 == n.code) {
                    e.parents(".list").remove();
                    var i = ".my-apps .myapp-li-" + a + "-" + t;
                    $(i).remove();
                    var o = window.isMobile ? parseInt($(".myapp-list").val()) - 1 : $(".myapp-list").length;
                    if (1 > o)$(".my-apps .platform-1,.my-apps .platform-0").remove(), $('<li class="no-app"><a href="javascript:void(0);">' + Lang.delete_app_no_app + "</a></li>").insertBefore($(".my-apps").find(".myapp-list-header")), $(".app-list").html('<p class="text-center">' + Lang.delete_app_no_add_app + "</p>"), $(".platform-title-0,.platform-title-1").remove(); else {
                        if (window.isMobile)$(".myapp-list").val(o); else {
                            var s = ".my-apps .platform-" + t + " .myapp-list", r = ".my-apps .platform-" + t;
                            $(s).length < 1 && $(r).remove()
                        }
                        var d = ".myapp .platform-" + t + " .media", c = ".myapp .platform-" + t;
                        $(d).length < 1 && $(c).remove()
                    }
                    $(".myApp .list .number").each(function (a, e) {
                        $(e).html(a + 1)
                    }), swal(Lang.delete_app_succ_title, Lang.delete_app_succ_text, "success")
                } else swal(n.msg)
            }
        })
    })
}
function delMyAppAtInfo(a, e) {
    swal({
        title: Lang.delete_app_title,
        text: Lang.delete_app_text,
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: Lang.delete_app_confirmButtonText,
        cancelButtonText: Lang.cancel_btn,
        closeOnConfirm: !1
    }, function () {
        var t = "/account/delMyFavorite";
        e = $(e);
        var n, i = e.data("name"), o = e.data("url"), s = (e.data("reload"), e.data("page"));
        e.html();
        return n = $('input[name="platform-type"]').val(), -1 == $.inArray(n, ["0", "1"]) ? (swal("\u53c2\u6570\u9519\u8bef\uff0c\u5237\u65b0\u540e\u91cd\u8bd5"), !1) : void $.ajax({
            type: "get",
            url: t,
            data: {appid: a, platform: n},
            dataType: "json",
            success: function (t) {
                if (t && 1e4 == t.code)if ("app" == s)window.location.reload(); else {
                    e.parent().html('<a class="btn btn-custom pace-inactive" href="javascript:void(0);" data-reload="0" data-url="' + o + '" data-name="' + i + '" onclick="addMyApp(' + a + ', this)" role="button"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;' + Lang.delete_app_add_my_app + "</a>");
                    var r = ".myapp-li-" + a + "-" + n;
                    if ($(r).remove(), $(".myapp-list").length < 1)$(".my-apps .platform-1,.my-apps .platform-0").remove(), $('<li class="no-app"><a href="javascript:void(0);">^_^ \u6ca1\u6709\u5e94\u7528</a></li>').insertBefore($(".my-apps").find(".myapp-list-header")); else {
                        var d = ".my-apps .platform-" + n + " .myapp-list", c = ".my-apps .platform-" + n;
                        $(d).length < 1 && $(c).remove()
                    }
                    swal({
                        title: t.msg,
                        type: "success",
                        showCancelButton: !1,
                        confirmButtonColor: "#33ba95",
                        confirmButtonText: Lang.confirm_btn,
                        cancelButtonText: Lang.cancel_btn
                    })
                } else swal(t.msg)
            }
        })
    })
}
function ajaxSendVerifyMail(a, e) {
    if (a) {
        var t = "/account/ajaxSendVerifyMail";
        $.ajax({
            type: "get", url: t, data: {username: a}, dataType: "json", success: function (a) {
                a && 1e4 == a.code ? $(e).parent().html(Lang.verify_mail_been_send) : $(e).parent().html(a.msg)
            }
        })
    }
}
function getCurrentKeywordData() {
    var a = {}, e = 0;
    a.list = {}, a.max_date = window.chartData.max_date, a.min_date = window.chartData.min_date, a.total = window.chartData.total, a.title = window.chartData.title;
    for (var t = window.currentKeywordid.length - 1; t >= 0; t--)e = window.currentKeywordid[t], a.list[e] = window.chartData.list[e];
    return a
}
function arrDel(a, e) {
    return a.slice(0, e).concat(a.slice(e + 1))
}
function getChartsData(a, e, t) {
    if (!a)return !1;
    if ("object" == typeof a && (e = a.queryData, a = a.ajaxUrl), !a)return !1;
    var n = $(".export-data");
    if (n.length > 0) {
        var i = "", o = n.data("url") || "";
        o && ($.map(e, function (a, e) {
            i += "/" + e + "/" + a
        }), n.attr("href", o + i))
    }
    $.ajax({
        type: "get", url: a, data: e, dataType: "json", success: function (a, n, i) {
            if (a && 1e4 == a.code) {
                (e.sdate || e.edate) && window.chartData.sdate == e.sdate && window.chartData.edate == e.edate || (window.chartData.sdate = e.sdate, window.chartData.edate = e.edate, window.chartData.list = a.data.list, window.chartData.min_date = a.data.min_date, window.chartData.max_date = a.data.max_date, window.chartData.total = a.data.total), e.word_id && !window.chartData.titleDate && (window.chartData.titleDate = Lang.nearly_seven_days), drawCharts(a.data, t);
                var o = i.getResponseHeader("Callback");
                if (o && -1 != o.indexOf("function")) {
                    var s = new Function("return " + o)();
                    s()
                } else o && "function" == typeof window[o] && window[o](a.data)
            } else drawNodataCharts(a.msgelementObj, t)
        }
    })
}
function getChartsKeywordData(a, e) {
    var t = e.word_id;
    return t ? (window.currentKeywordid = [t], void(window.hasDataIdStr && -1 != window.hasDataIdStr.indexOf(t) ? drawCharts(getCurrentKeywordData()) : (a || (a = $("#charts-ajax-data").data("ajaxurl")), window.hasDataIdStr += "," + t, $.ajax({
        type: "get",
        url: a,
        data: e,
        dataType: "json",
        success: function (a) {
            var e;
            if (a && 1e4 == a.code) {
                window.chartData.max_date = window.chartData.max_date >= a.data.max_date ? window.chartData.max_date : a.data.max_date, window.chartData.min_date = window.chartData.min_date <= a.data.min_date ? window.chartData.min_date : a.data.min_date, window.chartData.total = window.chartData.total >= a.data.total ? window.chartData.total : a.data.total, window.chartData.title = a.data.title;
                for (e in a.data.list)window.chartData.list[e] = a.data.list[e]
            } else for (e = window.currentKeywordid.length - 1; e >= 0; e--)window.currentKeywordid[e] == t && (window.currentKeywordid = arrDel(window.currentKeywordid, e));
            drawCharts(getCurrentKeywordData())
        }
    })))) : !1
}
function createTable(a) {
    var e = [], t = a.list[0].data, n = a.list.length, i = a.datatype, o = +new Date, s = '<i data-toggle="tooltip" title="" style="padding: 5px;" data-original-title="' + Lang.no_data_3 + '">&nbsp;-&nbsp;</i>';
    a.nodata && a.dataDay && (o = a.dataDay);
    var r = function (a) {
        return 10 > a ? "0" + a : a
    }, d = 0;
    $.each(t, function (t, i) {
        var c = new Date(i[0]);
        e[d] = [], e[d][0] = c.getFullYear() + "-" + r(c.getMonth() + 1) + "-" + r(c.getDate()), e[d][1] = +c > o ? s : i[1];
        for (var t = 1; n > t; t++)n > 1 && (+c > o ? e[d][t + 1] = s : e[d][t + 1] = a.list[t].data[d][1]);
        d++
    }), e.reverse(), window.createTableSort && window.createTableSort.destroy();
    var c = $("#itc-sort"), l = [];
    0 == i ? c.html('<thead><tr class="large"><th>' + Lang.table_thead_1 + "</th><th>" + Lang.table_thead_10 + "</th></tr></thead><tbody></tbody>") : 1 == i ? c.html('<thead><tr class="large"><th>' + Lang.table_thead_1 + "</th><th>" + Lang.table_thead_2 + '<span data-toggle="tooltip" title="" class="glyphicon glyphicon-question-sign mobile-hide" data-original-title="' + Lang.table_thead_3 + '"></span></th><th>' + Lang.table_thead_4 + "</th><th>" + Lang.table_thead_5 + '<span data-toggle="tooltip" title="" class="glyphicon glyphicon-question-sign mobile-hide" data-original-title="' + Lang.table_thead_6 + '"></span></th><th>' + Lang.table_thead_7 + "</th></tr></thead><tbody></tbody>") : 2 == i ? c.html('<thead><tr class="large"><th>' + Lang.table_thead_1 + "</th><th>" + Lang.table_thead_8 + '<span data-toggle="tooltip" title="' + Lang.table_thead_9 + '" class="glyphicon glyphicon-question-sign mobile-hide"></span></th><th>' + Lang.table_thead_7 + "</th></tr></thead><tbody></tbody>") : (l = [{
        data: function (a, e, t, n) {
            return "sort" === e ? a[4] : (console.log(), a[4] > 0 ? a[4] + "%" : a[4])
        }, targets: 4
    }], c.html('<thead><tr class="large"><th>' + Lang.table_thead_1 + "</th><th>" + Lang.table_thead_11 + '<span data-toggle="tooltip" title="" class="glyphicon glyphicon-question-sign mobile-hide" data-original-title="' + Lang.table_thead_11_tips + '"></span></th><th>' + Lang.table_thead_12 + '<span data-toggle="tooltip" title="" class="glyphicon glyphicon-question-sign mobile-hide" data-original-title="' + Lang.table_thead_12_tips + '"></span></th><th>' + Lang.table_thead_13 + '<span data-toggle="tooltip" title="" class="glyphicon glyphicon-question-sign mobile-hide" data-original-title="' + Lang.table_thead_13_tips + '"></span></th><th>' + Lang.table_thead_14 + '<span data-toggle="tooltip" title="" class="glyphicon glyphicon-question-sign mobile-hide" data-original-title="' + Lang.table_thead_14_tips + '"></span></th></tr></thead><tbody></tbody>')), window.createTableSort = c.DataTable({
        data: e,
        order: [],
        lengthMenu: [30, 90, 360],
        lengthChange: !1,
        searching: !1,
        autoWidth: !1,
        columnDefs: l,
        initComplete: function () {
            c.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
        },
        language: {
            sProcessing: Lang.dataTables_sProcessing,
            sLengthMenu: Lang.dataTables_sLengthMenu,
            sZeroRecords: Lang.dataTables_sZeroRecords,
            sInfo: Lang.dataTables_sInfo,
            sInfoEmpty: Lang.dataTables_sInfoEmpty,
            sInfoFiltered: Lang.dataTables_sInfoFiltered,
            sInfoPostFix: "",
            sSearch: Lang.dataTables_sSearch,
            sUrl: "",
            sEmptyTable: Lang.dataTables_sEmptyTable,
            sLoadingRecords: Lang.dataTables_sLoadingRecords,
            sInfoThousands: ",",
            oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
            oAria: {sSortAscending: Lang.dataTables_sSortAscending, sSortDescending: Lang.dataTables_sSortDescending}
        }
    })
}
function createTableOptKeyword(a) {
    var e = $("#opt-keyword-sort"), t = JSON.parse(a), n = [], i = [];
    e.html('<thead><tr class="large"><th>' + Lang.dataTables_opt_keyword_name + "</th><th>" + Lang.dataTables_opt_keyword_hints + '<span data-toggle="tooltip" title="' + Lang.app_keyword_sort_index_tip + '" class="glyphicon glyphicon-question-sign mobile-hide"></span>&nbsp<i class="icon icon-up"></i><i class="icon icon-down"></i></th><th>' + Lang.dataTables_opt_keyword_result + '<span data-toggle="tooltip" title="' + Lang.app_keyword_sort_nums_tip + '" class="glyphicon glyphicon-question-sign mobile-hide"></span>&nbsp<i class="icon icon-up"></i><i class="icon icon-down"></i></th><th>' + Lang.dataTables_opt_keyword_tuozhan_1 + '<span data-toggle="tooltip" title="' + Lang.app_keyword_tuozhan_tip + '" class="glyphicon glyphicon-question-sign mobile-hide"></span></th></tr></thead><tbody></tbody>');
    for (var o = 0; o < t.length; o++)n[o] = [], n[o][0] = t[o].word, n[o][1] = t[o].hints, n[o][2] = t[o].search_no, n[o][3] = '<a href="https://aso100.com/trend/keywordExtend?keyword=' + t[o].word + '" target="_blank">' + Lang.dataTables_opt_keyword_tuozhan_2 + "</a>";
    window.tableSortOpt && (window.tableSortOpt = null), window.tableSortOpt = e.DataTable({
        data: n,
        order: [],
        lengthChange: !1,
        searching: !1,
        autoWidth: !1,
        columnDefs: i,
        paging: !1,
        info: !1
    })
}
function _exportingConfig(a) {
    var e = {enabled: !1};
    return window.isMobile || (e = {
        buttons: {
            contextButton: {
                menuItems: [{
                    text: Lang.export_png, onclick: function () {
                        svgExport($(this.container).find("svg")[0], a, "png"), window.isMobile && $(".highcharts-contextmenu > div > div").css({
                            background: "none",
                            color: "rgb(48, 48, 48)"
                        })
                    }
                }, {
                    text: Lang.export_jpg, onclick: function () {
                        svgExport($(this.container).find("svg")[0], a, "jpeg"), window.isMobile && $(".highcharts-contextmenu > div > div").css({
                            background: "none",
                            color: "rgb(48, 48, 48)"
                        })
                    }
                }]
            }
        }
    }), e
}
function _credits(a, e) {
    return a = "undefined" != typeof a ? a : !0, e = "undefined" != typeof e ? e : 13, {
        enabled: a,
        fontSize: e + "px",
        text: "Powered by ASO100.com",
        href: "http://www.aso100.com"
    }
}
function drawCharts(a, e) {
    var t;
    if (t = e || $("#charts"), !t.length || "none" == t.css("display"))return !1;
    var n = [], i = "", o = 1, s = !0, r = "spline", d = "\u6392\u540d", c = "", l = ["#00BC93", "#ea5a5a", "#428edc", "#e2719e", "#e58844", "#5dcfa3", "#61b5d6", "#5fd055", "#e5da19", "#ee4f89", "#b47b42"], p = (l.length, t.data("appname") || $("#charts-appname").val() || ""), u = a.version || [], h = a.list || [];
    if (a.list) {
        var m = 0, f = 0;
        for (index in a.list)a.list[index] && ($.map(a.list[index].data, function (a, e) {
            Math.abs(a[1]) > f && (f = Math.abs(a[1]))
        }), a.list[index].color = l[m], n.push(a.list[index])), m++
    }
    if ("undefined" != typeof a.stacking && (c = a.stacking), "undefined" != typeof a.reversed && (s = a.reversed), "undefined" != typeof a.type && (r = a.type), "undefined" != typeof a.yAxisTxt && (d = a.yAxisTxt), o = (a.max_date - a.min_date) / 1e3 / 3600, o = Math.ceil(o / a.total), a.title ? (window.isMobile && (i = -1 != a.title.indexOf("“##APPNAME##”") ? a.title.replace("“##APPNAME##”", "") : a.title.replace("##APPNAME##", "")), i = i || a.title.replace("##APPNAME##", p), i = i.replace("##DATE##", Lang.space + window.chartData.titleDate + Lang.space)) : i = window.chartData.titleDate ? window.chartData.titleDate + " " + Lang.ranking_trend : Lang.ranking_trend, fSize = isMobile ? "0.375rem" : "16px", t.length > 0) {
        var g = {
            type: r,
            spacingRight: 40,
            marginLeft: isMobile ? f > 500 ? 50 : 32 : 27,
            marginRight: 10,
            backgroundColor: "",
            events: {
                load: function () {
                    var a = $('<div class="float-logo"></div>');
                    if (isMobile) {
                        var e = t.find(".highcharts-plot-border");
                        a.css({top: parseInt(e.attr("y")) + parseInt(e.attr("height")) - 50, bottom: "initial"})
                    }
                    t.append(a)
                }, redraw: function () {
                    chart = this, extremumDraw(h, chart, 1)
                }
            }
        };
        yAxisOffset = 0, isMobile || (delete g.marginLeft, delete g.marginRight), Highcharts.setOptions({global: {timezoneOffset: (new Date).getTimezoneOffset()}});
        var b = _exportingConfig(i);
        t.highcharts({
            chart: g,
            exporting: b,
            lang: {noData: Lang.no_data_3},
            legend: {itemMarginBottom: 10},
            noData: {style: {fontSize: "16px", color: "#777777"}},
            credits: _credits(!1),
            title: {
                text: i,
                style: {
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, "\u5fae\u8f6f\u96c5\u9ed1", sans-serif',
                    fontSize: fSize
                },
                x: 26
            },
            subtitle: {},
            xAxis: {
                type: "datetime",
                title: {},
                startOnTick: !1,
                endOnTick: !1,
                min: a.min_date,
                max: a.max_date,
                labels: {step: 1},
                dateTimeLabelFormats: {
                    millisecond: Lang.dateTimeLabelFormats_millisecond,
                    second: Lang.dateTimeLabelFormats_second,
                    minute: Lang.dateTimeLabelFormats_minute,
                    hour: Lang.dateTimeLabelFormats_hour,
                    day: Lang.dateTimeLabelFormats_day,
                    week: Lang.dateTimeLabelFormats_week,
                    month: Lang.dateTimeLabelFormats_month,
                    year: Lang.dateTimeLabelFormats_year
                },
                lineColor: "#C0C0C0",
                lineWidth: 1,
                tickLength: 0,
                tickWidth: 1,
                tickColor: "#EEEEEE"
            },
            yAxis: [{
                title: {text: yAxisOffset >= 0 && !isMobile ? d : ""},
                allowDecimals: !1,
                offset: yAxisOffset,
                tickPositioner: function () {
                    if ("column" == r)return !1;
                    var e, t, n = [], i = 1;
                    for (this.dataMax < 5 ? (e = 1, t = 5) : this.dataMax < 20 ? (e = 5, t = 20) : this.dataMax < 50 ? (e = 10, t = 50) : this.dataMax < 100 ? (e = 20, t = 100) : this.dataMax < 500 ? (e = 100, t = 500) : this.dataMax < 1500 ? (e = 500, t = 1500) : (i = "undefined" == typeof a.minY ? this.dataMin - 1 : a.minY, e = Math.ceil((this.dataMax - (this.dataMin > i ? i : this.dataMin)) / 5), e = e > 0 ? e : 1, t = this.dataMax + 1), 0 == this.dataMin && (i = 0), n.push(i), i; t >= i - e; i += e)1 >= i || i == this.dataMin - 1 || n.push(this.dataMin > 1 ? i - 1 : i);
                    return n
                },
                reversed: s,
                gridLineWidth: 1,
                gridLineColor: "#EEEEEE",
                labels: {
                    formatter: function () {
                        return Math.abs(this.value)
                    }
                },
                lineColor: "#C0C0C0",
                lineWidth: 1,
                tickLength: 0,
                tickWidth: "1",
                tickColor: "#EEEEEE"
            }, {lineColor: "#EEEEEE", lineWidth: 1, opposite: !0, title: {text: ""}}],
            tooltip: {
                crosshairs: {color: "#C0C0C0"},
                positioner: function (a, e, t) {
                    var n = t.plotX;
                    return this.chart.plotWidth < t.plotX + a ? n = t.plotX - a * (window.isMobile ? .8 : .6) : t.plotX < this.chart.plotLeft && (n = t.plotX + a * (window.isMobile ? .3 : .6)), {
                        x: n,
                        y: 100
                    }
                },
                hideDelay: 200,
                shared: !0,
                valueSuffix: Lang.staff,
                valueSuffix: "",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                dateTimeLabelFormats: {
                    millisecond: Lang.dateTimeLabelFormats_millisecond,
                    second: Lang.dateTimeLabelFormats_second,
                    minute: Lang.dateTimeLabelFormats_minute,
                    hour: Lang.dateTimeLabelFormats_hour_2,
                    day: Lang.dateTimeLabelFormats_day_2,
                    month: Lang.dateTimeLabelFormats_month,
                    year: Lang.dateTimeLabelFormats_year
                },
                useHTML: !(isMobile && isIOS && isWechat),
                headerFormat: isMobile && isIOS && isWechat ? '<span style="display: block; line-height: 200px; font-size: 85%">{point.key}</span><br/>' : '<span style="display: block; padding-bottom: 10px; font-size: 85%;">{point.key}</span><table>',
                pointFormatter: isMobile && isIOS && isWechat ? !1 : function () {
                    return '<tr><td style="color:' + this.series.color + ';padding-right: 3px;">●</td><td>' + this.series.name + '</td><td style=" padding-left: 7px; color:' + this.series.color + ';">' + Math.abs(this.y) + "</td></tr>"
                },
                pointFormat: isMobile && isIOS && isWechat ? '<span style="color:{point.color}">●</span> {series.name} <span style="padding-left: 7px;color:{point.color}">  {point.y}</span><br/>' : "",
                footerFormat: isMobile && isIOS && isWechat ? "" : "</table>"
            },
            plotOptions: {
                line: {dataLabels: {enabled: !1}, enableMouseTracking: !0},
                series: {
                    stacking: c,
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidth: 2,
                            halo: {
                                size: 0,
                                attributes: {
                                    fill: Highcharts.getOptions().colors[2],
                                    "stroke-width": 1,
                                    stroke: Highcharts.getOptions().colors[1]
                                }
                            }
                        }
                    },
                    marker: {
                        enabled: !0,
                        radius: a.total > 360 ? 1 : 2,
                        states: {hover: {radiusPlus: 2, lineWidthPlus: 1}}
                    },
                    point: {
                        events: {
                            mouseOver: function () {
                                if (!u)return !1;
                                var a = this.series.chart, e = this.index, t = {}, n = this.plotX + (window.isMobile ? 32 : 70);
                                n > a.plotWidth && (n = a.plotWidth);
                                var i = !1;
                                $.map(u, function (a, n) {
                                    e == n && (i = !0, t = a)
                                }), i && (a.version && a.version.hide(), a.version = a.renderer.label(t.date + "<br />" + Lang.new_version_tip + t.version, n, a.plotTop + a.plotHeight + 8, "callout", 0, 0, !0, "").css({color: "#FFFFFF"}).attr({
                                    fill: "rgba(0, 0, 0, 1)",
                                    padding: 4,
                                    r: 10,
                                    zIndex: 8
                                }).add())
                            }, mouseOut: function () {
                                this.series.chart.version && this.series.chart.version.hide()
                            }
                        }
                    },
                    events: {
                        mouseOut: function () {
                            this.chart.version && this.chart.version.hide()
                        }, legendItemClick: function (a) {
                            $(".highcharts-g-value").remove()
                        }
                    }
                }
            },
            series: n
        }, function (a) {
            u && $.map(u, function (e, t) {
                var n, i, o = a.series[0].data[t];
                n = a.renderer.image("/public/app/images/release_icon.png", o.plotX + a.plotLeft - 8, a.plotTop + a.plotHeight - 8, 16, 16).attr({zIndex: 10}).add(), i = n.getBBox();
                var s;
                n.on("mouseenter", function () {
                    a.version && a.version.hide();
                    var t = i.x;
                    t > a.plotWidth && (t = a.plotWidth), s = a.renderer.label(e.date + "<br />" + Lang.new_version_tip + e.version, t, i.y + 16, "callout", 0, 0, !0, "").css({color: "#FFFFFF"}).attr({
                        fill: "rgba(0, 0, 0, 1)",
                        padding: 4,
                        r: 10,
                        zIndex: 10
                    }).add()
                }).on("mouseout", function () {
                    s.hide()
                }).on("mousemove", function () {
                    a.version && a.version.hide()
                })
            }), extremumDraw(h, a, 0)
        })
    }
}
function overViewpieRingChart(a, e) {
    var t;
    if (t = e || $("#charts"), 0 == t.length || "none" == t.css("display"))return !1;
    var n = isMobile ? "0.375rem" : "18px";
    t.highcharts({
        chart: {type: "pie"},
        exporting: {enabled: !1},
        title: {
            text: a.title,
            style: {
                fontFamily: '"Helvetica Neue", Helvetica, Arial, "\u5fae\u8f6f\u96c5\u9ed1", sans-serif',
                fontSize: n
            },
            x: 26
        },
        credits: _credits(!1),
        tooltip: {
            useHTML: !0,
            headerFormat: '<small style="display: block; font-size: 12px;">',
            pointFormatter: function () {
                return this.name.replace(/[\uff08|(].*?[)|\uff09]/i, "") + "-" + Math.round(100 * this.percentage, 2) / 100 + "% (" + this.y + ")"
            },
            footerFormat: "</small>"
        },
        plotOptions: {
            pie: {
                size: "146px",
                startAngle: 180,
                borderWidth: 3,
                allowPointSelect: !0,
                cursor: "pointer",
                dataLabels: {enabled: !1},
                showInLegend: !0
            }, series: {states: {hover: {enabled: !1}}}
        },
        series: a.list
    })
}
function overViewbarChart(a, e) {
    var t;
    if (t = e || $("#charts"), 0 == t.length || "none" == t.css("display"))return !1;
    isMobile ? "0.375rem" : "18px";
    t.highcharts({
        chart: {type: "bar", spacingRight: 0, spacingLeft: 0, spacingTop: 0},
        title: {text: ""},
        xAxis: {
            min: 0,
            tickLength: 0,
            lineWidth: 0,
            labels: {
                useHTML: !0,
                style: {
                    color: "#666666",
                    fontSize: "14px",
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, "\u5fae\u8f6f\u96c5\u9ed1", sans-serif',
                    fontWeight: "bold"
                }
            },
            categories: a.cates
        },
        yAxis: {min: 0, labels: {enabled: !1}, gridLineWidth: 0, title: {text: ""}},
        exporting: {enabled: !1},
        credits: _credits(!1),
        tooltip: {
            useHTML: !0,
            headerFormat: '<small style="display: block; font-size: 12px;">\u5e94\u7528\u6570\u91cf\uff1a',
            pointFormatter: function () {
                return this.y
            },
            footerFormat: "</small>",
            positioner: function (a, e, t) {
                return {x: 99, y: t.plotY}
            }
        },
        plotOptions: {
            bar: {showInLegend: !1, color: a.color},
            series: {
                pointWidth: 15,
                minPointLength: 3,
                dataLabels: {
                    enabled: !0, color: "#666666", formatter: function () {
                        return this.y > 1e4 ? Math.round(this.y / 1e3) / 10 + "\u4e07" : this.y
                    }
                }
            }
        },
        series: a.list
    })
}
function pieChart(a, e) {
    var t;
    t = e || $("#pieChart");
    var n = a || t.data("chartdata"), i = {type: "pie", spacingRight: 40, marginRight: 1};
    window.isMobile ? yAxisOffset = -14 : (delete i.marginLeft, delete i.marginRight, yAxisOffset = 0);
    var o = _exportingConfig(n.title);
    fSize = isMobile ? "0.375rem" : "18px", $(t).highcharts({
        chart: i,
        exporting: o,
        credits: _credits(!1),
        title: {
            text: n.title,
            style: {
                fontFamily: '"Helvetica Neue", Helvetica, Arial, "\u5fae\u8f6f\u96c5\u9ed1", sans-serif',
                fontSize: fSize
            },
            x: 26
        },
        tooltip: {pointFormat: "<b>" + Lang.share + "</b>: <b>{point.percentage:.1f}%</b>"},
        plotOptions: {
            pie: {
                allowPointSelect: !0,
                cursor: "pointer",
                dataLabels: {
                    enabled: !0,
                    color: "#000000",
                    connectorColor: "#000000",
                    format: "<b>{point.name}</b>: <b>{point.percentage:.1f}%</b>"
                },
                showInLegend: !0
            }
        },
        series: [{type: "pie", data: n.chart}]
    })
}
function downSources() {
    $("#pieChart").length > 0 && pieChart()
}
function extremumDraw(a, e, t) {
}
function render(a, e) {
    a.renderer.label(e.y, e.plotX + a.plotLeft - 20, e.plotY + a.plotTop - 45, "callout", e.plotX + a.plotLeft, e.plotY + a.plotTop, !1, !1, "g-value").css({
        color: "#FFFFFF",
        align: "center"
    }).attr({fill: "rgba(0, 0, 0, 0.75)", padding: 8, r: 5, zIndex: 6}).add()
}
function drawNodataCharts(a, e) {
    var t;
    t = e || $("#charts"), fSize = isMobile ? "0.375rem" : "18px", a = a ? a : Lang.not_enter_current_list, t.length > 0 && t.highcharts({
        exporting: {enabled: !1},
        title: {text: a, style: {fontSize: fSize}, x: 26},
        lang: {noData: a},
        noData: {style: {fontWeight: "bold", fontSize: "15px", color: "#303030"}},
        credits: {
            enabled: !window.chartData.isReport,
            fontSize: "13px",
            text: "Powered by ASO100.com",
            href: "http://www.aso100.com"
        },
        yAxis: {title: {text: Lang.ranking}, reversed: !0},
        series: [{type: "line", name: Lang.no_data_3, data: []}]
    })
}
function svgExport(a, e, t) {
    t || (t = "png");
    var n = document.createElement("canvas"), i = n.getContext("2d"), o = document.createElement("A");
    canvg(n, (new XMLSerializer).serializeToString(a), {
        ignoreMouse: !0,
        ignoreAnimation: !0,
        useCORS: !0,
        renderCallback: function () {
            var a = document.createElement("img");
            "jpeg" == t ? (t = "image/jpeg", o.download = e + ".jpg", a.src = n.toDataURL("image/png"), a.onload = function () {
                i.fillStyle = "#ffffff", i.fillRect(0, 0, n.width, n.height), i.drawImage(a, 0, 0), a.src = "/public/app/images/chart-icon.png", a.onload = function () {
                    if (i.drawImage(a, 150, 260), o.href = n.toDataURL(t), document.all)o.click(); else {
                        var e = document.createEvent("MouseEvents");
                        e.initEvent("click", !0, !0), o.dispatchEvent(e)
                    }
                }
            }) : (t = "image/png", o.download = e + ".png", a.src = "/public/app/images/chart-icon.png", a.onload = function () {
                if (i.drawImage(a, 150, 260), o.href = n.toDataURL(t), document.all)o.click(); else {
                    var e = document.createEvent("MouseEvents");
                    e.initEvent("click", !0, !0), o.dispatchEvent(e)
                }
            })
        }
    })
}
function CEMixLen(a, e) {
    e = e ? e : 3;
    var t = 0, n = a.length;
    if (a) {
        for (var i = 0; n > i; i++)a.charCodeAt(i) > 255 ? t += e : t++;
        return t
    }
    return 0
}
function preventDefault(a) {
    a = a || window.event, a.preventDefault && a.preventDefault() || (a.returnValue = !1),
    a.stopPropagation && a.stopPropagation()
}
function accountPwd(a) {
    if (!a)return !1;
    var e, t = a.find(".sign-msg"), n = !1;
    a.find("input").on("focus", function () {
        clearTimeout(e), e = setTimeout(function () {
            a.find(".has-error").length < 1 && t.slideUp("fast")
        }, 500)
    }), a.find("#submit").on("click", function () {
        if (clearTimeout(e), n)return !1;
        n = !0;
        var i = !0, o = {};
        if (a.find("input.form-control").each(function () {
                var a = this.name, e = $(this);
                return value = e.val(), e.prop("disabled") ? !0 : (value = value.replace(/^\s+/i, ""), value = value.replace(/\s+$/i, ""), e.val(value), "" == value ? (i = !1, e.val(""), t.removeClass("success").html(this.placeholder + Lang.password_verify_2).slideDown("fast"), !1) : ("remember" == a && (value = e.prop("checked")), void(o[a] = value)))
            }), o.repassword && o.password && o.repassword != o.password && (t.removeClass("success").html(Lang.pwd_error_tip).slideDown("fast"), i = !1), !i)return n = !1, !1;
        var s = a.attr("method") || "GET", r = a.attr("action");
        return r ? ($.ajax({
            type: s, url: r, data: o, dataType: "json", error: function (a) {
                n = !1, a && 403 == a.status && window.location.reload()
            }, success: function (e, i, o) {
                n = !1;
                var s = a.data("alert") || 0;
                if (s && 1 == s)e && 1e4 == e.code ? swal({
                    title: Lang.mod_pwd_tip_1,
                    type: "success",
                    showCancelButton: !0,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.mod_pwd_tip_2,
                    cancelButtonColor: "#33ba95",
                    cancelButtonText: Lang.mod_pwd_tip_3
                }, function (a) {
                    a ? window.location.href = "/account/signin" : window.location.href = "/"
                }) : swal({
                    title: e.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                }); else {
                    e && 1e4 == e.code ? (e.showmsg ? t.addClass("success").html(e.msg).slideDown("fast") : t.removeClass("success").html(e.msg).slideUp("fast"), a.data("referrer") && (window.location.href = a.data("referrer"))) : ($("#code-img").trigger("click"), e.css && t.removeClass("success").addClass(e.css), t.html(e.msg).slideDown("fast"));
                    var r = o.getResponseHeader("callback");
                    if (r && -1 != r.indexOf("function")) {
                        var d = new Function("return " + r)();
                        d()
                    } else if (r && "function" == typeof window[r]) {
                        var c = o.getResponseHeader("callbackParam") || "";
                        c && (c = JSON.parse(c)), window[r](c)
                    }
                }
            }
        }), !1) : !1
    })
}
function vipSuccess() {
    $(".vip-label").addClass("vip-active-label")
}
function datePicker(ele) {
    var $dateRangePickerObj = ele, isOpen = $dateRangePickerObj.data("open"), isRefresh = $dateRangePickerObj.data("refresh") || 0, isMulit = $dateRangePickerObj.data("mulit"), isNoYestoday = $dateRangePickerObj.data("noyestoday"), opens = $dateRangePickerObj.data("opens") || "left", ranges = $dateRangePickerObj.data("ranges") || "", noVip = $dateRangePickerObj.data("novip") || 0, limitday = $dateRangePickerObj.data("limitday") || 0, rangesFirstKey, locales;
    noVip || (ranges ? $.map(ranges, function (obj, index) {
        ranges[index] = eval("(" + obj + ")")
    }) : "cn" == Lang.language_type ? (ranges = {
        "\u4eca\u65e5": [moment().startOf("day"), moment()],
        "\u6628\u65e5": [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "\u8fd17\u65e5": [moment().subtract(6, "days"), moment()],
        "\u8fd130\u65e5": [moment().subtract(29, "days"), moment()],
        "\u8fd1\u4e09\u4e2a\u6708": [moment().subtract(3, "month"), moment()],
        "\u8fd1\u4e00\u5e74": [moment().subtract(1, "years"), moment()]
    }, isNoYestoday && (delete ranges.\u6628\u65e5, delete ranges.\u4eca\u65e5)) : "en" == Lang.language_type && (ranges = {
        Today: [moment().startOf("day"), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 days": [moment().subtract(6, "days"), moment()],
        "Last 30 days": [moment().subtract(29, "days"), moment()],
        "Last 3 months": [moment().subtract(3, "month"), moment()],
        "Last year": [moment().subtract(1, "years"), moment()]
    }, isNoYestoday && (delete ranges.Today, delete ranges.Yesterday)), "cn" == Lang.language_type ? locales = {
        applyLabel: Lang.locales_applyLabel,
        cancelLabel: Lang.cancel_btn,
        fromLabel: Lang.locales_fromLabel,
        toLabel: Lang.locales_toLabel,
        customRangeLabel: Lang.locales_customRangeLabel,
        daysOfWeek: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
        monthNames: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
        firstDay: 1
    } : "en" == Lang.language_type && (locales = {
        applyLabel: Lang.locales_applyLabel,
        cancelLabel: Lang.cancel_btn,
        fromLabel: Lang.locales_fromLabel,
        toLabel: Lang.locales_toLabel,
        customRangeLabel: Lang.locales_customRangeLabel,
        firstDay: 1
    }), $.map(ranges, function (a, e) {
        rangesFirstKey || (rangesFirstKey = e)
    }), window.chartData.titleDate = rangesFirstKey, isMobile && ($dateRangePickerObj.find("span:eq(0).mobile-hide").html(rangesFirstKey).show(), locales.customRangeShow = !1), $dateRangePickerObj.daterangepicker({
        hideRangeInputs: isMobile,
        timePicker: !1,
        startDate: moment($dateRangePickerObj.data("date")),
        endDate: moment($dateRangePickerObj.data("edate")),
        minDate: $dateRangePickerObj.data("mindate") ? $dateRangePickerObj.data("mindate") : "04/01/2014",
        maxDate: moment().format("MM/DD/YYYY"),
        singleDatePicker: 0 == isMulit || !1,
        showDropdowns: !0,
        showWeekNumbers: !1,
        ranges: ranges,
        opens: opens,
        drops: "down",
        buttonClasses: ["btn", "btn-sm"],
        applyClass: "btn-primary",
        cancelClass: "btn-default",
        separator: " to ",
        locale: locales
    }, function (a, e, t) {
        var n;
        if (limitday && +a < +new Date - 86400 * limitday * 1e3)return swal({
            title: Lang.sorry_tip_1 + (limitday > 100 ? Lang.sorry_tip_2 : Lang.sorry_tip_3) + Lang.sorry_tip_4 + limitday + Lang.sorry_tip_5,
            confirmButtonText: Lang.confirm_btn,
            cancelButtonText: Lang.cancel_btn
        }, function () {
        }), !1;
        if (n = 0 == isMulit ? a.format(Lang.format_time) : t != Lang.locales_customRangeLabel && isMobile ? t : a.format(Lang.format_time) + "~" + e.format(Lang.format_time), $dateRangePickerObj.find("span:eq(0)").html(n), 1 == isOpen)if (isMulit) {
            var i, o, s, r, d = new RegExp("sdate\\/\\d+-\\d+-\\d+", "i");
            i = document.location.pathname, i.split("/").length < 3 && (i += "/index"), o = i.match(d), o ? i = i.replace(o, "sdate/" + a.format("YYYY-MM-DD")) : i += "/sdate/" + a.format("YYYY-MM-D"), d = new RegExp("edate\\/\\d+-\\d+-\\d+", "i"), s = i.match(d), s ? i = i.replace(s, "edate/" + e.format("YYYY-MM-DD")) : i += "/edate/" + e.format("YYYY-MM-D"), r = window.location.protocol + "//" + window.location.hostname + i, isRefresh ? pjaxLoad(r) : window.location.href = r
        } else {
            var i, c, r, l = $dateRangePickerObj.data("paramname") || "date", d = new RegExp(l + "\\/\\d+-\\d+-\\d+", "i");
            i = document.location.pathname, i.split("/").length < 3 && (i += "/index"), -1 == document.location.search.indexOf("?search") && -1 == document.location.search.indexOf("&search") || (i += document.location.search.replace(/\?|=|&/g, "/")), c = i.match(d), i = c ? i.replace(c, l + "/" + a.format("YYYY-MM-DD")) : i + "/" + l + "/" + a.format("YYYY-MM-D"), r = window.location.protocol + "//" + window.location.hostname + i, isRefresh ? pjaxLoad(r) : window.location.href = r
        } else {
            t != Lang.locales_customRangeLabel ? window.chartData.titleDate = t : window.chartData.titleDate = a.format(Lang.format_time) + Lang.to + e.format(Lang.format_time);
            var r = $("#charts-ajax-data").data("ajaxurl"), p = $("#charts-ajax-data").data("querydata") || {};
            "string" == typeof p && (p = JSON.parse(p)), p.sdate = a.format("YYYY-MM-DD"), p.edate = e.format("YYYY-MM-DD"), $("#charts-ajax-data").data("querydata", JSON.stringify(p)), window.currentKeywordid.length > 0 && (p.word_id = window.currentKeywordid.join(",")), window.hasDataIdStr = p.word_id || "", $("#hotDraw").length > 0 ? hotSearchDrawAction(r, p) : getChartsData(r, p)
        }
    }))
}
function showBuyVip() {
    var a = $("#buy-vip");
    return a && a.length > 0 ? (a.show(), $("#vip-b").show(), !1) : void $.ajax({
        url: "/account/buyVip",
        type: "get",
        dataType: "html",
        success: function (a, e, t) {
            var n = t.getResponseHeader("Content-Type");
            if (-1 !== n.indexOf("application/json"))return a = JSON.parse(a), 1e4 == parseInt(a.code) ? swal({
                title: a.msg,
                type: "success",
                showCancelButton: !1,
                confirmButtonColor: "#33ba95",
                confirmButtonText: Lang.confirm_btn,
                cancelButtonText: Lang.cancel_btn
            }) : swal({
                title: a.msg,
                type: "error",
                showCancelButton: !1,
                confirmButtonColor: "#33ba95",
                confirmButtonText: Lang.confirm_btn,
                cancelButtonText: Lang.cancel_btn
            }), !1;
            var i, o, s = $(".info-container"), r = $(a), d = r.find("#buy-vip-expire");
            $("body").append(r);
            var c = $("#buy-vip-style input:checked").val();
            $("#buy-vip-amount").html($("#buy-vip-type ." + c + " a.active").data("amount")), s && s.length > 0 ? (o = s.offset().left + parseInt(s.css("padding-left")), i = $(window).height() < 550 ? {
                left: o + "px",
                top: $(document).scrollTop() + 80 + "px",
                position: "absolute"
            } : {left: o + "px", top: "260px"}) : i = $(window).height() < 550 ? {
                marginLeft: "50%",
                left: "-" + r.width() / 2 + "px",
                top: $(document).scrollTop() + 80 + "px",
                position: "absolute"
            } : {
                marginLeft: "50%",
                left: "-" + r.width() / 2 + "px",
                top: ($(window).height() - r.height()) / 2 + "px"
            }, d.html(moment(d.data("expire")).add(1, "month").format("YYYY-MM-DD")), r.css(i).show(), $("#vip-b").show()
        }
    })
}
function search(a) {
    var e = a;
    e.autocomplete({
        serviceUrl: "/search/autoComplete",
        paramName: "word",
        dataType: "json",
        transformResult: function (a) {
            return {
                suggestions: $.map(a, function (a) {
                    return {value: a, data: a}
                })
            }
        },
        deferRequestBy: 200,
        maxHeight: "auto",
        onSelect: function (a) {
            $(this).parents(".navbar-form").submit()
        }
    })
}
function __dealCssEvent(a, e) {
    function t(a) {
        if (a.target === this)for (e.call(this, a), n = 0; n < i.length; n++)o.off(i[n], t)
    }

    var n, i = a, o = this;
    if (e)for (n = 0; n < i.length; n++)o.on(i[n], t)
}
function formToJSON(a) {
    if (a = $(a), 1 !== a.length)return !1;
    var e = {}, t = ["submit", "image", "button", "file"], n = [];
    return a.find("input, select, textarea").each(function () {
        var i = $(this), o = i.attr("name"), s = i.attr("type"), r = this.nodeName.toLowerCase();
        if (!(t.indexOf(s) >= 0) && !(n.indexOf(o) >= 0) && o)if ("select" === r && i.prop("multiple"))n.push(o), e[o] = [], a.find('select[name="' + o + '"] option').each(function () {
            this.selected && e[o].push(this.value)
        }); else switch (s) {
            case"checkbox":
                n.push(o), e[o] = [], a.find('input[name="' + o + '"]').each(function () {
                    this.checked && e[o].push(this.value)
                });
                break;
            case"radio":
                n.push(o), a.find('input[name="' + o + '"]').each(function () {
                    this.checked && (e[o] = this.value)
                });
                break;
            default:
                e[o] = i.val()
        }
    }), e
}
function openApp(a) {
    var e = document.getElementById("open-app-by-url");
    e || (e = document.createElement("iframe"), e.setAttribute("id", "open-app-by-url"), e.setAttribute("width", 0), e.setAttribute("height", 0), e.setAttribute("style", "display:none; overflow:hidden;"), document.body.appendChild(e)), e.src = a
}
function settingAccount() {
    function a(a, t) {
        t.addClass("disabled"), t.attr("disabled", !0), $.ajax({
            type: "POST",
            url: a.attr("action"),
            data: a.serialize(),
            success: function (a) {
                t.removeClass("disabled"), t.attr("disabled", !1), 1e4 != a.code ? (a.closeModal && $(".myself-modal").modal("hide"), swal(a.msg)) : (a.refresh && location.reload(), $(".myself-modal").modal("hide"), e(a))
            }
        })
    }

    function e(a) {
        a.url ? ($("#select-avatar").val(""), $("#avatar-area img").attr("src", a.url)) : a.phone ? ($("#phone-position").text(a.phone), $("#biding-phone").text(Lang.edit)) : 3 == a.type && $("#biddingPhoneModal").modal("show")
    }

    function t(a) {
        $("#x").val(a.x), $("#y").val(a.y), $("#w").val(a.w), $("#h").val(a.h)
    }

    function n() {
        return parseInt($("#w").val()) ? !0 : (swal("Please select a crop region then press submit."), !1)
    }

    function i(a) {
        var e = a[0], n = $("#avatar-preview"), i = new FileReader, o = e.type, s = e.size;
        return /image\/(gif|jpg|jpeg|png)/.test(o) ? s >= 2e6 ? (swal(Lang.img_size), !1) : (i.onload = function (a) {
            n.html('<img src="' + a.target.result + '" alt="img">');
            var e, i, o, s = window.isMobile ? 270 : 870, r = window.isMobile ? 320 : 560, d = 250;
            JcropEle = n.find("img"), JcropEle.Jcrop({
                onSelect: t,
                aspectRatio: 2,
                boxWidth: s,
                boxHeight: r,
                touchSupport: !0,
                bgColor: "#FFF",
                aspectRatio: 1
            }, function () {
                jcropApi = this
            }), i = parseInt(jcropApi.getBounds()[0]), o = parseInt(jcropApi.getBounds()[1]), e = o > i ? i : o, d > e && jcropApi.setOptions({minSize: [e, e]}), x = i / 2 - d / 2, y = o / 2 - d / 2, x1 = x + d, y1 = y + d, jcropApi.setSelect([x, y, x1, y1]), $("#avatar").val(a.target.result)
        }, i.readAsDataURL(e), !0) : (swal(Lang.img_type), !1)
    }

    function o() {
        return $(".myself-modal").modal("hide"), $("#verifyCodeModal").modal("show"), !1
    }

    if (0 == $("#account-setting").length)return !1;
    $(document).on("click", "#btn-save", function () {
        n(), a($("#avatar-form"), $(this))
    }), $(document).on("click", "#avatar-click", function () {
        $("#select-avatar").click()
    });
    var s = document.querySelector("#select-avatar");
    s.addEventListener("change", function (a) {
        var e = this.files;
        e.length && i(this.files) && ($("#myModal").modal("show"), $("#myModal").modal())
    }), $(document).on("click", "#edit-email", function (a) {
        $("#editEmailModal").modal("show")
    }), $(document).on("click", "#send-email", function () {
        a($("#email-form"), $(this))
    }), $(document).on("click", "#edit-phone", function (a) {
        $("#biddingPhoneModal").modal("show")
    }), $(document).on("click", "#biding-phone", function (a) {
        $("#biddingPhoneModal").modal("show")
    }), $(document).on("click", "#phone-form #send-code", function () {
        var a, e = $(this), t = $("#phone").val(), a = e.data("sendurl");
        $.getJSON(a, {phone: t}, function (a) {
            if (1e4 == a.code) {
                var t = 59, n = setInterval(function () {
                    e.text(Lang.again_get + "(" + t-- + ")"), 0 > t && (e.removeClass("disabled"), e.text(Lang.get_code), clearInterval(n))
                }, 1e3);
                e.addClass("disabled"), e.text(Lang.again_get + "(60)")
            } else {
                if (10012 != a.code)return swal({title: a.msg, type: "error", confirmButtonText: Lang.confirm_btn}), !1;
                o()
            }
        })
    }), $(document).on("click", "#btn-binding", function () {
        a($("#phone-form"), $(this))
    }), $(document).on("click", "#btn-verify-code", function () {
        a($("#code-form"), $(this))
    }), $(document).on("click", "#refresh-img", function () {
        var a = $("#code-img"), e = a.attr("src");
        -1 != e.indexOf("?") ? e = e.replace(/\?.*/i, "?" + +new Date) : e += "?" + +new Date, a.attr("src", e)
    })
}
function hotSearchDrawAction(a, e) {
    var t = $(".bar-charts"), n = t.data("ele");
    title = t.data("title"), a = a || t.data("ajaxurl"), e = e || t.data("querydata");
    var i = moment(e.sdate).format(Lang.format_date), o = moment(e.edate).format(Lang.format_date), s = "cn" == Lang.language ? "" : " ";
    title = i + "~" + o + s + title, $.ajax({url: a, type: "POST", dataType: "json", data: e}).done(function (a) {
        hotSearchDraw(a, n, title)
    })
}
function hotSearchDraw(a, e, t) {
    $("#" + e).highcharts({
        legend: {enabled: !1},
        exporting: {enabled: !1},
        chart: {type: "bar"},
        title: {text: t},
        xAxis: {categories: a.categories, title: {text: null}},
        yAxis: {min: 0, title: {text: null}, labels: {enabled: !1}},
        tooltip: {
            enabled: !0, formatter: function () {
                var a = Math.floor(this.y / 86400), e = Math.floor(this.y % 86400 / 3600), t = Math.floor(this.y % 3600 / 60), n = (Math.floor(this.y % 60), '<span style="font-size:10px;">' + this.x + "</span><br/>" + this.series.name + " : ");
                return a > 0 ? n + a + Lang.format_date_d + e + Lang.format_date_h + t + Lang.format_date_m : e > 0 ? n + e + Lang.format_date_h + t + Lang.format_date_m : n + t + Lang.format_date_m
            }
        },
        plotOptions: {column: {colorByPoint: !0}},
        credits: {enabled: !1},
        series: a.series
    })
}
function dataTablesForUserKeywordExtend(a) {
    var e = a;
    if (!e)return !1;
    var t = e.data("keywordurl"), n = e.data("hintsurl"), i = e.data("numberurl");
    e.data("nosignin");
    window.keywordExtend && (window.keywordExtend = null), window.keywordExtend = e.DataTable({
        dom: window.isMobile ? "frtip" : "lfrtip",
        data: window.tableData,
        order: [],
        lengthChange: !1,
        searching: !isMobile,
        autoWidth: !1,
        lengthMenu: [100],
        createdRow: function (a, e, t) {
            $(a).addClass("keyword-repertory-tr")
        },
        columnDefs: [{
            data: function (a, e, t, n) {
                var i;
                return i = "checkbox_" + a[0], '<div class="aso-checkbox"><input type="checkbox" name="word" id="' + i + '" class="form-control" value="' + a[0] + '"><label for="' + i + '"><span></span></label></div>'
            }, targets: 0, orderable: !1
        }, {
            data: function (a, e, n, i) {
                return $word = -1 != a[2].indexOf("@") ? a[2].replace(/@/g, " ") : a[2], '<a href="' + t + encodeURIComponent(a[2]) + '" target="_blank">' + $word + "</a>"
            }, targets: 1, orderable: !1
        }, {
            orderSequence: ["desc", "asc"], data: function (a, e, t, i) {
                return '<a class="number" href="' + n + a[1] + '" target="_blank">' + a[3] + "</a>"
            }, targets: 2
        }, {
            orderSequence: ["desc", "asc"], data: function (a, e, t, n) {
                return '<a class="number" href="' + i + a[1] + '" target="_blank">' + a[4] + "</a>"
            }, targets: 3
        }, {
            orderSequence: ["desc", "asc"], data: function (a, e, t, n) {
                return a[5]
            }, targets: 4
        }, {
            orderSequence: ["desc", "asc"], data: function (a, e, t, n) {
                return html = '<div class="select-group-row" data-id="' + a[0] + '" data-groupid="' + a[8] + '"></div>', html
            }, targets: 5, orderable: !1
        }, {
            data: function (a, e, t, n) {
                var i, o, s;
                return o = "checkbox_title_" + a[0], s = 2 == a[6] ? "checked" : "", i = '<div class="aso-checkbox-switch"><input type="checkbox"  data-type="name" id="' + o + '" ' + s + ' class="form-control change-word table-name-' + a[0] + '" data-state="' + a[6] + '" data-id="' + a[0] + '" data-word="' + a[2] + '" ><label for="' + o + '"><span></span></label></div>'
            }, targets: 6, orderable: !1
        }, {
            data: function (a, e, t, n) {
                var i, o, s;
                return o = "checkbox_keyword_" + a[0], s = 2 == a[7] ? "checked" : "", i = '<div class="aso-checkbox-switch"><input type="checkbox"  data-type="word" id="' + o + '" ' + s + ' class="form-control change-word table-word-' + a[0] + '" data-id="' + a[0] + '" data-state="' + a[7] + '" data-word="' + a[2] + '"><label for="' + o + '"><span></span></label></div>'
            }, targets: 7, orderable: !1
        }, {
            data: function (a, e, t, n) {
                var i;
                return toggle = isMobile ? "" : "tooltip", i = '<span class="icon icon-cancel extword-remove" data-id="' + a[0] + '" data-keyword="' + a[1] + '" data-groupid="' + a[8] + '" data-type="cancel" data-toggle="' + toggle + '" data-original-title="\u53d6\u6d88\u5173\u6ce8">\u53d6\u6d88</span>'
            }, targets: 8, orderable: !1
        }],
        initComplete: function () {
            e.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
        },
        drawCallback: function () {
            var a = e.find(".select-group-row");
            if (html = $("#select-group-temp").html(), a.length) {
                if (a.find("select.group-change-select").length)return;
                a.append(html), a.each(function (a, e) {
                    var t = $(this), n = t.data("groupid"), i = t.find('option[value="' + n + '"]'), o = t.find("select");
                    o.addClass("group-change-select"), i.prop("selected", !0), o.select2({minimumResultsForSearch: -1})
                })
            }
        },
        language: {
            sProcessing: Lang.dataTables_sProcessing,
            sLengthMenu: Lang.dataTables_sLengthMenu,
            sZeroRecords: Lang.dataTables_sZeroRecords,
            sInfo: Lang.dataTables_sInfo,
            sInfoEmpty: Lang.dataTables_sInfoEmpty,
            sInfoFiltered: Lang.dataTables_sInfoFiltered,
            sInfoPostFix: "",
            sSearch: Lang.dataTables_sSearch,
            sUrl: "",
            sEmptyTable: Lang.dataTables_sEmptyTable,
            sLoadingRecords: Lang.dataTables_sLoadingRecords,
            sInfoThousands: ",",
            oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
            oAria: {sSortAscending: Lang.dataTables_sSortAscending, sSortDescending: Lang.dataTables_sSortDescending}
        }
    })
}
function keywordRepertory() {
    function a(a) {
        var e = '<a href="javascript:;" data-classname="groupData_' + a.key + '" class="tab group" data-groupid="' + a.key + '">' + a.name + '<span class="glyphicon glyphicon-remove remove-group hide"></span></a>', n = '<option value="' + a.key + '">' + a.name + "</option>";
        $("#group-list-nav .create").before(e), $(".group-change-select").append(n), $("#select-group-temp .select").append(n), t()
    }

    function e(e, t) {
        t.addClass("disabled"), t.attr("disabled", !0), $.ajax({
            type: "POST",
            url: e.attr("action"),
            data: e.serialize(),
            success: function (e) {
                t.removeClass("disabled"), t.attr("disabled", !1), 1e4 != e.code ? (e.closeModal && $(".myself-modal").modal("hide"), swal(e.msg)) : ($(".myself-modal").modal("hide"), a(e))
            }
        })
    }

    function t() {
        $("#group-list-nav .group").hover(function () {
            $(this).find(".remove-group").removeClass("hide")
        }, function () {
            $(this).find(".remove-group").addClass("hide")
        })
    }

    if (0 == $("#keyword-repertory-container").length)return !1;
    window.tableData = $.parseJSON($(".groupData_0").val());
    var n = $("#keyword-extend-user");
    dataTablesForUserKeywordExtend(n), dataSearchPush(), $("#group-list-nav .create").click(function (a) {
        return $("#group-list-nav .group").length >= 7 ? (swal(Lang.keyword_group_limit), !1) : void $("#create-group-modal").modal("show")
    }), $("#create-group-modal").keydown(function (a) {
        13 == a.keyCode && (e($("#word-group-form"), $(this)), a.preventDefault())
    }), $("#create-group-modal #btn-save").click(function () {
        e($("#word-group-form"), $(this))
    }), t()
}
function showChangePd() {
    if (isMobile)return !1;
    var a = $(".change-pd");
    if (a && a.length)if (isLocalStorageSupported) {
        var e;
        localStorage.pdconfig && (e = JSON.parse(localStorage.pdconfig)), e ? $.each(a, function () {
            var a = $(this), t = a.data("name");
            if (t) {
                var n = +moment(moment().format("YYYY-MM-DD") + " 23:59:59");
                n != e[t] && a.addClass("show-animation")
            }
        }) : a.addClass("show-animation")
    } else a.addClass("show-animation")
}
function isLocalStorageSupported() {
    var a = "test", e = window.localStorage;
    try {
        return e.setItem(a, "testValue"), e.removeItem(a), !0
    } catch (t) {
        return !1
    }
}
var $addCompetiBg, $addCompetiSpinner, $competiSearchList, $pageButton, accountLimit, delUrl, isSubmiting = !1, appid = $("#appinfo-id").val(), form, submitUrl, method, competiMaxPage = 0, currentPage = 1, ajaxUrl = "", searchWord = "", competiGetDataRun = !1, hoverTimeout, tableSort;
$(function () {
    function a() {
        if (0 != $("#circleProcess").length) {
            var a = $("#circleScore"), e = Number(a.data("score")), t = $("#d-score-text"), n = 0;
            a.circleProgress({startAngle: -Math.PI / 4 * 2, thickness: 10, lineCap: "round", fill: {color: "#13caa5"}});
            var i = setInterval(function () {
                n++, e >= n ? (t.text(n), a.circleProgress("value", n / 100)) : clearInterval(i)
            }, 1)
        }
    }

    function e(a, e) {
        var t, n, i;
        try {
            t = a.toString().split(".")[1].length
        } catch (o) {
            t = 0
        }
        try {
            n = e.toString().split(".")[1].length
        } catch (o) {
            n = 0
        }
        return i = Math.pow(10, Math.max(t, n)), (a * i + e * i) / i
    }

    function t(a, e, t) {
        t.addClass("disabled"), $.post(a, {amount: e}, function (a) {
            1e4 == a.code ? swal({title: a.msg, type: "success", confirmButtonText: Lang.confirm_btn}, function () {
                location.reload()
            }) : swal({title: a.msg, type: "error", confirmButtonText: Lang.confirm_btn}, function () {
                10002 == a.code && location.reload(), a.nowPrice && $(".now-price").text(a.nowPrice) && $(".now-price-input").val(a.nowPrice + .1), t.removeClass("disabled")
            })
        })
    }

    function n() {
        x > 0 ? (x -= 1, C = Math.floor(x % 60), T = Math.floor(x / 60 % 60), D = Math.floor(x / 3600), k = D > 0 ? D + "\u5c0f\u65f6" : "", k += T > 0 ? T + "\u5206" : "", k += C + "\u79d2", y.html(k)) : (window.clearInterval(_), location.reload())
    }

    function i() {
        var a, e, t, n, i = $("#part-3");
        a = i.data("url"), t = i.find("table .no-data"), n = setInterval(function () {
            e = i.find("table .his-bid").first().text() || 0, $.getJSON(a, {bid: e}, function (a) {
                1e4 === a.code && (a.nowPrice >= 2.5 && clearInterval(n), a.histroy && (i.find("table").prepend(a.histroy), t.length > 0 && t.remove()), a.nowPrice && $(".now-price").text(a.nowPrice) && $(".now-price-input").val(a.nowPrice + .1))
            })
        }, 5e3)
    }

    function o() {
        var a, e, t, n, i = $(".report-condition-area .brand-dl .active"), o = $(".report-condition-area .class-dl .active");
        return 0 == i.length || 0 == o.length ? !1 : ($(".brand-area").hide(), e = i.data("brandtype"), t = o.data("classtype"), a = "." + e + "-area", $(a).show(), void("all" != t ? ($(".ait-area").hide(), n = "#ait-" + t, $(n).show()) : $(".ait-area").show()))
    }

    function s() {
        $("img:not(.noload-default)").one("error", function () {
            $(this).attr("src", sourcePublic + "app/images/default-app-logo.png")
        })
    }

    function r() {
        if (!window.isMobile) {
            var a;
            $(".aso100-nav-select .nav .dropdown, .appinfo-country.nav .dropdown, .get-analysis-data.nav .dropdown").hover(function () {
                var e = $(this);
                a = setTimeout(function () {
                    e.children(".date-range-picker").length > 0 && e.children(".date-range-picker").click(), 0 == e.children(".btn").length && e.addClass("open")
                }, 100)
            }, function () {
                clearTimeout(a);
                var e = $(this), t = 0;
                e.children(".dropdown-menu").mouseenter(function () {
                    t = 1
                }), $(".daterangepicker").mouseenter(function () {
                    t = 1
                }), setTimeout(function () {
                    0 == t && e.hasClass("open") && (e.children(".date-range-picker").length > 0 && e.children(".date-range-picker").click(), 0 == e.children(".btn").length && e.removeClass("open"))
                }, 100)
            }), $(document).on("mouseleave", ".daterangepicker", function (a) {
                $(".aso100-nav-select .nav .dropdown.open").children(".date-range-picker").click()
            })
        }
    }

    function d(a, e, t) {
        $(a).is(":hidden") ? ($(a).show(), $(e).css("border-bottom", 0), $(e + " img").hide(), $(e + " span").hide(), $(e + " i").addClass("top"), $(e + " p a").html("<span>" + Lang.already_subscribed + "</span>"), t ? $(t).css("border-top", 0) : $(e + " div+div").hide(), $(e).addClass("tit")) : ($(a).hide(), $(e + " span").show(), $(e).css("border-bottom", "1px solid #ddd"), t ? $(e + " p a").html("<span>" + Lang.subscribe_app + "</span>") : $(e + " div+div").show(), $(e + " p img").show(), $(e + " i").removeClass("top"), $(e).removeClass("tit"))
    }

    function c(a, e, t, n) {
        $(a).addClass(e), $(t).addClass(n)
    }

    function l(a, e, t, n) {
        $(a).removeClass(e), $(t).removeClass(n)
    }

    function p(a) {
        var e = a || $(".group-change-select");
        e.length > 0 && e.select2({
            minimumResultsForSearch: -1,
            placeholder: Lang.keyword_select2_placehoder,
            language: Lang.language_type
        })
    }

    function u(a, e, t) {
        var n, i = $("#groupData"), o = $("#group-change-submit").data("submiturl"), s = $("#group-list-nav .group.active");
        a && e ? $.ajax({url: o, type: "GET", dataType: "json", data: {ids: a, group: e}}).done(function (e) {
            if (1e4 == e.code) {
                var o = $.parseJSON(e.tableData);
                $.each(o, function (a, e) {
                    if (className = "groupData_" + a, classNameEle = "." + className, 0 == $(classNameEle).length) {
                        var t = '<input type="hidden" class="' + className + '">';
                        i.append(t)
                    }
                    $(classNameEle).val(JSON.stringify(e))
                }), s.click(), n = a.toString().split(",").length, "cn" == Lang.language_type ? swal(n + Lang.keyword_setting_succ + e.groupName, "", "success") : swal(Lang.keyword_setting_succ, "", "success"), t && t()
            } else swal(Lang.keyword_setting_error)
        }).fail(function () {
            swal(Lang.request_error)
        }) : swal(Lang.keyword_selct_word)
    }

    function h() {
        if ($(".container-appinfo").length) {
            var a = $("#keyword-guide-area"), e = $("#nav-list"), t = $('input[name="is-myapp"]').val();
            t ? (a.length && (a.find(".guide-enter").show(), a.find(".guide-seal").show()), e.find(".keyword-show").show()) : (a.length && (a.find(".guide-enter").hide(), a.find(".guide-seal").hide()), e.find(".keyword-show").hide())
        }
    }

    var m = function () {
        sa = void 0, $("#charts-appname").val($("#charts-appname").data("appname")), s(), $('[data-toggle="tooltip"]').tooltip({
            delay: {
                show: 55,
                hide: 90
            }
        }), moreBtnShow(), r(), dataSearchPush(), downSources(), a(), $("#bind-itc-account").hide(), keywordRepertory(), p(), centerModals(), h(), showChangePd()
    };
    if ($("#qrcode-show").length > 0) {
        var f, g = $("#qrcode-body"), b = $("#qrcode-show"), v = b.position().left - 76 + "px";
        g.css("left", v), $("#qrcode-show").hover(function () {
            f = setTimeout(function () {
                g.fadeIn(100)
            }, 100)
        }, function () {
            clearTimeout(f), g.fadeOut()
        })
    }
    var w = "#0bb995";
    if ($(".bidding-header").length > 0 && (w = "#3e9eeb"), swal.setDefaults({
            confirmButtonText: Lang.confirm_btn,
            cancelButtonText: Lang.cancel_btn,
            confirmButtonColor: w
        }), a(), 1 == $("#bid-state").val()) {
        $(document).on("click", "#offer-btn", function () {
            var a, n, i = $(this), o = $("#offer-action"), s = $("#cover-bg"), r = $("#up-btn"), d = $("#amount");
            a = parseFloat(d.val()), i.hasClass("isShow") ? (n = i.data("url"), t(n, a, i)) : (i.addClass("isShow"), $("body").css("overflow", "hidden"), o.slideDown(), s.fadeIn()), s.on("tap", function () {
                $("body").css("overflow", "auto"), o.slideUp(), s.fadeOut(), i.removeClass("isShow"), d.val() || d.val(a)
            }), r.on("tap", function () {
                return 2.5 == a ? !1 : (a = e(a, .1), void d.val(a))
            })
        });
        var y, x, _, k, C, T, D;
        y = $(".bidding-area .info .remain-second"), x = parseInt(y.data("seconds")), _ = window.setInterval(n, 1e3), n(), i()
    }
    if (1 == $("#ispopup").val() && swal("\u5f88\u9057\u61be\uff0c\u60a8\u9519\u8fc7\u4e86\u672c\u671f\u7ade\u62cd\uff0c\u65b0\u4e00\u671f\u4e0b\u5468\u4e008:00\u5f00\u59cb\uff0c\u4e0d\u8981\u9519\u8fc7\u54e6"), $(document).on("click", "#verify-phone #send-code", function () {
            var a, e = $(this), t = $("#phone").val();
            a = e.data("sendurl"), $.getJSON(a, {phone: t}, function (a) {
                if (1e4 != a.code)return swal({title: a.msg, type: "error", confirmButtonText: Lang.confirm_btn}), !1;
                var t = 59, n = setInterval(function () {
                    e.text("\u91cd\u65b0\u83b7\u53d6(" + t-- + ")"), 0 > t && (e.removeClass("disabled"), e.text("\u83b7\u53d6\u9a8c\u8bc1\u7801"), clearInterval(n))
                }, 1e3);
                e.addClass("disabled"), e.text("\u91cd\u65b0\u83b7\u53d6(60)"), swal({
                    title: a.msg,
                    type: "success",
                    confirmButtonText: Lang.confirm_btn
                })
            })
        }), $(document).on("tap", "#verify-phone #submit", function () {
            var a = ($(this), $(".form-horizontal")), e = $(".referer").val();
            $.ajax({
                type: "POST", url: a.attr("action"), data: a.serialize(), success: function (a) {
                    return 1e4 != a.code ? (swal({
                        title: a.msg,
                        type: "error",
                        confirmButtonText: Lang.confirm_btn
                    }), !1) : void swal({
                        title: a.msg,
                        type: "success",
                        confirmButtonText: Lang.confirm_btn
                    }, function () {
                        window.location.href = e
                    })
                }
            })
        }), $(document).on("click", ".change-pd .iconfont", function () {
            var a = $(this), e = a.parents(".change-pd"), t = e.data("name");
            if (!t)return !1;
            var n = +moment(moment().format("YYYY-MM-DD") + " 23:59:59"), i = {};
            localStorage.pdconfig && (i = JSON.parse(localStorage.pdconfig)), i[t] = n, i = JSON.stringify(i), localStorage.pdconfig = i, e.removeClass("show-animation")
        }), $(document).on("tap click", ".nav .change-lang", function () {
            var a, e = $(this);
            a = e.data("langtype"), $.cookie("language", a, {path: "/"}), location.reload()
        }), $(document).on("focus", ".navbar-top-form .input-group .form-control", function () {
            var a = $(this).parents("form");
            a.hasClass("lanuch") || (window.isMobile ? a.addClass("lanuch") : a.addClass("lanuch").find(".form-control.search-su").animate({width: window.isMobile ? "4.0625rem" : "422px"}, 400).select())
        }), $(document).on("click", ".navbar-top-form .search-close", function (a) {
            var e = $(this).parents("form");
            return e.removeClass("lanuch").find(".form-control.search-su").animate({width: "166px"}, 200), !1
        }), $(document).on("tap click", "#platform .platform-btn", function () {
            var a = $(this), e = a.data("icon"), t = a.data("lang"), n = a.data("searchurl"), i = a.parents("ul.dropdown-menu"), o = i.parents(".navbar-form"), s = o.find("i.active-icon");
            o.attr("action", n), s.removeClass("icon-android").removeClass("icon-ios").addClass(e), $("input[name='search']").focus(), "apple" == t ? ($("input[name='search']").attr("placeholder", Lang.apple_search_placeholder), o.find(".select-button.country").removeClass("hide")) : ($("input[name='search']").attr("placeholder", Lang.android_search_placeholder), o.find(".select-button.country").addClass("hide"))
        }), $(document).on("click", ".country-select.dropdown-menu li", function () {
            var a = $(this), e = a.find("a").data("country");
            if (a.hasClass("search-country"))return !1;
            var t = a.parents(".country").find(".btn .icon-flag");
            t.removeClass("icon-flag-" + t.data("country")).addClass("icon-flag-" + e).data("country", e), $(".navbar-form .country").find(".btn .icon-flag").removeClass("icon-flag-" + t.data("country")).addClass("icon-flag-" + e).data("country", e).end().find("input.country-hidden").val(e), t.find("input.country-hidden").val(e), $.cookie("country", e, {
                path: "/",
                expires: 90
            }), a.parents("form.navbar-form").find('input[name="search"]').focus()
        }), $(document).on("focus keyup input paste", ".country-select.dropdown-menu .search-country input", function () {
            var a = $(this), e = a.val(), t = a.parents(".country-select").find(".select-container li");
            e ? (e = e.toLowerCase(), $.map(t, function (a, t) {
                var n = $(a), i = n.find("a").data("search");
                n.hasClass("hot-country") || !i ? n.hide() : -1 !== i.indexOf(e) ? n.show() : n.hide()
            })) : $.map(t, function (a, e) {
                $(a).show()
            })
        }), o(), $(document).on("tap click", ".machine-report .report-condition-area .brand-btn", function () {
            $(".brand-btn").hasClass("active") && $(".brand-btn").removeClass("active"), $(this).addClass("active"), o()
        }), $(document).on("tap click", ".machine-report .report-condition-area .class-btn", function () {
            $(".class-btn").hasClass("active") && $(".class-btn").removeClass("active"), $(this).addClass("active"), o()
        }), $(document).on("tap click", ".machine-report .click-more", function (a) {
            var e, t = $(this);
            e = t.prev(), e.hasClass("more-data") && ("none" == e.css("display") ? (e.show(), "release" == t.data("type") ? t.html("<span>▲ " + Lang.click_fold_up + "</span>") : t.html("<span>" + Lang.click_fold_up + "</span>")) : (e.hide(), "release" == t.data("type") ? t.html("<span>▼ " + Lang.click_get_more_record + "</span>") : t.html("<span>" + Lang.click_get_more + "</span>")))
        }), $(document).on("tap click focus", ".input-value", function () {
            $(this).val("")
        }), $(document).on("tap", ".aso100-nav-select .dropdown", function (a) {
            if (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, isMobile) {
                var e = $(this), t = e.find(".dropdown-menu.wide"), n = document.documentElement.clientWidth;
                if (!t.length)return;
                var i = 300, o = e.offset().left, s = 0;
                s = i - (n - o) + 15, s > 0 && t.css({
                    left: -s,
                    right: "initial"
                }).find(".glyphicon").css({left: s + e.width() / 2 - 7, right: "initial"})
            }
        }), $(document).on("tap click", ".jumbotron", function (a) {
            $(".aso100-nav-select .dropdown.open").removeClass("open"), $(".navbar-top-form .search-close").trigger("click")
        }), $(document).on("click", "#manual-refresh", function () {
            var a, e, t = $(this), n = t.data("page");
            if ("app" == n)e = t.data("appid"), a = "/app/manualRefreshByAppid/appid/" + e; else {
                if ("search" != n)return swal({
                    title: Lang.operation_exception,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                }), !1;
                e = t.data("wordid"), word = t.data("word"), a = "/search/manualRefreshByWord/word/" + word + "/wordid/" + e
            }
            $.ajax({
                url: a, type: "get", dataType: "json", beforeSend: function (a) {
                    a.setRequestHeader("RequestType", "ajax")
                }, success: function (a) {
                    1e4 == parseInt(a.code) ? swal({
                        title: a.msg,
                        type: "success",
                        showCancelButton: !1,
                        confirmButtonColor: "#33ba95",
                        confirmButtonText: Lang.confirm_btn,
                        cancelButtonText: Lang.cancel_btn
                    }) : swal({
                        title: a.msg,
                        type: "error",
                        showCancelButton: !1,
                        confirmButtonColor: "#33ba95",
                        confirmButtonText: Lang.confirm_btn,
                        cancelButtonText: Lang.cancel_btn
                    })
                }
            })
        }), $(".gee-test").length) {
        var S = $(".gee-test"), B = S.data("product") || "embed", j = S.data("checkurl") || "/error/verifyGeetest", M = function (a) {
            window.geetestO = a, geetestO.appendTo(".gee-test #pop"), geetestO.onSuccess(function () {
                $.ajax({
                    url: j, type: "post", dataType: "json", data: geetestO.getValidate(), success: function (a) {
                        if (1e4 == parseInt(a.code)) {
                            var e = $("#signin");
                            e.length > 0 && e.find(".sign-msg").html("").slideUp("fast");
                            var t = $(".gee-test").data("referrer");
                            t && (window.location.href = t)
                        } else swal({
                            title: a.msg,
                            type: "error",
                            showCancelButton: !1,
                            confirmButtonColor: "#33ba95",
                            confirmButtonText: Lang.confirm_btn,
                            cancelButtonText: Lang.cancel_btn
                        })
                    }
                })
            })
        };
        $.ajax({
            url: "/error/geetestInfo?rand=" + Math.round(100 * Math.random()),
            type: "get",
            dataType: "json",
            success: function (a) {
                initGeetest({gt: a.gt, challenge: a.challenge, product: B, width: "310px", offline: !a.success}, M)
            }
        })
    }
    var I;
    $(document).on("mouseenter", "#app-list .media", function () {
        var a = $(this).find("a.btn-custom");
        I = setTimeout(function () {
            a.css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 400)
        }, 300)
    }), $(document).on("mouseleave", "#app-list .media", function () {
        var a = $(this).find("a.btn-custom");
        clearTimeout(I), a.css("opacity", 1).animate({opacity: 0}, 400)
    }), $("#search-index-history-info .iconfont").on("click", function () {
        $("#search-index-history-info").addClass("hide").removeClass("show show-animation"), $("#vip-b").hide()
    }), $("#show-search-history").on("click", function () {
        $("#search-index-history-info").removeClass("hide").addClass("show show-animation"), $("#vip-b").show()
    }), $("#search-index-history-info td a").hover(function () {
        var a = $(this).data("appid");
        $(".search-history-" + a).addClass("hover")
    }, function () {
        var a = $(this).data("appid");
        $(".search-history-" + a).removeClass("hover")
    }), s(), window.isWechat && $(".machine-report .share").show(), window.isMobile && !function () {
        var a = $(".jumbotron .container"), e = $(window).height() - a.offset().top - a.height();
        e > 0 && !a.hasClass("container-not-offset") && a.css("minHeight", $(window).height() - a.offset().top)
    }(), $(".jumbotron.items .container .index-title div").mouseover(function () {
        $(".jumbotron.items .container .index-title div p").show()
    }).mouseout(function () {
        $(".jumbotron.items .container .index-title div p").hide()
    }), $(".head .nav .dropdown").hover(function () {
        var a = $(this);
        a.addClass("open"), a.data("imgshow") || ($.each(a.find("img"), function () {
            var a = $(this);
            a.attr("src", a.attr(".src"))
        }), a.data("imgshow", 1))
    }, function () {
        var a = $(this);
        a.removeClass("open")
    }), r();
    var O = !1;
    $(document).on("click", ".subscribe-select-box .genre-cancle", function () {
        var a = $(this), e = a.parents(".subscribe-select-box");
        e.hide(), $(".vip-b").hide()
    }), $(document).on("click", ".subscribe-container input", function (a) {
        if (O)return !1;
        var e = $(this), t = e.parents("table"), n = t.data("type");
        if (e.parent().find("label").hasClass("disabled"))return !1;
        if (t.hasClass("bind"))return O = !1, bindWechat(t[0]), !1;
        if (1 == n)return t.data("load") || $.ajax({
            type: "GET",
            url: "/account/subscribeFloatHtml",
            dataType: "json",
            success: function (a) {
                1e4 == a.code ? (t.data("load", 1), $(".subscribe-select-box").html(a.html)) : 81004 == a.code ? swal({
                    title: a.title,
                    type: "error",
                    showCancelButton: !0,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonColor: "#33ba95",
                    cancelButtonText: Lang.certified_btn,
                    html: !0
                }, function (a) {
                    a || (window.location.href = "/account/setting/type/settingInvestor")
                }) : swal({title: a.msg, type: "error", confirmButtonText: Lang.confirm_btn})
            }
        }), $(".subscribe-select-box").show(), $(".vip-b").show(), !1;
        var i = t.data("appid"), o = t.data("wordid"), s = t.data("url"), r = t.data("remind"), d = {};
        d.remove = e.prop("checked") ? 0 : 1, d.appid = i, d.wordid = o, d.remind = r, d.type = n, O = !0, $.ajax({
            type: "post",
            url: s,
            data: d,
            complete: function () {
                O = !1
            },
            success: function (a) {
                if (1e4 == a.code) {
                    if (!d.remove) {
                        var i;
                        if (r ? ("string" == typeof r && -1 != r.indexOf(",") && (r = r.replace(/,/g, ":00, ")), r += ":00") : r = "18:00", window.isMobile)return 4 == n ? i = Lang.wechat_subscribe_tip1 + a.appname + Lang.wechat_subscribe_tip2 : 8 == n || 6 == n || 7 == n || (i = Lang.wechat_subscribe_tip1 + a.appname + Lang.wechat_subscribe_tip3 + (2 == n ? Lang.wechat_subscribe_tip4 : Lang.wechat_subscribe_tip5) + Lang.wechat_subscribe_tip6 + r + Lang.wechat_subscribe_tip7), swal({
                            title: i,
                            type: "success",
                            showCancelButton: !1,
                            confirmButtonColor: "#33ba95",
                            confirmButtonText: Lang.confirm_btn,
                            cancelButtonText: Lang.cancel_btn
                        }), !1;
                        var o = !!n;
                        1 == n ? i = Lang.wechat_subscribe_tip8 + r + Lang.wechat_subscribe_tip9 : 8 == n ? (i = Lang.wechat_subscribe_tip17, o = !1) : 6 == n ? (i = Lang.wechat_subscribe_tip18, o = !1) : 7 == n ? (i = Lang.wechat_subscribe_tip19, o = !1) : 4 == n ? i = Lang.wechat_subscribe_tip1 + a.appname + Lang.wechat_subscribe_tip10 : 5 == n ? (i = Lang.wechat_subscribe_tip1 + a.appname + Lang.wechat_subscribe_tip11 + r + Lang.wechat_subscribe_tip12, i += "\uff0c" + (2 == n ? Lang.wechat_subscribe_tip13 : Lang.wechat_subscribe_tip14) + Lang.wechat_subscribe_tip15) : (i = Lang.wechat_subscribe_tip1 + a.appname + Lang.wechat_subscribe_tip3 + (2 == n ? Lang.wechat_subscribe_tip4 : Lang.wechat_subscribe_tip5) + Lang.wechat_subscribe_tip6 + r + Lang.wechat_subscribe_tip12, i += "\uff0c" + (2 == n ? Lang.wechat_subscribe_tip13 : Lang.wechat_subscribe_tip14) + Lang.wechat_subscribe_tip15), swal({
                            title: i,
                            type: "success",
                            showCancelButton: o,
                            confirmButtonColor: "#33ba95",
                            confirmButtonText: Lang.confirm_btn,
                            cancelButtonColor: "#33ba95",
                            cancelButtonText: Lang.setup
                        }, function (a) {
                            a || (window.location.href = "/account/setting/type/settingSubscribe")
                        })
                    }
                } else 81004 == a.code ? (e.prop("checked", !e.prop("checked")), swal({
                    title: a.title,
                    type: "error",
                    showCancelButton: !0,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.certified_btn,
                    cancelButtonColor: "#33ba95",
                    cancelButtonText: Lang.cancel_btn,
                    html: !0
                }, function (a) {
                    a && window.open("/account/setting/type/settingInvestor")
                })) : 10109 == a.code ? (e.prop("checked", !1), reminds.addClass("disabled"), t.data("checkurl", a.checkurl), t.data("qrcodeurl", a.qrcodeurl), bindWechat(t[0])) : (e.prop("checked", !e.prop("checked")), swal({
                    title: a.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                }))
            }
        })
    }), $(document).on("tap", ".subCtrl", function () {
        d(".time", ".subCtrl")
    }), $(document).on("tap", ".subCtrl-1", function () {
        d(".time-1", ".subCtrl-1")
    }), $(document).on("tap", ".subCtrl-2", function () {
        d(".time-2", ".subCtrl-2", ".sub-2-son")
    }), $(document).on("tap", ".subCtrl-10", function () {
        d(".time-10", ".subCtrl-10", ".sub-10-son")
    }), $(document).on("tap", ".subCtrl-3", function () {
        d(".time-3", ".subCtrl-3")
    }), $(document).on("tap", ".subCtrl-4", function () {
        d(".time-4", ".subCtrl-4")
    }), $(document).on("tap", ".subCtrl-5", function () {
        d(".time-5", ".subCtrl-5")
    }), $(document).on("mouseover", ".service .container .our-adv .left", function () {
        c(".service .container .our-adv .box .img-l", "hov-img", ".service .container .our-adv .img-l span", "h-maj")
    }), $(document).on("mouseout", ".service .container .our-adv .left", function () {
        l(".service .container .our-adv .box .img-l", "hov-img", ".service .container .our-adv .img-l span", "h-maj")
    }), $(document).on("mouseover", ".service .container .our-adv .center", function () {
        c(".service .container .our-adv .box .img-c", "hov-img", ".service .container .our-adv .img-c span", "h-effec")
    }), $(document).on("mouseout", ".service .container .our-adv .center", function () {
        l(".service .container .our-adv .box .img-c", "hov-img", ".service .container .our-adv .img-c span", "h-effec")
    }), $(document).on("mouseover", ".service .container .our-adv .right", function () {
        c(".service .container .our-adv .box .img-r", "hov-img", ".service .container .our-adv .img-r span", "h-lock")
    }), $(document).on("mouseout", ".service .container .our-adv .right", function () {
        l(".service .container .our-adv .box .img-r", "hov-img", ".service .container .our-adv .img-r span", "h-lock")
    }), $(".jumbotron.serve.advantage .advantage-info ul li .clearfix").mouseover(function () {
        this.style.background = "#20d9ae", $(this).children("div").children("h4").css("color", "#fff"), $(this).children("div").children("p").css("color", "#fff"), $(this).children("div:first-child").css("background", "#fff"), $(this).children(".l-t").children("span").css("backgroundPosition", "374px -540px"), $(this).children(".r-t").children("span").css("backgroundPosition", "374px -582px"), $(this).children(".l-b").children("span").css("backgroundPosition", "414px -542px"), $(this).children(".r-b").children("span").css("backgroundPosition", "418px -582px")
    }).mouseout(function () {
        this.style.background = "", $(this).children("div").children("h4").css("color", ""), $(this).children("div").children("p").css("color", ""), $(this).children("div:first-child").css("background", "#20d9ae"), $(this).children(".l-t").children("span").css("backgroundPosition", "376px -383px"), $(this).children(".r-t").children("span").css("backgroundPosition", "376px -418px"), $(this).children(".l-b").children("span").css("backgroundPosition", "376px -458px"), $(this).children(".r-b").children("span").css("backgroundPosition", "381px -499px")
    }), $("#serve-search .icon-guanbi").on("click", function () {
        $("#vip-b").hide(), $("#serve-search").removeClass("show")
    }), $("#submit-serve-search").on("click", function () {
        $("#vip-b").show(), $("#serve-search").addClass("show")
    }), $("#serve-search input").on("focus", function () {
        $(this).parents(".input-group").addClass("active").removeClass("error-msg")
    }), $("#serve-search input").on("blur", function () {
        $(this).parents(".input-group").removeClass("active")
    }), $("#serve-search").on("submit", function () {
        var a = $(this), e = !0, t = a.attr("action"), n = {};
        return a.find("input.form-control").each(function () {
            var a = $(this), t = a.val();
            t = t.replace(/^\s+/i, ""), t = t.replace(/\s+$/i, ""), t ? "phone" != this.name || /^13[\d]{9}$|^14[0-9]\d{8}|^15[0-9]\d{8}$|^18[0-9]\d{8}$|^17[0-9]\d{8}$/.test(t) || (a.parents(".input-group").addClass("error-msg"), e = !1) : (a.parents(".input-group").addClass("error-msg"), e = !1), e && (n[this.name] = t)
        }), e ? ($.ajax({
            type: "POST", url: t, data: n, success: function (e) {
                1e4 == e.code ? e.data && e.data.length ? $.each(e.data, function (e, t) {
                    a.find('input.form-control[name="' + e + '"]').parents(".input-group").addClass("error-msg")
                }) : ($("#vip-b").hide(), $("#serve-search").removeClass("show"), swal({
                    title: e.msg,
                    html: 1
                })) : swal(e.msg)
            }
        }), !1) : !1
    }), $(document).on("click", ".subscribe-modify-remind input", function (a) {
        if (O)return !1;
        clearTimeout(hoverTimeout);
        var e = $(this), t = e.parents(".subscribe-modify-remind"), n = t.data("limit"), i = t.data("url"), o = t.data("type"), s = t.find('input[type="checkbox"]:checked'), r = {};
        if (t.hasClass("myapps-empty"))return swal(Lang.you_not_added_application), !1;
        if (e.parent().find("label").hasClass("disabled"))return !1;
        r.remind = [], s.each(function (a, e) {
            r.remind[a] = parseInt($(e).val())
        });
        var d = $("#checkbox-tips").length ? $("#checkbox-tips") : $('<span class="checkbox-tips" id="checkbox-tips"></span>');
        r.type = o, O = !0, $.ajax({
            type: "POST", url: i, data: r, complete: function () {
                O = !1
            }, success: function (a) {
                var i;
                1e4 == a.code ? (i = !e.prop("checked"), d.appendTo(e.parent()), d.html(Lang.already_save).removeClass("hide").addClass("show"), hoverTimeout = setTimeout(function () {
                    d.removeClass("show").addClass("hide")
                }, 1200), t.parents("table").find(".subscribe-show-remind").html(r.remind.length > 0 ? r.remind.join(":00、") + ":00" : Lang.not_setup)) : (i = e.prop("checked"), swal({
                    title: a.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                })), i ? (e.prop("checked", !1), e.parent().removeClass("aso-checkbox-checked")) : (e.prop("checked", !0), e.parent().addClass("aso-checkbox-checked")), t.find('input[type="checkbox"]:checked').length >= n ? t.find(".aso-checkbox:not(.aso-checkbox-checked) label").addClass("disabled") : t.find(".aso-checkbox:not(.aso-checkbox-checked) label").removeClass("disabled")
            }
        })
    }), $(document).on("click", ".genre-list input", function (a) {
        if (O)return !1;
        clearTimeout(hoverTimeout);
        var e = $(this), t = e.parents(".genre-list"), n = t.data("limit"), i = t.data("url"), o = (t.data("type"), t.find('input[type="checkbox"]:checked')), s = {};
        if (e.parent().find("label").hasClass("disabled"))return !1;
        s.genreid = [], o.each(function (a, e) {
            s.genreid[a] = parseInt($(e).val())
        });
        var r = $("#checkbox-tips").length ? $("#checkbox-tips") : $('<span class="checkbox-tips" id="checkbox-tips"></span>');
        O = !0, $.ajax({
            type: "POST", url: i, data: s, complete: function () {
                O = !1
            }, success: function (a) {
                var i;
                1e4 == a.code ? (i = !e.prop("checked"), r.appendTo(e.parent()), r.css({
                    left: e.siblings("label").outerWidth() + 5 + "px",
                    right: 0
                }).html(Lang.already_save).removeClass("hide").addClass("show"), hoverTimeout = setTimeout(function () {
                    r.removeClass("show").addClass("hide")
                }, 1200)) : (i = e.prop("checked"), swal({
                    title: a.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn
                })), i ? (e.prop("checked", !1), e.parent().removeClass("aso-checkbox-checked")) : (e.prop("checked", !0), e.parent().addClass("aso-checkbox-checked")), t.find('input[type="checkbox"]:checked').length >= n ? t.find(".aso-checkbox:not(.aso-checkbox-checked) label").addClass("disabled") : t.find(".aso-checkbox:not(.aso-checkbox-checked) label").removeClass("disabled"), t.find('input[type="checkbox"]:checked').length > 0 ? $(".subscribe-container input").prop("checked", !0) : $(".subscribe-container input").prop("checked", !1)
            }
        })
    }), $(document).on("click", ".setting-content .timeingpush", function (a) {
        var e = $(this), t = e.parents(".subscribe-list"), n = t.data("timepushurl"), i = e.data("type");
        modifytype = e.hasClass("remove") ? 1 : 0, $.ajax({
            type: "POST",
            data: {type: i, modifytype: modifytype},
            url: n,
            success: function (a) {
                1e4 == a.code ? e.hasClass("remove") ? e.removeClass("remove").html(Lang.subscribe_btn) : e.addClass("remove").html(Lang.unsubscribe_btn) : 81004 == a.code ? swal({
                    title: a.title,
                    type: "error",
                    showCancelButton: !0,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.certified_btn,
                    cancelButtonColor: "#33ba95",
                    cancelButtonText: Lang.cancel_btn,
                    html: !0
                }, function (a) {
                    a && window.open("/account/setting/type/settingInvestor")
                }) : swal({title: a.msg, type: "error", confirmButtonText: Lang.confirm_btn})
            }
        })
    }), $(document).on("click", ".subscribe-modify-apps .subscribe-modify", function (a) {
        if (O)return !1;
        var e = $(this), t = e.parents(".row").data("modifytype"), n = e.data("appid"), i = e.parents(".subscribe-modify-apps"), o = e.parents(".thumbnail"), s = i.data("url"), r = i.data("type"), d = {};
        d["modify-type"] = t, d.type = r, d.app_id = n, O = !0, o.addClass("subscribe-app-animation"), $.ajax({
            type: "POST",
            url: s,
            data: d,
            complete: function () {
                O = !1, o.removeClass("subscribe-app-animation")
            },
            success: function (a) {
                if (1e4 == a.code) {
                    var o, s = e.parents(".thumbnail");
                    if ("add" == t ? (s.find(".glyphicon-subscribe-add").removeClass("glyphicon-subscribe-add").addClass("glyphicon-subscribe-remove"), o = i.find(".row[data-modifytype=remove] .col-md-10:last")) : (s.find(".glyphicon-subscribe-remove").removeClass("glyphicon-subscribe-remove").addClass("glyphicon-subscribe-add"), o = i.find(".row[data-modifytype=add] .col-md-10:last")), 4 == r && "add" == t) {
                        var d = $('<div class="col-md-10"></div>');
                        s.appendTo(d), s = d, o = i.find(".row[data-modifytype=remove] .col-md-box")
                    }
                    4 == r && "remove" == t && s.parent().remove(), s.appendTo(o), 3 == r && "add" == t && swal({
                        title: Lang.wechat_subscribe_tip1 + a.appname + Lang.wechat_subscribe_tip16,
                        type: "success",
                        showCancelButton: !0,
                        confirmButtonColor: "#33ba95",
                        confirmButtonText: Lang.added,
                        cancelButtonColor: "#33ba95",
                        cancelButtonText: Lang.go_add
                    }, function (a) {
                        a || window.open("/app/keyword/appid/" + n)
                    });
                    var c = i.find('div.row[data-modifytype="remove"] .thumbnail>img'), l = "";
                    c.length > 0 ? ($.map(c, function (a) {
                        l += '<img src="' + $(a).attr("src") + '" alt="' + $(a).attr("alt") + '">'
                    }), i.find(".unsubscribe-show").removeClass("adjust")) : (l = Lang.not_subscribe_app, i.find(".unsubscribe-show").addClass("adjust")), i.parents("table").find(".subscribe-show-apps").html(l)
                } else swal({
                    title: a.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                })
            }
        })
    }), $(document).on("click", ".manage-content-remove .dropdown-menu a", function () {
        if (O)return !1;
        var a = $(this), e = a.html(), t = a.parents("ul.dropdown-menu"), n = a.parent(), i = t.data("paramname"), o = a.data("param"), s = {}, r = a.parents(".subscribe-modify-apps").data("fluxurl"), d = (a.parents(".subscribe-modify-apps").data("type"), a.parents(".thumbnail").find(".subscribe-modify").data("appid"));
        if (s.app_id = d, s.paramName = i, s.param = o, !r || !d)return !1;
        var c = $("#checkbox-tips").length ? $("#checkbox-tips") : $('<span class="checkbox-tips" id="checkbox-tips"></span>');
        O = !0, $.ajax({
            type: "POST", url: r, data: s, complete: function () {
                O = !1
            }, success: function (i) {
                1e4 == i.code ? (t.siblings("a").find(".name").html(e), n.addClass("active").siblings().removeClass("active"), c.appendTo(a.parents(".aso100-nav-select").find(".nav:last")), c.html(Lang.already_save).addClass("show")) : swal({
                    title: i.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                })
            }
        })
    }), $(document).on("click", ".subscribe-keyword a", function (a) {
        if (O)return !1;
        var e = $(this), t = e.data("wordid"), n = e.parents(".subscribe-keyword"), i = n.data("url");
        O = !0, $.ajax({
            url: i, type: "POST", data: {wordid: t, remove: 1}, success: function (a) {
                O = !1, 1e4 == a.code ? e.remove() : swal({
                    title: a.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn
                })
            }
        })
    }), $(document).on("click", ".subscribe-guid .checkbox-list input", function (a) {
        var e = $(this), t = e.parents(".checkbox-list"), n = t.data("limit");
        return e.parent().find("label").hasClass("disabled") ? !1 : (e.prop("checked") ? (e.prop("checked", !0), e.parent().addClass("aso-checkbox-checked")) : (e.prop("checked", !1), e.parent().removeClass("aso-checkbox-checked")), void(t.find('input[type="checkbox"]:checked').length >= n ? t.find(".aso-checkbox:not(.aso-checkbox-checked) label").addClass("disabled") : t.find(".aso-checkbox:not(.aso-checkbox-checked) label").removeClass("disabled")))
    });
    var P = function (a, e, t, n, i) {
        t = t || 1, a && $.ajax({
            type: "GET",
            url: a,
            data: {search: e, page: t},
            dataType: "JSON",
            success: function (a) {
                if (n.find(".spinner-bg").hide(), O = !1, 1e4 == a.code) {
                    var o = a.offset + 1, s = "";
                    if (n.find(".search-title").html("「" + e + "」 \u641c\u7d22\u7ed3\u679c\uff1a").removeClass("hide"), a.max > 0) {
                        var r;
                        r = a.type && "keyword" == a.type ? '<div class="media"><div class="media-body"><h4 class="media-heading">##KEYWORD##</h4></div><div class="media-right"><button class="btn btn-default " data-wordid="##WORDID##">\u5173\u6ce8</button></div></div>' : '<div class="media"><div class="media-left media-middle"><img class="media-object" src="##ICON##"></div><div class="media-body"><h4 class="media-heading">##OFFSET##.##APPNAME##</h4><div class="media-auther">##PUBLISHER##</div><div class="media-info"><span class="media-info-category">##GENRE##</span>##IPHONE####IPAD##</div></div><div class="media-right"><button class="btn btn-default" data-appid="##APPID##">\u5173\u6ce8</button></div></div>', $.map(a.list, function (a, e) {
                            var t;
                            t = r.replace("##ICON##", a.icon).replace("##OFFSET##", o++).replace("##APPNAME##", a.app_name).replace("##PUBLISHER##", a.publisher).replace("##GENRE##", a.genre).replace("##APPID##", a.app_id), a.isphone && (t = t.replace("##IPHONE##", '<span class="media-info-phone media-info-iphone">iPhone</span>')), a.ispad && (t = t.replace("##IPAD##", '<span class="media-info-phone media-info-ipad">iPad</span>')), t = t.replace("##KEYWORD##", a[0]).replace("##WORDID##", a[3]), t = t.replace(/##\w+##/g, ""), s += t
                        }), n.find(".app-list").html(s).removeClass("hide"), "undefined" != typeof i ? (1 == i && t > 1 && n.find(".search-page").removeClass("hide").find(".prev").removeClass("hide"), 1 == i && t == a.max && n.find(".search-page").removeClass("hide").find(".next").addClass("hide"), 0 == i && 1 == t && n.find(".search-page").removeClass("hide").find(".prev").addClass("hide")) : a.max > 1 ? n.find(".search-page").data("page", t).data("search", e).removeClass("hide").find(".next").removeClass("hide").end().find(".prev").addClass("hide") : n.find(".search-page").addClass("hide").find("div").addClass("hide")
                    } else s = '<p class="text-center">' + Lang.no_data_1 + "</p>", n.find(".app-list").html(s).removeClass("hide"), n.find(".search-page").addClass("hide").find("div").addClass("hide")
                } else swal({title: a.msg, type: "warning", confirmButtonText: Lang.confirm_btn})
            }
        })
    };
    $(document).on("submit", ".subscribe-guid .navbar-form", function (a) {
        if (preventDefault(a), O)return !1;
        var e = $(this), t = e.attr("action"), n = e.find("input").val(), i = e.parents(".subscribe-list");
        n && (O = !0, i.find(".spinner-bg").show().end().find(".spinner").show(), P(t, n, 1, i))
    }), $(document).on("click", ".subscribe-guid .search-page .next, .subscribe-guid .search-page .prev", function (a) {
        if (preventDefault(a), O)return !1;
        var e = $(this), t = e.hasClass("next") ? 1 : 0, n = e.parents(".subscribe-list"), i = n.find("form.navbar-form"), o = e.parents(".search-page"), s = o.data("search"), r = o.data("page") || 1, d = i.attr("action");
        s && (O = !0, 1 == t ? r++ : (r--, 0 >= r && (r = 1)), o.data("page", r), n.find(".spinner-bg").show().end().find(".spinner").show(), P(d, s, r, n, t))
    }), $(document).on("click", ".subscribe-guid .subscribe-list.app .app-list .btn", function (a) {
        preventDefault(a);
        var e = $(this), t = e.parents(".media"), n = e.parents(".subscribe-list");
        if (e.hasClass("disabled"))return !1;
        var i, o = t.find(".media-left img").attr("src"), s = t.find(".media-heading").html().replace(/^\d+\./i, ""), r = e.data("appid");
        $.get("/account/addMyFavorite/platform/0/appid/" + r, function (a) {
            if (1e4 == a.code) {
                i = '<div class="thumbnail"><img src="' + o + '" alt="' + s + '"><div class="caption"><p>' + s + '</p></div><div class="subscribe-modify"><span class="glyphicon-subscribe-remove"></span></div><input type="hidden" name="app" value="' + r + '"></div>';
                var t = n.find(".row");
                n.find("table").hasClass("hide") && (n.find("table").removeClass("hide"), 0 == t.find(".col-md-2").length && t.append('<div class="col-md-2">' + Lang.followed + '\uff1a</div><div class="col-md-10"></div>'));
                var d = t.find(".col-md-10");
                d.append($(i)), e.addClass("disabled").html(Lang.followed)
            } else swal({title: a.msg, type: "error", confirmButtonText: Lang.confirm_btn})
        })
    }), $(document).on("click", ".subscribe-guid .subscribe-modify", function (a) {
        var e = $(this), t = e.parents(".col-md-10"), n = e.next("input").val(), i = e.parents(".subscribe-list");
        i.find(".btn[data-appid=" + n + "]").removeClass("disabled").html("\u5173\u6ce8"), e.parents(".thumbnail").remove(), t.children().length <= 0 && t.parents(".table").addClass("hide")
    }), $(document).on("click", ".subscribe-guid .subscribe-list.keyword .table .btn", function (a) {
        var e = $(this), t = e.parents(".col-md-10"), n = e.find("input").val(), i = e.parents(".subscribe-list");
        i.find(".btn[data-wordid=" + n + "]").removeClass("disabled").html("\u5173\u6ce8"), e.remove(), t.children().length <= 0 && t.parents(".table").addClass("hide")
    }), $(document).on("click", ".subscribe-guid .subscribe-list.keyword .app-list .btn", function (a) {
        preventDefault(a);
        var e = $(this), t = e.parents(".media"), n = e.parents(".subscribe-list");
        if (e.hasClass("disabled"))return !1;
        var i, o = t.find(".media-heading").html().replace(/^\d+\./i, ""), s = e.data("wordid");
        i = '<a href="javascript:;" class="btn">' + o + '<span class="glyphicon-subscribe-remove-g"></span><input type="hidden" name="keyword" value="' + s + '"></a>';
        var r = n.find(".row");
        n.find("table").hasClass("hide") && (n.find("table").removeClass("hide"), 0 == r.find(".col-md-2").length && r.append('<div class="col-md-2">' + Lang.followed + '</div><div class="col-md-10"></div>'));
        var d = r.find(".col-md-10");
        d.append($(i)), e.addClass("disabled").html(Lang.followed)
    }), $(document).on("click", ".subscribe-guid > .submit", function () {
        var a = $(".subscribe-guid"), e = a.find("form.submit"), t = {};
        $.map(e, function (a, e) {
            if (a = $(a), 1 !== a.length)return !1;
            var n = ["submit", "button"], i = [];
            a.find("input").each(function () {
                var e = $(this), o = e.attr("name"), s = e.attr("type"), r = this.nodeName.toLowerCase();
                if (!(n.indexOf(s) >= 0) && !(i.indexOf(o) >= 0) && o)if ("select" === r && e.prop("multiple"))i.push(o), t[o] = [], a.find('select[name="' + o + '"] option').each(function () {
                    this.selected && t[o].push(this.value)
                }); else switch (s) {
                    case"checkbox":
                        i.push(o), t[o] = [], a.find('input[name="' + o + '"]').each(function () {
                            this.checked && t[o].push(this.value)
                        });
                        break;
                    case"radio":
                        i.push(o), a.find('input[name="' + o + '"]').each(function () {
                            this.checked && (t[o] = this.value)
                        });
                        break;
                    default:
                        t[o] || (t[o] = []), t[o].push(e.val())
                }
            })
        }), $.ajax({
            type: "POST", url: "/account/guidSubmit", data: t, success: function (a) {
                1e4 == a.code && (window.location.href = "/account/setting/type/settingSubscribe")
            }
        })
    });
    var N = $(".jumbotron.index");
    if (N.length > 0) {
        if (window.isMobile) {
            var R = $(window).height() - $(".footer").outerHeight() - N.offset().top;
            N.css({height: R + "px", backgroundPosition: "0 0"}), $("#search-kw").removeClass("search-su")
        } else if ($("#search-kw").focus(), "function" == typeof CountUp) {
            var E = {
                useEasing: !0,
                useGrouping: !0,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: ""
            }, A = new CountUp("index_num_app", 1, 4257598, 0, 1.5, E), F = new CountUp("index_num_keyword", 1, 1054898, 0, 1.5, E), q = new CountUp("index_num_rank", 1, 1046145, 0, 1.5, E);
            A.start(), F.start(), q.start()
        }
        $(window).scroll(function () {
            var a = $(this).scrollTop();
            return window.isMobile ? !1 : void(a > 380 ? $(".navbar").removeClass("no-background index-nav").addClass("animation").css("top", 0) : ($(".navbar").removeClass("animation").addClass("no-background index-nav"), $(".navbar").css("top", "-" + a + "px")))
        })
    }
    $(".cascade").hover(function (a) {
        var e = $(this);
        hoverTimeout = setTimeout(function () {
            e.find(".cascade-menu").show()
        }, 200)
    }, function (a) {
        clearTimeout(hoverTimeout);
        var e = $(this);
        e.find(".cascade-menu").hide()
    }), $(document).on("tap", ".mobile-nav-search", function (a) {
        preventDefault(a);
        var e = $(".mobile-nav-search-form").addClass("active").find('form input[name="search"]');
        return e.focus().val(e.val()), !1
    }), $(document).on("tap", ".mobile-nav-search-form > .btn", function (a) {
        return preventDefault(a), $(".mobile-nav-search-form").removeClass("active").find('form input[name="search"]').blur(), !1
    }), $(document).on("focus", ".mobile-nav-search-form", function () {
        $(window).scrollTop(0), window.isWechat && window.isIOS && $(".head.navbar.fixed").addClass("fixfixed")
    }), $(document).on("blur", ".mobile-nav-search-form", function () {
        window.isWechat && window.isIOS && $(".head.navbar.fixed").removeClass("fixfixed")
    }), $(document).on("touchmove", ".with-panel-left-reveal", function (a) {
    }), $(document).on("touchmove", ".panel-overlay", function (a) {
        return preventDefault(a), !1
    }), $(document).on("tap", ".show-panel", function (a) {
        if ($.allowPanelOpen) {
            var e = $("body");
            return e.hasClass("with-panel-left-reveal") ? $.closePanel() : $.openPanel(), !1
        }
    }), $.allowPanelOpen = !0, $.openPanel = function (a) {
        function e() {
            i.transitionEnd(function (t) {
                t.target === i[0] ? (a.hasClass("active") ? a.trigger("opened") : a.trigger("closed"), $.allowPanelOpen = !0) : e()
            })
        }

        if (!$.allowPanelOpen)return !1;
        "left" !== a && "right" !== a || (a = ".panel-" + a), a = a ? $(a) : $(".panel").eq(0), a.height(window.innerHeight);
        var t = a.hasClass("panel-right") ? "right" : "left";
        if (0 === a.length || a.hasClass("active"))return !1;
        $.closePanel(), $.allowPanelOpen = !1;
        var n = a.hasClass("panel-reveal") ? "reveal" : "cover";
        a.css({display: "block"}).addClass("active"), a.trigger("open");
        var i = (a[0].clientLeft, $(".jumbotron"));
        e(), $(document.body).addClass("with-panel-" + t + "-" + n);
        parseInt($(".panel-reveal").css("height")), parseInt($(".navbar-wenda").css("height"));
        return !0
    }, $.closePanel = function () {
        var a = $(".panel.active");
        if (0 === a.length)return !1;
        var e = a.hasClass("panel-reveal") ? "reveal" : "cover", t = a.hasClass("panel-left") ? "left" : "right";
        a.removeClass("active"), a.trigger("close"), $.allowPanelOpen = !1;
        var n = $(".jumbotron");
        n.transitionEnd(function (e) {
            a.hasClass("active") || (a.css({display: ""}), a.trigger("closed"), $("body").removeClass("panel-closing"), $.allowPanelOpen = !0)
        }), $("body").addClass("panel-closing").removeClass("with-panel-" + t + "-" + e)
    }, $.fn.transitionEnd = function (a) {
        return __dealCssEvent.call(this, ["webkitTransitionEnd", "transitionend"], a), this
    }, $(document).on("tap", ".close-panel, .panel-overlay", function (a) {
        $.closePanel()
    }), $(document).on("click", ".review-icon", function (a) {
        var e = $(this), t = $(".reviews-items .reviews-item"), n = $(".reviews-items .reviews-item.active").index();
        e.hasClass("prev-review") ? (0 >= n && (n = t.length), n -= 1) : n >= t.length - 1 ? n = 0 : n += 1, $(".reviews-items .reviews-item:eq(" + n + ")").addClass("active").siblings().removeClass("active")
    }), $(".hot-search .navbar-form").on("submit", function (a) {
        preventDefault(a);
        var e = $(this), t = e.attr("action"), n = e.find("input");
        $.each(n, function (a, e) {
            var n = $(this).attr("name"), i = $(this).val();
            t += "/" + n + "/" + i
        }), window.location.href = t
    }), footerFixed(), isMobile && mobileGotop(), $('[data-toggle="tooltip"]').tooltip({
        delay: {
            show: 50,
            hide: 100
        }
    }), $(".tip-area").click(function () {
        $('[data-toggle="tooltip"]').tooltip("toggle")
    }), window.chartData = {}, window.hasDataIdStr = "", window.currentKeywordid = [], $("img.lazy").lazyload();
    var Y = $(".activity-beta-box");
    if (Y.length > 0) {
        var W = +new Date, U = 0, H = !0, J = Y.data("name") || "";
        J && (U = parseInt($.cookie(J) || 0), H = W + 1314e6 > U ? W > U : !1);
        var z = function () {
            setTimeout(function () {
                Y.removeClass("hide").show().addClass("show")
            }, 1e3), Y.find(".activity-beta-button-circle").on("click", function () {
                return 0 !== parseInt(Y.find(".activity-beta-content").css("top")) ? !1 : (Y.css({opacity: 1}).addClass("activity-hide"), $(".activity-beta-open").show().addClass("activity-show"), void setTimeout(function () {
                    Y.hide().removeClass("show")
                }, 1e3))
            }), Y.find(".activity-beta-nonotice").on("click", function () {
                var a = new Date;
                a.setTime(a.getTime() + 31536e7), $.cookie(J, +a, {
                    path: "/",
                    expires: a
                }), Y.find(".activity-beta-button-circle").trigger("click")
            });
            var a, e = function (a) {
                return 10 > a ? "0" + a : a
            }, t = new Date;
            a = t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " 23:59:59", a = moment(a).valueOf(), t.setTime(t.getTime() + 864e5), $.cookie(J, a, {
                path: "/",
                expires: t
            })
        };
        if (H) {
            var G = $(".activity-beta-content > img");
            G.length > 0 ? (G = G[0], G.complete || G.width ? z() : G.onload = function () {
                z()
            }) : z()
        }
    }
    var K = $(".date-range-picker");
    K.length > 0 && K.map(function (a, e) {
        datePicker($(e))
    });
    var V = $("#rank-list-more");
    if (V.length > 0) {
        var Z = !1;
        V.find(".btn-default").on("click", function () {
            if (Z)return !1;
            var a, e, t, n, i, o, s = V, r = $(this), d = r.data("nomodifyhtml") || 0;
            return i = s.find(".spinner"), o = s.find(".btn-default"), n = s.data("url"), a = s.data("page"), t = s.data("size"), e = s.data("maxpage"), a > e ? !1 : (o.hide(), i.show(), Z = !0, void $.ajax({
                type: "get",
                url: n + (-1 == n.indexOf("?") ? "?" : "&") + "page=" + a,
                dataType: "html",
                success: function (n) {
                    return a++, s.data("page", a), Z = !1, $(".rank-list").append(n), $("img.lazy").lazyload(), a > e ? (s.remove(), !1) : (!d && s.find(".btn-default > span:eq(0)").html(Lang.show + ((a - 1) * t + 1) + " - " + a * t + Lang.staff), o.show(), void i.hide())
                }
            }))
        })
    }
    $(document).on("click", ".dropdown-menu.open a", function (a) {
        var e, t, n, i = $(this), o = i.parents("ul.dropdown-menu"), s = o.data("refresh") || 0, r = o.data("paramname"), d = o.data("cparam"), c = i.data("param"), l = new RegExp(r + "/" + d, "i");
        e = document.location.pathname, e.split("/").length < 3 && (e += "/index"), t = e.match(l), t ? e = e.replace(t, r + "/" + c) : e += "/" + r + "/" + c, n = window.location.protocol + "//" + window.location.hostname + e, s ? pjaxLoad(n) : window.location.href = n
    }), $(document).on("click", "#charts-ajax-data .dropdown-menu a,#competi-search .dropdown-menu a", function () {
        var a = $(this), e = a.html(), t = a.parents("ul.dropdown-menu"), n = t.data("open") || 0, i = t.data("refresh") || 0, o = t.data("usually") || 0, s = a.parent(), r = t.data("paramname"), d = a.data("param"), c = a.parents("#charts-ajax-data"), l = c.data("ajaxurl"), p = c.data("thisurl"), u = c.data("querydata") || {};
        c.data("run");
        if (window.chartData.title = c.data("title"), "string" == typeof u && (u = JSON.parse(u)), u[r] = d, c.data("querydata", JSON.stringify(u)), n) {
            if (!p)return !1;
            var h = "/";
            for (var m in u)h += m + "/" + u[m] + "/";
            if (h = h.slice(0, -1), i) {
                var f = p + h;
                return pjaxLoad(f), !1
            }
            location.href = p + h
        } else if (o)t.siblings("a").find(".name").html(e), s.addClass("active").siblings().removeClass("active"), $("#competi-search").submit(); else {
            if (!l)return !1;
            t.siblings("a").find(".name").html(e), s.addClass("active").siblings().removeClass("active");
            var g = $("#searchHintsUrl");
            if (g.length > 0) {
                var f = g.attr("href");
                $.map(u, function (a, e) {
                    var t = new RegExp(e + "\\/\\w+", "i");
                    t = f.match(t), t && (f = f.replace(t, e + "/" + a))
                }), g.attr("href", f)
            }
            $("#hotDraw").length > 0 ? hotSearchDrawAction(l, u) : getChartsData(l, u)
        }
    });
    var X = $("#charts-ajax-data");
    if (X.length) {
        var Q = X.data("ajaxurl"), aa = (X.data("thisurl"), X.data("querydata") || {}), ea = parseInt(X.data("run"));
        window.chartData.title = X.data("title"), Q && 0 !== ea && ($("#hotDraw").length > 0 ? hotSearchDrawAction(Q, aa) : getChartsData(Q, aa))
    }
    $(document).on("loadData", "#global-maps-charts-nav", function () {
        var a = $("#global-maps-charts"), e = $("#global-maps-charts-nav");
        $.ajax({
            type: "get",
            url: e.data("ajaxurl"),
            data: {device: e.find(".active").data("device")},
            dataType: "json",
            success: function (t) {
                $("#container").find(".spinner-bg").hide(), e.find(".active").data("data", JSON.stringify(t)), ta(a, t), ia($("#app-global-rank-list").find(".table"), t)
            }
        })
    }), $("#global-maps-charts-nav").trigger("loadData"), $(document).on("click", "#global-maps-charts-nav .device .tab", function () {
        var a = $(this), e = a.data("data") || "", t = $("#global-maps-charts"), n = $("#global-maps-charts-nav");
        $("#app-global-rank-list");
        a.siblings(".tab").removeClass("active"), a.addClass("active"), $("#global-maps-charts-switch").remove(), e ? (e = JSON.parse(e), ta(t, e)) : ($("#container .global-maps-charts-box").find(".spinner-bg").show(), $.ajax({
            type: "get",
            url: n.data("ajaxurl"),
            data: {device: a.data("device")},
            dataType: "json",
            success: function (e) {
                $("#container .global-maps-charts-box").find(".spinner-bg").hide(), a.data("data", JSON.stringify(e)), ta(t, e)
            }
        }))
    }), $(document).on("click", "#global-maps-charts-switch a", function () {
        var a = $(this);
        a.siblings(".tab").removeClass("active"), a.addClass("active");
        var e = $("#global-maps-charts"), t = $("#global-maps-charts-nav .device"), n = a.data("genreid"), i = t.find(".active").data("data");
        return i = JSON.parse(i), ta(e, i, n), !1
    }), $(document).on("click", "#global-maps-table-nav .device .tab", function () {
        var a = $(this), e = a.data("device"), t = ($("#global-maps-charts"), $("#global-maps-charts-nav")), n = t.find('.device .tab[data-device="' + e + '"]').data("data") || "", i = $("#app-global-rank-list");
        a.siblings(".tab").removeClass("active"), a.addClass("active"), n.length ? (n = JSON.parse(n), ia(i.find(".table"), n)) : ($("#container .global-maps-table-box").find(".spinner-bg").show(), $.ajax({
            type: "get",
            url: t.data("ajaxurl"),
            data: {device: e},
            dataType: "json",
            success: function (a) {
                $("#container .global-maps-table-box").find(".spinner-bg").hide(), t.find('.device .tab[data-device="' + e + '"]').data("data", JSON.stringify(a)), ia($("#app-global-rank-list").find(".table"), a)
            }
        }))
    });
    var ta = function (a, e, t) {
        var n = [], i = [{index: 1, min: 1, max: 1, color: "#00a686"}, {
            index: 2,
            min: 2,
            max: 10,
            color: "#0bb998"
        }, {index: 3, min: 11, max: 20, color: "#13c5a3"}, {index: 4, min: 21, max: 50, color: "#26cbab"}, {
            index: 5,
            min: 51,
            max: 100,
            color: "#41d8ba"
        }, {index: 6, min: 101, max: 200, color: "#4dddc0"}, {
            index: 7,
            min: 201,
            max: 500,
            color: "#7fe2ce"
        }, {index: 8, min: 501, max: 1e3, color: "#9feadb"}, {index: 9, min: 1001, max: 1500, color: "#c1f1e7"}];
        t = t ? t : e.genreid;
        var o = "";
        $.each(e.list, function () {
            var a = this.list[t] ? this.list[t] : {};
            o || (o = a.genre), this.code = this.code.replace("VI", "VG"), n.push({
                code: this.code,
                sname: this.name,
                flag: this.code.toLowerCase(),
                value: a.ranking ? a.ranking : null
            })
        }), $.each(n, function () {
            this.genre = o;
            var a = this.value, e = this.code, t = this.sname;
            $.each(i, function () {
                return a >= this.min && a <= this.max ? (this.country || (this.country = []), void this.country.push({
                    code: e,
                    name: t
                })) : void 0
            })
        }), na($("#app-global-rank-overview-list").find("table"), i);
        var s = $("#charts-appname").val() || "";
        s += " " + Lang.app_rankinfo_globalRank_title;
        var r = _exportingConfig(s);
        a.highcharts("Map", {
            chart: {
                marginRight: 1, backgroundColor: "", events: {
                    load: function () {
                        if (a.append('<div class="float-logo"></div>'), !$("#global-maps-charts-nav .genre").length) {
                            var n = "", i = "";
                            n += '<div class="label-group genre" id="global-maps-charts-switch">', n += "<span>" + Lang.globalRank_nav_genre + ":</span>";
                            for (var o in e.genrelist)i = o == t ? "active" : "", n += '<a href="javascript:void(0);" class="tab ' + i + '" data-genreid="' + o + '">' + e.genrelist[o] + "</a>";
                            n += "</div>", $("#global-maps-charts-nav").append(n)
                        }
                    }
                }
            },
            credits: _credits(!1),
            title: {text: s},
            legend: {
                layout: "vertical",
                align: "left",
                verticalAlign: "bottom",
                floating: !0,
                valueDecimals: 0,
                symbolRadius: 0,
                symbolHeight: 160,
                symbolWidth: 10
            },
            exporting: r,
            mapNavigation: {enabled: !0, enableMouseWheelZoom: !1, enableDoubleClickZoomTo: !0},
            colorAxis: {
                min: 1,
                max: 1500,
                stops: [[1 / 1500, "#00a686"], [10 / 1500, "#0bb998"], [20 / 1500, "#13c5a3"], [50 / 1500, "#26cbab"], [100 / 1500, "#41d8ba"], [200 / 1500, "#4dddc0"], [500 / 1500, "#7fe2ce"], [1e3 / 1500, "#9feadb"], [1, "#c1f1e7"]],
                labels: {
                    enabled: !0, formatter: function () {
                        return 0 === this.value ? "1" : this.value
                    }
                }
            },
            tooltip: {
                useHTML: !0, formatter: function () {
                    var a = "";
                    return a += "<table><tr>", a += '<td style="padding: 0 2px;"><span style="top: 2px;" class="icon-flag icon-flag-' + this.point.flag + '"></span></td>', a += '<td style="padding-right: 10px;"><span>' + this.point.sname + "</span></td>", a += "<td>" + this.point.genre + "-" + this.point.value + "</td>", a += "</tr></table>"
                }
            },
            series: [{
                data: n,
                mapData: Highcharts.maps["custom/world"],
                joinBy: ["iso-a2", "code"],
                borderColor: "#cccccc",
                borderWidth: .2,
                nullColor: "#eeeeee",
                states: {hover: {color: "#a4edba"}}
            }]
        })
    }, na = function (a, e) {
        var t = a, n = [];
        if (!t)return !1;
        $.each(e, function () {
            var a = [];
            a.push('<span class="show-color" style="background-color: ' + this.color + ';"></span>' + (this.min == this.max ? this.min : this.min + " - " + this.max));
            var e = "";
            this.country && this.country.length && $.each(this.country, function () {
                e += '<span class="icon-flag icon-flag-' + this.code.toLowerCase() + '" data-toggle="tooltip" title="' + this.name + '"></span>'
            }), a.push(e);
            var t = 0;
            this.country && this.country.length && (t = this.country.length), a.push(t), a.push(this.index), n.push(a)
        });
        var i = [];
        i.push({
            orderable: !1, data: function (a, e, t, n) {
                return "sort" == e ? a[3] : a[0]
            }, targets: 0
        }), i.push({orderable: !1, targets: 1}), i.push({
            orderable: !1,
            targets: 2
        }), t.hasClass("dataTable") && t.DataTable().clear(), t.DataTable({
            destroy: !0,
            data: n,
            lengthMenu: [30],
            lengthChange: !1,
            searching: !1,
            autoWidth: !1,
            paging: !1,
            columnDefs: i,
            initComplete: function () {
                t.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
            },
            language: {
                sProcessing: Lang.dataTables_sProcessing,
                sLengthMenu: Lang.dataTables_sLengthMenu,
                sZeroRecords: Lang.dataTables_sZeroRecords,
                sInfo: "",
                sInfoEmpty: Lang.dataTables_sInfoEmpty,
                sInfoFiltered: Lang.dataTables_sInfoFiltered,
                sInfoPostFix: "",
                sSearch: Lang.dataTables_sSearch,
                sUrl: "",
                sEmptyTable: Lang.dataTables_sEmptyTable,
                sLoadingRecords: Lang.dataTables_sLoadingRecords,
                sInfoThousands: ",",
                oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
                oAria: {
                    sSortAscending: Lang.dataTables_sSortAscending,
                    sSortDescending: Lang.dataTables_sSortDescending
                }
            }
        })
    }, ia = function (a, e) {
        var t = a, n = [];
        if (!t)return !1;
        var i = {}, o = "";
        $.each(e.list, function (a) {
            var t = [];
            t.push(this.name + "--" + this.code.toLowerCase() + "--" + a);
            for (var o in e.genrelist) {
                var s = this.list[o] ? this.list[o] : {};
                s.genre && (i[o] = s.genre + "(" + s.brand + ")");
                var r = s.ranking ? s.ranking : "0";
                t.push(r)
            }
            n.push(t)
        }), i[36] || (i[36] = e.genrelist[36]), o += '<th class="col-md-' + (window.isMobile ? 2 : 4) + '">' + Lang.globalRank_overview_table_th1 + "</th>";
        for (var s in e.genrelist)o += "<th>" + i[s] + "</th>";
        t.find("thead .large").html(o), t.hasClass("dataTable") && t.DataTable().clear();
        var r = [];
        $.each(n[0], function (a) {
            r.push({
                orderable: !1, data: function (e, t, n, i) {
                    var o = e[a];
                    return 0 == a ? (o = o.split("--"), "sort" == t ? o[2] : '<span class="icon-flag icon-flag-' + o[1] + '"></span>' + o[0]) : "sort" == t ? 0 == e[a] ? 9999 : e[a] : 0 == e[a] ? "-" : e[a]
                }, targets: a
            })
        }), t.DataTable({
            destroy: !0,
            data: n,
            lengthMenu: [30],
            lengthChange: !1,
            searching: !1,
            autoWidth: !1,
            columnDefs: r,
            initComplete: function () {
                t.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
            },
            language: {
                sProcessing: Lang.dataTables_sProcessing,
                sLengthMenu: Lang.dataTables_sLengthMenu,
                sZeroRecords: Lang.dataTables_sZeroRecords,
                sInfo: Lang.dataTables_sInfo,
                sInfoEmpty: Lang.dataTables_sInfoEmpty,
                sInfoFiltered: Lang.dataTables_sInfoFiltered,
                sInfoPostFix: "",
                sSearch: Lang.dataTables_sSearch,
                sUrl: "",
                sEmptyTable: Lang.dataTables_sEmptyTable,
                sLoadingRecords: Lang.dataTables_sLoadingRecords,
                sInfoThousands: ",",
                oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
                oAria: {
                    sSortAscending: Lang.dataTables_sSortAscending,
                    sSortDescending: Lang.dataTables_sSortDescending
                }
            }
        })
    };
    if ($(".charts-ul li").length > 0) {
        var oa = $(".charts-ul").data("titledate");
        window.chartData.titleDate = oa ? oa : Lang.date_range_1, window.chartData.isReport = 1, $(".charts-ul li").each(function (a, e) {
            var t = $(this), n = t.data("chartdata");
            n ? drawCharts(n.data, t.find(".charts-list")) : drawNodataCharts(n.data, t.find(".charts-list"))
        })
    }
    $(document).on("click", "#daily-cover-box .iconfont", function () {
        $("#daily-cover-box").addClass("hide").removeClass("show show-animation"), $("#vip-b").hide()
    }), $(document).on("click", "#show-daily-cover", function () {
        var a = $(this), e = a.data("url"), t = $("#daily-cover-box"), n = t.find(".charts-select a.active").data("type") || 1;
        t.find(".spinner-bg").addClass("show").end().removeClass("hide").addClass("show show-animation"), $("#vip-b").show(), $.ajax({
            type: "get",
            url: e + "/type/" + n,
            success: function (a) {
                t.find(".spinner-bg").removeClass("show");
                var e = a.data || {};
                drawCharts(e, t.find(".charts"))
            }
        })
    }), $(document).on("click", "#daily-cover-box .charts-select a", function () {
        var a = $(this), e = $("#show-daily-cover").data("url"), t = a.data("type"), n = $("#daily-cover-box");
        n.find(".spinner-bg").addClass("show"), a.addClass("active").siblings().removeClass("active"), $.ajax({
            type: "get",
            url: e + "/type/" + t,
            success: function (a) {
                n.find(".spinner-bg").removeClass("show");
                var e = a.data || {};
                drawCharts(e, n.find(".charts"))
            }
        })
    });
    var sa;
    $(document).on("click", ".histroy", function (a) {
        var e = $("#charts-ajax-data"), t = e.data("ajaxurl"), n = (e.data("thisurl"), e.data("querydata") || {});
        "string" == typeof n && (n = JSON.parse(n)), "undefined" == typeof window.chartData.list && (window.chartData.list = []);
        var i = $(this), o = i.parents("table"), s = i.parents(".keyword-histroy") || i.parents("tr"), s = s.length > 0 ? s : i.parents("tr"), r = o.data("type") || "keyword", d = i.data("id"), c = s.find(".sort-word a").html();
        if (s.hasClass("chart-tr"))return $chartsTrBox.hide(), s.removeClass("chart-tr"), !1;
        sa || ($chartsTrBox = $('<tr id="charts-tr" class="chart-tr"><td colspan="5"></td></tr>'), sa = $("#charts-box"), $chartsTrBox.find("td").html(sa), "keyword" == r && datePicker(sa.find(".date-range-picker"))), $chartsTrBox.show(), sa.show(), s.siblings().removeClass("chart-tr"), s.addClass("chart-tr"), s.after($chartsTrBox), $chartsTrBox.addClass("show-animation");
        var l = isMobile ? s.offset().top - 49 + "rem" : s.offset().top - 57 + "px";
        if (setTimeout(function () {
                $("body").animate({scrollTop: l}, 380)
            }, 260), "keyword" == r)$("#charts-appname").val(c), n.word_id = d, getChartsKeywordData(t, n); else {
            n.sdate = i.data("sdate"), n.edate = i.data("edate");
            var p = sa.find(".date-range-picker"), u = moment(n.sdate), h = moment(n.edate);
            p.data("date", n.sdate), p.data("edate", n.edate), p.find("span:eq(0)").html(u.format(Lang.format_time) + "~" + h.format(Lang.format_time)), datePicker(sa.find(".date-range-picker")), window.chartData.titleDate = u.format(Lang.format_time) + Lang.to + h.format(Lang.format_time), getChartsData(t, n)
        }
    }), dataTables($("#sort"), 0), $(document).on("order.dt", "#sort", function () {
        if (!window.tableSort || !window.tableSort.order()[0])return !1;
        var a, e, t, n = $(this), i = window.tableSort.order(), o = i[0][0], s = i[0][1];
        a = n.find("th:eq(" + o + ")"), e = a.find(".icon-up"), t = a.find(".icon-down"), $("#charts-tr").remove(), $(".chart-tr").removeClass("chart-tr"), a.siblings().find(".icon").removeClass("active"), "asc" == s ? (e.addClass("active"), t.removeClass("active")) : (e.removeClass("active"), t.addClass("active"))
    }), $(document).on("click", '.add-custom-keyword .btn[type="manage"]', function (a) {
        var e = $(this), t = e.data("url");
        return $addCompetiBg = $(".add-competi-bg"), $addCompetiSpinner = $addCompetiBg.find(".spinner-bg"), accountLimit = parseInt($addCompetiBg.find("#account-limit").html()), delUrl = $addCompetiBg.find("#custom-list").data("delurl"), $("html, body").animate({scrollTop: e.offset().top - 30 + "px"}, 100), $addCompetiBg.find(".add-competi").css({top: e.offset().top - $("#container").offset().top + e.height() + 30 + "px"}), $addCompetiBg.show(), $addCompetiSpinner.show(), $.ajax({
            type: "get",
            url: t,
            success: function (a) {
                if (a && 1e4 == a.code) {
                    $addCompetiSpinner.hide(), $addCompetiBg.find(".progress-bar").css("width", a.total_f + "%"), $addCompetiBg.find("#account-limit-current").html(a.total);
                    var e = "";
                    e += '<tr><th class="col-md-3">app</th><th class="col-md-1">' + Lang.usage_amout + '</th><th class="col-md-6">' + Lang.focus_words + '</th><th class="col-md-2">' + Lang.operation + "</th></tr>", $.map(a.list, function (t, n) {
                        e += '<tr data-id="' + n + '" class="custom-keyword-item">', e += '<td class="col-md-3"><div class="appinfo"><img src="' + t.appinfo.artwork_s + '" alt="' + t.appinfo.app_name + '"><div class="caption"><p><a target="_blank" href="' + t.appinfo.url + '">' + t.appinfo.app_name + '</a></p></div></div></td><td class="col-md-1"><span class="limit-num">' + t.num + "</span>/" + a.appLimit + "</td>", e += '<td class="col-md-7 text-left">', $.map(t.countrys, function (a, t) {
                            e += "<p><span>" + a.name + "</span>", $.map(a.items, function (a) {
                                e += '<a class="btn btn-default custom-remove" href="javascript:void(0);" data-type="wordid" data-id="' + a.word_id + '" role="button">' + a.word + '&nbsp;<span class="glyphicon remove-icon-white" aria-hidden="true"></span></a>'
                            }), e += "</p>"
                        }), e += "</td>", e += '<td class="col-md-1"><span class="glyphicon remove-icon custom-remove" aria-hidden="true" data-type="appid"></span></td>'
                    }), $addCompetiBg.find("#custom-list").html(e)
                } else $addCompetiBg.hide(), swal(a.msg)
            }
        }), !1
    }), $(document).on("click", ".competi-close", function () {
        $(this).data("refresh") && (sa = void 0, refreshPage()), $addCompetiBg.hide()
    }), $(document).on("tap click", "#keyword-list .custom-remove, #custom-list .custom-remove, #keyword-change .custom-remove", function (a) {
        $addCompetiBg = $(".add-competi-bg"), $addCompetiSpinner = $addCompetiBg.find(".spinner-bg"), accountLimit = parseInt($addCompetiBg.find("#account-limit").html()), delUrl = $addCompetiBg.find("#custom-list").data("delurl");
        var e = $(this), t = e.data("type"), n = e.parents(".custom-keyword-item"), i = n.find(".limit-num");
        appLimit = $addCompetiBg.find("#account-limit-current"), delappid = 0, thisappid = $("#appinfo-id").val(), word_id = e.data("id") || 0, decNum = 1, appLimitCurrent = 0, "cancel" == t || "change" == t ? delappid = thisappid : delappid = n.data("id"), "cancel" == t && e.addClass("animation"), $.ajax({
            type: "get",
            url: delUrl,
            data: {appid: delappid, word_id: word_id},
            success: function (a) {
                a && 1e4 == a.code ? "change" == t ? e.parents(".charts-box").remove() : "cancel" == t ? (sa = void 0, $("#charts-box").insertAfter(".aso100-nav-select.keyword:last").hide(), $.map(window.tableData, function (a, e) {
                    a[6] == word_id && (window.tableData[e][4] = 0)
                }), window.tableSort.clear().rows.add(window.tableData).order([[4, "asc"], [1, "asc"]]).draw(), $("body,html").animate({scrollTop: 750}, 200)) : ("wordid" == t ? (i.html(parseInt(i.html()) - decNum), e.remove(), 0 === parseInt(i.html()) && n.remove()) : (decNum = parseInt(i.html()), n.remove()), appLimitCurrent = parseInt(appLimit.html()) - decNum, $addCompetiBg.find(".progress-bar").css("width", +Math.round(100 * appLimitCurrent / accountLimit, 2) + "%"), appLimit.html(appLimitCurrent), thisappid == delappid && $(".competi-close").data("refresh", 1)) : swal(a.msg)
            }
        })
    }), $(document).on("submit", ".keyword-change form", function () {
        return !1
    }), $(document).on("submit", ".add-custom-keyword form", function () {
        return $(".add-custom-keyword-btn").trigger("click"), !1
    }), $(document).on("tap click", ".add-custom-keyword-btn", function (a) {
        var e = $(".add-custom-keyword"), t = e.find("form"), n = t.attr("action"), i = t.attr("method") || "GET", o = 0;
        if (isSubmiting)return !1;
        isSubmiting = !0;
        var s, r, d, c = $(this), l = c.attr("type"), p = c.data("pagename") || "keyword", u = {};
        return "add" == l ? (s = c.data("keyword"), o = 1, u = c.data("id"), $.map(window.tableData, function (a, e) {
            a[6] == u && (u = a, u[4] = 1, r = e)
        }), d = $(".aso100-nav-select .navbar-nav[data-querydata]").data("querydata"), d && ("string" == typeof d && (d = JSON.parse(d)), d = d.ydate)) : s = c.parents("form").find('input[name="keyword"]').val(), s ? (o && c.addClass("animation"), $.ajax({
            type: i,
            url: n,
            data: {keyword: s, appid: appid, ydate: d, exist: o},
            success: function (a) {
                isSubmiting = !1, a && 1e4 == a.code ? "keywordchange" == p ? refreshPage() : (sa = void 0, $("#charts-box").insertAfter(".aso100-nav-select.keyword:last").hide(), o || (u = [s, a.rank + "#" + (a.yrank - a.rank), a.hints, a.search_no, 1, a.py, a.id], $.map(window.tableData, function (e, t) {
                    e[6] == a.id && (r = t)
                })), "undefined" != typeof r && window.tableData.splice(r, 1), window.tableData.unshift(u), window.tableSort.clear().rows.add(window.tableData).order([[4, "asc"], [1, "asc"]]).draw(), $("body,html").animate({scrollTop: 750}, 200)) : swal(a.msg)
            }
        }), !1) : (isSubmiting = !1, !1)
    });
    var ra = $("#keyword-rank-more");
    ra.length && ra.find(".btn-custom").on("click", function () {
        var a = ra.data("ajaxurl"), e = ra.data("querydata"), t = ra.data("maxpage"), n = ra.data("page"), i = ra.find(".spinner"), o = ra.find(".btn-custom"), s = ra.data("vipurl");
        return n > t ? !1 : (o.hide(), i.show(), void $.ajax({
            type: "get",
            url: a + (-1 == a.indexOf("?") ? "?" : "&") + "page=" + n,
            data: e,
            dataType: "html",
            success: function (a) {
                return n++, ra.data("page", n), $(".keyword-list .table").append(a), n > t && 100 > t ? (ra.append("<span>" + Lang.open_vip_tip + '</span><a href="' + s + '" class="btn btn-custom">' + Lang.open_btn + "</a>"), o.hide(), i.hide(), !1) : (o.show(), void i.hide())
            }
        }))
    });
    var da = $("#search-list-more");
    da.length && da.find(".btn-default").on("click", function () {
        var a = da.data("ajaxurl"), e = da.data("querydata"), t = da.data("maxpage"), n = da.data("page"), i = da.find(".spinner");
        return button = da.find(".btn-default"), n > t ? !1 : (button.hide(), i.show(), void $.ajax({
            type: "get",
            url: a + (-1 == a.indexOf("?") ? "?" : "&") + "page=" + n,
            data: e,
            dataType: "html",
            success: function (a) {
                return n++, da.data("page", n), $("#app-list").append(a), n > t ? (da.hide(), !1) : (button.show(), i.hide(), void s())
            }
        }))
    });
    var ca = $(".app-optimization textarea");
    if (ca.length) {
        $('.app-optimization .btn[type="submit"]');
        ca.bind("focus keyup input paste", function () {
            var a = $(this), e = a.val(), t = e.length, n = a.data("limit"), i = !0;
            t > n ? (a.parent().siblings("label").find("em").addClass("text-danger").html(t), i = !1) : a.parent().siblings("label").find("em").removeClass("text-danger").html(t);
            var o = a.parents("form"), s = o.data("repeat") || "";
            if (s.length) {
                var r = new RegExp(s, "ig");
                e = e.replace(r, "<span>$&</span>"), e = e.replace(/\n/g, "<br />"), a.siblings(".textarea-bg-text").html(e)
            }
        })
    }
    $(document).on("submit", "form.investor", function (a) {
        preventDefault(a);
        var e = $(this), t = e.attr("action");
        if (t) {
            var n = e.find('input[name="investor_code"]').val();
            return n ? void $.ajax({
                type: "POST", url: t, data: {investor_code: n}, success: function (a) {
                    1e4 != a.code ? swal({
                        title: a.msg,
                        type: "warning",
                        confirmButtonText: Lang.confirm_btn
                    }) : swal({title: a.msg, confirmButtonText: Lang.confirm_btn}, function () {
                        window.location.reload()
                    })
                }
            }) : void swal({title: Lang.enter_invitation_code, type: "warning", confirmButtonText: Lang.confirm_btn})
        }
    }), $(document).on("click", ".auth-start", function (a) {
        var e = $(this);
        $(".wechat-subscribe").hide(), e.hide(), $(".auth-step.step-1").addClass("active"), $(".title-second").html('<span></span><a href="javascript:;">' + Lang.investors_certification_title + "></a>" + Lang.upload_card)
    }), $(document).on("change", ".auth-step.step-1 input[type=file]", function (a) {
        var e = $(this), t = e.parent(".upload");
        if (this.files && this.files[0]) {
            var n = this.files[0];
            if (n.size > 2097152)return swal({title: L("upload_img_limit"), confirmButtonText: Lang.confirm_btn}), !1;
            var i = new FileReader;
            i.onload = function () {
                var a = i.result, n = t.clone(), o = t.data("index"), s = "picture-" + (o + 1), r = $(".upload").length;
                2 > r && (n.find("input").attr("id", s).end().find("label").attr("for", s).end().data("index", o + 1), n.insertAfter(t)), $('<div class="preview"><img src="' + a + '" alt=""><div class="remove"><span class="glyphicon-subscribe-remove"></span></div></div>').insertBefore(e)
            }, i.readAsDataURL(n)
        } else $('<div class="preview"><img src="' + this.value + '" alt=""><div class="remove"><span class="glyphicon-subscribe-remove"></span></div></div>').insertBefore(e)
    }), $(document).on("click", ".auth-step.step-1 .remove", function (a) {
        var e = $(this), t = e.parents(".upload");
        $(".preview").length < $(".upload").length ? t.remove() : (t.find(".preview").remove(), t.find("input[type=file]")[0].value = "")
    }), $(document).on("click", ".auth-step.step-1 .next", function (a) {
        if (isSubmiting)return !1;
        isSubmiting = !0;
        var e = $(this), t = e.data("submiturl"), n = e.parents(".auth-step.step-1"), i = n.find("input[type=file]"), o = n.data("uploadurl"), s = [];
        return $.map(i, function (a, e) {
            var t = ($(a), a.files[0]), n = new FormData;
            t && (n.append("qmfile", t), $.ajax({
                method: "POST",
                url: o,
                data: n,
                async: !1,
                processData: !1,
                contentType: !1,
                dataType: "json",
                success: function (a) {
                    "success" == a.code && s.push(a.url)
                }
            }))
        }), s.length < 1 ? (swal({
            title: Lang.please_select_img,
            confirmButtonText: Lang.confirm_btn
        }), void(isSubmiting = !1)) : void $.ajax({
            method: "POST",
            url: t,
            data: {picture: s},
            dataType: "json",
            success: function (a) {
                isSubmiting = !1, 1e4 != a.code ? swal({
                    title: a.msg,
                    type: "warning",
                    confirmButtonText: Lang.confirm_btn
                }) : (n.removeClass("active").next().addClass("active"), $(".title-second").html('<span></span><a href="javascript:;">' + Lang.investors_certification_title + '></a><a href="javascript:;">' + Lang.upload_card + "></a>" + Lang.email_authentication))
            }
        })
    }), $(document).on("click", ".title-second > a", function () {
        var a = $(this);
        a.hasClass("btn") || (1 == a.index() ? window.location.reload() : 2 == a.index() && ($(".auth-step.step-2").removeClass("active"), $(".auth-step.step-1").addClass("active"), $(".title-second").html('<span></span><a href="javascript:;">' + Lang.investors_certification_title + "></a>" + Lang.upload_card)))
    }), $(document).on("click", ".auth-step.step-2 .next", function (a) {
        if (isSubmiting)return !1;
        isSubmiting = !0;
        var e = $(this), t = e.data("submiturl"), n = e.parents(".auth-step.step-2").find("form"), i = n.find("input").val();
        return i && -1 != i.indexOf("@") ? void $.ajax({
            method: "POST",
            url: t,
            data: {email: i},
            dataType: "json",
            success: function (a) {
                isSubmiting = !1, 1e4 != a.code ? swal({
                    title: a.msg,
                    type: "warning",
                    confirmButtonText: Lang.confirm_btn
                }) : swal({title: a.msg, confirmButtonText: Lang.confirm_btn}, function () {
                    window.location.reload()
                })
            }
        }) : (swal({title: Lang.please_check_email, confirmButtonText: Lang.confirm_btn}, function () {
            n.find("input").val("")
        }), isSubmiting = !1, !1)
    });
    var la = $("#signin");
    la.length && accountPwd(la);
    var pa = $("#findpwd");
    pa.length && accountPwd(pa);
    var ua = function (a) {
        a.attr("src", a.attr(".src")), a[0].onload = function () {
            ma = 0
        }, a[0].onerror = function () {
            if (ma--, !(0 >= ma)) {
                var a = $(this), e = a.attr("src");
                -1 != e.indexOf("?") ? e = e.replace(/\?.*/i, "?" + +new Date) : e += "?" + +new Date, a.attr("src", e)
            }
        }
    }, ha = $("#code-img,#code-img1");
    if (ha.length) {
        if (ha.attr(".src")) {
            var ma = 5;
            setTimeout(function () {
                ua(ha)
            }, 200)
        }
        ha.on("click", function () {
            var a = $(this).attr("src");
            -1 != a.indexOf("?") ? a = a.replace(/\?.*/i, "?" + +new Date) : a += "?" + +new Date, $(this).attr("src", a)
        })
    }
    var fa = $("#signup");
    if (fa.length) {
        var ga, ba = fa.find(".sign-msg");
        fa.find("#submit").on("click", function () {
            clearTimeout(ga);
            var a = !0, e = {};
            if (fa.find("input.form-control").each(function () {
                    var t = $(this), n = this.placeholder;
                    return "" == t.val() && "code" != this.name ? ("repassword" == this.name ? ba.html(Lang.password_verify_1).slideDown("fast") : ba.html(n + Lang.password_verify_2).slideDown("fast"), a = !1, !1) : void(e[this.name] = t.val())
                }), fa.find(".has-error").length > 0 && (a = !1), !a)return !1;
            var t = fa.attr("method") || "GET", n = fa.attr("action");
            return $.ajax({
                type: t, url: n, data: e, dataType: "json", success: function (a) {
                    a && 1e4 == a.code ? (ba.html(a.msg).slideUp("fast"), fa.addClass("hide"), wa.removeClass("hide")) : (ba.html(a.msg).slideDown("fast"), $("#code-img").click())
                }
            }), !1
        });
        var va = fa.data("checkurl");
        fa.find("input").on("focus", function () {
            clearTimeout(ga), ga = setTimeout(function () {
                fa.find(".has-error").length < 1 && ba.slideUp("fast")
            }, 500)
        }), fa.find("input").on("blur", function () {
            var a = this.name, e = this.value, t = $(this), n = t.parents(".form-group"), i = t.siblings("span"), o = '<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>', s = '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>';
            if (e = e.replace(/(^\s+)|(\s+$)/g, ""), this.value = e, "" == e)return this.value = "", n.removeClass("has-success has-feedback has-error"), i.length > 0 && i.removeClass("glyphicon-remove glyphicon-ok"), "phone" != a && "code" != a || $("#signup-send-code").addClass("btn-disabled"), !1;
            if ("phone" == a && $("#code").parents(".form-group").hasClass("has-success") && $("#signup-send-code").removeClass("disabled"), "username" == a || "email" == a || "code" == a || "phoneCode" == a) {
                var r = {field: a, value: e};
                "phoneCode" == a && (r.phone = $("#phone").val().trim()), $.ajax({
                    type: "get",
                    url: va,
                    data: r,
                    dataType: "json",
                    success: function (e) {
                        if (e && 1e4 == e.code) {
                            if (n.addClass("has-success has-feedback").removeClass("has-error"), i.length > 0 ? i.removeClass("glyphicon-remove").addClass("glyphicon-ok") : t.parent().append(o), "code" == a) {
                                var r = $("#phone").val();
                                r = r.replace(/(^\s+)|(\s+$)/g, ""), r && $("#signup-send-code").removeClass("btn-disabled"), clearTimeout(ga), ga = setTimeout(function () {
                                    fa.find(".has-error").length < 1 && ba.slideUp("fast")
                                }, 500)
                            }
                        } else n.addClass("has-error has-feedback").removeClass("has-success"), i.length > 0 ? i.removeClass("glyphicon-ok").addClass("glyphicon-remove") : t.parent().append(s), ba.html(e.msg).slideDown("fast"), "code" == a && ($("#signup-send-code").addClass("btn-disabled"), $("#code-img").trigger("click"))
                    }
                })
            }
            if ("repassword" == a) {
                var d = fa.find('input[name="password"]').val();
                e != d ? (n.addClass("has-error has-feedback").removeClass("has-success"), i.length > 0 ? i.removeClass("glyphicon-ok").addClass("glyphicon-remove") : t.parent().append(s), ba.html(Lang.password_verify_1).slideDown("fast")) : (n.addClass("has-success has-feedback").removeClass("has-error"), i.length > 0 ? i.removeClass("glyphicon-remove").addClass("glyphicon-ok") : t.parent().append(o))
            }
        }), $(document).on("click", "#signup-voice-tip a", function (a) {
            $("#signup-send-code").data("type", "voice"), $("#signup-send-code").trigger("click")
        }), $(document).on("click", "#signup-send-code", function () {
            var a, e, t = $(this), n = $("#phone").val(), i = $("#code"), o = $("#signup-voice-tip"), s = fa.find(".sign-msg");
            return n ? i.parents(".form-group").find(".glyphicon-ok").length ? (a = t.data("sendurl"), e = t.data("type"), void $.getJSON(a, {
                phone: n,
                type: e
            }, function (a) {
                if (1e4 == a.code) {
                    var n = 59, r = setInterval(function () {
                        t.text(Lang.again_get + "(" + n-- + ")"), 0 > n && (t.removeClass("disabled"), t.text(Lang.get_code), clearInterval(r), o.slideDown())
                    }, 1e3);
                    t.addClass("disabled"), t.text(Lang.again_get + "(60)"), "voice" == e && (s.addClass("success").html("\u8bf7\u6ce8\u610f\u6536\u542c\u8bed\u8a00\u9a8c\u8bc1\u7801").slideDown("fast"), setTimeout(function () {
                        s.slideUp("fast")
                    }, 3e3))
                } else 10012 == a.code ? ($("#code-img").trigger("click"), i.focus()) : s.html(a.msg).slideDown("fast")
            })) : ("" == i.val() ? s.html("\u9a8c\u8bc1\u7801" + Lang.password_verify_2).slideDown("fast") : s.html("\u9a8c\u8bc1\u7801\u9519\u8bef").slideDown("fast"), setTimeout(function () {
                i.focus()
            }, 500), !1) : (s.html("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801").slideDown("fast"), !1)
        })
    }
    var wa = $("#signup-company");
    wa.length && (wa.find("#checkboxInput").on("click", function () {
        $(this).prop("checked") ? wa.find("#company-submit").removeClass("disabled") : wa.find("#company-submit").addClass("disabled")
    }), wa.find("#company-submit").on("click", function () {
        clearTimeout(ga);
        var a = wa.find(".sign-msg"), e = !0, t = {};
        if (wa.find("input.form-control").each(function () {
                var n = $(this), i = n.data("empty") || 0, o = this.placeholder;
                return "" != n.val() || i ? void(t[this.name] = n.val()) : (a.html(o + Lang.password_verify_2).slideDown("fast"), e = !1, !1)
            }), wa.find('input[type="checkbox"]').prop("checked") || (e = !1), !e)return !1;
        var n = wa.attr("method") || "GET", i = wa.attr("action");
        return $.ajax({
            type: n, url: i, data: t, dataType: "json", success: function (e) {
                if (e && 1e4 == e.code)if (a.html(e.msg).slideUp("fast"), a.addClass("success").html(e.msg).slideDown("fast"), "cn" == Lang.language_type) {
                    var t = $("#wechat-tip");
                    t.fadeIn(), t.find(".icon").on("click", function () {
                        var a = $(this);
                        a.hasClass("icon-left") ? a.parents(".wt-container-list").removeClass("qq") : a.parents(".wt-container-list").addClass("qq")
                    }), $("#wechat-tip-bg").show()
                } else setTimeout(function () {
                    document.location.href = "/"
                }, 1e3); else e.css && a.removeClass("success").addClass(e.css), a.html(e.msg).slideDown("fast")
            }
        }), !1
    }));
    var $a = $("#setting");
    if ($a.length) {
        var ga, ya = $a.data("url"), xa = $("#html-container");
        $.ajax({
            url: ya, type: "get", dataType: "html", error: function (a) {
                if (a && 403 == a.status)window.location.href = "/"; else if (302 == a.status) {
                    var e = a.getResponseHeader("Url");
                    e ? window.location.href = e : window.location.href = "/"
                }
            }, success: function (a) {
                xa.html(a), accountPwd(xa.find(".account-setting")), setTimeout(footerFixed, 0), $('[data-toggle="tooltip"]').tooltip({
                    delay: {
                        show: 50,
                        hide: 100
                    }
                }), m(), settingAccount()
            }
        })
    }
    $(document).on("click", ".add-competi-button", function () {
        if (t = 0, e = 130, window.isMobile)var a = $(this), e = a.data("scroll") || 400, t = a.data("offsettop") || a.offset().top - 220;
        $("html, body").animate({scrollTop: e + "px"}, 100), $addCompetiBg = $(".add-competi-bg"), $competiSearchList = $(".competi-search-list"), $pageButton = $(".text-center.page"), $addCompetiSpinner = $(".add-competi .spinner-bg"), $addCompetiBg.find(".add-competi").css({top: t + "px"}), $addCompetiBg.show(), search($addCompetiBg.find(".search-su"))
    }), $(document).on("submit", ".competi-search", function (a) {
        if (preventDefault(a), competiGetDataRun)return !1;
        var e = $(this), t = e.find("input[name=word]").val();
        return device = e.find(".dropdown-toggle.device .name").text(), t && "" != t ? (Q = e.prop("action"), searchWord = t, $addCompetiSpinner.show(), competiGetDataRun = !0, $.ajax({
            type: "get",
            url: Q,
            data: {search: t, appid: appid, device: device.toLowerCase()},
            dataType: "json",
            success: function (a) {
                competiGetDataRun = !1, currentPage = 1, $addCompetiSpinner.hide(), a.maxPage > 0 ? (competiMaxPage = a.maxPage, $competiSearchList.html(a.data), a.maxPage > 1 ? $pageButton.show() : $pageButton.hide()) : ($competiSearchList.html('<p class="text-center">' + Lang.no_data_1 + "</p>"), $pageButton.hide())
            }
        }), !1) : !1
    }), $(document).on("click", ".text-center.page .btn-default", function (a) {
        if (preventDefault(a), competiGetDataRun)return !1;
        var e = $(this), t = e.data("type");
        return e.hasClass("disable") ? !1 : (currentPage = "next" == t ? currentPage + 1 : currentPage - 1, currentPage == competiMaxPage && $pageButton.find(".next").addClass("disable"), 1 == currentPage && $pageButton.find(".prev").addClass("disable"), currentPage > 1 && competiMaxPage > currentPage && $pageButton.find(".btn-default").removeClass("disable"), $addCompetiSpinner.show(), competiGetDataRun = !0, void $.ajax({
            type: "get",
            url: Q,
            data: {search: searchWord, page: currentPage, appid: appid},
            dataType: "json",
            success: function (a) {
                $addCompetiSpinner.hide(), a.maxPage > 0 ? ($competiSearchList.html(a.data), competiGetDataRun = !1) : ($competiSearchList.html('<p class="text-center">' + Lang.no_data_2 + "</p>"), $pageButton.hide())
            }
        }))
    }), $(document).on("click", ".competi-search-list .btn-default, .btn-possibleAdd", function (a) {
        if (preventDefault(a), competiGetDataRun)return !1;
        var e = $(this), t = e.data("appid"), n = "/account/addCompeti", i = e.data("possible"), o = e.html();
        return e.data("add") ? !1 : (i || $addCompetiSpinner.show(), competiGetDataRun = !0, e.html(Lang.adding), void $.ajax({
            type: "get",
            url: n,
            data: {appid: appid, competiId: t},
            dataType: "json",
            success: function (a) {
                i || $addCompetiSpinner.hide(), competiGetDataRun = !1, a && 1e4 == a.code ? (e.data("add", 1).html(Lang.added), e.addClass("disabled"), $(".competi-close").data("refresh", 1), i && refreshPage()) : (e.html(o), swal({
                    title: a.msg,
                    confirmButtonText: Lang.confirm_btn
                }))
            }
        }))
    }), $(document).on("click", ".competi-list .delete-competi", function (a) {
        if (competiGetDataRun)return !1;
        var e = $(this), t = e.data("appid"), n = "/account/delCompeti", i = e.html();
        return e.data("add") ? !1 : (competiGetDataRun = !0, e.html(Lang.deleteing), void $.ajax({
            type: "get",
            url: n,
            data: {appid: appid, competiId: t},
            dataType: "json",
            success: function (a) {
                competiGetDataRun = !1, a && 1e4 == a.code ? (e.parents(".table-striped").find(".competi-list").length < 2 && refreshPage(), e.parents(".competi-list").remove(), $(".competi .media-left >span").each(function (a, e) {
                    $(this).html(a + 1)
                }), footerFixed()) : (e.html(i), swal({title: a.msg, confirmButtonText: Lang.confirm_btn}))
            }
        }))
    }), $(document).on("click", ".competi-list .icon-asocompare", function (a) {
        var e, t = $(this), n = t.data("appid");
        return appid ? ($("#competiinfo").find("#asoCompare").addClass("active").siblings().removeClass("active"), e = "/app/asoCompare/appid/" + appid + "/competiId/" + n, void pjaxLoad(e)) : (refreshPage(), !1)
    }), $(document).on("click", ".thatapp", function (a) {
        var e = $(this);
        $("html, body").animate({scrollTop: "300px"}, 100), $addCompetiBg = $(".add-competi-bg"), $competiSearchList = $(".competi-search-list"), $pageButton = $(".text-center.page"), $addCompetiSpinner = $(".add-competi .spinner-bg"), $addCompetiBg.hide(), $addCompetiBg.find(".add-competi").css({top: e.offset().top - $("#container").offset().top + e.height() + 20 + "px"}), $addCompetiBg.show()
    }), $(document).on("click", ".add-competi.competi-list a", function (a) {
        $(".add-competi-bg").hide()
    }), $(document).on("mousewheel DOMMouseScroll", ".stop-default-scroll", function (a) {
        var e = $(this).find(".stop-default-scroll-box"), e = e.length ? e : $(this);
        wheelDelta = a.originalEvent.wheelDelta;
        var t = 0;
        if ($.map(e.children(), function (a, e) {
                t += $(a).outerHeight(!0)
            }), wheelDelta >= 0) {
            if (e.scrollTop() <= 0)return !1
        } else if (e.scrollTop() >= t - e.outerHeight())return !1
    });
    var _a = $(".search-su");
    if (_a.length > 0 && search(_a), $(document).on("click", ".export-data", function (a) {
            var e = $(this), t = e.data("limit"), n = e.data("disabled") || 0;
            0 >= t && preventDefault(a), 1 == n ? (preventDefault(a), swal(Lang.export_data_tip_1)) : 2 == n ? (preventDefault(a),
                swal({
                    title: Lang.export_data_tip_2,
                    showConfirmButton: !0,
                    confirmButtonText: Lang.confirm_btn,
                    confirmButtonColor: "#0bb995",
                    showCancelButton: 1,
                    cancelButtonText: Lang.cancel_btn
                }, function (a) {
                    if (a) {
                        var n = e.attr("href");
                        -1 != n.indexOf("/") && (window.location.href = n), t -= 1, e.data("limit", t), 0 >= t && e.addClass("account-vip-status"), e.html(Lang.export_data_ing), e.data("disabled", 1), setTimeout(function () {
                            e.data("disabled", 2), e.html(Lang.export_data)
                        }, 3e3)
                    }
                })) : (t -= 1, e.data("limit", t), 0 >= t && e.addClass("account-vip-status"), e.html(Lang.export_data_ing), e.data("disabled", 1), setTimeout(function () {
                e.data("disabled", 2), e.html(Lang.export_data)
            }, 3e3))
        }), $(document).on("click", ".account-vip-status", function (a) {
            var e = $(this);
            e.parents(".info-container");
            return preventDefault(a), window.isMobile ? swal({
                title: Lang.account_vip_status_tip1,
                confirmButtonText: Lang.confirm_btn,
                cancelButtonText: !1
            }) : e.hasClass("export-data") ? swal({
                title: Lang.account_vip_status_tip2,
                confirmButtonText: Lang.confirm_btn,
                cancelButtonText: !1
            }) : showBuyVip(), !1
        }), $(document).on("click", "#buy-vip-type a", function () {
            var a = $(this), e = $("#buy-vip-expire");
            a.hasClass("active") || (e.html(moment(e.data("expire")).add(a.data("date"), "month").format("YYYY-MM-DD")), $("#buy-vip-amount").html(a.data("amount")), a.siblings("a").removeClass("active").end().addClass("active"))
        }), $(document).on("click", "#buy-vip-style input", function () {
            var a = $(this), e = $("#buy-vip-type"), t = e.find("." + a.val()), n = t.find("a.active");
            vipExpire = $("#buy-vip-expire"), t.show().siblings().hide(), $("#buy-vip-amount").html(n.data("amount")), vipExpire.html(moment(vipExpire.data("expire")).add(n.data("date"), "month").format("YYYY-MM-DD"))
        }), $(document).on("click", "#buy-vip-submit", function () {
            var a = $("#buy-vip-style input:checked").val(), e = $("#buy-vip-type ." + a + " a.active").data("productid"), t = $(this), n = t.data("url");
            n = n + "/product_id/" + e + "?callback=" + encodeURIComponent(location.href), window.open(n)
        }), $(document).on("click", ".buy-vip-cancel", function () {
            $("#buy-vip").hide(), $("#vip-b").hide()
        }), $(document).on("click", ".no-signin", function (a) {
            return preventDefault(a), swal({
                title: Lang.login_tip,
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: Lang.go_login,
                cancelButtonText: Lang.cancel_btn,
                closeOnConfirm: !1
            }, function () {
                document.location.href = "/account/signin"
            }), !1
        }), wechatShareInit = function () {
        }, window.isWechat && "undefined" != typeof wechatConfig) {
        var La = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems"];
        wx.config({
            debug: wechatConfig.debug || !1,
            appId: wechatConfig.appId,
            timestamp: wechatConfig.timestamp,
            nonceStr: wechatConfig.nonceStr,
            signature: wechatConfig.signature,
            jsApiList: wechatConfig.jsApiList || La
        }), wechatShareInit = function () {
            wx.onMenuShareTimeline({
                title: wechatShare.title,
                link: wechatShare.link,
                imgUrl: wechatShare.imgUrl,
                success: function () {
                    wechatConfig.isCallback && wechatShareSuccessCallback(wechatConfig)
                },
                cancel: function () {
                }
            }), wx.onMenuShareAppMessage({
                title: wechatShare.title,
                desc: wechatShare.desc,
                link: wechatShare.link,
                imgUrl: wechatShare.imgUrl,
                type: "",
                dataUrl: "",
                success: function () {
                },
                cancel: function () {
                }
            }), wx.onMenuShareQQ({
                title: wechatShare.title,
                desc: wechatShare.desc,
                link: wechatShare.link,
                imgUrl: wechatShare.imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            }), wx.onMenuShareWeibo({
                title: wechatShare.title,
                desc: wechatShare.desc,
                link: wechatShare.link,
                imgUrl: wechatShare.imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            })
        }, wx.ready(wechatShareInit)
    }
    if ($(document).on("click", ".market-list a", function (a) {
            return preventDefault(a), pjaxLoad($(this).attr("href")), !1
        }), $("#app").length) {
        var ka, Ca = !1;
        $.pjax.defaults.timeout = 4e3, $.pjax.defaults.timeout = 4e4, $(document).on("click", "a[data-pjax]", function (a) {
            if (preventDefault(a), Ca)return !1;
            Ca = !0;
            var e = $(this), t = e.parent("li"), n = t.data("parent") || "", i = e.data("pagename");
            return t.length < 1 && (t = $("#" + i), n = t.data("parent") || ""), $("#container").attr("data-name", i), t.addClass("active"), t.siblings().removeClass("open active"), isMobile && t.parent("ul").siblings("ul").find("li").removeClass("open active"), n && ($("#" + n).addClass("open active"), $("#" + n).siblings().removeClass("open active").find("li").removeClass("active")), $.support.pjax ? pjaxLoad(e.attr("href")) : document.location.href = e.attr("href"), !1
        }), $(document).on("pjax:success", function (a, e, t, n) {
            clearTimeout(ka), $(".info-container > .spinner-box").hide(100), Ca = !1, m()
        }), $(document).on("pjax:beforeSend", function (a, e, t, n) {
            ka = setTimeout(function () {
                $(".info-container > .spinner-box").height($(".info-container > .container-box").outerHeight()).show()
            }, 100)
        })
    }
    $(document).on("pjax:success", function (a, e, t, n) {
        var i = n.getResponseHeader("Callback");
        if (i && -1 != i.indexOf("function")) {
            var o = new Function("return " + i)();
            o()
        } else if (i && "function" == typeof window[i]) {
            var s = n.getResponseHeader("callbackParam") || "";
            s && (s = JSON.parse(s)), window[i](s)
        }
    }), $(document).on("click", "#nav-list .nav-title", function (a) {
        if (isMobile)return !1;
        var e = $(this), t = e.parent();
        t.hasClass("dropdown") && t.toggleClass("open")
    }), $(document).on("click", "#app .aso100-nav-label.screenimg .tab", function () {
        var a = $(this), e = a.data("imgstr") || "", t = a.data("platform") || "ios";
        return imgHtml = "", a.siblings(".tab").removeClass("active"), a.addClass("active"), e ? (e = "android" == t ? e.split("|") : e.split(","), e.map(function (a, e) {
            imgHtml += '<img src="' + a + '" />'
        }), $("#screenshot-box").html(imgHtml).css("left", "0"), $("#screenshot-left").removeClass("active"), $("#screenshot-right").addClass("active"), !1) : void 0
    }), $(document).on("click", "#screenshot-left", function () {
        var a = $(this), e = $("#screenshot-box"), t = parseInt(e.css("left"));
        if (!a.hasClass("active"))return !1;
        var n = e.find("img"), i = n.width() + 5, o = e.parent().width(), s = 0;
        return i * n.length > o && (s = Math.ceil(o - i * n.length)), t += i, t >= 0 && (a.removeClass("active"), $("#screenshot-right").addClass("active")), e.animate({left: t + "px"}, 300), $("#screenshot-right").addClass("active"), !1
    }), $(document).on("click", "#screenshot-right", function () {
        var a = $(this), e = $("#screenshot-box"), t = parseInt(e.css("left"));
        if (!a.hasClass("active"))return !1;
        var n = e.find("img"), i = n.width() + 5, o = e.parent().width(), s = 0;
        return i * n.length > o && (s = Math.ceil(o - i * n.length)), t -= i, s >= t && (a.removeClass("active"), $("#screenshot-left").addClass("active")), e.animate({left: t + "px"}, 300), $("#screenshot-left").addClass("active"), !1
    }), $(".part-left ul li").bind("mouseover", function () {
        $(this).addClass("white"), $(this).children("span").addClass("green"), $(this).children("p").addClass("text-green")
    }), $(".part-left ul li").bind("mouseout", function () {
        $(this).removeClass("white"), $(this).children("span").removeClass("green"), $(this).children("p").removeClass("text-green")
    }), $(document).on("click", ".part-left ul li", function (a) {
        $(this).children("div").show()
    }), $(".part-left ul").click(function () {
        $(".part-left ul li").children("div").hide()
    }), $(".part-left ul li div p").mouseover(function () {
        $(this).children("span").addClass("green")
    }), $(".part-left ul li div p").mouseout(function () {
        $(this).children("span").removeClass("green")
    }), $(document).on("click tap", ".container-box .desc .more", function () {
        var a = $(this);
        a.parent().find("pre").css("max-height", "initial").end(), a.remove()
    }), $(document).on("click tap", ".version .more", function () {
        var a = $(this);
        a.parent().find("p").css("max-height", "initial").end(), a.remove()
    }), $(document).on("click", ".comment .pagination a", function () {
        var a = $(this), e = a.attr("href"), t = a.parent();
        return t.hasClass("disabled") ? !1 : -1 != e.indexOf("javascript") ? !1 : (pjaxLoad(e), !1)
    }), $(document).on("click", "#show-add-itc-account", function () {
        var a, e, t, n = $(this), i = n.parents(".bind-itc-account-showdesc"), o = $("#bind-itc-account");
        i && i.length > 0 ? (t = i.offset().top, e = i.offset().left, a = {
            left: e + "px",
            top: t + "px"
        }, i.hide()) : (t = $(document).scrollTop() + ($(window).height() - o.height()) / 2, a = {
            marginLeft: "50%",
            left: "-" + o.width() / 2 + "px",
            top: t + "px"
        }, $("#vip-b").show()), o.css(a).show()
    }), $(document).on("click", ".add-itc-account-cancle", function () {
        $("#bind-itc-account").hide(), $(".bind-itc-account-showdesc").show(), $("#vip-b").hide()
    }), $(document).on("click", "#bind-itc-account #checkboxInput", function () {
        $(this).prop("checked") ? $("#bind-itc-account-button").removeClass("disabled") : $("#bind-itc-account-button").addClass("disabled")
    }), $(document).on("click", "#bind-itc-account-button", function () {
        var a = $(this), e = a.data("url"), t = a.parents("#bind-itc-account"), n = t.find("#itc-email"), i = t.find("#itc-password");
        if (a.hasClass("disabled"))return !1;
        var o = n.val(), s = i.val();
        return o = o.replace(/(^\s*)|(\s*$)/g, ""), o && -1 != o.indexOf("@") ? s ? ($(".itc-bind-loading").css({
            left: t.offset().left + "px",
            top: t.offset().top + "px"
        }).show(), void $.ajax({
            type: "post",
            url: e,
            data: {appid: o, password: s, app_id: $("#appinfo-id").val()},
            dataType: "json",
            success: function (a) {
                if ($(".itc-bind-loading").hide(), a && 1e4 == a.code) {
                    var e, t = Lang.cancel_btn, o = Lang.show_account, s = !0;
                    a.notApp ? (e = Lang.itc_tip_1 + a.app_name + Lang.itc_tip_2, t = Lang.itc_tip_3) : (e = Lang.itc_tip_4, a.app_name || (o = Lang.confirm_btn, s = !1)), swal({
                        title: e,
                        showConfirmButton: !0,
                        confirmButtonText: o,
                        confirmButtonColor: "#0bb995",
                        showCancelButton: s,
                        cancelButtonText: t,
                        closeOnConfirm: !1,
                        html: !0
                    }, function (e) {
                        e ? s ? window.location.href = "/account/setting/type/settingItc" : window.location.reload() : (a.notApp && n.val(""), i.val(""))
                    })
                } else i.val(""), swal(a.msg)
            }
        })) : (swal(Lang.please_write_pwd), !1) : (swal({
            title: Lang.please_check + "Apple Id",
            confirmButtonText: Lang.confirm_btn
        }, function () {
            n.val("")
        }), !1)
    }), $(document).on("click", ".itc-manage-editer", function () {
        var a = $(this), e = a.parent(), t = e.data("itcid");
        $(".vip-b").show();
        var n, i, o = $(".itc-account-editer");
        i = $(document).scrollTop() + ($(window).height() - o.height()) / 2, n = {
            marginLeft: "50%",
            left: "-" + o.width() / 2 + "px",
            top: i + "px"
        }, $("#vip-b").show(), o.css(n).show().find(".modify-email").val(t).end().find(".old-email").val(t)
    }), $(document).on("click", ".itc-manage-delete", function () {
        var a = $(this), e = a.parents(".manage-itc-account").data("url");
        _parent = a.parent(), appleId = _parent.data("itcid"), swal({
            title: Lang.itc_tip_5,
            text: Lang.itc_tip_6,
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: Lang.confirm_btn,
            cancelButtonText: Lang.cancel_btn,
            closeOnConfirm: !1,
            html: !1
        }, function () {
            $.ajax({
                type: "post", url: e, data: {apple_id: appleId}, dataType: "json", success: function (a) {
                    a && 1e4 == a.code ? swal({
                        title: Lang.itc_tip_7,
                        showConfirmButton: !0,
                        confirmButtonText: Lang.itc_tip_8,
                        cancelButtonText: Lang.cancel_btn,
                        confirmButtonColor: "#0bb995",
                        html: !0
                    }, function () {
                        window.location.reload()
                    }) : swal(a.msg)
                }
            })
        })
    }), $(document).on("click", ".itc-manage-submit", function () {
        var a = $(this), e = a.data("url"), t = a.parents(".itc-account-editer"), n = t.find(".old-email"), i = t.find(".modify-email"), o = t.find(".modify-passowrd"), s = i.val(), r = n.val(), d = o.val();
        return (s = s.replace(/^\s+/i, "").replace(/\s+$/i, "")) ? d ? ($(".itc-bind-loading").addClass("itc-account-modify").css({
            left: t.offset().left + "px",
            top: t.offset().top + "px"
        }).show(), void $.ajax({
            type: "post",
            url: e,
            data: {oldAppid: r, appid: s, password: d, type: 1},
            dataType: "json",
            success: function (a) {
                $(".itc-bind-loading").removeClass("itc-account-modify").hide(), a && 1e4 == a.code ? swal({
                    title: Lang.itc_tip_10,
                    showConfirmButton: !0,
                    confirmButtonText: Lang.itc_tip_11,
                    confirmButtonColor: "#0bb995",
                    html: !0
                }, function () {
                    $(".vip-b").hide(), $(".itc-account-editer").hide(), setTimeout(function () {
                        window.location.reload()
                    }, 200)
                }) : (o.val("").focus(), swal({title: a.msg, confirmButtonText: Lang.confirm_btn}))
            }
        })) : (swal({title: Lang.please_write_pwd, confirmButtonText: Lang.confirm_btn}, function () {
            o.focus()
        }), !1) : (swal({title: Lang.itc_tip_9 + "Apple Id", confirmButtonText: Lang.confirm_btn}, function () {
            i.val("").focus()
        }), !1)
    }), $(document).on("click", ".turnoff", function (a) {
        $(".itc-account-editer").hide(), $(".vip-b").hide()
    }), $(document).on("click", "#itc-filter-input", function (a) {
        var e = $(this), t = $(".itc .off-line");
        e.prop("checked") ? t.hide() : t.show()
    }), $(document).on("click", "#screenshot-box img", function () {
        if (window.isMobile)return !1;
        var a = document.getElementById("bombbox"), e = $(".aso100-nav-label.screenimg .tab.active").data("imgstr"), t = $(".aso100-nav-label.screenimg .tab.active").data("platform") || "ios";
        e = "ios" == t ? e.split(",") : e.split("|"), a.innerHTML = "";
        var n = document.createElement("img"), i = document.createElement("span"), o = $("#tab");
        i.style.position = "absolute", i.style.top = 0, i.style.right = 0, i.innerHTML = Lang.close, i.style.cursor = "pointer", a.appendChild(i), n.src = e[$(this).index()], $(document).scrollTop(80);
        var s, r = $("#screenshot-box img").width(), d = $("#screenshot-box img").height(), c = $(window).height();
        s = 50, c >= 730 && (s = (c - o.height()) / 2), o.css({top: s + "px", marginLeft: -r + "px"}).show();
        var l = 2, p = d * l;
        2.5 * d >= c && (p = c - 84, p >= d ? l = p / d : (l = 1.3, p = d)), n.style.height = d * l + "px", n.style.width = r * l + "px", a.appendChild(n), $(".vip-b").show().css({
            opacity: .8,
            background: "#000"
        }), startMove(a, {height: p}), $("#next").show(), $("#previous").show(), $("#bombbox span").click(function () {
            $(".vip-b").hide(), o.hide(), $("#bombbox").css("height", 0), $("#next").hide(), $("#previous").hide()
        });
        var u = document.getElementById("next"), h = document.getElementById("previous"), m = $(this).index();
        u.onclick = function () {
            m++, m > $("#screenshot-box img").length - 1 && (m = 0), n.src = e[m]
        }, h.onclick = function () {
            m--, 0 > m && (m = $("#screenshot-box img").length - 1), n.src = e[m]
        }
    }), $(document).on("click", ".add-invoice", function () {
        var a = $(this), e = a.data("orderid");
        $("#add-invoice-form input[name=orderid]").val(e), $(".vip-b").show(), $("#fill-in").show()
    }), $(document).on("click", "#add-invoice-submit", function () {
        var a, e, t, n, i, o = $("#add-invoice-form");
        return i = o.find("input[name=orderid]").val(), a = o.find("input[name=title]").val().replace(/(^\s*)|(\s*$)/g, ""), e = o.find("input[name=username]").val().replace(/(^\s*)|(\s*$)/g, ""), t = o.find("input[name=phone]").val().replace(/(^\s*)|(\s*$)/g, ""), n = o.find("input[name=address]").val().replace(/(^\s*)|(\s*$)/g, ""), a ? e ? t ? n ? void $.ajax({
            url: o.attr("action"),
            type: "POST",
            dataType: "json",
            data: {orderid: i, title: a, username: e, phone: t, address: n},
            success: function (a) {
                1e4 == a.code ? swal({title: Lang.invoice_tip_5, confirmButtonText: Lang.confirm_btn}, function () {
                    $("#fill-in").hide(), $(".vip-b").hide(), setTimeout(function () {
                        window.location.reload()
                    }, 200)
                }) : swal(a.msg)
            }
        }) : (swal(Lang.invoice_tip_4), !1) : (swal(Lang.invoice_tip_3), !1) : (swal(Lang.invoice_tip_2), !1) : (swal(Lang.invoice_tip_1), !1)
    }), $(document).on("click", "#add-invoice-close", function () {
        $(".vip-b").hide(), $("#fill-in").hide()
    }), $(document).on("tap click", ".search-qr-code", function (a) {
        preventDefault(a), $(".intell").is(":hidden") ? ($(".intell").addClass("show"), $(".vip-b").addClass("qr-code").show(), _hmt.push(["_trackEvent", Lang.qrcode_tip, "none", "none"])) : ($(".intell").removeClass("show"), $(".vip-b").removeClass("qr-code").hide())
    }), $(document).on("tap click", ".vip-b.qr-code", function (a) {
        $(".intell").removeClass("show"), $(".vip-b").removeClass("qr-code").hide()
    }), $(document).on("click", '#jifen-receive a[href="javascript:;"]', function () {
        if (O)return !1;
        var a = $(this);
        if (a.hasClass("disabled"))return !1;
        var e = a.data("type"), t = a.data("jifen"), n = a.parents("#jifen-receive").data("url"), i = {};
        return e && n ? (i.type = e, O = !0, void $.ajax({
            type: "post", url: n, data: i, complete: function () {
                O = !1
            }, success: function (a) {
                1e4 == a.code ? swal({
                    title: Lang.points_tip_1 + '<span style="color: #df453d;">' + t + "</span>" + Lang.points_tip_2,
                    text: Lang.points_tip_3,
                    type: "success",
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn,
                    html: !0
                }, function () {
                    document.location.reload()
                }) : swal({
                    title: a.msg,
                    type: "error",
                    showCancelButton: !1,
                    confirmButtonColor: "#33ba95",
                    confirmButtonText: Lang.confirm_btn,
                    cancelButtonText: Lang.cancel_btn
                })
            }
        })) : !1
    }), $(document).on("click", "#jifen-exchange-vip a", function () {
        if (O)return !1;
        var a = $(this);
        if (a.hasClass("disabled"))return !1;
        var e = $("#current-jifen"), t = e.data("jifen") || 0;
        t = parseInt(t);
        var n = a.data("type"), i = a.data("title"), o = a.data("jifen"), s = a.parents("#jifen-exchange-vip").data("url"), r = {};
        return o > t ? (swal(Lang.points_tip_4), !1) : n && s ? (r.type = n, void swal({
            title: i,
            confirmButtonColor: "#33ba95",
            confirmButtonText: Lang.confirm_btn,
            cancelButtonText: Lang.cancel_btn,
            showCancelButton: !0
        }, function (a) {
            return a ? (O = !0, void setTimeout(function () {
                $.ajax({
                    type: "post", url: s, data: r, complete: function () {
                        O = !1
                    }, success: function (a) {
                        1e4 == a.code ? swal({
                            title: a.msg,
                            type: "success",
                            confirmButtonColor: "#33ba95",
                            confirmButtonText: Lang.confirm_btn,
                            cancelButtonText: Lang.cancel_btn
                        }, function () {
                            document.location.reload()
                        }) : swal({
                            title: a.msg,
                            type: "error",
                            confirmButtonColor: "#33ba95",
                            confirmButtonText: Lang.confirm_btn,
                            cancelButtonText: Lang.cancel_btn
                        })
                    }
                })
            }, 100)) : !1
        })) : !1
    });
    var Ta;
    $(document).on("ajaxComplete", function (a, e) {
        var t = e.getResponseHeader("Content-Analysis"), n = "/api/analysis";
        return t ? (n += "?anl=" + t + "&t=" + +new Date, Ta || (Ta = document.createElement("img"), Ta.border = 0, Ta.style.display = "none", Ta.width = 1, Ta.height = 1, document.getElementsByTagName("head")[0].appendChild(Ta)), void(Ta.src = n)) : !1
    }), $(".wechat-share-float p, .wechat-share-show").on("click", function () {
        $(".arrow").is(":hidden") ? ($(".arrow").show(), $(".vip-b").addClass("wechat-share").show()) : ($(".vip-b").removeClass("wechat-share").hide(), $(".arrow").hide())
    }), window.isWechat && $(".wechat-open-safari-show").on("click", function (a) {
        var e, t = $(this);
        e = 0 == t.data("platform") ? ".open-safari" : ".open-broser", t.data("openbroser") && (a.preventDefault(), $(e).is(":hidden") ? ($(e).show(), $(".vip-b").addClass("wechat-share").show()) : ($(".vip-b").removeClass("wechat-share").hide(), $(e).hide()))
    }), $(document).on("tap click", ".vip-b.wechat-share, .arrow, .open-safari, .open-broser", function (a) {
        $(".vip-b").removeClass("wechat-share").hide(), $(".arrow").hide(), $(".open-safari").hide(), $(".open-broser").hide(), a.preventDefault()
    }), $(".wechat-share-show").hover(function () {
        "undefined" == typeof wechatConfig && $("#article-show-qrcode").show()
    }, function () {
        $("#article-show-qrcode").hide()
    }), $(document).on("click", ".message .show-msg", function () {
        var a = $(this), e = a.parents("tr"), t = e.data("id"), n = $(".msg-container");
        e.hasClass("read") || $.get("/account/readMessage/id/" + t, function (a) {
            e.addClass("read")
        });
        var i = e.find(".msg-content"), o = i.find(".msg-title").html(), s = i.find(".msg-time").html(), r = i.find(".msg-desc-all").html();
        if (n.find(".title-second").html("<span></span>" + o), n.find(".time").html(s), n.find(".content").html(r), n.removeClass("hide").addClass("show"), window.isMobile) {
            var d = $(".head.navbar").outerHeight(), c = $(window).height();
            n.css({
                position: "fixed",
                top: d,
                height: c + 20,
                paddingBottom: d + 25
            }), n.find(".content").css({height: n.height() - n.find(".title-second").outerHeight(!0) - n.find(".msg-detail .time").outerHeight(!0) - n.find(".msg-detail .mobile-button-box").outerHeight(!0)})
        } else n.css({top: ($(window).height() - n.height()) / 2}), $(".vip-b").show()
    }), $(document).on("click", ".msg-container .close-msg", function () {
        var a = $(this), e = a.parents(".msg-container");
        e.addClass("hide-animation"), setTimeout(function () {
            e.removeClass("show").removeClass("hide-animation")
        }, 300), window.isMobile || $(".vip-b").hide()
    }), $(".globalrank-list").length && !window.isMobile && ($(".appicon-name").hover(function () {
        var a = $(this).attr("class").match(/appid_(\d+)\s?/i)[1] || 0, e = ".appid_" + a;
        $(e).addClass("appicon-name-selected")
    }, function () {
        var a = $(this).attr("class").match(/appid_(\d+)\s?/i)[1] || 0, e = ".appid_" + a;
        $(e).removeClass("appicon-name-selected")
    }), $(".appicon-name").mousemove(function (a) {
        if (-1 !== a.target.className.indexOf("tooltip")) {
            var e = $(a.target), t = a.offsetX, n = e.width();
            n > t && $(this).trigger("mouseout")
        }
    }), $(".appicon-name img").tooltip({
        placement: "left",
        html: 1,
        delay: {show: 50, hide: 0}
    }), $(document).on("scroll", function () {
        $(document).scrollTop() > 155 ? $(".globalrank thead tr").addClass("fixed") : $(".globalrank thead tr").removeClass("fixed")
    })), $(document).on("click", "#container.container-keyword-expand .expand-method .method", function () {
        var a = $(this), e = a.data("name");
        a.addClass("active").siblings().removeClass("active"), $("#expand-method-list").removeClass("one two three").addClass(e), "three" == e && Ba(), Ma($("#expand-detail-" + e))
    }), $(document).on("focus", "#expand-method-form-one input", function () {
        $(this).parents(".form-group").removeClass("has-error")
    }), $(document).on("submit", "#expand-method-form-one", function () {
        var a = $(this), e = a.find('input[type="text"]'), t = e.val();
        if (t = $.trim(t), !t)return !1;
        t = t.split(/,|\uff0c/);
        for (var n = [], i = 0, o = t.length; o > i; i++) {
            for (var s = i + 1; o > s; s++)t[i] === t[s] && (s = ++i);
            n.push(t[i])
        }
        if (t = n, t.length > 5)return e.parents(".form-group").addClass("has-error"), !1;
        $("#checkbox-operate-cover").prop("checked", !1);
        var r = $("#expand-detail-one");
        r.find(".spinner-bg").show();
        var d = "", c = "";
        $.map(t, function (a, e) {
            c || (c = a), d += '<a href="javascript:;" class="tab' + (0 == e ? " active" : "") + '">' + a + "</a>"
        }), r.find(".aso100-nav-label").html(d);
        var l = r.data("ajaxurl");
        return $.getJSON(l + "/" + c, function (a) {
            a.data.list;
            r.find(".aso100-nav-label a:eq(0)").data("data", a.data), Da(r.find("table"), a.data.list), r.find(".spinner-bg").hide()
        }), r.removeClass("hide"), Ma(r), !1
    }), $(document).on("click", "#expand-detail-one .aso100-nav-label .tab", function () {
        var a, e = $(this), t = e.html(), n = (+new Date, $("#expand-detail-one"));
        if (e.hasClass("life"))return !1;
        if (e.addClass("active life").siblings().removeClass("active life"), $("#checkbox-operate-cover").prop("checked", !1), a = e.data("data"))Da(n.find("table"), a.list); else {
            n.find(".spinner-bg").show();
            var i = n.data("ajaxurl");
            $.getJSON(i + "/" + t, function (a) {
                e.data("data", a.data), Da(n.find("table"), a.data.list), n.find(".spinner-bg").hide()
            })
        }
    }), $(document).on("click", "#expand-method-list .checkbox_all", function () {
        var a = $(this), e = a.parents(".table");
        e.find("tbody .aso-checkbox input").prop("checked", a.prop("checked"))
    }), $(document).on("click", "#checkbox-operate-cover", function () {
        var a = $(this), e = a.parents(".expand-detail"), t = e.find(".table").DataTable();
        a.prop("checked") ? t.columns(4).search("^\\d+$", !0, !1).draw() : t.columns(4).search("").draw()
    });
    var Da = function (a, e) {
        var t = a, n = t.data("keywordurl"), i = t.data("hintsurl"), o = t.data("numberurl");
        return t ? void t.DataTable({
            destroy: !0,
            data: e,
            order: [],
            lengthMenu: [100],
            lengthChange: !1,
            searching: !0,
            autoWidth: !1,
            columnDefs: [{
                orderable: !1, data: function (a, e, t, n) {
                    var i = a[0], o = "";
                    return a[5] && (o = "disabled"), '<div class="aso-checkbox"><input type="checkbox" name="word" id="checkbox_one_' + i + '" data-wordid="' + i + '" class="form-control checkbox_wordid" ' + o + '><label for="checkbox_one_' + i + '"><span></span></label></div>'
                }, targets: 0
            }, {
                orderable: !1, data: function (a, e, t, i) {
                    if ("sort" === e)return a[5];
                    var o = a[1];
                    return '<a href="' + n + encodeURIComponent(o) + '" target="_blank">' + o + "</a>"
                }, targets: 1
            }, {
                data: function (a, e, t, n) {
                    return '<a class="number" href="' + i + a[0] + '" target="_blank">' + a[2] + "</a>"
                }, targets: 2
            }, {
                data: function (a, e, t, n) {
                    return '<a class="number" href="' + o + a[0] + '" target="_blank">' + a[3] + "</a>"
                }, targets: 3
            }, {
                searchable: !0, data: function (a, e, t, n) {
                    return "sort" === e ? a[4] : a[4] > 0 ? a[4] : Lang.keyword_not_covered
                }, targets: 4
            }, {
                orderable: !1, data: function (a, e, t, n) {
                    return a[5] ? '<a href="javascript:;" data-wordid="' + a[0] + '" class="btn btn-default">' + Lang.keyword_cancel_add + "</a>" : '<a href="javascript:;" data-wordid="' + a[0] + '" class="btn btn-custom">' + Lang.keyword_add_repertory + "</a>"
                }, targets: 5
            }],
            language: {
                sProcessing: Lang.dataTables_sProcessing,
                sLengthMenu: Lang.dataTables_sLengthMenu,
                sZeroRecords: Lang.dataTables_sZeroRecords,
                sInfo: Lang.dataTables_sInfo,
                sInfoEmpty: Lang.dataTables_sInfoEmpty,
                sInfoFiltered: Lang.dataTables_sInfoFiltered,
                sInfoPostFix: "",
                sSearch: "",
                sUrl: "",
                sEmptyTable: Lang.dataTables_sEmptyTable,
                sLoadingRecords: Lang.dataTables_sLoadingRecords,
                sInfoThousands: ",",
                oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
                oAria: {
                    sSortAscending: Lang.dataTables_sSortAscending,
                    sSortDescending: Lang.dataTables_sSortDescending
                }
            }
        }) : !1
    };
    $(document).on("focus", "#expand-detail-two .form-control", function () {
        var a = $(this), e = a.parents("form").find(".search-app-list");
        e.children().length && e.show(), $("html, body").animate({scrollTop: "210px"}, 200)
    }), $(document).on("keydown", "#expand-detail-two .form-control", function (a) {
        13 == a.keyCode && a.preventDefault()
    }), $(document).on("keyup input paste", "#expand-detail-two .form-control", function () {
        var a = $(this), e = a.val(), t = a.parents("form"), n = t.find(".search-app-list"), i = window.listAppids || [];
        clearTimeout(window.searching), e = $.trim(e), !e && n.find(".search-title").length && n.html(n.data("html")).hide(), e && -1 === e.indexOf("'") && (window.searching = setTimeout(function () {
            var a = t.attr("action");
            a && $.getJSON(a + e, function (a) {
                if (1e4 == a.code) {
                    var t = '<span class="search-title">「' + e + "」" + Lang.keyword_search_result + "</span>";
                    a.list.length ? $.map(a.list, function (a, e) {
                        $.inArray(parseInt(a.app_id), i) > -1 || (t += '<li class="media item">', t += '<a href="javascript:;" data-appid="' + a.app_id + '">', t += '<div class="media-left media-middle">', t += '<img class="media-object" src="' + a.icon + '" alt="' + a.app_name + '">', t += "</div>", t += '<div class="media-body">', t += '<h4 class="media-heading">' + a.app_name + "</h4>", t += '<div class="media-auther">' + a.publisher + "</div>", t += "</div>", t += "</a>", t += "</li>")
                    }) : t += '<li class="media item no-data">' + Lang.search_no_result + "</li>", n.data("html") || n.data("html", n.html()), n.html(t).show()
                } else swal(a.msg)
            })
        }, 600))
    }), $(document).on("blur", "#expand-detail-two .form-control", function () {
        var a = $(this), e = $.trim(a.val()), t = a.parents("form").find(".search-app-list");
        !e && t.find(".search-title").length && t.hide()
    }), $(document).mouseup(function (a) {
        var e = $("#expand-detail-two");
        if (e.length) {
            var t = e.find("form");
            t.is(a.target) || 0 !== t.has(a.target).length || e.find(".search-app-list").hide()
        }
    }), $(document).on("click", "#expand-detail-two .search-app-list .media a", function () {
        var a = $(this), e = a.parents(".search-app-list");
        appid = a.data("appid"), icon = a.find("img").attr("src"), appName = a.find(".media-heading").html(), publisher = a.find(".media-auther").html(), window.listAppids = window.listAppids || [];
        var t = $("#selected-app-list"), n = t.find(".col-md-10");
        if (n.children().length >= 3)return swal({title: Lang.keyword_expend_show_app}, function () {
            e.hide()
        }), !1;
        var i = "";
        i += '<div class="thumbnail">', i += '<img src="' + icon + '">', i += '<div class="caption">', i += '<p><a href="/app/rank/appid/' + appid + '" target="_blank">' + appName + "</a></p>", i += "</div>", i += '<div class="subscribe-modify" data-appid="' + appid + '"><span class="glyphicon-subscribe-remove"></span></div>', i += "</div>", $("#selected-app-list").show().find(".col-md-10").append(i), a.parent().addClass("hide appid" + appid), window.listAppids.push(appid), e.hide(), e.find(".competi").length == e.find(".competi.hide").length && e.find(".competi-title").hide(), e.find(".same").length == e.find(".same.hide").length && e.find(".same-title").hide()
    }), $(document).on("click", "#selected-app-list .subscribe-modify", function () {
        var a, e = $(this), t = e.data("appid"), n = e.parent();
        $("#expand-detail-two .search-app-list").find(".appid" + t).removeClass("hide appid" + t), n.siblings().length || $("#selected-app-list").hide(), n.remove(), $.inArray(t, window.listAppids) > -1 && (a = $.inArray(t, window.listAppids), window.listAppids.splice(a, 1))
    }), $(document).on("click", "#selected-app-list .btn", function () {
        var a = $(this), e = $("#selected-app-list"), t = e.find(".col-md-10").children(), n = [];
        if (!t.length)return !1;
        $.map(t, function (a) {
            n.push($(a).find(".subscribe-modify").data("appid"))
        });
        var i = $("#expand-detail-two");
        i.find(".spinner-bg").show(), i.find(".expand-detail").removeClass("hide");
        var o = a.data("ajaxurl");
        $.getJSON(o + n.join(","), function (a) {
            Sa(i.find("table"), a.list), i.find(".spinner-bg").hide()
        })
    });
    var Sa = function (a, e) {
        var t = a, n = $("#selected-app-list .col-md-10").children(), i = t.data("keywordurl"), o = t.data("hintsurl"), s = $("#app").data("appid");
        if (!t)return !1;
        t.find(".add-app").remove();
        var r = 3, d = [];
        $.map(n, function (a) {
            var e = $(a), n = e.find(".subscribe-modify").data("appid"), i = e.find("img").attr("src"), o = e.find(".caption a").html(), s = '<th class="col-md-1 add-app"><img src="' + i + '" data-toggle="tooltip" title="' + o + '"></th>';
            t.find(".large th:eq(" + r + ")").after(s), r++, d.push({
                orderable: !1, data: function (a, e, t, i) {
                    var o = JSON.parse(a[3]);
                    return o[n] ? o[n] : "-"
                }, targets: r
            })
        }), t.hasClass("dataTable") && t.DataTable().clear(), d.push({
            orderable: !1, data: function (a, e, t, n) {
                var i = a[0], o = "";
                return a[r] && (o = "disabled"), '<div class="aso-checkbox"><input type="checkbox" name="word" id="checkbox_two_' + i + '" data-wordid="' + i + '" class="form-control checkbox_wordid" ' + o + '><label for="checkbox_two_' + i + '"><span></span></label></div>'
            }, targets: 0
        }), d.push({
            orderable: !1, data: function (a, e, t, n) {
                var o = a[1];
                return '<a href="' + i + encodeURIComponent(o) + '" target="_blank">' + o + "</a>"
            }, targets: 1
        }), d.push({
            orderable: !1, data: function (a, e, t, n) {
                return '<a class="number" href="' + o + a[0] + '" target="_blank">' + a[2] + "</a>"
            }, targets: 2
        }), d.push({
            orderable: !1, data: function (a, e, t, n) {
                var i = JSON.parse(a[3]);
                return i[s] ? i[s] : "-"
            }, targets: 3
        }), d.push({
            orderable: !1, data: function (a, e, t, n) {
                return a[r] ? '<a href="javascript:;" data-wordid="' + a[0] + '" class="btn btn-default">' + Lang.keyword_cancel_add + "</a>" : '<a href="javascript:;" data-wordid="' + a[0] + '" class="btn btn-custom">' + Lang.keyword_add_repertory + "</a>"
            }, targets: r + 1
        }), t.DataTable({
            destroy: !0,
            data: e,
            lengthMenu: [100, 1e3],
            lengthChange: !1,
            searching: !0,
            autoWidth: !1,
            createdRow: function (a, e, t) {
            },
            columnDefs: d,
            initComplete: function () {
                t.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
            },
            language: {
                sProcessing: Lang.dataTables_sProcessing,
                sLengthMenu: Lang.dataTables_sLengthMenu,
                sZeroRecords: Lang.dataTables_sZeroRecords,
                sInfo: Lang.dataTables_sInfo,
                sInfoEmpty: Lang.dataTables_sInfoEmpty,
                sInfoFiltered: Lang.dataTables_sInfoFiltered,
                sInfoPostFix: "",
                sSearch: "",
                sUrl: "",
                sEmptyTable: Lang.dataTables_sEmptyTable,
                sLoadingRecords: Lang.dataTables_sLoadingRecords,
                sInfoThousands: ",",
                oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
                oAria: {
                    sSortAscending: Lang.dataTables_sSortAscending,
                    sSortDescending: Lang.dataTables_sSortDescending
                }
            }
        })
    }, Ba = function () {
        var a = $("#expand-detail-three"), e = a.data("ajaxurl");
        return a.data("getdata") ? !1 : (a.find(".spinner-bg").show(), a.data("getdata", 1), void $.getJSON(e, function (e) {
            ja(a.find("table"), e.list), a.find(".spinner-bg").hide()
        }))
    }, ja = function (a, e) {
        var t = a, n = ($("#selected-app-list .col-md-10").children(), t.data("keywordurl")), i = t.data("hintsurl"), o = t.data("numberurl");
        $("#app").data("appid");
        if (!t)return !1;
        t.hasClass("dataTable") && t.DataTable().clear();
        var s = [];
        s.push({
            orderable: !1, data: function (a, e, t, n) {
                var i = a[0], o = "";
                return a[5] && (o = "disabled"), '<div class="aso-checkbox"><input type="checkbox" name="word" id="checkbox_three_' + i + '" data-wordid="' + i + '" class="form-control checkbox_wordid" ' + o + '><label for="checkbox_three_' + i + '"><span></span></label></div>'
            }, targets: 0
        }), s.push({
            orderable: !1, data: function (a, e, t, i) {
                var o = a[1];
                return '<a href="' + n + encodeURIComponent(o) + '" target="_blank">' + o + "</a>"
            }, targets: 1
        }), s.push({
            data: function (a, e, t, n) {
                return '<a class="number" href="' + i + a[0] + '" target="_blank">' + a[2] + "</a>"
            }, targets: 2
        }), s.push({
            data: function (a, e, t, n) {
                return '<a class="number" href="' + o + a[0] + '" target="_blank">' + a[3] + "</a>"
            }, targets: 3
        }), s.push({
            data: function (a, e, t, n) {
                return a[4]
            }, targets: 4
        }), s.push({
            orderable: !1, data: function (a, e, t, n) {
                return a[5] ? '<a href="javascript:;" data-wordid="' + a[0] + '" class="btn btn-default">' + Lang.keyword_cancel_add + "</a>" : '<a href="javascript:;" data-wordid="' + a[0] + '" class="btn btn-custom">' + Lang.keyword_add_repertory + "</a>"
            }, targets: 5
        }), t.DataTable({
            destroy: !0,
            data: e,
            lengthMenu: [100, 1e3],
            lengthChange: !1,
            searching: !0,
            autoWidth: !1,
            createdRow: function (a, e, t) {
            },
            columnDefs: s,
            initComplete: function () {
                t.find('[data-toggle="tooltip"]').tooltip({delay: {show: 100, hide: 100}})
            },
            language: {
                sProcessing: Lang.dataTables_sProcessing,
                sLengthMenu: Lang.dataTables_sLengthMenu,
                sZeroRecords: Lang.dataTables_sZeroRecords,
                sInfo: Lang.dataTables_sInfo,
                sInfoEmpty: Lang.dataTables_sInfoEmpty,
                sInfoFiltered: Lang.dataTables_sInfoFiltered,
                sInfoPostFix: "",
                sSearch: Lang.dataTables_sSearch,
                sUrl: "",
                sEmptyTable: Lang.dataTables_sEmptyTable,
                sLoadingRecords: Lang.dataTables_sLoadingRecords,
                sInfoThousands: ",",
                oPaginate: {sFirst: Lang.dataTables_sFirst, sPrevious: "<", sNext: ">", sLast: Lang.dataTables_sLast},
                oAria: {
                    sSortAscending: Lang.dataTables_sSortAscending,
                    sSortDescending: Lang.dataTables_sSortDescending
                }
            }
        })
    }, Ma = function (a) {
        if (!a.length)return !1;
        $.fn.dataTable.ext.search = [];
        var e = a.find(".datatable-ext-search"), t = e.find(".ext-search-hints");
        t.length && $.fn.dataTable.ext.search.push(function (a, e, n) {
            var i = t.data("column"), o = parseInt(t.find(".min").val(), 10), s = parseInt(t.find(".max").val(), 10), r = parseFloat(e[i]) || 0;
            return !!(isNaN(o) && isNaN(s) || isNaN(o) && s >= r || r >= o && isNaN(s) || r >= o && s >= r)
        });
        var n = e.find(".ext-search-result");
        n.length && $.fn.dataTable.ext.search.push(function (a, e, t) {
            var i = n.data("column"), o = parseInt(n.find(".min").val(), 10), s = parseInt(n.find(".max").val(), 10), r = parseFloat(e[i]) || 0;
            return !!(isNaN(o) && isNaN(s) || isNaN(o) && s >= r || r >= o && isNaN(s) || r >= o && s >= r)
        });
        var i = e.find(".ext-search-rank");
        i.length && $.fn.dataTable.ext.search.push(function (a, e, t) {
            var n = i.data("column"), o = parseInt(i.find(".min").val(), 10), s = parseInt(i.find(".max").val(), 10), r = parseFloat(e[n]) || 0;
            if ("string" == typeof n && -1 != n.indexOf(",")) {
                if (isNaN(o) && isNaN(s))return !0;
                var d = !1;
                return n = n.split(","), $.map(n, function (a) {
                    a > e.length - 2 || (colValue = parseFloat(e[a]), isNaN(colValue) || (isNaN(o) && colValue <= s || isNaN(s) && o <= colValue || o <= colValue && colValue <= s) && (d = !0))
                }), d
            }
            return !!(isNaN(o) && isNaN(s) || isNaN(o) && s >= r || r >= o && isNaN(s) || r >= o && s >= r)
        }), e.find(".btn-group input").on("keyup", function () {
            var t = $(this), n = t.parents(".screen-nav");
            t.val() ? t.addClass("hasData") : t.removeClass("hasData"), n.find(".hasData").length ? e.find(".clear-screen").show() : e.find(".clear-screen").hide(), a.find(".table").DataTable().draw()
        }), e.find(".clear-screen").on("click", function () {
            e.find(".screen-nav input").val(""), a.find(".table").DataTable().draw(), $(this).hide()
        })
    };
    $(document).on("click", "#expand-method-list .table tbody td .btn", function () {
        var a, e, t = $(this), n = t.data("wordid"), i = $("#expand-method-list").data("addexpand"), o = $("#expand-method-list").data("deleteexpand"), s = $("#expand-detail-one .aso100-nav-label .tab.active");
        a = t.parents("tr").index(), t.hasClass("btn-default") ? $.getJSON(o + "/wordid/" + n, function (n) {
            1e4 == n.code ? (s.length && (e = s.data("data").list, e[a][5] = 0), t.html(Lang.keyword_add_repertory).addClass("btn-custom").removeClass("btn-default").blur(), t.parents("tr").find('input[type="checkbox"]').removeAttr("disabled")) : swal(n.msg)
        }) : $.getJSON(i + n, function (n) {
            1e4 == n.code ? (s.length && (e = s.data("data").list, e[a][5] = 1), t.html(Lang.keyword_cancel_add).addClass("btn-default").removeClass("btn-custom").blur(), t.parents("tr").find('input[type="checkbox"]').attr("disabled", !0)) : swal(n.msg)
        })
    }), $(document).on("click", "#expand-method-list .add-expand-multi", function () {
        var a, e, t = $(this), n = $("#expand-method-list").data("addmultiexpand"), i = t.parents(".expand-detail").find(".table"), o = i.find(".checkbox_wordid:checked"), s = $("#expand-detail-one .aso100-nav-label .tab.active"), r = [];
        $.map(o, function (a) {
            var e = $(a), t = e.data("wordid");
            t && e.prop("checked") && !e.parents("tr").find(".btn").hasClass("btn-default") && r.push(t)
        }), r.length && $.post(n, {words: r.join(",")}, function (t) {
            1e4 == t.code ? $.map(o, function (t) {
                var n = $(t);
                s.length && (e = s.data("data").list, a = n.parents("tr").index(), e[a][5] = 1), n.parents("tr").find(".btn").html(Lang.keyword_cancel_add).addClass("btn-default").removeClass("btn-custom"), n.parents("tr").find('input[type="checkbox"]').removeAttr("checked").attr("disabled", !0), swal(r.length + Lang.keyword_muti_succ, "", "success")
            }) : swal(t.msg)
        })
    }), $(document).on("click", "#keyword-repertory-container .change-word", function () {
        var a, e, t, n, i, o, s, r = $(this), d = $("#repertory-box #name-box"), c = $("#repertory-box #keyword-box");
        a = r.data("state"), e = r.data("type"), n = r.data("id"), i = r.data("word");
        var l = $("#keyword-extend-user").data("updateurl") + r.data("id") + "/type/" + e;
        a && (l += "/state/" + a), $.getJSON(l, {}, function (l) {
            return 1e4 != l.code ? (swal(l.msg), !1) : void(1 == a ? (r.data("state", 2), "word" == e ? (t = '<a href="javascript:;" class="btn btn-border change-word word-' + n + '" data-type="word" data-id="' + n + '">' + i + '<span class="iconfont icon-guanbi"></span></a>', c.append(t)) : (t = '<a href="javascript:;" class="btn btn-border change-word word-' + n + '" data-type="name" data-id="' + n + '">' + i + '<span class="iconfont icon-guanbi"></span></a>', d.append(t))) : ("word" == e ? (s = $(".table-word-" + n), o = c.find(".word-" + n)) : (s = $(".table-name-" + n), o = d.find(".word-" + n)), s.data("state", 1), s.removeAttr("checked"), o.fadeOut("fast", function () {
                o.remove(t)
            })))
        })
    }), $(document).on("click", "#keyword-repertory-container .extword-remove", function (a) {
        var e, t, n, i = $(this), o = $(".groupData_0");
        e = i.data("id"), n = i.data("groupid"), t = $("#keyword-extend-user").data("deleteurl") + e, $.getJSON(t, {}, function (a) {
            if (1e4 != a.code)return swal(a.msg), !1;
            var t = o.val();
            if (t && (t = $.parseJSON(t), $.each(t, function (a, n) {
                    return n[0] == e.toString() ? (t.splice(a, 1), !1) : void 0
                }), o.val(JSON.stringify(t))), 0 == $.parseJSON(o.val()).length)return $("#keyword-repertory-nodata").removeClass("hide"), $("#keyword-repertory-container").remove(), !1;
            if (0 != n) {
                var s = ".groupData_" + n, r = $(s).val();
                r && (r = $.parseJSON(r), $.each(r, function (a, t) {
                    return t[0] == e.toString() ? (r.splice(a, 1), !1) : void 0
                }), $(s).val(JSON.stringify(r)))
            }
            i.parents("tr").fadeOut("fast", function () {
                i.parents("tr").remove()
            });
            var d = $("#repertory-box .word-" + e);
            d.fadeOut("fast", function () {
                d.remove()
            })
        })
    }), $(document).on("click", "#keyword-repertory-container #group-list-nav .group .remove-group", function (a) {
        var e, t, n, i = $(this);
        t = i.parent("a"), n = t.parent("div").data("delurl"), e = t.data("groupid"), $.ajax({
            url: n,
            type: "POST",
            dataType: "json",
            data: {group_id: e}
        }).done(function (a) {
            return 1e4 != a.code ? (swal(a.msg), !1) : (t.prev().click(), t.remove(), $('.group-change-select option[value="' + e + '"]').remove(), $('#select-group-temp .select option[value="' + e + '"]').remove(), void 0)
        }).fail(function () {
            swal(Lang.request_error)
        })
    }), p(), $(document).on("click", "#group-change-submit", function () {
        var a = $('.keyword-repertory-tr .aso-checkbox input[type="checkbox"]'), e = $(".group-change-select").val(), t = "";
        $("#groupData");
        return a.each(function (a, e) {
            $(this).prop("checked") && (t += $(this).val() + ",")
        }), t = t.substring(0, t.length - 1), e ? void u(t, e, function () {
            a.each(function (a, e) {
                $(this).removeAttr("checked")
            })
        }) : (swal(Lang.keyword_select2_placehoder), !1)
    }), $(document).on("change", ".keyword-expand-list .group-change-select", function (a) {
        var e, t = $(this);
        e = t.parents("div.select-group-row").data("id"), u(e, t.val())
    }), $(document).on("click", "#group-list-nav .group", function (a) {
        a.preventDefault();
        var e, t, n = $(this), i = $("#checkbox_all");
        n.addClass("active life").siblings().removeClass("active life"), i.removeAttr("checked"), e = "." + n.data("classname"), t = $(e).val(), t = t ? $.parseJSON(t) : [], window.keywordExtend.clear().rows.add(t).draw()
    }), $(document).on("click", "#add-keyword-extend", function () {
        var a = $(this);
        a.addClass("disabled"), a.attr("disabled", !0);
        var e = a.data("url"), t = $('.aso100-nav-select input[name="keyword"]'), n = t.val();
        wordLang = t.attr("placeholder"), n || swal(wordLang), $.getJSON(e, {word: n}, function (e, n) {
            if (a.removeClass("disabled"), a.attr("disabled", !1), 1e4 != e.code)swal(e.msg); else {
                var i = $.parseJSON(e.groupData);
                window.tableData.unshift(i), $(".groupData_0").val(JSON.stringify(window.tableData)), $($("#group-list-nav").children(".group").get(0)).click(), t.val("")
            }
        })
    }), $(document).on("click", "#checkbox_all", function (a) {
        var e = $('.keyword-repertory-tr .aso-checkbox input[type="checkbox"]');
        $(this).prop("checked") ? e.each(function (a, e) {
            $(this).prop("checked", !0)
        }) : e.each(function (a, e) {
            $(this).removeAttr("checked")
        })
    }), h(), $(document).on("click", "#repertory-box #go-help", function (a) {
        a.preventDefault();
        var e, t = $(this), n = $("#repertory-box");
        e = t.attr("href"), n.find(".change-word").length ? location.href = e : swal(Lang.keyword_not_selected)
    }), !function () {
        var a = $(".invite .preview-warp .preview-btn"), e = $(".invite .preview-warp .preview-show"), t = null, n = null;
        a.hover(function () {
            n = setTimeout(function () {
                e.fadeIn(), t = t || e.position().left, a.addClass("first"), a.hasClass("first") && e.css("left", t + 8 + "px")
            }, 200)
        }, function () {
            clearTimeout(n), e.fadeOut()
        })
    }(), $(document).on("click", ".invite #btn-invite", function () {
        var a = $(this), e = a.parents("form"), t = e.find("input");
        return t.val() ? (a.addClass("disabled"), a.attr("disabled", !0), void $.ajax({
            type: "POST",
            url: e.attr("action"),
            data: e.serialize(),
            success: function (e) {
                a.removeClass("disabled"), a.attr("disabled", !1), 1e4 == e.code && t.val(""), swal(e.msg)
            }
        })) : (swal("\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740"), !1)
    }), $(document).on("order.dt", ".keyword-list table.table", function () {
        var a = $(this), e = a.DataTable().order();
        if (!e.length)return !1;
        var t, n, i, o = e[0][0], s = e[0][1];
        t = a.find("th:eq(" + o + ")"), n = t.find(".icon-up"), i = t.find(".icon-down"), t.siblings().find(".icon").removeClass("active"), "asc" == s ? (n.addClass("active"), i.removeClass("active")) : (n.removeClass("active"), i.addClass("active"))
    });
    var Ia = !1;
    $(document).on("click", ".global-rank-info", function () {
        var a = ($(".global-rank-info"), $(" #global-maps-charts")), e = $("#global-maps-charts-nav"), t = $("#all-global-maps-charts-tr-inner-div .spinner-box"), n = $(this);
        a.hide(), e.hide();
        var i;
        if (Ia)var o = $(".all-global-maps-charts-tr"); else {
            var o = $('<tr class="all-global-maps-charts-tr  show-animation" style="display:none"><td colspan="5"></td></tr>');
            o.find("td").html($("#all-global-maps-charts-tr-inner-div")), o.insertAfter(n.parents("tr")), Ia = !0
        }
        n.parents("tr").next().is(o) ? i = n.parents("tr").next().css("display") : (o.insertAfter(n.parents("tr")), i = "none"), "table-row" == i ? o.hide() : (o.show(), t.show()), $("html body").animate({scrollTop: n.parents("td").offset().top - 50 + "px"}, 500);
        var s = e.data("ajaxpreurl"), r = n.data("appid");
        s += r, e.data("ajaxurl", s), $(".globalranktrend-list .show-view-details").attr("href", n.parents("tr").find("a")[0].href.replace("rank", "globalRank")), $.ajax({
            type: "get",
            url: s,
            data: {device: e.find(".active").data("device")},
            dataType: "json",
            success: function (n) {
                t.hide(), a.show(), e.show(), e.find(".active").data("data", JSON.stringify(n)), ta(a, n)
            }
        })
    }), $(document).on("tap click", ".link-to-next", function (a) {
        var e = $("#alert-signIn");
        return e.length ? $("#alert-signIn").show() : $.get("/public/signinAlert", function (a) {
            var e = $(a);
            $("body").append(e), e.show().find(".form-horizontal").data("referrer", location.href), accountPwd(e.find(".form-horizontal")), ua($("#alert-signIn").find("#code-img"))
        }), $("#alert-signIn form").data("referrer") && $("#alert-signIn form").data("referrer", "/rank/globalrank"), !1
    }), $(document).on("tap click", ".alert-close", function (a) {
        return $("#alert-signIn").hide(), !1
    }), $(document).on("scroll", function (a) {
        $(document).scrollTop() > 235 ? $(".top-appinfo").fadeIn(400) : $(".top-appinfo").fadeOut(400)
    }), $(document).on("tap", ".container-keyword .more", function () {
        var a = $(".keyword-info");
        return a.css({maxHeight: "initial"}), $(this).hide(), !1
    }), $(document).on("tap", ".panel .panel-info-show", function () {
        var a = $(".panel .show-list"), e = $(".panel .panel-info-show .caret");
        return txt = $(".panel .panel-info-show .txt"), "\u6536\u8d77" == txt.html() ? (a.removeClass("show-list-show-animation").addClass("show-list-hide-animation"), e.addClass("bottom-caret").removeClass("top-caret"), txt.html("\u5c55\u793a\u5168\u90e8")) : (a.removeClass("show-list-hide-animation").addClass("show-list-show-animation"), e.addClass("top-caret").removeClass("bottom-caret"), txt.html("\u6536\u8d77")), !1
    })
}), centerModals(), $(window).on("resize", centerModals), moreBtnShow(), $("#keyword-list").length > 0 && (dataSearchPush(), $(document).on("tap click", ".keyword-summary .word-num", function () {
    var a = $(this), e = a.parent("tr"), t = e.data("hintsmin") || "", n = e.data("hintsmax") || "", i = a.data("rankmin") || "";
    rankMax = a.data("rankmax") || "", $("#minHints").val(t), $("#maxHints").val(n), $("#minRank").val(i), $("#maxRank").val(rankMax), $(".screen-nav .btn-group input").keyup()
})), $(document).on("tap click", ".keyword-summary .vs-table a", function () {
    var a = $(this), e = "." + a.data("class"), t = ".title-forth .title-" + a.data("type"), n = $(e).val();
    return 0 == n.length ? !1 : ($(".title-forth .title-mark").hide(), $(t).show(), $("#return-show").show(), $(".rank-title").text($(".rank-title").data(a.data("type"))), $(".export-excel,.add-custom-keyword").hide(), n = $.parseJSON(n), window.diff = 1, void window.tableSort.clear().rows.add(n).draw())
}), $(document).on("tap click", "#return-show", function () {
    $(this).hide(), $(".title-forth .title-mark").hide(), $(".export-excel,.add-custom-keyword").show(), $(".rank-title").text($(".rank-title").data("normal")), window.diff = 0, window.tableSort.clear().rows.add(window.tableData).draw()
}), data = $("#table-optimization-data").html(), data && createTableOptKeyword(data), $(document).on("order.dt", "#opt-keyword-sort", function () {
    if (!window.tableSortOpt || !window.tableSortOpt.order()[0])return !1;
    var a, e, t, n, i = $(this), o = window.tableSortOpt.order(), s = o[0][0];
    a = i.find("th:eq(" + s + ")"), e = a.attr("class"), t = a.find(".icon-up"), n = a.find(".icon-down"), a.siblings().find(".icon").removeClass("active"), "sorting_asc" == e ? (t.addClass("active"), n.removeClass("active")) : (t.removeClass("active"), n.addClass("active"))
}), downSources(), $("#hotDraw").length > 0, keywordRepertory(), showChangePd(), window.clientShare = function () {
    var a = "app://share?title=" + encodeURIComponent(wechatShare.title) + "&content=" + wechatShare.desc + "&url=" + encodeURIComponent(wechatShare.link) + "&image=" + encodeURIComponent(wechatShare.imgUrl) + "&t=" + +new Date;
    location.href = a
};
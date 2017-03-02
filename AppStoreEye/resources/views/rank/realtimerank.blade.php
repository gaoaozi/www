@extends('layouts.app')
<link href="{{ asset('css/style_v2_min.css') }}" rel="stylesheet">
<link href="{{ asset('css/aso_common.css') }}" rel="stylesheet">

<link rel="shortcut icon" href="/favicon.ico">
<link rel="manifest" href="/manifest.json">
{{--<script async="" src="https://www.google-analytics.com/analytics.js"></script>--}}
<script src="https://zz.bdstatic.com/linksubmit/push.js"></script>
<script src="//hm.baidu.com/hm.js?0bcb16196dddadaf61c121323a9ec0b6"></script>
<!--[if lte IE 9]>
<link href="https://cdn.aso100.com/public/app/css/style.lte9.css?20160401" rel="stylesheet">
<![endif]-->
<script src="{{ asset('js/share.js') }}"></script>
{{--<script src="/public/baidushare/api/js/share.js?v=89860593.js?cdnversion=412588"></script>--}}
<link rel="stylesheet" href="{{ asset('css/slide_share.css') }}">

{{--<link rel="stylesheet" href="/public/baidushare/api/css/slide_share.css?v=9c50d088.css">--}}

<script>
    window.isMobile = /mobile/i.test(navigator.userAgent) ? (/ipad/i.test(navigator.userAgent) ? false : true) : false;
    if (window.isMobile) {
        var fontS = document.documentElement.clientWidth / 10;
        fontS = fontS > 41.4 ? 32 : fontS;
        document.documentElement.style.fontSize = fontS + 'px';
        window.onresize = function () {
            fontS = document.documentElement.clientWidth / 10;
            fontS = fontS > 41.4 ? 32 : fontS;
            document.documentElement.style.fontSize = fontS + 'px';
        };
        window.isIOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
        window.isAndroid = /(Android)/i.test(navigator.userAgent);
        window.isWechat = /micromessenger/i.test(navigator.userAgent);
        window.isClient = /ASO100Client2/i.test(navigator.userAgent);
    }
    var sourcePublic = 'https://cdn.aso100.com/public/';
</script>
@section('content')


    <div class="container">

        <div class="rank-index jumbotron ">
            <div class="container">
                <div class="title"><h2>App Store 中国总榜免费榜 Top1500 &nbsp;&nbsp;</h2><span class="desc">当前时间：{{$current_time}}</span>
                </div>
                <div id="rank0" class="aso100-nav-select">


                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <span class="navbar-brand">设备</span>
                                <a href="/rank/index/country/cn/device/iphone" class="dropdown-toggle my-eq"
                                   data-toggle="dropdown" role="button" aria-expanded="false">iPhone <span
                                            class="caret eq-child"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                                    <li><a href="/rank/index/country/cn/device/iphone" class="active">iPhone</a></li>
                                    <li><a href="/rank/index/country/cn/device/ipad" class="">iPad</a></li>
                                </ul>
                            </li>
                            <li class="dropdown stop-default-scroll">
                                <span class="navbar-brand">地区</span>
                                <a href="/rank/index/country/cn/device/iphone" class="dropdown-toggle"
                                   data-toggle="dropdown" role="button" aria-expanded="false">中国 <span
                                            class="caret"></span></a>
                                <ul class="dropdown-menu country-select stop-default-scroll-box" role="menu">
                                    <li class="search-country">
                                        <input type="text" value="" class="form-control" placeholder="搜索国家/地区"
                                               autocomplete="off">
                                    </li>
                                    <div class="select-container">
                                        <li class="area-name hot-country">热门地区</li>
                                        <li class="hot-country"><a href="/rank/index/country/cn/device/iphone"
                                                                   data-country="cn"
                                                                   data-search="中国_china_cn_zg_zhongguo"><i
                                                        class="icon-flag icon-flag-cn"></i>中国</a></li>
                                        <li class="hot-country"><a href="/rank/index/country/jp/device/iphone"
                                                                   data-country="jp" data-search="日本_japan_jp_rb_riben"><i
                                                        class="icon-flag icon-flag-jp"></i>日本</a></li>
                                        <li class="hot-country"><a href="/rank/index/country/kr/device/iphone"
                                                                   data-country="kr"
                                                                   data-search="韩国_korea_kr_hg_hanguo"><i
                                                        class="icon-flag icon-flag-kr"></i>韩国</a></li>
                                        <li class="hot-country"><a href="/rank/index/country/us/device/iphone"
                                                                   data-country="us"
                                                                   data-search="美国_united states_us_mg_meiguo"><i
                                                        class="icon-flag icon-flag-us"></i>美国</a></li>
                                        <li class="divider"></li>
                                        <li class="area-name">亚洲</li>
                                        <li><a href="/rank/index/country/cn/device/iphone" data-country="cn"
                                               data-search="中国_china_cn_zg_zhongguo"><i
                                                        class="icon-flag icon-flag-cn"></i>中国</a></li>
                                        <li><a href="/rank/index/country/hk/device/iphone" data-country="hk"
                                               data-search="中国香港_hongkong_hk_zgxg_zhongguoxianggang"><i
                                                        class="icon-flag icon-flag-hk"></i>中国香港</a></li>
                                        <li><a href="/rank/index/country/tw/device/iphone" data-country="tw"
                                               data-search="中国台湾_taiwan_tw_zgtw_zhongguotaiwan"><i
                                                        class="icon-flag icon-flag-tw"></i>中国台湾</a></li>
                                        <li><a href="/rank/index/country/jp/device/iphone" data-country="jp"
                                               data-search="日本_japan_jp_rb_riben"><i class="icon-flag icon-flag-jp"></i>日本</a>
                                        </li>
                                        <li><a href="/rank/index/country/kr/device/iphone" data-country="kr"
                                               data-search="韩国_korea_kr_hg_hanguo"><i
                                                        class="icon-flag icon-flag-kr"></i>韩国</a></li>
                                        <li><a href="/rank/index/country/tr/device/iphone" data-country="tr"
                                               data-search="土耳其_turkey_tr_teq_tuerqi"><i
                                                        class="icon-flag icon-flag-tr"></i>土耳其</a></li>
                                        <li><a href="/rank/index/country/mo/device/iphone" data-country="mo"
                                               data-search="中国澳门_macao_mo_zgam_zhongguoaomen"><i
                                                        class="icon-flag icon-flag-mo"></i>中国澳门</a></li>
                                        <li><a href="/rank/index/country/pk/device/iphone" data-country="pk"
                                               data-search="巴基斯坦_pakistan_pk_bjst_bajisitan"><i
                                                        class="icon-flag icon-flag-pk"></i>巴基斯坦</a></li>
                                        <li><a href="/rank/index/country/bt/device/iphone" data-country="bt"
                                               data-search="不丹_bhutan_bt_bd_budan"><i
                                                        class="icon-flag icon-flag-bt"></i>不丹</a></li>
                                        <li><a href="/rank/index/country/ph/device/iphone" data-country="ph"
                                               data-search="菲律宾_philippines_ph_flb_feilvbin"><i
                                                        class="icon-flag icon-flag-ph"></i>菲律宾</a></li>
                                        <li><a href="/rank/index/country/kz/device/iphone" data-country="kz"
                                               data-search="哈萨克斯坦_kazakstan_kz_hskst_hasakesitan"><i
                                                        class="icon-flag icon-flag-kz"></i>哈萨克斯坦</a></li>
                                        <li><a href="/rank/index/country/kg/device/iphone" data-country="kg"
                                               data-search="吉尔吉斯斯坦_kyrgyzstan_kg_jejsst_jierjisisitan"><i
                                                        class="icon-flag icon-flag-kg"></i>吉尔吉斯斯坦</a></li>
                                        <li><a href="/rank/index/country/kh/device/iphone" data-country="kh"
                                               data-search="柬埔寨_kampuchea_kh_jpz_jianpuzhai"><i
                                                        class="icon-flag icon-flag-kh"></i>柬埔寨</a></li>
                                        <li><a href="/rank/index/country/la/device/iphone" data-country="la"
                                               data-search="老挝人民民主共和国_laos_la_lwrmmzghg_laoworenminminzhugongheguo"><i
                                                        class="icon-flag icon-flag-la"></i>老挝人民民主共和国</a></li>
                                        <li><a href="/rank/index/country/my/device/iphone" data-country="my"
                                               data-search="马来西亚_malaysia_my_mlxy_malaixiya"><i
                                                        class="icon-flag icon-flag-my"></i>马来西亚</a></li>
                                        <li><a href="/rank/index/country/mn/device/iphone" data-country="mn"
                                               data-search="蒙古_mongolia_mn_mg_menggu"><i
                                                        class="icon-flag icon-flag-mn"></i>蒙古</a></li>
                                        <li><a href="/rank/index/country/np/device/iphone" data-country="np"
                                               data-search="尼泊尔_nepal_np_nbe_niboer"><i
                                                        class="icon-flag icon-flag-np"></i>尼泊尔</a></li>
                                        <li><a href="/rank/index/country/lk/device/iphone" data-country="lk"
                                               data-search="斯里兰卡_sri lanka_lk_sllk_sililanka"><i
                                                        class="icon-flag icon-flag-lk"></i>斯里兰卡</a></li>
                                        <li><a href="/rank/index/country/tj/device/iphone" data-country="tj"
                                               data-search="塔吉克斯坦_tajikstan_tj_tjkst_tajikesitan"><i
                                                        class="icon-flag icon-flag-tj"></i>塔吉克斯坦</a></li>
                                        <li><a href="/rank/index/country/th/device/iphone" data-country="th"
                                               data-search="泰国_thailand_th_tg_taiguo"><i
                                                        class="icon-flag icon-flag-th"></i>泰国</a></li>
                                        <li><a href="/rank/index/country/tm/device/iphone" data-country="tm"
                                               data-search="土库曼斯坦_turkmenistan_tm_tkmst_tukumansitan"><i
                                                        class="icon-flag icon-flag-tm"></i>土库曼斯坦</a></li>
                                        <li><a href="/rank/index/country/bn/device/iphone" data-country="bn"
                                               data-search="文莱_brunei_bn_wl_wenlai"><i
                                                        class="icon-flag icon-flag-bn"></i>文莱</a></li>
                                        <li><a href="/rank/index/country/uz/device/iphone" data-country="uz"
                                               data-search="乌兹别克斯坦_uzbekistan_uz_wzbkst_wuzibiekesitan"><i
                                                        class="icon-flag icon-flag-uz"></i>乌兹别克斯坦</a></li>
                                        <li><a href="/rank/index/country/sg/device/iphone" data-country="sg"
                                               data-search="新加坡_singapore_sg_xjp_xinjiapo"><i
                                                        class="icon-flag icon-flag-sg"></i>新加坡</a></li>
                                        <li><a href="/rank/index/country/id/device/iphone" data-country="id"
                                               data-search="印度尼西亚_indonesia_id_ydnxy_yindunixiya"><i
                                                        class="icon-flag icon-flag-id"></i>印度尼西亚</a></li>
                                        <li><a href="/rank/index/country/vn/device/iphone" data-country="vn"
                                               data-search="越南_vietnam_vn_yn_yuenan"><i
                                                        class="icon-flag icon-flag-vn"></i>越南</a></li>
                                        <li><a href="/rank/index/country/ae/device/iphone" data-country="ae"
                                               data-search="阿拉伯联合酋长国_united arab emirates_ae_alblhqcg_alabolianheqiuchangguo"><i
                                                        class="icon-flag icon-flag-ae"></i>阿拉伯联合酋长国</a></li>
                                        <li><a href="/rank/index/country/om/device/iphone" data-country="om"
                                               data-search="阿曼_oman_om_am_aman"><i class="icon-flag icon-flag-om"></i>阿曼</a>
                                        </li>
                                        <li><a href="/rank/index/country/az/device/iphone" data-country="az"
                                               data-search="阿塞拜疆_azerbaijan_az_asbj_asaibaijiang"><i
                                                        class="icon-flag icon-flag-az"></i>阿塞拜疆</a></li>
                                        <li><a href="/rank/index/country/bh/device/iphone" data-country="bh"
                                               data-search="巴林_bahrain_bh_bl_balin"><i
                                                        class="icon-flag icon-flag-bh"></i>巴林</a></li>
                                        <li><a href="/rank/index/country/qa/device/iphone" data-country="qa"
                                               data-search="卡塔尔_qatar_qa_kte_kataer"><i
                                                        class="icon-flag icon-flag-qa"></i>卡塔尔</a></li>
                                        <li><a href="/rank/index/country/kw/device/iphone" data-country="kw"
                                               data-search="科威特_kuwait_kw_kwt_keweite"><i
                                                        class="icon-flag icon-flag-kw"></i>科威特</a></li>
                                        <li><a href="/rank/index/country/lb/device/iphone" data-country="lb"
                                               data-search="黎巴嫩_lebanon_lb_lbn_libanen"><i
                                                        class="icon-flag icon-flag-lb"></i>黎巴嫩</a></li>
                                        <li><a href="/rank/index/country/sa/device/iphone" data-country="sa"
                                               data-search="沙特阿拉伯_saudi arabia_sa_stalb_shatealabo"><i
                                                        class="icon-flag icon-flag-sa"></i>沙特阿拉伯</a></li>
                                        <li><a href="/rank/index/country/am/device/iphone" data-country="am"
                                               data-search="亚美尼亚_armenia_am_ymny_yameiniya"><i
                                                        class="icon-flag icon-flag-am"></i>亚美尼亚</a></li>
                                        <li><a href="/rank/index/country/ye/device/iphone" data-country="ye"
                                               data-search="也门_yemen_ye_ym_yemen"><i class="icon-flag icon-flag-ye"></i>也门</a>
                                        </li>
                                        <li><a href="/rank/index/country/il/device/iphone" data-country="il"
                                               data-search="以色列_israel_il_ysl_yiselie"><i
                                                        class="icon-flag icon-flag-il"></i>以色列</a></li>
                                        <li><a href="/rank/index/country/in/device/iphone" data-country="in"
                                               data-search="印度_india_in_yd_yindu"><i class="icon-flag icon-flag-in"></i>印度</a>
                                        </li>
                                        <li><a href="/rank/index/country/jo/device/iphone" data-country="jo"
                                               data-search="约旦_jordan_jo_yd_yuedan"><i
                                                        class="icon-flag icon-flag-jo"></i>约旦</a></li>
                                        <li class="divider"></li>
                                        <li class="area-name">北美洲</li>
                                        <li><a href="/rank/index/country/us/device/iphone" data-country="us"
                                               data-search="美国_united states_us_mg_meiguo"><i
                                                        class="icon-flag icon-flag-us"></i>美国</a></li>
                                        <li><a href="/rank/index/country/ca/device/iphone" data-country="ca"
                                               data-search="加拿大_canada_ca_jnd_jianada"><i
                                                        class="icon-flag icon-flag-ca"></i>加拿大</a></li>
                                        <li><a href="/rank/index/country/ai/device/iphone" data-country="ai"
                                               data-search="安圭拉_anguilla_ai_agl_anguila"><i
                                                        class="icon-flag icon-flag-ai"></i>安圭拉</a></li>
                                        <li><a href="/rank/index/country/ag/device/iphone" data-country="ag"
                                               data-search="安提瓜和巴布达_antigua and barbuda_ag_atghbbd_antiguahebabuda"><i
                                                        class="icon-flag icon-flag-ag"></i>安提瓜和巴布达</a></li>
                                        <li><a href="/rank/index/country/bb/device/iphone" data-country="bb"
                                               data-search="巴巴多斯_barbados_bb_bbds_babaduosi"><i
                                                        class="icon-flag icon-flag-bb"></i>巴巴多斯</a></li>
                                        <li><a href="/rank/index/country/bs/device/iphone" data-country="bs"
                                               data-search="巴哈马_bahamas_bs_bhm_bahama"><i
                                                        class="icon-flag icon-flag-bs"></i>巴哈马</a></li>
                                        <li><a href="/rank/index/country/pa/device/iphone" data-country="pa"
                                               data-search="巴拿马_panama_pa_bnm_banama"><i
                                                        class="icon-flag icon-flag-pa"></i>巴拿马</a></li>
                                        <li><a href="/rank/index/country/bm/device/iphone" data-country="bm"
                                               data-search="百慕大_bermuda_bm_bmd_baimuda"><i
                                                        class="icon-flag icon-flag-bm"></i>百慕大</a></li>
                                        <li><a href="/rank/index/country/bz/device/iphone" data-country="bz"
                                               data-search="伯利兹_belize_bz_blz_bolizi"><i
                                                        class="icon-flag icon-flag-bz"></i>伯利兹</a></li>
                                        <li><a href="/rank/index/country/do/device/iphone" data-country="do"
                                               data-search="多米尼加共和国_dominica rep_do_dmnjghg_duominijiagongheguo"><i
                                                        class="icon-flag icon-flag-do"></i>多米尼加共和国</a></li>
                                        <li><a href="/rank/index/country/dm/device/iphone" data-country="dm"
                                               data-search="多米尼克_dominica_dm_dmnk_duominike"><i
                                                        class="icon-flag icon-flag-dm"></i>多米尼克</a></li>
                                        <li><a href="/rank/index/country/cr/device/iphone" data-country="cr"
                                               data-search="哥斯达黎加_costa rica_cr_gsdlj_gesidalijia"><i
                                                        class="icon-flag icon-flag-cr"></i>哥斯达黎加</a></li>
                                        <li><a href="/rank/index/country/gd/device/iphone" data-country="gd"
                                               data-search="格林纳达_grenada_gd_glnd_gelinnada"><i
                                                        class="icon-flag icon-flag-gd"></i>格林纳达</a></li>
                                        <li><a href="/rank/index/country/hn/device/iphone" data-country="hn"
                                               data-search="洪都拉斯_honduras_hn_hdls_hongdulasi"><i
                                                        class="icon-flag icon-flag-hn"></i>洪都拉斯</a></li>
                                        <li><a href="/rank/index/country/ky/device/iphone" data-country="ky"
                                               data-search="开曼群岛_cayman is._ky_kmqd_kaimanqundao"><i
                                                        class="icon-flag icon-flag-ky"></i>开曼群岛</a></li>
                                        <li><a href="/rank/index/country/ms/device/iphone" data-country="ms"
                                               data-search="蒙特塞拉特岛_montserrat_ms_mtsltd_mengtesailatedao"><i
                                                        class="icon-flag icon-flag-ms"></i>蒙特塞拉特岛</a></li>
                                        <li><a href="/rank/index/country/mx/device/iphone" data-country="mx"
                                               data-search="墨西哥_mexico_mx_mxg_moxige"><i
                                                        class="icon-flag icon-flag-mx"></i>墨西哥</a></li>
                                        <li><a href="/rank/index/country/ni/device/iphone" data-country="ni"
                                               data-search="尼加拉瓜_nicaragua_ni_njlg_nijialagua"><i
                                                        class="icon-flag icon-flag-ni"></i>尼加拉瓜</a></li>
                                        <li><a href="/rank/index/country/sv/device/iphone" data-country="sv"
                                               data-search="萨尔瓦多_ei salvador_sv_sewd_saerwaduo"><i
                                                        class="icon-flag icon-flag-sv"></i>萨尔瓦多</a></li>
                                        <li><a href="/rank/index/country/kn/device/iphone" data-country="kn"
                                               data-search="圣基茨岛和尼维斯_st. kitts and nevis_kn_sjcdhnws_shengjicidaoheniweisi"><i
                                                        class="icon-flag icon-flag-kn"></i>圣基茨岛和尼维斯</a></li>
                                        <li><a href="/rank/index/country/lc/device/iphone" data-country="lc"
                                               data-search="圣卢西亚_saint lueia_lc_slxy_shengluxiya"><i
                                                        class="icon-flag icon-flag-lc"></i>圣卢西亚</a></li>
                                        <li><a href="/rank/index/country/vc/device/iphone" data-country="vc"
                                               data-search="圣文森特和格林纳丁斯_st. vincent and the grenadines_vc_swsthglnds_shengwensentehegelinnadingsi"><i
                                                        class="icon-flag icon-flag-vc"></i>圣文森特和格林纳丁斯</a></li>
                                        <li><a href="/rank/index/country/tc/device/iphone" data-country="tc"
                                               data-search="特克斯和凯科斯群岛_turks and caicos islands_tc_tkshkksqd_tekesihekaikesiqundao"><i
                                                        class="icon-flag icon-flag-tc"></i>特克斯和凯科斯群岛</a></li>
                                        <li><a href="/rank/index/country/tt/device/iphone" data-country="tt"
                                               data-search="特立尼达和多巴哥_trinidad and tobago_tt_tlndhdbg_telinidaheduobage"><i
                                                        class="icon-flag icon-flag-tt"></i>特立尼达和多巴哥</a></li>
                                        <li><a href="/rank/index/country/gt/device/iphone" data-country="gt"
                                               data-search="危地马拉_guatemala_gt_wdml_weidimala"><i
                                                        class="icon-flag icon-flag-gt"></i>危地马拉</a></li>
                                        <li><a href="/rank/index/country/jm/device/iphone" data-country="jm"
                                               data-search="牙买加_jamaica_jm_ymj_yamaijia"><i
                                                        class="icon-flag icon-flag-jm"></i>牙买加</a></li>
                                        <li><a href="/rank/index/country/vg/device/iphone" data-country="vg"
                                               data-search="英属维尔京群岛_british virgin islands_vg_yswejqd_yingshuweierjingqundao"><i
                                                        class="icon-flag icon-flag-vg"></i>英属维尔京群岛</a></li>
                                        <li class="divider"></li>
                                        <li class="area-name">南美洲</li>
                                        <li><a href="/rank/index/country/ar/device/iphone" data-country="ar"
                                               data-search="阿根廷_argentina_ar_agt_agenting"><i
                                                        class="icon-flag icon-flag-ar"></i>阿根廷</a></li>
                                        <li><a href="/rank/index/country/py/device/iphone" data-country="py"
                                               data-search="巴拉圭_paraguay_py_blg_balagui"><i
                                                        class="icon-flag icon-flag-py"></i>巴拉圭</a></li>
                                        <li><a href="/rank/index/country/br/device/iphone" data-country="br"
                                               data-search="巴西_brazil_br_bx_baxi"><i class="icon-flag icon-flag-br"></i>巴西</a>
                                        </li>
                                        <li><a href="/rank/index/country/bo/device/iphone" data-country="bo"
                                               data-search="玻利维亚_bolivia_bo_blwy_boliweiya"><i
                                                        class="icon-flag icon-flag-bo"></i>玻利维亚</a></li>
                                        <li><a href="/rank/index/country/ec/device/iphone" data-country="ec"
                                               data-search="厄瓜多尔_ecuador_ec_egde_eguaduoer"><i
                                                        class="icon-flag icon-flag-ec"></i>厄瓜多尔</a></li>
                                        <li><a href="/rank/index/country/co/device/iphone" data-country="co"
                                               data-search="哥伦比亚_colombia_co_glby_gelunbiya"><i
                                                        class="icon-flag icon-flag-co"></i>哥伦比亚</a></li>
                                        <li><a href="/rank/index/country/gy/device/iphone" data-country="gy"
                                               data-search="圭亚那_guyana_gy_gyn_guiyana"><i
                                                        class="icon-flag icon-flag-gy"></i>圭亚那</a></li>
                                        <li><a href="/rank/index/country/pe/device/iphone" data-country="pe"
                                               data-search="秘鲁_peru_pe_ml_milu"><i class="icon-flag icon-flag-pe"></i>秘鲁</a>
                                        </li>
                                        <li><a href="/rank/index/country/sr/device/iphone" data-country="sr"
                                               data-search="苏里南_suriname_sr_sln_sulinan"><i
                                                        class="icon-flag icon-flag-sr"></i>苏里南</a></li>
                                        <li><a href="/rank/index/country/ve/device/iphone" data-country="ve"
                                               data-search="委内瑞拉_venezuela_ve_wnrl_weineiruila"><i
                                                        class="icon-flag icon-flag-ve"></i>委内瑞拉</a></li>
                                        <li><a href="/rank/index/country/uy/device/iphone" data-country="uy"
                                               data-search="乌拉圭_uruguay_uy_wlg_wulagui"><i
                                                        class="icon-flag icon-flag-uy"></i>乌拉圭</a></li>
                                        <li><a href="/rank/index/country/cl/device/iphone" data-country="cl"
                                               data-search="智利_chile_cl_zl_zhili"><i class="icon-flag icon-flag-cl"></i>智利</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li class="area-name">欧洲</li>
                                        <li><a href="/rank/index/country/al/device/iphone" data-country="al"
                                               data-search="阿尔巴尼亚_albania_al_aebny_aerbaniya"><i
                                                        class="icon-flag icon-flag-al"></i>阿尔巴尼亚</a></li>
                                        <li><a href="/rank/index/country/ie/device/iphone" data-country="ie"
                                               data-search="爱尔兰_ireland_ie_ael_aierlan"><i
                                                        class="icon-flag icon-flag-ie"></i>爱尔兰</a></li>
                                        <li><a href="/rank/index/country/ee/device/iphone" data-country="ee"
                                               data-search="爱沙尼亚_estonia_ee_asny_aishaniya"><i
                                                        class="icon-flag icon-flag-ee"></i>爱沙尼亚</a></li>
                                        <li><a href="/rank/index/country/at/device/iphone" data-country="at"
                                               data-search="奥地利_austria_at_adl_aodili"><i
                                                        class="icon-flag icon-flag-at"></i>奥地利</a></li>
                                        <li><a href="/rank/index/country/by/device/iphone" data-country="by"
                                               data-search="白俄罗斯_belarus_by_bels_baieluosi"><i
                                                        class="icon-flag icon-flag-by"></i>白俄罗斯</a></li>
                                        <li><a href="/rank/index/country/bg/device/iphone" data-country="bg"
                                               data-search="保加利亚_bulgaria_bg_bjly_baojialiya"><i
                                                        class="icon-flag icon-flag-bg"></i>保加利亚</a></li>
                                        <li><a href="/rank/index/country/be/device/iphone" data-country="be"
                                               data-search="比利时_belgium_be_bls_bilishi"><i
                                                        class="icon-flag icon-flag-be"></i>比利时</a></li>
                                        <li><a href="/rank/index/country/is/device/iphone" data-country="is"
                                               data-search="冰岛_iceland_is_bd_bingdao"><i
                                                        class="icon-flag icon-flag-is"></i>冰岛</a></li>
                                        <li><a href="/rank/index/country/pl/device/iphone" data-country="pl"
                                               data-search="波兰_poland_pl_bl_bolan"><i
                                                        class="icon-flag icon-flag-pl"></i>波兰</a></li>
                                        <li><a href="/rank/index/country/dk/device/iphone" data-country="dk"
                                               data-search="丹麦_denmark_dk_dm_danmai"><i
                                                        class="icon-flag icon-flag-dk"></i>丹麦</a></li>
                                        <li><a href="/rank/index/country/de/device/iphone" data-country="de"
                                               data-search="德国_germany_de_dg_deguo"><i
                                                        class="icon-flag icon-flag-de"></i>德国</a></li>
                                        <li><a href="/rank/index/country/ru/device/iphone" data-country="ru"
                                               data-search="俄罗斯_russia_ru_els_eluosi"><i
                                                        class="icon-flag icon-flag-ru"></i>俄罗斯</a></li>
                                        <li><a href="/rank/index/country/fr/device/iphone" data-country="fr"
                                               data-search="法国_france_fr_fg_faguo"><i
                                                        class="icon-flag icon-flag-fr"></i>法国</a></li>
                                        <li><a href="/rank/index/country/fi/device/iphone" data-country="fi"
                                               data-search="芬兰_finland_fi_fl_fenlan"><i
                                                        class="icon-flag icon-flag-fi"></i>芬兰</a></li>
                                        <li><a href="/rank/index/country/nl/device/iphone" data-country="nl"
                                               data-search="荷兰_netherlands_nl_hl_helan"><i
                                                        class="icon-flag icon-flag-nl"></i>荷兰</a></li>
                                        <li><a href="/rank/index/country/cz/device/iphone" data-country="cz"
                                               data-search="捷克共和国_czech republic_cz_jkghg_jiekegongheguo"><i
                                                        class="icon-flag icon-flag-cz"></i>捷克共和国</a></li>
                                        <li><a href="/rank/index/country/hr/device/iphone" data-country="hr"
                                               data-search="克罗地亚_croatia_hr_kldy_keluodiya"><i
                                                        class="icon-flag icon-flag-hr"></i>克罗地亚</a></li>
                                        <li><a href="/rank/index/country/lv/device/iphone" data-country="lv"
                                               data-search="拉脱维亚_latvia_lv_ltwy_latuoweiya"><i
                                                        class="icon-flag icon-flag-lv"></i>拉脱维亚</a></li>
                                        <li><a href="/rank/index/country/lt/device/iphone" data-country="lt"
                                               data-search="立陶宛_lithuania_lt_ltw_litaowan"><i
                                                        class="icon-flag icon-flag-lt"></i>立陶宛</a></li>
                                        <li><a href="/rank/index/country/lu/device/iphone" data-country="lu"
                                               data-search="卢森堡_luxembourg_lu_lsb_lusenbao"><i
                                                        class="icon-flag icon-flag-lu"></i>卢森堡</a></li>
                                        <li><a href="/rank/index/country/ro/device/iphone" data-country="ro"
                                               data-search="罗马尼亚_romania_ro_lmny_luomaniya"><i
                                                        class="icon-flag icon-flag-ro"></i>罗马尼亚</a></li>
                                        <li><a href="/rank/index/country/mt/device/iphone" data-country="mt"
                                               data-search="马其他_malta_mt_mqt_maqita"><i
                                                        class="icon-flag icon-flag-mt"></i>马其他</a></li>
                                        <li><a href="/rank/index/country/mk/device/iphone" data-country="mk"
                                               data-search="马其顿（前南斯拉夫）_yugoslavia_mk_mqdqnslf_maqidunqiannansilafu"><i
                                                        class="icon-flag icon-flag-mk"></i>马其顿（前南斯拉夫）</a></li>
                                        <li><a href="/rank/index/country/md/device/iphone" data-country="md"
                                               data-search="摩尔多瓦共和国_moldova_md_medwghg_moerduowagongheguo"><i
                                                        class="icon-flag icon-flag-md"></i>摩尔多瓦共和国</a></li>
                                        <li><a href="/rank/index/country/no/device/iphone" data-country="no"
                                               data-search="挪威_norway_no_nw_nuowei"><i
                                                        class="icon-flag icon-flag-no"></i>挪威</a></li>
                                        <li><a href="/rank/index/country/pt/device/iphone" data-country="pt"
                                               data-search="葡萄牙_portugal_pt_pty_putaoya"><i
                                                        class="icon-flag icon-flag-pt"></i>葡萄牙</a></li>
                                        <li><a href="/rank/index/country/se/device/iphone" data-country="se"
                                               data-search="瑞典_sweden_se_rd_ruidian"><i
                                                        class="icon-flag icon-flag-se"></i>瑞典</a></li>
                                        <li><a href="/rank/index/country/ch/device/iphone" data-country="ch"
                                               data-search="瑞士_switzerland_ch_rs_ruishi"><i
                                                        class="icon-flag icon-flag-ch"></i>瑞士</a></li>
                                        <li><a href="/rank/index/country/sk/device/iphone" data-country="sk"
                                               data-search="斯洛伐克_slovakia_sk_slfk_siluofake"><i
                                                        class="icon-flag icon-flag-sk"></i>斯洛伐克</a></li>
                                        <li><a href="/rank/index/country/si/device/iphone" data-country="si"
                                               data-search="斯洛文尼亚_slovenia_si_slwny_siluowenniya"><i
                                                        class="icon-flag icon-flag-si"></i>斯洛文尼亚</a></li>
                                        <li><a href="/rank/index/country/ua/device/iphone" data-country="ua"
                                               data-search="乌克兰_ukraine_ua_wkl_wukelan"><i
                                                        class="icon-flag icon-flag-ua"></i>乌克兰</a></li>
                                        <li><a href="/rank/index/country/gr/device/iphone" data-country="gr"
                                               data-search="希腊_greece_gr_xl_xila"><i class="icon-flag icon-flag-gr"></i>希腊</a>
                                        </li>
                                        <li><a href="/rank/index/country/es/device/iphone" data-country="es"
                                               data-search="西班牙_spain_es_xby_xibanya"><i
                                                        class="icon-flag icon-flag-es"></i>西班牙</a></li>
                                        <li><a href="/rank/index/country/hu/device/iphone" data-country="hu"
                                               data-search="匈牙利_hungary_hu_xyl_xiongyali"><i
                                                        class="icon-flag icon-flag-hu"></i>匈牙利</a></li>
                                        <li><a href="/rank/index/country/it/device/iphone" data-country="it"
                                               data-search="意大利_italy_it_ydl_yidali"><i
                                                        class="icon-flag icon-flag-it"></i>意大利</a></li>
                                        <li><a href="/rank/index/country/gb/device/iphone" data-country="gb"
                                               data-search="英国_uk_united kingdom_gb_yg_yingguo"><i
                                                        class="icon-flag icon-flag-gb"></i>英国</a></li>
                                        <li><a href="/rank/index/country/sl/device/iphone" data-country="sl"
                                               data-search="塞拉利昂_sierra leone_sl_slla_sailaliang"><i
                                                        class="icon-flag icon-flag-sl"></i>塞拉利昂</a></li>
                                        <li class="divider"></li>
                                        <li class="area-name">大洋洲</li>
                                        <li><a href="/rank/index/country/au/device/iphone" data-country="au"
                                               data-search="澳大利亚_australia_au_adly_aodaliya"><i
                                                        class="icon-flag icon-flag-au"></i>澳大利亚</a></li>
                                        <li><a href="/rank/index/country/pg/device/iphone" data-country="pg"
                                               data-search="巴布亚新几内亚_papua new cuinea_pg_bbyxjny_babuyaxinjineiya"><i
                                                        class="icon-flag icon-flag-pg"></i>巴布亚新几内亚</a></li>
                                        <li><a href="/rank/index/country/fj/device/iphone" data-country="fj"
                                               data-search="斐济_fiji_fj_j_ji"><i
                                                        class="icon-flag icon-flag-fj"></i>斐济</a></li>
                                        <li><a href="/rank/index/country/fm/device/iphone" data-country="fm"
                                               data-search="密克罗尼西亚联邦_micronesia_fm_mklnxylb_mikeluonixiyalianbang"><i
                                                        class="icon-flag icon-flag-fm"></i>密克罗尼西亚联邦</a></li>
                                        <li><a href="/rank/index/country/pw/device/iphone" data-country="pw"
                                               data-search="帕劳_palau_pw_pl_palao"><i class="icon-flag icon-flag-pw"></i>帕劳</a>
                                        </li>
                                        <li><a href="/rank/index/country/sb/device/iphone" data-country="sb"
                                               data-search="所罗门群岛_solomon is_sb_slmqd_suoluomenqundao"><i
                                                        class="icon-flag icon-flag-sb"></i>所罗门群岛</a></li>
                                        <li><a href="/rank/index/country/nz/device/iphone" data-country="nz"
                                               data-search="新西兰_new zealand_nz_xxl_xinxilan"><i
                                                        class="icon-flag icon-flag-nz"></i>新西兰</a></li>
                                        <li class="divider"></li>
                                        <li class="area-name">非洲</li>
                                        <li><a href="/rank/index/country/cy/device/iphone" data-country="cy"
                                               data-search="塞浦路斯_cyprus_cy_spls_saipulusi"><i
                                                        class="icon-flag icon-flag-cy"></i>塞浦路斯</a></li>
                                        <li><a href="/rank/index/country/dz/device/iphone" data-country="dz"
                                               data-search="阿尔及利亚_algeria_dz_aejly_aerjiliya"><i
                                                        class="icon-flag icon-flag-dz"></i>阿尔及利亚</a></li>
                                        <li><a href="/rank/index/country/eg/device/iphone" data-country="eg"
                                               data-search="埃及_egypt_eg_aj_aiji"><i class="icon-flag icon-flag-eg"></i>埃及</a>
                                        </li>
                                        <li><a href="/rank/index/country/ao/device/iphone" data-country="ao"
                                               data-search="安哥拉_angola_ao_agl_angela"><i
                                                        class="icon-flag icon-flag-ao"></i>安哥拉</a></li>
                                        <li><a href="/rank/index/country/bj/device/iphone" data-country="bj"
                                               data-search="贝宁_benin_bj_bn_beining"><i
                                                        class="icon-flag icon-flag-bj"></i>贝宁</a></li>
                                        <li><a href="/rank/index/country/bw/device/iphone" data-country="bw"
                                               data-search="博茨瓦纳_botswana_bw_bcwn_bociwana"><i
                                                        class="icon-flag icon-flag-bw"></i>博茨瓦纳</a></li>
                                        <li><a href="/rank/index/country/bf/device/iphone" data-country="bf"
                                               data-search="布基纳法索_burkina-faso_bf_bjnfs_bujinafasuo"><i
                                                        class="icon-flag icon-flag-bf"></i>布基纳法索</a></li>
                                        <li><a href="/rank/index/country/cv/device/iphone" data-country="cv"
                                               data-search="佛得角_cape verde_cv_fdj_fodejiao"><i
                                                        class="icon-flag icon-flag-cv"></i>佛得角</a></li>
                                        <li><a href="/rank/index/country/gm/device/iphone" data-country="gm"
                                               data-search="冈比亚_gambia_gm_gby_gangbiya"><i
                                                        class="icon-flag icon-flag-gm"></i>冈比亚</a></li>
                                        <li><a href="/rank/index/country/cg/device/iphone" data-country="cg"
                                               data-search="刚果共和国_congo_cg_ggghg_gangguogongheguo"><i
                                                        class="icon-flag icon-flag-cg"></i>刚果共和国</a></li>
                                        <li><a href="/rank/index/country/gw/device/iphone" data-country="gw"
                                               data-search="几内亚比绍_guinea-bissau_gw_jnybs_jineiyabishao"><i
                                                        class="icon-flag icon-flag-gw"></i>几内亚比绍</a></li>
                                        <li><a href="/rank/index/country/gh/device/iphone" data-country="gh"
                                               data-search="加纳_ghana_gh_jn_jiana"><i class="icon-flag icon-flag-gh"></i>加纳</a>
                                        </li>
                                        <li><a href="/rank/index/country/zw/device/iphone" data-country="zw"
                                               data-search="津巴布韦_zimbabwe_zw_jbbw_jinbabuwei"><i
                                                        class="icon-flag icon-flag-zw"></i>津巴布韦</a></li>
                                        <li><a href="/rank/index/country/ke/device/iphone" data-country="ke"
                                               data-search="肯尼亚_kenya_ke_kny_kenniya"><i
                                                        class="icon-flag icon-flag-ke"></i>肯尼亚</a></li>
                                        <li><a href="/rank/index/country/lr/device/iphone" data-country="lr"
                                               data-search="利比里亚_liberia_lr_lbly_libiliya"><i
                                                        class="icon-flag icon-flag-lr"></i>利比里亚</a></li>
                                        <li><a href="/rank/index/country/mg/device/iphone" data-country="mg"
                                               data-search="马达加斯加_madagascar_mg_mdjsj_madajiasijia"><i
                                                        class="icon-flag icon-flag-mg"></i>马达加斯加</a></li>
                                        <li><a href="/rank/index/country/mw/device/iphone" data-country="mw"
                                               data-search="马拉维_malawi_mw_mlw_malawei"><i
                                                        class="icon-flag icon-flag-mw"></i>马拉维</a></li>
                                        <li><a href="/rank/index/country/ml/device/iphone" data-country="ml"
                                               data-search="马里_mali_ml_ml_mali"><i class="icon-flag icon-flag-ml"></i>马里</a>
                                        </li>
                                        <li><a href="/rank/index/country/mu/device/iphone" data-country="mu"
                                               data-search="毛里求斯_mauritius_mu_mlqs_maoliqiusi"><i
                                                        class="icon-flag icon-flag-mu"></i>毛里求斯</a></li>
                                        <li><a href="/rank/index/country/mr/device/iphone" data-country="mr"
                                               data-search="毛里塔尼亚_mauritania_mr_mltny_maolitaniya"><i
                                                        class="icon-flag icon-flag-mr"></i>毛里塔尼亚</a></li>
                                        <li><a href="/rank/index/country/mz/device/iphone" data-country="mz"
                                               data-search="莫桑比克_mozambique_mz_msbk_mosangbike"><i
                                                        class="icon-flag icon-flag-mz"></i>莫桑比克</a></li>
                                        <li><a href="/rank/index/country/na/device/iphone" data-country="na"
                                               data-search="纳米比亚_namibia_na_nmby_namibiya"><i
                                                        class="icon-flag icon-flag-na"></i>纳米比亚</a></li>
                                        <li><a href="/rank/index/country/za/device/iphone" data-country="za"
                                               data-search="南非_south africa_za_nf_nanfei"><i
                                                        class="icon-flag icon-flag-za"></i>南非</a></li>
                                        <li><a href="/rank/index/country/ne/device/iphone" data-country="ne"
                                               data-search="尼日尔_niger_ne_nre_nirier"><i
                                                        class="icon-flag icon-flag-ne"></i>尼日尔</a></li>
                                        <li><a href="/rank/index/country/ng/device/iphone" data-country="ng"
                                               data-search="尼日利亚_nigeria_ng_nrly_niriliya"><i
                                                        class="icon-flag icon-flag-ng"></i>尼日利亚</a></li>
                                        <li><a href="/rank/index/country/sn/device/iphone" data-country="sn"
                                               data-search="塞内加尔_senegal_sn_snje_saineijiaer"><i
                                                        class="icon-flag icon-flag-sn"></i>塞内加尔</a></li>
                                        <li><a href="/rank/index/country/sc/device/iphone" data-country="sc"
                                               data-search="塞舌尔_seychelles_sc_sse_saisheer"><i
                                                        class="icon-flag icon-flag-sc"></i>塞舌尔</a></li>
                                        <li><a href="/rank/index/country/st/device/iphone" data-country="st"
                                               data-search="圣多美和普林西比_sao tome and principe_st_sdmhplxb_shengduomeihepulinxibi"><i
                                                        class="icon-flag icon-flag-st"></i>圣多美和普林西比</a></li>
                                        <li><a href="/rank/index/country/sz/device/iphone" data-country="sz"
                                               data-search="斯威士兰_swaziland_sz_swsl_siweishilan"><i
                                                        class="icon-flag icon-flag-sz"></i>斯威士兰</a></li>
                                        <li><a href="/rank/index/country/tz/device/iphone" data-country="tz"
                                               data-search="坦桑尼亚联合共和国_tanzania_tz_tsnylhghg_tansangniyalianhegongheguo"><i
                                                        class="icon-flag icon-flag-tz"></i>坦桑尼亚联合共和国</a></li>
                                        <li><a href="/rank/index/country/tn/device/iphone" data-country="tn"
                                               data-search="突尼斯_tunisia_tn_tns_tunisi"><i
                                                        class="icon-flag icon-flag-tn"></i>突尼斯</a></li>
                                        <li><a href="/rank/index/country/ug/device/iphone" data-country="ug"
                                               data-search="乌干达_uganda_ug_wgd_wuganda"><i
                                                        class="icon-flag icon-flag-ug"></i>乌干达</a></li>
                                        <li><a href="/rank/index/country/td/device/iphone" data-country="td"
                                               data-search="乍得_chad_td_zd_zhade"><i class="icon-flag icon-flag-td"></i>乍得</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <span class="navbar-brand">榜单</span>
                                <a href="/rank/index/country/cn/device/iphone/brand/free" class="dropdown-toggle"
                                   data-toggle="dropdown" role="button" aria-expanded="false">免费 <span
                                            class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free" class="active">免费</a>
                                    </li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/paid" class="">付费</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/grossing" class="">畅销</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <span class="navbar-brand">类别</span>
                                <a href="/rank/index/country/cn/device/iphone/brand/free/genre/36"
                                   class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">总榜
                                    <span class="caret"></span></a>
                                <ul class="dropdown-menu wide dropdown-menu-mobile" role="menu">
                                    <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/36"
                                           class="active">总榜</a></li>
                                    <li class="cascade"><a
                                                href="/rank/index/country/cn/device/iphone/brand/free/genre/6014"
                                                class="dropdown-toggle " aria-expanded="false">游戏 <span
                                                    class="glyphicon-right"></span></a>
                                        <ul class="cascade-menu dropdown-menu" role="menu"><span
                                                    class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7019"
                                                   class="">文字游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7018"
                                                   class="">小游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7017"
                                                   class="">策略游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7016"
                                                   class="">体育</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7015"
                                                   class="">模拟游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7014"
                                                   class="">角色扮演游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7013"
                                                   class="">赛车游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7012"
                                                   class="">智力游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7011"
                                                   class="">音乐</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7009"
                                                   class="">家庭游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7001"
                                                   class="">动作游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7002"
                                                   class="">探险游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7003"
                                                   class="">街机游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7004"
                                                   class="">桌面游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7005"
                                                   class="">扑克牌游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7006"
                                                   class="">娱乐场游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7007"
                                                   class="">骰子游戏</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/7008"
                                                   class="">教育游戏</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6000"
                                           class="">商务</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6017"
                                           class="">教育</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6012"
                                           class="">生活</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6016"
                                           class="">娱乐</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6002"
                                           class="">工具</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6003"
                                           class="">旅游</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6013" class="">健康健美</a>
                                    </li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6023" class="">美食佳饮</a>
                                    </li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6007"
                                           class="">效率</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6018"
                                           class="">图书</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6015"
                                           class="">财务</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6011"
                                           class="">音乐</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6006"
                                           class="">参考</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6004"
                                           class="">体育</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6020"
                                           class="">医疗</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6009"
                                           class="">新闻</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6005"
                                           class="">社交</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6024"
                                           class="">购物</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6010"
                                           class="">导航</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6025"
                                           class="">贴纸</a></li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6022" class="">商品指南</a>
                                    </li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6001"
                                           class="">天气</a></li>
                                    <li class="cascade"><a
                                                href="/rank/index/country/cn/device/iphone/brand/free/genre/6021"
                                                class="dropdown-toggle " aria-expanded="false">报刊杂志 <span
                                                    class="glyphicon-right"></span></a>
                                        <ul class="cascade-menu dropdown-menu" role="menu"><span
                                                    class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13030"
                                                   class="">女士兴趣</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13008"
                                                   class="">新娘与婚礼</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13007"
                                                   class="">艺术与摄影</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13006"
                                                   class="">汽车</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13005"
                                                   class="">运动与休闲</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13004"
                                                   class="">户外与自然</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13003"
                                                   class="">家居与园艺</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13002"
                                                   class="">流行与时尚</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13001"
                                                   class="">新闻与政治</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13009"
                                                   class="">商务与投资</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13010"
                                                   class="">儿童杂志</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13011"
                                                   class="">电脑与网络</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13029"
                                                   class="">旅游与地域</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13028"
                                                   class="">青少年</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13027"
                                                   class="">科学</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13026"
                                                   class="">地方新闻</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13025"
                                                   class="">职业与技能</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13024"
                                                   class="">宠物</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13023"
                                                   class="">子女教养与家庭</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13021"
                                                   class="">电影与音乐</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13019"
                                                   class="">文学杂志与期刊</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13018"
                                                   class="">历史</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13017"
                                                   class="">心理与生理</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13015"
                                                   class="">娱乐</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13014"
                                                   class="">电子产品与音响</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13013"
                                                   class="">手工艺与爱好</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13012"
                                                   class="">烹饪与饮食</a></li>
                                            <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/13020"
                                                   class="">男士兴趣</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/rank/index/country/cn/device/iphone/brand/free/genre/6008" class="">摄影与录像</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <span class="navbar-brand ">日期</span>
                                <a href="#" class="dropdown-toggle date-range-picker date-picker-position"
                                   data-toggle="dropdown" role="button" aria-expanded="false" data-open="1"
                                   data-mulit="0" data-mindate="12/20/2009" data-date="2017-01-24 10:51:13"><span>2017年1月24日</span>
                                    <span class="caret"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="rank-list"></div>

            </div>
        </div>
    </div>
    <script>
        var Lang = {"language_type":"cn","confirm_btn":"\u786e\u5b9a","cancel_btn":"\u53d6\u6d88","setup":"\u8bbe\u7f6e","click_fold_up":"\u70b9\u51fb\u6536\u8d77","click_get_more":"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a","click_get_more_record":"\u67e5\u770b\u8fd130\u5929\u5168\u90e8\u66f4\u65b0\u8bb0\u5f55","operation_exception":"\u64cd\u4f5c\u5f02\u5e38","wechat_subscribe_tip1":"\u60a8\u5df2\u6210\u529f\u8ba2\u9605\u3010","wechat_subscribe_tip2":"\u3011\u7684\u6392\u540d\u53d8\u52a8\u63d0\u9192\u63a8\u9001\uff0c\u6bcf\u5929\u6392\u540d\u53d8\u52a8\u8d85\u8fc75\u540d\u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192\u3002","wechat_subscribe_tip3":"\u3011\u7684","wechat_subscribe_tip4":"\u5b9e\u65f6\u6392\u540d","wechat_subscribe_tip5":"\u5173\u952e\u8bcd","wechat_subscribe_tip6":"\u63a8\u9001\uff0c\u6bcf\u5929","wechat_subscribe_tip7":"\u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192\u3002","wechat_subscribe_tip8":"\u60a8\u5df2\u6210\u529f\u8ba2\u9605\u6392\u540d\u4e0a\u5347\/\u4e0b\u964d\u6700\u5feb\u5e94\u7528\u63a8\u9001\uff0c\u6bcf\u5929","wechat_subscribe_tip9":"\u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192\uff0c\u53ef\u4ee5\u5728\u3010\u5fae\u4fe1\u8ba2\u9605\u3011\u4e2d\u4fee\u6539\u63a8\u9001\u65f6\u95f4","wechat_subscribe_tip10":"\u3011\u7684\u6392\u540d\u53d8\u52a8\u63d0\u9192\u63a8\u9001\uff0c\u6bcf\u5929\u6392\u540d\u53d8\u52a8\u8d85\u8fc75\u540d\u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192\uff0c\u53ef\u4ee5\u5728\u3010\u5fae\u4fe1\u8ba2\u9605\u3011\u4e2d\u4fee\u6539\u4fe1\u606f","wechat_subscribe_tip11":"\u3011\u7684\u6bcf\u65e5\u8bc4\u8bba\u7edf\u8ba1\uff0c\u6bcf\u5929","wechat_subscribe_tip12":"\u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192","wechat_subscribe_tip13":"\u53ef\u4ee5","wechat_subscribe_tip14":"\u9700","wechat_subscribe_tip15":"\u5728\u3010\u5fae\u4fe1\u8ba2\u9605\u3011\u4e2d\u4fee\u6539\u63a8\u9001\u65f6\u95f4","wechat_subscribe_tip16":"\u3011\u5173\u952e\u8bcd\u6392\u540d\u63a8\u9001\uff0c\u9700\u5728\u5e94\u7528\u8be6\u60c5\u9875\u6dfb\u52a0\u5173\u952e\u8bcd","wechat_subscribe_tip17":"\u60a8\u5df2\u6210\u529f\u8ba2\u9605\u4e0b\u67b6\u5e94\u7528\u5185\u5bb9\u63a8\u9001\uff0c\u6bcf\u5929 10:00 \u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192","wechat_subscribe_tip18":"\u60a8\u5df2\u6210\u529f\u8ba2\u9605\u4e0a\u4e00\u5468\u641c\u7d22\u6307\u6570\u4e0a\u5347\u6700\u5feb\u5173\u952e\u8bcd\u63d0\u9192\u63a8\u9001\uff0c\u6bcf\u5468\u4e00 10:00 \u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192","wechat_subscribe_tip19":"\u60a8\u5df2\u6210\u529f\u8ba2\u9605\u4e0a\u4e00\u5468\u70ed\u641c\u699c\u5728\u699c\u65f6\u95f4\u6700\u957f\u5173\u952e\u8bcd\u63d0\u9192\u63a8\u9001\uff0c\u6bcf\u5468\u4e00 10:00 \u4f1a\u6536\u5230\u5fae\u4fe1\u63d0\u9192","added":"\u5df2\u6dfb\u52a0","go_add":"\u53bb\u6dfb\u52a0","already_subscribed":"\u5df2\u8ba2\u9605\uff1a","subscribe_btn":"\u8ba2\u9605","unsubscribe_btn":"\u53d6\u6d88\u8ba2\u9605","subscribe_app":"\u8ba2\u9605\u5e94\u7528\uff1a","you_not_added_application":"\u60a8\u8fd8\u6ca1\u6709\u6dfb\u52a0\u5e94\u7528","already_save":"\u5df2\u4fdd\u5b58","not_setup":"\u672a\u8bbe\u7f6e","not_subscribe_app":"\u672a\u8ba2\u9605\u5e94\u7528","show":"\u67e5\u770b  ","staff":"\u540d","focus_words":"\u5173\u6ce8\u5173\u952e\u8bcd\u6570\u76ee","usage_amout":"\u4f7f\u7528\u91cf","operation":"\u64cd\u4f5c","open_vip_tip":"\u5f00\u901aVIP\u7279\u6743\u67e5\u770b\u66f4\u591a\u3002","open_btn":"\u5f00\u901aVIP\u7279\u6743\u67e5\u770b\u66f4\u591a\u3002","password_verify_1":"\u5bc6\u7801\u4e0d\u4e00\u81f4","password_verify_2":"\u4e0d\u80fd\u4e3a\u7a7a","no_data_1":"\u6682\u65e0\u641c\u7d22\u7ed3\u679c","no_data_2":"\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86","no_data_3":"\u6682\u65e0\u6570\u636e","keyworchange_no_data":"\u6682\u65e0\u6570\u636e\uff0c\u53ef\u80fd\u7684\u539f\u56e0\u6709\uff1a<br\/>1\u3001\u672a\u8986\u76d6\u5f53\u524d\u5173\u952e\u8bcd\uff0c\u6216\u8005\u641c\u7d22\u6392\u540d\u5728200\u540d\u4ee5\u5916\uff1b<br\/>2\u3001\u5f53\u524d\u5173\u952e\u8bcd\u4e3a\u65b0\u589e\u5173\u6ce8\uff0c\u7a0d\u540e\u5373\u53ef\u770b\u5230\u76d1\u63a7\u6570\u636e\uff1b","appcenter_download_no_data":"\u6682\u65e0\u6570\u636e","mycenter_keyword_no_data":"\u5f53\u524d\u5730\u533a\u6682\u65e0\u5173\u952e\u8bcd\u6570\u636e","export_data_tip_1":"\u6570\u636e\u5bfc\u51fa\u4e2d\uff0c\u8bf7\u4e0d\u8981\u91cd\u590d\u70b9\u51fb, \u5982\u679c30\u79d2\u540e\u6ca1\u6709\u53cd\u5e94\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5\u3002","export_data_tip_2":"\u60a8\u5df2\u7ecf\u5bfc\u51fa\u4e86\u6b64\u9879\u6570\u636e\uff0c\u786e\u5b9a\u518d\u6b21\u5bfc\u51fa\u4e48\uff1f","export_data_ing":"\u5bfc\u51fa\u4e2d....","export_data":"\u5bfc\u51fa\u6570\u636e","account_vip_status_tip1":"\u8bf7\u8bbf\u95ee ASO100.com \u7535\u8111\u7248\u5f00\u901a\u3002","account_vip_status_tip2":"\u5f53\u65e5\u5bfc\u51fa\u6b21\u6570\u5df2\u8d85\u51fa\u9650\u5236","login_tip":"\u8bf7\u767b\u5f55\u540e\u518d\u8bd5","go_login":"\u53bb\u767b\u5f55","please_check":"\u8bf7\u68c0\u67e5","please_write_pwd":"\u8bf7\u586b\u5199\u5bc6\u7801","show_account":"\u67e5\u770b\u8d26\u53f7","itc_tip_1":"\u8d26\u53f7\u6dfb\u52a0\u6210\u529f\uff0c \u4f46\u5e94\u7528\u300c","itc_tip_2":"\u300d\u4e0d\u5728\u6b64\u5f00\u53d1\u8005\u8d26\u53f7\u4e2d\u3002\u60a8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0\uff0c\u6216\u8005\u67e5\u770b\u5df2\u7ed1\u5b9a\u8d26\u53f7\u3002","itc_tip_3":"\u7ee7\u7eed\u6dfb\u52a0","itc_tip_4":"\u8d26\u53f7\u6dfb\u52a0\u6210\u529f\uff0c\u6570\u636e\u6b63\u5728\u5904\u7406\u4e2d\uff0c\u8bf7\u4e00\u4e2a\u5c0f\u65f6\u540e\u56de\u6765\u770b\u770b\u5427\u3002","itc_tip_5":"\u786e\u5b9a\u5220\u9664\uff1f","itc_tip_6":"\u5220\u9664\u8d26\u53f7","itc_tip_7":"\u5220\u9664\u6210\u529f","itc_tip_8":"\u77e5\u9053\u4e86","itc_tip_9":"\u8bf7\u586b\u5199","itc_tip_10":"\u8d26\u53f7\u4fee\u6539\u6210\u529f","itc_tip_11":"\u4fee\u6539\u6210\u529f","close":"\u5173\u95ed","invoice_tip_1":"\u8bf7\u8f93\u5165\u53d1\u7968\u62ac\u5934","invoice_tip_2":"\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba","invoice_tip_3":"\u8bf7\u8f93\u5165\u624b\u673a\u53f7","invoice_tip_4":"\u8bf7\u8f93\u5165\u6536\u4ef6\u5730\u5740","invoice_tip_5":"\u6dfb\u52a0\u6210\u529f","qrcode_tip":"\u624b\u673a\u7aef\u70b9\u51fb\u4e8c\u7ef4\u7801","points_tip_1":"\u60a8\u5df2\u7ecf\u83b7\u5f97","points_tip_2":"\u5206","points_tip_3":"\u79ef\u5206\u53ef\u7528\u5151\u6362VIP\u4f7f\u7528\u6743\u9650","points_tip_4":"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u79ef\u5206\u4e0d\u8db3","bindWechat_title":"\u5173\u6ce8ASO100\u516c\u4f17\u53f7","unbindWechat_title":"\u5fae\u4fe1\u7ed1\u5b9a\u53d6\u6d88\u6210\u529f","down_list":"\u843d\u699c","rise":"\u4e0a\u5347","decline":"\u4e0b\u964d","compared_to_yesterday_ranking":"\u76f8\u6bd4\u6628\u5929\uff0c\u6392\u540d","show_history_trend":"\u67e5\u770b\u5386\u53f2\u6392\u540d\u8d8b\u52bf","trend":"\u8d8b\u52bf","cancel_attention":"\u53d6\u6d88\u5173\u6ce8","set_top":"\u7f6e\u9876","add_attention":"\u6dfb\u52a0\u5173\u6ce8","dataTables_sProcessing":"\u5904\u7406\u4e2d...","dataTables_sLengthMenu":"\u663e\u793a _MENU_ \u9879\u7ed3\u679c","dataTables_sZeroRecords":"\u6ca1\u6709\u5339\u914d\u7ed3\u679c","dataTables_sInfo":"\u663e\u793a\u7b2c _START_ \u81f3 _END_ \u9879\u7ed3\u679c\uff0c\u5171 _TOTAL_ \u9879","dataTables_sInfoEmpty":"\u663e\u793a\u7b2c 0 \u81f3 0 \u9879\u7ed3\u679c\uff0c\u5171 0 \u9879","dataTables_sInfoFiltered":"(\u7531 _MAX_ \u9879\u7ed3\u679c\u8fc7\u6ee4)","dataTables_sSearch":"\u641c\u7d22:&nbsp;&nbsp;","dataTables_sEmptyTable":"\u6ca1\u6709\u6570\u636e","dataTables_sLoadingRecords":"\u8f7d\u5165\u4e2d...","dataTables_sFirst":"\u9996\u9875","dataTables_sLast":"\u672b\u9875","dataTables_sSortAscending":": \u4ee5\u5347\u5e8f\u6392\u5217\u6b64\u5217","dataTables_sSortDescending":": \u4ee5\u964d\u5e8f\u6392\u5217\u6b64\u5217","dataTables_opt_keyword_name":"\u5173\u952e\u8bcd","dataTables_opt_keyword_hints":"\u641c\u7d22\u6307\u6570","dataTables_opt_keyword_result":"\u641c\u7d22\u7ed3\u679c\u6570","dataTables_opt_keyword_tuozhan_1":"\u62d3\u5c55","dataTables_opt_keyword_tuozhan_2":"\u4e00\u952e\u62d3\u5c55","app_keyword_sort_index_tip":"\u641c\u7d22\u6307\u6570\u6765\u6e90\u4e8e App Store \u5b98\u65b9\u6570\u636e\u3002\u8be5\u6307\u6570\u4ee3\u8868\u6bcf\u4e2a\u5173\u952e\u8bcd\u5728App Store\u7684\u641c\u7d22\u70ed\u5ea6\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u6307\u6570\u8d8a\u9ad8\uff0c\u5219\u8be5\u8bcd\u6bcf\u5929\u88ab\u641c\u7d22\u6b21\u6570\u4e5f\u8d8a\u591a\u3002","app_keyword_sort_nums_tip":"\u641c\u7d22\u7ed3\u679c\u6570\u6307\u5728 App Store \u4e2d\u641c\u7d22\u8be5\u5173\u952e\u8bcd\u65f6\uff0c\u641c\u7d22\u7ed3\u679c\u7684\u603b\u6761\u6570\u3002","app_keyword_tuozhan_tip":"\u5229\u7528\u5173\u952e\u8bcd\u6269\u5c55\u529f\u80fd\uff0c\u53d6\u66f4\u591a\u5177\u6709\u5173\u8054\u6027\u7684\u5173\u952e\u8bcd\u3002","now_adding":"\u6b63\u5728\u6dfb\u52a0\u4e2d...","cancel_add":"\u53d6\u6d88\u6dfb\u52a0","delete_app_title":"\u786e\u5b9a\u5220\u9664\uff1f","delete_app_text":"\u5220\u9664\u5e94\u7528\u540e\uff0c\u60a8\u5728\u8be5\u5e94\u7528\u4e0b\u6dfb\u52a0\u7684\u7ade\u54c1\u4fe1\u606f\u3001\u8ba2\u9605\u4fe1\u606f\u5c06\u4f1a\u88ab\u540c\u65f6\u5220\u9664\u3002","delete_app_confirmButtonText":"\u5220\u9664","delete_app_no_app":"\u6ca1\u6709\u5e94\u7528","delete_app_no_add_app":"\u60a8\u8fd8\u6ca1\u6709\u6dfb\u52a0\u5e94\u7528\u3002","delete_app_succ_title":"\u5220\u9664\u6210\u529f!","delete_app_succ_text":"\u5e94\u7528\u5df2\u7ecf\u88ab\u5220\u9664\u3002","delete_app_add_my_app":"\u6dfb\u52a0\u5230\u6211\u7684\u5e94\u7528","verify_mail_been_send":"\u9a8c\u8bc1\u90ae\u4ef6\u5df2\u53d1\u9001","nearly_seven_days":"\u8fd17\u65e5","table_thead_1":"\u65e5\u671f","table_thead_2":"\u4e0b\u8f7d","table_thead_3":"\u4e0b\u8f7d\u662f\u4ece App Store \u9996\u6b21\u4e0b\u8f7d\u60a8 app \u7684\u6b21\u6570\u3002App \u66f4\u65b0\u3001\u4ece\u540c\u4e00\u4e2a Apple ID \u4e0b\u8f7d\u5230\u4e0d\u540c\u7684\u8bbe\u5907\u3001\u540c\u4e00\u53f0 iOS \u8bbe\u5907\u7684\u91cd\u65b0\u4e0b\u8f7d\u6b21\u6570\u5747\u4e0d\u5305\u542b\u5728\u5185\u3002","table_thead_4":"\u66f4\u65b0","table_thead_5":"\u91cd\u65b0\u4e0b\u8f7d","table_thead_6":"\u91cd\u65b0\u4e0b\u8f7d\u662f\u6307\u4ece\u540c\u4e00\u4e2a Apple ID \u4e0b\u8f7d\u5230\u4e0d\u540c\u7684\u8bbe\u5907\u6216\u8005\u540c\u4e00\u53f0 iOS \u8bbe\u5907\u5220\u9664\u540e\u91cd\u65b0\u4e0b\u8f7d\u7684\u6b21\u6570\u3002","table_thead_7":"\u9000\u6b3e","table_thead_8":"\u6536\u5165($)","table_thead_9":"\u6536\u5165\u6307\u6263\u9664\u82f9\u679c\u5206\u6210\u540e\u7684\u9884\u671f\u6536\u5165\u3002\u8d27\u5e01\u5355\u4f4d\u4e3a\u7f8e\u5143\u3002","table_thead_10":"\u4e0b\u8f7d\u91cf\u9884\u4f30","table_thead_11":"\u5c55\u793a\u6b21\u6570","table_thead_11_tips":"\u60a8\u7684 App \u5728 App Store \u4e0a\u663e\u793a\u7684\u6b21\u6570\uff0c\u540c\u4e00\u8bbe\u5907\u4ec5\u7edf\u8ba1\u4e00\u6b21\u3002\uff08\u7b80\u5355\u7684\u8bf4\u5c31\u662f\u5e94\u7528\u56fe\u6807\u5728\u641c\u7d22\u7ed3\u679c\u3001\u699c\u5355\u3001\u7cbe\u54c1\u63a8\u8350\u7b49\u4f4d\u7f6e\u663e\u793a\u7684\u6b21\u6570\uff09","table_thead_12":"\u4ea7\u54c1\u9875\u9762\u67e5\u770b\u6b21\u6570","table_thead_12_tips":"\u5728 iOS 8 \u6216\u66f4\u9ad8\u7248\u672c\u7684\u8bbe\u5907\u4e0a\u67e5\u770b\u60a8\u5728 App Store \u4e0a\u7684 App \u9875\u9762\u7684\u6b21\u6570\uff0c\u540c\u4e00\u8bbe\u5907\u4ec5\u7edf\u8ba1\u4e00\u6b21\u3002","table_thead_13":"App \u8d2d\u4e70\u91cf","table_thead_13_tips":"\u5728 iOS 8 \u6216\u66f4\u9ad8\u7248\u672c\u7684\u8bbe\u5907\u4e0a\u7684\u6bcf\u6b21 App \u8d2d\u4e70\u3002","table_thead_14":"\u5c55\u793a\u5230\u8d2d\u4e70\u8f6c\u5316\u7387","table_thead_14_tips":"App \u8d2d\u4e70\u91cf\/\u5c55\u793a\u6b21\u6570","ranking_trend":"\u6392\u540d\u8d8b\u52bf","globalRank_nav_genre":"\u7c7b\u522b","globalRank_overview_table_th1":"\u5730\u533a","app_rankinfo_globalRank_title":"\u5168\u7403\u6392\u540d\u4e00\u89c8","export_png":"\u5bfc\u51faPNG","export_jpg":"\u5bfc\u51faJPG","dateTimeLabelFormats_millisecond":"%Y-%m-%d %H\u70b9","dateTimeLabelFormats_second":"%Y-%m-%d %H\u70b9","dateTimeLabelFormats_minute":"%Y-%m-%d %H\u70b9","dateTimeLabelFormats_kc_minute":"%Y-%m-%d %H\u70b9%M\u5206","dateTimeLabelFormats_hour":"%d\u65e5 %H\u70b9","dateTimeLabelFormats_day":"%d\u65e5","dateTimeLabelFormats_week":"%m\u6708%d\u65e5","dateTimeLabelFormats_month":"%y\u5e74%m\u6708","dateTimeLabelFormats_year":"%Y\u5e74","dateTimeLabelFormats_hour_2":"%Y\u5e74%m\u6708%d\u65e5 %H\u70b9","dateTimeLabelFormats_day_2":"%Y\u5e74%m\u6708%d\u65e5","new_version_tip":"\u65b0\u7248\u672c\u53d1\u5e03\uff1a","not_enter_current_list":"\u672a\u8fdb\u5165\u5f53\u524d\u699c\u5355","ranking":"\u6392\u540d","pwd_error_tip":"\u60a8\u8f93\u5165\u7684\u786e\u8ba4\u5bc6\u7801\u4e0d\u5339\u914d","mod_pwd_tip_1":"\u4fee\u6539\u6210\u529f","mod_pwd_tip_2":"\u524d\u53bb\u767b\u5f55","mod_pwd_tip_3":"\u8fd4\u56de\u9996\u9875","date_range_1":"\u4eca\u65e5","date_range_2":"\u6628\u65e5","date_range_3":"\u8fd17\u65e5","date_range_4":"\u8fd130\u65e5","date_range_5":"\u8fd1\u4e09\u4e2a\u6708","date_range_6":"\u8fd1\u4e00\u5e74","locales_applyLabel":"\u5b8c\u6210","locales_fromLabel":"\u5f00\u59cb","locales_toLabel":"\u7ed3\u675f","locales_customRangeLabel":"\u81ea\u5b9a\u4e49","sorry_tip_1":"\u62b1\u6b49\uff0c","sorry_tip_2":"VIP\u7528\u6237","sorry_tip_3":"\u666e\u901a\u7528\u6237","sorry_tip_4":"\u4ec5\u4f9b\u67e5\u8be2","sorry_tip_5":"\u5929\u5185\u7684\u6570\u636e","format_time":"YYYY\u5e74MM\u6708D\u65e5","to":"\u81f3","space":"","enter_invitation_code":"\u8bf7\u8f93\u5165\u9080\u8bf7\u7801","upload_img_limit":"\u56fe\u7247\u4e0d\u80fd\u8d85\u8fc72M","please_select_img":"\u8bf7\u9009\u62e9\u56fe\u7247","please_check_email":"\u8bf7\u68c0\u67e5\u90ae\u7bb1","investors_certification_title":"\u6295\u8d44\u4eba\u4e13\u5c5e","upload_card":"\u4e0a\u4f20\u540d\u7247","email_authentication":"\u90ae\u7bb1\u8ba4\u8bc1","certified_btn":"\u8ba4\u8bc1","followed":"\u5df2\u5173\u6ce8","apple_search_placeholder":"\u5e94\u7528\u540d\u79f0\u6216\u8005APP ID","android_search_placeholder":"\u5e94\u7528\u540d\u79f0\u6216\u8005\u5305\u540d","adding":"\u6dfb\u52a0\u4e2d...","deleteing":"\u5220\u9664\u4e2d...","share":"\u5360\u6bd4","edit":"\u7f16\u8f91","img_type":"\u8bf7\u786e\u4fdd\u6587\u4ef6\u4e3a\u56fe\u50cf\u7c7b\u578b","img_size":"\u8bf7\u9009\u62e9\u5c0f\u4e8e2M\u7684\u56fe\u7247","again_get":"\u91cd\u65b0\u83b7\u53d6","get_code":"\u83b7\u53d6\u9a8c\u8bc1\u7801","format_date":"YYYY\u5e74MM\u6708DD\u65e5","format_date_d":"\u5929","format_date_h":"\u5c0f\u65f6","format_date_m":"\u5206\u949f","request_error":"\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5","keyword_group_limit":"\u6700\u591a\u521b\u5efa6\u4e2a\u7ec4","keyword_selct_word":"\u8bf7\u9009\u62e9\u5173\u952e\u8bcd","keyword_setting_error":"\u8bbe\u5b9a\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5","keyword_setting_succ":"\u4e2a\u8bcd\u5df2\u6210\u529f\u6dfb\u52a0\u5230","keyword_cancel_add":"\u53d6\u6d88\u6dfb\u52a0","keyword_add_repertory":"\u52a0\u5165\u8bcd\u5e93","keyword_search_result":"\u7684\u641c\u7d22\u7ed3\u679c","keyword_not_covered":"\u672a\u8986\u76d6","keyword_not_selected":"\u8bf7\u9009\u62e9\u5173\u952e\u8bcd\u5e76\u52a0\u5165\u5907\u9009","keyword_muti_succ":"\u4e2a\u8bcd\u5df2\u6210\u529f\u6dfb\u52a0\u5230\u8bcd\u5e93\uff0c\u53ef\u4ee5\u5728\u5173\u952e\u8bcd\u8bcd\u5e93\u4e2d\u67e5\u770b","keyword_select2_placehoder":"\u8bf7\u5148\u521b\u5efa\u5206\u7ec4","search_no_result":"\u6ca1\u6709\u641c\u7d22\u5230\u7ed3\u679c\u3002","keyword_expend_show_app":"\u5bf9\u4e0d\u8d77\uff0c\u6700\u591a\u53ea\u80fd\u540c\u65f6\u67e5\u770b3\u4e2a APP"};
    </script>
    <script src="{{ asset('js/common.js') }}"></script>
    <script src="{{ asset('js/daterangepicker.js') }}"></script>
    <script src="{{ asset('js/aso100_v2_min.js') }}"></script>
    <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":["weixin","tsina","qzone","sqq","douban","youdao","twi","fbook","copy"],"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"5","bdPos":"right","bdTop":"250"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='/public/baidushare/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
@endsection

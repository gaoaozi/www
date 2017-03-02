@extends('layouts.home')
@section('content')
	<style type="text/css">
		.subtitle {
			font-size: 20px;
			font-weight: lighter;
			background-size: 100vw 100vh;
			color: white;
		}

		.form {
			padding: 100px 0;
			display: flex;
			justify-content: center;
		}

		.form .input {
			border: 1px solid white;
			margin-right: 20px;
			padding: 10px 0;
			display: flex;
			padding-left: 10px;
		}
		.form button {
			background: #2181ea;
			border: none;
			color: white;
			padding: 10px 60px;
			font-size: 18px;
		}
		.process{
			margin-bottom: 50px;
		}
		.process img {
			display:inline
			height:200px;
			width:200px;
			text-align:center
		}
		.subtitle2 {
			font-family:"Times New Roman";
		}



		#fh5co-header {
			background: -webkit-linear-gradient(-45deg, rgba(24,42,115,1) 0%,rgba(33,138,174,1) 69%,rgba(32,167,172,1) 89%);
		}
	</style>


	<div class="fh5co-loader"></div>
	<div id="page">
	<nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-xs-2">
					<div id="fh5co-logo"><a href="{{ url('/asm/index') }}">AOK.</a></div>
				</div>
				<div class="col-xs-10 text-right menu-1">
					<ul>
						<li class="active"><a href="{{ url('/asm/index') }}">产品</a></li>
						<li class="has-dropdown">
							<a href="{{ url('/asm/adsintroduce') }}">苹果搜索广告</a>
							{{--<ul class="dropdown">--}}
								{{--<li><a href="{{ url('rank/realtimerank') }}">榜单实时排名</a></li>--}}
							{{--</ul>--}}
						</li>

						<li class="has-dropdown">
							<a href="{{ url('/rank/services') }}">苹果优化服务</a>
							<ul class="dropdown">
								<li><a href="#">Web Design</a></li>
								<li><a href="#">eCommerce</a></li>
								<li><a href="#">Branding</a></li>
								<li><a href="#">API</a></li>
							</ul>
						</li>
						<li class="has-dropdown">
							<a href="#">专栏</a>
							<ul class="dropdown">
								<li><a href="#">HTML5</a></li>
								<li><a href="#">CSS3</a></li>
								<li><a href="#">Sass</a></li>
								<li><a href="#">jQuery</a></li>
							</ul>
						</li>
						{{--<li><a href="about.html">关于我们</a></li>--}}
						{{--<li><a href="contact.html">联系</a></li>--}}
						{{--<li class="btn-cta"><a href="{{ url('/login') }}"><span>登录</span></a></li>--}}


						<!-- Authentication Links -->
						{{--@if (Auth::guest())--}}
							{{--<li class="btn-cta" ><a href="{{ url('/login') }}"><span>登录</span></a></li>--}}
							{{--<li class="btn-cta" ><a href="{{ url('/register') }}"><span>注册</span></a></li>--}}
						{{--@else--}}
							{{--<li class="dropdown">--}}
								{{--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">--}}
									{{--{{ Auth::user()->name }} <span class="caret"></span>--}}
								{{--</a>--}}

								{{--<ul class="dropdown-menu" role="menu">--}}
									{{--<li>--}}
										{{--<a href="{{ url('/logout') }}"--}}
										   {{--onclick="event.preventDefault();--}}
                                                     {{--document.getElementById('logout-form').submit();">--}}
											{{--注销--}}
										{{--</a>--}}
										{{--<form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">--}}
											{{--{{ csrf_field() }}--}}
										{{--</form>--}}
									{{--</li>--}}
								{{--</ul>--}}
							{{--</li>--}}
						{{--@endif--}}


					</ul>

				</div>
			</div>
			
		</div>
	</nav>
		{{--style="background-image:url({{ asset('images/img_bg_2.jpg') }});"--}}
	<header id="fh5co-header" class="fh5co-cover" role="banner" >
		{{--<div class="overlay"></div>--}}
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<div class="display-t">
						<div class="display-tc animate-box" data-animate-effect="fadeIn">
							<h1 class="subtitle2" >ASM&nbsp;TOPS</h1>
							<div class="row">
								<form class="form-inline" id="fh5co-header-subscribe">
									<div class="col-md-8 col-md-offset-2">
										<div class="form-group">
											<div class="subtitle">全球首创苹果搜索广告智能投放平台</div>
											{{--<input type="text" class="form-control" id="email" placeholder="应用名称, APP ID">--}}
											{{--<button type="submit" class="btn btn-default">start</button>--}}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
			{{--<div class="banner has-dots" style="overflow: hidden; width: 100%; height: 415px;">--}}
				<div class="banner has-dots">

				<ul>

				<li style="background-image: url('{{ asset('images/shop.jpg') }}');">
						<div class="inner">
							<h1>ASM投放建议书</h1>
							<p>精品分析报告 + 个性化投放策略也制定</p>
							{{--<a class="btn" href="#download">下载</a>--}}
						</div>
					</li>

					<li style="background-image:url('{{ asset('images/wood.jpg') }}');">
						<div class="inner">
							<h1>ASM一站式投放服务</h1>
							<p>APP前期优化 + 1V1广告投放 + 效果分析与策略迭代</p>
							{{--<a class="btn" href="#download">下载</a>--}}
						</div>
					</li>

					<li style="background-image: url('{{ asset('images/subway.jpg') }}');">
						<div class="inner">
							<h1>ASM权威数据</h1>
							<p>关键词推荐及打分 + 定制化数据报表 + 官方数据平台</p>
							{{--<a class="btn" href="//github.com/idiot/unslider">参与</a>--}}
						</div>
					</li>

					{{--<li style="background-image: url('{{ asset('images/sunset.jpg') }}'); ">--}}
						{{--<div class="inner">--}}
							{{--<h1>Uh, that’s about it.</h1>--}}
							{{--<p>I just wanted to show you another slide.</p>--}}
							{{--<a class="btn" href="#download">下载</a>--}}
						{{--</div>--}}
					{{--</li>--}}
				</ul>
				{{--<ol class="dots"><li class="dot active">1</li><li class="dot">2</li><li class="dot">3</li><li class="dot">4</li></ol></div>--}}
			</div>
{{--<div id="fh5co-core-feature">--}}
		{{--<div style="align-content: center" class="process">--}}
			{{--<img src="{{ asset('images/process.png') }}">--}}
		{{--</div>--}}
	{{--<div class="col-half-image-holder animate-box text-center" data-animate-effect=fadeIn">--}}
		{{--<img class="img-responsive center-block" style="width: 900px" src="{{ asset('images/process.png') }}" alt="samsung">--}}
	{{--</div>--}}
{{--</div>--}}


	<div id="fh5co-core-feature">
		<div class="container">
			<div class="row">
				<div class="features">
					<div class="col-half animate-box" data-animate-effect="fadeInLeft">
						<div class="table-c">
							<div class="desc">
								<span>年轻活力的团队</span>
								<h3>我们可以做什么？</h3>
								<p>
									AOK致力于为开发者和广告商提供智能化苹果搜索广告竞价服务,我们直观的技术平台和获利方案旨在精准化和自动化的简化苹果搜索广告流程,实现您的广告效果最大化。
								</p>
								<p><a href="{{ url('/asm/aboutus') }}" class="btn btn-lg btn-primary">更多</a></p>
							</div>
						</div>
					</div>
					<div class="col-half-image-holder animate-box" data-animate-effect="fadeInRight">
						<img class="img-responsive" style="width: 400px;height: 500px" src="{{ asset('images/hero-search-ads_large_2x.jpg') }}" alt="apple">
					</div>
				</div>
			</div>
		</div>
	</div>
    
    {{--<div class="copyrights">Collect from <a href="http://www.cssmoban.com/" >手机网站模板</a></div>--}}

	<div id="fh5co-services" class="fh5co-bg-section">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-4 text-center">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="icon-eye"></i>
						</span>
						<h3>专业丰富的推广经验</h3>
						<p>
							公司已专注于ASO优化服务领域多年，利用关键字优化技术，已为国内外数千家开发者提供ASO优化服务；
						</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-4 text-center">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="icon-command"></i>
						</span>
						<h3>真正为客户着想</h3>
						<p>
							我们通过专业的优化师对广告进行推广，工具类APP最低CPA达到了0.2美元，游戏APP最低CPA达到了0.5美元；
						</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-4 text-center">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="icon-power"></i>
						</span>
						<h3>最贴心的一站式服务</h3>
						<p>
							1对1的VIP服务，从APP分析、定制方案、设置投放策略、数据分析实现推广效果最大化；
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	{{--<div id="fh5co-project">--}}
		{{--<div class="container">--}}
			{{--<div class="row animate-box">--}}
				{{--<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">--}}
					{{--<span>Want Some Cool Stuff</span>--}}
					{{--<h2>Our Project</h2>--}}
					{{--<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>--}}
				{{--</div>--}}
			{{--</div>--}}
		{{--</div>--}}
		{{--<div class="project-content">--}}
			{{--<div class="col-half">--}}
				{{--<div class="project animate-box" style="background-image:url({{ asset('images/project-3.jpg') }});">--}}
					{{--<div class="desc">--}}
						{{--<span>Application</span>--}}
						{{--<h3>Project Name</h3>--}}
					{{--</div>--}}
				{{--</div>--}}
			{{--</div>--}}
			{{--<div class="col-half">--}}
				{{--<div class="project-grid animate-box" style="background-image:url({{ asset('images/project-5.jpg') }});">--}}
					{{--<div class="desc">--}}
						{{--<span>Illustration</span>--}}
						{{--<h3>Project Name</h3>--}}
					{{--</div>--}}
				{{--</div>--}}
				{{--<div class="project-grid animate-box" style="background-image:url({{ asset('images/project-2.jpg') }});">--}}
					{{--<div class="desc">--}}
						{{--<span>Branding</span>--}}
						{{--<h3>Project Name</h3>--}}
					{{--</div>--}}
				{{--</div>--}}
			{{--</div>--}}
		{{--</div>--}}
	{{--</div>--}}
	{{--<div id="fh5co-testimonial" class="fh5co-bg-section">--}}
		{{--<div class="container">--}}
			{{--<div class="row animate-box">--}}
				{{--<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">--}}
					{{--<h2>Happy Clients</h2>--}}
				{{--</div>--}}
			{{--</div>--}}
			{{--<div class="row">--}}
				{{--<div class="col-md-10 col-md-offset-1">--}}
					{{--<div class="row">--}}
						{{--<div class="col-md-12 animate-box">--}}
							{{--<div class="testimony">--}}
								{{--<div class="inner text-center">--}}
									{{--<img src="{{ asset('images/person3.jpg') }}" alt="testimony">--}}
								{{--</div>--}}
								{{--<blockquote>--}}
									{{--<p>&ldquo;Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.&rdquo;</p>--}}
									{{--<p class="author"><cite>&mdash; John Doe</cite></p>--}}
								{{--</blockquote>--}}
							{{--</div>--}}
						{{--</div>--}}
					{{--</div>--}}
				{{--</div>--}}
			{{--</div>--}}
		{{--</div>--}}
	{{--</div>--}}


	<div id="fh5co-started">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>准备好开始了吗？</h2>
					<p>想要通过您的广告获得更多展示吗？需要最专业的竞价广告服务？联系我们，我们很乐意沟通。</p>
				</div>
			</div>
			<div class="row animate-box">
				<div class="form">
					<div class="input">
						<img src="{{ asset('images/input_name.png') }}">
						<input style="background-color:transparent; border:0px" type="text" id="name" value="" placeholder="姓名">
					</div>
					<div class="input">
						<img src="{{ asset('images/input_phone.png') }}" style="width:30px;height:30px;">
						<input  style="background-color:transparent; border:0px" type="text" id="mobile" value="" placeholder="手机号">
					</div>
					<button type="button" name="button" id="btn" style="background-color: #f35f55;">预约优化师</button>
				</div>
				{{--<div class="col-md-8 col-md-offset-2">--}}
					{{--<form class="form-inline">--}}
						{{--<div class="col-md-6 col-md-offset-3 col-sm-6">--}}
							{{--<button type="submit" class="btn btn-default btn-block">联系我们</button>--}}
						{{--</div>--}}
					{{--</form>--}}
				{{--</div>--}}
			</div>
		</div>
	</div>

	<footer id="fh5co-footer" role="contentinfo">
		<div class="container">
			<div class="row row-pb-md">
				<div class="col-md-4 fh5co-widget">
					<h3>关于我们</h3>
					<p>
						奥咖信息科技（北京）有限公司是一家拥有全球视野和移动数据驱动营销解决方案的开拓者，2016年成立于北京；
					</p>
					<p>
						我们拥有丰富的APP运营推广经验，创立至今，千余家客户提供了ASO优化方案及移动推广服务。同时也具有强大的App Store数据分析技术。
					</p>
					{{--<p><a href="#">Learn More</a></p>--}}
				</div>
				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
					<ul class="fh5co-footer-links">
						<li><a href="/about">About</a></li>
						<li><a href="/help">Help</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="#">Terms</a></li>
						<li><a href="#">Meetups</a></li>
					</ul>
				</div>

				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
					<ul class="fh5co-footer-links">
						<li><a href="#">Shop</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Testimonials</a></li>
						<li><a href="#">Handbook</a></li>
						<li><a href="#">Held Desk</a></li>
					</ul>
				</div>

				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
					<ul class="fh5co-footer-links">
						<li><a href="#">Find Designers</a></li>
						<li><a href="#">Find Developers</a></li>
						<li><a href="#">Teams</a></li>
						<li><a href="#">Advertise</a></li>
						<li><a href="#">API</a></li>
					</ul>
				</div>
			</div>

			{{--<div class="row copyright">--}}
				{{--<div class="col-md-12 text-center">--}}
					{{--<p>--}}
						{{--<small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> --}}
						{{--<small class="block">More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a> Demo Images: <a href="#" target="_blank">Unsplash</a></small>--}}
					{{--</p>--}}
					{{--<p>--}}
						{{--<ul class="fh5co-social-icons">--}}
							{{--<li><a href="#"><i class="icon-twitter"></i></a></li>--}}
							{{--<li><a href="#"><i class="icon-facebook"></i></a></li>--}}
							{{--<li><a href="#"><i class="icon-linkedin"></i></a></li>--}}
							{{--<li><a href="#"><i class="icon-dribbble"></i></a></li>--}}
						{{--</ul>--}}
					{{--</p>--}}
				{{--</div>--}}
			{{--</div>--}}

		</div>
	</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
	</div>

	<script src="http://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
	<script src="http://www.bootcss.com/p/unslider/unslider.min.js"></script>
	<script>

		if(window.chrome) {
			$('.banner li').css('background-size', '100% 100%');
		}

		$('.banner').unslider({
			arrows: true,
			fluid: true,
			dots: true
		});

		//  Find any element starting with a # in the URL
		//  And listen to any click events it fires
		$('a[href^="#"]').click(function() {
			//  Find the target element
			var target = $($(this).attr('href'));

			//  And get its position
			var pos = target.offset(); // fallback to scrolling to top || {left: 0, top: 0};

			//  jQuery will return false if there's no element
			//  and your code will throw errors if it tries to do .offset().left;
			if(pos) {
				//  Scroll the page
				$('html, body').animate({
					scrollTop: pos.top,
					scrollLeft: pos.left
				}, 1000);
			}

			//  Don't let them visit the url, we'll scroll you there
			return false;
		});



	</script>

@endsection



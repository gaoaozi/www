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
			background: -webkit-linear-gradient(-45deg, rgba(24,42,115,1) 0%,rgba(33,138,174,1) 69%,rgba(32,167,172,1) 89%);}
	</style>
	<div class="fh5co-loader"></div>
	<div id="page">
	<nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-xs-2">
					<div id="fh5co-logo"><a href="asm/index">AOK.</a></div>
				</div>
				<div class="col-xs-10 text-right menu-1">
					<ul>
						<li class="active"><a href="asm/index">产品</a></li>
						<li class="has-dropdown">
							<a href="{{ url('/adsintroduce') }}">苹果搜索广告</a>
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
							<h1 class="subtitle2" >OUR&nbsp;TEAM</h1>
							<div class="row">
								<form class="form-inline" id="fh5co-header-subscribe">
									<div class="col-md-8 col-md-offset-2">
										<div class="form-group">
											<div class="subtitle">我们的团队</div>
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

		<div id="fh5co-about">
			<div class="container">
				<div class="about-content">
					<div class="row animate-box">
						<div class="col-md-6 col-md-push-6">
							<div class="desc">
								<h3>History</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?</p>
								<p>Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.</p>
							</div>
							<div class="desc">
								<h3>Mission &amp; Vission</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?</p>
								<p>Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.</p>
							</div>
						</div>
						<div class="col-md-6 col-md-pull-6">
							<img class="img-responsive" src="{{ asset('images/img_bg_1.jpg') }}" alt="about">
							<img class="img-responsive" src="{{ asset('images/img_bg_2.jpg') }}" alt="about">
						</div>

					</div>
				</div>
				<div class="row animate-box">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<span>Productive Staff</span>
						<h2>团队</h2>
						<p>爱折腾</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3 col-sm-3 animate-box" data-animate-effect="fadeIn">

						<div class="fh5co-staff">
							<img src="{{ asset('images/person1.jpg') }}" alt="Free HTML5 Templates by gettemplates.co">
							<h3>赵莹莹</h3>
							<strong class="role">CEO-横冲直撞去硅谷</strong>
							<p>XXXX</p>
							<ul class="fh5co-social-icons">
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
								<li><a href="#"><i class="icon-github"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 col-sm-3 animate-box" data-animate-effect="fadeIn">
						<div class="fh5co-staff">
							<img src="{{ asset('images/person2.jpg') }}" alt="Free HTML5 Templates by gettemplates.co">
							<h3>殷芹芹</h3>
							<strong class="role">渠道推广-踏平银河系</strong>
							<p>XXXX</p>
							<ul class="fh5co-social-icons">
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
								<li><a href="#"><i class="icon-github"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 col-sm-3 animate-box" data-animate-effect="fadeIn">
						<div class="fh5co-staff">
							<img src="{{ asset('images/person2.jpg') }}" alt="Free HTML5 Templates by gettemplates.co">
							<h3>于明立</h3>
							<strong class="role">优化师-玩转大数据</strong>
							<p>XXXX</p>
							<ul class="fh5co-social-icons">
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
								<li><a href="#"><i class="icon-github"></i></a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-3 col-sm-3 animate-box" data-animate-effect="fadeIn">
						<div class="fh5co-staff">
							<img src="{{ asset('images/person3.jpg') }}" alt="Free HTML5 Templates by gettemplates.co">

							<h3>高奥子</h3>
							<strong class="role">全栈攻城狮</strong>
							<p>XXXX</p>
							<ul class="fh5co-social-icons">
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
								<li><a href="#"><i class="icon-github"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>



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
@endsection



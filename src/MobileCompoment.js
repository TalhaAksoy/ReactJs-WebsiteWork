import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faBuildingShield, faStar, faSearch, faClock } from '@fortawesome/free-solid-svg-icons';
function lightTheme() {
	$('.body').attr('data-theme', 'light');
	$('.company-prop').removeClass('bg-base-200');
	$('.company-prop').addClass('bg-blue-100');
	$('button').removeClass('btn-primary');
	$('button').addClass('btn-info');

}

function darkTheme() {
	$('.body').attr('data-theme', 'dark');
	$('.company-prop').removeClass('bg-blue-100');
	$('.company-prop').addClass('bg-base-200');
	$('button').addClass('btn-primary');
	$('button').removeClass('btn-info');
}

function Slider() {
	return (
		<div className="pt-5 w-full text-center">
			<div class="carousel w-full">
				<div id="slide1" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" class="btn btn-circle invisible">❮</a>
						<a href="#slide2" class="btn btn-circle invisible">❯</a>
					</div>
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" class="btn btn-circle invisible">❮</a>
						<a href="#slide3" class="btn btn-circle invisible">❯</a>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" class="btn btn-circle invisible">❮</a>
						<a href="#slide4" class="btn btn-circle invisible">❯</a>
					</div>
				</div>
				<div id="slide4" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" class="btn btn-circle invisible">❮</a>
						<a href="#slide1" class="btn btn-circle invisible">❯</a>
					</div>
				</div>
			</div>
			<span>Swipe (Kaydır)</span>
		</div>
	);
}

function CardMobile(props) {
	return (
		<div className="App mt-2 mb-2">
			<div class="card w-4/5 mx-auto bg-base-100 shadow-xl image-full">
				<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
				<div class="card-body">
					<h2 class="card-title">{props.cardTitle}</h2>
					<p>{props.cardContent}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Hemen Başvur</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function ScreenMenu() {
	return (
		<div class="menu bg-base-100 p-2 rounded-box border-2 absolute right-2 bottom-2 z-40 w-16 h-16 flex justify-center items-center">
			<div className='w-10 h-10'>
				<FontAwesomeIcon className='w-full h-full mr-2' icon={faEnvelopeSquare} />
			</div>
		</div>
	);
}

function StatVertical() {
	return (
		<div className='w-full h-full flex justify-center'>
			<div class="stats stats-vertical shadow">

				<div class="stat">
					<div class="stat-title">Downloads</div>
					<div class="stat-value">31K</div>
					<div class="stat-desc">Jan 1st - Feb 1st</div>
				</div>

				<div class="stat">
					<div class="stat-title">New Users</div>
					<div class="stat-value">4,200</div>
					<div class="stat-desc">↗︎ 400 (22%)</div>
				</div>

				<div class="stat">
					<div class="stat-title">New Registers</div>
					<div class="stat-value">1,200</div>
					<div class="stat-desc">↘︎ 90 (14%)</div>
				</div>

			</div>
		</div>
	);
}

function Carousel() {
	return (
		<div className='mx-auto mb-5 bg-base-200 rounded-xl company-prop'>
			<div class="h-96 carousel carousel-vertical rounded-box">
				<div class="carousel-item h-full flex justify-center items-center">
					<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
						<div class="card-body">
							<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faBuildingShield} />
							<h2 class='card-title mx-auto'>Güvenli Hizmet</h2>
							<span>Güvenli Hizmet Anlayışımızdan dolayı tercih ediliyoruz.</span>
						</div>
					</div>
				</div>
				<div class="carousel-item h-full flex justify-center items-center">
					<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
						<div class="card-body">
							<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faStar} />
							<h2 class='card-title mx-auto'>5 yıldızlı Servis</h2>
							<span>Mükemmel Servis Hizmetlerimiz ile Müşterilerimiz Her Zaman Memnun.</span>
						</div>
					</div>
				</div>
				<div class="carousel-item h-full flex justify-center items-center">
					<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
						<div class="card-body">
							<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faSearch} />
							<h2 class='card-title mx-auto'>Güvenli Hizmet</h2>
							<span>Dasiy UI olarak yüzlerce müşterimize sağladığımız sayısız iş tecrübemizi ilk günkü hevesle tüm müşterilerimize yansıtıyoruz.</span>
						</div>
					</div>
				</div>
				<div class="carousel-item h-full flex justify-center items-center">
					<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
						<div class="card-body">
							<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faClock} />
							<h2 class='card-title mx-auto'>7/24 Aktif</h2>
							<span>Planlama aşamasında veya organizasyonunuz esnasında yaşamış olduğunuz herhangi bir aksaklıkta ekibimiz her zaman yanınızda.</span>
						</div>
					</div>
				</div>
				<div class="carousel-item h-full flex justify-center items-center">
					<StatVertical></StatVertical>
				</div>
			</div>
		</div>
	);
}

function FooterMobile() {
	return (
		<footer class="footer footer-center p-4 bg-base-300 text-base-content">
			<div>
				<p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
			</div>
		</footer>
	);
}

function NavbarMobile() {
	return (
		<div className='App '>
			<div class="drawer">
				<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content flex flex-col">
					<div class="w-full flex navbar bg-base-300 sticky top-0 left-0 z-50 sm:hidden">
						<div class="flex-none lg:hidden">
							<label for="my-drawer-3" class="btn btn-square btn-ghost">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
							</label>
						</div>
						<div class="flex-1 px-2 mx-2"><a href="#">DaisyUI</a></div>
						<label class="swap swap-rotate">
							<input type="checkbox" />
							<svg onClick={lightTheme} class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
							<svg onClick={darkTheme} class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
						</label>
						<div class="flex-none hidden lg:block">
							<ul class="menu menu-horizontal">
								<li><a>Navbar Item 1</a></li>
								<li><a>Navbar Item 2</a></li>
							</ul>
						</div>
					</div>
					<div className='space w-full h-5'></div>
					<Slider></Slider>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<Carousel></Carousel>
					<ScreenMenu></ScreenMenu>
					<FooterMobile></FooterMobile>
				</div>
				<div class="drawer-side">
					<label for="my-drawer-3" class="drawer-overlay"></label>
					<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
						<li><a>Sidebar Item 1</a></li>
						<li><a>Sidebar Item 2</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export { NavbarMobile }
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

function NavbarTop() {
	return (
		<div className='info bg-base-100 w-full h-10 flex justify-center'>
			<div className='middle w-3/4 h-full flex'>
				<div className='middleLeft w-1/2 h-full flex items-center justify-center'>
					<FontAwesomeIcon className='mr-2' icon={faPhone} />
					<span className='phoneNumber'>+90(XXX) XXX XX XX</span>
					<div class="divider divider-horizontal"></div>
					<FontAwesomeIcon className='w-10 h-5 mr-2' icon={faEnvelopeSquare} />
					<span className='email'>info@gmail.com</span>
				</div>
				<div className='middleRight w-1/2 h-full flex items-center justify-end'>
					<button className='btn btn-primary btn-sm rounded-sm'>İletişim</button>
				</div>
			</div>
		</div>
	);
}

function NavbarDesktop() {
	return (
		<div className="App sticky top-0 left-0 z-50 w-full sm:block hidden">
			<div class="navbar bg-base-100 shadow-lg h-20">
				<div class="flex-1">
					<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
				</div>
				<div class="flex-none">
					<ul class="menu menu-horizontal p-0">
						<li tabindex="0">
							<a>
								Hakkımızda
								<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li><a>Submenu 1</a></li>
								<li><a>Submenu 2</a></li>
							</ul>
						</li>
						<li tabindex="0">
							<a>
								Hizmetlerimiz
								<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li><a>Submenu 1</a></li>
								<li><a>Submenu 2</a></li>
							</ul>
						</li>
						<li>
							<a>Setten Kareler</a>
						</li>
						<li tabindex="0">
							<a>
								Referanslar
								<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li><a>Submenu 1</a></li>
								<li><a>Submenu 2</a></li>
							</ul>
						</li>
						<li tabindex="0">
							<a>
								Bize Ulaşın
								<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</a>
							<ul class="p-2 bg-base-100">
								<li><a>Submenu 1</a></li>
								<li><a>Submenu 2</a></li>
							</ul>
						</li>
					</ul>
					<div class="dropdown dropdown-end">
						<label tabindex="0" class="btn btn-ghost rounded-btn">Select Theme</label>
						<ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
							<li><a class='lightTheme' onClick={lightTheme}>Light</a></li>
							<li><a class='darkTheme' onClick={darkTheme}>Dark</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

function SliderD() {
	return (
		<div>
			<div class="carousel w-full">
				<div id="item1" class="carousel-item w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
				</div>
				<div id="item2" class="carousel-item w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
				</div>
				<div id="item3" class="carousel-item w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
				</div>
				<div id="item4" class="carousel-item w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
				</div>
			</div>
			<div class="flex justify-center w-full py-2 gap-2">
				<a href="#item1" class="btn btn-xs">1</a>
				<a href="#item2" class="btn btn-xs">2</a>
				<a href="#item3" class="btn btn-xs">3</a>
				<a href="#item4" class="btn btn-xs">4</a>
			</div>
		</div>
	);
}

function CardDesktop() {
	return (
		<div className='pt-10 mr-5'>
			<div class="card w-96 mx-auto bg-base-100 drop-shadow-xl">
				<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
				<div class="card-body">
					<h2 class="card-title">Aşk Dizisi</h2>
					<p>lorem ipsum fln fln</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Hemen Başvur</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function CardAdsDesktop() {
	return (
		<div className="pt-10">
			<div class="card w-96 bg-base-100 shadow-xl mx-auto">
				<figure class="px-10 pt-10">
					<img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Shoes!</h2>
					<div class="card-actions">
						<button class="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function CompanyProp() {
	return (
		<div className='company-prop w-full mt-5 flex justify-center mx-auto bg-base-200'>
			<div className='mt-5 mb-5 mr-2'>
				<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
					<div class="card-body">
						<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faBuildingShield} />
						<h2 class='card-title mx-auto'>Güvenli Hizmet</h2>
						<span>Güvenli Hizmet Anlayışımızdan dolayı tercih ediliyoruz.</span>
					</div>
				</div>
			</div>
			<div className='mt-5 mb-5 mr-2'>
				<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
					<div class="card-body">
						<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faStar} />
						<h2 class='card-title mx-auto'>5 yıldızlı Servis</h2>
						<span>Mükemmel Servis Hizmetlerimiz ile Müşterilerimiz Her Zaman Memnun.</span>
					</div>
				</div>
			</div>
			<div className='mt-5 mb-5 mr-2'>
				<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
					<div class="card-body">
						<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faSearch} />
						<h2 class='card-title mx-auto'>Güvenli Hizmet</h2>
						<span>Dasiy UI olarak yüzlerce müşterimize sağladığımız sayısız iş tecrübemizi ilk günkü hevesle tüm müşterilerimize yansıtıyoruz.</span>
					</div>
				</div>
			</div>
			<div className='mt-5 mb-5 mr-2'>
				<div class="card w-80 h-80 bg-base-100 shadow-xl text-center">
					<div class="card-body">
						<FontAwesomeIcon className='w-20 h-20 mx-auto' icon={faClock} />
						<h2 class='card-title mx-auto'>7/24 Aktif</h2>
						<span>Planlama aşamasında veya organizasyonunuz esnasında yaşamış olduğunuz herhangi bir aksaklıkta ekibimiz her zaman yanınızda.</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function Stat() {
	return (
		<div className='w-full flex justify-center mt-10 mb-5'>
			<div class="stats shadow">
				<div class="stat place-items-center">
					<div class="stat-title">Çalışan Sayımız</div>
					<div class="stat-value">300+</div>
					<div class="stat-desc">2022 Yılı Yılbaşı Sayımı</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-title">Aktif Müşeti SAyımız</div>
					<div class="stat-value text-secondary">420</div>
					<div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-title">Yeni Gelen Müşteriler</div>
					<div class="stat-value">1,200</div>
					<div class="stat-desc">↗︎ 30 (14%)</div>
				</div>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<footer class="footer items-center p-4 bg-neutral text-neutral-content">
			<div class="items-center grid-flow-col">
				<svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
				<p>Copyright © 2022 - All right reserved</p>
			</div>
			<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
				</a>
				<a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
				<a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
			</div>
		</footer>
	);
}

export { NavbarDesktop, SliderD, CardDesktop, CardAdsDesktop, CompanyProp, NavbarTop, Stat, Footer };
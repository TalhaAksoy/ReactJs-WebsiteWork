
function Slider() {
	return (
		<div className="pt-5">
			<div class="carousel w-full">
				<div id="slide1" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" class="btn btn-circle">❮</a>
						<a href="#slide2" class="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" class="btn btn-circle">❮</a>
						<a href="#slide3" class="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" class="btn btn-circle">❮</a>
						<a href="#slide4" class="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide4" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" class="btn btn-circle">❮</a>
						<a href="#slide1" class="btn btn-circle">❯</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function CardMobile(props) {
	return (
		<div className="App pt-5">
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
function NavbarMobile() {
	return (
		<div className='App sticky top-0 left-0 z-50 sm:hidden block'>
			<div class="drawer">
				<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content flex flex-col">
					<div class="w-full navbar bg-base-300">
						<div class="flex-none lg:hidden">
							<label for="my-drawer-3" class="btn btn-square btn-ghost">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
							</label>
						</div>
						<div class="flex-1 px-2 mx-2">DaisyUI</div>
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
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
					<CardMobile cardTitle='Aşk Dizisi' cardContent='Dizimize Hemen Başvurmak İster misin ?'></CardMobile>
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
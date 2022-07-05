import './App.css';
import { NavbarDesktop, SliderD, CardDesktop, CompanyProp, NavbarTop, Stat, Footer} from './DesktopCompoment';
import { NavbarMobile } from './MobileCompoment';

function App() {
	return (
		<div className='w-full body' data-theme="dark">
			<div className='Mobile sm:hidden block'>
				<NavbarMobile></NavbarMobile>
			</div>
			<div className='Desktop relative sm:block hidden w-full'>
				<NavbarTop></NavbarTop>
				<NavbarDesktop></NavbarDesktop>
				<div className='space w-full h-10'></div>
				<SliderD></SliderD>
				<div className='content w-full flex'>
					<div className='content-home w-full'> {/*Ana Sayfa*/}
						<div className='content-inner w-10/12 mx-auto'>
							<div className='line flex w-full justify-center'>
								<CardDesktop></CardDesktop>
								<CardDesktop></CardDesktop>
								<CardDesktop></CardDesktop>
							</div>
							<div className='line flex w-full justify-center'>
								<CardDesktop></CardDesktop>
								<CardDesktop></CardDesktop>
								<CardDesktop></CardDesktop>
							</div>
							<div className='line flex w-full justify-center'>
								<CardDesktop></CardDesktop>
								<CardDesktop></CardDesktop>
								<CardDesktop></CardDesktop>
							</div>
						</div>
						<CompanyProp></CompanyProp>
						<Stat></Stat>
						{/* TODO : Multi İtem Carousel Eklenecek Sliderlar Yerine */}
					</div> {/*Ana Sayfa*/}
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;

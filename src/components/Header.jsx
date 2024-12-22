import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";

const PAGES = ["Home", "About", "Contacts", "Blog"];
const Header = ({
	selectedPage,
	setSelectedPage,
	viewBurger,
	setViewBurger,
	searchTerm,
	setSearchTerm,
}) => {
	return (
		<div className="flex justify-center items-center border-b gap-60 px-4 py-8 lg:justify-center lg:gap-56 xl:gap-14">
			<div className="min-w-[65px]">
				<img
					src="/Logo.svg"
					alt="logo"
					className="cursor-pointer"
					onClick={() => setSelectedPage("Home")}
				/>
			</div>
			<div className="relative hidden lg:inline-block">
				<input
					type="text"
					placeholder="Search"
					className="outline-none bg-[#f5f5f5] py-5 px-12 rounded-lg text-sm"
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<Search
					size={24}
					strokeWidth={1.5}
					className="absolute top-0 left-0 opacity-40 m-4"
				/>
			</div>
			<div className="hidden xl:inline-block">
				<ul className="flex gap-[52px] font-medium">
					{PAGES.map(page => (
						<li
							key={page}
							className={`cursor-pointer ${
								selectedPage === page ? "" : "opacity-30"
							}`}
							onClick={() => setSelectedPage(page)}
						>
							{page}
						</li>
					))}
				</ul>
			</div>
			<div className="hidden xl:flex gap-6">
				<Heart size={25} strokeWidth={1.5} className="cursor-pointer" />
				<ShoppingCart
					size={25}
					strokeWidth={1.5}
					className="cursor-pointer"
					onClick={() => setSelectedPage("Cart")}
				/>
				<User size={25} strokeWidth={1.5} className="cursor-pointer" />
			</div>
			<button className="xl:hidden" onClick={() => setViewBurger(!viewBurger)}>
				<Menu size={32} strokeWidth={1.5} />
			</button>
		</div>
	);
};

export default Header;

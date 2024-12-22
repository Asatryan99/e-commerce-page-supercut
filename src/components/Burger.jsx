import { Heart, ShoppingCart, User } from "lucide-react";

const PAGES = ["Home", "About", "Contacts", "Blog"];
const Burger = ({ selectedPage, setSelectedPage, setViewBurger }) => {
	return (
		<div className="xl:hidden">
			<ul className="flex-col text-center font-medium">
				{PAGES.map(page => (
					<li
						key={page}
						className={`border-b py-2 cursor-pointer font-semibold ${
							selectedPage === page ? "bg-[#f5f5f5]" : "opacity-30"
						}`}
						onClick={() => {
							setSelectedPage(page);
							setViewBurger(false);
						}}
					>
						{page}
					</li>
				))}
			</ul>
			<div className="flex justify-around py-2">
				<Heart size={30} strokeWidth={1.5} className="cursor-pointer" />
				<ShoppingCart
					size={30}
					strokeWidth={1.5}
					className="cursor-pointer"
					onClick={() => {
						setSelectedPage("Cart");
						setViewBurger(false);
					}}
				/>
				<User size={30} strokeWidth={1.5} className="cursor-pointer" />
			</div>
		</div>
	);
};

export default Burger;

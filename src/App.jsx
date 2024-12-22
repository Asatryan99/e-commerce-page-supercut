import { useEffect, useState } from "react";

import Burger from "@/components/Burger";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartPage from "@/pages/CartPage";
import HomePage from "@/pages/HomePage";

const App = () => {
	const [selectedPage, setSelectedPage] = useState("Home");
	const [searchTerm, setSearchTerm] = useState("");
	const [viewBurger, setViewBurger] = useState(false);
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem("cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});
	const [favorite, setFavorite] = useState([]);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<div>
			<Header
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
				viewBurger={viewBurger}
				setViewBurger={setViewBurger}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			{viewBurger && (
				<Burger
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
					setViewBurger={setViewBurger}
				/>
			)}
			{selectedPage === "Home" && (
				<HomePage
					searchTerm={searchTerm}
					cart={cart}
					setCart={setCart}
					favorite={favorite}
					setFavorite={setFavorite}
				/>
			)}
			{selectedPage === "Cart" && <CartPage cart={cart} setCart={setCart} />}

			<Footer />
		</div>
	);
};

export default App;

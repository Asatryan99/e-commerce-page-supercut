import Preview from "@/components/Preview";
import Products from "@/components/Products";

const HomePage = ({ searchTerm, cart, setCart, favorite, setFavorite }) => {
	return (
		<div>
			{!searchTerm && <Preview searchTerm={searchTerm} />}
			<Products
				searchTerm={searchTerm}
				cart={cart}
				setCart={setCart}
				favorite={favorite}
				setFavorite={setFavorite}
			/>
		</div>
	);
};

export default HomePage;

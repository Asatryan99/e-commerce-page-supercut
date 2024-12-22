import { database } from "@/database";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Products = ({ searchTerm, cart, setCart, favorite, setFavorite }) => {
	const [filteredItems, setFilteredItems] = useState(database);

	useEffect(() => {
		if (searchTerm) {
			const filtered = database.filter(item =>
				item.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredItems(filtered);
		} else {
			setFilteredItems(database);
		}
	}, [searchTerm]);

	const handlerBuyNow = item => {
		const existingItem = cart.find(cartItem => cartItem.id === item.id);
		if (existingItem) {
			existingItem.count += 1;
			setCart([...cart]);
		} else {
			item.count = 1;
			setCart([...cart, item]);
		}
	};

	const handlerFavorite = item => {
		const existingItem = favorite.find(
			favoriteItem => favoriteItem.id === item.id
		);
		if (existingItem) {
			setFavorite(favorite.filter(favoriteItem => favoriteItem.id !== item.id));
		} else {
			setFavorite([...favorite, item]);
		}
	};

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-4 my-6">
			{filteredItems.length === 0 ? (
				<p className="col-span-4 text-center text-3xl font-black">Not Found</p>
			) : (
				filteredItems.map(item => (
					<div
						key={item.id}
						className="flex flex-col justify-center items-center bg-[#f6f6f6] pt-16 pb-6 px-3 rounded-lg relative"
					>
						<button>
							<Heart
								size={32}
								strokeWidth={1.5}
								className={`absolute text-[#909090] top-0 right-0 mt-6 mr-3 transition-all ${
									favorite.includes(item)
										? "scale-125 text-red-800 fill-red-800"
										: ""
								}`}
								onClick={() => handlerFavorite(item)}
							/>
						</button>
						<img
							src={`${item.img}`}
							alt={item.title}
							className="mx-[30px] mb-2"
						/>
						<p className="font-medium overflow-hidden max-h-12 mb-4 text-center">
							{item.title}
						</p>
						<p className="font-semibold text-2xl mb-4">${item.price}</p>
						<button
							className="bg-black text-white py-3 px-10 rounded-lg font-medium text-nowrap active:bg-green-600 transition-all"
							onClick={() => handlerBuyNow(item)}
						>
							Buy Now
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default Products;

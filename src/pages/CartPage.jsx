import { Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

const CartPage = ({ cart, setCart }) => {
	const [subtotal, setSubtotal] = useState(null);
	const [tax, setTax] = useState(null);
	const [total, setTotal] = useState(null);

	useEffect(() => {
		const subtotal = cart.reduce(
			(acc, item) => acc + item.price * item.count,
			0
		);
		setSubtotal(subtotal);
		const taxT = Number((subtotal * 0.1).toFixed(2));
		setTax(taxT);

		const totalT = Number((subtotal + taxT).toFixed(2));
		setTotal(totalT);
	}, [cart]);

	const handlerDeleteItem = id => {
		setCart(cart.filter(item => id !== item.id));
	};

	const handleDecrease = id => {
		setCart(
			cart.map(item =>
				item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
			)
		);
	};

	const handleIncrease = id => {
		setCart(
			cart.map(item =>
				item.id === id ? { ...item, count: item.count + 1 } : item
			)
		);
	};

	return (
		<div className="flex flex-col lg:flex-row justify-center items-center px-4 py-10 lg:items-start">
			<div className="mb-10 lg:mr-20">
				<div className="flex-col">
					<h3 className="font-semibold mb-10 text-2xl">Shopping Cart</h3>
					{cart.map(item => (
						<div
							className="flex items-center justify-between border-b py-10"
							key={item.id}
						>
							<img
								src={item.img}
								alt={item.title}
								className="min-w-[90px] min-h-[90px] m-4"
							/>
							<div>
								<p className="font-medium max-h-12 max-w-40 overflow-hidden mb-4">
									{item.title}
								</p>
								<div className="flex gap-2 items-center">
									<button onClick={() => handleDecrease(item.id)}>
										<Minus />
									</button>
									<div className="px-4 py-2 border border-[#d9d9d9] rounded items-center justify-center">
										{item.count}
									</div>
									<button onClick={() => handleIncrease(item.id)}>
										<Plus />
									</button>
									<p className="mx-6 font-medium text-2xl">${item.price}</p>
									<button onClick={() => handlerDeleteItem(item.id)}>
										<X />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col py-14 px-4 border rounded-lg gap-4 min-w-full lg:min-w-[40%] min-h-full items-center">
				<h3 className="font-semibold mb-10 text-2xl">Order Summary</h3>
				<div className="flex justify-between items-center w-full text-lg">
					<p className="font-semibold">Subtotal</p>
					<p className="font-semibold">${subtotal}</p>
				</div>
				<div className="flex justify-between items-center w-full text-lg">
					<p className="">Tax</p>
					<p className="font-semibold">${tax}</p>
				</div>
				<div className="flex justify-between items-center w-full text-lg mb-12">
					<p className="font-semibold">Total</p>
					<p className="font-semibold">${total}</p>
				</div>

				<button className="py-4 px-40 text-white bg-black font-medium rounded-lg">
					Checkout
				</button>
			</div>
		</div>
	);
};

export default CartPage;

const Preview = () => {
	return (
		<div className="flex flex-col items-center text-center bg-[#211C24] text-white overflow-hidden px-4 lg:flex-row justify-center transition-all">
			<div className="pt-[88px] lg:pt-0 lg:mr-40">
				<p className="opacity-40 text-2xl font-semibold mb-4">Pro.Beyond.</p>
				<p className="text-7xl font-thin mb-4">
					IPhone 14 <span className="font-semibold">Pro Max</span>
				</p>
				<p className="opacity-40 text-base font-medium mb-8">
					Created to change everything for the better. For everyone
				</p>
				<button className="border py-4 px-14 font-semibold rounded-lg mb-12 opacity-80 hover:opacity-100 transition-all duration-200">
					Shop Now
				</button>
			</div>
			<div>
				<img
					src="/images/preview-mob-iphone.png"
					alt="iphone"
					className="lg:hidden"
				/>
				<img
					src="/images/preview-iphone.png"
					alt="iphone"
					className="hidden lg:inline-block"
				/>
			</div>
		</div>
	);
};

export default Preview;

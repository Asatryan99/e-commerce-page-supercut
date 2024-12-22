const Footer = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:justify-around items-top text-center bg-black text-white px-8 py-12">
			<div className="lg:max-w-96">
				<div className="flex justify-center mb-4 lg:mb-8">
					<svg
						width="66"
						height="23"
						viewBox="0 0 66 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.1826 16.08C13.1266 17.352 8.016 17.5 6.096 17.5C2.304 17.5 0 15.052 0 11.5C0 7.972 2.328 5.524 6.096 5.524C7.92 5.524 13.1746 6.72 14.2306 7.992L8.832 9.484C8.064 8.644 7.224 8.308 6.096 8.308C4.488 8.308 3.096 9.604 3.096 11.5C3.096 13.564 4.392 14.716 6.096 14.716C7.104 14.716 8.256 14.332 8.88 13.54L14.1826 16.08Z"
							fill="white"
						/>
						<path
							d="M28.8035 6.312L21.8195 22.872H18.3875L20.6195 17.712L15.7955 6.312H19.2035L21.6035 12.408L22.2995 14.592L22.9715 12.408L25.3715 6.312H28.8035Z"
							fill="white"
						/>
						<path
							d="M36.6494 8.856C34.9214 8.856 33.6734 10.176 33.6734 11.976C33.6734 13.752 34.9214 15.072 36.6494 15.072C38.3294 15.072 39.4814 13.824 39.4814 11.976C39.4814 10.104 38.3294 8.856 36.6494 8.856ZM30.6734 17.592V0H33.7214V6.264L33.6734 7.08C34.1774 6.408 35.7134 6.024 36.7694 6.024C40.5374 6.024 42.6495 8.784 42.6495 11.976C42.6495 15.576 40.4894 17.904 36.7694 17.904C35.8574 17.904 34.3934 17.472 33.7934 16.752L33.8174 17.4V17.592H30.6734Z"
							fill="white"
						/>
						<path
							d="M55.3377 16.152C54.4497 17.304 52.4098 18 50.6578 18C46.8418 18 44.7058 15.384 44.7058 12C44.7058 8.544 46.8178 6.024 50.5378 6.024C54.2338 6.024 56.3457 8.544 56.3457 12C56.3457 12.384 56.3457 12.624 56.3217 12.96H47.8258C47.9938 14.376 49.0498 15.264 50.6578 15.264C51.8098 15.264 52.8897 14.88 53.5617 14.136L55.3377 16.152ZM47.8738 10.896H53.1537C53.0097 9.624 51.9538 8.76 50.5378 8.76C49.1218 8.76 47.9938 9.624 47.8738 10.896Z"
							fill="white"
						/>
						<path
							d="M64.7516 9.144C64.1276 8.928 63.5756 8.856 62.9276 8.856C62.4956 8.856 62.1356 8.88 61.7996 9.024V17.592H58.7036V6.816C59.6396 6.336 61.2476 6 62.8076 6C63.4796 6 64.6796 6.072 65.3996 6.336L64.7516 9.144Z"
							fill="white"
						/>
					</svg>
				</div>
				<p className="text-[#cfcfcf] font-normal mb-8">
					We are a residential interior design firm located in Portland. Our
					boutique-studio offers more than
				</p>
			</div>
			<div>
				<h3 className="font-semibold mb-2 text-nowrap">Services</h3>
				<ul className="text-[#cfcfcf] space-y-2 mb-8 text-nowrap">
					<li>Bonus program</li>
					<li>Gift cards</li>
					<li>Credit and payment</li>
					<li>Service contracts</li>
					<li>Non-cash account</li>
					<li>Payment</li>
				</ul>
			</div>
			<div>
				<h3 className="font-semibold mb-2 text-nowrap">
					Assistance to the buyer
				</h3>
				<ul className="text-[#cfcfcf] space-y-2 text-nowrap">
					<li>Find an order</li>
					<li>Terms of delivery</li>
					<li>Exchange and return of goods</li>
					<li>Guarantee</li>
					<li>Frequently asked questions</li>
					<li>Terms of use of the site</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

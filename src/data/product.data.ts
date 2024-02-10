export interface ProductType {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
}

export const products: ProductType[] = [
	{
		id: 1,
		name: "Smartphone",
		description:
			"A powerful smartphone with high-resolution display and advanced features.",
		price: 599.99,
		image: "https://www.zdnet.com/a/img/resize/06119597d8fde27e3074dc3bb4a9ce0f1851280a/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=900&width=1200",
	},
	{
		id: 2,
		name: "Laptop",
		description:
			"A lightweight laptop with a fast processor and long battery life.",
		price: 899.99,
		image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/laptops-2048px-5607.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
	},
	{
		id: 3,
		name: "Wireless Headphones",
		description:
			"Premium wireless headphones with active noise cancellation technology.",
		price: 249.99,
		image: "https://images-cdn.ubuy.co.in/63ec2ab159725522bb0a8433-prtukyt-6s-wireless-bluetooth-headphones.jpg",
	},
	{
		id: 4,
		name: "Smartwatch",
		description:
			"A sleek smartwatch with fitness tracking and heart rate monitoring.",
		price: 199.99,
		image: "https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg",
	},
	{
		id: 5,
		name: "Digital Camera",
		description:
			"A high-resolution digital camera with advanced autofocus and image stabilization.",
		price: 799.99,
		image: "https://utopiacam.com/wp-content/uploads/2022/09/ZV1.jpg",
	},
	{
		id: 6,
		name: "Gaming Console",
		description:
			"A powerful gaming console with 4K graphics support and online multiplayer capabilities.",
		price: 499.99,
		image: "https://cdn.thewirecutter.com/wp-content/media/2023/11/gamingconsoles-2048px-00633.jpg",
	},
	{
		id: 7,
		name: "Tablet",
		description:
			"A versatile tablet with a large touchscreen display and long battery life.",
		price: 399.99,
		image: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
	},
	{
		id: 8,
		name: "Wireless Speaker",
		description:
			"High-fidelity wireless speaker with immersive sound quality and voice assistant support.",
		price: 149.99,
		image: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg",
	},
	{
		id: 9,
		name: "Fitness Tracker",
		description:
			"An advanced fitness tracker with GPS tracking and heart rate monitoring.",
		price: 129.99,
		image: "https://cdn.vox-cdn.com/thumbor/fLLSMVSEkx4HA66l9WIFgwX41-I=/0x0:2040x1360/768x512/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24259072/226428_Garmin_Venu_Sq_2_AKrales_0152.jpg",
	},
	{
		id: 10,
		name: "External Hard Drive",
		description:
			"A reliable external hard drive with large storage capacity and fast data transfer speeds.",
		price: 119.99,
		image: "https://cdn.thewirecutter.com/wp-content/media/2023/05/externalhardrives-2048px-09450.jpg?auto=webp&quality=75&crop=3:2&width=1024",
	},
];

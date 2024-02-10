import { ProductType, products } from "./product.data";

export interface CategoryType {
	id: number;
	name: string;
	image: string;
	description: string;
	products: ProductType[];
}

export const categories: CategoryType[] = [
	{
		id: 1,
		name: "Electronics",
		image: "https://thumbs.dreamstime.com/b/electronics-store-flat-design-long-shadow-glyph-icon-household-equipment-online-shop-category-small-major-domestic-appliance-187368856.jpg",
		description: "Explore the latest electronic gadgets and devices.",
		products: [
			products[0], // Smartphone
			products[1], // Laptop
			products[2], // Wireless Headphones
			products[3], // Smartwatch
			products[4], // Digital Camera
		],
	},
	{
		id: 2,
		name: "Gaming",
		image: "https://wtxnews.com/wp-content/uploads/2023/04/DualSense-Xbox-3f59-wcqpVD.jpeg",
		description:
			"Immerse yourself in the world of gaming with top-notch consoles and accessories.",
		products: [
			products[5], // Gaming Console
		],
	},
	{
		id: 3,
		name: "Tablets",
		image: "https://res.cloudinary.com/teepublic/image/private/s--Xet6T5rD--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1627976811/production/designs/23440447_0.jpg",
		description:
			"Discover powerful and versatile tablets for work and entertainment.",
		products: [
			products[6], // Tablet
		],
	},
	{
		id: 4,
		name: "Audio",
		image: "https://www.fyneaudio.com/wp-content/uploads/2021/08/F500sp-category-web-tile.jpg",
		description:
			"Experience superior sound quality with our range of audio devices and accessories.",
		products: [
			products[2], // Wireless Headphones
			products[8], // Wireless Speaker
		],
	},
	{
		id: 5,
		name: "Wearable Tech",
		image: "https://www.42gears.com/wp-content/uploads/2020/07/IomTWearable-Technology-Featured-1.png",
		description:
			"Stay connected and track your fitness goals with our wearable technology.",
		products: [
			products[3], // Smartwatch
			products[9], // Fitness Tracker
		],
	},
	{
		id: 6,
		name: "Computers",
		image: "https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_desktop_computers.jpg",
		description:
			"Find the perfect computer to suit your needs, from powerful desktops to sleek laptops.",
		products: [
			products[1], // Laptop
			products[6], // Tablet
		],
	},
	{
		id: 7,
		name: "Cameras",
		image: "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-types-feature-825x465.jpg",
		description:
			"Capture life's moments in stunning detail with our range of digital cameras.",
		products: [
			products[4], // Digital Camera
		],
	},
	{
		id: 8,
		name: "Smart Home",
		image: "https://iotnews.asia/wp-content/uploads/2018/10/All-Categories-of-Smart-Home-Devices-Forecast-to-Deliver-Double-Digit-Growth-Through-2022.jpg",
		description:
			"Transform your living space with cutting-edge smart home devices and technology.",
		products: [
			products[8], // Wireless Speaker (can be used in smart home setups)
		],
	},
	{
		id: 9,
		name: "Storage",
		image: "https://windowsreport.com/wp-content/uploads/2020/10/usb-mass-storage-has-a-driver-problem-1200x1200.jpg",
		description:
			"Keep your files safe and accessible with our range of storage solutions.",
		products: [
			products[10], // External Hard Drive
		],
	},
	{
		id: 10,
		name: "Accessories",
		image: "https://www.lancetrend.com/wp-content/uploads/2022/09/phone-accessories-2.jpg",
		description:
			"Complete your setup with our collection of essential tech accessories.",
		products: [
			products[2], // Wireless Headphones
			products[8], // Wireless Speaker
		],
	},
];

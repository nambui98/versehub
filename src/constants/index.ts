export const Anchors = {
	Services: "services",
	Products: "products",
	// Jobs: "jobs",
	Contact: "contact",
};

export const navigations = [
	{ label: "Services", value: "/#services" },
	{ label: "Products", value: "/#products" },
	{ label: "Jobs", value: "/jobs" },
	{ label: "Get in touch", value: "/#contact" },
];

export const secondLayoutNavigation = [
	{ label: "Jobs", href: "/jobs" },
	{ label: "Blogs", href: "/blogs" },
	{ label: "Contact us", href: "/contact" },
];

export const FOOTER = {
	location: {
		icon: "/assets/icons/location-footer.svg",
		desc: "Hanoi, Vietnam",
	},
	mail: { icon: "/assets/icons/sms.svg", desc: "info@versehub.io" },
	phone: { icon: "/assets/icons/call.svg", desc: "(+84) 866 174 689" },
	social: [
		{
			icon: "/assets/icons/facebook.svg",
			href: "https://www.facebook.com/Versehub.io/",
		},
		{
			icon: "/assets/icons/linkedIn.svg",
			href: "https://www.linkedin.com/company/versehub/",
		},		
	],
	links: [
		{ desc: "Privacy Policy", href: "#" },
		{ desc: "Terms & Conditions", href: "#" },
		{ desc: "Cookie Policy", href: "#" },
	],
};

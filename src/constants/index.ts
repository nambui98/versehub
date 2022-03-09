export const Anchors = {
	Services: "services",
	Products: "products",
	Partners: "partners",
	Team: "team",
	Jobs: "jobs",
	Contact: "contact",
};

export const navigations = [
	{ label: "Services", value: "#services" },
	{ label: "Products", value: "#products" },
	{ label: "Partners", value: "#partners" },
	{ label: "Team", value: "#team" },
	{ label: "Jobs", value: "/jobs" },
	{ label: "Contact", value: "#contact" },
];

export const secondLayoutNavigation = [
	{ label: "Jobs", href: "/jobs" },
	{ label: "Blogs", href: "/blogs" },
	{ label: "Contact us", href: "/contact" },
];

export const FOOTER = {
	location: {
		icon: "/assets/footer/location.svg",
		// desc: "71 Knighthead point, London, England, E14, BSS",
		desc: "London, England",
	},
	mail: { icon: "/assets/footer/mail.svg", desc: "info@versehub.io" },
	social: [
		{
			icon: "/assets/footer/linkedIn.svg",
			href: "https://www.linkedin.com/company/versehub",
		},
		{
			icon: "/assets/footer/twitter.svg",
			href: "https://twitter.com/NextVerseOrg",
		},
		{
			icon: "/assets/footer/facebook.svg",
			href: "https://www.facebook.com/nextverse.org",
		},
		{
			icon: "/assets/footer/medium.svg",
			href: "https://medium.com/@nextverse.org",
		},
	],
	links: [
		{ desc: "Privacy Policy", href: "#" },
		{ desc: "Terms & Conditions", href: "#" },
		{ desc: "Cookie Policy", href: "#" },
	],
};

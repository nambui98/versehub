import { Typography } from "@mui/material";

export const MISSION = {
	title: "our mission",
	src: "/assets/journey.png",
	desc: [
		`We aim to win the future  by contributing to the growth of Web3.0 - the Third Generation of the Internet.`,
		`By creating an exceptional metaverse that allow people to collaborate, create, exchange, and take ownership of their digital identity and assets, we reshape the way people approach social communication.`,
	],
};

export const VALUES = {
	title: "core values",
	items: [
		{
			title: "Our people",
			image: "/assets/icons/value1.png",
			content: [
				"Think big and have long term mindset to build great products.",
				"Be curious: keep asking questions, keep pushing personal knowledge borderline, go above and beyond and deliver to customers what is more than their expectation.",
				"Be helpful: play nice to each other, help other learn and grow, no one is left behind, make new comers feel belong and included.",
			],
		},
		{
			title: "Our products",
			image: "/assets/icons/value2.png",
			content: [
				"We thrive on creating a virtual space that offers an endlessly extraordinary experience, makes everyone feel included, connected, and uplifted as our metaverse unfolds.",
				"Step into this futuristic dimension because it is right in your hands and ready to be turned into reality.",
			],
		},
		{
			title: "Our service",
			image: "/assets/icons/value3.png",
			content: [
				"We pride ourselves on delivering a proactive service designed to ensure we meet our customers, clients and partners' expectation consistently. Becoming our member means your work will help businesses and communities achieve their most ambitious business plans, solve their biggest challenges and harness incredible success in this metaverse transformation.",
			],
		},
	],
};

export const BENEFIT = {
	title: "benefits",
	desc: `There's life at work and life outside of work. We want everyone to be healthy, travel often, get time to give back, and have the all the resources and support they need.`,
	items: [
		{
			src: "/assets/icons/value6.svg",
			desc: `Comprehensive\ninsurance`,
		},
		{ src: "/assets/icons/value4.svg", desc: `Entertainment` },
		{ src: "/assets/icons/value2.svg", desc: `Vacation twice a year` },
		{ src: "/assets/icons/value5.svg", desc: `Salary review twice a year` },
		{
			src: "/assets/icons/value3.svg",
			desc: `Flexible working hours`,
		},
		{ src: "/assets/icons/value7.svg", desc: `Learning and development` },
	],
};

export const JOB = {
	title: 'opening jobs',
	items: [
		{
			title: 'Frontend Developer (Fresher Unreal)',
			id: 1,
			type: 'Engineer',
			time: '15/01/2023 - 15/02/2023',
			body: <>
				<Typography variant="h3">Address:</Typography>
				<Typography>VERSEHUB TECHNOLOGY JOINT STOCK COMPANY</Typography>
				<Typography>ADG Building, 37 Le Van Thiem, Nhan Chinh, Thanh Xuan, Hanoi.</Typography>
				<br></br>
				<Typography variant="h3">Working hours:</Typography>
				<ul>
					<li>Morning: 9:00 AM - 12:00 PM</li>
					<li>Afternoon: 1:00 PM - 6:00 PM</li>
					<li>Off on Saturday and Sunday</li>
				</ul>
				<Typography variant="h3">Job description:</Typography>
				<ul>
					<li>Developing features using Unreal Engine 4</li>
					<li>Supporting other teams in analyzing and building products.</li>
				</ul>
				<Typography variant="h3">Requirements:</Typography>
				<ul>
					<li>Basic knowledge of Unreal.</li>
					<li>Programming mindset and system logic thinking</li>
					<li>Willingness to learn and adapt to new programming languages and technologies</li>
					<li>Self-motivated, careful and responsible work attitude</li>
					<li>(Not mandatory) Basic knowledge of system architecture is a plus</li>
					<li>Priority given to recent graduates.</li>
				</ul>
				<Typography variant="h3">Benefits:</Typography>
				<ul>
					<li>Salary range of 8-12 million VND</li>
					<li>Salary review twice a year.</li>
					<li>Learning from professionals with 10 years of experience in the field</li>
					<li>Open work environment</li>
					<li>Company trip twice a year</li>
					<li>Participation in team building and project kickoff activities</li>
				</ul>
				<Typography variant="h3">CONTACT</Typography>
				<ul>
					<li>Zalo/Telegram: 0967.913.863</li>
					<li>Mail: hr@versehub.io</li>
					<li>Skype: teasun1802</li>
				</ul>
			</>
		}
	]
}

export const CONTACT = {
	title: `"A global team with metaversal mission"`,
	phone: "0967 913 863",
	email: "hr@versehub.io",
};

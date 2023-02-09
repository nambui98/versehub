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
			desc: `Flexible working hours\n(9am - 6pm)`,
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
				<Typography variant="h3">Địa điểm làm việc:</Typography>
				<Typography>CÔNG TY CỔ PHẦN CÔNG NGHỆ VERSEHUB VIỆT NAM</Typography>
				<Typography>Tòa ADG, số 37 Lê Văn Thiêm, Nhân Chính, Thanh Xuân, Hà Nội.</Typography>
				<br></br>
				<Typography variant="h3">Thời gian làm việc:</Typography>
				<ul>
					<li>Sáng: 9h00-12h00</li>
					<li>Chiều: 13h00-18h00</li>
					<li>Nghỉ Thứ 7 và Chủ nhật hàng tuần.</li>
				</ul>
				<Typography variant="h3">Mô tả công việc:</Typography>
				<ul>
					<li>Phát triển các tính năng sử dụng Unreal Engine 4</li>
					<li>Hỗ trợ các team khác trong việc phân tích và xây dựng sản phẩm.</li>
				</ul>
				<Typography variant="h3">Yêu cầu:</Typography>
				<ul>
					<li>Kiến thức cơ bản về Unreal.</li>
					<li>Tư duy lập trình, tư duy logic hệ thống</li>
					<li>Ham học hỏi & có khả năng thích nghi với Ngôn ngữ lập trình và Công nghệ mới</li>
					<li>Tinh thần tự giác, làm việc cẩn thận, trách nhiệm</li>
					<li>(Không bắt buộc) Kiến thức cơ bản về kiến trúc hệ thống là điểm cộng</li>
					<li>Ưu tiên sinh viên mới ra trường.</li>
				</ul>
				<Typography variant="h3">Đãi ngộ:</Typography>
				<ul>
					<li>Mức lương 8-12tr</li>
					<li>Đánh giá lương 2 lần/năm.</li>
					<li>Học hỏi với những người có 10 năm làm việc trong nghề</li>
					<li>Môi trường làm việc mở</li>
					<li>Du lịch với công ty 2 lần 1 năm</li>
					<li>Tham gia các hoạt động team building, kickoff dự án</li>
				</ul>
				<Typography variant="h3">Liên hệ</Typography>
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

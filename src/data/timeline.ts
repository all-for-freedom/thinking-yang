// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "Studying Information and Computing Science",
		description:
			"Currently studying Information and Computing Science, focusing on numerical analysis and machine learning.",
		type: "education",
		startDate: "2023-09-01",
		location: "Hunan",
		organization: "Hunan Normal University",
		skills: ["Python", "C++", "MATLAB"],
		achievements: ["Current GPA: 3.9/5.0"],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "win-3rd-in-balta",
		title: "Baltamatica Scientific Competition",
		description: "Win 3rd prize in Baltamatica Scientific Competition",
		type: "achievement",
		startDate: "2023-11-14",
		location: "Beijing",
		organization: "Baltamatica",
		skills: ["C++", "Baltamatica"],
		achievements: ["build a useful plugin for baltamatica"],
		icon: "/icons/baltamatica.png",
		color: "#059669",
		featured: true,
	},
	{
		id: "high-school-graduation",
		title: "High School Graduation",
		description:
			"Graduated from high school with unexpected excellent grades and was admitted to the Information and Computing Science program at Hunan Normal University.",
		type: "education",
		startDate: "2020-09-01",
		endDate: "2023-06-30",
		location: "Wuxi, Jinagsu",
		organization: "Jiangsu Xishan Senior High School",
		achievements: [
			"College entrance exam score: 620",
			"Received municipal model student award",
			"Won provincial second prize in math competition",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

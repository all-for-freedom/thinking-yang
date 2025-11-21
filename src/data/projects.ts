// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category:
		| "web"
		| "mobile"
		| "desktop"
		| "plugin"
		| "development tool"
		| "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "thinking-yang",
		title: "Thinking Yang",
		description: "Self Blog Website",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "in-progress",
		liveDemo: "https://all-for-freedom.github.io/thinking-yang/",
		sourceCode: "https://github.com/all-for-freedom/thinking-yang", // 更改为GitHub链接
		visitUrl: "https://all-for-freedom.github.io/thinking-yang/", // 添加前往项目链接
		startDate: "2025-10-28",
		// endDate: "2077-13-32",
		featured: true,
		tags: ["Blog", "Open Source"],
	},
	{
		id: "auto-header-template",
		title: "Auto Header Template",
		description: "Auto Header Template for VS Code and Cursor",
		image: "",
		category: "plugin",
		techStack: ["TypeScript"],
		status: "completed",
		liveDemo: "https://github.com/all-for-freedom/auto-header-template",
		sourceCode: "https://github.com/all-for-freedom/auto-header-template", // 更改为GitHub链接
		visitUrl: "https://github.com/all-for-freedom/auto-header-template", // 添加前往项目链接
		startDate: "2025-10-28",
		endDate: "2025-11-01",
		featured: false,
		tags: ["Plugin", "Open Source"],
	},
	{
		id: "balta-toolkit",
		title: "Baltamatica Toolkit",
		description: "A small collection of tools for Baltamatica",
		image: "",
		category: "plugin",
		techStack: ["C++", "C"],
		status: "completed",
		liveDemo: "https://github.com/all-for-freedom/balta-toolkit",
		sourceCode: "https://github.com/all-for-freedom/balta-toolkit", // 更改为GitHub链接
		visitUrl: "https://github.com/all-for-freedom/balta-toolkit", // 添加前往项目链接
		startDate: "2025-10-28",
		// endDate: "2025-11-01",
		featured: false,
		tags: ["Mathematics", "Plugin", "Open Source"],
	},
	{
		id: "balta-operators",
		title: "Baltamatica Operators",
		description: "A small collection of lops for Baltamatica",
		image: "",
		category: "plugin",
		techStack: ["C++", "C"],
		status: "planned",
		liveDemo: "",
		sourceCode: "", // 更改为GitHub链接
		visitUrl: "", // 添加前往项目链接
		startDate: "2025-11-12",
		// endDate: "2025-11-01",
		featured: false,
		tags: ["Mathematics", "Plugin", "Open Source"],
	},
	{
		id: "scriptperf",
		title: "Script Performance",
		description: "A tool for measuring the performance of scripts",
		image: "",
		category: "development tool",
		techStack: ["Python"],
		status: "in-progress",
		liveDemo: "https://github.com/all-for-freedom/scriptperf",
		sourceCode: "https://github.com/all-for-freedom/scriptperf", // 更改为GitHub链接
		visitUrl: "https://github.com/all-for-freedom/scriptperf", // 添加前往项目链接
		startDate: "2025-10-28",
		// endDate: "2025-11-01",
		featured: false,
		tags: ["Performance", "Open Source"],
	},
	{
		id: "bounce_boardgame",
		title: "Bounce Boardgame",
		description: "A boardgame about bouncing balls together",
		image: "",
		category: "mobile",
		techStack: ["Dart", "Kotlin", "Swift", "C++", "C"],
		status: "planned",
		liveDemo: "https://github.com/all-for-freedom/bounce_boardgame",
		sourceCode: "https://github.com/all-for-freedom/bounce_boardgame", // 更改为GitHub链接
		visitUrl: "https://github.com/all-for-freedom/bounce_boardgame", // 添加前往项目链接
		startDate: "2025-10-28",
		// endDate: "2025-11-01",
		featured: true,
		tags: ["Flutter", "Open Source"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};

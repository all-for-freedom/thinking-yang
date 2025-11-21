// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category:
		| "Scientific Computing"
		| "frontend"
		| "backend"
		| "database"
		| "tools"
		| "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Scientific Computing Skills
	{
		id: "baltamatica",
		name: "Baltamatica",
		description:
			"A domestically developed scientific computing software with similar functionality to MATLAB, designed for numerical computation and algorithm development.",
		icon: "/icons/baltamatica.png",
		category: "Scientific Computing",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#87CEEB",
	},
	{
		id: "matlab",
		name: "MATLAB",
		description:
			"A high-level programming language and interactive environment for numerical computation, algorithm development, and data visualization.",
		icon: "/icons/matlab.png",
		category: "Scientific Computing",
		level: "beginner",
		experience: { years: 1, months: 6 },
		color: "#0076A8",
	},
	{
		id: "fortran",
		name: "Fortran",
		description:
			"A general-purpose compiled programming language particularly suited for numerical computing and scientific computing.",
		icon: "logos:fortran",
		category: "Scientific Computing",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#734F96",
	},
	{
		id: "r",
		name: "R",
		description:
			"A programming language and free software environment for statistical computing and graphics.",
		icon: "logos:r-lang",
		category: "Scientific Computing",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#276DC3",
	},
	{
		id: "wolfram",
		name: "Wolfram Language",
		description:
			"A multi-paradigm programming language developed by Wolfram Research, primarily used for symbolic and numeric computation in Mathematica.",
		icon: "/icons/wolfram.png",
		category: "Scientific Computing",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#DD1100",
	},

	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["thinking-yang"],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["thinking-yang"],
		color: "#3178C6",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"A modern static site generator supporting multi-framework integration and excellent performance.",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["thinking-yang"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building modern user interfaces.",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["thinking-yang"],
		color: "#06B6D4",
	},
	{
		id: "dart",
		name: "Dart",
		description:
			"A modern programming language developed by Google, mainly used for Flutter mobile app development.",
		icon: "logos:dart",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["bounce_boardgame"],
		color: "#0175C2",
	},

	// Backend Skills
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#ED8B00",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#00599C",
	},
	{
		id: "c",
		name: "C",
		description:
			"A low-level systems programming language, the foundation for operating systems and embedded systems development.",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#A8B9CC",
	},
	{
		id: "kotlin",
		name: "Kotlin",
		description:
			"A modern programming language developed by JetBrains, fully compatible with Java, the preferred choice for Android development.",
		icon: "logos:kotlin-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["bounce_boardgame"],
		color: "#7F52FF",
	},
	{
		id: "swift",
		name: "Swift",
		description:
			"A modern programming language developed by Apple for iOS, macOS, watchOS, and tvOS development.",
		icon: "logos:swift",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["bounce_boardgame"],
		color: "#FA7343",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#4479A1",
	},
	{
		id: "mongodb",
		name: "MongoDB",
		description:
			"A document-oriented NoSQL database with a flexible data model.",
		icon: "logos:mongodb-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#47A248",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description:
			"JetBrains flagship IDE, the preferred tool for Java development with powerful intelligent coding assistance.",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
		icon: "logos:pycharm",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 0 },
		color: "#21D789",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#2496ED",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#FCC624",
	},
	{
		id: "mysql-workbench",
		name: "MySQL Workbench",
		description:
			"The official integrated development environment for MySQL, supporting database modeling, SQL development, and visual analysis.",
		icon: "logos:mysql-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#4479A1",
	},
	{
		id: "datagrip",
		name: "DataGrip",
		description:
			"A cross-platform database management tool developed by JetBrains, supporting multiple databases with intelligent code completion and database refactoring.",
		icon: "logos:datagrip",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#000000",
	},
	{
		id: "mathematica",
		name: "Mathematica",
		description:
			"A computational software system developed by Wolfram Research, widely used in scientific, engineering, and mathematical fields.",
		icon: "/icons/mathematica.png",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#DD1100",
	},

	// Other Skills
	{
		id: "wps-office",
		name: "WPS Office",
		description:
			"A comprehensive office suite including word processing, spreadsheet, and presentation software, providing productivity solutions similar to Microsoft Office.",
		icon: "/icons/wps.png",
		category: "other",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#D83B01",
	},
	{
		id: "microsoft-office",
		name: "Microsoft Office",
		description:
			"A suite of productivity applications including Word, Excel, PowerPoint, and more, widely used in business and academic environments.",
		icon: "/icons/office.png",
		category: "other",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#D83B01",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		"Scientific Computing": skillsData.filter(
			(s) => s.category === "Scientific Computing",
		).length,
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

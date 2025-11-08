import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Daniel Magidov",
	headline: "Full-Stack Developer | AI & Cybersecurity Enthusiast | UCLA CS Student",
	bio: "Computer Science student at UCLA's Henry Samueli School of Engineering. Passionate about building full-stack applications, AI-powered tools, and cybersecurity solutions. Experienced in Python, JavaScript, Node.js, and React. Currently seeking impactful internship opportunities to expand my technical expertise and contribute to real-world projects.",

	// Your contact email
	email: "danielmagidov@gmail.com",

	// Add your links here
	links: [
		{ name: "GitHub", url: "https://github.com/DM-Coderas" },
		{ name: "LinkedIn", url: "https://linkedin.com/in/daniel-magidov-a0a213294" },
		// { name: "Twitter", url: "https://twitter.com/..." }, // optional
	],

	// Add your skills here
	skills: [
		"Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Powershell", "Bash",
		"React", "Node.js", "FastAPI",
		"Git", "Docker", "Google Cloud Platform", "AWS", "VS Code", "Cursor",
		"pandas", "NumPy", "Matplotlib"
	],

	// Add your projects here
	projects: [
		{
			title: "AI Application (In Development)",
			description: "Full-stack app integrating AI models, APIs, and authorization files. Developed backend processes and legal/ethical marketplace scrapers that reduced scraping time by 300% and costs by 50%.",
			stack: ["Node.js", "Python", "React", "APIs"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "Python Pentester Toolkit",
			description: "A GitHub library of 50+ quick-to-run Python scripts for penetration testing, covering OSINT, data collection, and exploitation. Demonstrates knowledge of vulnerabilities across all network layers.",
			stack: ["Python", "Git"],
			githubLink: "https://github.com/DM-Coderas/Python-Penetration-Tools",
			liveLink: "",
		},
		{
			title: "AlgoVisualizer",
			description: "Web-based tool for visualizing complex data structures and algorithms to help students understand CS concepts interactively.",
			stack: ["TypeScript", "React", "D3.js"],
			githubLink: "",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "Full Stack Developer (Co-Lead), AI Application",
			company: "Milyon LLC",
			date: "Aug. 2025 – Present",
			location: "Remote",
			description: "Lead backend development integrating AI models, APIs, and authorization files. Built marketplace scrapers reducing scraping time by 300% and costs by 50%. Negotiated with companies for proxy access and pricing."
		},
		{
			role: "General Paid Intern",
			company: "Kingly Computer Service Center",
			date: "Summer 2023 & 2024",
			location: "Los Angeles, CA",
			description: "Automated Linux and Python solutions to streamline troubleshooting. Managed front desk, performed backups, and repaired hardware, increasing efficiency and gaining 4 new clients."
		},
		{
			role: "CyberPatriot Team Lead",
			company: "Fairfax High School",
			date: "Sep. 2022 – Mar. 2025",
			location: "Los Angeles, CA",
			description: "Led 4-member cybersecurity team to top 10 statewide placement. Configured Windows, Linux, and Cisco systems, created practice plans, and improved team performance from top 30% to top 1%."
		},
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "University of California, Los Angeles",
			date: "Sep. 2025 – June 2029",
			note: "Henry Samueli School of Engineering and Applied Sciences, Coursework: Math31A, CS31; Clubs: ACM.AI, ACM.Cyber, Bruin Software Engineers"
		},
		{
			degree: "Best 'Vibe' Hack",
			institution: "[Some Hackathon]",
			date: "Fall 202X",
			note: "Awarded for the project with the slickest UI and best pitch."
		}
	]
};

export default PORTFOLIO_DATA;

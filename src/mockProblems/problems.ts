export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "hello-world",
		title: "Hello World",
		difficulty: "Easy",
		category: "String",
		order: 1,
		videoId: "",
	},
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 2,
		videoId: "",
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 3,
		videoId: "",
	},
	{
		id: "palindrome-number",
		title: "Palindrome Number",
		difficulty: "Easy",
		category: "Iteration",
		order: 4,
		videoId: "",
	},
	{
		id: "merge-two-sorted-list",
		title: "Merge Two Sorted List",
		difficulty: "Easy",
		category: "Array",
		order: 5,
		videoId: "",
	},
	
];
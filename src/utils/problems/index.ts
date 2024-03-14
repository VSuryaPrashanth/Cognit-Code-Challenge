import { Problem } from "../types/problem";
import { palindromeNumber } from "./palindrome-number";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"valid-parentheses": validParentheses,
	"palindrome-number": palindromeNumber,	
};

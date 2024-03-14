import assert from "assert";
import { Problem } from "../types/problem";

export const PalindromeHandler = (fn: any) => {
	try {
		const tests = ["x = 121", "x = -121", "x = 10"];
		const answers = [true, false, false];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.error("Error from PalidromeHandler: ", error);
		throw new Error(error);
	}
};

const starterCodePalindromeJS = `function Palindrome(s) {
  // Write your code here
};`;

export const palindromeNumber: Problem = {
	id: "palindrome-number",
	title: "4. Palindrome Number",
	problemStatement: `<p class='mt-3'> Given an integer <code>x</code>, return 
    <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> condition.`,
	examples: [
		
            {
                id: 1,
                inputText: " x = 121 ",
                outputText: "true",
                explanation: "121 reads as 121 from left to right and from right to left.",
            },
            {
                id: 2,
                inputText: " x = -121",
                outputText: "false",
                explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a Palindrome.",
            },
            {
                id: 3,
                inputText: " x = 10",
                outputText: "false",
                explanation: "Reads 01 from right to left. Therefore it is not a Palindrome.",
            },
	],
	constraints: `<li class='mt-2'><code> -2^31 <= x <= 2^31 - 1 </code></li>`,

	handlerFunction: PalindromeHandler,
	starterCode: starterCodePalindromeJS,
	starterFunctionName: "function palindromeNumber",
	order: 4,
};

# Merge Strings Alternatively

**Description**: This JavaScript function, mergeAlternately, takes two input strings, word1 and word2, and merges them by alternating characters from each string. If one string is longer than the other, the remaining characters from the longer string are appended at the end of the merged result.

**Function Signature**

	var mergeAlternately = function(word1, word2) {
	    // function implementation
	}
 
**Parameters**

1. word1 (string): The first input string.
2. word2 (string): The second input string.
   
**Return**

string: A new string where characters from word1 and word2 are alternated, and any remaining characters from the longer string are appended at the end.

**Time and Space Complexity**

Time Complexity: O(n), where n is the length of the longer input string (either word1 or word2), because we iterate through the characters of both strings.

Space Complexity: O(n), where n is the length of the resulting merged string.


Example 1:
	
	const word1 = "abc";
	const word2 = "pqr";
	console.log(mergeAlternately(word1, word2)); // Output: "apbqcr"
 
**Explanation**: The function alternates characters from word1 and word2 and merges them: 'a' + 'p' + 'b' + 'q' + 'c' + 'r' = "apbqcr".

Example 2:

	const word1 = "ab";
	const word2 = "pqrs";
	console.log(mergeAlternately(word1, word2)); // Output: "apbqrs"
 
Explanation: The function alternates characters from word1 and word2 until one string runs out, then appends the remaining characters from word2 ("rs").

Example 3:

	const word1 = "abcd";
	const word2 = "pq";
	console.log(mergeAlternately(word1, word2)); // Output: "apbqcd"
 
Explanation: The function alternates characters from word1 and word2 until word2 runs out, then appends the remaining characters from word1 ("cd").

Character Alternation:

1. If both strings are of the same length, the function iterates through both strings and alternates characters from word1 and word2.
2. If word1 is longer, the function alternates characters from both strings until word2 runs out, then appends the remaining characters from word1.
3. If word2 is longer, the function alternates characters from both strings until word1 runs out, then appends the remaining characters from word2.

Resulting String: The final merged string is returned as the result.

**Edge Cases**

1. Equal Length Strings: Both strings are merged without leftover characters.
2. One String is Empty: The non-empty string is returned as the result.
3. Different Length Strings: The function handles merging until one string ends and appends the remaining characters of the longer string.
   

**License**: This code is available under the MIT License.

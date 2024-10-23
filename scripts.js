/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = "";
    let len1 = word1.length;
    let len2 = word2.length;
    if (len1 === len2) {
        for (let i = 0; i < len1; i++) {
            str += word1[i] + word2[i];
        }
    } else if (len1 > len2) {
        for (let i = 0; i < len2; i++) {
            str += word1[i] + word2[i];
        }
        str += word1.slice(len2, len1);
    } else {
        for (let i = 0; i < len1; i++) {
            str += word1[i] + word2[i];
        }
        str += word2.slice(len1, len2);
    }
    return str;
    
};

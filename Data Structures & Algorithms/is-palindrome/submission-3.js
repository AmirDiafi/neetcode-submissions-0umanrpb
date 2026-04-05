class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerS = s.toLowerCase()
        const text = lowerS.replace(/[^a-z0-9]/g,"").toLowerCase()
        const reverse_text = text.split("").reverse().join("")
        return text==reverse_text
    }
}

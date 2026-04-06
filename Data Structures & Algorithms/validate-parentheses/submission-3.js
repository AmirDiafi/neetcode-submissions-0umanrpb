class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketsObj = {
            ")":"(",
            "]":"[",
            "}":"{"
        }

        const openBrackets = []
        for(let char of s) {
            if(bracketsObj[char]) {
                const lastToClose = openBrackets.length  > 0 ? openBrackets.pop() : "@"
                if(lastToClose!==bracketsObj[char]) {
                    return false
                }
            } else {
                openBrackets.push(char)
            }
        }
        return openBrackets.length == 0
    }
}

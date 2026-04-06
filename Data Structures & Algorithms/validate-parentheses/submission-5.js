class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketsMap = {
            "]":"[",
            ")":"(",
            "}":"{"
        }
        const openBracketsArr = []
        for(let char of s) {
            if(bracketsMap[char]) {
                const lastToClose = !openBracketsArr.length ? "@" : openBracketsArr.pop() 
                if(lastToClose !== bracketsMap[char]) {
                    return false
                }
            } else {
                openBracketsArr.push(char)
            }
        }
        return !openBracketsArr.length
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 1. take current number
        // 2. create a new temporary array
        // 3. remove it from this array
        // 4. check if the array includes this number
        // if true break loop and return true


        for(let num of nums) {
            const currentNums = nums.toSpliced(nums.indexOf(num), 1)
            const isCurrentDublicated = currentNums.includes(num)
            if(isCurrentDublicated) {
                return true
            }
        }

        return false
    }
}

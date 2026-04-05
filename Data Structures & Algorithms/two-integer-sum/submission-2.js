class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i<nums.length; i++) {
            let currentNum = nums[i]
            for(let j = 0; j<nums.length;j++) {
                let nextNum = nums[j]
                let sum = currentNum + nextNum
                let isSameIndex = i == j

                if(!isSameIndex && sum == target) {
                    return [i,j]
                }
            }
        }

        return []
    }
}

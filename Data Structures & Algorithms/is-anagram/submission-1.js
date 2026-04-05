class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1. get first char from s, loop on the t
        // if the char found, remove the current index from t.
        // else return false and break the loop.

        let s_arr = Array.from(s)
        let t_arr = Array.from(t)

        if(s_arr.length != t_arr.length) {
            return false
        }

        for(let i = 0; i < s_arr.length; i++) {
            let current_s_char = s_arr[i]

            for(let j = 0; j < t_arr.length; j++) {
                let current_j_char = t_arr[j]

                const isFound = current_s_char === current_j_char

                if(isFound) {
                    t_arr.splice(j, 1)
                    break
                }

            }
        }

        return t_arr.length === 0

    }
}

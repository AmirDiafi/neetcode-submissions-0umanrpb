class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //1. get current string,
        // compare each char to the next index chars,
        //2. if all true put these indexes together in one
        // array and so on.
        //3. save the indexes and return the values now.

        let anagramGroups = []
        let strs_copy = [...strs]
        for(let i = 0; i < strs.length; i++) {

            if(anagramGroups.some(v=> v.includes(i))) {
                continue
            }

            const currentGroup = [i]
            const currentStrArray = Array.from(strs[i].toLowerCase())

            for(let j = 0; j < strs.length; j++) {
                let nextStrArray = Array.from(strs[j].toLowerCase())
                const isNotSameLength = currentStrArray.length != nextStrArray.length
                if(j==i || isNotSameLength) {
                    continue
                }
                for(let c = 0; c < currentStrArray.length; c++) {
                    const currentChar = currentStrArray[c]
                    for(let n = 0; n < nextStrArray.length; n++) {
                        const nextChar = nextStrArray[n]
                        const isSame = currentChar === nextChar
                        if(isSame) {
                            nextStrArray.splice(n, 1)
                            break
                        }
                    }
                }
                const isAnagram = nextStrArray.length == 0
                if(isAnagram) {
                    currentGroup.push(j)
                }
            }
            anagramGroups.push(currentGroup)
            for(let ag = 0; ag < anagramGroups.length; ag++) {
                strs_copy.splice(ag, 1)
            }

        }

        const anagramValues = []

        for(let ag = 0; ag < anagramGroups.length; ag++) {
            const anagramGroupValues = []
            const currentGroup = anagramGroups[ag]
            for(let gv of currentGroup) {
                anagramGroupValues.push(strs[gv])
            }
            anagramValues.push(anagramGroupValues)
        }

        return anagramValues
    }
}

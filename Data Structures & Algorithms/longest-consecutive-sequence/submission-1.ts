class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0
        let res = 1
        let ns = new Set(nums)
        
        for (let i=0; i<nums.length; i++){
            let el = nums[i]
            if (ns.has(el-1)) continue
            let curr = 1
            while (ns.has(el+1)){
                curr ++
                el ++
            }
            res = curr > res ? curr : res
        }
        return res
    }
}

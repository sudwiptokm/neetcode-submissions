class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numMap: Record<string, number> = {}
        for (let i=0; i<nums.length; i++){
            if (nums[i] in numMap){
                return true
            } else {
                numMap[nums[i]] = 1
            }
        }
        return false
    }
}

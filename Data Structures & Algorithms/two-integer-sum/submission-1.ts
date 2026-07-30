class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hashMap: Record<string, number> = {}

        for (let i=0; i<nums.length; i++){
            hashMap[target-nums[i]] = i
        }

        for (let i=0; i<nums.length; i++){
            if (nums[i] in hashMap){
                if (i !== hashMap[nums[i]]) return [i, hashMap[nums[i]]]
            }
        }
    }
}

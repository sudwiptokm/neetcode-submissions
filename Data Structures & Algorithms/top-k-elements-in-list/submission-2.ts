class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hm : Record<string,number> = {}

        for (let i=0; i<nums.length; i++){
            if (nums[i] in hm){
                hm[nums[i]] ++
            } else{
                hm[nums[i]] = 1
            }
        }

        const res = Object.entries(hm).sort((a,b)=>b[1]-a[1])
        let ret: number[] = []
        for (let i=0; i<k; i++){
            ret.push(parseInt(res[i][0]))
        }
        return ret
    }
}

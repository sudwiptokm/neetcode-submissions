class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let left= [], right = [], res = []
        const s = nums.length

        right[s-1] = 1
        left[0]=1

        let val = nums[0]
        for (let i=1; i<s; i++){
            left[i] = val
            val = val*nums[i]
            console.log(val)
        }

        val = nums[s-1]
        for (let i=s-2;i>=0;i--){
            right[i] = val
            val *= nums[i]
        }
        console.log({left,right})
        for (let i=0; i<s;i++){
            res[i] = left[i]*right[i] 
        }

        return res
    }
}

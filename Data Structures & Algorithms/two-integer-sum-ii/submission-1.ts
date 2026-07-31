class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l=0, r=numbers.length-1
        while(l<r){
            let left = numbers[l]
            let right = numbers[r]

            if (left+right === target) return [l+1,r+1]
            if (left+right > target) r--
            if (left+right < target) l++
        }
    }
}

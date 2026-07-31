class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str =  s.replace(/[^a-z0-9]/gi, '');
        console.log(str)
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
    }
}

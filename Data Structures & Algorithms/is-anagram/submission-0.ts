class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (t.length !== s.length) return false

        let charMap : Record<string, number> = {}
        for (let i=0; i<s.length; i++){
            if (s[i] in charMap){
                charMap[s[i]] = charMap[s[i]]+1
            } else {
                charMap[s[i]] = 1
            }
        }

        for (let i=0; i<t.length; i++){
            if (t[i] in charMap){
                if (charMap[t[i]] === 1){
                    delete charMap[t[i]]
                } else{
                charMap[t[i]] = charMap[t[i]]-1
                }
            } else {
                return false
            }
        }

        return Object.keys(charMap).length === 0
    }
}

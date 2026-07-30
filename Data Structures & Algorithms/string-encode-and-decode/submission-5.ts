class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let str = ''
        for (let i=0; i<strs.length; i++){
           let w = strs[i]
           let s = w.length
           str += s+'#'+w 
        }
        console.log(str)
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let c='', i=0
        let res : string[] = []

        while ( i!== str.length){
            c=''
            while (str[i]!='#'){
                c += str[i]
                i++
            }
            let x = parseInt(c)
            i++
            let str_ = ''
            str_ = str.slice(i, i+x)
            i +=x
            res.push(str_)
        }
        return res
    }
}

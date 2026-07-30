class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (let i=0; i<strs.length; i++){
            let str = strs[i]
            res += str.length.toString() + "#" + str
        }
        console.log(res)
        return res
    }

    /*
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let res =[]
        let i = 0;
while (i < s.length) {
    let j = s.indexOf('#', i);
    let length = parseInt(s.substring(i, j));
    i = j + 1;
    let str = s.substring(i, i + length);
    res.push(str);
    i += length;
}
return res
    }
}

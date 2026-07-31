class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Rows
        let arr = []
        for (let i=0; i<9; i++){
            let row = board[i]
            arr = []
            for (let x=0; x<9; x++){
                if (row[x]!=="." && arr.includes(row[x])){
                    return false
                } else arr.push(row[x])
            }
        }

        // Columns
        for (let i=0; i<9; i++){
            arr = []
            for (let j=0; j<9; j++){
                if (board[j][i]!=="." && arr.includes(board[j][i])){
                    return false
                } else arr.push(board[j][i])
            }
        }


        // Grids
        let hm : Record<string, string[]> = {}
        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                let r_ind = Math.floor(j/3)
                let c_ind = Math.floor(i/3)
                let idx = c_ind + '_' + r_ind
                if (!hm[idx]) hm[idx] = []
                if (board[i][j]!=="." && hm[idx].includes(board[i][j])){
                    return false
                } else{
                    hm[idx].push(board[i][j])
                }
            }
        }


        return true
    }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target,memo={}) {
    let result=[];
    candidates.sort((a, b) => a - b); 
    if(target in memo) return memo[target];
    if (target===0) return [[]];
    if(target< 0) return [];
    
    for(let i of candidates){
         if (i > target) break; 
        const reminder=target-i;
        const reminderResult=combinationSum(candidates,reminder,memo);
        if (reminderResult!=[]) {
        result=result.concat(reminderResult.map(a=>[...a,i].sort((a, b) => a - b)));
        result = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
                
       
        }
    }
    memo[target]=result;
    return memo[target];
};
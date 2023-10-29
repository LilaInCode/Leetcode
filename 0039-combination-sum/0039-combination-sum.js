/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target,memo={}) {
    const result = [];
    const currentCombination = [];
    
    function backtrack(remaining, start) {
        if (remaining === 0) {
       
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
     
            if (remaining < candidates[i]) {
                continue;
            }
  
            currentCombination.push(candidates[i]);
     
            backtrack(remaining - candidates[i], i);
      
            currentCombination.pop();
        }
    }
    
    backtrack(target, 0);
    return result;

};
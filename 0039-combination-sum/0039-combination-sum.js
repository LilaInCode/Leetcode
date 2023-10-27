/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    const memo = {};
    
    function backtrack(remaining, start) {
        if (remaining === 0) {
            // Base case: found a combination
            return [[]];
        }
        if (remaining < 0) {
            // Base case: exceeded the target sum
            return null;
        }
        
        const memoKey = `${remaining}-${start}`;
        if (memoKey in memo) return memo[memoKey];
        
        let result = [];
        for (let i = start; i < candidates.length; i++) {
            const remainder = remaining - candidates[i];
            const remainderResult = backtrack(remainder, i);
            if (remainderResult !== null) {
                // For each combination in remainderResult, add candidates[i]
                for (const combination of remainderResult) {
                    result.push([candidates[i], ...combination]);
                }
            }
        }
        
        memo[memoKey] = result.length > 0 ? result : null;
        return memo[memoKey];
    }

    const result = backtrack(target, 0);
    return result === null ? [] : result;


};
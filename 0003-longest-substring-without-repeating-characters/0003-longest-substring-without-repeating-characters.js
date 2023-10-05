/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let stringMap=new Map();
let start=0, maxLength=0;
for(let end=0; end<s.length;end++){
    if(stringMap.has(s[end])) start=Math.max(stringMap.get(s[end])+1,start)
    stringMap.set(s[end],end);
    maxLength=Math.max(maxLength, end-start+1);
}

    return maxLength;

};
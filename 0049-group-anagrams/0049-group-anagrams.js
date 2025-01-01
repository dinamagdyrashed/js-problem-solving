/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dect=new Map()
    for(let i=0;i<strs.length;i++){
      let key = strs[i].split("").sort().join("");
      if(dect.has(key)){
        dect.get(key).push(strs[i]);
      }
      else{
dect.set(key, [strs[i]]);
      }
    }
    return Array.from(dect.values())
};
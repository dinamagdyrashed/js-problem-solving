/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //1
//   nums.sort((a,b)=>a-b)
//   for (let i=1;i<nums.length;i++){
//     if (nums[i]===nums[i-1]){
//         return true 
//     }
//   }
//   return false
//2
// for(i=0;i< nums.length;i++){
//     for(j=i+1;j<nums.length;j++){
//         if(nums[j]===nums[i]){
//             return true
//         }
//     }
// }
// return false
//3
 //return new Set(nums).size < nums.length;
 //4
 var set= new Set()
 for (let num of nums){
    if(set.has(num)){
        return true
    }
    set.add(num)
 }
 return false
};
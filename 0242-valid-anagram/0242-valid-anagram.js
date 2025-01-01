/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
            return false;
        }
        //1
    //  s=Array.from(s).sort().join('');
    //  t=Array.from(t).sort().join('');
    // return s===t
    //2
    var objS={}
    var objT={}
    for (let i=0;i<s.length;i++){
        objS[s[i]]=(objS[s[i]]||0)+1
        objT[t[i]]=(objT[t[i]]||0)+1
    }
    for (var key in objS) {
        if(objS[key]!=objT[key]){
            return false
        }

    }
    return true


};
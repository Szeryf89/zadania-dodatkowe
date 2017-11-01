Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

var arr = ['a', 'z', 'h', 'p', 'e'];
var arr2 = ['o', 'e', 'p', 'g', 'g', 'm', 'z', 'a'];
var arr3 = ['q', 'm'];
var arr4 = ['b', 'm', 'g', 'q', 'o'];
var allArray = arr.concat(arr2, arr3, arr4).unique();

console.log(allArray);
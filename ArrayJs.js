// 유사배열 사용할 때
Array.join = Array.join || function(a, sep) {
    return Array.prototype.join.call(a, sep);
}

Array.slice = Array.slice || function(a, from, to) {
    return Array.prototype.slice.call(a, from, to);
}

Array.map = Array.map || function(a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
}


var a = {"0":"a", "1":"b", "2":"c", length:3}   // 배열과 유사한 객체(DOM인경우도 많음)
Array.join(a, "+");
Array.map(a, function(x) { return x.toUpperCase(); });


// ECMAScript3(IE9이하)
var isArray = Function.isArray || function(o) {
    return typeof o === "object" &&
    Object.prototype.toString.call(o) === "[object Array]";
}

// 배열 a에서 x인 값을 포함한 원소의 인덱스를 배열로 반환
function findall(a, x) {
    var results = [],
        len = a.length,
        pos = 0;

        while(pos < len) {
            pos = a.indexOf(x, pos);
            if(pos === -1)
                break;
            results.push(pos);
            pos = pos + 1;
        }
        return results;
}

function findAll2(a, b) { 
    Array.isArray(a) &&
        a.forEach((n,i)=>{n == b && aaa.push(i)}) 
}

// 배열과 유사한 객체인지 판별
// 클라이언트 측 자바스크립트에서 DOM의 text node가 length 프로퍼티를 갖고 있고,
// 이를 o.nodeType != 3으로 걸러낼 수 있다.
function isArrayLike(o) {
    if (o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296)
        return true;
    else    
        return false;
}
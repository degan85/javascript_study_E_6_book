// ����迭 ����� ��
Array.join = Array.join || function(a, sep) {
    return Array.prototype.join.call(a, sep);
}

Array.slice = Array.slice || function(a, from, to) {
    return Array.prototype.slice.call(a, from, to);
}

Array.map = Array.map || function(a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
}


var a = {"0":"a", "1":"b", "2":"c", length:3}   // �迭�� ������ ��ü(DOM�ΰ�쵵 ����)
Array.join(a, "+");
Array.map(a, function(x) { return x.toUpperCase(); });


// ECMAScript3(IE9����)
var isArray = Function.isArray || function(o) {
    return typeof o === "object" &&
    Object.prototype.toString.call(o) === "[object Array]";
}

// �迭 a���� x�� ���� ������ ������ �ε����� �迭�� ��ȯ
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

// �迭�� ������ ��ü���� �Ǻ�
// Ŭ���̾�Ʈ �� �ڹٽ�ũ��Ʈ���� DOM�� text node�� length ������Ƽ�� ���� �ְ�,
// �̸� o.nodeType != 3���� �ɷ��� �� �ִ�.
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
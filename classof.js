/*
* 속성값 확인
*/
function classof(o) {
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}

classof(1); //Number
classof(new Date()); // Date

Object.prototype.toString.call(1);
// [object Number]

Object.prototype.toString.call(new Date());
// [object Date]
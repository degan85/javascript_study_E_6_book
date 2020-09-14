// 접근자
// 함수랑 다르게 호출할 경우 ()를 붙이지 않는다
// ex) serialnum.next;

var p ={
    x: 1.0,
    y: 1.0,

    get r() { return Math.sqrt(this.x*this.x + this.y*this.y);},
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    // 읽기 전용
    get theta() { return Math.atan2(this.y, this.x); }
}

var serialnum = {
    //private hint
    $n: 0,
    get next() { return this.$n++; },
    set next(n) {
        if(n >= this.$n) this.$n = n;
        else throw "serial number can only be set to a larger value";
    }
}

var random = {
    get octet() { return Math.floor(Math.random()*256);},
    get unit16() { return Math.floor(Math.random()*65536);},
    get int16() { return Math.floor(Math.random()*65536)-32758;}
}
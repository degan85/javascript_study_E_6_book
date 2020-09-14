/*
* Object.prototype에 열거되지 않는 메서드 extend()를 추가한다.
* 인자로 넘긴 객체가 소유한 모든 고유 프로퍼티는 대상 객체에 같은 이름의
* 프로퍼티가 존재하지 않는 한 대상 객체에 복사된다.
*/
Object.defineProperty(Object.prototype, 
    "extend", // Object.prototype.extend를 정의한다 
    {
        writable : true,
        enumerable : false,
        configurable : true,
        value : function(o) {
            //Object.prototype.extend 메서드의 값은 함수다
            // 열거되지 않은 프로퍼티들을 포함한 모든 고유 프로퍼티에 대해
            var names = Object.getOwnPropertyNames(o);
            for(var i = 0; i < names.length; i++) { //루프에서 살펴본다
                // this 객체에 이미 같은 이름의 프로퍼티가 존재하면 건너뛴다.
                if(names[i] in this) continue;
                // 객체 o의 프로퍼티 디스크립터를 가져온다.
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                // this 객체에 프로퍼티를 생성할 때 앞에서 가져온 디스크립터 객체를 사용한다.
                Object.defineProperty(this, names[i], desc);
            }
        }
    }
);


// 데이터 프로퍼티는 속성 value, writable, enumerable, configurable
// 접근자 프로퍼티는 속성 get, set, enumerable, configurable
Onewtbject.getOwnPropertyDescriptor({x:1}, "x");
Object.defineProperty({}, {
    x: {value : 1, writable : true, enumerable : true, configurable : true},
    y: {value : 1, writable : true, enumerable : true, configurable : true}, 
    r: {
        get: function() { return Math.sqrt(this.x*this.x + this.y*this.y)},
        enumerable:true,
        configurable:true
    }
})
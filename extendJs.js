// 즉시 실행 함수(익명함술르 정의하고 호출하는 단일 표현식)
// IE 버그 패치
var extend = (function() {
    for(var p in {toString:null}) {
        // 여기에 이르면 for/in 루프가 제대로 작동
        return function extend(o) {
            for(var i=1; i<arguments.length; i++) {
                var source = arguments[i];
                for(var prop in source) o[prop] = source[prop];
            }
        }
    }
    // 여기에 이르면, for/in 루프는 테스트 객체의 toString 프로퍼티를 열거하지 못했다는 뜻(IE)
    return function patched_extend(o) {
        for(var i=1; i<arguments.length; i++) {
            var source = arguments[i];

            // 열거 가능한 모든 프로퍼티 복사
            for(var prop in source) o[prop] = source[prop];

            // 특별한 프로퍼티 검사
            for(var j=0; j<protoprops.length; j++) {
                prop = protoprops[j];
                if (source.hasOwnProperty(prop)) o[prop] = source[prop];
            }

        }
        return o;
    }

    // 검사해야 하는 특별한 프로퍼티의 목록
    var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
}());
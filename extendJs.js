// ��� ���� �Լ�(�͸��Լ��� �����ϰ� ȣ���ϴ� ���� ǥ����)
// IE ���� ��ġ
var extend = (function() {
    for(var p in {toString:null}) {
        // ���⿡ �̸��� for/in ������ ����� �۵�
        return function extend(o) {
            for(var i=1; i<arguments.length; i++) {
                var source = arguments[i];
                for(var prop in source) o[prop] = source[prop];
            }
        }
    }
    // ���⿡ �̸���, for/in ������ �׽�Ʈ ��ü�� toString ������Ƽ�� �������� ���ߴٴ� ��(IE)
    return function patched_extend(o) {
        for(var i=1; i<arguments.length; i++) {
            var source = arguments[i];

            // ���� ������ ��� ������Ƽ ����
            for(var prop in source) o[prop] = source[prop];

            // Ư���� ������Ƽ �˻�
            for(var j=0; j<protoprops.length; j++) {
                prop = protoprops[j];
                if (source.hasOwnProperty(prop)) o[prop] = source[prop];
            }

        }
        return o;
    }

    // �˻��ؾ� �ϴ� Ư���� ������Ƽ�� ���
    var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString"];
}());
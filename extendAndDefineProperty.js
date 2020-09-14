/*
* Object.prototype�� ���ŵ��� �ʴ� �޼��� extend()�� �߰��Ѵ�.
* ���ڷ� �ѱ� ��ü�� ������ ��� ���� ������Ƽ�� ��� ��ü�� ���� �̸���
* ������Ƽ�� �������� �ʴ� �� ��� ��ü�� ����ȴ�.
*/
Object.defineProperty(Object.prototype, 
    "extend", // Object.prototype.extend�� �����Ѵ� 
    {
        writable : true,
        enumerable : false,
        configurable : true,
        value : function(o) {
            //Object.prototype.extend �޼����� ���� �Լ���
            // ���ŵ��� ���� ������Ƽ���� ������ ��� ���� ������Ƽ�� ����
            var names = Object.getOwnPropertyNames(o);
            for(var i = 0; i < names.length; i++) { //�������� ���캻��
                // this ��ü�� �̹� ���� �̸��� ������Ƽ�� �����ϸ� �ǳʶڴ�.
                if(names[i] in this) continue;
                // ��ü o�� ������Ƽ ��ũ���͸� �����´�.
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                // this ��ü�� ������Ƽ�� ������ �� �տ��� ������ ��ũ���� ��ü�� ����Ѵ�.
                Object.defineProperty(this, names[i], desc);
            }
        }
    }
);


// ������ ������Ƽ�� �Ӽ� value, writable, enumerable, configurable
// ������ ������Ƽ�� �Ӽ� get, set, enumerable, configurable
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
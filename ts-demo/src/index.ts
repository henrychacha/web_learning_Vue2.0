// number,string,boolean ,undefined,null

let a: number = 2;
var x = 10;

// 字符串构成的数据
let arr: string[] = ["1", "2"];

// 任意类型构成的数组
let arr1: any[] = ["1", 2];

// number 构成的数组
let arr2: Array<number> = [1, 2, 3];

// 元组
let arr6: [string, number, boolean] = ['hello', 200, false];

// 枚举项
enum Color { Red = 10, Green, Blue }
let c: Color = Color.Green;

console.log(c);

console.log(Color[11]);

// void类型表示 没有类型 的类型
//作用：一般用于定义函数没有返回值

function fn(): void {
    console.log("fn")
}

function fn1(): number {
    return 1 + 1;
}

// 参数类型的定义 和 默认参数
function add(x: number, y = 300): number {
    return x + y;
}

console.log(add(1, 100));


// ? 代表该参数是可选参数    !必填参数
function hello(str: string, txt?: string): string {
    if (txt) {
        return str + txt;
    } else {
        return str;
    }
}
console.log(hello('你好'));


// 剩余参数 ...child 剩余参数构成的数据
function familyPerson(main: string, ...child: string[]) {
    return '户主：' + main + ",家庭成员：" + child.join(" ");
}
let allPerson = familyPerson('小U', '小就', '小业', "小明");
console.log(allPerson);


let add4 = (x: number, y: number): number => x + y;
console.log(add4(10, 20));


class Animal {
    static nickname = "小宝贝"
    age = 5
    name: string; // 类的属性
    constructor(theName: string) { // 类的构造函数
        this.name = theName;
        console.log(this.age)
    }
    move(skip: number) {
        console.log(this.name + " moveing " + skip)
    }
}

let ani = new Animal("猫咪")
console.log(ani.age);

// 必须通过类 来访问的属性和方法
console.log(Animal.nickname);

class Dog extends Animal {
    constructor(name: string) {
        super(name); // 调用super函数
    }
    move(skip = 5) { // 子类的move方法
        console.log("移动中...");
        console.log(this.age)
        super.move(skip); // 调用父类的move方法
    }
}
let d = new Dog('哈士奇');
d.move();


//接口
interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'Tom',
    age: 25
};


//装饰器就是一个函数
function logClass(params: any) {
    console.log(params); // params就是当前类，指的就是App 这个
    params.prototype.apiUrl = "动态拓展的属性";
    params.prototype.run = function () {
        console.log("这是run方法");
    }
}

// 装饰工厂  params : 使用装饰传入的参数:"参数 url"
function logClass1(params: any) {
    return function (target: any) {
        // target就是当前类，指的就是App 这个
        target.prototype.apiUrl = params;
        target.prototype.run = function () {
            console.log("这是run方法");
        }
    }
}

@logClass
class App {

}



@logClass1("参数 url")
class Peo {
    constructor() {
        console.log(this)
    }
}

console.log(new App())
console.log(new Peo())

// params->"http://www.jd.com"
function logProperty(params: any) {
    return function (target: any, attr: any) {
        console.log(target); // 类的原型对象
        // attr : 被装饰属性 ——>url
        target[attr] = params
        console.log(attr); // 输出url,就是属性名称
    }
}

class HttpClient {
    @logProperty('http://www.jd.com') // 装饰器后面不能加分号
    public url: string | undefined;
    constructor() { }
    getData() {
        console.log(this.url);
    }
}

const http = new HttpClient();

console.log(http);

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor)
        // target  就是原型对象
        // propertyKey ： 被装饰的方法的名称

        //  方法 装饰器
        // greet 方法 变为不可枚举
        target[propertyKey].enumerable = value;
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}



function logParams(params: any) {
    return function (target: any, methodName: any, paramsIndex: any) {
        console.log(params);//"xxxxx" 传入 参数
        console.log(target);// 原型对象
        console.log(methodName); //getData 被装饰参数的 函数名称
        console.log(paramsIndex);// 被装饰的参数的 下标
        target.apiUrl = params;
        target[methodName] = function(){
            console.log(params+"yyyy")
        }
    }
}

class HttpBrowser {
    public url: any | undefined;
    constructor() {
    }
    getData(@logParams('xxxxx') uuid: any) {
        console.log(uuid);
    }
}
let http2: any = new HttpBrowser();
http2.getData()









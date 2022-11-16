var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var a = 2;
var x = 10;
var arr = ["1", "2"];
var arr1 = ["1", 2];
var arr2 = [1, 2, 3];
var arr6 = ['hello', 200, false];
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
console.log(Color[11]);
function fn() {
    console.log("fn");
}
function fn1() {
    return 1 + 1;
}
function add(x, y) {
    if (y === void 0) { y = 300; }
    return x + y;
}
console.log(add(1, 100));
function hello(str, txt) {
    if (txt) {
        return str + txt;
    }
    else {
        return str;
    }
}
console.log(hello('你好'));
function familyPerson(main) {
    var child = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        child[_i - 1] = arguments[_i];
    }
    return '户主：' + main + ",家庭成员：" + child.join(" ");
}
var allPerson = familyPerson('小U', '小就', '小业', "小明");
console.log(allPerson);
var add4 = function (x, y) { return x + y; };
console.log(add4(10, 20));
var Animal = (function () {
    function Animal(theName) {
        this.age = 5;
        this.name = theName;
        console.log(this.age);
    }
    Animal.prototype.move = function (skip) {
        console.log(this.name + " moveing " + skip);
    };
    Animal.nickname = "小宝贝";
    return Animal;
}());
var ani = new Animal("猫咪");
console.log(ani.age);
console.log(Animal.nickname);
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (skip) {
        if (skip === void 0) { skip = 5; }
        console.log("移动中...");
        console.log(this.age);
        _super.prototype.move.call(this, skip);
    };
    return Dog;
}(Animal));
var d = new Dog('哈士奇');
d.move();
var tom = {
    name: 'Tom',
    age: 25
};
function logClass(params) {
    console.log(params);
    params.prototype.apiUrl = "动态拓展的属性";
    params.prototype.run = function () {
        console.log("这是run方法");
    };
}
function logClass1(params) {
    return function (target) {
        target.prototype.apiUrl = params;
        target.prototype.run = function () {
            console.log("这是run方法");
        };
    };
}
var App = (function () {
    function App() {
    }
    App = __decorate([
        logClass
    ], App);
    return App;
}());
var Peo = (function () {
    function Peo() {
        console.log(this);
    }
    Peo = __decorate([
        logClass1("参数 url"),
        __metadata("design:paramtypes", [])
    ], Peo);
    return Peo;
}());
console.log(new App());
console.log(new Peo());
function logProperty(params) {
    return function (target, attr) {
        console.log(target);
        target[attr] = params;
        console.log(attr);
    };
}
var HttpClient = (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty('http://www.jd.com'),
        __metadata("design:type", String)
    ], HttpClient.prototype, "url");
    return HttpClient;
}());
var http = new HttpClient();
console.log(http);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target, propertyKey, descriptor);
        target[propertyKey].enumerable = value;
    };
}
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        enumerable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Greeter.prototype, "greet");
    return Greeter;
}());
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        target.apiUrl = params;
        target[methodName] = function () {
            console.log(params + "yyyy");
        };
    };
}
var HttpBrowser = (function () {
    function HttpBrowser() {
    }
    HttpBrowser.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, logParams('xxxxx')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HttpBrowser.prototype, "getData");
    return HttpBrowser;
}());
var http2 = new HttpBrowser();
http2.getData();
//# sourceMappingURL=index.js.map
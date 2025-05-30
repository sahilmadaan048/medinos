var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var user = new Person("Sahil");
user.greet(); // Hello, my name is Sahil
/// inheritance 
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " moved ").concat(distance, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Tommy");
dog.bark(); // Woof!
dog.move(10); // Tommy moved 10m.
// acess modifiers
// public accessible from anywhere
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.greet = function () {
        console.log("Hi", this.name);
    };
    return User;
}());
// private => accessible only inside the class
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 1000;
    }
    BankAccount.prototype.logBalance = function () {
        console.log("Balance is ".concat(this.balance));
    };
    BankAccount.prototype.showBalance = function () {
        this.logBalance();
    };
    return BankAccount;
}());
var acc = new BankAccount();
// acc.balance = 0;        ❌ Error: private
// acc.logBalance();       ❌ Error: private
acc.showBalance(); // ✅ Allowed via public method
// protected => accessble within the class and its subclasses but not outside
var Employee = /** @class */ (function () {
    function Employee(department) {
        this.department = department;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.showDepartment = function () {
        console.log("Department:", this.department); // ✅ OK
    };
    return Manager;
}(Employee));
var mgr = new Manager("IT");
// mgr.department; // ❌ Error: protected
mgr.showDepartment(); // ✅ Department: IT
// readonly modifier => prevents reassignment after initiaslisatuon
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    Book.prototype.describe = function () {
        console.log(this.title);
    };
    return Book;
}());
var book = new Book("TypeScript Guide");
// book.title = "New Title"; ❌ Error: title is readonly

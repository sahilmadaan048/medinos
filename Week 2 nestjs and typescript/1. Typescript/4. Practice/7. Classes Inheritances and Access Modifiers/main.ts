class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user = new Person("Sahil");
user.greet(); // Hello, my name is Sahil



/// inheritance 

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

const dog = new Dog("Tommy");
dog.bark();            // Woof!
dog.move(10);          // Tommy moved 10m.

// acess modifiers
// public accessible from anywhere

class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log("Hi", this.name);
  }
}


// private => accessible only inside the class


class BankAccount {
  private balance: number = 1000;

  private logBalance(): void {
    console.log(`Balance is ${this.balance}`);
  }

  public showBalance(): void {
    this.logBalance();
  }
}

const acc = new BankAccount();
// acc.balance = 0;        ❌ Error: private
// acc.logBalance();       ❌ Error: private
acc.showBalance();         // ✅ Allowed via public method


// protected => accessble within the class and its subclasses but not outside
class Employee {
  protected department: string;

  constructor(department: string) {
    this.department = department;
  }
}

class Manager extends Employee {
  showDepartment(): void {
    console.log("Department:", this.department); // ✅ OK
  }
}

const mgr = new Manager("IT");
// mgr.department; // ❌ Error: protected
mgr.showDepartment(); // ✅ Department: IT


// readonly modifier => prevents reassignment after initiaslisatuon
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  describe(): void {
    console.log(this.title);
  }
}

const book = new Book("TypeScript Guide");
// book.title = "New Title"; ❌ Error: title is readonly

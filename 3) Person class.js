class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    displayDetails() {
      console.log(`Name: ${this.getFullName()}`);
      console.log(`Age: ${this.age}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  // Example usage:
  const person1 = new Person("Raja", "Rani", 30, "raja.rani@example.com");
  person1.displayDetails();
  console.log(person1.getFullName());
  console.log(`Email: ${person1.email}`);
  
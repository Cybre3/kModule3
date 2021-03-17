class Person{

    constructor(fName, Lname, age, email){
        this.fName = fName;
        this.Lname = Lname;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.fName} ${this.Lname} (age: ${this.age}, email: ${this.email})`;
    }

    static getPeople(){
        return [
            new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
            new Person('Kingsland'),
            new Person('Stephan', 'Johnson', 25),
            new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
        ];
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString()); // Anna Simpson (age: 22, email: anna@yahoo.com)

let persons =  Person.getPeople();
persons.forEach(person => console.log(person));
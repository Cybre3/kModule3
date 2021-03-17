class Rectangle {
   

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    static getDefinition(){
        console.log('I am A Rectangle');
    }
    
}

Rectangle.getDefinition();

class User {
    static admin_type = 'admin';
    static user_type = 'user';

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    static welcome(user){
        console.log('welcome ' + user);
    }

    welcomeUser() {
        console.log(this.welcome);
    }
}

// const admin = new User('John', User.admin_type);
// User.welcome('john');

let john = new User('john', 'admin');
User.welcomeUser(john);
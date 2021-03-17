const User = (function(){
    function User(name) {

        this.getName = function(){
            return name;
        };
    }

    return User;
}());

const john = new User('john');
console.log(john.getName());

john.name = 'Mike';
console.log(john.name);
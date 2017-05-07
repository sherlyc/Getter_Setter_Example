var person = {
    firstName : "Jimmy",
    lastName : "Choo",
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || ' ';
        this.lastName = words[1] || ' ';
    }
}

person.fullName = "Jack Tree";
console.log(person.firstName);
console.log(person.lastName);

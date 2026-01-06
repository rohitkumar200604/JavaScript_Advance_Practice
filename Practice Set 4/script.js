class user {
    constructor(name, mail) {
        this.name = name;
        this.mail = mail;
        console.log("Created user");
    }
    viewData() {
        console.log("View data");
    }
}
class admin extends user {
    constructor(name,mail) {
        super(name,mail);
        console.log("Created admin")
    }
    editData() {
        console.log("Edit data");
    }
}

let user_id = new user("Rohan","rohan124@mail.com");
let admin_id = new admin("Arun","arun56789@mail.com");
//different function and class
/*
    function adalah cara supaya sebuah kode dapat digunakan kembali
    class adalah blueprint untuk membuat objek
*/

//example blueprint user
//create login and logout method
class User {
    constructor(id,nama,email,password){
        this.id = id;
        this.nama = nama;
        this.email = email;
        this.password = password;
    }
    login(){
        // const 
        console.log(`${this.email} telah login`);
        return this;
    }
}


//class inheritence
class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email !== users.email; 
        })
        console.log(this.email);
    }
}

const userOne = new User(1,'yogs','yogawickasono@gmail.com',"yog123");
const userTwo = new User(1,'yogs','yogawickasono123@gmail.com',"yog123");
const admin = new Admin(0,'admin','admin@gmail.com','123');
let users = [userOne,userTwo,admin];
admin.deleteUser(userOne);
console.log(users);

// console.log(userOne,userTwo);

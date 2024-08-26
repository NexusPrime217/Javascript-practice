class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}
// console.log(typeof typeof User);

const hitesh=new User("a@abhi.ai","abc")
console.log(hitesh.password);

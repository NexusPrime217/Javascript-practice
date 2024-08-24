function multiplyByFive(num){
    return num*5
}

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function CreateUser(username,score){
    this.username=username
    this.score=score
}

CreateUser.prototype.increment=function(){
    this.score++;
}
CreateUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai=new CreateUser("chai",25)
const tea=new CreateUser("tea",250)

chai.increment()
chai.printMe()


const accountId=144553
let accountEmail="nasg@gmail.com" //
var accountPassword="21412" //Prefer not to use because of issue in block scope and functional scope.
accountCity="Jaipur"
let accountState;

//accountId=2 //not allowed
console.log(accountId)

accountEmail="fsafjf@gmail.com"
accountPassword=4642352
accountCity="Pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
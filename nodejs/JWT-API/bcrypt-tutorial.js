const bcrypt = require('bcryptjs')
const user_passwords = 'abc123'

//hashing plaintext passwords
bcrypt.hash(user_passwords,10)
.then(result=>{
    console.log(`before ${user_passwords}\nafter ${result}`)
    //$2a$10$0pZF3H1t92Feax3CclQ0UORnSjF7fw7Ads9ZbxYu31XTsPGUNWrdS
})

const passentbyfront = "123123"

bcrypt.compare(passentbyfront,"$2a$10$0pZF3H1t92Feax3CclQ0UORnSjF7fw7Ads9ZbxYu31XTsPGUNWrdS")  //return false bcoz passentbyfont is 123123 and the hash is for user_passwords
.then(result=>{
    console.log(result)
})
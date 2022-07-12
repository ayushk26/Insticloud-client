const GUN = require('gun')

const gun = new GUN()
var user = gun.user

const createUser = async (username,password) => {
    user.create(username,password,(ack)=>{
        if(ack.err) alert(ack.err)
        else {
            console.log(ack)
            alert('User Created')
        }
    })
}

const loginUser = async (username,password) => {
    user.auth(username,password,(ack) => {
        if(ack.err) alert(ack.err)
        else {
            console.log(ack)
            alert('User Logged in')
        }
    })
}

export default {createUser, loginUser}
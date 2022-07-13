const GUN = require('gun')
const SEA = require('gun/sea') // Don't remove this, it contains gun.user() func

const gun = new GUN()
const user = gun.user()

const createUser = (username,password) => {

    user.create(username,password,(ack)=>{
        if(ack.err) alert(ack.err)
        else {
            alert('User Created')
        }
    })
}

const loginUser = (username,password) => {

    user.auth(username,password,(ack) => {
        if(ack.err) alert(ack.err)
        else {
            alert('User Logged in')
        }
    })
}

export default {loginUser,createUser}
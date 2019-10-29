const ONLINEBASEURL = 'http://192.144.213.47:8080'
const LinkConstant = '/'

const LOGIN = `${ONLINEBASEURL}/auth/login${LinkConstant}`
const LOGIN_OUT = `${ONLINEBASEURL}/auth/logout${LinkConstant}`

module.exports = {
    LOGIN: LOGIN,
    LOGIN_OUT: LOGIN_OUT,
}

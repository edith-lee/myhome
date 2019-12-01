import axios from 'axios'

export function HttpGet(url, token = '') {
    var result = axios({
        method: "GET",
        headers: {
            'Authorization': token,
        },
        url: url,
        //withCredentials: true
    })
    return result
}

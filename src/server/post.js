import axios from 'axios'

export function HttpPost(url, data, token = '') {
    var result = axios({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: url,
        data:data
    })
    
    return result
}

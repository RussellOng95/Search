import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
        "Client-ID c84e8bcc2f42b0e9f1be3d3bff6483f2fac41339ca7e0e3784506eebe3a3953d"
    }
})
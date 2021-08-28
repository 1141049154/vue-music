import axios from 'axios'

export function request(config){
        const inter = axios.create({
            baseURL:'http://152.136.185.210:7878/api/m5',
            timeout:5000
        })       
   
    inter.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err);
    })
    inter.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    return inter(config)
}
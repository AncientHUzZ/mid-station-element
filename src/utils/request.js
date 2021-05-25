import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken} from '@/utils/auth'
import {noAuth} from "./access"
import router from '../router'


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 9000
})

// request interceptor
service.interceptors.request.use(config => {
        if (config.url.indexOf('/login') !== -1) {
            config.headers.contentType = 'application/json'
        } else {
            config.headers.authorization = 'Bearer ' + getToken()
            config.headers.contentType = 'application/json'
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const {data, status} = response
        if (data.code === 0 && status === 200) {
            return {
                data: data.data,
                code: data.code
            }
        } else {
            Message({
                message: data.msg,
                type: 'error',
                duration: 3000
            })
            return {
                data: '',
                code: data.code
            }
        }


    },
    error => {
        let message = '服务器异常,请联系管理员！'
        if (error.toString().indexOf('401') !== -1) {
            noAuth()
            router.push('/login')
        } else {
            Message({
                message: message,
                type: 'error',
                duration: 3000
            })
        }
        return Promise.reject(error)
    }
)

export default service

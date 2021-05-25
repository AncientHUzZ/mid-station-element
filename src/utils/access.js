import { Message } from 'element-ui'

export function noAuth() {
    Message({
        message: '您的登录已过期！',
        type: 'error',
        duration: 3000
    })
}
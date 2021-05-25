import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

//上传图片
export function upload(params) {
    let formData = new FormData()
    for(let i in params){
        formData.append(i, params[i])
    }
    return request({
        url: '/api/upms/resource/upload',
        method: 'post',
        data: formData
    })
}

const userRules = {
    loginName: [
        {
            required: true, message: '请输入登录名', trigger: 'blur'
        }
    ],
    role: [
        {
            required: true, message: '请选择角色', trigger: 'change'
        }
    ],
    userName: [
        {
            required: true, message: '请输入用户姓名', trigger: 'blur'
        }
    ],
    cellPhone: [
        {
            required: true, message: '请输入联系电话', trigger: 'blur'
        }
    ]
}

export default userRules

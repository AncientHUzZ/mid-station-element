const pwdRules = {
    oldPassword: [
        {
            required: true, message: '请输入旧密码', trigger: 'blur'
        }
    ],
    newPassword: [
        {
            required: true, message: '请输入新密码', trigger: 'blur'
        }
    ],
    confirmPassword: [
        {
            required: true, message: '请确认新密码', trigger: 'blur'
        }
    ]
}

export default pwdRules

const roleRules = {
    roleName: [
        {
            required: true, message: '请输入角色名称', trigger: 'blur'
        }
    ],
    roleIdentification: [
        {
            required: true, message: '请输入角色标识', trigger: 'blur'
        }
    ],
    department: [
        {
            required: true, message: '请选择部门', trigger: 'change'
        }
    ]
}

export default roleRules

const equipmentRules = {
    name: [
        {
            required: true, message: '请选择驱动名称', trigger: 'change'
        }
    ],
    host: [
        {
            required: true, message: '请输入主机名', trigger: 'blur'
        }
    ],
    timeout: [
        {
            required: true, message: '请输入超时时间', trigger: 'blur'
        }
    ],
    port: [
        {
            required: true, message: '请选择端口号', trigger: 'change'
        }
    ],
    concurrentRequest: [
        {
            required: true, message: '请输入并发请求', trigger: 'blur'
        }
    ],
    register: [
        {
            required: true, message: '请输入寄存器数', trigger: 'blur'
        }
    ],
    addressing: [
        {
            required: true, message: '请输入从0开始寻址', trigger: 'blur'
        }
    ]
}

export default equipmentRules

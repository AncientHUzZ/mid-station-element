const initialRules = {
    specification:[
        {
            required: true, message: '请输入规格', trigger: 'blur'
        }
    ],
    aod: [
        {
            required: true, message: '请输入平均外径', trigger: 'blur'
        }
    ],
    mod: [
        {
            required: true, message: '请输入最大外径', trigger: 'blur'
        }
    ],
    nod: [
        {
            required: true, message: '请输入最小外径', trigger: 'blur'
        }
    ],
    mor: [
        {
            required: true, message: '请输入最大不圆度', trigger: 'blur'
        }
    ],
    minDiameter: [
        {
            required: true, message: '请输入最小通径', trigger: 'blur'
        }
    ]
}

export default initialRules

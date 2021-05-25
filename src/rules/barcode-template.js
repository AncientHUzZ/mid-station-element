const barcodeRules = {
    name: [
        {
            required: true, message: '请输入名称', trigger: 'blur'
        }
    ],
    type: [
        {
            required: true, message: '请选择条码类型', trigger: 'change'
        }
    ]
}

export default barcodeRules

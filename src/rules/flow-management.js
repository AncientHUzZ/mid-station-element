export const flowCodeRules = {
    codeTemplate: [
        {
            required: true, message: '请选择条码模版', trigger: 'change'
        }
    ],
    startFlow: [
        {
            required: true, message: '请输入起始流水号', trigger: 'blur'
        }
    ],
    endFlow: [
        {
            required: true, message: '请输入终止流水号', trigger: 'blur'
        }
    ],
    printer: [
        {
            required: true, message: '请选择打印机', trigger: 'change'
        }
    ]
}

export const qrCodeRules = {
    printTemplate: [
        {
            required: true, message: '请选择打印模版', trigger: 'change'
        }
    ],
    startFlow: [
        {
            required: true, message: '请输入起始流水号', trigger: 'blur'
        }
    ],
    endFlow: [
        {
            required: true, message: '请输入终止流水号', trigger: 'blur'
        }
    ],
    printer: [
        {
            required: true, message: '请选择打印机', trigger: 'change'
        }
    ]
}

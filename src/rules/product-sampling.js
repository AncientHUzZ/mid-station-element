const samplingRules = {
    meltingZone:[
        {
            required: true, message: '请输入熔区长度', trigger: 'blur'
        }
    ],
    outerDiameter:[
        {
            required: true, message: '请输入外径', trigger: 'blur'
        }
    ],
    wallThickness: [
        {
            required: true, message: '请输入壁厚', trigger: 'blur'
        }
    ],
    resistance: [
        {
            required: true, message: '请输入电阻值', trigger: 'blur'
        }
    ],
    socketSize: [
        {
            required: true, message: '请输入承口/插口尺寸', trigger: 'blur'
        }
    ],
    resistanceTest: [
        {
            required: true, message: '请确认电阻检验', trigger: 'change'
        }
    ]
}

export default samplingRules

const orderDetailRules = {
    materialNumber: [
        {
            required: true, message: '请输入原料批号', trigger: 'blur'
        }
    ],
    turnover: [
        {
            required: true, message: '请输入流水数量', trigger: 'blur'
        }
    ],
    dryingTime: [
        {
            required: true, message: '请选择烘干时间', trigger: 'change'
        }
    ],
    productionAddress: [
        {
            required: true, message: '请输入生产地址', trigger: 'blur'
        }
    ],
    productionDate: [
        {
            required: true, message: '请选择生产时间', trigger: 'change'
        }
    ],
    standardResistance: [
        {
            required: true, message: '请输入标准阻值', trigger: 'blur'
        }
    ],
    resistanceRange: [
        {
            required: true, message: '请输入阻值偏差范围', trigger: 'blur'
        }
    ],
    groupId: [
        {
            required: true, message: '请输入生产机组号', trigger: 'blur'
        }
    ],
    fittingType: [
        {
            required: true, message: '请选择管件类型', trigger: 'change'
        }
    ],
    specification: [
        {
            required: true, message: '请输入产品规格', trigger: 'blur'
        }
    ],
    fittingWeight: [
        {
            required: true, message: '请输入管件重量', trigger: 'blur'
        }
    ],
    gateShape: [
        {
            required: true, message: '请输入浇口形状', trigger: 'blur'
        }
    ],
    workOrder: [
        {
            required: true, message: '请上传工作令', trigger: 'blur'
        }
    ],
    jobSchedule: [
        {
            required: true, message: '请上传作业计划单', trigger: 'blur'
        }
    ],
    craftList: [
        {
            required: true, message: '请上传工艺单', trigger: 'blur'
        }
    ]
}

export default orderDetailRules

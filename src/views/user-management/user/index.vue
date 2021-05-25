<template>
    <div class="user">
        <el-card shadow="always">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="params.loginName" size="medium">
                        <template slot="prepend">登录名</template>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="params.userName" size="medium">
                        <template slot="prepend">用户姓名</template>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <div style="width:100%;display: flex;">
                        <div class="select-prepend">角色</div>
                        <el-select v-model="params.role" size="medium" class="select-custom">
                            <el-option label="管理员" :value="1"></el-option>
                            <el-option label="质检人员" :value="2"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div style="width: 100%;display: flex;justify-content: flex-end">
                        <el-button plain size="medium">重置</el-button>
                        <el-button type="primary" size="medium">查询</el-button>
                    </div>
                </el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-button type="primary" size="medium" @click="showEditUser(null)">新增</el-button>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-table :data="userList" stripe style="width: 100%;">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="loginName" label="登录名"></el-table-column>
                <el-table-column prop="userName" label="用户姓名"></el-table-column>
                <el-table-column prop="role" label="角色">
                    <template slot-scope="scope">
                        <span v-if="scope.row.role === 1">管理员</span>
                        <span v-if="scope.row.role === 2">车间人员</span>
                        <span v-if="scope.row.role === 3">调度人员</span>
                        <span v-if="scope.row.role === 4">质检人员</span>
                        <span v-if="scope.row.role === 5">外部用户</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createDate" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" style="margin-right: 10px" @click="showEditUser(scope.row)">编辑</el-button>
                        <el-popconfirm icon="el-icon-info" icon-color="red" placement="top-end"
                                       title="确定要删除该用户吗？" @onConfirm="deleteUser(scope.row)">
                            <el-button slot="reference" type="text">删除</el-button>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <br>
            <div class="pagination-position">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="params.current"
                    :page-sizes="[10, 20, 30, 50]"
                    :page-size="params.size"
                    layout="total, sizes, prev, pager, next"
                    :total="total">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog :title="title" :visible.sync="editUserFlag" width="40%" :before-close="cancelUserEdit">
            <div style="width: 80%; margin: 0 auto;">
                <el-form ref="userForm" :model="user" :rules="rules"  label-suffix=":" label-width="100px">
                    <el-form-item label="登录名" prop="loginName">
                        <el-input v-model="user.loginName" placeholder="请输入登录名" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="角色" prop="role">
                        <el-select v-model="user.role" placeholder="请选择角色" size="medium" style="width: 100%">
                            <el-option :value="1" label="管理员"></el-option>
                            <el-option :value="2" label="车间人员"></el-option>
                            <el-option :value="3" label="调度人员"></el-option>
                            <el-option :value="4" label="质检人员"></el-option>
                            <el-option :value="5" label="外部人员"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="用户姓名" prop="userName">
                        <el-input v-model="user.userName" placeholder="请输入用户姓名" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="cellPhone">
                        <el-input v-model="user.cellPhone" placeholder="请输入联系电话" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="user.password" disabled size="medium"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer">
                <el-button @click="cancelUserEdit">取 消</el-button>
                <el-button type="primary" @click="confirmUser">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { deepClone } from "@/utils";
    import userRules from "@/rules/user";
    export default {
		name: "index",
        data() {
		    return {
		        total:5,
                params: {
                    loginName: '',
                    userName: '',
                    role: '',
                    current: 1,
                    size: 10
                },
                userList:[
                    {
                        loginName: 'admin',
                        userName: '张三',
                        role: 1,
                        cellPhone: '',
                        password: '',
                        createDate: '2021-05-20'
                    },
                    {
                        loginName: 'operator',
                        userName: '张三',
                        role: 2,
                        cellPhone: '',
                        password: '',
                        createDate: '2021-05-20'
                    },
                    {
                        loginName: 'plan',
                        userName: '张三',
                        role: 3,
                        cellPhone: '',
                        password: '',
                        createDate: '2021-05-20'
                    },
                    {
                        loginName: 'qc',
                        userName: '张三',
                        role: 4,
                        cellPhone: '',
                        password: '',
                        createDate: '2021-05-20'
                    },
                    {
                        loginName: 'user',
                        userName: '张三',
                        role: 5,
                        cellPhone: '',
                        password: '',
                        createDate: '2021-05-20'
                    },
                ],
                title: '新增用户',
                editUserFlag: false,
                user: {
		            loginName: '',
                    userName: '',
                    role: '',
                    cellPhone: '',
                    password: '88888888'
                },
                rules: userRules
            }
        },
        methods: {
            handleSizeChange(size) {
                console.log(size)
            },
            handleCurrentChange(page) {
                console.log(page)
            },
            showEditUser(user) {
                if (user) {
                    this.title = '编辑用户'
                    this.user = deepClone(user)
                } else {
                    this.title = '新增用户'
                }
                this.editUserFlag = true
            },
            deleteUser(user) {
                console.log(user)
            },
            confirmUser() {
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        console.log(this.user)
                        this.editUserFlag = false
                    } else {
                        return false;
                    }
                })
            },
            cancelUserEdit() {
                this.$refs['userForm'].resetFields()
                this.editUserFlag = false
            }
        }
	}
</script>

<style lang="scss" scoped>
    @import "src/styles/common";
    .user {
        padding: 20px 30px;
    }
</style>

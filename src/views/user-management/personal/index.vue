<template>
    <div class="personal">
        <el-tabs type="border-card">
            <el-tab-pane label="基本信息">
                <el-form ref="userForm" :model="user" :rules="userRules"  label-suffix=":" label-width="100px" style="width: 600px;margin: 0 auto">
                    <el-form-item label="登录名" prop="loginName">
                        <el-input v-model="user.loginName" disabled placeholder="请输入登录名" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="角色" prop="role">
                        <el-select v-model="user.role" placeholder="请选择角色" size="medium" style="width: 100%" disabled>
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
                </el-form>
                <div style="text-align: center">
                    <el-button @click="resetUser">重 置</el-button>
                    <el-button type="primary" @click="confirmUser">修 改</el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改密码">
                <el-form ref="passwordForm" :model="pwd" :rules="pwdRules"  label-suffix=":" label-width="120px" style="width: 600px;margin: 0 auto">
                    <el-form-item label="旧密码" prop="oldPassword">
                        <el-input v-model="pwd.oldPassword" placeholder="请输入旧密码" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPassword">
                        <el-input v-model="pwd.newPassword" placeholder="请输入新密码" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码" prop="confirmPassword">
                        <el-input v-model="pwd.confirmPassword" placeholder="请确认新密码" size="medium"></el-input>
                    </el-form-item>
                </el-form>
                <div style="text-align: center">
                    <el-button @click="resetPassword">重 置</el-button>
                    <el-button type="primary" @click="confirmPassword">修 改</el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import userRules from "@/rules/user";
    import pwdRules from "@/rules/pwd";
	export default {
		name: "index",
        data() {
		    return {
                userRules: userRules,
		        user: {
                    loginName: 'admin',
                    userName: '张三',
                    role: 1,
                    cellPhone: '18112644267',
                    password: '88888888'
                },
                pwd: {
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                },
                pwdRules: pwdRules
            }
        },
        methods: {
            resetUser() {

            },
            confirmUser() {
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        console.log(this.user)
                    } else {
                        return false;
                    }
                })
            },
            resetPassword() {

            },
            confirmPassword() {
                this.$refs['passwordForm'].validate((valid) => {
                    if (valid) {
                        console.log(this.pwd)
                    } else {
                        return false;
                    }
                })
            }
        }
	}
</script>

<style scoped>
    .personal {
        padding: 20px 30px;
    }
</style>

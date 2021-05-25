<template>
    <div class="login-container">
        <el-card style="width: 400px;position: absolute;right: 160px;top: 50%;transform: translateY(-60%);">
            <div slot="header">
                <div class="title-container">
                    <span class="title">欢迎登录</span>
                </div>
            </div>
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
                <el-form-item prop="username">
                    <el-input
                        ref="username"
                        v-model="loginForm.username"
                        name="username"
                        type="text"
                        tabindex="1"
                        autocomplete="on"
                    >
                        <svg-icon slot="prefix" icon-class="user"/>
                    </el-input>
                </el-form-item>
                <el-tooltip v-model="capsTooltip" content="大写已锁定" placement="right" manual>
                    <el-form-item prop="password">
                        <el-input
                            :key="passwordType"
                            ref="password"
                            v-model="loginForm.password"
                            :type="passwordType"
                            name="password"
                            tabindex="2"
                            autocomplete="on"
                            @keyup.native="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter.native="handleLogin"
                        >
                            <svg-icon slot="prefix" icon-class="password"/>
                            <span slot="suffix" class="show-pwd" @click="showPwd">
                                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                            </span>
                        </el-input>
                    </el-form-item>
                </el-tooltip>
                <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;font-size: 16px" @click.native.prevent="handleLogin">登 录</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '123456'
                },
                loginRules: {
                    username: [{required: true, message: '请输入登录名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                },
                passwordType: 'password',
                capsTooltip: false,
                loading: false,
                showDialog: false,
                redirect: undefined,
                otherQuery: {}
            }
        },
        watch: {
            $route: {
                handler: function (route) {
                    const query = route.query
                    if (query) {
                        this.redirect = query.redirect
                        this.otherQuery = this.getOtherQuery(query)
                    }
                },
                immediate: true
            }
        },
        mounted() {
            if (this.loginForm.username === '') {
                this.$refs.username.focus()
            } else if (this.loginForm.password === '') {
                this.$refs.password.focus()
            }
        },
        methods: {
            checkCapslock(e) {
                const {key} = e
                this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
            },
            showPwd() {
                if (this.passwordType === 'password') {
                    this.passwordType = ''
                } else {
                    this.passwordType = 'password'
                }
                this.$nextTick(() => {
                    this.$refs.password.focus()
                })
            },
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('user/login', this.loginForm)
                            .then(() => {
                                this.$router.push({path: this.redirect || '/', query: this.otherQuery})
                                this.loading = false
                            })
                            .catch(() => {
                                this.loading = false
                            })
                    } else {
                        return false
                    }
                })
            },
            getOtherQuery(query) {
                return Object.keys(query).reduce((acc, cur) => {
                    if (cur !== 'redirect') {
                        acc[cur] = query[cur]
                    }
                    return acc
                }, {})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login-container {
        min-height: 100%;
        width: 100%;
        background-image: url("../../assets/images/login-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        .login-form {
            position: relative;
            width: 500px;
            max-width: 100%;
            /*padding: 160px 35px 0;*/
            margin: 0 auto;
            overflow: hidden;
        }

        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;

            span {
                &:first-of-type {
                    margin-right: 16px;
                }
            }
        }

        .svg-container {
            padding: 6px 5px 6px 15px;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
        }

        .title-container {
            position: relative;

            .title {
                font-size: 26px;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }

        .show-pwd {
            position: absolute;
            right: 10px;
            top: 3px;
            font-size: 16px;
            cursor: pointer;
            user-select: none;
        }

        .thirdparty-button {
            position: absolute;
            right: 0;
            bottom: 6px;
        }

        @media only screen and (max-width: 470px) {
            .thirdparty-button {
                display: none;
            }
        }
    }
</style>

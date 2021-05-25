<template>
    <div class="role">
        <el-card shadow="always">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="params.roleName" size="medium">
                        <template slot="prepend">角色名称</template>
                    </el-input>
                </el-col>
                <el-col :span="18">
                    <div style="width: 100%;display: flex;justify-content: flex-end">
                        <el-button plain size="medium">重置</el-button>
                        <el-button type="primary" size="medium">查询</el-button>
                    </div>
                </el-col>
            </el-row>
            <br>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-button type="primary" size="medium" @click="showEditRole(null)">新增</el-button>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-table :data="roleList" stripe style="width: 100%;">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="roleName" label="角色名称"></el-table-column>
                <el-table-column prop="roleIdentification" label="角色标识"></el-table-column>
                <el-table-column prop="department" label="部门">
                    <template slot-scope="scope">
                        <span>{{ scope.row.department === 1 ? '部门一':'部门二' }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createDate" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" style="margin-right: 10px" @click="showEditAuth(scope.row)">权限管理</el-button>
                        <el-button type="text" style="margin-right: 10px" @click="showEditRole(scope.row)">编辑</el-button>
                        <el-popconfirm icon="el-icon-info" icon-color="red" placement="top-end"
                                       title="确定要删除该角色吗？" @onConfirm="deleteRole(scope.row)">
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
        <el-dialog :title="title" :visible.sync="editRoleFlag" width="40%" :before-close="cancelRoleEdit">
            <div style="width: 80%; margin: 0 auto;">
                <el-form ref="roleForm" :model="role" :rules="rules"  label-suffix=":" label-width="100px">
                    <el-form-item label="角色名称" prop="roleName">
                        <el-input v-model="role.roleName" placeholder="请输入角色名称" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="角色标识" prop="roleIdentification">
                        <el-input v-model="role.roleIdentification" placeholder="请输入角色标识" size="medium"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" prop="department">
                        <el-select v-model="role.department" placeholder="请选择部门" size="medium" style="width: 100%">
                            <el-option :value="1" label="部门一"></el-option>
                            <el-option :value="2" label="部门二"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer">
                <el-button @click="cancelRoleEdit">取 消</el-button>
                <el-button type="primary" @click="confirmRole">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="权限管理" :visible.sync="editAuthFlag" width="40%" :before-close="cancelAuthEdit">
            <div style="width: 80%; margin: 0 auto;">
                <el-checkbox-group v-model="role.authority">
                    <div class="auth-area">
                        <div class="auth-item" v-for="(item, index) in authList" :key="index">
                            <el-checkbox :label="item.value"> {{ item.label }} </el-checkbox>
                        </div>
                    </div>
                </el-checkbox-group>
            </div>
            <div slot="footer">
                <el-button @click="cancelAuthEdit">取 消</el-button>
                <el-button type="primary" @click="confirmAuth">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { deepClone } from "@/utils";
    import roleRules from "@/rules/role";
    export default {
		name: "index",
        data() {
		    return {
		        total: 5,
		        params: {
                    roleName: '',
                    current: 1,
                    size: 10
                },
                roleList: [
                    {
                        roleName: '管理员',
                        roleIdentification: '管理员',
                        department: 1,
                        authority: [1,2,3,4],
                        createDate: '2021-04-30'
                    },
                    {
                        roleName: '车间人员',
                        roleIdentification: '车间人员',
                        department: 1,
                        authority: [1,2],
                        createDate: '2021-05-10'
                    },
                    {
                        roleName: '调度人员',
                        roleIdentification: '调度人员',
                        department: 1,
                        authority: [],
                        createDate: '2021-05-11'
                    },
                    {
                        roleName: '质检人员',
                        roleIdentification: '质检人员',
                        department: 2,
                        authority: [],
                        createDate: '2021-05-12'
                    },
                    {
                        roleName: '外部用户',
                        roleIdentification: '外部用户',
                        department: 2,
                        authority: [],
                        createDate: '2021-05-13'
                    }
                ],
                editRoleFlag: false,
                title: '新增角色',
                role: {
                    roleName: '',
                    roleIdentification: '',
                    department: '',
                    authority: [],
                    createDate: ''
                },
                rules: roleRules,
                editAuthFlag: false,
                authList: [
                    { label: '设备建模', value: 1 },{ label: '生产管理', value: 2 },{ label: '电子报表', value: 3 },{ label: '用户权限', value: 4 }
                ]
            }
        },
        methods: {
            handleSizeChange(size) {
                console.log(size)
            },
            handleCurrentChange(page) {
                console.log(page)
            },
            showEditRole(role) {
                if (role) {
                    this.title = '编辑角色'
                    this.role = deepClone(role)
                } else {
                    this.title = '新增角色'
                }
                this.editRoleFlag = true
            },
            showEditAuth(role) {
                this.role = deepClone(role)
                this.editAuthFlag = true
            },
            deleteRole(role) {
                console.log(role);
            },
            confirmRole() {
                this.$refs['roleForm'].validate((valid) => {
                    if (valid) {
                        console.log(this.role)
                        this.editRoleFlag = false
                    } else {
                        return false;
                    }
                });
            },
            cancelRoleEdit() {
                this.$refs['roleForm'].resetFields()
                this.editRoleFlag = false
            },
            confirmAuth() {
                console.log(this.role)
                this.editAuthFlag = false
            },
            cancelAuthEdit() {
                this.editAuthFlag = false
            }
        }
	}
</script>

<style lang="scss" scoped>
    @import "src/styles/common";
    .role {
        padding: 20px 30px;
        .auth-area {
            width:100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .auth-item {
                width: 50%;
                text-align: center;
                margin-bottom: 15px
            }
        }
    }
</style>

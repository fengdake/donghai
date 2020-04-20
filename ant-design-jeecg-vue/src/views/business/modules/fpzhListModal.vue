<template>
  <a-modal
    :width="modalWidth"
    :visible="visible"
    title="部门搜索"
    :confirmLoading="confirmLoading"
    :destroyOnClose='destroyOnClose'
    @ok="handleSubmit"
    @cancel="handleCancel"
    cancelText="关闭"
    wrapClassName="ant-modal-cust-warp"
  >
    <!--部门树-->
    <template>
      <a-form :form="form" style="height: 400px;overflow-y: auto;">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="上级部门">
          <!-- <a-tree
        multiple
        checkable
        treeCheckable="tree"
        :checkedKeys="checkedKeys"
        allowClear="true"
        :checkStrictly="true"
        @check="onCheck"
        :dropdownStyle="{maxHeight:'200px',overflow:'auto'}"
        :treeData="departTree"
        placeholder="请选择上级部门"
        >
          </a-tree>-->
          <a-tree
            checkable
            @expand="onExpand"
            :expandedKeys="expandedKeys"
            :autoExpandParent="autoExpandParent"
            v-model="checkedKeys"
            :treeData="departTree"
            :selectedKeys="selectedKeys"
            @check='onCheck'
            :defaultSelectedKeys='defaultSelectedKeys'
          />
        </a-form-item>
      </a-form>
    </template>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'
import { getAction } from '@/api/manage'
import { queryIdTree } from '@/api/api'
import { log } from 'util'
export default {
  name: 'DepartWindow',
  components: {},
  data() {
    return {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      selectedKeys: [],
      destroyOnClose: true,
      defaultSelectedKeys: [],
      checkedKeys: [], // 存储选中的部门id
      userId: '', // 存储用户id
      model: {}, // 存储SysUserDepartsVO表
      userDepartModel: { userId: '', departIdList: [] }, // 存储用户id一对多部门信息的对象
      departList: [], // 存储部门信息
      modalWidth: 400,
      departTree: [],
      title: '操作',
      visible: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      confirmLoading: false,
      headers: {},
      form: this.$form.createForm(this),
      url: {
        userId: '/sys/user/generateUserId' // 引入生成添加用户情况下的url
      }
    }
  },
  watch: {
    // checkedKeys(val) {
    //   console.log('onCheck', val)
    // }
  },
  created(){
    this.queryDepartTree()
  },
  methods: {
    add(checkedDepartKeys) {
      this.checkedKeys = checkedDepartKeys
      this.defaultSelectedKeys = checkedDepartKeys
      // this.userId = userId;
      this.edit({})
    },
    edit(record) {
      this.departList = []
      this.form.resetFields()
      this.visible = true
    },
    close() {
      this.$emit('close')
      this.visible = false
      this.departList = []
      this.checkedKeys = []
    },
    handleSubmit() {
      const that = this
      console.log(this.departList)
      if(this.departList.length == 0){
        console.log('departList没有长度')
        that.$emit('ok',0)
      }else{
        that.$emit('ok', this.departList)
      }
      
      that.confirmLoading = false
      that.close()
    },
    handleCancel() {
      this.close()
    },
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onCheck(checkedKeys,info) {
      console.log('进入oncheck')
      console.log('onCheck', checkedKeys)
      this.departList = [];
      this.checkedKeys = checkedKeys
      let checkedNodes = info.checkedNodes;
      for (let i = 0; i < checkedNodes.length; i++) {
        let de = checkedNodes[i].data.props;
        let depart = {key:"",value:"",title:""};
        depart.key = de.value;
        depart.value = de.value;
        depart.title = de.title;
        this.departList.push(depart);
      }
      console.log('选中的支行：', this.departList)
    },
    // onSelect(selectedKeys, info) {
    //   console.log('onSelect', info)
    //   this.selectedKeys = selectedKeys
    // },
    // 选择部门时作用的API
    // onCheck(checkedKeys, info){
    //   this.departList = [];
    //   this.checkedKeys = checkedKeys.checked;
    //   let checkedNodes = info.selectedNodes;
    //   for (let i = 0; i < checkedNodes.length; i++) {
    //     let de = checkedNodes[i].data.props;
    //     let depart = {key:"",value:"",title:""};
    //     depart.key = de.value;
    //     depart.value = de.value;
    //     depart.title = de.title;
    //     this.departList.push(depart);
    //   }
    //   //console.log('onCheck', checkedKeys, info);
    // },
    queryDepartTree() {
      queryIdTree().then(res => {
        if (res.success) {
          this.departTree = res.result
        }
      })
    },
    modalFormOk() {}
  }
}
</script>

<style scoped>
.ant-table-tbody .ant-table-row td {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
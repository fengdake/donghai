<template xmlns:background-color="http://www.w3.org/1999/xhtml">
  <a-row :gutter="10">
    <a-col :md="12" :sm="24">
      <a-card :bordered="false">

        <!-- 按钮操作区域 -->
        <a-row style="margin-left: 14px">
          <a-button @click="handleAdd(1)" type="primary">添加一级行业</a-button>
        </a-row>
        <div style="background: #fff;padding-left:16px;height: 100%; margin-top: 5px">
          <a-alert type="info" :showIcon="true">
            <div slot="message">
              当前选择：
              <a v-if="this.currSelected.title">{{ getCurrSelectedTitle() }}</a>
              <a v-if="this.currSelected.title" style="margin-left: 10px" @click="onClearSelected">取消选择</a>
            </div>
          </a-alert>
          <a-input-search @search="onSearch" style="width:100%;margin-top: 10px" placeholder="请输入行业名称"/>
          <!-- 树-->
          <a-col :md="10" :sm="24">
            <template>
              <a-dropdown :trigger="[this.dropTrigger]" @visibleChange="dropStatus">
               <span style="user-select: none">
            <a-tree
              @select="onSelect"
              @check="onCheck"
              @rightClick="rightHandle"
              :selectedKeys="selectedKeys"
              :checkedKeys="checkedKeys"
              :treeData="hymxTree"
              :checkStrictly="true"
              :autoExpandParent="autoExpandParent"
              :defaultExpandParent="autoExpandParent"
              @expand="onExpand"/>
                </span>
                <!--新增右键点击事件,和增加添加和删除功能-->
                <a-menu slot="overlay">
                  <a-menu-item @click="handleAdd(3)" key="1">添加</a-menu-item>
                  <a-menu-item @click="handleDelete" key="2">删除</a-menu-item>
                  <a-menu-item @click="closeDrop" key="3">取消</a-menu-item>
                </a-menu>
              </a-dropdown>
            </template>
          </a-col>
        </div>
      </a-card>
    </a-col>
    <a-col :md="12" :sm="24">
      <a-card :bordered="false">
        <a-form :form="form">
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行业名称">
            <a-input placeholder="请输行业名称" v-decorator="['hymc', validatorRules.hymc ]"/>
          </a-form-item>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="上级行业">
            <a-tree-select
              style="width:100%"
              :dropdownStyle="{maxHeight:'200px',overflow:'auto'}"
              :treeData="treeData"
              :disabled="disable"
              v-model="model.fhybh"
              placeholder="无">
            </a-tree-select>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行业编号">
            <a-input disabled placeholder="请输入行业编号" v-decorator="['hybh', validatorRules.hybh ]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="排序">
            <a-input-number style="width:368px;" v-decorator="[ 'px',{'initialValue':0}]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行业最高负债率">
            <a-input placeholder="请输入行业最高负债率" v-decorator="['hyzgzcfzl', {'initialValue':''}]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="行业系数">
            <a-input placeholder="请输入行业系数" v-decorator="['hyxs', {'initialValue':''}]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="申请授信种类编号">
            <a-input placeholder="请输入申请授信种类编号" v-decorator="['sqsxzlbh', {'initialValue':''}]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="申请授信种类级别">
            <a-input placeholder="请输入申请授信种类级别" v-decorator="['sqsxzljb', {'initialValue':''}]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="申请授信种类父级编号">
            <a-input placeholder="请输入申请授信种类父级编号" v-decorator="['sqsxzlfjbh', {'initialValue':''}]"/>
          </a-form-item>
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            label="是否启用">
            <a-select v-decorator="[ 'sfqy', {'initialValue':'1'}]" placeholder="请选择是否启用">
              <a-select-option value="0">否</a-select-option>
              <a-select-option value="1">是</a-select-option>
            </a-select>
          </a-form-item>

        </a-form>
        <div class="anty-form-btn">
          <a-button @click="emptyCurrForm" ghost type="default" htmlType="button" icon="sync">重置</a-button>
          <a-button @click="submitCurrForm" type="primary" htmlType="button" icon="form">修改并保存</a-button>
        </div>
      </a-card>
    </a-col>
    <mxgl-hymx-modal ref="mxglHymxModal" @ok="loadTree"></mxgl-hymx-modal>
  </a-row>
</template>
<script>
  import MxglHymxModal from './modules/MxglHymxModal'
  import pick from 'lodash.pick'
  import {queryMxglHymxTreeList, searchMxglHymxByKeywords, deleteMxglHymxByDepartId} from '@/api/api'
  import {httpAction, deleteAction} from '@/api/manage'
  import {JeecgListMixin} from '@/mixins/JeecgListMixin'
  // 表头
  const columns = [
    {
      title: '行业名称',
      dataIndex: 'hymc'
    },
    {
      title: '行业编号',
      dataIndex: 'hybh',
    },
    {
      title: '是否启用',
      dataIndex: 'sfqy'
    },
    {
      title: '行业系数',
      dataIndex: 'hyxs'
    },
    {
      title: '行业最高负债率',
      dataIndex: 'hyzgzcfzl'
    },
    {
      title: '申请授信种类编号',
      dataIndex: 'sqsxzlbh'
    },
    {
      title: '申请授信种类级别',
      dataIndex: 'sqsxzljb'
    },
    {
      title: '申请授信种类父级编号',
      dataIndex: 'sqsxzlfjbh'
    },
    {
      title: '排序',
      align: 'center',
      dataIndex: 'px'
    },
    {
      title: '父行业编号',
      align: 'center',
      dataIndex: 'fhybh'
    },
    {
      title: '操作',
      align: 'center',
      dataIndex: 'action',
      scopedSlots: {customRender: 'action'}
    }
  ]
  export default {
    name: 'MxglHymxList',
    mixins: [JeecgListMixin],
    components: {
      MxglHymxModal
    },
    data() {
      return {
        iExpandedKeys: [],
        loading: false,
        autoExpandParent: false,
        currFlowId: '',
        currFlowName: '',
        disable: true,
        treeData: [],
        visible: false,
        hymxTree: [],
        rightClickSelectedKey: '',
        hiding: true,
        model: {},
        dropTrigger: '',
        columns: columns,
        disableSubmit: false,
        checkedKeys: [],
        selectedKeys: [],
        autoIncr: 1,
        currSelected: {},
        form: this.$form.createForm(this),
        labelCol: {
          xs: {span: 24},
          sm: {span: 8}
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 12}
        },
        graphDatasource: {
          nodes: [],
          edges: []
        },
        validatorRules: {
          hymc: {rules: [{required: true, message: '请输入行业名称!'}]},
          hybh: {rules: [{required: true, message: '请输入行业编号!'}]}
        },
        url: {
          delete: '/business/mxglHymx/delete',
          edit: '/business/mxglHymx/edit',
          deleteBatch: '/business/mxglHymx/deleteBatch',
          exportXlsUrl: "business/mxglHymx/exportXls",
          importExcelUrl: "business/mxglHymx/importExcel",
        },
      }
    },
    computed: {
      importExcelUrl: function () {
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
      loadData() {
        this.refresh();
      },
      loadTree() {
        var that = this
        that.treeData = []
        that.hymxTree = []
        queryMxglHymxTreeList().then((res) => {
          if (res.success) {
            for (let i = 0; i < res.result.length; i++) {
              let temp = res.result[i]
              that.treeData.push(temp)
              that.hymxTree.push(temp)
              that.setThisExpandedKeys(temp)
              //console.log(temp.id)
            }
            this.loading = false
          }
        })
      },
      setThisExpandedKeys(node) {
        if (node.children && node.children.length > 0) {
          this.iExpandedKeys.push(node.key)
          for (let a = 0; a < node.children.length; a++) {
            this.setThisExpandedKeys(node.children[a])
          }
        }
      },
      refresh() {
        this.loading = true
        this.loadTree()
      },
      // 右键操作方法
      rightHandle(node) {
        this.dropTrigger = 'contextmenu'
        //console.log(node.node.eventKey)
        this.rightClickSelectedKey = node.node.eventKey
      },
      onExpand(expandedKeys) {
        //console.log('onExpand', expandedKeys)
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.iExpandedKeys = expandedKeys
        this.autoExpandParent = false
      },
      backFlowList() {
        this.$router.back(-1)
      },
      // 右键点击下拉框改变事件
      dropStatus(visible) {
        if (visible == false) {
          this.dropTrigger = ''
        }
      },
      // 右键店家下拉关闭下拉框
      closeDrop() {
        this.dropTrigger = ''
      },
      addRootNode() {
        this.$refs.nodeModal.add(this.currFlowId, '')
      },
      batchDel: function () {
        //console.log(this.checkedKeys)
        if (this.checkedKeys.length <= 0) {
          this.$message.warning('请选择一条记录！')
        } else {
          var ids = ''
          for (var a = 0; a < this.checkedKeys.length; a++) {
            ids += this.checkedKeys[a] + ','
          }
          var that = this
          this.$confirm({
            title: '确认删除',
            content: '确定要删除所选中的 ' + this.checkedKeys.length + ' 条数据?',
            onOk: function () {
              deleteAction(that.url.deleteBatch, {ids: ids}).then((res) => {
                if (res.success) {
                  that.$message.success(res.message)
                  that.loadTree()
                  that.onClearSelected()
                } else {
                  that.$message.warning(res.message)
                }
              })
            }
          })
        }
      },
      onSearch(value) {
        let that = this
        if (value) {
          searchMxglHymxByKeywords({keyWord: value}).then((res) => {
            if (res.success) {
              that.hymxTree = []
              for (let i = 0; i < res.result.length; i++) {
                let temp = res.result[i]
                that.hymxTree.push(temp)
              }
            } else {
              that.$message.warning(res.message)
            }
          })
        } else {
          that.loadTree()
        }

      },
      nodeModalOk() {
        this.loadTree()
      },
      nodeModalClose() {
      },
      hide() {
        //console.log(111)
        this.visible = false
      },
      onCheck(checkedKeys, info) {
        //console.log('onCheck', checkedKeys, info)
        this.hiding = false
        this.checkedKeys = checkedKeys.checked
      },
      onSelect(selectedKeys, e) {
        //console.log('selected', selectedKeys, e)
        this.hiding = false
        let record = e.node.dataRef
        //console.log('onSelect-record', record)
        this.currSelected = Object.assign({}, record)
        this.model = this.currSelected
        this.selectedKeys = [record.key]
        this.model.fhybh = record.fhybh
        this.setValuesToForm(record)


      },
      // 触发onSelect事件时,为部门树右侧的form表单赋值
      setValuesToForm(record) {
        this.form.setFieldsValue(pick(record, 'hymc', 'hybh', 'hyzgzcfzl', 'hyxs', 'px', 'sfqy','sqsxzlbh','sqsxzljb','sqsxzlfjbh'))
      },
      getCurrSelectedTitle() {
        return !this.currSelected.title ? '' : this.currSelected.title
      },
      onClearSelected() {
        this.hiding = true
        this.checkedKeys = {}
        this.currSelected = {}
        this.form.resetFields()
        this.selectedKeys = []
      },
      handleNodeTypeChange(val) {
        this.currSelected.nodeType = val
      },
      notifyTriggerTypeChange(value) {
        this.currSelected.notifyTriggerType = value
      },
      receiptTriggerTypeChange(value) {
        this.currSelected.receiptTriggerType = value
      },
      submitCurrForm() {
        this.form.validateFields((err, values) => {
          if (!err) {
            if (!this.currSelected.id) {
              this.$message.warning('请点击选择要修改行业!')
              return
            }

            let formData = Object.assign(this.currSelected, values)
            //console.log('Received values of form: ', formData)
            httpAction(this.url.edit, formData, 'put').then((res) => {
              if (res.success) {
                this.$message.success('保存成功!')
                this.loadTree()
              } else {
                this.$message.error(res.message)
              }
            })
          }
        })
      },
      emptyCurrForm() {
        this.form.resetFields()
      },
      nodeSettingFormSubmit() {
        this.form.validateFields((err, values) => {
          if (!err) {
            //console.log('Received values of form: ', values)
          }
        })
      },
      openSelect() {
        this.$refs.sysDirectiveModal.show()
      },
      handleAdd(num) {
        if (num == 1) {
          this.$refs.mxglHymxModal.add()
          this.$refs.mxglHymxModal.title = '新增'
        } else if (num == 2) {
          let key = this.currSelected.key
          if (!key) {
            this.$message.warning('请先选中一条记录!')
            return false
          }
          this.$refs.mxglHymxModal.add(this.selectedKeys)
          this.$refs.mxglHymxModal.title = '新增'
        } else {
          this.$refs.mxglHymxModal.add(this.rightClickSelectedKey)
          this.$refs.mxglHymxModal.title = '新增'
        }
      },
      handleDelete() {
        deleteByDepartId({id: this.rightClickSelectedKey}).then((resp) => {
          if (resp.success) {
            this.$message.success('删除成功!')
            this.loadTree()
          } else {
            this.$message.warning('删除失败!')
          }
        })
      },
      selectDirectiveOk(record) {
        //console.log('选中指令数据', record)
        this.nodeSettingForm.setFieldsValue({directiveCode: record.directiveCode})
        this.currSelected.sysCode = record.sysCode
      },
      getFlowGraphData(node) {
        this.graphDatasource.nodes.push({
          id: node.id,
          text: node.flowNodeName
        })
        if (node.children.length > 0) {
          for (let a = 0; a < node.children.length; a++) {
            let temp = node.children[a]
            this.graphDatasource.edges.push({
              source: node.id,
              target: temp.id
            })
            this.getFlowGraphData(temp)
          }
        }
      },
    },
    created() {
      this.currFlowId = this.$route.params.id
      this.currFlowName = this.$route.params.name
      // this.loadTree()
    },

  }
</script>
<style scoped>
  .ant-card-body .table-operator {
    margin: 15px;
  }

  .anty-form-btn {
    width: 100%;
    text-align: center;
  }

  .anty-form-btn button {
    margin: 0 5px;
  }

  .anty-node-layout .ant-layout-header {
    padding-right: 0
  }

  .header {
    padding: 0 8px;
  }

  .header button {
    margin: 0 3px
  }

  .ant-modal-cust-warp {
    height: 100%
  }

  .ant-modal-cust-warp .ant-modal-body {
    height: calc(100% - 110px) !important;
    overflow-y: auto
  }

  .ant-modal-cust-warp .ant-modal-content {
    height: 90% !important;
    overflow-y: hidden
  }

  #app .desktop {
    height: auto !important;
  }

  /** Button按钮间距 */
  .ant-btn {
    margin-left: 3px
  }
</style>
<template>
  <div>222222222222222222222222222222222222222</div>
                    
</template>

<script>
  import LlLlcsModal from './modules/LlLlcsModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import {filterDictText} from '@/components/dict/JDictSelectUtil'
  import { httpAction } from '@/api/manage'

  export default {
    name: "LlLlcsList",
    mixins:[JeecgListMixin],
    components: {
      LlLlcsModal
    },
    data () {
      return {
        description: 'this.name',
        pzList:[],
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
           },
		   {
            title: '贷款品种',
            align:"center",
            dataIndex: 'dkpz',
            customRender: (text) => {
              //字典值替换通用方法
              return filterDictText(this.pzList, text);
            }
           },
		   {
            title: '存款贡献度',
            align:"center",
            dataIndex: 'ckgxl'
           },
		   {
            title: '原利率(一年含一年以下)',
            align:"center",
            dataIndex: 'yll1d'
           },
		   {
            title: '新执行利率(一年含一年以下)',
            align:"center",
            dataIndex: 'xzxll1d'
           },
		   {
            title: '原利率(一年以上)',
            align:"center",
            dataIndex: 'yll1u'
           },
		   {
            title: '新执行利率(一年以上)',
            align:"center",
            dataIndex: 'xzxll1u'
           },
		   {
            title: '备注',
            align:"center",
            dataIndex: 'bz'
           },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
		url: {
          list: "/business/llLlcs/list",
          delete: "/business/llLlcs/delete",
          deleteBatch: "/business/llLlcs/deleteBatch",
          exportXlsUrl: "business/llLlcs/exportXls",
          importExcelUrl: "business/llLlcs/importExcel",
          sysPzList: "business/llLlpz/queryDictList",
       },
    }
  },
  computed: {
    importExcelUrl: function(){
      return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    }
  },
    methods: {
      initDictConfig() {
        //console.log("--我才是真的方法!--")
        httpAction(this.url.sysPzList, {}, 'get').then((res)=>{
          if(res.success){
            this.pzList = res.result;
          }else{
            //console.log(res.message);
          }}
        );
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>
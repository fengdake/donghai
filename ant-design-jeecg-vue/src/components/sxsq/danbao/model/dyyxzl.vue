<template>
  <div>
    <p></p>
    <a-carousel
      :dots="dots"
      ref="varousel"
      dotsClass="slick-dots slick-thumb"
      style="height:70%;background:#fff;"
    >
      <!-- <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)" />
      </a>-->

      <div v-for="(item,index) in list" :key="index" style="width:100%;height:80%;">
        <!-- {{lista[index].width}} -->
        <div
          style="height:400px;position: relative;overflow: hidden;display: flex;justify-content: center;align-items: center;"
        >
          <img
            @mousewheel="zoomimg(e,index)"
            @mousedown="move"
            disabled
            ondragstart="return false;"
            :src="item"
            style="position: absolute;max-width:inherit;"
            :style="{height:lista[index].width+'%',transform:'rotate('+lista[index].angle+'deg)'}"
          />
        </div>
        <div class="xiabian">
          <p class="fangsa">
            <span>
              <img @click="fangda(index)" src="../../../../assets/fangda.png" />
              <img @click="suoxiao(index)" src="../../../../assets/suoxiao.png" />
              <img @click="youzhuan(index)" src="../../../../assets/zuozhuan.png" />
              <img @click="zuozhuan(index)" src="../../../../assets/youzhuan.png" />
              <img
                v-if="cha==true&&title!=='影像资料总览'"
                @click="shanchu(index)"
                src="../../../../assets/shanchu.png"
              />
            </span>
            <span>
              <img v-if="index != 0" @click="shangyi(index)" src="../../../../assets/shangyi.png" />
              <img
                v-if="index!= list.length-1"
                @click="xiayi(index)"
                src="../../../../assets/xiayi.png"
              />
            </span>
          </p>
        </div>
      </div>
    </a-carousel>
    <div class="xiabiana">
      <img
        v-for="(item,index) in list"
        :class=" ci==index?'buzhe':'zhezao' "
        @click="dianji(index)"
        :key="index"
        :src="item"
      />
    </div>
  </div>
</template>
<script>
import { deleteAction } from '@/api/manage'
export default {
  data() {
    return {
      dots: false,
      lista: [
      ],
      list: [
      ],
      ci: 0
    }
  },
  props: ['yxlist', 'yximg', 'cha', 'title'],
  created() {},

  methods: {
    getshuju(a, e) {
      console.log(a, e)
      let that = this
      that.ci = 0
      that.list = e
			that.lista = a
      setTimeout(function() {
        that.dianji(that.ci)
        console.log(55)
      }, 30)
    },
    // 删除图片
    shanchu(e) {
			let that = this
			console.log( that.lista )
      that.$confirm({
        title: '您确定删除图片吗?',
        content: '',
        onOk() {
          that.yingzhe = true
          let obj = {
            id: that.lista[e].id
          }
          deleteAction('/business/dbryxzl/delete', obj).then(res => {
            that.yingzhe = false
            if (res.success == true) {
              that.lista.splice(e, 1)
              that.list.splice(e, 1)
              that.$emit('deleimg', e)
            } else {
              that.$notification.error({
                message: '提示',
                description: res.message,
                duration: 3
              })
              // 接口失败
            }
          })
        },
        onCancel() {
          //console.log(23)
        }
      })
    },

    dianji(index) {
      this.ci = index
      this.$refs.varousel.goTo(index)
    },
    shangyi(index) {
      if (index == 0) {
        this.ci = this.list.length - 1
      } else {
        this.ci = index - 1
      }

      this.$refs.varousel.prev()
    },
    xiayi(index) {
      if (index == this.list.length - 1) {
        this.ci = 0
      } else {
        this.ci = index + 1
      }
      this.$refs.varousel.next()
    },
    zoomimg(event,index){
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) {
        delta = -event.detail / 3;
      }
      if(delta > 0)
      {
        this.fangda(index)
      }
      else
      {
        this.suoxiao(index)
      }
    },
    move(e) {
      let odiv = e.target //获取目标元素
      console.log(1)
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft
      let disY = e.clientY - odiv.offsetTop
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        console.log(5)
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let top = e.clientY - disY

        //绑定元素位置到positionX和positionY上面
        this.positionX = top
        this.positionY = left

        //移动当前元素
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    getImgUrl(i) {
      console.log(this.list[i])
      return this.list[i]
    },
    beforeChange() {
      console.log(65)
    },
    youzhuan(e) {
      this.lista[e].angle = Number(this.lista[e].angle) - 90
      console.log(this.lista[e].angle)
    },
    zuozhuan(e) {
      this.lista[e].angle = Number(this.lista[e].angle) + 90
      console.log(this.lista[e].angle)
    },
    fangda(e) {
      console.log(4)
      console.log(this.ci)
      this.lista[e].width = Number(this.lista[e].width) + 10
      console.log(this.lista[0].width)
    },
    suoxiao(e) {
      console.log(this.lista[e].width)
      this.lista[e].width = Number(this.lista[e].width) - 10
      console.log(this.lista[e].width)
    }
  }
}
</script>
<style scoped>
.slick-dots {
  display: flex;
}
.fangsa {
  width: 470px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px auto;
}
.fangsa img {
  height: 30px !important;
  margin-left: 10px;
  display: inline-block !important;
}
.fangsa span {
  color: #6eb2ef;
  cursor: pointer;
}
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
}
.xiabiana {
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
  margin: 0px auto;
  text-align: center;
  margin-top: 10px;
}
.xiabiana img {
  width: 105px;
  height: 105px;
  margin-left: 15px;
  padding: 5px;
}
.ant-carousel >>> .slick-thumb {
  /* display: flex!important; */
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
  bottom: -60px;
  margin: 0px auto;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.buzhe {
  filter: grayscale(0%);
}
.zhezao {
  filter: grayscale(100%);
}
</style>
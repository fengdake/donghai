<template>
  <div>
    <!-- beforeChange="beforeChange"  -->
    <a-carousel arrows dotsClass="slick-dots slick-thumb" style="height:70%;background:#fff;">
      <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)" />
      </a>

      <div v-for="(item,index) in list" :key="index" style="width:100%;height:80%;">
        <div style="height:400px;position: relative;overflow: hidden;">
          <img
          @mousedown="move"
            :src="item"
            style="position: absolute;max-width:inherit;"
            :style="{width:lista[index].width+'%',transform:'rotate('+lista[index].angle+'deg)'}"
          />
        </div>
        <div class="xiabian">
          <p class="fangsa">
            <span @click="fangda(index)">放大</span>
            <span @click="suoxiao(index)">缩小</span>
            <span @click="zuozhuan(index)">左旋90度</span>
            <span @click="youzhuan(index)">右旋90度</span>
          </p>
        </div>
      </div>
    </a-carousel>
    
  </div>
</template>
<script>
const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/'
export default {
  data() {
    return {
      baseUrl,
      lista: [
        { angle: 90, width: 20 },
        { angle: 0, width: 20 },
        { angle: 90, width: 20 },
       
      ],
      list: [ 
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585645457352&di=3baa107953e934ff809c8fe74c321dcf&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2Fd4f81f0e76c744a8988e530756a678d5.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585645457352&di=3baa107953e934ff809c8fe74c321dcf&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2Fd4f81f0e76c744a8988e530756a678d5.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585645457352&di=3baa107953e934ff809c8fe74c321dcf&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2Fd4f81f0e76c744a8988e530756a678d5.jpeg',
        
      ],
      ci: 0
    }
  },
  created() {},
  
  methods: {
    move(e){
            let odiv = e.target;        //获取目标元素
             console.log(1)
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
            console.log(5)
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;    
                let top = e.clientY - disY;
                
                //绑定元素位置到positionX和positionY上面
                this.positionX = top;
                this.positionY = left;
                
                //移动当前元素
                odiv.style.left = left + 'px';
                odiv.style.top = top + 'px';
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        } ,
    getImgUrl(i) {
      console.log(i)
      this.ci = i
      return this.list[i]
    },
    beforeChange(){
      console.log(65)
    },
    youzhuan(e){
      this.lista[e].angle = Number(this.lista[e].angle) - 90
      console.log(  this.lista[e].angle )
    },
    zuozhuan(e){
      this.lista[e].angle = Number(this.lista[e].angle) + 90
      console.log(  this.lista[e].angle )
    },
    fangda(e) {
      console.log(4)
      console.log(this.ci)
      this.lista[e].width = Number(this.lista[e].width) + 10
      console.log(this.lista[0].width)
    },
    suoxiao(e){
      this.lista[e].width = Number(this.lista[e].width) - 10
    }
  }
}
</script>
<style scoped>
.slick-dots{
  display: flex;
}
.fangsa {
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px auto;
}
.xiabian {
}
.fangsa span {
  color: #6eb2ef;
  border-bottom: 1px solid #6eb2ef;
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
.ant-carousel >>> .slick-thumb {
  /* display: flex!important; */
  white-space:nowrap;
  width: 100%;
  overflow-x:scroll;
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
</style>
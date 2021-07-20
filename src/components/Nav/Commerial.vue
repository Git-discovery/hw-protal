<template>
  <div class="container-fluid position-fixed">
    <div class="container-custom">

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header">产品</div>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card>
              <div slot="header">联接</div>
              <div><a href="http://">运营商网络</a></div>
              <div><a href="http://">企业无线</a></div>
              <div><a href="http://">企业网络</a></div>
              <div><a href="http://">企业光传送与接入</a></div>
              <div><a href="http://">数字能源</a></div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              <div slot="header">云与计算</div>
              <div><a href="http://">华为与</a></div>
              <div><a href="http://">计算</a></div>
              <div><a href="http://">数据存储</a></div>
              <div><a href="http://">机器视觉</a></div>
              <div><a href="http://">智能协作</a></div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              <div><a href="http://">鲲鹏通用计算产业</a></div>
              <div><a href="http://">昇腾AI计算产业</a></div>
            </el-card>
          </el-col>
        </el-row>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card>
          <div slot="header">服务</div>
          <div><a href="http://">运营商网络服务</a></div>
          <div><a href="http://">企业网络服务</a></div>
          <div><a href="http://">华为云专业服务</a></div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card>
          <div slot="header">行业解决方案</div>
          <div><a href="http://">华为云行业解决方案</a></div>
          <div><a href="http://">电信行业</a></div>
          <div><a href="http://">数字政府</a></div>
          <div><a href="http://">智慧园区</a></div>
          <div><a href="http://">交通行业</a></div>
          <div><a href="http://">电力行业</a></div>
          <div><a href="http://">金融行业</a></div>
          <div><a href="http://">产看更多&nbsp;<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card>
          <div slot="header">热点话题</div>
          <div><a href="http://">智能体</a></div>
          <div><a href="http://">5G，点亮未来</a></div>
          <div><a href="http://">F5G，光联万物</a></div>
          <div><a href="http://">自动驾驶网络</a></div>
          <div><a href="http://">IPv6+，智联无限</a></div>
        </el-card>
      </el-col>
    </el-row>
    </div>
    <content-footer
      :class="['col-md-4', 'linestyle']"
      :innerHtmls="['企业业务网站', '运营商业务网站', '华为云网站']"
      @click="handleClose"></content-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentFooter from './ContentFooter.vue';

@Component({
  components: {
    ContentFooter,
  },
})
export default class Commerial extends Vue {
  private handleClose() {
    this.$store.commit('nav/init');
  }
}
</script>

<style scoped>
</style>
<style lang="scss">
</style>

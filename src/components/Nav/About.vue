<template>
  <div class="container-fluid position-fixed">
    <div class="container-custom">
      <el-row>
        <el-col :span="8">
          <el-card>
            <div slot="header">关于华为</div>
            <el-row>
              <el-col :span="12">
                <div><a href="http://">公司介绍</a></div>
                <div><a href="http://">公司年报</a></div>
                <div><a href="http://">公司治理</a></div>
                <div><a href="http://">管理层信息</a></div>
                <div><a href="http://">招贤纳士</a></div>
                <div><a href="http://">联系我们</a></div>
              </el-col>
              <el-col :span="12">
                <div><a href="http://">可持续发展</a></div>
                <div><a href="http://">信任中心</a></div>
                <div><a href="http://">合规与诚信</a></div>
                <div><a href="http://">公共政策</a></div>
                <div><a href="http://">债券投资者</a></div>
                <div><a href="http://">供应商</a></div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card>
            <div slot="header">新闻与活动</div>
            <div><a href="http://">新闻</a></div>
            <div><a href="http://">展会活动</a></div>
            <div><a href="http://">华为直播</a></div>
            <div><a href="http://">媒体图库</a></div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card>
            <div slot="header">发现</div>
            <div><a href="http://">华为技术观察</a></div>
            <div><a href="http://">出版物</a></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-image></el-image>
        </el-col>
      </el-row>
    </div>
    <content-footer
      :class="['col-md-4', 'linestyle']"
      @click="handleClose"
    ></content-footer>
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
export default class About extends Vue {
  private handleClose() {
    this.$store.commit('nav/init');
  }
}
</script>
#drawer.el-drawer__wrapper {
  top: 92px !important;
}
#drawer {
  ~ .v-modal {
    top: 92px !important;
  }
}
<style scoped>
</style>
<style lang="scss">
</style>

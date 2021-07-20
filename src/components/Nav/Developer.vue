<template>
  <div class="container-fluid position-fixed">
    <div class="container-custom">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <div slot="header">合作伙伴</div>
          <div><a href="http://">成为合作伙伴</a></div>
          <div><a href="http://">查找合作伙伴</a></div>
          <div><a href="http://">Marketplace</a></div>
          <div><a href="http://">云市场</a></div>
          <div><a href="http://">查看更多<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">培训与认证</div>
          <div><a href="http://">学习</a></div>
          <div><a href="http://">华为认证</a></div>
          <div><a href="http://">企业客户培训</a></div>
          <div><a href="http://">华为ICT学院</a></div>
          <div><a href="http://">华为云学院</a></div>
          <div><a href="http://">查看更多<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">云与计算开发者</div>
          <div><a href="http://">华为云</a></div>
          <div><a href="http://">鲲鹏</a></div>
          <div><a href="http://">昇腾</a></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">终端开发者</div>
          <div><a href="http://">开发</a></div>
          <div><a href="http://">分发</a></div>
          <div><a href="http://">变现</a></div>
          <div><a href="http://">活动</a></div>
          <div><a href="http://">开发者学院</a></div>
          <div><a href="http://">社区</a></div>
          <div><a href="http://">查看更多&nbsp;<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
    </el-row>
    </div>
    <content-footer
      :class="['col-md-4', 'linestyle']"
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
export default class Developer extends Vue {
  private handleClose() {
    this.$store.commit('nav/init');
  }
}
</script>

<style scoped>

</style>

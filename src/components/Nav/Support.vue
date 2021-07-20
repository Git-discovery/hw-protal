<template>
  <div class="container-fluid position-fixed">
    <div class="container-custom">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <div slot="header">个人及家庭产品支持</div>
          <div><a href="http://">在线客服</a></div>
          <div><a href="http://">华为服务日</a></div>
          <div><a href="http://">服务店查询</a></div>
          <div><a href="http://">寄修客服</a></div>
          <div><a href="http://">保修期及权益查询</a></div>
          <div><a href="http://">备件价格查询</a></div>
          <div><a href="http://">查看更多<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">华为云服务支持</div>
          <div><a href="http://">智能客服</a></div>
          <div><a href="http://">新手入门</a></div>
          <div><a href="http://">支持计划</a></div>
          <div><a href="http://">自助服务</a></div>
          <div><a href="http://">云社区</a></div>
          <div><a href="http://">查看更多<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">企业业务支持</div>
          <div><a href="http://">智能客服</a></div>
          <div><a href="http://">产品支持</a></div>
          <div><a href="http://">软件下载</a></div>
          <div><a href="http://">互动社区</a></div>
          <div><a href="http://">工具</a></div>
          <div><a href="http://">查看更多&nbsp;<i class="el-icon-arrow-right"></i></a></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">运营商网络支持</div>
          <div><a href="http://">智能客服</a></div>
          <div><a href="http://">产品支持</a></div>
          <div><a href="http://">Group Space</a></div>
          <div><a href="http://">公告</a></div>
          <div><a href="http://">华为资料直通车</a></div>
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
export default class Support extends Vue {
  private handleClose() {
    this.$store.commit('nav/init');
  }
}
</script>

<style scoped>
</style>

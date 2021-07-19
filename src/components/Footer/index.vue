<template>
  <div class="container-fluid footer">
    <el-row class="footbar">
      <el-col class="text-start" :span="12"> <span>首页</span> </el-col>
      <el-col class="text-end" :span="12">
        <span>搜索</span>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col class="text-start" :span="5">
        <el-card class="card">
          <div slot="header">
            <h6><strong>关于华为</strong></h6>
          </div>
          <div><a href="">公司简介</a></div>
          <div><a href="">可持续发展</a></div>
          <div><a href="">信任中心</a></div>
          <div><a href="">管理层信息</a></div>
          <div><a href="">招贤纳士</a></div>
          <div>
            <span><a href="">查看更多&nbsp;<i class="el-icon-arrow-right"></i></a></span>
          </div>
        </el-card>
      </el-col>
      <el-col class="text-start" :span="5">
        <el-card class="card">
          <div slot="header">
            <h6><strong>新闻与活动</strong></h6>
          </div>
          <div><a href="">新闻</a></div>
          <div><a href="">展会活动</a></div>
          <div><a href="">华为直播</a></div>
          <div><a href="">媒体图库</a></div>
        </el-card>
      </el-col>
      <el-col class="text-start" :span="5">
        <el-card class="card">
          <div slot="header">
            <h6><strong>发现</strong></h6>
          </div>
          <div><a href="">华为技术观察</a></div>
          <div><a href="">出版物</a></div>
        </el-card>
      </el-col>
      <el-col class="text-start" :span="5">
        <el-card class="card">
          <div slot="header">
            <h6><strong>我们的产品</strong></h6>
          </div>
          <div><a href="">个人及家庭产品</a></div>
          <div><a href="">企业业务产品</a></div>
          <div><a href="">运营商网络产品</a></div>
          <div><a href="">华为云服务</a></div>
        </el-card>
      </el-col>
      <el-col class="text-start" :span="5">
        <el-card class="card">
          <div slot="header">
            <h6><strong>技术支持</strong></h6>
          </div>
          <div><a href="">消费者技术支持</a></div>
          <div><a href="">华为云技术支持</a></div>
          <div><a href="">企业技术支持</a></div>
          <div><a href="">运营商技术支持</a></div>
          <div><a href="">产品安全通告</a></div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row class="text-start foot-link">
      <el-col :span="2">
        <a href="">华为商城</a>
        </el-col>
      <el-col :span="2"><a href="">华为云</a></el-col>
      <el-col :span="2"><a href="">华为智能光伏</a></el-col>
      <el-col :span="2"><a href="">产品定义社区</a></el-col>
      <el-col :span="2"><a href="">华为心声社区</a></el-col>
      <el-col class="text-end" :span="14">
        <span><i class="fa fa-weibo" aria-hidden="true"></i></span>
        <span><i class="fa fa-linkedin" aria-hidden="true"></i></span>
        <span><i class="fa fa-weixin" aria-hidden="true"></i></span>
        <span><a href="https://www.github.com/Git-discovery/hw-protal.git"><i class="fa fa-github" aria-hidden="true"></i> </a></span>
        <span><i class="fa fa-cc-visa"></i></span>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
a {
    color: #333;
    &:hover {
      color: #0a58ca;
    }
  }
.footbar {
  height: 65px;
  line-height: 65px;
  padding-top: 25px;
}
.footer {
  padding-left: 10%;
  padding-right: 10%;
  background-color: #f2f2f2;
  margin-top: 60px;
}
.el-card__body > div {
  margin: 10px 0px;
}
.el-col-14 > span {
  margin: 5px 10px;
   i {
    font-size: 32px !important;
  }
}
.foot-link {
  line-height: 44px;
  height: 44px;
}
</style>
<style lang="scss">
.el-col-5 {
  width: 20% !important;
}
.card {
  background-color: #f2f2f2 !important;
  box-shadow: none !important;
  border: none !important;
}
.el-card__header {
  padding: 0px !important;
}
.el-card__body {
  padding-left: 0px !important;
}
</style>

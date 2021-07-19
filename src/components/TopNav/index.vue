<template>
  <el-tabs class="container-fluid bg-dark" id="topNav" type="card">
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-menu">集团网站</i>
      </span>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="fa fa-globe" aria-hidden="true">选择区域/语言</i>
      </span>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="fa fa-user-circle-o" aria-hidden="true">登录</i>
      </span>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TopNav extends Vue {
  private collapse: boolean;

  constructor() {
    super();
    this.collapse = true;
  }
}
</script>

<style lang="scss">
$hover-color: "#409EFF";
#topNav {
  .el-tabs__header {
    margin: 0px;
  }
  .el-tabs__nav {
    float: right;
    padding-right: 55px;
    border: 0;
  }
  .el-tabs__item {
    height: 30px;
    line-height: 30px;
    color: #ccc;
    border-left: 0;
    &:hover {
      cursor: pointer;
      color: $hover-color;
    }
  }
}
</style>

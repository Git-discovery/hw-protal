<template functional>
  <div class="container-fluid bg-grep" id="copyright">
    <el-row style="padding: 10px 0">
      <el-col>
        <span>©2021 华为技术有限公司</span>
        <span>
          <a href="">粤A2-20044005号&nbsp;</a>
          <a href="">粤公网安备 44030702002388号</a>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <a href="">联系我们</a>
        </span>
        <span><a href="">法律声明</a></span>
        <span><a href="">隐私保护</a></span>
        <span><a href="">除名查询</a></span>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Copyright extends Vue {}
</script>

<style scoped lang="scss">
.bg-grep {
  background-color: #e6e6e6;
}
a {
  font-weight: 400;
  text-decoration: none;
  color: #2c3e50;
  &:hover {
    color: #0d6efd;
  }
}
</style>
<style lang="scss">
#copyright {
  span {
    margin: auto 15px;
  }
  .el-divider--vertical {
    background: #c2c3c3;
  }
}
</style>

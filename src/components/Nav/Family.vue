<!-- 个人及家庭产品 -->
<template>
  <el-drawer
    id="drawer"
    direction="ttb"
    :withHeader="false"
    :size="'60%'"
    :visible.sync="visible"
  >
    <div class="container-fluid-box position-fixed cascading">
      <div class="container-custom">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-2-4">手机</div>
              <div class="col-md-2-4">笔记本</div>
              <div class="col-md-2-4">平板</div>
              <div class="col-md-2-4">智慧屏</div>
              <div class="col-md-2-4">VR</div>
              <div class="col-md-2-4">穿戴</div>
              <div class="col-md-2-4">音频</div>
              <div class="col-md-2-4">路由器</div>
              <div class="col-md-2-4">EMUI</div>
              <div class="col-md-2-4">全部产品</div>
            </div>
          </div>
          <div class="col-md-6">
            <el-link :href="href"></el-link>
            <el-image class="mate-x2" :src="src" alt="alt"></el-image>
          </div>
        </div>
      </div>
      <div class="row nav-footer">
        <div class="col-md-6 float-start">
          <div class="container-custom" style="margin-left: 20%">
            <div class="row">
              <div class="col-md-4 linestyle">消费者业务网站</div>
              <div class="col-md-4 linestyle">华为商城</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="container-custom">
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="handleClose"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import matex2 from '@/assets/img/matex2.jpg';
import { getFileName } from '@/utils';

@Component
export default class Family extends Vue {
  private src: string = matex2;

  private alt: string = getFileName(matex2);

  private href: string | null = '';

  @PropSync('drawer', { type: Boolean })
  private visible!: boolean;

  private handleClose() {
    this.visible = false;
    this.$emit('update:active', '');
    // this.activeName = '';
  }
}
</script>

<style scoped lang="scss">

.mate-x2 {
  width: 380px;
  float: right;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
}
#drawer.el-drawer__wrapper {
  top: 91px !important;
}

</style>
<style lang="scss">
.col-md-2-4 {
  width: 20% !important;
  margin-top: 150px !important;
  flex: 0 0 auto;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    // text-decoration-color: #000;
    text-decoration-thickness: 2px;
  }
}
.nav-footer {
  background-color: #f7f7f7;
}
</style>

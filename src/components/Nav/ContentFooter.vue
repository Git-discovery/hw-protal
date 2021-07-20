<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentFooter extends Vue {
  private handleClose() {
    this.$store.commit('nav/init');
  }
}
</script>

<style scoped>
</style>

<template functional>
  <div class="row nav-footer">
    <div class="col-md-6 float-start">
      <div class="container-custom" style="margin-left: 20%">
        <div class="row">
          <div
            :class="data.class"
            v-for="(item, key) in props.innerHtmls"
            :key="key"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="container-custom">
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          v-on="listeners"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentFooter extends Vue {

}
</script>

<style scoped>
.nav-footer {
  background-color: #f7f7f7;
}
</style>

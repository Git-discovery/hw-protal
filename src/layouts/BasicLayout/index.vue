<template>
  <div class="container-fluid-box">
    <top-nav></top-nav>
    <header>
      <navigation></navigation>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <foot></foot>
    </footer>
    <copyright></copyright>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopNav from '@/components/TopNav/index.vue';
import Navigation from '@/components/Nav/index.vue';
import Carousel from '@/components/Carousel/index.vue';
import Foot from '@/components/Footer/index.vue';
import Copyright from '@/components/Copyright/index.vue';
import path from '@/assets/img/logo.png';
import { getFileName } from '@/utils';

@Component({
  components: {
    Navigation,
    TopNav,
    Carousel,
    Foot,
    Copyright,
  },
})
export default class BasicLayout extends Vue {
  private path: string = path;

  private name: string = getFileName(path);
}
</script>
<style lang="scss">
@import "@/assets/scss/common";
</style>
<style lang="scss" scoped>

</style>

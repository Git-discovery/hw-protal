<template>
  <el-carousel class="carousel" trigger="click">
    <el-carousel-item v-for="item in items" :key="item.index">
      <el-image :src="item.path"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getHomeCarousel } from '@/utils/api';

@Component
export default class Carousel extends Vue {
  private items = [];

  created(): void {
    this.getCarousel();
  }

  getCarousel(): void {
    getHomeCarousel().then((response) => {
      this.items = response;
    });
  }
}
</script>

<style scoped>
</style>
<style lang="scss">
.carousel {
  .el-carousel__container {
    height: 600px !important;
  }
}
</style>

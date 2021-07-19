<template>
  <div class="container-fluid">
    <carousel></carousel>
    <el-row class="infos">
      <h2 class="text"><strong>推荐信息</strong></h2>
      <el-col v-for="(item, key) in items" :key="item.index" :span="size[key]">
        <el-card>
          <el-image :src="item.path" :alt="item.name"></el-image>
        </el-card>
      </el-col>
    </el-row>
    <el-image
      class="love-part"
      src="http://localhost:9000/assets/img/love-passon2.jpg"
      alt="love-passon2"
    ></el-image>
    <div class="infos">
      <h2 class="text"><strong>新闻与活动</strong></h2>
      <el-row>
        <el-col v-for="item in news" :key="item.index" :span="8">
          <el-card class="home-card-news">
            <picture v-if="item.type === 1">
              <el-tag class="home-tag">{{ item.tag }}</el-tag>
              <el-image
                class="home-news-img"
                :src="item.path"
                :alt="item.name"
              ></el-image>
              <div class="text-start home-card-bottom">
                <h5>
                  <strong>{{ item.name }}</strong>
                </h5>
                <span>
                  <i class="el-icon-location-outline"></i>
                  {{ item.address }}
                </span>
                <span>
                  <i class="el-icon-date"></i>
                  {{ item.date }}
                </span>
                <p>{{ item.text }}</p>
              </div>
            </picture>
            <div class="container-fluid text-start" id="home-scollbar" v-else>
              <el-tag class="home-tag">{{ item.tag }}</el-tag>
              <el-row class="scollbar-text">
                <el-col v-for="line in item.list" :key="line.id">
                  <h5>
                    <a href="">
                      <strong>{{ line.text }}</strong>
                    </a>
                  </h5>
                  <span>{{ line.date }}</span>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-col>
        <el-button>更多活动</el-button>
        <el-button>更多新闻</el-button>
      </el-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Carousel from '@/components/Carousel/index.vue';
import { getHomeInfos, getHomeNews } from '@/utils/api';

@Component({
  components: {
    Carousel,
  },
})
export default class Home extends Vue {
  private items: any[] = [];

  private news: any[] = [];

  private size: number[] = [16, 8, 8, 16, 8, 8, 8];

  created(): void {
    this.getItems();
  }

  getItems(): void {
    getHomeInfos().then((response) => {
      this.items = response;
    });

    getHomeNews().then((response) => {
      this.news = response;
    });
  }
}
</script>

<style scoped lang="scss">
.text {
  padding: 30px;
  margin: 30px;
  transform: translateX(0%);
  &:after {
    content: "";
    height: 2px;
    background-color: #c7000b;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    bottom: 15px;
    min-width: 35px;
  }
}
.home-tag {
  position: absolute;
  z-index: 1;
  color: #fff;
  background: url("../assets/img/type2.png");
}
.home-news-img {
  height: auto !important;
}
.home-card-bottom {
  padding: 25px 25px;
  span ~ span {
    margin: 10px 20px;
  }
  p {
    margin-top: 20px;
  }
}
.el-button {
  border: 1px solid #333;
  &:hover {
    background-color: #c7000b;
    color: #f8f8f8;
  }
}
</style>
<style lang="scss">
.container-fluid {
  padding: 0px;
}
.infos {
  margin: 0 10%;
  .el-card {
    box-shadow: none;
    border: none;
    .el-card__body {
      padding: 0px;
      margin: 20px;
      .el-image {
        height: 460px;
        width: 100%;
        img {
          transition: all 0.5s;
          &:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
        }
      }
    }
  }
}
.love-part {
  margin-top: 70px;
}
.home-card-news > .el-card__body {
  height: 520px;
  overflow: auto;
  background-color: #f8f8f8;
}
#home-scollbar {
  .el-col {
    padding: 20px;
  }
  .scollbar-text {
    padding: 25px 0;
    a {
      color: #333;
      &:hover {
        color: #c7000b;
      }
    }
  }
}
</style>

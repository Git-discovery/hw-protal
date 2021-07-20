<template>
  <nav class="text-center" id="navbar">
    <div id="tab-logo">
      <el-image :src="src" :alt="alt"></el-image>
    </div>
    <el-menu
      id="menuitem"
      :default-active="activeName"
      mode="horizontal"
      @select="handleTabActive"
      @close="handleClose"
    >
      <el-menu-item index="Family">
        <template slot="title">个人及家庭产品</template>
      </el-menu-item>
      <el-menu-item index="Commerial">
        <template slot="title">商用产品及方案</template>
      </el-menu-item>
      <el-menu-item index="Support">
        <template slot="title">服务支持</template>
      </el-menu-item>
      <el-menu-item index="Developer">
        <template slot="title">合作伙伴与开发者</template>
      </el-menu-item>
      <el-menu-item index="About">
        <template slot="title">关于华为</template>
      </el-menu-item>
      <li class="search">
        <el-dropdown id="nav-dropdown">
          <span class="el-dropdown-link online">
            <i class="el-icon-shopping-bag-2"></i>
            在线购买
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-shopping-cart-2"></i>
              华为商城
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-shopping-cart-2"></i>
              华为云
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span><i class="el-icon-search"></i></span>
      </li>
    </el-menu>
    <keep-alive>
      <el-drawer
        id="drawer"
        direction="ttb"
        :withHeader="false"
        :size="'60%'"
        :visible.sync="visible"
      >
        <component
          :is="activeName"
        ></component>
      </el-drawer>
    </keep-alive>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import src from '@/assets/img/huawei_logo.png';
import { getFileName } from '@/utils';
import { namespace } from 'vuex-class';
import Family from './Family.vue';
import Commerial from './Commerial.vue';
import Support from './Support.vue';
import Developer from './Developer.vue';
import About from './About.vue';

const navState = namespace('nav');

@Component({
  components: {
    Family,
    Commerial,
    Support,
    Developer,
    About,
  },
})
export default class NavBar extends Vue {
  private src: string = src;

  private alt: string = getFileName(src);

  @navState.State('activeName')
  private activeName!: string;

  @navState.State('visible')
  private visible!: boolean;

  private mounted(): void {
    this.$children.forEach((val) => {
      if (val.$el.id === 'menuitem') {
        // menuitem
        val.$children.forEach((item) => {
          // item
          item.$el.addEventListener('mouseover', () => {
            this.$store.commit('nav/trigger', {
              activeName: item.$props.index,
              visible: true,
            });
          });
        });
      }
    });
  }

  private handleTabActive(path: string) {
    this.$store.commit('nav/trigger', {
      activeName: path,
      visible: true,
    });
  }

  private handleClose(index: string) {
    this.$store.commit('nav/init');
  }
}
</script>

<style lang="scss">
#tab-logo {
  float: left;
  width: 144px;
  margin-top: 14px;
  margin-left: 66px;
}
#navbar {
  ul li {
    display: inline;
    list-style-type: none;
    user-select: none;
  }
}
#menuitem.el-menu--horizontal.el-menu {
  background: none !important;
  > .el-menu-item {
    float: none !important;
    font-size: 16px;
    padding: 18px 20px !important;
  }
}
#nav-dropdown > .online {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  margin-right: 15px;
}
</style>

<style lang="scss" scoped>
.search {
  float: right;
  margin-right: 66px;
  .el-icon-shopping-bag-2 {
    font-size: 19px;
  }
  .el-icon-search {
    font-size: 19px;
    &:hover {
      cursor: pointer;
    }
  }
}
#drawer.el-drawer__wrapper {
  top: 91px !important;
}
</style>

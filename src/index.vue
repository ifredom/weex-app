<template>
  <div class="wrapper">
    <!-- <tn-header></tn-header> -->
    <router-view/>
    <!-- <tn-bar></tn-bar> -->
  </div>
</template>

<script>
// import tnHeader from './assets/components/header';
import tnBar from './assets/components/tabbar';
import util from './assets/util';
export default {
  name: 'App',
  data() {
    return {};
  },
  created(){
    util.initIconFont();
  },
  methods: {
    onTabTo(_result) {
      let _key = _result.data.key || '';
      this.$router && this.$router.push('/' + _key);
    }
  },
  components: {
    tnHeader,
    tnBar
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>

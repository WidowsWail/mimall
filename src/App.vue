<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

  data(){
    return {
      res:{}
    }
  },
  mounted(){
    if(this.$cookie.get('userId')){
      this.getUser()
      this.getCartCount()
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>

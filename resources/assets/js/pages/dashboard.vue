<template>
    <div>
        <img src="../../images/timg.jpg" alt="" style="width: 100%;height: 100%">
    </div>
</template>
<script>
  export default {
    created: function () {
      this.$store.commit('setTitle', '控制台')
      this.$store.commit('setBreadCrumbs', [])
    },
    computed: {
      imgBaseUrl () {
        return window.Laravel.imgBaseUrl
      }
    },
  }
</script>
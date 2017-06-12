<template>
  <div id="app">
    Photos
  </div>
</template>

<script>

export default {
  data() {
    return {
      photos: [],
      totalPhotos: 0,
      perPage: 9,
      currentPage: 1
    }
  },
  // methods: {
  //   fetchPhotos: function (page) {
  //     var options = {
  //       params: {
  //         client_is: appId,
  //         page: page,
  //         per_page: this.perPage
  //       }
  //     }

  //     this.$http.get('/someUrl', options)
  //   }.then(function (response) {
  //     console.log(response);
  //   }, console.log("error"))
  // },
  // created:function(){
  //   this.fetchPhotos(this.currentPage)
  // }
}

</script>

<style src="../css/photos.css"></style>

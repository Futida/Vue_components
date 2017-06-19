<template>
  <div id="app">
    Photos 
    <div> {{customers.one }}</div>
    <div> {{customers.key }}</div>
  </div>
</template>

<script>

export default {
  // data() {
  //   return {
  //     photos: [],
  //     totalPhotos: 0,
  //     perPage: 9,
  //     currentPage: 1
  //   }
  // },
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

  data() {
    return {
      photos: [],
      totalPhotos: 0,
      perPage: 9,
      currentPage: 1,
      customers: []
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get('http://echo.jsontest.com/key/value/one/two')
        .then(function (response) {
          this.customers = response.body
          console.log(response.body, page);
        })
    }
  },
  created: function () {
    this.fetchCustomers();
  }
}
</script>

<style src="../css/photos.css"></style>

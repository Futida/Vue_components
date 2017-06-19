<template>
  <div id="app_photos">
    <pagination :current="currentPage"
                :total="totalPhotos"
                :perPage="perPage"
                @page-changed="fetchPhotos">

    </pagination>
    <section class="grid">
      <div class="grid__item card" v-for='photo in photos'>
        <div class="card__body">
          <img :src="photo.urls.small" alt="">
        </div>
        <div class="card__footer media">
          <img :src="photo.user.profile_image.small" alt="" class="media__obj">
          <div class="media__body">
            <a href="photo.user.portfolio_url" target="_blank"> {{ photo.user.name }}</a>
          </div>
        </div>
      </div>
    </section>
    <pagination :current="currentPage"
                :total="totalPhotos"
                :perPage="perPage"
                @page-changed="fetchPhotos">

    </pagination>
  </div>

</template>

<script>
  import Pagination from './pagination/Pagination.vue'

  export default {
    data() {
      return {
        appId: 'b522601914f377642e0d91d1f00042d196c83af6f628d8d7d51d6032c7e4cb7e',
        photos: [],
        totalPhotos: 0,
        perPage: 8,
        currentPage: 1
      }
    },
    components: {
      pagination: Pagination
    },
    methods: {
      fetchPhotos: function(page) {
        var options = {
          params: {
            client_id: this.appId,
            page: page,
            per_page: this.perPage
          }
        };

        this.$http.get('http://api.unsplash.com/photos', options).then(function(response) {
          this.photos = response.data;
          //console.log(this.photos);
          this.totalPhotos = parseInt(response.headers.get('x-total'));
          this.currentPage = page
        }, console.log)
      }
    },
    created: function() {
      this.fetchPhotos(this.currentPage)
    }
  }

  //  data() {
  //    return {
  //      customers: []
  //    }
  //  },
  //  methods: {
  //    fetchCustomers() {
  //      this.$http.get('http://echo.jsontest.com/key/value/one/two')
  //        .then(function (response) {
  //          this.customers = response.body;
  //          console.log(response.body);
  //        })
  //    }
  //  },
  //  created: function () {
  //    this.fetchCustomers();
  //  }
</script>

<style src="../css/photos.css"></style>

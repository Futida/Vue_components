<template>
  <div id="app_photos">
    <div class="container">
      <Pagination :current="currentPage"
                  :total="totalPhotos"
                  :perPage="perPage"
                  @page-changed="fetchPhotos">
      </Pagination>
      <div class="container-fluid">
        <div class="grid">
          <div class="grid__item card" v-for='(photo, key) in photos' :key='key'>
            <div class="card__body">
              <img :src="photo.urls.small" alt="" @click="showModal(photo)">
            </div>
            <div class="card__footer media">
              <img :src="photo.user.profile_image.small" alt="" class="media__obj">
              <div class="media__body">
                <a href="photo.user.portfolio_url" target="_blank"> {{ photo.user.name }}</a>
              </div>
              <Maps
                v-if="photo.user.location"
                :userLocation="photo.user.location">
              </Maps>
              <div v-else style="margin-left: 215px; margin-top: 130px;">
                No data
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination :current="currentPage"
                  :total="totalPhotos"
                  :perPage="perPage"
                  @page-changed="fetchPhotos">
      </Pagination>

      <transition name="modal">
        <div class="modal" v-show="flag">
          <div class="modal-content">
            <img :src='path_to_largeImg' alt="" id="imgFull">
            <span class="close" @click="hideModal">X</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Pagination from './pagination/Pagination.vue'
  import Maps from './Maps.vue'

  export default {
    data() {
      return {
        appId: 'b522601914f377642e0d91d1f00042d196c83af6f628d8d7d51d6032c7e4cb7e',
        photos: [],
        totalPhotos: 0,
        perPage: 4,
        currentPage: 1,
        path_to_largeImg: '',
        flag: false,
      }
    },
    components: { Pagination, Maps },

    methods: {
      fetchPhotos: function(page) {
        const options = {
          params: {
            client_id: this.appId,
            page: page,
            per_page: this.perPage
          }
        };

        this.$http.get('http://api.unsplash.com/photos', options).then(function(response) {
          this.photos = response.data;
          console.log(this.photos);
          this.totalPhotos = parseInt(response.headers.get('x-total'));
          this.currentPage = page;
        }, console.log)
      },

      showModal: function(photo) {
        this.path_to_largeImg = photo.urls.regular;
        this.flag = true
      },
      hideModal: function() {
        this.flag = false;
      }
    },
    created: function() {
      this.fetchPhotos(this.currentPage)
    }
  }
</script>

<style src="../css/photos.css"></style>

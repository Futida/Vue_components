<template>

  <div style="margin-top: 15px; height:290px">
    <v-map :zoom="zoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-marker :lat-lng="marker"></v-marker>
    </v-map>
    <!--<gmap-map-->
    <!--:center="center"-->
    <!--:zoom="10"-->
    <!--style="width: 490px; height: 300px">-->
    <!--<gmap-marker-->
    <!--:position="center"-->
    <!--:clickable="true"-->
    <!--:draggable="true"-->
    <!--@click="center=markerPosition">-->
    <!--</gmap-marker>-->
    <!--</gmap-map>-->
    <!--<div>-->
    <!--<ul>-->
    <!--<li @mouseenter="showHint" @mouseleave="hideHint">1-->
    <!--<div class="hint"> first element </div>-->
    <!--</li>-->
    <!--<li @mouseenter="showHint">2-->
    <!--<div> second element </div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>

  import Vue2Leaflet from 'vue2-leaflet';

  export default{
    props: ['userLocation'],

    components: {
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-marker': Vue2Leaflet.Marker
    },
    data(){
      return {
//        center: {
//          lat: 0,
//          lng: 0
//        },
        zoom: 10,
        center: L.latLng(0, 0),
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(0, 0),
      }
    },

    created() {
      this.getCoord();
    },
    watch: {
      userLocation: function() {
        this.getCoord();
      }
    },
    methods: {
      getCoord: function() {
        let geocoder = new google.maps.Geocoder();
        let _ = this;

        geocoder.geocode({ 'address': this.userLocation }, function(result, status) {
          if (status === 'OK') {
            _.center = L.latLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
            _.marker = L.latLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
          }
        });
      },
      showHint: function(e) {
        if (e.target.tagName === 'LI') {
          e.target.children[0].classList.add('showHint')
        }
      },
      hideHint: function(e) {
        if (e.target.tagName === 'LI') {
          e.target.children[0].classList.remove('showHint')
        }
      },
    },
  }

</script>

<style src="../css/maps.css"></style>

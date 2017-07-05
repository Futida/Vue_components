<template>
  <div style="margin-top: 15px">
    <gmap-map
      :center="center"
      :zoom="10"
      style="width: 490px; height: 300px">
      <gmap-marker
        :position="center"
        :clickable="true"
        :draggable="true"
        @click="center=markerPosition">
      </gmap-marker>
    </gmap-map>
    <div>
      <ul>
        <li @mouseenter="showHint" @mouseleave="hideHint">1
          <div class="hint"> first element </div>
        </li>
        <li @mouseenter="showHint">2
          <div> second element </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default{
    props: ['userLocation'],

    data(){
      return {
        center: {
          lat: 0,
          lng: 0
        },
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
        let coord = this.center;
        geocoder.geocode({ 'address': this.userLocation }, function(result, status) {
          if (status === 'OK') {
            coord.lat = result[0].geometry.location.lat();
            coord.lng = result[0].geometry.location.lng();
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

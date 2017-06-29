<template>
  <gmap-map
    :center="center"
    :zoom="11"
    style="width: 490px; height: 300px">
    <gmap-marker
      :position="center"
      :clickable="true"
      :draggable="true"
      @click="center=markerPosition">
    </gmap-marker>
  </gmap-map>
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
        markerPosition: []
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
        })
      }
    },
    created: function() {
      this.getCoord()
    }
  }

</script>

<style></style>

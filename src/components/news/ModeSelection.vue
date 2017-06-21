<template>
  <div class="container-fluid">
    <h4>Select New source</h4>
    <select class="form-control" @change="sourceChanged">
      <option :value="source.id" v-for="source in sources"> {{ source.name }}</option>
    </select>

    <div v-if="source">
      <h6>{{ source.description }}</h6>
      <a :href="source.url" class="btn btn-primary" target="_blank">Go To {{ source.name }}</a>
    </div>
  </div>
</template>

<script>

  export default{

    data(){
      return {
        sources: [],
        source: ''
      }
    },
    methods: {
      sourceChanged: function(e) {
        for (var i = 0; i < this.sources.length; i++) {
          if (this.sources[i].id === e.target.value) {
            this.source = this.sources[i];
          }
        }
        this.$emit('changesource', e.target.value)
      }
    },
    created: function() {
      this.$http.get('https://newsapi.org/v1/sources?language=en')
        .then(response => {
          this.sources = response.data.sources
        })
    }
  }
</script>

<style></style>

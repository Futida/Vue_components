<template>
  <div class="container" id="app">
    <ModeSelection @sourceChanged="sourceChanged"></ModeSelection>
    <NewsList :source="source"></NewsList>
  </div>
</template>

<script>
  import NewsList from './news/NewsList'
  import ModeSelection from './news/ModeSelection'


  export default{
    components: {
      NewsList : NewsList,
      ModeSelection: ModeSelection
    },
    data(){
      return {
        source: ''
      }
    },
    methods: {
      sourceChanged: function(source) {
        this.source = source;
      }
    }
  }
</script>

<style></style>

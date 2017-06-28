<template>
  <div class="container">
    <ul class="media-list">
      <li class="media" v-for="(article, key) in articles" :key='key'>
        <div class="media-left">
          <a :href="article.url" target="_blank">
            <img class="media-object" :src="article.urlToImage" alt="">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">
            <a :href="article.url" target="_blank">{{ article.title }}</a>
          </h4>
          <h5><i>{{ article.author }}</i></h5>
          <p> {{ article.decription }} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        articles: []
      }
    },
    props: ['source'],
    methods: {
      updateSource: function(source) {
        this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=35265661d7994a14bb1139af14eb605d')
          .then(response => {
            this.articles = response.data.articles
          })
      }
    },
    created: function() {
      this.updateSource(this.source)
    },
    watch: {
      source: function(val) {
        this.updateSource(val)
      }
    }
  }
</script>

<style src="../../css/newsList.css"></style>

<template>
  <div class="pagination">
    <div class="pagination__left"><a href="#" v-if="hasPrev()" @click=changePage(prevPage)>Previous</a></div>
    <div class="pagination__mid">
      <!--<span>{{ current }} of {{ total }} </span>-->
      <ul>
        <li v-for="page in pages">
          <a href="#" @click="changePage(page)" :class="{ current: current == page }">{{ page }}</a>
        </li>
      </ul>
    </div>
    <div class="pagination__right"><a href="#" v-if="hasNext()" @click=changePage(nextPage)>Next</a></div>
  </div>
</template>

<script>
  export default{
    props: {
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 1
      },
      perPage: {
        type: Number,
        default: 8
      },
      pageRange: {
        type: Number,
        default: 2
      }
    },
    computed: {
      pages: function() {
        var pages = [];
        for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i);
        }
        return pages;
      },
      rangeStart: function() {
        var start = this.current - this.pageRange;
        return (start > 0) ? start : 1
      },
      rangeEnd: function() {
        var end = this.current + this.pageRange;
        return (end < this.totalPages) ? end : this.totalPages
      },
      totalPages: function() {
        return Math.ceil(this.total / this.perPage)
      },
      nextPage: function() {
        return this.current + 1
      },
      prevPage: function() {
        return this.current - 1
      }
    },
    methods: {
      hasPrev: function() {
        return this.current > 1
      },
      hasNext: function() {
        return this.current < this.total
      },
      changePage: function(page) {
        this.$emit('page-changed', page)
      }
    }
  }
</script>

<style src="../../css/photos.css"></style>

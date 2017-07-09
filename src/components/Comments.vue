<template>
  <div class="container">
    <div class="container-fluid">
      <h2 class="text-center">Comments</h2>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add comment</h3>
        </div>
        <div class="panel-body">
          <form class="form" @submit.prevent="addComment">
            <div class="form-group pull-left">
              <label for="comment">Comment</label>
              <input type="text" id="comment" class="form-control" v-model="newComment">
            </div>
            <input type="submit" class="btn btn-primary" value="Add Comment">
          </form>
          <div class="statisticsComments">
            <div>
              Total comments: {{ comments.length }}
            </div>
            <div style="padding-left: 15px">
              Total answers: {{ totalReplyCommentsLength }}
            </div>
          </div>
          <div class="sort">
            Sort by rating:
            <button class="btn btn-success" @click="sortByRatingUp">
              <span class="glyphicon glyphicon-arrow-up"></span>
            </button>
            <button class="btn btn-success" @click="sortByRatingDown">
              <span class="glyphicon glyphicon-arrow-down"></span>
            </button>
          </div>
          <div style="float: left; width: 100%">
            <span>Search:</span>
            <input type="text" placeholder="Search ..." v-model="finding">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <Comment v-for="(item, key) in searching" :data="item" :index="key" :key="key" @totalReplyCommentsLength="replyCommentsLength">
      </Comment>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Component from 'vue-class-component'
import Comment from './comments/Comment.vue'

@Component({
  components: { Comment }
})

export default class Comments extends Vue {

  comments = [{ comment: 'comment', rating: 100 }]
  newComment = '';
  totalReplyCommentsLength = 0;
  finding = '';

  get searching() {
    let comments = this.comments;
    if (this.finding) {
      comments = comments.filter(item => {
        return item.comment.toLowerCase().indexOf(this.finding) > -1
      })
    }
    return comments;
  };

  addComment() {
    if (this.newComment && this.newComment.length) {
      this.comments.push({
        comment: this.newComment,
        rating: 0
      })
    }
    this.newComment = ''
  };

  replyCommentsLength(length) {
    this.totalReplyCommentsLength = length
  };

  sortByRatingUp() {
    function compareUp(a, b) {
      if (a.rating < b.rating)
        return -1;
      if (a.rating > b.rating)
        return 1;
    }
    this.comments.sort(compareUp)
  };

  sortByRatingDown() {
    function compareDown(a, b) {
      if (a.rating > b.rating)
        return -1;
      if (a.rating < b.rating)
        return 1;
    }
    this.comments.sort(compareDown)
  }
}

  // import Comment from './comments/Comment.vue'

  // export default{

  //   components: { Comment },

  //   data(){
  //     return {
  //       comments: [{ comment: 'comment', rating: 100 }],
  //       newComment: '',
  //       totalReplyCommentsLength: 0,
  //       finding: ''
  //     }
  //   },
  //   computed: {
  //     searching() {
  //       let comments = this.comments;
  //       if (this.finding) {
  //         comments = comments.filter(item => {
  //           return item.comment.toLowerCase().indexOf(this.finding) > -1
  //         })
  //       }
  //       return comments;
  //     }
  //   },
  //   methods: {
  //     addComment: function() {
  //       if (this.newComment && this.newComment.length) {
  //         this.comments.push({
  //           comment: this.newComment,
  //           rating: 0
  //         })
  //       }
  //       this.newComment = ''
  //     },
  //     replyCommentsLength: function(length) {
  //       this.totalReplyCommentsLength = length
  //     },
  //     sortByRatingUp: function() {
  //       function compareUp(a, b) {
  //         if (a.rating < b.rating)
  //           return -1;
  //         if (a.rating > b.rating)
  //           return 1;
  //       }

  //       this.comments.sort(compareUp)
  //     },
  //     sortByRatingDown: function() {
  //       function compareDown(a, b) {
  //         if (a.rating > b.rating)
  //           return -1;
  //         if (a.rating < b.rating)
  //           return 1;
  //       }

  //       this.comments.sort(compareDown)

  //     }
  //   }
  // }

</script>

<style src="../css/comments.css"></style>

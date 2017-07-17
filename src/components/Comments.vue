<template>
  <div class="container">
    <div class="container-fluid">
      <h2 class="text-center">Comments</h2>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add comment</h3>
        </div>
        <div class="panel-body">
          <form class="form" style="display: block" @submit.prevent="addComment">
            <div class="form-group">
              <label for="comment">Comment</label>
              <textarea type="text" id="comment" class="form-control" v-model="newComment.comment" cols="100" rows="5">
              </textarea>
            </div>
            <input type="submit" class="btn btn-primary" value="Add Comment">
          </form>
          <div class="statisticsComments">
            <div>
              Total comments: {{ comments.length }}
            </div>
            <!--<div style="padding-left: 15px">-->
              <!--Total answers: {{ totalReplyCommentsLength }}-->
            <!--</div>-->
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
          <div>
            <span>Search:</span>
            <input type="text" placeholder="Search ..." v-model="finding" style="border:1px solid grey">
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <Comment v-for="(item, key) in searching"
               :data="item"
               :index="key"
               :key="key"
               :date="date()"
               @totalReplyCommentsLength="replyCommentsLength"
               @deleteComment="deleteComment"
               @updateRating="updateRating">
      </Comment>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Comment from './comments/Comment.vue'
  import db from '../firebase'


  let commentsRef = db.ref('comments');

  @Component({
    components: { Comment },
    firebase: { comments: commentsRef }
  })

  export default class Comments extends Vue {

    newComment = {
      comment: '',
      rating: 0,
    };
    totalReplyCommentsLength = 0;
    finding = '';

    get searching() {
      let commentsList = this.comments;
      if (this.finding) {
        commentsList = commentsList.filter(item => {
          return item.comment.toLowerCase().indexOf(this.finding) > -1
        })
      }
      return commentsList;
    };

    addComment() {
      if (this.newComment.comment && this.newComment.comment.length) {
        this.newComment.date = this.date();
        commentsRef.push(this.newComment);
      }
      this.newComment.comment = '';
    };

    deleteComment(item) {
      commentsRef.child(item['.key']).remove();
    }

    updateRating(item) {
     commentsRef.child(item['.key']).update({rating:item.rating})
    }

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
    }
    ;

    sortByRatingDown() {
      function compareDown(a, b) {
        if (a.rating > b.rating)
          return -1;
        if (a.rating < b.rating)
          return 1;
      }

      this.comments.sort(compareDown)
    }
    ;

    date() {
      var date = new Date();
      var year = date.getFullYear();
      var month = getMonth();
      var day = date.getDate();
      var time = date.toLocaleString();
      // var fullData = year + " " + month + " " + day + " " + time;
      return time;
      function getMonth() {
        let month = date.getMonth();
        if (month < 10) {
          var m = "0" + month
        }
        return m;
      }
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

<style lang="scss" src="../css/comments.scss"></style>

<template>
  <div>
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
                <textarea type="text" id="comment" class="form-control" v-model="newComment.comment" cols="100"
                          rows="5">
              </textarea>
              </div>
              <input type="submit" class="btn btn-primary" value="Add Comment">
            </form>
            <div class="statisticsComments">
              <div>
                Total comments: {{ comments.length }}
              </div>
              <div style="padding-left: 15px">
                Total answers: {{ reply.length }}
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
            <div>
              <span>Search:</span>
              <input type="text" placeholder="Search ..." v-model="finding" style="border:1px solid grey">
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <Comment v-for="item in searching"
                 :data="item"
                 :index="item['.key']"
                 :key="item['.key']"
                 :date="date"
                 @deleteComment="deleteComment"
                 @updateRating="updateRating">
        </Comment>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  //  import Component from 'vue-class-component'
  import Comment from './comments/Comment.vue'
  import db from '../firebase'

  let commentsRef = db.ref('comments');
  let commentsRefReply = db.ref('reply');

  export default {

    components: { Comment },
    firebase: { comments: commentsRef, reply: commentsRefReply },

    data() {
      return {
        newComment: {
          comment: '',
          rating: 0,
        },
        totalReplyCommentsLength: '',
        finding: ''
      }
    },
    computed: {
      searching() {
        let comments = this.comments;
        if (this.finding) {
          comments = comments.filter(item => {
            return item.comment.toLowerCase().indexOf(this.finding) > -1
          })
        }
        return comments;
      }
    },
    methods: {
      addComment() {
        if (this.newComment.comment && this.newComment.comment.length) {
          this.newComment.date = this.date();
          commentsRef.push(this.newComment);
        }
        this.newComment.comment = '';
      },
      sortByRatingUp: function() {
        function compareUp(a, b) {
          if (a.rating < b.rating)
            return -1;
          if (a.rating > b.rating)
            return 1;
        }

        this.comments.sort(compareUp)
      },
      sortByRatingDown: function() {
        function compareDown(a, b) {
          if (a.rating > b.rating)
            return -1;
          if (a.rating < b.rating)
            return 1;
        }

        this.comments.sort(compareDown)
      },
      date() {
        let time = new Date().toLocaleString();
        return time
      },
      deleteComment(item, filterAnswer) {
        commentsRef.child(item['.key']).remove();
        filterAnswer.forEach(item => {
          commentsRefReply.child(item['.key']).remove();
        })

      },
      updateRating(item) {
        commentsRef.child(item['.key']).update({ rating: item.rating })
      }
    }
  }


  //  @Component({
  //    components: { Comment },
  //    firebase: { comments: commentsRef }
  //  })

  //  export class Comments extends Vue {
  //
  //    newComment = {
  //      comment: '',
  //      rating: 0,
  //    };
  //    totalReplyCommentsLength = 0;
  //    finding = '';
  //
  //    get searching() {
  //      let commentsList = this.comments;
  //      if (this.finding) {
  //        commentsList = commentsList.filter(item => {
  //          return item.comment.toLowerCase().indexOf(this.finding) > -1
  //        })
  //      }
  //      return commentsList;
  //    };
  //
  //    addComment() {
  //      if (this.newComment.comment && this.newComment.comment.length) {
  //        this.newComment.date = this.date();
  //        commentsRef.push(this.newComment);
  //      }
  //      this.newComment.comment = '';
  //    };
  //
  //    static deleteComment(item) {
  //      commentsRef.child(item['.key']).remove();
  //    }
  //
  //    static updateRating(item) {
  //      commentsRef.child(item['.key']).update({ rating: item.rating })
  //    }
  //
  //    replyCommentsLength(length) {
  //      this.totalReplyCommentsLength = length
  //    };
  //
  //    sortByRatingUp() {
  //      function compareUp(a, b) {
  //        if (a.rating < b.rating)
  //          return -1;
  //        if (a.rating > b.rating)
  //          return 1;
  //      }
  //
  //      this.comments.sort(compareUp)
  //    }
  //    ;
  //
  //    sortByRatingDown() {
  //      function compareDown(a, b) {
  //        if (a.rating > b.rating)
  //          return -1;
  //        if (a.rating < b.rating)
  //          return 1;
  //      }
  //
  //      this.comments.sort(compareDown)
  //    }
  //    ;
  //
  //    static date() {
  //      let date = new Date();
  //      let time = date.toLocaleString();
  //      return time;
  ////      let year = date.getFullYear();
  ////      let month = getMonth();
  ////      let day = date.getDate();
  //      // var fullData = year + " " + month + " " + day + " " + time;
  //
  ////      function getMonth() {
  ////        let month = date.getMonth();
  ////        if (month < 10) {
  ////          let m = "0" + month
  ////        }
  ////        return m;
  ////      }
  //    }
  //  }

  // import Comment from './comments/Comment.vue'




</script>

<style lang="scss" src="../css/comments.scss"></style>

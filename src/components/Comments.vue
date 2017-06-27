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
            <div class="form-group">
              <label for="comment">Comment</label>
              <input type="text" id="comment" class="form-control" v-model="newComment">
            </div>
            <input type="submit" class="btn btn-primary" value="Add Comment">
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <Comment :comment="item.comment" v-for="(item, key) in comments" :key="key"></Comment>
    </div>
  </div>
</template>

<script>

  import Comment from './comments/Comment.vue'

  export default{
    components: { Comment },

    data(){
      return {
        comments: [],
        newComment: '',
      }
    },
    methods: {
      addComment: function() {
        if (this.newComment && this.newComment.length) {
          this.comments.push({ comment: this.newComment })
        }
        this.newComment = ''
      }
    }
  }

</script>

<style src="../css/comments.css"></style>

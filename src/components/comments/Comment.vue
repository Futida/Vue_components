<template>
  <div>
    <div class="panel panel-success">
      <div class="panel-heading">
        <span>
          <span> Rating: {{ counter }} </span>
          <div class="btn-group btn-group-xs">
            <button class="buttonRating btn btn-warning" @click="upCounter">up</button>
            <button class="buttonRating btn btn-warning" @click="downCounter" v-show="this.counter > 0">down</button>
          </div>

        </span>
        <span class="pull-right"> Date: {{ date }} </span>
      </div>
      <div class="panel-body">
        {{ comment }}
        <div class="pull-right">
          <div @click="showReplyModal" style="cursor: pointer">
            <span>Reply</span>
            <span class="glyphicon glyphicon-share-alt"></span>
          </div>
        </div>
      </div>
    </div>
    <ReplyComments :replyComment="el" v-for="(el,key) in replyComments" :key="key" :date="date"></ReplyComments>

    <transition name="modalReply">
      <div class="modalReply-mask" v-show="flag">
        <div class="modalReply-wrapper">
          <div class="modalReply-container">

            <div class="modalReply-header">
              <span name="header" class="glyphicon glyphicon-remove pull-right" @click="closeReplyModal"
                    style="cursor: pointer"></span>
            </div>
            <div class="modalReply-body">
              <textarea id="1" cols="50" rows="10" v-model="replyComment"></textarea>
            </div>
            <div class="modalReply-footer">
              <slot name="footer">
                <button class="modal-default-button pull-right" @click="addReplyComment">
                  Add reply comment
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import ReplyComments from './ReplyComments.vue'

  export default {
    components: { ReplyComments },
    props: ['comment'],
    data() {
      return {
        flag: false,
        date: this.date(),
        replyComment: '',
        replyComments: [],
        counter: 0,
        id: 1
      }
    },
    methods: {
      showReplyModal: function() {
        this.flag = true
      },
      closeReplyModal: function() {
        this.flag = false
      },
      addReplyComment: function() {
        if (this.replyComment && this.replyComment.length) {
          this.replyComments.push({ id: this.id++, replyComment: this.replyComment })
        }
        this.closeReplyModal();
        this.replyComment = ''
      },
      upCounter: function() {
        this.counter++
      },
      downCounter: function() {
        this.counter--
      },
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
  }

</script>

<style src="../../css/comments.css"></style>

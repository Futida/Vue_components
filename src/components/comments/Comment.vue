<template>
  <div>
    <div class="panel panel-success">
      <div class="panel-heading">
        <span>
          <span> Rating: {{ data.rating }} </span>
          <div class="btn-group btn-group-xs">
            <button class="btn btn-warning buttonRating" @click="upRating">up</button>
            <button class="btn btn-warning buttonRating" @click="downRating" v-show="data.rating > 0">down</button>
          </div>
        </span>
        <span class="pull-right"> Date: {{ data.date }} </span>
        <div class="delete-icon">
          <v-icon class="orange--text text--darken-2" @click="deleteComment"
                  v-tooltip:right="{ html:'УДАЛИТЬ' }">delete
          </v-icon>
        </div>
      </div>
      <div class="panel-body">
        {{ data.comment }}
        <div class="pull-right">
          <div @click="showReplyModal" style="cursor: pointer">
            <span>Reply</span>
            <span class="glyphicon glyphicon-share-alt"></span>
          </div>
        </div>
      </div>
    </div>
    <ReplyComments :replyComment="el"
                   v-for="el in filterReply"
                   :key="index"
                   :date="date">
    </ReplyComments>

    <transition name="modalReply">
      <div class="modalReply-mask" v-show="flag" @keyup.esc="closeReplyModal">
        <div class="modalReply-wrapper">
          <div class="modalReply-container">

            <div class="modalReply-header">
              <span name="header" class="glyphicon glyphicon-remove pull-right" @click="closeReplyModal"
                    style="cursor: pointer"></span>
            </div>
            <div class="modalReply-body">
              <textarea ref='ta' id="1" cols="50" rows="10" v-model="replyComment.comment"></textarea>
            </div>
            <div class="modalReply-footer">
              <slot name="footer">
                <button class="btn btn-info pull-right" @click="addReplyComment">
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
  import Vue from 'vue'
  import ReplyComments from './ReplyComments.vue'
  import db from '../../firebase'

  let commentsRef = db.ref('reply');

  export default {

    components: { ReplyComments },
    firebase: { reply: commentsRef },
    props: ['data', 'index', 'date'],
    mounted() {
      console.log(this.index);
    },
    data() {
      return {
        flag: false,
        reply: [],
//        date: this.date(),
        replyComment: {
          comment: '',
          ref: ''
        },
        filterAnswer:[]
      }
    },
    methods: {
      deleteComment: function() {
        console.log(this.data);
        this.$emit('deleteComment', this.data)
      },
      showReplyModal: function() {
        this.flag = true;
        setTimeout(() => {
          this.$refs.ta.focus();
        }, 0);

      },
      closeReplyModal: function() {
        this.flag = false
      },
      addReplyComment: function() {
        console.log(this.index);
        if (this.replyComment.comment && this.replyComment.comment.length) {
          this.replyComment.ref = this.index;
          commentsRef.push(this.replyComment);
        }
        this.$emit('totalReplyCommentsLength', this.reply.length);
        this.closeReplyModal();
        this.replyComment.comment = '';
      },
      upRating: function() {
        this.data.rating++;
        this.$emit('updateRating', this.data)
      },
      downRating: function() {
        this.data.rating--;
        this.$emit('updateRating', this.data)
      }
    },
    computed: {
      filterReply() {
        this.filterAnswer = this.reply.filter(item => {
          return item['ref'] === this.index
        });
        return this.filterAnswer;
      }
    }
  }

</script>

<style lang="scss" src="../../css/comments.scss"></style>

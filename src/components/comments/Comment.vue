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
                  v-tooltip:right="{ html:'УДАЛИТЬ' }" >delete
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
    <ReplyComments :replyComment="el" v-for="(el,key) in replyComments" :key="key" :date="date"></ReplyComments>

    <transition name="modalReply">
      <div class="modalReply-mask" v-show="flag" @keyup.esc="closeReplyModal">
        <div class="modalReply-wrapper">
          <div class="modalReply-container">

            <div class="modalReply-header">
              <span name="header" class="glyphicon glyphicon-remove pull-right" @click="closeReplyModal"
                    style="cursor: pointer"></span>
            </div>
            <div class="modalReply-body">
              <textarea ref='ta' id="1" cols="50" rows="10" v-model="replyComment"></textarea>
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
    props: ['data', 'index', 'date'],
    data() {
      return {
        flag: false,
//        date: this.date(),
        replyComment: '',
        replyComments: [],
        id: 1
      }
    },

    methods: {
      deleteComment: function() {
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
        if (this.replyComment && this.replyComment.length) {
          this.replyComments.push({ id: this.id++, replyComment: this.replyComment })
        }
        this.$emit('totalReplyCommentsLength', this.replyComments.length);
        this.closeReplyModal();
        this.replyComment = ''
      },
      upRating: function() {
        this.data.rating++;
        this.$emit('updateRating', this.data)
      },
      downRating: function() {
        this.data.rating--;
        this.$emit('updateRating', this.data)
      }
    }
  }

</script>

<style lang="scss" src="../../css/comments.scss"></style>

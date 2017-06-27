<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        {{ comment }}
        <span> {{ date }} </span>
        <span class="glyphicon glyphicon-share-alt pull-right" @click="showReplyModal"></span>
      </div>
      <ReplyComments :replyComment="el.replyComment" v-for="(el,key) in replyComments" :key="key"></ReplyComments>
    </div>


    <transition name="modalReply">
      <div class="modalReply-mask" v-show="flag">
        <div class="modalReply-wrapper">
          <div class="modalReply-container">

            <div class="modalReply-header">
                <span name="header" class="glyphicon glyphicon-remove pull-right"
                      @click="closeReplyModal"></span>
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

  export default{
    components: { ReplyComments },
    props: ['comment'],
    data(){
      return {
        flag: false,
        date: new Date(),
        replyComment: '',
        replyComments: []
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
          this.replyComments.push({ replyComment: this.replyComment })
        }
        this.closeReplyModal();
        //this.replyComment = ''
      }
    }

  }

</script>

<style></style>

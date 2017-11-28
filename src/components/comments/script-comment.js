//@flow
import Vue from 'vue'
import Component from 'vue-class-component'
import ReplyComments from './ReplyComments.vue'
import db from '../../firebase'

let commentsRef = db.ref('reply');

@Component({
  components: { ReplyComments },
  firebase: { reply: commentsRef },
  props: ['data', 'index', 'date'],
})

export default class Comment extends Vue {

  flag = false;
  reply = [];
  replyComment = {
    comment: '',
    ref: '',
    date: '',
  };
  filterAnswer = [];


  deleteComment() {
    this.$emit('deleteComment', this.data, this.filterAnswer);
    this.$emit('totalReplyCommentsLength', this.reply.length);
  }

  showReplyModal() {
    this.flag = true;
    setTimeout(() => {
      this.$refs.ta.focus();
    }, 0);

  }

  closeReplyModal() {
    this.flag = false
  }

  addReplyComment() {
    console.log(this.index);
    if (this.replyComment.comment && this.replyComment.comment.length) {
      this.replyComment.ref = this.index;
      this.replyComment.date = this.date;
      commentsRef.push(this.replyComment);
    }
    this.closeReplyModal();
    this.replyComment.comment = '';
  }

  upRating() {
    this.data.rating++;
    this.$emit('updateRating', this.data);
  }

  downRating() {
    this.data.rating--;
    this.$emit('updateRating', this.data)
  }

  get filterReply(): Array<any> {
    this.filterAnswer = this.reply.filter(item => {
      return item['ref'] === this.index
    });
    return this.filterAnswer;
  }
}


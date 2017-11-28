//@flow
import Vue from 'vue'
import Component from 'vue-class-component'
import Comment from './comments/Comment.vue'
import db from '../firebase'

let commentsRef = db.ref('comments');
let commentsRefReply = db.ref('reply');

@Component({
  components: { Comment },
  firebase: { comments: commentsRef, reply: commentsRefReply }
})

export default class Comments extends Vue {

  newComment = {
    comment: '',
    rating: 0,
  };
  totalReplyCommentsLength = 0;
  finding = '';


  // static bar(arr: Array<number>, prop: number) {
  //   let conf: number = prop;
  //   arr.push(conf);
  //   console.log(arr);
  // }
  //
  // doSomethingStupid(param1: number) {
  //
  //   console.log(5 * param1);
  //   let conf: string = "haha";
  //   // Flow should show an error here, "The operand of an arithmetic operation must be a number."
  //   // console.log(param)
  //   Comments.bar([1, 3], 2)
  // }

  get searching(): Array<any> {
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
      this.newComment.date = this.date;
      commentsRef.push(this.newComment);
    }
    this.newComment.comment = '';
  };

  deleteComment(item: Object, filterAnswer: Object) {
    commentsRef.child(item['.key']).remove();
    filterAnswer.forEach(item => {
      commentsRefReply.child(item['.key']).remove();
    })
  }

  updateRating(item: Object) {
    commentsRef.child(item['.key']).update({ rating: item.rating })
  }

  replyCommentsLength(length: number) {
    this.totalReplyCommentsLength = length
  };

  sortByRatingUp() {
    function compareUp(a, b) {
      return (a.rating === b.rating ? 0 : a.rating < b.rating ? -1 : 1)
    }

    this.comments.sort(compareUp)
  };

  sortByRatingDown() {
    function compareDown(a, b) {
      return (a.rating === b.rating ? 0 : a.rating > b.rating ? -1 : 1);
    }

    this.comments.sort(compareDown)
  };

  get date(): string {
    let date = new Date();
    return date.toLocaleString();
  }
}

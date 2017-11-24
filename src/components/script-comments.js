//@flow
import Vue from 'vue'
import Component from 'vue-class-component'
import Comment from './comments/Comment.vue'
import db from '../firebase'

let commentsRef = db.ref('comments');
let commentsRefReply = db.ref('reply');

@Component({})

export class Comments extends Vue {

  newComment = {
    comment: '',
    rating: 0,
  };
  totalReplyCommentsLength = 0;
  finding = '';


  static bar(arr: Array<number>, prop: number) {
    let conf: number = prop;
    arr.push(conf);
    console.log(arr);
  }

  doSomethingStupid(param1: number) {

    console.log(5 * param1);
    let conf: string = "haha";
    // Flow should show an error here, "The operand of an arithmetic operation must be a number."
    // console.log(param)
    Comments.bar([1, 2, 3], conf);
  }

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
      this.newComment.date = this.date();
      commentsRef.push(this.newComment);
    }
    this.newComment.comment = '';
  };

  static deleteComment(item) {
    commentsRef.child(item['.key']).remove();
  }

  static updateRating(item) {
    commentsRef.child(item['.key']).update({ rating: item.rating })
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

  static date() {
    let date = new Date();
    let time = date.toLocaleString();
    return time;
//      let year = date.getFullYear();
//      let month = getMonth();
//      let day = date.getDate();
    // var fullData = year + " " + month + " " + day + " " + time;

//      function getMonth() {
//        let month = date.getMonth();
//        if (month < 10) {
//          let m = "0" + month
//        }
//        return m;
//      }
  }
}

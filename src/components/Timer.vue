<template>
  <div>
    <div class="timer-container" v-if="seconds >= 0">
      <div>
        <span>до завершения</span>
      </div>
      <div>
        <span>{{ days }}</span> <span v-if="displayTitles">{{ daysTitle }}</span>
      </div>
      <div>
        <span>{{ hours }}</span> <span v-if="displayTitles">{{ hoursTitle }}</span>
      </div>
      <div>
        <span>{{ minutes }}</span> <span v-if="displayTitles">{{ minTitle }}</span>
      </div>
      <div>
        <span>{{ seconds }}</span> <span v-if="displayTitles">{{ secTitle }}</span>
      </div>
    </div>
    <div v-else>
      <span>Прием предложений завершен</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['deadLine', 'displayTitles'],
    mounted() {
      this.interval = window.setInterval(() => {
        this.dateNow = Math.trunc(new Date() / 1000)
      }, 1000);
    },
    watch: {
      'seconds': function() {
        if (this.seconds < 0) {
          window.clearInterval(this.interval);
        }
      }
    },
    data() {
      return {
        dateNow: '',
        interval: '',
        secTitles: ['секунд', 'секунды', 'секунда'],
        minTitles: ['минут', 'минуты', 'минута'],
        hoursTitles: ['часов', 'часа', 'час'],
        daysTitles: ['дней', 'дня', 'день']
      }
    },
    computed: {
      getDateDeadLine() {
        return Math.trunc(new Date(this.deadLine.y, this.deadLine.m, this.deadLine.d, this.deadLine.h, this.deadLine.min));
      },
      seconds() {
        let sec = Math.trunc(((this.getDateDeadLine - this.dateNow) % 60));
        return sec < 10 ? '0' + sec : sec;
      },
      minutes() {
        let min = Math.trunc((((this.getDateDeadLine / 1000 - this.dateNow) / 60) % 60));
        return min < 10 ? '0' + min : min;
      },
      hours() {
        let h = Math.trunc((((this.getDateDeadLine / 1000 - this.dateNow) / 60 / 60) % 24));
        return h < 10 ? '0' + h : h;
      },
      days() {
        return Math.trunc(((this.getDateDeadLine / 1000 - this.dateNow) / 3600 / 24))
      },
      secTitle() {
        let s = this.seconds % 10;
        if ((4 < s && s < 10) || (s === 0) || (this.seconds === 11) || (this.seconds === 12) || (this.seconds === 13) || (this.seconds === 14)) {
          return this.secTitles[0];
        } else if (1 < s && s < 5) {
          return this.secTitles[1];
        }
        return this.secTitles[2];
      },
      minTitle() {
        let m = this.minutes % 10;
        if ((4 < m && m < 10) || (m === 0) || (this.minutes === 11) || (this.minutes === 12) || (this.minutes === 13) || (this.minutes === 14)) {
          return this.minTitles[0];
        } else if (1 < m && m < 5) {
          return this.minTitles[1];
        }
        return this.minTitles[2];
      },
      hoursTitle() {
        let h = this.hours % 10;
        if ((4 < h && h < 10) || (h === 0) || (this.hours === 11) || (this.hours === 12) || (this.hours === 13) || (this.hours === 14)) {
          return this.hoursTitles[0];
        } else if (1 < h && h < 5) {
          return this.hoursTitles[1];
        }
        return this.hoursTitles[2];
      },
      daysTitle() {
        let d = this.days;
        return d % 10 === 1 && d % 100 !== 11 ?
          this.daysTitles[2] : (d % 10 >= 2 && d % 10 <= 4 && (d % 100 < 10 || d % 100 >= 20) ?
            this.daysTitles[1] : this.daysTitles[0]);
      }
    }

  }
</script>

<style>
  .timer-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    width: 700px;
    height: 100px;
    border-radius: 0.5em;
    background: #0f3854;
    background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    background-size: 100%;
    position: relative;
  }

  .timer-container div {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 90px;
    font-family: Roboto, sans-serif;
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
    font-size: 20px;
  }

  .timer-container div:first-child {
    width: 150px;
  }
</style>



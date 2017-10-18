<template>
  <div>
    <div class="timer-container" v-if="seconds >= 0">
      <div>
        <span class="grey">до завершения</span>
      </div>
      <div>
        <span>{{ days }}</span> {{ daysTitle }}
      </div>
      <div>
        <span>{{ hours }}</span> {{ hoursTitle }}
      </div>
      <div>
        <span>{{ minutes }}</span> {{ minTitle }}
      </div>
    </div>
    <div v-else>
      <span>Прием предложений завершен</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['deadLine'],
    created() {
      this.interval = window.setInterval(this.getData, 1000);
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
        dateNow: new Date() / 1000,
        interval: '',
        minTitles: ['минут', 'минуты', 'минута'],
        hoursTitles: ['часов', 'часа', 'час'],
        daysTitles: ['дней', 'дня', 'день']
      }
    },
    methods: {
      getData() {
        this.dateNow = new Date() / 1000;
        this.$emit('getSeconds', this.seconds);
      }
    },
    computed: {
      seconds() {
        let sec = Math.trunc(((new Date(this.deadLine.y, this.deadLine.m, this.deadLine.d, this.deadLine.h, this.deadLine.min) / 1000 - this.dateNow) % 60));
        return sec;
      },
      minutes() {
        let min = Math.trunc((((new Date(this.deadLine.y, this.deadLine.m, this.deadLine.d, this.deadLine.h, this.deadLine.min) / 1000 - this.dateNow) / 60) % 60));
        return min < 10 ? '0' + min : min;
      },
      hours() {
        let h = Math.trunc((((new Date(this.deadLine.y, this.deadLine.m, this.deadLine.d, this.deadLine.h, this.deadLine.min) / 1000 - this.dateNow) / 60 / 60) % 24));

        return h < 10 ? '0' + h : h;
      },
      days() {
        return Math.trunc(((new Date(this.deadLine.y, this.deadLine.m, this.deadLine.d, this.deadLine.h, this.deadLine.min) / 1000 - this.dateNow) / 3600 / 24))
      },
      minTitle() {
        let m = this.minutes % 10;
        if ((4 < m && m < 10) || (m === 0)) {
          return this.minTitles[0];
        } else if (1 < m && m < 5) {
          return this.minTitles[1];
        }
        return this.minTitles[2];
      },
      hoursTitle() {
        let h = this.hours % 10;
        if ((4 < h && h < 10) || (h === 0)) {
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
</style>



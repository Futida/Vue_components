<template>
  <div class="selection-container">
    <div class="selection-title" @click="showOptions = !showOptions">
      {{ selected.title }} <i v-if="selected.icon" :class="selected.icon"></i>
      <i class="fa fa-chevron-down"
         :class="{rotate:showOptions}"></i>
    </div>
    <div class="selection-popup" v-if="showOptions">
      <p v-for="(el,index) in options" @click="selectOption(index)">
        {{ el.title }} <i v-if="el.icon" :class="el.icon"></i>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array
      }
    },
    created() {
      this.selected = this.options[0]
    },
    data() {
      return {
        selected: '',
        showOptions: false
      }
    },
    methods: {
      selectOption(index) {
        this.selected = this.options[index];
        this.showOptions = false

      }
    }
  }
</script>

<style>
  .selection-container {
    display: inline-block;
    position: relative;
    border-bottom: 2px solid grey;
    padding: 5px 0px;
    border-radius: 0px;
    margin-left: 20px;
  }

  .selection-container .fa {
    margin-left: 5px;
    margin-right: 5px;
  }

  .selection-container .fa-chevron-down {
    color: blue;
    transition: all .2s;
  }

  .selection-container p {
    margin: 0;
  }

  .selection-container p + p {
    margin-top: 5px;
  }

  .selection-container p:hover {
    background-color: blue;
    cursor: pointer;
  }

  .selection-popup {
    opacity: 1;
    position: absolute;
    top: 44px;
    right: 0;
    padding: 5px 5px;
    border-radius: 5px;
    border: 1px solid blue;
    background: #fff;
    z-index: 20;
  }

  .selection-popup p {
    font-size: 14px;
    line-height: 24px;
    padding: 0 6px;
    padding-right: 40px;
    text-align: left;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
  }

  .selection-popup p .fa {
    float: right;
    line-height: 24px;
    opacity: .5;
    margin-right: -30px;
  }

  .selection-title {
    text-align: left;
  }

  .rotate {
    transform: rotate(180deg);
  }

</style>

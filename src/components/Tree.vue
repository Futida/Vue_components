
<template>
  <div style="padding: 15px">
    <ul>
      <li v-for="item in items">
        {{ item.name }}
        <button @click="isOpen = !isOpen" v-if="isNested(item)">{{ isOpen ? '-' : '+' }}</button>
        <template v-if="isNested(item)">
          <Tree :items='item.children' v-show="isOpen"></Tree>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Tree',
    props: ['items'],
    created() {
//      console.log(this.model)
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      isNested(item) {
        return !!item.children
      },
    }
  }
</script>

<template>
  <div>
    <div>
      <h3>Tree</h3>
      <Tree :items="model"></Tree>
    </div>
    <div>
      <h3>Timer</h3>
      <Timer :deadLine="deadLine"></Timer>
    </div>
    <div>
      <h3>Selection</h3>
      <Selection :options="options"></Selection>
    </div>
  </div>
</template>

<script>

  import Tree from './Tree.vue'
  import Timer from './Timer.vue'
  import Selection from './Selection.vue'

  export default {
    components: { Tree, Timer, Selection },
    data() {
      return {
        model: [
          {
            name: 'Level 1.1',
            children: [
              { name: "Level 2" }
            ]
          },
          { name: 'Level 1.2' },
          { name: 'Level 1.3' },
        ],
        deadLine: {
          y: 2017,
          m: 9,
          d: 29,
          h: 18,
          min: 0
        },
          options: [
            { title: 'По дате размещения', icon: 'fa fa-long-arrow-down' },
            { title: 'По дате размещения', icon: 'fa fa-long-arrow-up' },
            { title: 'По сроку поставки', icon: 'fa fa-long-arrow-down' },
            { title: 'По сроку поставки', icon: 'fa fa-long-arrow-up' },
          ]
      }
    }
  }
</script>

<style>

</style>

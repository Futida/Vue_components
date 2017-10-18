<template>
  <div>
    <div>
      <Datepicker language="ru"
                  format="dd.MM.yyyy">
      </Datepicker>
    </div>
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
      <Selection :options="options"
                 label="title"
                 :icon="icon">
      </Selection>
    </div>
    <div>
      <table>
        <tr v-for="(row,index) in arr">
          <td v-for="(col,i) in row">
            <input type="text" :rowIndex="index" :colIndex="i" @keyup.enter="saveData">
            {{ i === 0 && index !== 0 ? index : '' }}
            <span>{{ col.value }}</span>
          </td>
        </tr>
      </table>
    </div>
    <p>
      <Render></Render>
    </p>
  </div>
</template>

<script>

  import Tree from './Tree.vue'
  import Timer from './Timer.vue'
  import Selection from './Selection.vue'
  import Datepicker from 'vuejs-datepicker'
  import Render from './Render.vue'

  export default {
    components: { Tree, Timer, Selection, Datepicker, Render },
    mounted() {
      this.createTable();
    },
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
        ],
        icon: 'fa fa-chevron-down',

        arr: []
      }
    },
    methods: {
      crArr() {
        let arr = [];
        for (var k = 0; k < 10; k++) {
          arr[k] = new Array(10);
        }
      },
      saveData(e) {
        let el = e.target,
          rowIndex = el.getAttribute('rowIndex'),
          colIndex = el.getAttribute('colIndex');

        this.arr[rowIndex][colIndex].value = el.value;
      },
      createTable() {
        var rows = [];
        for (var i = 0; i < 10; i++) {
          var row = [];
          for (var j = 0; j < 10; j++) {
            row.push({
              value: ''
            });
          }
          rows.push(row);
        }
        this.arr = rows;
        console.log(rows);

//        var rows = [];
//
//        for (var i = 0; i < 10; i++) {
//          var tr = document.createElement('tr');
//          for (var j = 0; j < 10; j++) {
//            var td = document.createElement('td');
//            td.appendChild(document.createElement('input'));
//            tr.appendChild(td);
//          }
//          rows.push(tr);
//        }
//
//        var table = document.createElement('table');
//        rows.forEach(function(row){
//          table.appendChild(row);
//        });
//
//        console.log(table);
//        document.body.append(table);
      }
    }
  }

</script>

<style lang="scss">


  table {
    margin-top: 20px;
    border: 1px solid black;
  }

  td {
    border: 1px solid black;
    width: 50px;
    height: 50px;
  }

  td input {
    width: 100%;
    height: 100%;
  }


</style>




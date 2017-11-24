<template>
  <div style="padding: 15px">
    <div>
      <Datepicker language="ru"
                  format="dd.MM.yyyy">
      </Datepicker>
    </div>
    <div>
      <h3>Tree</h3>
      <Tree v-bind="model"></Tree>
    </div>
    <div>
      <h3>Timer</h3>
      <Timer v-bind:deadLine="deadLine"
             displayTitles
             v-bind:title="'до Нового года осталось'">

      </Timer>
    </div>
    <div>
      <h3>Selection</h3>
      <Selection v-bind:options="options"
                 label="title"
                 v-bind:icon="icon">
      </Selection>
    </div>
    <h3>Table</h3>
    <div>
      <table>
        <tr v-for="(row,index) in arr">
          <td v-for="(col,i) in row" style="position: relative">
            <span style="position: absolute"> {{ (i === 0 && index !== 0 ? index : '') || (col.value) }}</span>
            <input type="text" v-bind:rowIndex="index" v-bind:colIndex="i" v-on:keyup.enter="saveData">
          </td>
        </tr>
      </table>
    </div>
    <h3>Render JSX</h3>
    <p>
      <Render></Render>
    </p>
    <button @click="doSomethingStupid()">Click me</button>
  </div>
</template>

<script src="./script-components.js"></script>

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





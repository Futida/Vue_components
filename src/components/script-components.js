//@flow
import Tree from './Tree.vue'
import Timer from './Timer.vue'
import Selection from './Selection.vue'
import Datepicker from 'vuejs-datepicker'
import Render from './Render.vue'

const randomThing: string = "Flow!";

export default {
  components: { Tree, Timer, Selection, Datepicker, Render },
  created() {
    console.log(randomThing)
  },
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
        y: 2018,
        m: 0,
        d: 1,
        h: 0,
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

    doSomethingStupid: function(param1: number) {

      console.log(5 * param1);
      let conf: string = "haha";
      // Flow should show an error here, "The operand of an arithmetic operation must be a number."
      this.bar([1],2)
    },
    bar: function(arr: Array<number>, prop: number) {
      let conf: number = prop;
      arr.push(conf);
      console.log(arr);
    },
    crArr() {
      let arr = [];
      for (var k = 0; k < 10; k++) {
        arr[k] = new Array(10);
      }
    },
    saveData(e: any) {
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

//--------------------//
//  var div = document.createElement('div');
//  var timer = new Timer(5);
//
//
//  var m = setInterval(function() {
//    console.log(timer);
//    timer.foo();
//    if (timer.elem < 0) {
//      myStopFunction()
//    }
//  }, 1000);
//
//  function myStopFunction() {
//    clearInterval(m);
//  }
//
//  function Timer(elem) {
//    this.elem = elem;
//    this.foo = function() {
//      console.log(this.elem--);
//    };
//  }
//-----------------//
//  var User = {
//    a: 1,
//    foo: function() {
//      console.log(User.a, this);
//    },
//    bar: () => {
//      console.log(this);
//    }
//  }
//
//  User.foo();
//  User.bar();
//
//  //------------------------//
//  var selected = [
//    { price: 20 },
//    { price: 45 },
//    { price: 67 },
//    { price: 1305 }
//  ];
//
//  var reducers = {
//    rubles: function(state, item) {
//      return state.rubles += item.price;
//    },
//    dollars: function(state, item) {
//      return state.dollars += item.price / 71.6024;
//    },
//    euros: function(state, item) {
//      return state.euros += item.price / 79.0133;
//    },
//    yens: function(state, item) {
//      return state.yens += item.price / 0.6341;
//    },
//    pounds: function(state, item) {
//      return state.pounds += item.price / 101.7829;
//    }
//  };
//
//  var combineReducers = function(reducers) {
//    return function(state, item) {
//      return Object.keys(reducers).reduce(function(nextState, key) {
//        reducers[key](state, item);
//        return state;
//      }, {});
//    }
//  };
//
//  var priceReducer = combineReducers(reducers);
//  // и вычисляем общую стоимость, задавая объект с изначальными значениями
//  var totalPrice = selected.reduce(priceReducer, {
//    rubles: 0,
//    pounds: 0,
//    dollars: 0,
//    euros: 0,
//    yens: 0
//  });
//
//  console.log(totalPrice);
//
//  //------------------------//
//
//  function foo() {
//    return 'Hello'
//  }
//
//  function decor(f) {
//    return function() {
//      console.log('start');
//      let result = f.apply(this);
//      console.log(result);
//      console.log('end')
//    }
//  }
//
//  let bar = decor(foo);
//  bar()
//
//  //-----------------------//
//
//  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  var arrResult = [];
//
//  for (var i = 0; i < arr.length; i += 3) {
//    arrResult.push(arr.slice(i, i + 3))
//  }
//  console.log(arrResult);


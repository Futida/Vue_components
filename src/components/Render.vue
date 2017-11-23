<script>
  export default {
    render: function(createElement) {
      let foo = function() {
        let createH5 = createElement('h5', {
          'class': {
            foo: true
          },
          style: {
            fontSize: '14px',
            color: 'red',
            fontWeight: 'bold'
          }
        }, 'hello');
        return createElement('li', [createH5]);
      };
      return createElement('ul', [foo()]);
    }
//    render(createElement){
//      return createElement('ul', [createElement('li', 'her')])
//    }
  }
</script>

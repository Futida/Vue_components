<template>
  <div class="container">
    <div class="container-fluid">
      <h2 class="text-center">Vue.js && Firebase</h2>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add Customer</h3>
        </div>
        <div class="panel-body">
          <form id="form" class="form" @submit.prevent="addCustomer">
            <div class="form-group">
              <label for="customerName"> Name:</label>
              <input type="text" id="customerName" class="form-control" v-model="newCustomer.name">
            </div>
            <div class="form-group">
              <label for="lastName"> LastName:</label>
              <input type="text" id="lastName" class="form-control" v-model="newCustomer.lastName">
            </div>
            <div class="form-group">
              <label for="age"> Age:</label>
              <input type="text" id="age" class="form-control" v-model="newCustomer.age">
            </div>
            <div class="form-group">
              <label for="gender"> Gender:</label>
              <input type="text" id="gender" class="form-control" v-model="newCustomer.gender">
            </div>
            <div class="form-group">
              <label for="country"> Country:</label>
              <input type="text" id="country" class="form-control" v-model="newCustomer.country">
            </div>
            <input type="submit" class="btn btn-primary" value="Add Customer">
          </form>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Customers List</h3>
        </div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Возраст</th>
                <th>Пол</th>
                <th>Страна</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="customer in customers">
                <td>
                  {{ customer.name }}
                </td>
                <td>
                  {{ customer.lastName }}
                </td>
                <td>
                  {{ customer.age }}
                </td>
                <td>
                  {{ customer.gender }}
                </td>
                <td>
                  {{ customer.country }}
                </td>
                <td>
                  <span class="glyphicon glyphicon-trash" @click="deleteCustomer(customer)"></span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!--removal alert-->
      <transition name="alert">
        <div class="alert-success" v-show="flag">
          <div class="alert-success_container">
            <span>Успешно удалено</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

  import Firebase from 'firebase'

  let config = {
    apiKey: "AIzaSyDLtjbe_bzpSwQ66gH-6lsHSXD2oZLFHec",
    authDomain: "customers-720db.firebaseapp.com",
    databaseURL: "https://customers-720db.firebaseio.com",
    projectId: "customers-720db",
    storageBucket: "customers-720db.appspot.com",
    messagingSenderId: "396512097257"
  };

  let app = Firebase.initializeApp(config);
  let db = app.database();

  let customersRef = db.ref('customers');

  export default{
    firebase: {
      customers: customersRef
    },
    data(){
      return {
        newCustomer: {
          name: '',
          lastName: '',
          age: '',
          gender: '',
          country: ''
        },
        flag: false
      }
    },
    methods: {
      addCustomer: function() {
        customersRef.push(this.newCustomer);
      },
      deleteCustomer: function(customer) {
        customersRef.child(customer['.key']).remove();
        // toastr.success('Customer deleted')
        this.showModal();
      },
      showModal: function() {
        // alert('Are you sure to remove this customer?');
        this.flag = true;
        setTimeout(this.hideModal, 2000);
      },
      hideModal: function() {
        this.flag = false
      }
    }
  }
</script>

<style src="../css/customers.css"></style>

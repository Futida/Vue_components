/**
 * Created by konstantingrushin on 17.07.17.
 */
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

export default db

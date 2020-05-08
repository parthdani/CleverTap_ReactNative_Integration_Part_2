import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCj36d6RZFEDycpDCUsL5ONcVu6sYLvSzo",
  	authDomain: "clevertapreactnativetutorial2.firebaseapp.com",
  	databaseURL: "https://clevertapreactnativetutorial2.firebaseio.com",
  	projectId: "clevertapreactnativetutorial2",
  	storageBucket: "clevertapreactnativetutorial2.appspot.com",
  	messagingSenderId: "154889865123",
  	appId: "1:154889865123:web:e639f7dfa1fae457a4bc16",
  	measurementId: "G-C8GHBK834Q"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
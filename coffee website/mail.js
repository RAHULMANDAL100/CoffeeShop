const firebaseConfig = {
    apiKey: "AIzaSyD1rD5YGJTP8eXAxO2-UnqCHMQLJDpmyOo",
    authDomain: "contact-form-2277e.firebaseapp.com",
    databaseURL: "https://contact-form-2277e-default-rtdb.firebaseio.com",
    projectId: "contact-form-2277e",
    storageBucket: "contact-form-2277e.appspot.com",
    messagingSenderId: "628205144882",
    appId: "1:628205144882:web:1799ef5d68bf1a5129652b"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var password=getElementVal("password")
  saveMessages(name, emailid, msgContent,password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent,password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    password:password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

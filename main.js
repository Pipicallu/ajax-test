function getData(cb){
var xhr = new XMLHttpRequest(); // in built object that javascript provides to allow us to consume APIs. It gives us the method to send connections, open connections and close them.
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); // opens up a connection to api, the get method is set to retrieve and the second arguement is the url for the api
xhr.send(); // sends the request we made.

xhr.onreadystatechange = function(){
 if (this.readyState == 4 && this.status == 200){ 
      cb(data = JSON.parse(this.responseText));
  }
}; // whenever readystate of object changes we want to run a check, the XHR object maintains an internal state as it completes parts of our request operation.

}

function printDataToConsole(data){
    console.log(data);
}
 getData(printDataToConsole);
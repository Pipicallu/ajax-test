const baseURL = "https://ci-swapi.herokuapp.com/api/"
function getData(type, cb){
var xhr = new XMLHttpRequest(); // in built object that javascript provides to allow us to consume APIs. It gives us the method to send connections, open connections and close them.
xhr.open("GET", baseURL + type + "/"); // opens up a connection to api, the get method is set to retrieve and the second arguement is the url for the api which is stored in a const and the needed extension to retreive the write information
xhr.send(); // sends the request we made.

xhr.onreadystatechange = function(){
 if (this.readyState == 4 && this.status == 200){ 
      cb(data = JSON.parse(this.responseText));
  }
}; // whenever readystate of object changes we want to run a check, the XHR object maintains an internal state as it completes parts of our request operation.

}

function writeToDocument(type){ // type here refers to the type coming from the api, such as film document etc and is referenced in our html when the function is called
    var el = document.getElementById("data");
    el.innerHTML = " ";
    getData(type, function(data){
      
        data = data.results;
        data.forEach(function(item) {
            Object.keys(item).forEach(function(key){
                console.log(key);
            });
        
            el.innerHTML += "<p>" + item.name + "</p>";

        });
    });
};
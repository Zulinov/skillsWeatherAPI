
// global variables

let configApiUrl = "https://api.spoonacular.com/recipes/complexSearch?";
let totalData = [];
let inputText;
let resultDiv = document.getElementById("results-div");

//search() function

function search(){
  //alert("hi");
  if(document.getElementById("txtSearch").value !== ""){
   inputText = document.getElementById("txtSearch").value;
   //alert(inputText);
   let APIKey = "apiKey=45b24ce1df9c4929b7d32a63d37a40e4";
   let fetchURL = configApiUrl + APIKey + "&query=" + inputText;
alert(fetchURL);
   fetch(fetchURL)
   .then(function(response){
     return response.json();
   })
   .then(function(data){
     console.log(data);
     if(data.results.length > 0) {
       totalData = data.results;
       
       // resultDiv.innerHTML = JSON.stringify(totalData);
        
      for(let i = 0; i <totalData.length; i++){
        resultDiv.innerHTML+= JSON.stringify(totalData[i].title) + "<br>";

         //You could try image here


      } //end of for
      
     }//end of if
   })//end of then
  }//end of if
  else{
    resultDiv.innerHTML = "Sorry no such FOOD!";
  }// end of else
}//end of function search()

var request=new XMLHttpRequest();

//Step 2:Opening A request
//it is an Inbuilt Function, It takes 2 parameters
//HTTP METHOD, API LINK
request.open("GET","https://restcountries.com/v3.1/all");
//Step 03:Sending The request
request.send();
//Step 04:Once the data has been successfully received from the server
//status rode 200:
//EVENT:a specific task
//To perform some specific task E need events
//onload: This will be used when the data has been successfully loaded from server //function it is a set of code to perform some specific task
//conversion
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);

for(var i=0;i<result.length;i++){
    console.log(result[i].name.common,result[i].capital);
}
}
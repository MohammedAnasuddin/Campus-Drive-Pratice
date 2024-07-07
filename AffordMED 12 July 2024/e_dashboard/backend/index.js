const express = require('express'); //> loading express in nodeJS

const app = express(); //> Creating instance of express

app.get('/',(request,response)=>{
response.send("Congrats for first App");
});        //> Setting up a GET Routue URL whenver a client request to rootURl(/) 
          //> response is sended as string "Congrats for first App"


app.listen(5500); //> To start the express server on port 5500 and liten to requests
//Tip Any port can be used
//Tip To execute just hit npx nodemon in terminal and goto
//Tip localhost:5000 in browser 
var app=require("express")
app.get('/',(req,res)=>{
  
res.sendFile(__dirname+"/index.html")
}).listen(8080)
  

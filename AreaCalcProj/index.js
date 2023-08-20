const app= require('./app.js');
const port=1050;


app.listen(port,()=>{
    console.log(`The Server Running On http://localhost:${port}/`);
});
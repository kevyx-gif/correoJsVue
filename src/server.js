const app = require('./app');

const port = 3000;

app.listen(port,()=>{
    console.log('El servidor esta encencido en el puerto: ',port);
});
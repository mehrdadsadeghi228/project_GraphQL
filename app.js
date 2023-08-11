const Application=require('./app/server');
const DB_URL= 'mongodb+srv://mehrdadsadeghi769:xmFst0sRO13nIByJ@t2.bla0wpw.mongodb.net/manager?retryWrites=true&w=majority';
const PORT=3000;
 new Application(PORT,DB_URL);

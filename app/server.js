const express=require('express');
const {mongoose}=require('mongoose');
const {AllRoutes}=require('./routers/routers');
const path= require("path");


module.exports=class Application{

    #app = express();
    #DB_URI;
    #PORT;
    constructor(PORT,DB_URI){
        this.#PORT = PORT;
        this.#DB_URI = DB_URI;
        this.configApplication()
        this.connectToMongoDB()
        this.createServer()
        this.createRoutes()
        this.errorhandler()
    }
    configApplication(){
        this.#app.use(cors())
        this.#app.use(morgan("dev"));
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use(express.static(path.join(__dirname, "..", "public")));

    }
    createServer(){
      const http=require("http");
      const server =http.createServer(this.#app);
      server.listen(this.#PORT,()=>{
        console.log(`server run on port http://localhost:${this.#PORT}`);
      })

    }
    connectToMongoDB(){
        try {
            mongoose.connect(this.#DB_URI).then(result=>{
                console.log('connection to mongodb ');
            
            });
            mongoose.connection.on("connected", () => {
                console.log("mongoose connected to DB");
              });
    
              mongoose.connection.on("disconnected", () => {
                console.log("mongoose connection is disconnected");
              });
            
        } catch (error) {
            console.log("connect in mongodb is failure ",error);
            
        }
        
    }
    errorhandler(){

        this.#app.use((req,res,next)=>{
            return res.status(404).json({
                status:404,
                success:false,
                message:" page not found"
            })
            
        });
        this.#app.use((err,req,res,next)=>{
            const status=err?.error||500;
            const message=err?.message|| "Internal  Server Error";

            return res.status(status).json({
                status:status,
                success:false,
                message:message
            })
            
        });    
    }
    
    createRoutes(){
        this.#app.use(AllRoutes);

    }

}

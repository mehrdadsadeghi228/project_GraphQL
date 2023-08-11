const Controller = require("./controller");
const {StatusCodes} = require("http-status-codes")
const createError = require("http-errors");
const BookModels = require("../model/Book.models");
const { AuthorModel } = require("../model/Author.Model");

class AdminController extends Controller{

 adminIndex(res,req,next) {
    try {
        return res.status(StatusCodes.OK).json({
            statusCode:StatusCodes.OK,
            message: 'Hello Admin',
        });
    } catch (error) {
        console.log(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message:createError.InternalServerError
        })
     };
    }
    async addBook(res,req,next){

        try {
         console.log(req.body);
 
         const {title,author_id,description,image,price,
             stock,category,publisher,isAvailable,
             version,
         }=req.body;
 
        const CreateBook= await BookModels.create({
         title,
         author_id,
         description,
         image,
         price, 
         stock,
         category,
         publisher,
         isAvailable,
         version,
        });
        if(!CreateBook) throw createError.BadRequest("Data have problem in body ");
        
         return res.status(StatusCodes.OK).json({
             statusCode:StatusCodes.OK,
             message:CreateBook,
         }); 
         
        } catch (error) {
         next(error)
        }
 
         
     }
     async addAuthor(res,req,next){

        try {
         console.log(req.body);
 
         const {first_name,last_name,email}=req.body;
 
        const CreateAuthor= await AuthorModel.create({
            first_name,
            last_name,
            email,
        });
        if(!CreateAuthor) throw createError.BadRequest("Data have problem in body ");
        
         return res.status(StatusCodes.OK).json({
             statusCode:StatusCodes.OK,
             message:CreateAuthor,
         }); 
         
        } catch (error) {
         next(error)
        }
 
         
     }

}


module.exports={
    AdminController:new AdminController()
}
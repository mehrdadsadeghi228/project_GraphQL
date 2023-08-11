const Controller = require("./controller");
const {StatusCodes} = require("http-status-codes")
const createError = require("http-errors");

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
    }
   
    
}
}

module.exports={
    AdminController:new AdminController()
}
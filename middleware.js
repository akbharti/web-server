// use module exports to middleware

module.exports.middleware = {
    requireAuthentication : (req,res,next) => {
        console.log("private route hit");
        next();
    },
    logger : (req,res,next) => {
        console.log(`Request method : ${req.method} url:${req.originalUrl}`);
        next();
    }
}; 
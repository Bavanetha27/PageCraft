const {tokenValidator} = require("./tokens");

module.exports = async function (req,res,next){
    try{
        const {jwt} = req.cookies
        const valid = await tokenValidator(jwt);
        if(valid){
            next();
        }
        else{
            res.send("Access Denied");
        }
    }
    catch(error){
        res.send(error);
    }
    
}
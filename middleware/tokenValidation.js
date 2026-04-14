import JWT from "jsonwebtoken";
import authentication from "../services/authentication.js";


export default function c(tokenName){
	return (req,res,next)=>{
		if(req.url=="/favicon.ico") return res.status(204).end();
		console.log("Request URL:", req.url, "\n");
		const tokenValue=req.cookies[tokenName];
		console.log(`tokenCookieValue: ${tokenValue}`);  
		if(tokenValue){
			try{
//				console.log("inside mware213");
				const userPayload=authentication.validateToken(tokenValue);
//				console.log("\n AFTER USERPAYLOAD \n");
//				console.log(userPayload);
			}catch{}

		}
		next();
	}
}



			

import JWT from "jsonwebtoken";
import secret from "../secret/index.js"

function createTokenForUser(user){

	const payload={
		_id:user._id,
		email:user.email,
		fullname:user.fullname,
		profileImageURL: user.profileImageURL,
		role:user.role,
	};

	const token=JWT.sign(payload,secret.one);
	
	return token;
}

function validateToken(payload){

	const user=JWT.verify(payload,secret.one);
//	console.log(user);
	return user;
}

export default{
	createTokenForUser,
	validateToken
}


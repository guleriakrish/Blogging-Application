import JWT from "jsonwebtoken";
import secret from "../secret/index.js"

function createTokenForUser(user){

	const payload={
		_id:user._id,
		email:user.email,
		profileImageURL: user.profileImageURL,
		role:user.role,
	};

	const token=JWT.sign(payload,secret.one);
	
	return token;
}

function validateToken(user){

	const payload=JWT.verify(payload,secret);
	return payload;
}

export default{
	createTokenForUser,
	validateToken
}


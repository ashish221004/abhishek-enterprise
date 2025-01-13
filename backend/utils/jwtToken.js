// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {

    const token = user.getJwtToken();

    // Options for cookies
    const options = {
        maxAge: 7 * 24 * 60 * 60 * 1000, 
        httpOnly: true
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    });
}

module.exports = sendToken;
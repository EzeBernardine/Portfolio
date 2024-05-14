










export const errorHandler = (err) => {
	let messageString = "";

	if (typeof err === "string") {
		messageString += err;
	} else if (!err?.response) {
		messageString += "Network error! check your network and try again";
	} else {
		messageString = err?.response?.data?.message || err?.response.data.responseMessage || err?.response?.data?.message || err?.response.data.error; ; 
	}
	return messageString 
};

export const messageHandler = (err) => {
	let messageString = "";
	if (!err) {
		messageString += "Success";
	} else {
		messageString = Array.isArray(err) ? err[0] : err;
	}
	return messageString;
};

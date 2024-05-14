import { axiosHandler } from "./axiosHandler";


 
const fetcher = async (url, method, token ) => {
	const { data } = await axiosHandler({ method, url, token });
	return { data };
};

export default fetcher;
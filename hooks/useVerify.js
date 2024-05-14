import {   useState } from "react";
import {   VERIFY_URL } from "../constant/url";
import { UseContext } from "../state/provider";
import { useAxiosHandler,   } from "./useAxiosHandler";




 
 



export const useVerifyAccount = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	const { state: {  accessToken}} = UseContext()


	const handleVerifyAccount = async (DATA) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${VERIFY_URL}/generate-verification-link?access_token=${accessToken}`,
			DATA,
			notify: false,
		});
		setLoading(false);
		if (data?.data) {
			window.open(data?.data, "_self")
			return { data };
		}
	};
	return { handleVerifyAccount, loading };
};


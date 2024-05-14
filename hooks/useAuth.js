import {  useState } from "react";
import {   AUTH_URL, USER_URL } from "../constant/url";
import { useAxiosHandler,   } from "./useAxiosHandler";
import { STORAGE } from "../application/storage";
import Constants from "../constant";
import { UseContext } from "../state/provider";
import Notify from "../application/notification";


 


export const useGetUserInfo = () => {
	const [loading, setLoading] = useState(false);
	const { getAxiosHandler } = useAxiosHandler();
	const {setUser } = UseContext()
	const handleGetUserInfo = async (token) => {
		setLoading(true);
		const { data } = await getAxiosHandler({
			url: `${USER_URL}/get-user-info`,
			notify: false,
			token
		});
		setLoading(false);
		if (data) { 
			STORAGE.SAVE(Constants.keys.user,  JSON.stringify( data?.data ));
			setUser( data?.data)
			return { data: data?.data };
		}
	};
	return { handleGetUserInfo, loading };
};






export const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	const { setAccessToken, setFreshToken} = UseContext()
 

	const handleLogin = async (DATA) => {
		setLoading(true);
		const { data , error} = await postAxiosHandler({
			url: `${AUTH_URL}/token`,
			DATA,
			token: "",
			extraHeaders: {
				Authorization: 'Basic ' + btoa(`${process.env.OATH_CLIENT_ID}:${process.env.OATH_CLIENT_SECRET}`),
				"Content-Type": "application/x-www-form-urlencoded"
			},
			notify: false,
		});
		if(error){
			Notify().error(error === "invalid_grant" ? "Invalid Credentials" : error)
		}
		setLoading(false);
		if (data?.access_token) {
			STORAGE.SAVE(Constants.keys.access_token, data?.access_token)
			STORAGE.SAVE(Constants.keys.refresh_token, data?.refresh_token);
			setFreshToken(data?.refresh_token)
			setAccessToken(data?.access_token)
			return { data };
		}
	};
	return { handleLogin, loading };
};


export const useSignUp = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();

	const handlePersoanlSigUp = async (DATA) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${USER_URL}/register-user`,
			DATA,
			token: "",
			successMessage: "Account created successfully",
			errorMessage: "Something went wrong while creating your account"
		});
		setLoading(false);
		if (data) return { data };
	};
	return { handlePersoanlSigUp, loading };
};


export const useForgotPassword = () => {
	const [loading, setLoading] = useState(false);
	const { getAxiosHandler } = useAxiosHandler();

	const handleForgotPassword = async (email) => {
		setLoading(true);
		const { data } = await getAxiosHandler({
			url: `${USER_URL}/forgot-password/${email}`,
			token: "",
			successMessage: "A reset password has been sent to your email, Kindly check your mail!",
			// errorMessage: "Something went wrong while creating your account"
		});
		setLoading(false);
		if (data) return { data };
	};
	return { handleForgotPassword, loading };
};




export const useUpdateUser = () => {
	const [loading, setLoading] = useState(false);
	const { putAxiosHandler  } = useAxiosHandler();

	const hanldeUpdateUser = async (DATA) => {
		setLoading(true);
		const { data } = await putAxiosHandler({
			url: `${USER_URL}/edit-profile`,
			DATA,
			successMessage: "Account updated successfully",
			errorMessage: "Something went wrong while updating your account"
		});
		setLoading(false);
		if (data) return { data };
	};
	return { hanldeUpdateUser, loading };
};


export const useUpdatePassword = () => {
	const [loading, setLoading] = useState(false);
	const { putAxiosHandler  } = useAxiosHandler();

	const handleChangePassword = async (DATA) => {
		setLoading(true);
		const { data } = await putAxiosHandler({
			url: `${USER_URL}/change-password`,
			DATA,
			successMessage: "Password updated successfully",
		});
		setLoading(false);
		if (data) return { data };
	};
	return { handleChangePassword, loading };
};



export const useActivateAccount = () => {
	const [loading, setLoading] = useState(false);
	const { getAxiosHandler  } = useAxiosHandler();
 
	const handleActivateAccount = async (verificationCode) => {
		setLoading(true);
		const { data } = await getAxiosHandler({
			url: `${USER_URL}/activate-user/${verificationCode}`,
			token: "",
			successMessage: "Sign Up process completed",
		});
		setLoading(false);
		if (data) return { data: data?.data };
	};
	return { handleActivateAccount, loading };
};




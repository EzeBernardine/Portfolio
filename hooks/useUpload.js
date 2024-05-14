import { useState } from "react";
import { useAxiosHandler } from "./useAxiosHandler";
import Notify from "../application/notification";
import { BASE_URL, USER_URL } from "../constant/url";









export const useUploadImage = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	
	const handleUploadImage = async (DATA) => {
		setLoading(true);
		const { data , error} = await postAxiosHandler({
			url: `${BASE_URL}/upload`,
			DATA,
			notify: false, 
			extraHeaders: { "Content-Type":  'multipart/form-data' }
		});
		setLoading(false);
		if (data) {
			return { data: data };
		}
		if(error){
			Notify().error(  error );
		}
	};
	return { handleUploadImage, loading };
};


export const useUploadProfileImage = () => {
	const [loading, setLoading] = useState(false);
	const { putAxiosHandler } = useAxiosHandler();
	
	const handleUploadProfileImage = async (DATA) => {
		setLoading(true);
		const { data , error} = await putAxiosHandler({
			url: `${USER_URL}/edit-profile-image`,
			DATA, 
			successMessage: "Profile updated successfully"
		});
		setLoading(false);
		if (data) {
			return { data: data };
		}
		if(error){
			Notify().error(  error );
		}
	};
	return { handleUploadProfileImage, loading };
};

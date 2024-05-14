
import { useState } from "react";
import {  FEEDBACK_URL,    } from "../constant/url";

import {  useAxiosHandler, useGetCachedAxiosHandler} from "./useAxiosHandler";
import { useEffect } from "react";
 
import { useCACHE } from "./handlers/useCache";
import Notify from "../application/notification";








 
 


export const useGetFeedbacks = () => {
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 10
	})
	const { data , error, loading, mutate , isValidating} =   useGetCachedAxiosHandler({
		url: `${FEEDBACK_URL}/get-feedbacks?pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}`,
		notify: false,
	});
	const {CACHE} = useCACHE(data, isValidating);
	useEffect(() => {
		if(data){
			setPageInfo(prev => ({
				...prev, ...data?.data?.pageable, 
				totalElements: data?.data?.totalElements,
				totalPages: data?.data?.totalPages,
			}))
		}
	}, [data]) 
	return {   loading: loading && !CACHE?.data?.content , feedbacks: CACHE?.data?.content, error, mutate , isValidating , pageInfo, setPageInfo};
};


export const useAddFeedback = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	
	const handleAddFeedback = async (DATA) => {
		setLoading(true);
		const { data , error} = await postAxiosHandler({
			url: `${FEEDBACK_URL}/add-feedback`,
			DATA,
			notify: false
		});
		setLoading(false);
		if (data) return { data };
		if(error){
			Notify().error("Error submitting your feedback ")
		}
	};
	return { handleAddFeedback, loading };
};
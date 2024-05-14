
import {   OPERATION_URL,  } from "../constant/url";

import {
	   useGetCachedAxiosHandler, 
} from "./useAxiosHandler";
 






 



export const useGetOperations = () => {
	const { data , error, loading, mutate } =   useGetCachedAxiosHandler({
		url: `${OPERATION_URL}/get-operations`,
		notify: false,
	});
 
	return {   loading, operations: data?.data, error, mutate  };
};

 

 
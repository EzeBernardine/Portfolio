







import {   PAYMENT_CHANEL_TYPES_URL,    } from "../constant/url";
import {   useGetCachedAxiosHandler } from "./useAxiosHandler";







export const useGetPaymentChanelTypes = () => {
	const { data , error, loading } =   useGetCachedAxiosHandler({
		url: `${PAYMENT_CHANEL_TYPES_URL}/get-payment-channel-types`,
		notify: false,
	});
 
	return {   loading, paymentChanels: data?.data, error  };
};

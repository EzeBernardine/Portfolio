import { useEffect, useState } from "react";
import { AZUPAY_URL, MONOVA_URL, TRANSACTION_URL, ZAI_URL } from "../constant/url";
import { UseContext } from "../state/provider";
import { useCACHE } from "./handlers/useCache";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";
import Notify from "../application/notification";







export const useGetTotalPayable = () => {
	const { state: { accessToken }} = UseContext()
	const { data , error, loading, mutate  } =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-total-payable?access_token=${accessToken}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0
	});
 
	return {   loading, tottalPayable: data?.data, error, mutate  };
};


export const useGetBanks = () => {
	const { data , error, loading, mutate } =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-banklist-and-bank-code`,
		notify: false,
		noToken: true
	});
 
	return {   loading, banks: data?.data?.Banks, error, mutate  };
};




export const useGetTransactions = () => {
	const { state: {  accessToken}} = UseContext()
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 10
	})
	const { data , error, loading, mutate , isValidating} =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-transactions-for-user?access_token=${accessToken}&pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0  
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
	return {   loading: loading && !CACHE?.data , transactions: CACHE?.data?.contents, error, mutate , isValidating , pageInfo, setPageInfo};
};

export const useGetTransactionsByEmail = (email) => {
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 10
	})
	const { data , error, loading, mutate , isValidating} =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-transactions-by-email/${email}?pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}`,
		notify: false,
		requiredVariable: email?.length > 0  
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
	return {   loading: loading && !CACHE?.data , transactions: CACHE?.data?.contents, error, mutate , isValidating , pageInfo, setPageInfo};
};

export const useGetTransactionsForAdmin = (extraFilterString) => {
	const { state: {  accessToken}} = UseContext()
	const [pageInfo, setPageInfo] = useState({
		page: 0,
		limit: 10
	})
	const { data , error, loading, mutate , isValidating,   responseCode} =   useGetCachedAxiosHandler({
		url: `${TRANSACTION_URL}/get-transactions-for-admin?access_token=${accessToken}&pageNo=${pageInfo.page }&pageSize=${pageInfo.limit}${extraFilterString ? extraFilterString : ""}`,
		notify: false,
		noToken: true,
		requiredVariable: accessToken?.length > 0  
	});
	const {CACHE} = useCACHE(data, isValidating, +responseCode === 25);
	useEffect(() => {
		if(data){
			setPageInfo(prev => ({
				...prev, 
				...data?.data?.pageable, 
				totalElements: data?.data?.totalElements,
				totalPages: data?.data?.totalPages,
			}))
		}
	}, [data]) 
	return {   loading: loading && !CACHE?.data , transactions:  CACHE?.data?.contents, error, mutate , isValidating , pageInfo, setPageInfo};
};




export const usePerformTransfer = ( destinationCountryId ) => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	const { state: {  accessToken}} = UseContext()
	
	const handlePerformTransfer = async (DATA) => {
		setLoading(true);
		const { data , error} = await postAxiosHandler({
			url: `${TRANSACTION_URL}/do-transfer?access_token=${accessToken}`,
			DATA: {destinationCountryId, ...DATA},
			notify: false,
			extraHeaders: { "Content-Type":  'multipart/form-data' }
		});
		setLoading(false);
		if (data) {
			return { data: data?.data };
		}
		if(error){
			Notify().error(  error );
		}
	};
	return { handlePerformTransfer, loading };
};




 


export const useTrackTransaction = () => {
	const [loading, setLoading] = useState("");
	const { getAxiosHandler } = useAxiosHandler();
	const { state: {  accessToken}} = UseContext()
	const [record, setRecord] = useState({})
	
	const handleTranckTransaction = async (transactionId) => {
		setLoading(transactionId);
		const { data, error } = await getAxiosHandler({
			url: `${TRANSACTION_URL}/track-transaction/${transactionId}?access_token=${accessToken}`,
			// notify: false,
			errorMessage: "The record was not found"
		});
		setLoading("");
		if (data) {
			setRecord( data?.data )
			return { data: data?.data }
		};
		if (error) {
			setRecord({})
			return { data: data?.data }
		};
	};
	return { handleTranckTransaction, loading, record };
};

export const useInitiateTransferWithAzupay = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	const { state: {  accessToken}} = UseContext()

	
	const handleInitiateTransfer = async (DATA) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${AZUPAY_URL}/initiate?access_token=${accessToken}`,
			DATA,
			notify: false,
		});
		setLoading(false);
		if (data) {
			return { data: data?.data }
		};
	};
	return { handleInitiateTransfer, loading };
};


export const useGetBacnkAccountInfo = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	const { state: {  accessToken}} = UseContext()

	const handleGetBankAccountInfo = async (transactionId) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${ZAI_URL}/get-account-info?access_token=${accessToken}&transactionId=${transactionId}`,
			notify: false,
		});
		setLoading(false);
		if (data) return { data };
	};
	return { handleGetBankAccountInfo, loading };
};

export const useGetPaymentIdWithMonova = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();
	const { state: {  accessToken}} = UseContext()

	const handleGetMonovaPaymentId = async (transactionId) => {
		setLoading(true);
		const { data } = await postAxiosHandler({
			url: `${MONOVA_URL}/get-pay-id?access_token=${accessToken}`,
			notify: false,
			DATA: {transactionId},
		});
		setLoading(false);
		if (data) return { data: data?.data };
	};
	return { handleGetMonovaPaymentId, loading };
};


export const useVerifyAccountNumber = () => {
	const [loading, setLoading] = useState(false);
	const { postAxiosHandler } = useAxiosHandler();

	const handleVerifyAccountNumber = async (DATA) => {
		setLoading(true);
		const { data , error} = await postAxiosHandler({
			url: `${TRANSACTION_URL}/verify-account-number`,
			notify:  false, 
			DATA,
		});
		setLoading(false);
		if(error){
			Notify().error(  "Invalid account" );
		}
		if (data) {
			return { data: data?.data }
		};
	};
	return { handleVerifyAccountNumber, loading  };
};


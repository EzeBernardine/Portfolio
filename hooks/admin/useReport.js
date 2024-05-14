





import { useState } from "react";
import { TRANSACTION_URL } from "../../constant/url";
import { useAxiosHandler } from "../useAxiosHandler";
import Notify from "../../application/notification";
import { downloadJSONAsCSV,   formatAMPM, formateDate } from "../../utils";


export const useDownLoadTrasactions = (  extraFilterString) => {
	const [loading, setLoading] = useState(false);
	const { getAxiosHandler } = useAxiosHandler();
 
 
	const handleDownloadTransactions = async () => {
		setLoading(true);
		const { data ,  error} = await getAxiosHandler({
			url: `${TRANSACTION_URL}/get-transactions-report${extraFilterString ? `?${extraFilterString}` : ""}`,
			notify: false,
		});
		setLoading(false);
		if (data) { 
			if(data?.data?.contents?.length > 0) {
				const formattedObj = data?.data?.contents?.map((content, id) => ({
					"S/No": id + 1,
					"Transaction Date": `${formateDate(content?.createdDate).date} ${formateDate(content?.createdDate).fullMonth}, ${formateDate(content?.createdDate).year} - ${formatAMPM(content?.createdDate)}`,
					"Senders Name": content?.fullName,
					"Beneficiary Name": content?.beneficiaryName,
					"Email": content?.username,
					"Sender's Address": content?.senderAddress,
					"Sender's Phone": content?.senderPhone,
					"DofB": content?.dob,
					"Recipient Type": content?.recipientType,
					"Identification Type": content?.identificationType,
					"Identification Number": content?.identificationNumber,
					"Total Paid": content?.transactionRateInfo?.totalPayable,
					"Fee": content?.transactionRateInfo?.fee,
					"Recipient Amount": content?.transactionRateInfo?.recipientAmount,
					"Rate": content?.transactionRateInfo?.destinationRate,
					"Destination Country": content?.transactionRateInfo?.destinationCountry?.countryName,
					"Transaction ID": content?.transactionId,
					"Bank Name": content?.bankName,
					"Account Number": content?.accountNumber,
					"Status": content?.status,
				}))

				downloadJSONAsCSV(formattedObj)
				Notify().success("Transactions downloaded successfully")
			}else{
				Notify().error("There are currently no transaction")
			}
			return { data: data?.data };
		}
		error && Notify().error("Something went wrong")
	};
	return { handleDownloadTransactions, loading };
};

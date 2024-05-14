import { useEffect,   } from "react";
import Constant from "../../constant";
import { UseContext } from "../../state/provider";
import { STORAGE } from "../../application/storage";


 


 




export const useClearBrowserSessionWhenTokeChanges  = (   ) => {
 
	const { state: { accessToken }} = UseContext();
 

	useEffect(() => {
		const cachedToken = STORAGE.GET(Constant.keys.cacheToken);
		if( !accessToken || !cachedToken) return;


		if(accessToken !== cachedToken){
			STORAGE.DELETE(Constant.keys.cacheToken);
			window.location  = window.location.href;
		}
	}, [accessToken,  ]); 
};

 
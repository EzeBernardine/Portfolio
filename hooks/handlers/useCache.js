import { useEffect, useState } from "react";
import { objIsEmpty } from "../../utils";





export const useCACHE = (data, isValidating, clear = false) => {
	const [CACHE, setCACHE] = useState({ });
	const [ready, setReady] = useState(false);
	useEffect(() => {
		if(ready && data && !objIsEmpty(data)){
			setCACHE(data);
		}
	}, [ isValidating, ready, data ]);


	useEffect(() => {
		setReady(true);
		if(ready && data && !objIsEmpty(data)){
			setCACHE(data);
		}
	}, [ready, data ]);

	useEffect(() => {
		if(clear){
			setCACHE([]);
		}
	}, [ clear ]);

	return { CACHE };
};


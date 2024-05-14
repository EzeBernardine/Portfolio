export const extractObjectValueFromNestedObject = (object, str) => {
	if (typeof str !== "string") return;
	str = str.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
	str = str.replace(/^\./, ""); // strip a leading dot
	let a = str.split(".");
	for (let i = 0, n = a.length; i < n; ++i) {
		let k = a[i];
		if (k in object) {
			object = object[k];
		} else {
			return;
		}
	}
	return object;
};

/**
 * Truncate
 * returns the truncated text with "..." or any spwecified ending character
 * @param {String} str
 * @param {Number} length
 * @param {String} ending
 * */
export const truncate = (str = "", length = 20, ending = "...") =>
	str.length > length
		? `${str.substring(0, length - ending.length)} ${ending}`
		: str;

export const timeDiffInSecs = (time1, time2) => {
	const t1 = new Date(time1);
	const t2 = new Date(time2);
	return t1.getTime() - t2.getTime();
};

export const isDefined = (item) =>
	!!(item && item !== "undefined" && item !== "null");

	export const formateDate = (date ) => {
		const DATE = new Date(date);
		const monthNames = {
			month_names: [
				"January", "February", "March", "April", "May",
				"June", "July", "August", "September", "October", "November", "December"
			],
			month_names_short: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun",
				"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			]
		};
		const days = ["Sun", "Mon", "Tue",  "Wed", "Thur", "Fri", "Sat", ];
		return {
			date: DATE.getDate(),
			fullMonth: monthNames.month_names[DATE.getMonth()],
			shortMonth: monthNames.month_names_short[DATE.getMonth()],
			year: DATE.getFullYear(),
			time: `${DATE.getHours()} : ${DATE.getMinutes()} : ${DATE.getSeconds()}`,
			day: days[DATE.getDay()  ]
		};
	};



	export function formatAMPM(_date) {
		const date = new Date(_date);
		let hours = date.getHours();
		let minutes = date.getMinutes() ;
		const ampm = hours >= 12 ? "pm" : "am";
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour "0" should be "12"
		minutes = minutes < 10 ? "0"+ minutes : minutes;
		const strTime = hours + ":" + minutes + " " + ampm;
		return strTime;
	}
	  
	

	

	

/**
 *
 * @param {Number} length
 * @returns array
 */
export const generateArray = (length) => Array.from({ length: length });




export const  removeEmptyValuesFromObj = (obj) => {
	if(typeof(obj) !== "object") return {}
	for (const key in obj) {
		if(typeof(obj[key]) === "boolean")   return obj;
		if (obj[key] === "" || obj[key].length === 0 ||  Object.keys(obj[key]).length === 0 ) {
			delete obj[key];
		}
	}
	return obj;
};


export const extractQueryString = (obj) => {
	const stringArr =  Object.keys(obj).map((each,idx) => {
		return  (`${each}=${Object.values(obj)[idx]}`) ;
	});
	return stringArr.length > 0 ? `${stringArr.join("&")}` : "";
};






export const handleSortArrOfObj = (arr, sortBy, state) => {
	if (arr?.length == 0) return [];
	arr?.sort((a, b) => {
		let firstSort = a[sortBy]?.toLowerCase(),
			secondSort = b[sortBy]?.toLowerCase();

		if (firstSort < secondSort) {
			return state ? -1 : 1;
		}
		if (firstSort > secondSort) {
			return state ? 1 : -1;
		}
		return 0;
	});
	return arr;
};

export const objIsEmpty = (obj) => {
	if (typeof obj !== "object") return true;
	return Object.keys(obj).length === 0;
};

export function capitalizeFirstLetter(string) {
	return string?.charAt?.(0)?.toUpperCase() + string?.slice?.(1);
}

export function stripSpecialCharacters(string) {
	return string.split(")").join("").split("(").join("").split("-").join("").split(" ").join("");
}

export function formatPhoneNumber(phoneNumberString) {
	const replacedString = ("" + phoneNumberString).replace(/\D/g, "");
	const match = replacedString.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		const intlCode = (match[1] ? "1 " : "");
		return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
	}
	return null;
}


export const naira = "₦" ;



/**
 * 
 * @param num number
 * @returns formatted number using commas at right places
 */
export function formatNumber(num) {
	if (num) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	return 0;
}




export const colorsRank = (score) =>  {
	return score >= 0 && score < 20 ?
		"Error.default"
		: (score >= 20 && score < 40 )  ?
			"Error.60"
			: (score >= 40 && score < 50) ?
				"Yellow.40"
				: (score === 50) ?
					"Yellow.40"
					: (score > 50 && score < 60) ?
						"Yellow.60"
						:  (score >= 60 && score < 80) ?
							"Yellow.default"
							:  (score >= 80 && score < 100 ) ?
								"Success.40"
								:  (score === 100  ) ?
									"Success.default"
									: "transparent.default";
};
export  const getYYYYMMDD = (date) => new Date(date).toISOString().split("T")[0];


/**
 * Take the difference between the dates and divide by milliseconds per day.
 * Round to nearest whole number to deal with DST.
 */
export  const dateDiff = (date1 , date2  ) =>{
	const differenceInTime = new Date(date2).getTime() - new Date(date1).getTime();
	return  differenceInTime / (1000 * 3600 * 24);
};

 


export function downloadJSONAsXLSX(ecxselFile) {
 
	const url = window.URL.createObjectURL(new Blob([ecxselFile]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `transaction-${Date.now()}.xlsx`);
    document.body.appendChild(link);
    link.click();
}





export function downloadJSONAsCSV(csvFile) {
	let csvData = jsonToCsv(csvFile); // Add .items.data
	// Create a CSV file and allow the user to download it
	let blob = new Blob([csvData], { type: 'text/csv' });
	let url = window.URL.createObjectURL(blob);
	let a = document.createElement('a');
	a.href = url;
	a.download = 'data.csv';
	document.body.appendChild(a);
	a.click();
}


function jsonToCsv(jsonData) {
    let csv = '';
    // Get the headers
    let headers = Object.keys(jsonData[0]);
    csv += headers.join(',') + '\n';
    // Add the data
    jsonData.forEach(function (row) {
        let data = headers.map(header => JSON.stringify(row[header])).join(','); // Add JSON.stringify statement
        csv += data + '\n';
    });
    return csv;
}
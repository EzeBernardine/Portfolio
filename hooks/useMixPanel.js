import mixpanel from "mixpanel-browser"




export const useMixPanel = () => {
	
	
	const TRACK_EVENT = ({eventName, action , status}) => {
		try{
			mixpanel.track(eventName , {
				action,
				status,
				platform: "WEB"
			})
		}catch(e){
			console.log(e, "mixpanel error")
		}

	}
	const IDENTIFY_USER = (userID) => {
		try{
			mixpanel.identify(userID)
		}catch(e){
			console.log(e, "mixpanel error")
		}

	}

	return  {TRACK_EVENT, IDENTIFY_USER}
}
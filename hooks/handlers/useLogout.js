import { useRouter } from "next/router";
import { STORAGE } from "../../application/storage";
import Constant from "../../constant";
import { UseContext } from "../../state/provider";



export const useLogOut = () => {
	const { push } = useRouter();
	const { setIsAuthenticated, setAccessToken, setIsAdmin,   setUser, state: { accessToken }} = UseContext();

	const handleLogOut = () => {
		accessToken && STORAGE.SAVE(Constant.keys.cacheToken, accessToken);

		push("/login");

		setIsAuthenticated(false);
		setAccessToken("");
		setIsAdmin(undefined)
		setUser({});
		STORAGE.DELETE(Constant.keys.access_token);
		STORAGE.DELETE(Constant.keys.refresh_token);
		STORAGE.DELETE(Constant.keys.user);
		
 
	};
	return { handleLogOut };
};

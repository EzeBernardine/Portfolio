import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { STORAGE } from "../../application/storage";
import { useValidateToken } from "../../application/validateToken";
import Constants from "../../constant";

import { isDefined, objIsEmpty } from "../../utils";
import { UseContext } from "../../state/provider";
import { ProtectedStyles } from "./styles";
import { useLogOut } from "../../hooks/handlers/useLogout";
import { useClearBrowserSessionWhenTokeChanges } from "../../hooks/handlers/useClearBrowserSession";
import { LogoLoading } from "../../components/Loader";
import { useMixPanel } from "../../hooks/useMixPanel";
 

export function ProtectedRoute({ children }) {
	useClearBrowserSessionWhenTokeChanges();
	const { tokenIsValid } = useValidateToken();
	const { isReady } = useRouter();
	const { handleLogOut } = useLogOut();
	const { IDENTIFY_USER} = useMixPanel();

	const {
		state: { accessToken,  loading, user, isAdmin}, setIsAuthenticated, setAccessToken, setLoading, setFreshToken, setUser, setIsAdmin } = UseContext();

	useEffect(() => {
		if(!isReady ) return;
		const _accessToken = STORAGE.GET(Constants.keys.access_token);
		const _refreshToken = STORAGE.GET(Constants.keys.refresh_token);
		const _user = STORAGE.GET(Constants.keys.user) && JSON.parse(STORAGE.GET(Constants.keys.user) );

		if (_accessToken && isDefined(_accessToken)) {
			if (_accessToken) {
				setAccessToken(_accessToken);
			}
			if (_refreshToken ) {
				setFreshToken(_refreshToken);
			}
			if (_user ) {
				setUser(_user);
				if(_user?.userRoles?.name === "ROLE_ADMIN" ) {
					setIsAdmin(true) 
				}else {
					IDENTIFY_USER(_user?.id)
					setIsAdmin(false)
				} 	
			}
		} else {
			handleLogOut();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady, tokenIsValid]);

	useEffect(() => {
		if (accessToken && !objIsEmpty(user)) {
			setIsAuthenticated(true);
			setLoading(false);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken, JSON.stringify(user)]);

	if (loading || isAdmin === undefined)
		return (
			<ProtectedStyles bgColor="common.white" direction="column">
				<LogoLoading />
			</ProtectedStyles>
		);

	return <>{children}</>;
}

export default ProtectedRoute;

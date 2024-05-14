// import React from "react";

import {   DashboardIcon, IDCardIcon,   SetRateIcon, TransactionIcon, TransactionRecordIcon, TransferIcon } from "../public/assets/svg";
import React from "react";


const Constants = {

	keys: {
		access_token: "at",
		refresh_token: "rt",
		cacheToken: "ct",
		user: "u",
		refreshTransfer: 'rt',

	},
	drawerItems: [
		{
			name: "Transfer", 
			href: "/transfer",
			icon: (active) => <TransferIcon colour={active ? "Blue.60" : "common.white"} height="30px" width="30px"/> 
		}, 
		{
			name: "Transaction History", 
			href: "/transactions",
			icon: (active) => <TransactionIcon colour={active ? "Blue.60" : "common.white"}  colour2={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		}, 
		{
			name: "Means of Identification", 
			href: "/mode-of-identification",
			action: "UPDATE_YOUR_IDENTIFICATION",
			icon: (active) => <IDCardIcon colour={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		}, 
	],
	admin_drawerItems: [
		{
			name: "Dashboard", 
			key: "dashboard",
			href: "/admin/dashboard",
			icon: (active) => <DashboardIcon colour={active ? "Blue.60" : "common.white"} height="30px" width="30px"/> 
		}, 
		{
			name: "Set Rate", 
			href: "/admin/set-rate",
			key: "set rate",
			icon: (active) => <SetRateIcon colour={active ? "Blue.60" : "common.white"}  colour2={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		}, 
		// {
		// 	name: "Referals", 
		// 	href: "/admin/referrals",
		// 	key: "referral wallet",
		// 	icon: (active) => <SetRateIcon colour={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		// }, 
		{
			name: "Manage Users", 
			href: "/admin/users",
			key: "manage users",
			icon: (active) => <TransactionIcon colour={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		}, 
		{
			name: "Transactions", 
			href: "/admin/transactions",
			key:  "transaction history",
			icon: (active) => <TransactionRecordIcon colour={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		}, 
		// {
		// 	name: "CMS", 
		// 	href: "/admin/cms",
		// 	key: "cms",
		// 	icon: (active) => <TransactionRecordIcon colour={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		// }, 
		{
			name: "Feedback", 
			href: "/admin/feedback",
			key: "feedback",
			icon: (active) => <TransactionRecordIcon colour={active ? "Blue.60" : "common.white"}  height="30px" width="30px"/> 
		}, 
	],
 
};

export default Constants;
import { Dashboard, History, ShoppingCart, User, Wallet } from "tabler-icons-react";

export const navbarObjects = [
	{
		title: "Dashboard",
		icon: <Dashboard/>,
		color: 'red',
		url: '/'
	},
	{
		title: "Tokens",
		icon: <Wallet/>,
		color: 'pink',
		url: '/tokens'
	},
	{
		title: "Customers",
		icon: <User/>,
		color: 'grape',
		url: '/customers'
	},
	{
		title: "Merchants",
		icon: <ShoppingCart/>,
		color: 'teal',
		url: '/merchants'
	},
	{
		title: "Transactions",
		icon: <History/>,
		color: 'green',
		url: '/transactions'
	},
]
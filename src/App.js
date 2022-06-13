import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/navigation/AppContainer/AppContainer";
import AuthPage from "./pages/AuthPage/AuthPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import MerchantsPage from "./pages/MerchantsPage/MerchantsPage";
import TokensPage from "./pages/TokensPage/TokensPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import { CURRENT_USER } from "./queries/currentUser";

export default function App() {

	const [user, setUser] = useState(undefined)
	const { loading, error, data } = useQuery(CURRENT_USER)

	useEffect(() => {
		if (data) setUser(data.currentUser)
	}, [loading, error, data])

	if (user === undefined) return <></>
	if (user === null) return <AuthPage/>

	const props = {
		user: user
	}

	return (
		<AppContainer {...props}>
			<Routes>
				<Route path="/" element={<DashboardPage/>}/>
				<Route path="/tokens" element={<TokensPage/>}/>
				<Route path="/customers" element={<CustomersPage/>}/>
				<Route path="/merchants" element={<MerchantsPage/>}/>
				<Route path="/transactions" element={<TransactionsPage/>}/>
			</Routes>
		</AppContainer>
	);
}
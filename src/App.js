import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/navigation/AppContainer/AppContainer";
import CustomersPage from "./pages/CustomersPage/CustomersPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import MerchantsPage from "./pages/MerchantsPage/MerchantsPage";
import TokensPage from "./pages/TokensPage/TokensPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";

export default function App() {
	return (
		<AppContainer>
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
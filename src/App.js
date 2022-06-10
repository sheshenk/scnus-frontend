import { Title } from "@mantine/core";
import AppContainer from "./components/navigation/AppContainer/AppContainer";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

export default function App() {
	return (
		<AppContainer>
			<DashboardPage/>
		</AppContainer>
	);
}
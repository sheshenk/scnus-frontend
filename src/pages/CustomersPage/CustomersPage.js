import { Stack, Title } from "@mantine/core";
import CustomerTable from "../../components/customers/CustomerTable/CustomerTable";

export default function CustomersPage() {
	return (
		<Stack p='xl'>
			<Title>Customers</Title>
			<CustomerTable/>
		</Stack>
	)
}
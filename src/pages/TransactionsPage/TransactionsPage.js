import { Stack, Title } from "@mantine/core";
import TransactionTable from "../../components/transactions/TransactionTable";

export default function TransactionsPage() {
	return (
		<Stack p='xl'>
			<Title>Transactions</Title>
			<TransactionTable />
		</Stack>
	)
}
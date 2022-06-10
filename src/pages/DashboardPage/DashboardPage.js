import { SimpleGrid, Stack, Title } from "@mantine/core";
import CustomerSummaryCard from "../../components/dashboard/CustomerSummaryCard/CustomerSummaryCard";
import MerchantSummaryCard from "../../components/dashboard/MerchantSummaryCard/MerchantSummaryCard";
import NFTSummaryCard from "../../components/dashboard/NFTSummaryCard/NFTSummaryCard";

export default function DashboardPage() {
	return (
		<Stack p='xl'>
			<Title>Dashboard</Title>
			<SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2}]}>
				<CustomerSummaryCard/>
				<MerchantSummaryCard/>
				<NFTSummaryCard/>
			</SimpleGrid>
		</Stack>
	)
}
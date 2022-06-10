import { useQuery } from "@apollo/client";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import CustomerSummaryCard from "../../components/dashboard/CustomerSummaryCard/CustomerSummaryCard";
import MerchantSummaryCard from "../../components/dashboard/MerchantSummaryCard/MerchantSummaryCard";
import NFTSummaryCard from "../../components/dashboard/NFTSummaryCard/NFTSummaryCard";
import { DASHBOARD_QUERY } from "../../queries/dashboard";

export default function DashboardPage() {

	const [dashboardData, setDashboardData] = useState({
		totalCustomers: 0,
		totalRedemptions: 0,
		totalMerchants: 0,
		totalDiscount: 0,
		getAllNFTs: []
	})

	const { loading, error, data } = useQuery(DASHBOARD_QUERY)

	useEffect(() => {
		if (data) setDashboardData(data)
	}, [loading, error, data])

	return (
		<Stack p='xl'>
			<Title>Dashboard</Title>
			<SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2}]}>
				<CustomerSummaryCard {...dashboardData}/>
				<MerchantSummaryCard {...dashboardData}/>
				<NFTSummaryCard {...dashboardData}/>
			</SimpleGrid>
		</Stack>
	)
}
import { Card, Stack, Text, Title } from "@mantine/core";

export default function CustomerSummaryCard({totalCustomers, totalRedemptions}) {
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>Customers</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Customers</Title>
					<Text size='xl'>{totalCustomers}</Text>
				</Stack>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Redemptions</Title>
					<Text size='xl'>{totalRedemptions}</Text>
				</Stack>
			</Stack>
		</Card>
	)
}
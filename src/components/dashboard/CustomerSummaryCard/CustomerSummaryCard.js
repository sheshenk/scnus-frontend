import { Card, Stack, Text, Title } from "@mantine/core";

export default function CustomerSummaryCard() {
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>Customers</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Customers</Title>
					<Text size='xl'>1,213</Text>
				</Stack>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Redemptions</Title>
					<Text size='xl'>283</Text>
				</Stack>
			</Stack>
		</Card>
	)
}
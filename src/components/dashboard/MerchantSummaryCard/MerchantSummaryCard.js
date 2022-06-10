import { Card, Stack, Text, Title } from "@mantine/core";

export default function MerchantSummaryCard() {
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>Merchants</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Merchants</Title>
					<Text size='xl'>16</Text>
				</Stack>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Discount Given</Title>
					<Text size='xl'>$12.55</Text>
				</Stack>
			</Stack>
		</Card>
	)
}
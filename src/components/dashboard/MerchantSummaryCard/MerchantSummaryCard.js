import { Card, Stack, Text, Title } from "@mantine/core";

export default function MerchantSummaryCard({totalMerchants, totalDiscount}) {
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>Merchants</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Merchants</Title>
					<Text size='xl'>{totalMerchants}</Text>
				</Stack>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Discount Given</Title>
					<Text size='xl'>S$ {totalDiscount}</Text>
				</Stack>
			</Stack>
		</Card>
	)
}
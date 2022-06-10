import { Avatar, Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";

export default function NFTSummaryCard() {
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>NFTs</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Number</Title>
					<Text size='xl'>6</Text>
				</Stack>
				<Stack spacing='lg'>
					<Title order={5} style={{color:'#666'}}>Top Performing</Title>
					<SimpleGrid cols={5}>
						<Avatar size='xl'>A</Avatar>
						<Avatar size='xl'>B</Avatar>
						<Avatar size='xl'>C</Avatar>
						<Avatar size='xl'>D</Avatar>
						<Avatar size='xl'>E</Avatar>
					</SimpleGrid>
				</Stack>
			</Stack>
		</Card>
	)
}
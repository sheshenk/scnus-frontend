import { Avatar, Card, Group, Stack, Text, Title, Tooltip } from "@mantine/core";

const nfts = [
	{
		name: "Mastercard",
		imageUrl: 'https://picsum.photos/200',
		description: 'NFT for Mastercard. Sample description.',
		numOwners: 10
	},
	{
		name: "Ethereum",
		imageUrl: 'https://picsum.photos/300',
		description: 'NFT for Ethereum. Sample description.',
		numOwners: 15
	},
	{
		name: "Fintech Lab",
		imageUrl: 'https://picsum.photos/400',
		description: 'NFT for Fintech Lab. Sample description.',
		numOwners: 9
	},
	{
		name: "Ripple",
		imageUrl: 'https://picsum.photos/500',
		description: 'NFT for Ripple. Sample description.',
		numOwners: 5
	},
]

export default function NFTSummaryCard() {
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>Tokens</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Number</Title>
					<Text size='xl'>6</Text>
				</Stack>
				<Stack spacing='lg'>
					<Title order={5} style={{color:'#666'}}>Top Performing</Title>
					<Group>
						{nfts.sort((a, b) => b.numOwners - a.numOwners).slice(0, 3).map(n => {
							return <Tooltip key={n.name} position="bottom" label={n.name}><Avatar src={n.imageUrl} size='xl' color='lime'/></Tooltip>
						})}
					</Group>
				</Stack>
			</Stack>
		</Card>
	)
}
import { Avatar, Card, Group, Stack, Text, Title, Tooltip } from "@mantine/core";

export default function NFTSummaryCard({getAllNFTs}) {
	const tokens = [...getAllNFTs]
	return (
		<Card withBorder shadow='sm' p='xl'>
			<Stack>
				<Title order={2}>Tokens</Title>
				<Stack spacing={0}>
					<Title order={5} style={{color:'#666'}}>Total Number</Title>
					<Text size='xl'>{tokens.length}</Text>
				</Stack>
				<Stack spacing='lg'>
					<Title order={5} style={{color:'#666'}}>Top Performing</Title>
					<Group>
						{tokens.sort((a, b) => b.numOwners - a.numOwners).slice(0, 3).map(n => {
							return <Tooltip key={n.name} position="bottom" label={n.name}><Avatar src={n.imageURL} size='xl' color='lime'/></Tooltip>
						})}
					</Group>
				</Stack>
			</Stack>
		</Card>
	)
}
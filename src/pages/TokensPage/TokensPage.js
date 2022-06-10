import { Button, Group, SegmentedControl, Space, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import TokenGrid from "../../components/tokens/TokenGrid/TokenGrid";

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

export default function TokensPage() {

	const [filteredNfts, setFilteredNfts] = useState(nfts)

	const handleFilterChange = (event) => {
		const currSearch = event.currentTarget.value.trim().toLowerCase()
		const newFiltered = nfts.filter(nft => nft.name.trim().toLowerCase().includes(currSearch))
		setFilteredNfts(newFiltered)
	}

	return (
		<Stack p='xl'>
			<Title>Tokens</Title>
			<Group>
				<TextInput size="md" variant='filled' placeholder="Search for token" onChange={handleFilterChange}/>
				<SegmentedControl data={[{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }]} size='md'/>
				<Button size="md" leftIcon={<Plus/>} pl='xs' pr='sm'>Add New</Button>
			</Group>
			<Space/>
			<TokenGrid nfts={filteredNfts}/>
		</Stack>
	)
}
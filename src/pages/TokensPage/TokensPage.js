import { Button, Group, SegmentedControl, Stack, TextInput, Title } from "@mantine/core";
import { Plus } from "tabler-icons-react";

export default function TokensPage() {
	return (
		<Stack p='xl'>
			<Title>Tokens</Title>
			<Group>
				<TextInput size="md" variant='filled' placeholder="Search for token"/>
				<SegmentedControl data={[{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }]} size='md'/>
				<Button size="md" leftIcon={<Plus/>} pl='xs' pr='sm'>Add New</Button>
			</Group>
			
		</Stack>
	)
}
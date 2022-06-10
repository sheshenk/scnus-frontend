import { ActionIcon, Burger, Group, Header, MediaQuery, Title } from "@mantine/core";

export default function AppHeader({setOpened}) {
	return (
		<MediaQuery largerThan='sm' styles={{display:'none'}}>
			<Header height={72} p='md'>
				<Group position="apart">
					<Title order={2}>ScaNUS</Title>
					<ActionIcon onClick={() => setOpened(opened => !opened)}>
						<Burger/>
					</ActionIcon>
				</Group>
			</Header>
		</MediaQuery>
	)
}
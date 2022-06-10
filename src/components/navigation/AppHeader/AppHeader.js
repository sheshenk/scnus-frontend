import { ActionIcon, Group, Header, MediaQuery, Title } from "@mantine/core";
import { Menu2 } from "tabler-icons-react";

export default function AppHeader({setOpened}) {
	return (
		<MediaQuery largerThan='sm' styles={{display:'none'}}>
			<Header height={72} p='md'>
				<Group position="apart">
					<Title order={2}>ScaNUS</Title>
					<ActionIcon onClick={() => setOpened(opened => !opened)}>
						<Menu2/>
					</ActionIcon>
				</Group>
			</Header>
		</MediaQuery>
	)
}
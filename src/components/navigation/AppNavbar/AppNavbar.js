import { Avatar, Group, MediaQuery, Navbar, Stack, Text, Title } from "@mantine/core";
import { navbarObjects } from "../../../utils/navbarObjects";
import AppNavbarButton from "../AppNavbarButton/AppNavbarButton";

export default function AppNavbar({user, hidden}) {
	return (
		<Navbar hiddenBreakpoint='sm' hidden={hidden} width={{base: 280}}>
			<MediaQuery smallerThan='sm' styles={{display:'none'}}>
				<Navbar.Section p='lg' style={{borderBottom: `1px solid #efefef`}}>
					<Title order={2}>ScaNUS</Title>
				</Navbar.Section>
			</MediaQuery>
			<Navbar.Section p='lg' style={{borderBottom: `1px solid #efefef`}}>
				<Group>
					<Avatar color='orange' size={40}>{user.name.charAt(0)}</Avatar>
					<div>
						<Text>{user.name}</Text>
						<Text size='xs' color='gray'>{user.phone}</Text>
					</div>
				</Group>
			</Navbar.Section>
			<Navbar.Section p='xs' grow>
				<Stack spacing={0}>
					{navbarObjects.map(o => <AppNavbarButton key={o.title} {...o}/>)}
				</Stack>
			</Navbar.Section>
			
		</Navbar>
	)
}
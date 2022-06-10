import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import './AppNavbarButton.css'

export default function AppNavbarButton({title, icon, color, url}) {
	const navigate = useNavigate()
	return (
		<UnstyledButton p='xs' className="app-navbar-button" onClick={() => navigate(url)}>
			<Group>
				<Avatar color={color} radius='sm'>
					{icon}
				</Avatar>
				<Text>{title}</Text>
			</Group>
		</UnstyledButton>
	)
}
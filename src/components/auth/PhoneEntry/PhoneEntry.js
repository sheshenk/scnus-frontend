import { Button, TextInput } from "@mantine/core"

function PhoneEntry({form, onClick}) {
	return (
		<>
			<TextInput placeholder="Phone Number" variant="filled" size="lg" {...form.getInputProps('phone')}/>
			<Button size="lg" onClick={onClick}>Continue</Button>
		</>
	)
}

export default PhoneEntry
import { Button, TextInput } from "@mantine/core"

function NameEntry({form, onClick}) {
	return (
		<>
			<TextInput placeholder="Your Full Name" variant="filled" size="lg" {...form.getInputProps('name')}/>
			<Button size="lg" onClick={onClick}>Continue to OTP</Button>
		</>
	)
}

export default NameEntry
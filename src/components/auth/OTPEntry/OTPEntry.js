import { Button, TextInput } from "@mantine/core"

function OTPEntry({form, onClick}) {
	return (
		<>
			<TextInput placeholder="6 Digit OTP" variant="filled" size="lg" {...form.getInputProps('otp')}/>
			<Button size="lg" onClick={onClick}>Log In</Button>
		</>
	)
}

export default OTPEntry
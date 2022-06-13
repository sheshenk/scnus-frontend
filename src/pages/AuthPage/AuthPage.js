import { useLazyQuery, useMutation } from "@apollo/client";
import { Alert, Button, Card, Center, NumberInput, Stack, Title } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useEffect, useState } from "react";
import NameEntry from "../../components/auth/NameEntry/NameEntry";
import OTPEntry from "../../components/auth/OTPEntry/OTPEntry";
import PhoneEntry from "../../components/auth/PhoneEntry/PhoneEntry";
import { CREATE_ADMIN, IS_ADMIN, LOGIN, UPDATE_ADMIN_OTP } from "../../queries/auth";
import { AUTH_TOKEN } from "../../utils/authToken";


function AuthPage() {

	const [stage, setStage] = useState(1)

	const form = useForm({
		initialValues: {
			phone: '',
			name: '',
			otp: ''
		}
	})

	const [updateAdminOTP] = useMutation(UPDATE_ADMIN_OTP, {
		variables: form.values,
		onCompleted: ({ updateAdminOTP }) => {
			if (updateAdminOTP.response) {
				alert(updateAdminOTP.response)
			}
		}
	})

	const [isAdmin, {data}] = useLazyQuery(IS_ADMIN, {
		onCompleted: ({ isAdmin }) => {
			if (isAdmin) {
				updateAdminOTP()
				setStage(3)
			}
			else setStage(2)
		}
	})

	const [login] = useMutation(LOGIN, {
		variables: form.values,
		onCompleted: ({ login }) => {
			if (login.response) {
				localStorage.setItem(AUTH_TOKEN, login.response)
				window.location.reload()
			} else {
				console.log(login.error)
			}
		}
	})

	const [createAdmin] = useMutation(CREATE_ADMIN, {
		variables: form.values,
		onCompleted: ({ createAdmin }) => {
			if (createAdmin.response) {
				updateAdminOTP()
				setStage(3)
			} else {

			}
		}
	})

	const handlePhoneSubmit = () => {
		isAdmin({variables: form.values})
	}

	const handleNameSubmit = () => {
		createAdmin()
	}

	const handleOTPSubmit = () => {
		login()
	}

	return ( 
		<Center style={{height:'100vh'}}>
			<Card style={{width:'90%', maxWidth: 500}} withBorder shadow='sm' p='xl'>
				<Stack p='xl' spacing='xl'>
					<Center><Title order={1}>ScaNUS Admin</Title></Center>
					{
						stage === 1 ? 
							<PhoneEntry onClick={handlePhoneSubmit} form={form}/> : 
							stage === 2 ? 
								<NameEntry onClick={handleNameSubmit} form={form}/> : 
								<OTPEntry onClick={handleOTPSubmit} form={form}/>
					}
				</Stack>
			</Card>
		</Center>
	)	
}

export default AuthPage;
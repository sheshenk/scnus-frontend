import { gql } from "@apollo/client";

export const IS_ADMIN = gql`
	query IsAdmin($phone: ID!) {
		isAdmin(phone: $phone)
	}
`

export const UPDATE_ADMIN_OTP = gql`
	mutation UpdateAdminOTP($phone: String!) {
		updateAdminOTP(phone: $phone) {
			error
			response
		}
	}
`

export const LOGIN = gql`
	mutation Login($phone: ID!, $otp: String!) {
		login(phone: $phone, otp: $otp) {
			response
			error
		}
	}
`

export const CREATE_ADMIN = gql`
	mutation CreateAdmin($name: String!, $phone: String!) {
		createAdmin(name: $name, phone: $phone) {
			response
			error
		}
	}
`
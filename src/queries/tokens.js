import { gql } from "@apollo/client";

export const CREATE_NEW_TOKEN = gql`
	mutation CreateToken($event: String!, $name: String!, $imageURL: String!, $description: String, $link: String) {
		createToken(event: $event, name: $name, imageURL: $imageURL, description: $description, link: $link) {
			response
			error
		}
	}
`

export const READ_TOKENS = gql`
	query ReadTokens {
		readTokens {
			_id
			name
			description
			imageURL
			link
		}
	}
`

export const UPDATE_TOKEN = gql`
	mutation UpdateToken($_id: String!, $name: String, $description: String, $imageURL: String, $link: String) {
		updateToken(_id: $_id, name: $name, description: $description, imageURL: $imageURL, link: $link) {
			response
			error
		}
	}
`

export const DELETE_TOKEN = gql`
	mutation DeleteToken($_id: ID!) {
		deleteToken(_id: $_id) {
			response
			error
		}
	}
`
import { gql } from "@apollo/client";

export const CREATE_NEW_TOKEN = gql`
	mutation CreateNFT($event: String!, $name: String!, $imageURL: String!, $description: String, $link: String) {
		createNFT(event: $event, name: $name, imageURL: $imageURL, description: $description, link: $link) {
			response
			error
		}
	}
`

export const GET_ALL_TOKENS = gql`
	query GetAllNFTs {
		getAllNFTs {
			_id
			name
			description
			imageURL
			link
		}
	}
`

export const UPDATE_TOKEN = gql`
	mutation UpdateNFTDetails($_id: String!, $name: String, $description: String, $imageURL: String, $link: String) {
		updateNFTDetails(_id: $_id, name: $name, description: $description, imageURL: $imageURL, link: $link) {
			response
			error
		}
	}
`

export const DELETE_TOKEN = gql`
	mutation DeleteNFT($_id: ID!) {
		deleteNFT(_id: $_id) {
			response
			error
		}
	}
`
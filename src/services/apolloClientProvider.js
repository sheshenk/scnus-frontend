import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { AUTH_TOKEN } from '../utils/authToken'

const loc_uri = "http://localhost:4000/graphql"
const uri = "https://scnus-server.herokuapp.com"

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem(AUTH_TOKEN)
	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`
		}
	}
})

const httpLink = new HttpLink({
	uri: uri
})

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

export default apolloClient
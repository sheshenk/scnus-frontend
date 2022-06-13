import { gql } from "@apollo/client";

export const READ_CUSTOMERS = gql`
	query ReadCustomers {
		readCustomers {
			name
			phone
			redemptionCount
			tokenCount
		}
	}
`
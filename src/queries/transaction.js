import { gql } from "@apollo/client";

export const READ_TRANSACTIONS = gql`
	query ReadRedemptions {
		readRedemptions {
			merchantId
			customerId
            amount
            discount
            time
		}
	}
`
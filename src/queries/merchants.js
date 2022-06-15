import { gql } from "@apollo/client";

export const READ_MERCHANTS = gql`
	query ReadMerchants {
		readMerchants {
			name
			phone
		}
	}
`
import { gql } from "@apollo/client";

export const DASHBOARD_QUERY = gql`
	query DashboardQuery {
		totalCustomers
		totalRedemptions
		totalMerchants
		totalDiscount
		getAllNFTs {
			name
			imageURL
			totalOwners
		}
	}
`
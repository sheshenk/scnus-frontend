import { Stack, Title } from "@mantine/core";
import MerchantTable from "../../components/merchants/MerchantTable";

export default function MerchantsPage() {
	return (
		<Stack p='xl'>
			<Title>Merchants</Title>
			<MerchantTable />
		</Stack>
	)
}
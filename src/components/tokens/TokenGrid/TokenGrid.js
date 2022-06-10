import { SimpleGrid } from "@mantine/core";
import TokenGridItem from "../TokenGridItem/TokenGridItem";

export default function TokenGrid({nfts}) {
	return (
		<SimpleGrid cols={5}>
			{nfts.map(nft => <TokenGridItem key={nft.name} nft={nft} onClick={() => console.log(nft.name)}/>)}
		</SimpleGrid>
	)
}
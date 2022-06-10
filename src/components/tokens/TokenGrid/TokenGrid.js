import { SimpleGrid } from "@mantine/core";
import TokenGridItem from "../TokenGridItem/TokenGridItem";

export default function TokenGrid({nfts, handleTokenClick}) {
	return (
		<SimpleGrid cols={5}>
			{nfts.map(nft => <TokenGridItem onClick={handleTokenClick(nft)} key={nft.name} nft={nft}/>)}
		</SimpleGrid>
	)
}
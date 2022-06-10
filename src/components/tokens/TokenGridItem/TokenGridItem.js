import { AspectRatio, Card, Tooltip } from "@mantine/core";

export default function TokenGridItem({nft, onClick}) {
	return (
		<Tooltip onClick={onClick} position='bottom' label={nft.name} style={{cursor:'pointer'}} >
			<Card p={0} radius='md' shadow='lg'>
				<AspectRatio ratio={1}>
					{nft.image}
				</AspectRatio>
			</Card>
		</Tooltip>
	)
}
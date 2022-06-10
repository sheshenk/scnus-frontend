import { AspectRatio, Card, Image, Tooltip } from "@mantine/core";

export default function TokenGridItem({nft, onClick}) {
	return (
		<Tooltip onClick={onClick} position='bottom' label={nft.name} style={{cursor:'pointer'}}>
			<Card p={0} radius='md'>
				<AspectRatio ratio={1}>
					<Image src={nft.imageUrl} style={{width:'100%'}} fit='cover'/>
				</AspectRatio>
			</Card>
		</Tooltip>
	)
}
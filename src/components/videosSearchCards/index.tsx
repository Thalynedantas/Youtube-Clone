import { Banner, ChannelContainer, ChannelImage, Container, DescriptionContainer, TextCard, TextContainer, Title, TitleContainer } from "./style"


interface Props {
    title: string,
    thumbnail: string,
    channelImage: string,
    ChannelName: string,
    details: string,
    description: string
}

function VideoCard(props: Props) {
    return (
        <Container>
            <Banner style={{backgroundImage: `url(${props.thumbnail})`}}></Banner>
            <TitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
                <ChannelContainer>
                    <ChannelImage>
                        {props.channelImage}
                    </ChannelImage>
                    <TextCard>{props.ChannelName}</TextCard>
                </ChannelContainer>
                <DescriptionContainer>
                    <TextCard>
                        {props.description}
                    </TextCard>
                </DescriptionContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoCard;
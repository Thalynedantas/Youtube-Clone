import { CardVideo, DetailShortVideo, ThumbnailShortVideo, TitleShortVideo } from "./card-short-video-style";


interface Props {
    title: string,
    thumbnail: string,
    details: string
}

function CardShortVideo(props: Props) {

    return (
        <CardVideo to={'/shorts'}>
            <ThumbnailShortVideo alt="Thumbnail" src={props.thumbnail} />
            <TitleShortVideo>{props.title}</TitleShortVideo>
            <DetailShortVideo>{props.details}</DetailShortVideo>
        </CardVideo>
    )
}

export default CardShortVideo;
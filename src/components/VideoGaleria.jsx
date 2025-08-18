
export const VideoGaleria = ({ src, alt }) => {
    return (
        <video
            controls
            autoPlay
            muted
            preload='none'
            loop
            playsInline
            src={src}
            alt={alt}
            className="w-full h-full object-cover aspect-square transition-transform duration-500 "
        />
    )
}

export default VideoGaleria

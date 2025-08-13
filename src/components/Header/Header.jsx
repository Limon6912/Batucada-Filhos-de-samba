


import { LogoConNombre } from './LogoConNombre.jsx'

const videos = {

    videoFondo: "/videos/headerFondoOpti.mp4"

}

export const Header = () => {
    return (
        <header className="w-full h-[75vh] min-h-64 overflow-hidden relative " >
            <div className='w-full h-full absolute  brightness-50 z-10 bg-neutral-950 opacity-40' />
            <LogoConNombre />
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[75vh] object-cover object-center blur-sm scale-110"
            >
                <source src={videos.videoFondo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </header>
    );
};

export default Header;

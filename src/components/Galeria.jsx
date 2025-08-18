import { VideoGaleria } from './VideoGaleria.jsx'
import { videos } from '../components/Imagenes.jsx'

export const Galeria = () => {
    return (
        <>
            {/* <div className='text-left w-full font-light text-2xl border-b-[1px] mb-2  border-[var(--color-azul)]'><samp className='text-[var(--color-azul)]'>Videos</samp></div> */}
            <div className="grid grid-cols-3 lg:grid-cols-4 grid-rows-2 md:grid-rows-2 gap-2 overflow-hidden w-full max-h-[800px] aspect-square  m-auto ">
                <div className="overflow-hidden sm:rounded-sm  rounded-r-sm  col-span-2">
                    <VideoGaleria src={videos.Corriendo} alt="Video de evento batucada filhos de samba" />

                </div>

                <div className="overflow-hidden sm:rounded-sm rounded-l-sm ">
                    <VideoGaleria src={videos.sanRoman} alt="Video de evento batucada filhos de samba" />

                </div>
                <div className="overflow-hidden sm:rounded-sm row-span-2 hidden lg:block">
                    <VideoGaleria src={videos.CantoF} alt="Video de evento batucada filhos de samba" />
                </div>
                <div className="overflow-hidden sm:rounded-sm   hidden lg:block">
                    <img
                        src={videos.quiensomos}
                        alt="Foto grupal de la batucada filhos de samba"
                        className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-110"
                    />
                </div>
                <div className="overflow-hidden sm:rounded-sm  col-span-3 lg:col-span-2 ">
                    <VideoGaleria src={videos.caballito} alt="Video de evento batucada filhos de samba" />

                </div>


            </div>
        </>
    )
}

export default Galeria

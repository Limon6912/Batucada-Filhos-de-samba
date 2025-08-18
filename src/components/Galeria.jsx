import { VideoGaleria } from './VideoGaleria.jsx'
import { imagenes, videos } from '../components/Imagenes.jsx'

export const Galeria = () => {
    return (
        <>
            {/* <div className='text-left w-full font-light text-2xl border-b-[1px] mb-2  border-[var(--color-azul)]'><samp className='text-[var(--color-azul)]'>Videos</samp></div> */}




            <div className="grid grid-cols-3 grid-rows-9 gap-4 max-h-[850px]">

                <div className="sm:rounded-sm overflow-hidden col-span-2 row-span-3 ">
                    <VideoGaleria src={videos.Corriendo} alt="Video de evento batucada filhos de samba" />
                </div>

                <div className="sm:rounded-sm overflow-hidden row-span-4 col-start-3">
                    <VideoGaleria src={videos.sanRoman} alt="Video de evento batucada filhos de samba" />
                </div>

                <div className="sm:rounded-sm overflow-hidden  col-span-2 row-span-3 row-start-4">
                    <VideoGaleria src={videos.caballito} alt="Video de evento batucada filhos de samba" />
                </div>

                <div className="sm:rounded-sm overflow-hidden  col-span-2 row-span-3 col-start-1 row-start-7" >
                    <VideoGaleria src={videos.trompeta} alt="Video de evento batucada filhos de samba" />
                </div>

                <div className="sm:rounded-sm overflow-hidden row-span-5 col-start-3 row-start-5">
                    <VideoGaleria src={videos.CantoF} alt="Video de evento batucada filhos de samba" />
                </div>

            </div>

            {/* <div className="grid grid-cols-3 grid-rows-6 gap-4 overflow-hidden w-full max-h-[800px]    ">
                <div className="overflow-hidden sm:rounded-sm  rounded-r-sm col-span-2 row-span-2">
                    <VideoGaleria src={videos.Corriendo} alt="Video de evento batucada filhos de samba" />
                </div>
                <div className="overflow-hidden sm:rounded-sm col-span-2 row-span-2 ">
                    <VideoGaleria src={videos.CantoF} alt="Video de evento batucada filhos de samba" />
                </div>
                <div className="overflow-hidden sm:rounded-sm row-span-3 col-start-3">
                    <VideoGaleria src={videos.sanRoman} alt="Video de evento batucada filhos de samba" />
                </div>
                <div className="overflow-hidden sm:rounded-sm  col-span-2 row-span-2 col-start-1 row-start-5">

                    <VideoGaleria src={videos.trompeta} alt="Video de evento batucada filhos de samba" />
                </div>
                <div className="overflow-hidden sm:rounded-sm row-span-3 col-start-3 row-start-4">
                    <VideoGaleria src={videos.caballito} alt="Video de evento batucada filhos de samba" />

                </div>


            </div> */}
        </>
    )
}

export default Galeria

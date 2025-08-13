
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { imagenes as imagenesCarrusel } from '../components/Imagenes.jsx'
const handleDragStart = (e) => e.preventDefault()

const items = [
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img1} className="w-full h-full object-cover" onDragStart={handleDragStart} alt="Imagen 1" />
        </div>
    </div>,
    // <div className="px-1">
    //     <div className="w-full h-50 rounded-sm overflow-hidden">
    //         <img src={img2} className="w-full h-full object-cover" onDragStart={handleDragStart} alt="Imagen 2" />
    //     </div>
    // </div>,
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img3} className="w-full h-full object-cover" onDragStart={handleDragStart} alt="Imagen 3" />
        </div>
    </div>,
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img4} className="w-full h-full object-cover" onDragStart={handleDragStart} alt="Imagen 3" />
        </div>
    </div>,
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img5} className="w-full h-full object-cover" onDragStart={handleDragStart} alt="Imagen 3" />
        </div>
    </div>
]

const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
}

export const Carrusel = () => {
    return (
        <div className='w-[95%] lg:w-full   mx-auto my-30 '>
            <AliceCarousel

                mouseTracking
                autoPlay
                infinite
                responsive={responsive}

                animationType="fade" // 
                animationDuration={3000}
                animationEasingFunction="ease"
                disableButtonsControls
                disableDotsControls
                items={items}

            />
        </div>

    )
}

export default Carrusel

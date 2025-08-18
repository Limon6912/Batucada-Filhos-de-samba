
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { imagenes as imagenesCarrusel } from '../components/Imagenes.jsx'
const handleDragStart = (e) => e.preventDefault()

const items = [
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img1} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onDragStart={handleDragStart} alt="Imagen grupal batucada filhos de samba" />
        </div>
    </div>,

    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img3} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onDragStart={handleDragStart} alt="Imagen grupal batucada filhos de samba" />
        </div>
    </div>,
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img4} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onDragStart={handleDragStart} alt="Imagen grupal batucada filhos de samba" />
        </div>
    </div>,
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img5} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onDragStart={handleDragStart} alt="Imagen grupal batucada filhos de samba" />
        </div>
    </div>,
    <div className="px-1">
        <div className="w-full h-50 rounded-sm overflow-hidden">
            <img src={imagenesCarrusel.img9} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onDragStart={handleDragStart} alt="Imagen grupal batucada filhos de samba" />
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

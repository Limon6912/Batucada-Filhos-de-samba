import { imagenes } from '../components/Imagenes.jsx'

export const Logan = () => {
    return (
        <div className='flex relative justify-center items-end h-[700px] w-[95%] lg:w-full mx-auto my-30 '>
            <div className='absolute flex flex-row justify-between w-full gap-6 top-0'>
                <div className='h-125 sm:w-full max-w-[80%] overflow-hidden hidden rounded-sm sm:block  '>
                    <img src={imagenes.img7} alt="imagen de zanquero " className='w-full h-full object-cover scale-130 hover:scale-140 transition-transform duration-500' />
                </div>
                <div className='h-100 w-full overflow-hidden'>
                    <img src={imagenes.zanqueroL} alt="" className='w-full h-full object-cover rounded-sm transition-transform duration-500 hover:scale-110 ' />
                </div>
            </div>

            <div className='bg-gray-200 absolute px-8 py-20  text-[--color-texto] rounded-xl sm:rounded-md max-w-[500px] text-center flex justify-center'>
                <div>
                    <h2 className='text-4xl pb-8 font-medium'>¡llevamos la alegria hasta tu <samp className='text-[var(--color-azul)]'>evento</samp>!</h2>
                    <p className='text-lg mb-8'>Con experiencia y dedicación, garantizamos el mejor ambiente para tus eventos sociales y culturales.</p>

                    <a href="logan" className='text-[var(--color-amarillo)]'>¡Reserva tu evento!</a>
                </div>

                <div className='w-25 h-25 z-50 top-[-50px] absolute rounded-full overflow-hidden  animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-linear'>
                    <img src={imagenes.bufon} alt="" className='w-full h-full object-cover ' />
                </div>
            </div>
        </div>

    )
}

export default Logan

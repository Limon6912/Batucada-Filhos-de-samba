
import { imagenes } from '../Imagenes.jsx'
export const LogoConNombre = () => {
    return (

        <div className='w-full h-full absolute flex flex-col justify-center items-center z-60 text-neutral-50'>
            <div className='  font-light flex flex-col md:flex-row items-center  max-w-[80%] justify-center text-center'  >
                <div className='w-50 rounded-full overflow-hidden aspect-square '>
                    <img src={imagenes.silueta} alt="Logo Batucada Filhos de samba " className='w-full h-full object-cover ' />
                </div>
                <div className='md:text-left md:border-l-1 md:pl-5 flex flex-col justify-center '>
                    <h2 className='text-amber-300 text-5xl '>BATUCADA</h2>
                    <h1 className='md:text-6xl text-4xl'> FILHOS DE SAMBA </h1>
                </div>


            </div>
        </div>
    )
}

export default LogoConNombre

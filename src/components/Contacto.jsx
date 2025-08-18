import { videos, imagenes } from '../components/Imagenes.jsx'

export const Contacto = () => {
    return (
        <div className="bg-gray-200  lg:p-15 md:p-10 p-5 flex gap-5     rounded-sm justify-center items-center overflow-hidden max-h-[800px] ">
            <div className="flex flex-col     sm:px-10 ">
                <h2 className="text-3xl text-center w-full my-10 leading-[1.5]">Contáctanos para llenar tus eventos de  <samp className="text-[var(--color-amarillo)]"> alegría, <span className="text-[var(--color-verde)]">diversión</span> <samp className="text-[var(--color-azul)]">y energía.</samp>   </samp> </h2>
                <form className=" flex flex-col w-full  mx-auto ">
                    <div className='overflow-hidden rounded-sm w-full mb-2'>
                        <input type="email" name="" id="" className="bg-neutral-100 p-3  w-full outline-none " placeholder="Tucorreo@gmail.com" />
                    </div>
                    <div className='overflow-hidden rounded-sm w-full mb-2'>
                        <textarea name="" id="" rows="8" className=" bg-neutral-100 p-3 resize-none outline-none rounded-sm w-full" placeholder="Me puede dar los presupuestos de los paquetes..."></textarea>
                    </div>

                </form>
            </div>
            <div className="hidden lg:block   h-full  w-2/3   lg:scale-100 overflow-hidden ">
                <div className="grid grid-flow-col grid-rows-3 gap-2 max-h-[450px]">
                    <div className="row-span-3 rounded-sm overflow-hidden ">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline src={videos.zanqueroDos} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-120"
                        />
                    </div>
                    <div className="col-span-2 rounded-sm overflow-hidden  ">
                        <img src={imagenes.img1} alt="" className=" hover:scale-110 w-full h-full object-cover transition-transform duration-500 " />
                        {/* <img src={imagenes.img3} alt="foto grupal de la batucada" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" /> */}
                    </div>
                    <div className="  col-span-2 row-span-2 rounded-sm  bg-gray-600 overflow-hidden">

                        <video
                            autoPlay
                            muted
                            loop
                            playsInline src={videos.bailarina} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-120"
                        />
                    </div>

                </div>
            </div>


        </div >

    )
}

export default Contacto

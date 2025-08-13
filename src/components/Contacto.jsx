

export const Contacto = () => {
    return (
        <div className="bg-gray-200 w-full p-10 flex gap-5  rounded-sm justify-center items-center overflow-hidden  ">
            <div className="flex flex-col sm:sw-1/2 sm:max-w-1/2  px-2 sm:px-10">
                <h2 className="text-3xl text-center w-full my-10 leading-[1.5]">Contáctanos para llenar tus eventos de  <samp className="text-[var(--color-amarillo)]"> alegría, <span className="text-[var(--color-verde)]">diversión</span> <samp className="text-[var(--color-azul)]">y energía.</samp>   </samp> </h2>
                <form className=" flex flex-col w-full  mx-auto ">
                    <input type="email" name="" id="" className="bg-neutral-100 p-3 mb-2" placeholder="ejemplo@gmail.com" />
                    <textarea name="" id="" rows="8" className=" bg-neutral-100 p-3 resize-none"></textarea>
                </form>
            </div>
            <div className="hidden sm:block  w-1/2">
                <div className="rounded-sm w-full overflow-hidden  max-h-[500px] grid grid-flow-col grid-rows-3 gap-2">
                    <div className="row-span-3 rounded-sm overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline src="/videos/cantoFOpc.mp4" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-2 rounded-sm overflow-hidden ">
                        <img src="/img/carrousel/Ca1.jpeg" alt="foto grupal de la batucada" className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-2 row-span-2 rounded-sm overflow-hidden bg-neutral-950">
                        <img src="/img/carrousel/Ca2.png" alt="" className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>


        </div >

    )
}

export default Contacto

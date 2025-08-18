import { imagenes } from './Imagenes.jsx'

export const Footer = () => {
    return (
        <footer className="  bg-neutral-950 ">
            <section className="w-full  max-w-[1200px] m-auto flex justify-center sm:items-start  gap-8 sm:justify-between flex-col md:flex-row items-center py-20 list-none px-5">
                <div className=" mb-3 w-full text-center sm:text-left  ">
                    <h3 className="mb-3 text-3xl font-bold w-full text-center">Contacto</h3>
                    <div className='flex  items-center  flex-col'>
                        <div className=' flex  justify-center items-center'>
                            <img src={imagenes.silueta} alt="" className='w-[200px]' />
                        </div>
                        <div>

                            <ol className='text-center '>

                                <li className='mb-2'><span className='font-bold '>Correo:</span> desambafilhos@gmail.com</li>
                                <li className='mb-2'><span className='font-bold'>Whatsapp:</span> 271 173 97 68</li>
                                <li className='mb-2'><span className='font-bold'>Facebook:</span> Batucada Filhos De Samba</li>
                                <li className='mb-2'><span className='font-bold'>Instagram:</span> Batucada_FDS</li>
                            </ol>
                        </div>

                    </div>



                </div>

                <div className="mb-3 w-full flex flex-col justify-center items-center max-w-[400px]">
                    <h3 className="mb-3 text-3xl font-bold">Ubicacion</h3>
                    <div className="rounded-sm h-[350px] overflow-hidden flex justify-center items-center w-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d943.561297677029!2d-96.96412473037633!3d18.92053826753473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU1JzEzLjkiTiA5NsKwNTcnNDguNSJX!5e0!3m2!1ses-419!2smx!4v1755503692730!5m2!1ses-419!2smx" className="h-full w-full" loading="lazy"></iframe>
                    </div>

                </div>

            </section>
        </footer >
    )
}

export default Footer

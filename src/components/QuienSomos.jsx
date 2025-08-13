import { Galeria } from './Galeria.jsx'
export const QuienSomos = () => {

    return (
        <section className='flex flex-col items-center justify-center mb-30  text-[var(--color-texto)] '>


            <Galeria />


            <div className='flex flex-col justify-center p-5 mt-30 tracking-wide font-light text-center  flex-1 max-w-[1000px]'>
                <h2 className='sm:text-6xl text-4xl text-[var(--color-verde)] pb-4  font-medium'><samp className='text-[var(--color-amarillo)]'>¿Quiénes somos </samp>y por qué estamos aquí? </h2>
                <p className='text-lg  leading-[1.8] text-[var(--color-texto)]'>Somos una batucada apasionada por la música, el ritmo y la alegría. Nos dedicamos a llevar energía y diversión a todo tipo de eventos: XV años, bodas, desfiles, fiestas privadas, celebraciones corporativas y más.
                    Nuestro objetivo es simple: hacer que la gente baile, sonría y viva un momento inolvidable.
                    Con tambores, percusiones y mucho carisma, transformamos cualquier ocasión en una experiencia llena de ritmo y buena vibra.</p>
            </div>


        </section>
    )
}

export default QuienSomos

import { Header } from '../components/Header/Header.jsx'
import { QuienSomos } from '../components/QuienSomos.jsx'
import { Carrusel } from '../components/Carrusel.jsx'
import { Logan } from '../components/Logan.jsx'
import { Card } from '../components/Card.jsx'
import { Footer } from '../components/Footer.jsx'
import { Contacto } from '../components/Contacto.jsx'



export const Inicio = () => {

    return (
        <>
      

            <Header />
            <main className='w-[100%] max-w-[1200px] text-neutral-900 mx-auto my-10  '>

                <Logan />
                <Card />
                <QuienSomos />
                <Carrusel />
                <Contacto />






            </main >
            <Footer />
        </>
    );
};

export default Inicio;

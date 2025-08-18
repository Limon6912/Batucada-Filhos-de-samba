
export const Footer = () => {
    return (
        <footer className="  bg-neutral-950 ">
            <section className="w-full  max-w-[1000px] m-auto flex justify-between flex-col sm:flex-row items-center py-20 list-none">
                <div className="p-3">
                    <h3>Contacto</h3>
                    <ol>

                        <li>Correo: ejemplo@gmail.com</li>
                        <li>Whatsapp: 271-200-12-12</li>
                        <li>Facebook: Batucada FDS</li>
                        <li>Instagram: Batucada FDS</li>
                    </ol>
                </div>
                <div>
                    <h3>Ubicacion</h3>
                    <iframe
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30199.36107992946!2d-96.95843543078357!3d18.890623915648657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e569b6d0c511%3A0x56c678cd7e7c621e!2sParque%2021%20de%20Mayo!5e0!3m2!1ses!2smx!4v1755464753782!5m2!1ses!2smx"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div>
                    <h3>Ubicacion</h3>
                </div>
            </section>
        </footer>
    )
}

export default Footer

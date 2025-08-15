import { paquetes } from './Paquetes.jsx';

export const Card = () => {
    return (
        <div className="flex flex-col md:flex-row text-center w-full gap-3 my-30 mx-auto">
            {paquetes.map((paquete) => (
                <div key={paquete.id} className="rounded-b-sm bg-gray-200 flex-1 rounded-sm">
                    {/* <div className="w-full overflow-hidden rounded-sm">
            <img src={paquete.urlImg} alt={paquete.titulo} className="w-full h-full object-cover" />
          </div> */}
                    <div className="p-6">
                        <div className="font-medium text-xl">{paquete.titulo}</div>
                        <ol className="font-light text-md">
                            {paquete.description.map((linea, idx) => (
                                <li key={idx}>{linea}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

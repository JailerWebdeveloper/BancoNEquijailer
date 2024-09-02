import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";

const TransferirDinero = () => {
    const [Numero, setNumero] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [banco, setBanco] = useState('');
    const [transferenciaExitosa, setTransferenciaExitosa] = useState(false);

    const handleNumeroChange = (e) => {
        setNumero(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleBancoChange = (e) => {
        setBanco(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se podría realizar la lógica para la transferencia, como una solicitud a una API.
        setTransferenciaExitosa(true);
    };

    return (
        <main className="w-full min-h-screen bg-white relative">
            <div className="absolute top-0 h-[15rem] bg-[#200020] left-0 w-full z-0"></div>
            <nav className="w-full p-4 flex justify-between items-center text-white relative z-10">
                <a href="/Home" className="text-white flex items-center">
                    <AiOutlineArrowLeft className="mr-2" /> Atrás
                </a>
                <img src="logo.png" alt="icono" className="h-8" />
            </nav>

            <div className="relative p-6 mt-12 bg-white shadow-md rounded-lg w-11/12 mx-auto max-w-md z-10">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Transferir Dinero</h1>
                {!transferenciaExitosa ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="cedula" className="text-gray-700 mb-2">Numero del destinatario:</label>
                            <input
                                type="number"
                                id="Numero"
                                value={Numero}
                                onChange={handleNumeroChange}
                                className="border border-gray-300 p-3 rounded-md"
                                placeholder="Ingresa el Numero"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="cantidad" className="text-gray-700 mb-2">Cantidad a transferir:</label>
                            <input
                                type="number"
                                id="cantidad"
                                value={cantidad}
                                onChange={handleCantidadChange}
                                className="border border-gray-300 p-3 rounded-md"
                                placeholder="Ingresa la cantidad"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="banco" className="text-gray-700 mb-2">Banco del destinatario:</label>
                            <select
                                id="banco"
                                value={banco}
                                onChange={handleBancoChange}
                                className="border border-gray-300 p-3 rounded-md"
                                required
                            >
                                <option value="" disabled>Selecciona un banco</option>
                                <option value="bancolombia">Bancolombia</option>
                                <option value="davivienda">Davivienda</option>
                                <option value="bbva">BBVA</option>
                                <option value="colpatria">Colpatria</option>
                                <option value="bogota">Banco de Bogotá</option>
                            </select>
                        </div>

                        <button type="submit" className="bg-[#da0081] text-white py-2 rounded-md mt-4">Transferir</button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">Transferencia Exitosa</h2>
                        <p className="mt-4 text-lg">Has transferido <span className="font-bold">${cantidad}</span> a la cédula <span className="font-bold">{cedula}</span> en el banco <span className="font-bold">{banco}</span>.</p>
                        <button
                            className="bg-[#200020] text-white py-2 px-4 rounded-md mt-6"
                            onClick={() => setTransferenciaExitosa(false)}
                        >
                            Realizar otra transferencia
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default TransferirDinero;

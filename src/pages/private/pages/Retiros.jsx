import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";

const RetirarDinero = () => {
    const [medio, setMedio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [montoRetirado, setMontoRetirado] = useState(null);

    const handleMedioChange = (e) => {
        setMedio(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMontoRetirado(cantidad);
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
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Retirar Dinero</h1>
                {!montoRetirado ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="medio" className="text-gray-700 mb-2">Selecciona el medio:</label>
                            <select
                                id="medio"
                                value={medio}
                                onChange={handleMedioChange}
                                className="border border-gray-300 p-3 rounded-md"
                                required
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="banco">Cajero</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="cantidad" className="text-gray-700 mb-2">Cantidad a retirar:</label>
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

                        <button type="submit" className="bg-[#da0081] text-white py-2 rounded-md mt-4">Retirar</button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800">Retiro Exitoso</h2>
                        <p className="mt-4 text-lg">Has retirado: <span className="font-bold">${montoRetirado}</span></p>
                        <button
                            className="bg-[#200020] text-white py-2 px-4 rounded-md mt-6"
                            onClick={() => setMontoRetirado(null)}
                        >
                            Retirar más
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default RetirarDinero;

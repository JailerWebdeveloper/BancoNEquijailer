import React, { useState, useEffect } from 'react';
import { AiOutlineQuestion } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import Menu from "../shared/menu";
import {jwtDecode} from 'jwt-decode'; // Importar jwt-decode
import axios from 'axios'; // Importar Axios

const Home = () => {
    const [userName, setUserName] = useState('');
    const [numeroCuenta, setNumeroCuenta] = useState('');
    const [saldo, setSaldo] = useState(null);

    useEffect(() => {
        // Obtener el token del localStorage
        const token = localStorage.getItem('authToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserName(decodedToken.nombre + " " + decodedToken.apellido); // Guardar nombre completo
            setNumeroCuenta(decodedToken.numero_de_cuenta); // Guardar número de cuenta
            
            // Hacer la solicitud GET para obtener el saldo
            obtenerSaldo(decodedToken.numero_de_cuenta);
        }
    }, []);

    const obtenerSaldo = async (numeroCuenta) => {
        try {
            const response = await axios.get(`https://upc-codex.tech:5600/API/V2/actualizarfondos/${numeroCuenta}`);
            if (response.status === 200) {
                setSaldo(response.data.saldo); // Guardar el saldo en el estado
            } else {
                console.error("Error al obtener el saldo:", response.data);
            }
        } catch (error) {
            console.error("Error al hacer la solicitud de saldo:", error);
        }
    };

    const handleLogout = () => {
        // Eliminar el token del localStorage
        localStorage.removeItem('authToken');
        navigate('/');
    };


    return (
        <>
            <main className="w-full min-h-screen bg-white relative ">
                <div className=" min-h-screen  w-full  flex flex-col">
                    <div className=" w-full flex flex-col px-5 py-7 bg-[#200020]  ">
                        <nav className="w-full p-2  flex justify-between items-center">
                            <div
                                className="p-1 btn bg-white font-semibold bg-opacity-30 btn-ghost rounded-lg flex items-center gap-4 justify-center"
                            >
                                <FaRegUser className="size-6 text-white" />
                                <p className="text-start leading-4">Hola.<br />{userName}</p>
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <IoMdNotificationsOutline className="text-white font-bold size-6" />
                                <AiOutlineQuestion className="size-6 text-white font-bold" />
                                <a href="/" onClick={handleLogout} className="hover:cursor-pointer text-white duration-200 hover:text-yellow-400 transition-all">
                                    <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                    </svg>
                                </a>
                            </div>
                        </nav>

                        <div className="w-full flex justify-center flex-col items-center gap-2">
                            <p>Disponible</p>
                            <p className="text-4xl font-semibold text-white">
                                {saldo !== null ? `$${saldo.toLocaleString('es-CO')},00` : 'Cargando...'}
                            </p>
                            <p>Total:${saldo}</p>
                            <button className="btn btn-outline btn-sm">Tu plata</button>
                        </div>
                    </div>

                    <section className="w-full flex mt-8 text-black px-5 flex-col">
                        <h2 className="font- text-xl self-start ml-3 mb-3 flex justify-center items-center gap-2">
                            Tus favoritos <CiHeart />
                        </h2>
                        <div className="grid grid-cols-3 gap-4 w-full place-content-center mt-8">
                            <a href="/Transferencia" className="flex flex-col text-center  w-full items-center justify-center gap-2">
                                <FaMoneyBillTransfer className="size-12 rotate-90" />
                                <p>Transferencia</p>
                            </a>
                            <a className="flex flex-col text-center  w-full items-center justify-center gap-2">
                                <BsFillCreditCard2FrontFill className="size-12 rotate-90" />
                                <p>Consultar tarjeta</p>
                            </a>
                            <a href="/Retiro" className="flex flex-col text-center  w-full items-center justify-center gap-2">
                                <TbPigMoney className="size-12" />
                                <p>Retiros</p>
                            </a>
                        </div>
                    </section>

                    <Menu />
                </div>
            </main>
        </>
    );
};

export default Home;

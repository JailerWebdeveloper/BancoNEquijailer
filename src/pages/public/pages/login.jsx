import React, { useState } from 'react';
import { AiOutlineQuestion } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";

const Login = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showPhoneInput, setShowPhoneInput] = useState(false);

    const handleDynamicKeyClick = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const handleEnterClick = () => {
        setShowPhoneInput(true);
    };

    return (
        <>
            <main className="w-full min-h-screen relative">
                <div className="bg-[#200020] p-4 min-h-screen justify-between w-full pb-8 flex flex-col">
                    <nav className="w-full p-2 flex justify-between items-center">
                        <AiOutlineQuestion className="size-6 text-white font-bold" />
                        <div
                            className="p-1 btn bg-white bg-opacity-30 btn-ghost rounded-lg flex items-center gap-4 justify-center"
                            onClick={handleDynamicKeyClick}
                        >
                            <AiOutlineLoading3Quarters className="text-white size-6 " />
                            <p className="text-white  leading-tight text-center">Clave<br /> Dinamica</p>
                            <p className="text-white font-bold text-xl">629955</p>
                            <IoCopyOutline className="text-white font-bold size-6 " />
                        </div>
                    </nav>

                    {/* alerta */}
                    {showAlert && (
                        <div
                            role="alert"
                            className="alert alert-success absolute top-5 flex justify-center items-center gap-4 text-white font-semibold inset-x-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Haz copiado tu clave dinamica</span>
                        </div>
                    )}

                    <section className="flex justify-center items-center ">
                        <img src="logo.png" alt="NEQUI" className="w-[16rem]" />
                    </section>

                    <section className="flex flex-col w-full justify-center items-center gap-4">
                        {!showPhoneInput ? (
                            <>
                                <a href='/Registro'
                                    className="btn btn-wide bg-[#da0081] text-center text-white rounded-md"
                                >
                                    Crea tu Nequi
                                </a>
                                <button
                                    className="btn btn-wide btn-outline text-white text-center rounded-md"
                                    onClick={handleEnterClick}
                                >
                                    Entra
                                </button>
                            </>
                        ) : (
                            <>
                               
                                    <div class="relative mt-2 w-11/12 text-gray-500">
                                        <div class="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            <p class="text-sm outline-none rounded-lg h-full">
                                                +57
                                            </p>
                                        </div>
                                        <input type="number" placeholder="Ingresa tu Telefono" class="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"/>
                                    </div>
                                <a  href='/Home'
                                    className="btn w-11/12  bg-[#da0081] text-white text-center rounded-md"
                                >
                                    Entra
                                </a>
                            </>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
}

export default Login;

import React, { useState } from 'react';
import { AiOutlineQuestion, AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { PiPasswordBold } from "react-icons/pi";
import axios from 'axios';

const Login = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDynamicKeyClick = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const handleEnterClick = () => {
        setShowPhoneInput(true);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            // Hacer la solicitud POST al endpoint de login
            const response = await axios.post('https://upc-codex.tech:5600/API/V2/login/nequi', {
                telefono: telefono,
                contrasena: contrasena
            });

            // Manejar la respuesta si es exitosa
            if (response.status === 200) {
                const token = response.data.token; // Suponiendo que se devuelve un token
                console.log("Login exitoso, token recibido:", token);

                // Guardar el token en localStorage
                localStorage.setItem('authToken', token);

                // Redirigir al usuario a la página principal
                window.location.href = '/Home';
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            setErrorMessage('Error de autenticación. Verifica tu teléfono o contraseña.');
        }
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
                            <p className="text-white leading-tight text-center">Clave<br /> Dinamica</p>
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
                                {/* Formulario de Login */}
                                <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-4">
                                    <div className="relative mt-2 w-11/12 text-gray-500">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            <p className="text-sm outline-none rounded-lg h-full">
                                                +57
                                            </p>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder="Ingresa tu Telefono"
                                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="relative mt-2 w-11/12 text-gray-500">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            <PiPasswordBold />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Ingresa tu contraseña"
                                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                                            value={contrasena}
                                            onChange={(e) => setContrasena(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Mostrar mensaje de error si falla la autenticación */}
                                    {errorMessage && (
                                        <p className="text-red-500 text-sm">{errorMessage}</p>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn w-11/12 bg-[#da0081] text-white text-center rounded-md"
                                    >
                                        Entra
                                    </button>
                                </form>
                            </>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Login;

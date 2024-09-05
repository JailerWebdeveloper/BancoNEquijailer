import React, { useState } from 'react';
import { AiOutlineQuestion } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
import axios from 'axios'; // Importar Axios
import {jwtDecode} from 'jwt-decode'; // Importar JWT Decode

const Registro = () => {
    const [formData, setFormData] = useState({
        cedula: '',
        nombre: '',
        apellido: '',
        contrasena: '',
        telefono: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            cedula: parseInt(formData.cedula),
            nombre: formData.nombre,
            apellido: formData.apellido,
            usuario: formData.nombre+formData.apellido,
            contrasena:formData.contrasena,
            numerotelefono:formData.telefono
        }

        console.log(data)
        try {
            // Hacer la solicitud POST al endpoint
            const response = await axios.post('https://upc-codex.tech:5600/API/V2/Usuario/nequi/Registro', data);
            console.log(response.status)
            console.log(response.data)

            if (response.status === 200 || response.status === 201) {
                const token = response.data.token; // Suponiendo que se devuelve un token
                console.log("Registro exitoso, token recibido:", token);

                // Si hay un token en la respuesta, podrías decodificarlo si es necesario
                const decodedToken = jwtDecode(token);
                console.log("Token decodificado:", decodedToken);

                // Guardar el token en el localStorage si es necesario
                localStorage.setItem('authToken', token);

                // Redirigir o mostrar un mensaje de éxito
                alert("Registro exitoso");
            }
        } catch (error) {
            console.error('Error durante el registro:', error);
            setErrorMessage('Hubo un problema al registrar. Por favor, intenta de nuevo.');
        }
    };

    return (
        <main className="w-full min-h-screen relative">
            <div className="bg-[#200020] p-4 min-h-screen justify-around w-full pb-8 flex flex-col">
            <nav className="w-full p-2 flex justify-between items-center">
                <a href='/' className='btn btn-ghost flex justify-center gap-2 items-center text-2xl '> <BsArrowBarLeft/>Atras </a>
                        <AiOutlineQuestion className="size-6 text-white font-bold" />
                        
                    </nav>
                <section className="flex justify-center items-center ">
                    <img src="logo.png" alt="NEQUI" className="w-[16rem]" />
                </section>

                <form onSubmit={handleSubmit} className="flex flex-col w-full justify-center items-center gap-4 mt-8">
                    <input
                        type="text"
                        name="cedula"
                        value={formData.cedula}
                        onChange={handleChange}
                        placeholder="Cédula"
                        className="input input-bordered w-11/12 max-w-xs bg-transparent text-white border border-gray-500 rounded-md"
                        required
                    />
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="input input-bordered w-11/12 max-w-xs bg-transparent text-white border border-gray-500 rounded-md"
                        required
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        className="input input-bordered w-11/12 max-w-xs bg-transparent text-white border border-gray-500 rounded-md"
                        required
                    />
                   
                    <input
                        type="password"
                        name="contrasena"
                        value={formData.contrasena}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        className="input input-bordered w-11/12 max-w-xs bg-transparent text-white border border-gray-500 rounded-md"
                        required
                    />
                    <div className="relative mt-2 w-11/12 text-gray-500">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                            <p className="text-sm outline-none rounded-lg h-full">
                                +57
                            </p>
                        </div>
                        <input
                            type="number"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Teléfono"
                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border border-gray-500 rounded-md text-white"
                            required
                        />
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}

                    <button
                        type="submit"
                        className="btn w-11/12 bg-[#da0081] text-white text-center rounded-md mt-4"
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Registro;

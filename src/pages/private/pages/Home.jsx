import { AiOutlineQuestion } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import Menu from "../shared/menu";

const Home = () => {
    return (<>
        <main className="w-full min-h-screen bg-white relative ">
            <div className=" min-h-screen  w-full  flex flex-col">
                <div className=" w-full flex flex-col px-5 py-7 bg-[#200020]  ">
                    <nav className="w-full p-2  flex justify-between items-center">
                        <div
                            className="p-1 btn bg-white font-semibold bg-opacity-30 btn-ghost rounded-lg flex items-center gap-4 justify-center"
                        >
                            <FaRegUser className="size-6 text-white" />
                            <p className="text-start leading-4">Hola.<br />
                                jailer vega </p>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <IoMdNotificationsOutline className="text-white font-bold size-6" />

                            <AiOutlineQuestion className="size-6 text-white font-bold" />
                        </div>
                    </nav>

                    <div className="w-full flex justify-center flex-col items-center gap-2">
                        <p>Disponible</p>
                        <p className="text-4xl font-semibold text-white">$100.000,00</p>
                        <p>Total:$120.000,00</p>
                        <button className="btn btn-outline btn-sm">Tu plata</button>

                    </div>
                </div>
                <section className="w-full flex mt-8 text-black px-5 flex-col">
                    <h2 className="font- text-xl self-start ml-3 mb-3 flex justify-center items-center gap-2">Tus favoritos <CiHeart /></h2>
                    <div className="grid grid-cols-3 gap-4 w-full place-content-center mt-8">
                        <a href="/Transferencia" className="flex flex-col text-center  w-full items-center justify-center gap-2">
                            <FaMoneyBillTransfer className="size-12   rotate-90" />
                            <p>Transferencia</p>
                        </a>
                        <a className="flex flex-col text-center  w-full items-center justify-center gap-2">
                            <BsFillCreditCard2FrontFill className="size-12   rotate-90" />
                            <p>Consultar tarjeta</p>
                        </a>
                        <a href="/Retiro" className="flex flex-col text-center  w-full items-center justify-center gap-2">
                            <TbPigMoney className="size-12   " />
                            <p>Retiros</p>
                        </a>

                    </div>
                </section>
                <Menu/>
            </div>
        </main>
    </>);
}

export default Home;
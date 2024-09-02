import { RiHomeFill } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";


const Menu = () => {
    return (<>
        <div class="flex flex-col w-full absolute bottom-10  px-4">
            <div class="border justify-around items-center text-black  py-4 flex gap-1 shadow-xl rounded-md">
                <div class="flex  flex-col gap-1 justify-center group items-center text-black">
                    <RiHomeFill className="size-10 " />
                    <p className="font-semibold">Inicio</p>
                </div>
                <div class="flex  flex-col gap-1 justify-center group items-center text-black">
                    <CiViewList className="size-10 " />
                    <p className="font-semibold">Movimientos</p>
                </div>
                <div class="flex  flex-col gap-1 justify-center group items-center text-black">
                    <CiGrid41 className="size-10 " />
                    <p className="font-semibold">Servicios</p>
                </div>
            </div>
        </div></>);
}

export default Menu;
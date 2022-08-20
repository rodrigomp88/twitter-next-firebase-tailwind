import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { SidebarLink } from "./";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[300px] 2xl:w-[350px] p-1 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-1 xl:ml-12 2xl:ml-36">
        <Image
          src="/twitterLogo.png"
          width={30}
          height={30}
          alt="logo"
          objectFit="contain"
        />
      </div>
      <div className="2xl:space-y-1 space-y-[-5px] mt-1 mb-2.5 xl:ml-12 2xl:ml-36">
        <SidebarLink text="Inicio" Icon={HomeIcon} active={true} />
        <SidebarLink text="Explorar" Icon={HashtagIcon} />
        <SidebarLink text="Notificaciones" Icon={BellIcon} />
        <SidebarLink text="Mensajes" Icon={InboxIcon} />
        <SidebarLink text="Guardados" Icon={BookmarkIcon} />
        <SidebarLink text="Listas" Icon={ClipboardListIcon} />
        <SidebarLink text="Perfil" Icon={UserIcon} />
        <SidebarLink text="Más opciones" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto 2xl:mr-[-40px] bg-[#1d9bf0] text-white rounded-full 2xl:w-60 xl:w-60 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Twittear
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto mr-[-16px] 2xl:mr-[-50px] mt-auto mb-2"
        onClick={signOut}
      >
        <div className="mr-5">
          <img
            src={session.user.image}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
        </div>
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-12" />
      </div>
    </div>
  );
}

export default Sidebar;

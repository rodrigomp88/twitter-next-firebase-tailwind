function Sidebar({ Icon, text, active }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center font-normal justify-center xl:justify-start xl:text-[20px] 2xl:text-xl space-x-4 hoverAnimation ${
        active && "font-extrabold"
      }`}
    >
      <Icon className="h-7 text-white font-light" strokeWidth={1.5} />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default Sidebar;

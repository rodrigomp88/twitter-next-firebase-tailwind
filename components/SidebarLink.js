function Sidebar({ Icon, text, active }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-md space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-5 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default Sidebar;

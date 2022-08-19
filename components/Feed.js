import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

function Feed() {
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-xl 2xl:max-w-[610px] sm:ml-[73px] xl:ml-[330px] 2xl:ml-[430px]">
      <div className="text-[#d9d9d9] mt-2 flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-gray-700">
        <h2 className="text-xl font-bold">Inicio</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Feed;

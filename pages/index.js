import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <title>Twitter</title>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
      </main>
    </div>
  );
}

import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="flex flex-col  w-full h-full items-center background">
        <h1 className="bg-white w-11/12 text-center mt-[40px]  rounded-lg  font-bold  text-4xl  " >Random Gifs</h1>
        <div className="flex w-full items-center gap-y-10 mt-[30px] flex-col">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource)
  }

  useEffect(() => {
    fetchData()
  } , [])

  const [gif,setGif] = useState('');
  function clickHandler(){
    fetchData()
  }
  return (
    <div className="w-1/2  flex flex-col items-center gap-y-5 mt-[15x] rounded-lg border border-black bg-green-500" >
      <h2 className="text-2xl mt-[15px]  underline uppercase font-bold">A Random Gif</h2>
      <img src={gif} width="450" height={350} loading="lazy" />
      <button className="w-10/12 mb-[20px] bg-green-100 text-lg py-2 rounded-lg" onClick={clickHandler}>Generate</button>
    </div>
  );
}

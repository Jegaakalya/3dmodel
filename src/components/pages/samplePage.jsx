
import React from 'react';
import { AiFillCustomerService, AiOutlineShoppingCart } from "react-icons/ai";
import { GiChessKing } from "react-icons/gi";
import { TfiDownload } from "react-icons/tfi";
import videodata from '../../assets/IMAX 3D Teaser • Avatar 2_ The Way of Water • Dolby 5.1(360P).mp4';
import audio_1 from "../../assets/we can create the audio.mp3";
import CustomVideoPlayer from '../videoplayer';

// function Model() {
//     // Load the GLTF/GLB model
//     const { scene } = useGLTF("../../assets/AnisotropyBarnLamp.glb"); // Adjust the path based on your file location
//     return <primitive object={scene} scale={0.5} />;
//   }
const SamplePage = () => {
    const playAudio = () => {
        const audio = new Audio(audio_1);
        audio.play();
      };
  return (
   <>
      <main className='flex justify-center items-center  mt-2 text-left'>
        <content className="px-1 text-black/75">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo consectetur enim veritatis voluptas porro earum necessitatibus et dicta dolor. Quae provident recusandae veniam quidem qui dolores quos sint cum optio?
        </content>
        <model className="px-1 text-black/75">
       
        </model>
      </main>
      <div className='flex justify-around items-center  mt-6'>
        <AiFillCustomerService onClick={playAudio} className='    text-4xl text-primary '/>
        <AiOutlineShoppingCart onClick={playAudio} className='text-primary text-4xl '/>
        <GiChessKing onClick={playAudio} className='  text-primary text-4xl '/>
        <TfiDownload onClick={playAudio} className='  text-primary text-4xl '/>
      </div>
      <div>
            <CustomVideoPlayer src={videodata}/>
      </div>
   </>
  )
}

export default SamplePage




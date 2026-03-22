"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Loader() {
  useGSAP(()=>{
    let loaderTl = gsap.timeline({repeat:(-1)});
    let balls = document.querySelectorAll(".ball")

    for(const ball of balls){
    loaderTl.to(ball,{
      scale:2,
      background:"#ffffff",
      duration:0.5
    })
    .to(ball,{
      scale:1,
      background:"#ffffff33",
      duration:0.5
    })
    }
    // loaderTl.to(".ball1",{
    //   scale:2,
    //   background:"#ffffff",
    //   duration:0.3
    // })
    // .to(".ball1",{
    //   scale:1,
    //   background:"#ffffff33",
    //   duration:0.3
    // })
    // .to(".ball2",{
    //   scale:2,
    //   background:"#ffffff",
    //   duration:0.3
    // })
    // .to(".ball2",{
    //   scale:1,
    //   background:"#ffffff33",
    //   duration:0.3
    // })
  },[])
  return (
    <div className="loader w-[100vw] h-[100vh] bg-[black] flex justify-center items-center flex-col gap-[20px]">
      <p className="text-white text-[2rem]">Globe-Trotter</p>
      <div className="flex justify-center items-center gap-[10px]">
        <div className="ball w-[20px] h-[20px] rounded-full bg-[#ffffff33]"></div>
        <div className="ball w-[20px] h-[20px] rounded-full bg-[#ffffff33]"></div>
        <div className="ball w-[20px] h-[20px] rounded-full bg-[#ffffff33]"></div>
        <div className="ball w-[20px] h-[20px] rounded-full bg-[#ffffff33]"></div>
        <div className="ball w-[20px] h-[20px] rounded-full bg-[#ffffff33]"></div>
      </div>
      
    </div>
  );
}
"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { useState } from "react";
import { gsap, random } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Loader from "./components/loading";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const [loading, setLoading] = useState(true);
  useGSAP(() => {
    const images = document.images;
    let loaded = 0;
    if (images.length === 0) {
      setLoading(false);
      return;
    }
    const handleLoad = () => {
      loaded++;
      if (loaded === images.length) {
        setLoading(false);
      }
    };
    for (let img of images) {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      }
    }

  let switchBtn = document.querySelector(".switchBtn")
  let discoverBtn = document.querySelector(".discoverBtn")
  let backBtn = document.querySelector(".backBtn")
  let listAllBtn = document.querySelector(".listAllBtn")
  let listImg1Btn = document.querySelector(".listImg1Btn")
  let listImg2Btn = document.querySelector(".listImg2Btn")
  let listImg3Btn = document.querySelector(".listImg3Btn")
  let listImg4Btn = document.querySelector(".listImg4Btn")
  let mainTx1 = document.querySelector(".mainTx1")
  let mainTx2 = document.querySelector(".mainTx2")
  let mainBg = 1;
  let mainTlBg = gsap.timeline();
  let mainTlLoopJump1 = gsap.timeline({repeat:(-1)});
  let discoverChanger = gsap.timeline();
  let mainTlDiscoverBtn = gsap.timeline();
  let mainTlBackBtn = gsap.timeline();
  let mainTllistAll = gsap.timeline();
  let mainTllistImg1 = gsap.timeline();
  let mainTllistImg2 = gsap.timeline();
  let mainTllistImg3 = gsap.timeline();
  let mainTllistImg4 = gsap.timeline();
  let mm = gsap.matchMedia();
  const root = document.documentElement;

function themeChangerDark(){
  root.style.setProperty('--tx1', "black");
  gsap.to(".menuSvg",{
    attr:{
      src:"images/menu dark.svg"
    }
  });
    gsap.to(".searchSvg",{
    attr:{
      src:"images/search dark.svg"
    }
  });
    gsap.to(".shareSvg",{
    attr:{
      src:"images/share dark.svg"
    }
  })
    gsap.to(".leftArrow",{
    attr:{
      src:"images/half_arrow_left.svg"
    }
  })
    gsap.to(".rightArrow",{
    attr:{
      src:"images/half_arrow_right.svg"
    }
  })
}

function themeChangerLight(){
  root.style.setProperty('--tx1', "white");
  gsap.to(".menuSvg",{
    attr:{
      src:"images/menu.svg"
    }
  });
    gsap.to(".searchSvg",{
    attr:{
      src:"images/search.svg"
    }
  });
    gsap.to(".shareSvg",{
    attr:{
      src:"images/share.svg"
    }
  })
      gsap.to(".leftArrow",{
    attr:{
      src:"images/half_arrow_left_white.svg"
    }
  })
    gsap.to(".rightArrow",{
    attr:{
      src:"images/half_arrow_right_white.svg"
    }
  })
}

  function mainSwitcher(){
    mainBg += 1;

    if(mainBg == 5){
      mainBg = 1;}
    if(mainBg == 2){     
      discoverChanger.to(".discoverCon1",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"none"
      })
      .to(".discoverCon2",{
        display:"block"
      });

      mainTlBg.to(
        ".imgCenter",{
          rotate:360,
          filter:"blur(7px)",
          duration: 0.6,
        }
      )
      .set(".imgCenter", { attr: { src: "images/sahara1.jpg" } },"-=0.3")
      .to(".imgCenter", {
          filter:"blur(0px)",
           duration: 0.6 })
      .set(".imgCenter",{rotate:0})
      .fromTo(
        ".imgArc",{filter:" brightness(0.8)",},{
          rotate:360,
          filter:"brightness(0.8) blur(7px) ",
          duration: 0.6,
        }
        ,"-=1"
      )
      .set(".imgArc", { attr: { src: "images/sahara1.jpg" } },"-=0.9")
      .to(".imgArc", {
          filter:"brightness(0.8) blur(0px)",
          duration: 0.6,},"-=0.5")
      .set(".imgArc",{rotate:0})
      .to(
        ".imgIround",{
          filter:"blur(7px)",
          duration: 0.6,
        }
        ,"-=1.2"
      )
      .set(".imgIround", { attr: { src: "images/sahara1.jpg" } },"-=1")
      .to(".imgIround", {
          filter:"blur(0px)",
          duration: 0.6 },"-=0.5")
      .set(".imgIround",{rotate:0})
      .to(
        mainTx1,{
          y:-80,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx1.innerHTML="SAHARA"
          }
        },"-=1"
      )
      .set(mainTx1,
          {
          y:80,
        },"-=0.7"
      )
      .to(mainTx1,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )
      .to(
        mainTx2,{
          y:30,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx2.innerHTML="MARRAKECH"
          }
        },"-=1"
      )
      .set(mainTx2,
          {
          y:-30,
        },"-=0.7")
      .to(mainTx2,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )
    }
    else if(mainBg == 3){
      discoverChanger.to(".discoverCon1",{
        display:"none"
      })
      .to(".discoverCon2",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"block"
      })
      .to(".discoverCon4",{
        display:"none"
      });


      mainTlBg.to(
        ".imgCenter",{
          rotate:360,
          filter:"blur(7px",
          duration: 0.6,
        }
      )
      .set(".imgCenter", { attr: { src: "images/dolomites1.jpg" } },"-=0.3")
      .to(".imgCenter", {
          filter:"blur(0px",
          duration: 0.6 })
      .set(".imgCenter",{rotate:0})
      .fromTo(
        ".imgArc",{filter:" brightness(0.8)",},{
          rotate:360,
          filter:"brightness(0.8) blur(7px)",
          duration: 0.6,
        }
        ,"-=1"
      )
      .set(".imgArc", { attr: { src: "images/dolomites1.jpg" } },"-=0.9")
      .to(".imgArc", {
          filter:"brightness(0.8) blur(0px)",
          duration: 0.6 },"-=0.5")
      .set(".imgArc",{rotate:0})
      
      .to(
        ".imgIround",{
          filter:"blur(7px",
          duration: 0.6,
        }
        ,"-=1.2"
      )
      .set(".imgIround", { attr: { src: "images/dolomites1.jpg" } },"-=1")
      .to(".imgIround", {
          filter:"blur(0px",
          duration: 0.6 },"-=0.5")
      .set(".imgIround",{rotate:0})


      .to(
        mainTx1,{
          y:-80,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx1.innerHTML="DOLOMITES"
          }
        },"-=1"
      )
      .set(mainTx1,
          {
          y:80,
        },"-=0.7"
      )
      .to(mainTx1,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )

      .to(
        mainTx2,{
          y:30,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx2.innerHTML="ITALY"
          }
        },"-=1"
      )
      .set(mainTx2,
          {
          y:-30,
        },"-=0.7"
      )
      .to(mainTx2,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )

    }
    else if(mainBg == 4){
      discoverChanger.to(".discoverCon1",{
        display:"none"
      })
      .to(".discoverCon2",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"block"
      });

      mainTlBg.to(
        ".imgCenter",{
          rotate:360,
          filter:"blur(7px",
          duration: 0.6,
        }
      )
      .set(".imgCenter", { attr: { src: "images/maldives1.jpg" } },"-=0.3")
      .to(".imgCenter", {
          filter:"blur(0px",
          duration: 0.6 })
      .set(".imgCenter",{rotate:0})

      .fromTo(
        ".imgArc",{filter:" brightness(0.8)",},{
          rotate:360,
          filter:"brightness(0.8) blur(7px)",
          duration: 0.6,
        }
        ,"-=1"
      )
      .set(".imgArc", { attr: { src: "images/maldives1.jpg" } },"-=0.9")
      .to(".imgArc", {
          filter:"brightness(0.8) blur(0px)",
          duration: 0.6 },"-=0.5")
      .set(".imgArc",{rotate:0})
      
      .to(
        ".imgIround",{
          filter:"blur(7px",
          duration: 0.6,
        }
        ,"-=1.2"
      )
      .set(".imgIround", { attr: { src: "images/maldives1.jpg" } },"-=1")
      .to(".imgIround", {
          filter:"blur(0px",
          duration: 0.6 },"-=0.5")
      .set(".imgIround",{rotate:0})

      .to(
        mainTx1,{
          y:-80,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx1.innerHTML="MALDIVES"
          }
        },"-=1"
      )
      .set(mainTx1,
          {
          y:80,
        },"-=0.7"
      )
      .to(mainTx1,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )

      .to(
        mainTx2,{
          y:30,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx2.innerHTML="INDIAN OCEAN"
          }
        },"-=1"
      )
      .set(mainTx2,
          {
          y:-30,
        },"-=0.7"
      )
      .to(mainTx2,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )

    }
    else{
      discoverChanger.to(".discoverCon1",{
        display:"block"
      })
      .to(".discoverCon2",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"none"
      });
      
      mainTlBg.to(
        ".imgCenter",{
          rotate:360,
          filter:"blur(7px)",
          duration: 0.6,
        }
      )
      .set(".imgCenter", { attr: { src: "images/scotland1.jpg" } },"-=0.3")
      .to(".imgCenter", {
          filter:"blur(0px)",
           duration: 0.6 })
      .set(".imgCenter",{rotate:0})

      .fromTo(
        ".imgArc",{filter:" brightness(0.8)",},{
          rotate:360,
          filter:"brightness(0.8) blur(7px)",
          duration: 0.6,
        }
        ,"-=1"
      )
      .set(".imgArc", { attr: { src: "images/scotland1.jpg" } },"-=0.9")
      .to(".imgArc", {
          filter:"brightness(0.8) blur(0px)",
          duration: 0.6 },"-=0.5")
      .set(".imgArc",{rotate:0})
          
      .to(
        ".imgIround",{
          filter:"blur(7px)",
          duration: 0.6,
        }
        ,"-=1.2"
      )
      .set(".imgIround", { attr: { src: "images/scotland1.jpg" } },"-=1")
      .to(".imgIround", {
          filter:"blur(0px)",
          duration: 0.6 },"-=0.5")
      .set(".imgIround",{rotate:0})

      .to(
        mainTx1,{
          y:-80,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx1.innerHTML="HIGHLANDS"
          }
        },"-=1"
      )
      .set(mainTx1,
          {
          y:80,
        },"-=0.7"
      )
      .to(mainTx1,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )

      .to(
        mainTx2,{
          y:30,
          duration:0.3,
          onComplete:
          ()=>{
            mainTx2.innerHTML="SCOTLAND"
          }
        },"-=1"
      )
      .set(mainTx2,
          {
          y:-30,
        },"-=0.7"
      )
      .to(mainTx2,
          {
          y:0,
          duration:0.3,
        },"-=0.7"
      )

      
    }
    }
    switchBtn.addEventListener("click", mainSwitcher)

  function discoverBtnClick(){

    mainTlDiscoverBtn
    .to(".discover",{
      display:"block",
    })
    .to(".discoverAnime",{
      width:150,
      height:150,
      display:"block",
      duration:0.2,
    })
    .to(".discoverAnime",{
      width:20,
      height:20,
      display:"none",
      duration:0.2,
    })
    .to(".discover",{
      top:"0",
      duration:1
    })
    .to(".listAllBtn",{
      visibility: "hidden"
    },"-=0.3")
    .to(".addsCon",{
      visibility: "hidden"
    },"-=0.8")
    .to(".imgArc",{
      filter:"brightness(1)"
    },"-=0.8")
    .to(".nav",{
      background:"#00000033"
    })
    .fromTo(".backBtn",{x:200},{
      x:0,
      display:"flex",
      duration:0.2
    },"-=0.8");
    setTimeout(themeChangerDark,1000);
    }
    discoverBtn.addEventListener("click", discoverBtnClick)

    function backBtnClick(){
    mainTlBackBtn
    .to(window,{
      scrollTo:"#scrollToHere"
    })
    .to(".discoverAnime1",{
      width:150,
      height:150,
      display:"block",
      duration:0.2,
    })
    .to(".discoverAnime1",{
      width:20,
      height:20,
      display:"none",
      duration:0.2,
    })
    .to(".backBtn",{
      x:200,
      display:"none",
      duration:0.2
    })
    .to(".discover",{
      top:"100vh",
      duration:1
      }
    )
    .to(".discover",{
      display:"none"
    })
    .to(".listAllBtn",{
      visibility: "visible"
    },"-=0.9")
    .to(".addsCon",{
      visibility: "visible"
    },"-=0.8")
    .to(".imgArc",{
      filter:"brightness(0.8)"
    },"-=0.8")
    .to(".nav",{
      background:"#00000000"
    })

    setTimeout(themeChangerLight,1500);
    }
    backBtn.addEventListener("click", backBtnClick)

    function listAllBtnClick(){
      mm.add("(max-width:1280px)",()=>{
      gsap.set(".listImg1Src",{attr:{
        src:"images/scotland1.jpg"
      }})
      gsap.set(".listImg2Src",{attr:{
        src:"images/sahara1.jpg"
      }})
            gsap.set(".listImg3Src",{attr:{
        src:"images/dolomites1.jpg"
      }})
            gsap.set(".listImg4Src",{attr:{
        src:"images/maldives1.jpg"
      }})

      mainTllistAll.to(".listAll",{
        display:"flex",
        flexDirection:"column"
      })
      .from(".listImg1",{
        x:-1000,
        duration:0.3
      })
      .from(".listImg2",{
        x:1000,
        duration:0.3
      })
      .from(".listImg3",{
        x:-1000,
        duration:0.3
      })
      .from(".listImg4",{
        x:1000,
        duration:0.3
      })
      })
      mm.add("(min-width:1281px)",()=>{
      mainTllistAll.to(".listAll",{
        display:"flex"
      })
      .from(".listImg1",{
        y:-1000,
        duration:0.3
      })
      .from(".listImg2",{
        y:1000,
        duration:0.3
      })
      .from(".listImg3",{
        y:-1000,
        duration:0.3
      })
      .from(".listImg4",{
        y:1000,
        duration:0.3
      })
      })
    }
    listAllBtn.addEventListener("click", listAllBtnClick)

    function listImg1BtnClick(){
      discoverChanger
      .to(".discover",{
        display:"block"
      })

      .to(".discoverCon2",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"none"
      })
      .to(".discoverCon1",{
        display:"block"
      })

      mm.add("(min-width: 1080px)",()=>{
            mainTllistImg1
      .to(".listImg1",{
        y:1000,
        duration:0.3
      })
      .to(".listImg2",{
        y:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        y:1000,
        duration:0.3
      })
      .to(".listImg4",{
        y:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        y:0,
        duration:0.3
      })
      .set(".listImg2",{
        y:-0,
        duration:0.3
      })
      .set(".listImg3",{
        y:0,
        duration:0.3
      })
      .set(".listImg4",{
        y:0,
        duration:0.3
      })
      });

      mm.add("(max-width: 1080px)",()=>{
            mainTllistImg1
      .to(".listImg1",{
        x:1000,
        duration:0.3
      })
      .to(".listImg2",{
        x:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        x:1000,
        duration:0.3
      })
      .to(".listImg4",{
        x:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        x:0,
        duration:0.3
      })
      .set(".listImg2",{
        x:-0,
        duration:0.3
      })
      .set(".listImg3",{
        x:0,
        duration:0.3
      })
      .set(".listImg4",{
        x:0,
        duration:0.3
      })
      });

    mainTllistImg1
    .to(".discover",{
      top:"0",
      duration:0.5
    })
    .to(".listAllBtn",{
      visibility: "hidden"
    },"-=0.3")
    .to(".addsCon",{
      visibility: "hidden"
    },"-=0.3")
    .to(".imgArc",{
      filter:"brightness(1)"
    },"-=0.3")
    .to(".nav",{
      background:"#00000033"
    })
    .fromTo(".backBtn",{x:200},{
      x:0,
      display:"flex",
      duration:0.2
    },"-=0.5");
    setTimeout(themeChangerDark,2000);
    }
    listImg1Btn.addEventListener("click", listImg1BtnClick)

    function listImg2BtnClick(){
      discoverChanger
      .to(".discover",{
        display:"block"
      })
      .to(".discoverCon1",{
        display:"none"
      })

      .to(".discoverCon3",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"none"
      })
      .to(".discoverCon2",{
        display:"block"
      });

      mm.add("(min-width: 1080px)",()=>{
            mainTllistImg2
      .to(".listImg1",{
        y:1000,
        duration:0.3
      })
      .to(".listImg2",{
        y:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        y:1000,
        duration:0.3
      })
      .to(".listImg4",{
        y:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        y:0,
        duration:0.3
      })
      .set(".listImg2",{
        y:-0,
        duration:0.3
      })
      .set(".listImg3",{
        y:0,
        duration:0.3
      })
      .set(".listImg4",{
        y:0,
        duration:0.3
      })
      });

      mm.add("(max-width: 1080px)",()=>{
            mainTllistImg2
      .to(".listImg1",{
        x:1000,
        duration:0.3
      })
      .to(".listImg2",{
        x:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        x:1000,
        duration:0.3
      })
      .to(".listImg4",{
        x:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        x:0,
        duration:0.3
      })
      .set(".listImg2",{
        x:-0,
        duration:0.3
      })
      .set(".listImg3",{
        x:0,
        duration:0.3
      })
      .set(".listImg4",{
        x:0,
        duration:0.3
      })
      });

    mainTllistImg2
    .to(".discover",{
      top:"0",
      duration:0.5
    })
    .to(".listAllBtn",{
      visibility: "hidden"
    },"-=0.3")
    .to(".addsCon",{
      visibility: "hidden"
    },"-=0.3")
    .to(".imgArc",{
      filter:"brightness(1)"
    },"-=0.3")
    .to(".nav",{
      background:"#00000033"
    })
    .fromTo(".backBtn",{x:200},{
      x:0,
      display:"flex",
      duration:0.2
    },"-=0.5");
    setTimeout(themeChangerDark,2000);
    }
    listImg2Btn.addEventListener("click", listImg2BtnClick)

    function listImg3BtnClick(){
      discoverChanger
      .to(".discover",{
        display:"block"
      })
      .to(".discoverCon1",{
        display:"none"
      })
      .to(".discoverCon2",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"block"
      });


    mm.add("(min-width: 1080px)",()=>{
            mainTllistImg3
      .to(".listImg1",{
        y:1000,
        duration:0.3
      })
      .to(".listImg2",{
        y:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        y:1000,
        duration:0.3
      })
      .to(".listImg4",{
        y:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        y:0,
        duration:0.3
      })
      .set(".listImg2",{
        y:-0,
        duration:0.3
      })
      .set(".listImg3",{
        y:0,
        duration:0.3
      })
      .set(".listImg4",{
        y:0,
        duration:0.3
      })
      });

    mm.add("(max-width: 1080px)",()=>{
            mainTllistImg3
      .to(".listImg1",{
        x:1000,
        duration:0.3
      })
      .to(".listImg2",{
        x:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        x:1000,
        duration:0.3
      })
      .to(".listImg4",{
        x:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        x:0,
        duration:0.3
      })
      .set(".listImg2",{
        x:-0,
        duration:0.3
      })
      .set(".listImg3",{
        x:0,
        duration:0.3
      })
      .set(".listImg4",{
        x:0,
        duration:0.3
      })
      });

    mainTllistImg3
    .to(".discover",{
      top:"0",
      duration:0.5
    })
    .to(".listAllBtn",{
      visibility: "hidden"
    },"-=0.3")
    .to(".addsCon",{
      visibility: "hidden"
    },"-=0.3")
    .to(".imgArc",{
      filter:"brightness(1)"
    },"-=0.3")
    .to(".nav",{
      background:"#00000033"
    })
    .fromTo(".backBtn",{x:200},{
      x:0,
      display:"flex",
      duration:0.2
    },"-=0.5");
    setTimeout(themeChangerDark,2000);
    }
    listImg3Btn.addEventListener("click", listImg3BtnClick)

    function listImg4BtnClick(){
      discoverChanger
      .to(".discover",{
        display:"block"
      })
      .to(".discoverCon1",{
        display:"none"
      })
      .to(".discoverCon2",{
        display:"none"
      })
      .to(".discoverCon3",{
        display:"none"
      })
      .to(".discoverCon4",{
        display:"block"
      });

      mm.add("(min-width: 1080px)",()=>{
            mainTllistImg4
      .to(".listImg1",{
        y:1000,
        duration:0.3
      })
      .to(".listImg2",{
        y:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        y:1000,
        duration:0.3
      })
      .to(".listImg4",{
        y:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        y:0,
        duration:0.3
      })
      .set(".listImg2",{
        y:-0,
        duration:0.3
      })
      .set(".listImg3",{
        y:0,
        duration:0.3
      })
      .set(".listImg4",{
        y:0,
        duration:0.3
      })
      });

      mm.add("(max-width: 1080px)",()=>{
            mainTllistImg4
      .to(".listImg1",{
        x:1000,
        duration:0.3
      })
      .to(".listImg2",{
        x:-1000,
        duration:0.3
      })
      .to(".listImg3",{
        x:1000,
        duration:0.3
      })
      .to(".listImg4",{
        x:-1000,
        duration:0.3
      })
      .to(".listAll",{
        display:"none"
      })
      .set(".listImg1",{
        x:0,
        duration:0.3
      })
      .set(".listImg2",{
        x:-0,
        duration:0.3
      })
      .set(".listImg3",{
        x:0,
        duration:0.3
      })
      .set(".listImg4",{
        x:0,
        duration:0.3
      })
      });

    mainTllistImg4
    .to(".discover",{
      top:"0",
      duration:1
    })
    .to(".listAllBtn",{
      visibility: "hidden"
    },"-=0.3")
    .to(".addsCon",{
      visibility: "hidden"
    },"-=0.3")
    .to(".imgArc",{
      filter:"brightness(1)"
    },"-=0.3")
    .to(".nav",{
      background:"#00000033"
    })
    .fromTo(".backBtn",{x:200},{
      x:0,
      display:"flex",
      duration:0.2
    },"-=0.5");
    setTimeout(themeChangerDark,2000);
    }
    listImg4Btn.addEventListener("click", listImg4BtnClick)

    mainTlLoopJump1.to(".discoverBtn",{
      scale:1.2,
      y:-10,
      duration:1
    })
    .to(".discoverBtn",{
      scale:1,
      y:0,
      duration:1
    })
    
  }, []);

  return (
  <>
    {loading && <Loader />}
      <div className="webSite" style={{ display: loading ? "none" : "block" }}>

            <div className="nav fixed top-0 left-0 z-1000">
              <Navbar />
            </div>

            <div className="backBtn fixed top-[100px] right-0 z-1000 h-[40px] w-[60px] flex justify-center items-center gap-[20px] text-[var(--tx1)] bg-[#00000033] rounded-l-full cursor-pointer hidden">
              <div className="relative  h-[100px] w-[200px] flex justify-center items-center gap-[20px]">
              <div className="">
                <img src="images/x dark.svg" alt="" className="w-[40px] h-[40px]" />
              </div>
              <div className="discoverAnime1 absolute top-[50%] left-[50%] w-[20px] h-[20px] -translate-y-[50%] -translate-x-[50%] rounded-full bg-[var(--tx1)] opacity-70 hidden"></div></div>
            </div>

            <div className="share hidden 
            max-sm:hidden fixed bottom-10 left-10  flex-col items-center w-[100px] h-[100px] justify-between text-[0.9rem] mr-[100px] text-[var(--tx1)] z-1000">
                    <div className="rotate-270 mt-[-40px]">SHARE</div>
                    <div className=" w-[0] h-[30px] mt-[30px] border-1 border-[var(--tx)]"></div>
                    <div className=" w-[20px] h-[30px] ">
                      <img className="shareSvg w-[30px] h-[30px] " src="images/share.svg" alt="" />
                    </div>
            </div>

          <div className="main relative w-[100vw] h-[auto] ">

        <div className="fixed top-0 left-0  w-[100vw] h-[100vh] z-99">
          <div className="relative">
                    <div className="listAll absolute w-[100vw] h-[100vh] top-0 left-0 z-100 hidden">
                      <div className="
                      max-xl:w-[100%]
                      max-xl:h-[25%]
                      listImg1 relative w-[25%] h-[100%] ">
                        <div className="listImg1Btn absolute top-0 left-0 z-111 text-[#00000000] bg-[#00000033] w-[100%] h-[100%] text-[2rem] hover:bg-[#000000cc] hover:text-[white]  transition-[0.5s] uppercase flex justify-center items-center cursor-pointer">
                          Discover
                        </div>
                        <div className=" absolute top-20 left-0 z-110 text-[#fff]  w-[100%] h-[100%] text-[2rem] hover:text-[#ffffff00] uppercase flex justify-center items-center cursor-pointer">
                          Highlands
                        </div>
                        <img className="listImg1Src absolute top-0 left-0 w-[100%] h-[100%]" src="images/scotland2.jpg" alt="" /></div>
                      <div className="
                      max-xl:w-[100%]
                      max-xl:h-[25%]
                      listImg2 relative w-[25%] h-[100%] ">
                        <div className="listImg2Btn absolute top-0 left-0 z-111 text-[#00000000] bg-[#00000033] w-[100%] h-[100%] text-[2rem] hover:bg-[#000000cc] hover:text-[white]  transition-[0.5s] uppercase flex justify-center items-center cursor-pointer">
                          Discover
                        </div>
                        <div className=" absolute top-20 left-0 z-110 text-[#fff]  w-[100%] h-[100%] text-[2rem] hover:text-[#ffffff00] uppercase flex justify-center items-center cursor-pointer">
                          Sahara
                        </div>
                        <img className="listImg2Src absolute top-0 left-0 w-[100%] h-[100%]" src="images/sahara4.jpg" alt="" /></div>
                      <div className="
                      max-xl:w-[100%]
                      max-xl:h-[25%]
                      listImg3 relative w-[25%] h-[100%] ">
                        <div className="listImg3Btn absolute top-0 left-0 z-111 text-[#00000000] bg-[#00000033] w-[100%] h-[100%] text-[2rem] hover:bg-[#000000cc] hover:text-[white]  transition-[0.5s] uppercase flex justify-center items-center cursor-pointer">
                          Discover
                        </div>
                        <div className=" absolute top-20 left-0 z-110 text-[#fff]  w-[100%] h-[100%] text-[2rem] hover:text-[#ffffff00] uppercase flex justify-center items-center cursor-pointer">
                          Dolomites
                        </div>
                        <img className="listImg3Src absolute top-0 left-0 w-[100%] h-[100%]" src="images/dolomites2.jpg" alt="" /></div>
                      <div className="
                      max-xl:w-[100%]
                      max-xl:h-[25%]
                      listImg4 relative w-[25%] h-[100%] ">
                        <div className="listImg4Btn absolute top-0 left-0 z-111 text-[#00000000] bg-[#00000033] w-[100%] h-[100%] text-[2rem] hover:bg-[#000000cc] hover:text-[white]  transition-[0.5s] uppercase flex justify-center items-center cursor-pointer">
                          Discover
                        </div>
                        <div className=" absolute top-20 left-0 z-110 text-[#fff]  w-[100%] h-[100%] text-[2rem] hover:text-[#ffffff00] uppercase flex justify-center items-center cursor-pointer">
                          Maldives
                        </div>
                        <img className="listImg4Src absolute top-0 left-0 w-[100%] h-[100%]" src="images/maldives2.jpg" alt="" /></div>
                    </div>

                    <div className="imgCon absolute top-0 left-0 w-[100vw] h-[100vh] z-10 overflow-hidden ">
                        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
                          <img className="
                          imgIround absolute top-0 object-none left-0 w-[100vw] h-[100vh] z-11" src="images/scotland1.jpg" alt=""/>
                          <img className="
                          max-lg:w-[100vw]
                          max-lg:h-[100vw]
                          imgArc absolute top-[50%] left-[50%] translate-[-50%] w-[1080px] h-[1080px] object-none rounded-full z-12 brightness-80 " src="images/scotland1.jpg" alt=""/>
                          <img className="
                          max-lg:w-[50vw]
                          max-lg:h-[50vw]
                          imgCenter absolute top-[50%] left-[50%] translate-[-50%] w-[540px] h-[540px] object-none rounded-full z-13" src="images/scotland1.jpg" alt=""/>
                        </div>l
                    </div>

                    <div className="addsCon absolute top-0 left-0 w-[100vw] h-[100vh] z-99 overflow-hidden"> 
                      <div className="relative w-[100vw] h-[100vh] flex flex-col justify-center items-center text-[var(--tx1)]">
                        <div className=" overflow-hidden ">
                          <div className="
                          max-lg:tracking-[20px]
                          max-sm:tracking-[10px]
                          max-lg:text-[4rem]
                          max-sm:text-[2rem]
                          mainTx1 text-[5rem] tracking-[60px] mt-[80px]">HIGHLANDS</div>
                        </div>
                        <hr className="
                          max-sm:w-[240px]
                        border-0.5 w-[400px] my-[20px]"/>
                        <div className=" overflow-hidden  mb-[40px]">
                          <div className="
                          max-sm:tracking-[10px]
                          max-sm:[1.2rem]
                          mainTx2 text-[1.4rem] tracking-[20px]">SCOTLAND</div>
                        </div>

                        <div className="middleArrows flex gap-[40px]">
                          <img className="leftArrow w-[60px] h-[60px]" src="images/half_arrow_left_white.svg" alt="" />
                          <div className="h-[60px] border-1 border-[var(--tx1)]"></div>
                          <img className="rightArrow w-[60px] h-[60px]" src="images/half_arrow_right_white.svg" alt="" />
                        </div>

                        <div className="switcher absolute w-[100vw] h-[120px] px-[40px] flex bottom-10 left-0 items-end justify-between">
                          <div className="
                          max-lg:w-[40px]
                          max-sm:hidden
                          w-[200px] h-[100px]"></div>
                          <div className="
                          max-sm:top-[-100%]
                          max-sm:left-[50%]
                          max-sm:translate-x-[-50%]
                          max-lg:top-[-60%]
                          discoverBtn relative underline uppercase cursor-pointer text-[0.9rem]">
                            <div className="discoverAnime absolute top-[50%] left-[50%] w-[20px] h-[20px] -translate-y-[50%] -translate-x-[50%] rounded-full bg-[var(--tx1)] opacity-70 hidden"></div>
                            Discover this destination</div>
                          <div className="
                          max-lg:w-[40px]
                          max-lg:top-[-60%]
                          max-sm:top-[-40%]
                          w-[200px] relative flex items-center gap-[20px] text-[0.9rem] z-99 ">
                            <div className="uppercase max-lg:hidden">
                              switch
                            </div>
                            <div className="w-[30px] h-[0px]  border-1 border-[var(--tx)] max-lg:hidden"></div>
                            <div className="switchBtn w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer" >
                              <img src="images/randomize_icon_black.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
        </div>
        </div>

                <div className="discover absolute top-[100vh] left-[0] w-[100vw] h-[auto] z-100 hidden">
                  <div id="scrollToHere"></div>

                  <div className="discoverCon1 relative w-[100vw] h-[auto] z-99 ">
                    <div className="anchor1
                    max-lg:pt-[100px]
                    absolute top-0 left-0 w-[100vw] h-[auto] bg-[#ffffffcc] flex flex-col items-center pt-[140px] text-[var(--tx1)] ">
                      <div className="
                      max-sm:text-[1.2rem]
                      max-sm:tracking-[8px]
                      max-sm:pl-[0px]
                      max-lg:text-[2rem]
                      max-lg:tracking-[20px]
                      flex flex-col justify-center items-center w-[100vw] h-[40vh] text-[3rem] tracking-[50px] uppercase pl-[50px] ">
                        <div className="solver"> Breathtaking</div>
                        <div className=""> Highland views </div>
                        <div className="
                        max-sm:ml-[0]
                        max-lg:h-[60px]
                        h-[80px] w-[0] border-1 border-[var(--tx1)] ml-[-50px] my-[20px] "></div>
                      </div>
                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      flex justify-around items-center w-[80vw] h-[100vh]">
                        <div className="
                        max-lg:self-start
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/scotland3.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/scotland4.jpg" alt="" className="discoverImgUp1
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:right-[-61.2px]
                          absolute bottom-[-100px] right-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                        max-lg:w-[100vw]
                        max-lg:p-[70px]
                        max-lg:h-[auto]
                        max-sm:p-[30px]
                        w-[50%]  h-[100vh] relative pl-[100px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                          <div className="font-bold ">Scottish Highlands</div>
                          <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                          </div>
                          <div className="font-bold underline cursor-pointer">
                            <a href="https://www.google.com/maps/search/Scottish+Highlands+tours/@57.5145112,-7.5452279,7z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                            Discover and locate on map</a></div>
                        </div>
                      </div>

                      <div className="
                      max-lg:h-[100px]
                      h-[240px]"></div>

                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      max-lg:pl-[0]
                      flex justify-around items-center w-[80vw] h-[100vh] pb-[100px] pl-[115px]">
                        <div className="
                        max-lg:self-end
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/scotland2.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/scotland5.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:left-[-61.2px]
                          absolute bottom-[-100px] left-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className=" 
                          max-lg:w-[100vw]
                          max-lg:p-[70px]
                          max-lg:pt-[140px]
                          max-lg:h-[auto]
                          max-sm:p-[30px]
                          w-[50%]  h-[100vh] relative pl-[20px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                            <div className="font-bold ">One of the best natural views.</div>
                            <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                            </div>
                            <div className="font-bold underline cursor-pointer">
                            <a href="https://www.google.com/maps/search/Scottish+Highlands+tours/@57.5145112,-7.5452279,7z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                              Discover and locate on map</a></div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="discoverCon2 relative w-[100vw] h-[auto] z-99 hidden">
                    <div className="
                    max-lg:pt-[100px]
                    discoverFirstCon absolute top-0 left-0 w-[100vw] h-[auto] bg-[#ffffffcc] flex flex-col items-center pt-[140px] text-[var(--tx1)]">
                      <div className="
                      max-sm:text-[1.2rem]
                      max-sm:tracking-[8px]
                      max-sm:pl-[0px]
                      max-lg:text-[2rem]
                      max-lg:tracking-[20px]
                      flex flex-col justify-center items-center w-[100vw] h-[40vh] text-[3rem] tracking-[50px] uppercase pl-[50px] ">
                        <div className="solver">Desert</div>
                        <div className="">soul calling</div>
                        <div className="
                        max-sm:ml-[0]
                        max-lg:h-[60px]
                        h-[80px] w-[0] border-1 border-[var(--tx1)] ml-[-50px] my-[20px] "></div>
                      </div>
                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      flex justify-around items-center w-[80vw] h-[100vh]">
                        <div className="
                        max-lg:self-start
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/sahara2.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/sahara3.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:right-[-61.2px]
                          absolute bottom-[-100px] right-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                        max-lg:w-[100vw]
                        max-lg:p-[70px]
                        max-lg:h-[auto]
                        max-sm:p-[30px]
                        w-[50%]  h-[100vh] relative pl-[100px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                          <div className="font-bold ">Marrakech Desert</div>
                          <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                          </div>
                          <div className="font-bold underline cursor-pointer">
                            <a href="https://www.google.com/maps/search/marrakech+desert+tours/@31.5767828,-8.2026112,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                            Discover and locate on map</a></div>
                        </div>
                      </div>

                      <div className="
                      max-lg:h-[100px]
                      h-[240px]"></div>

                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      max-lg:pl-[0]
                      flex justify-around items-center w-[80vw] h-[100vh] pb-[100px] pl-[115px]">
                        <div className="
                        max-lg:self-end
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/sahara4.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/sahara5.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:left-[-61.2px]
                          absolute bottom-[-100px] left-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                          max-lg:w-[100vw]
                          max-lg:p-[70px]
                          max-lg:pt-[140px]
                          max-lg:h-[auto]
                          max-sm:p-[30px]
                          w-[50%]  h-[100vh] relative pl-[20px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                            <div className="font-bold ">Sahara sunset vibes.</div>
                            <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                            </div>
                            <div className="font-bold underline cursor-pointer">
                              <a href="https://www.google.com/maps/search/marrakech+desert+tours/@31.5767828,-8.2026112,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                              Discover and locate on map</a></div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="discoverCon3 relative w-[100vw] h-[auto] z-99 hidden">
                    <div className="
                    max-lg:pt-[100px]
                    discoverFirstCon absolute top-0 left-0 w-[100vw] h-[auto] bg-[#ffffffcc] flex flex-col items-center pt-[140px] text-[var(--tx1)]">
                      <div className="
                      max-sm:text-[1.2rem]
                      max-sm:tracking-[8px]
                      max-sm:pl-[0px]
                      max-lg:text-[2rem]
                      max-lg:tracking-[20px]
                      flex flex-col justify-center items-center w-[100vw] h-[40vh] text-[3rem] tracking-[50px] uppercase pl-[50px] ">
                        <div className="solver">Nature</div>
                        <div className="">beyond words</div>
                        <div className="
                        max-sm:ml-[0]
                        max-lg:h-[60px]
                        h-[80px] w-[0] border-1 border-[var(--tx1)] ml-[-50px] my-[20px] "></div>
                      </div>
                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      flex justify-around items-center w-[80vw] h-[100vh]">
                        <div className="
                        max-lg:self-start
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/dolomites3.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/dolomites4.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:right-[-61.2px]
                          absolute bottom-[-100px] right-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                        max-lg:w-[100vw]
                        max-lg:p-[70px]
                        max-lg:h-[auto]
                        max-sm:p-[30px]
                        w-[50%]  h-[100vh] relative pl-[100px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                          <div className="font-bold ">Dolomites Italy</div>
                          <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                          </div>
                          <div className="font-bold underline cursor-pointer">
                            <a href="https://www.google.com/maps/place/Dolomite+Mountains+Tour+Operator/@46.5720897,11.929626,15.96z/data=!3m1!5s0x4778394aec5d0f61:0x79088afe48faebb7!4m6!3m5!1s0x4778394abf85870b:0x387dbe11ce645437!8m2!3d46.5717384!4d11.9318148!16s%2Fg%2F11cs1sqzvj?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                            Discover and locate on map</a></div>
                        </div>
                      </div>

                      <div className="
                      max-lg:h-[100px]
                      h-[240px]"></div>

                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      max-lg:pl-[0]
                      flex justify-around items-center w-[80vw] h-[100vh] pb-[100px] pl-[115px]">
                        <div className="
                        max-lg:self-end
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/dolomites2.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/dolomites5.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:left-[-61.2px]
                          absolute bottom-[-100px] left-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                          max-lg:w-[100vw]
                          max-lg:p-[70px]
                          max-lg:pt-[140px]
                          max-lg:h-[auto]
                          max-sm:p-[30px]
                          w-[50%]  h-[100vh] relative pl-[20px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                            <div className="font-bold ">Dolomites steal hearts.</div>
                            <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                            </div>
                            <div className="font-bold underline cursor-pointer">
                            <a href="https://www.google.com/maps/place/Dolomite+Mountains+Tour+Operator/@46.5720897,11.929626,15.96z/data=!3m1!5s0x4778394aec5d0f61:0x79088afe48faebb7!4m6!3m5!1s0x4778394abf85870b:0x387dbe11ce645437!8m2!3d46.5717384!4d11.9318148!16s%2Fg%2F11cs1sqzvj?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                              Discover and locate on map</a></div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="discoverCon4 relative w-[100vw] h-[auto] z-99 hidden">
                    <div className="
                    max-lg:pt-[100px]
                    discoverFirstCon absolute top-0 left-0 w-[100vw] h-[auto] bg-[#ffffffcc] flex flex-col items-center pt-[140px] text-[var(--tx1)]">
                      <div className="
                      max-sm:text-[1.2rem]
                      max-sm:tracking-[8px]
                      max-sm:pl-[0px]
                      max-lg:text-[2rem]
                      max-lg:tracking-[20px]
                      flex flex-col justify-center items-center w-[100vw] h-[40vh] text-[3rem] tracking-[50px] uppercase pl-[50px] ">
                        <div className="solver">Welcome</div>
                        <div className="">in paradise</div>
                        <div className="
                        max-sm:ml-[0]
                        max-lg:h-[60px]
                        h-[80px] w-[0] border-1 border-[var(--tx1)] ml-[-50px] my-[20px] "></div>
                      </div>
                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      flex justify-around items-center w-[80vw] h-[100vh]">
                        <div className="
                        max-lg:self-start
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/maldives3.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/maldives4.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:right-[-61.2px]
                          absolute bottom-[-100px] right-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                        max-lg:w-[100vw]
                        max-lg:p-[70px]
                        max-lg:h-[auto]
                        max-sm:p-[30px]
                        w-[50%]  h-[100vh] relative pl-[100px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                          <div className="font-bold ">Maldives - Indian Ocean</div>
                          <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                          </div>
                          <div className="font-bold underline cursor-pointer">
                            <a href="https://www.google.com/maps/search/Maldives+-+Indian+Ocean+Tours/@4.8496945,72.5931427,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                            Discover and locate on map</a></div>
                        </div>
                      </div>

                      <div className="
                      max-lg:h-[100px]
                      h-[240px]"></div>

                      <div className="
                      max-lg:flex-col
                      max-lg:h-[auto]
                      max-lg:pl-[0]
                      flex justify-around items-center w-[80vw] h-[100vh] pb-[100px] pl-[115px]">
                        <div className="
                        max-lg:self-end
                        max-sm:w-[204px]
                        max-sm:h-[360px]
                        max-sm:ml-[20px]
                        max-sm:mb-[140px]
                        discoverImgCon1 w-[340px] h-[600px] relative ">
                          <img src="images/maldives2.jpg" alt="" 
                          className="
                          max-sm:w-[204px]
                          max-sm:h-[360px]
                          w-[340px] h-[600px]  rounded-[5px]" />
                          <img src="images/maldives5.jpg" alt="" className="discoverSecondImg
                          max-sm:w-[122.4px]
                          max-sm:h-[216px]
                          max-sm:left-[-61.2px]
                          absolute bottom-[-100px] left-[-102.5px] w-[205px] h-[360px]  rounded-[5px]" />
                        </div>
                        <div className="
                          max-lg:w-[100vw]
                          max-lg:p-[70px]
                          max-lg:pt-[140px]
                          max-lg:h-[auto]
                          max-sm:p-[30px]
                          w-[50%]  h-[100vh] relative pl-[20px] py-[50px] flex flex-col justify-center gap-[20px] text-[1.2rem]">
                            <div className="font-bold ">Endless ocean bliss.</div>
                            <div className=" leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto asperiores voluptatem optio sed non, deleniti provident nobis exercitationem officia, odio quod quibusdam molestiae vel eligendi facilis rerum? Voluptate, velit.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima iusto eos, possimus nemo necessitatibus magni temporibus fugit excepturi nostrum sunt aliquam repudiandae soluta tempore beatae explicabo modi accusamus esse.
                            </div>
                            <div className="font-bold underline cursor-pointer">
                              <a href="https://www.google.com/maps/search/Maldives+-+Indian+Ocean+Tours/@4.8496945,72.5931427,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">
                              Discover and locate on map</a></div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
          </div>

      </div>
  </>
  );
}

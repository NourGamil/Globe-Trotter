"use client";
import { useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    let menuSwitch = false;
    const MenuIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 cursor-pointer"
        fill="none"
        viewBox="0 0 20 20"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    );

    const CloseIcon = ({ onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 cursor-pointer"
        fill="none"
        viewBox="0 0 20 20"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
    );

    useGSAP(()=>{
        let listAllBtnMenu = document.querySelector(".listAllBtnMenu");
        let mainTllistAll = gsap.timeline();
        let mm = gsap.matchMedia();
        document.querySelector(".menuBtn").addEventListener("click",()=>{

                if(menuSwitch == false)
                    {gsap.to(".phoneMenu",{display:"block",opacity:1});menuSwitch = true } 
                else{gsap.to(".phoneMenu",{display:"none",opacity:0});menuSwitch = false }
            console.log(menuSwitch)

            })

    function listAllBtnClick(){
        gsap.to(".contactUsCon",{display:"none",opacity:0,duration:0.5})   
        gsap.to(".addsCon",{display:"block",duration:0.5},"-=0.5")
      gsap.to(".phoneMenu",{display:"none",opacity:0});
      menuSwitch = false;
        gsap.to(".theZTop",{
          zIndex:1001
        })
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
                listAllBtnMenu.addEventListener("click", listAllBtnClick)
document.querySelector(".contactUsBtn").addEventListener("click",
    ()=>{
                        gsap.to(".backBtnContact",{
                        x:-200,
                        display:"flex",
                        duration:0.2
                        });

                        gsap.timeline()
                        .to(".phoneMenu",{display:"none",opacity:0,duration:0.5})
                        .to(".addsCon",{display:"none",duration:0.5},"-=0.5")
                        .to(".contactUsCon",{display:"flex",opacity:1,duration:0.5})  
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
                        menuSwitch = false;
                        setOpen(false);

                        }
)

document.querySelector(".backBtnContact").addEventListener("click",
    ()=>{
                        gsap.timeline()
                        .to(".contactUsCon",{display:"none",opacity:0,duration:0.5})    
                        .to(".addsCon",{display:"block",duration:0.5},"-=0.5")
                        menuSwitch = false;
                        setOpen(false);

                        gsap.to(".backBtnContact",{
                        x:200,
                        display:"flex",
                        duration:0.2
                        },"+=0.2");
                        }
)

        
    },[])
    return(<>
        <div className="navBar w-full fixed top-0 left-0 z-50 flex flex-col justify-center items-center text-[var(--tx1)]">
            <div className="flex justify-between items-center p-[40px] w-[100vw] h-[80px]  text-[0.9rem] z-45">
                <div className="menu w-[200px] ">
                    <div className="menuBtn">
                        {open ? (
                            <CloseIcon onClick={() => setOpen(false)} />
                        ) : (
                            <MenuIcon onClick={() => setOpen(true)} />
                        )}
                    </div>
                </div>
                <div className="max-lg:hidden navMid hover:text-lime-400">
                    <a  href="https://nourgamil.github.io/Globe-Trotter/">
                    GLOBETROTTER
                    </a>
                </div>
                <div className="navAdds flex justify-end items-center w-[200px] ">
                    <div className="max-lg:w-[200px]  listAllBtn navAddsTx underline cursor-pointer flex justify-end hover:text-lime-400">List All Destinations</div>
                </div>
            </div>

            <div className="hidden phoneMenu w-[100vw] px-[40px] pb-6 bg-[#00000080] text-[#ffffff] relative top-[-80px] z-40 pt-[100px] opacity-0">
                <ul className="
                max-md:justify-center
                max-md:flex-col
                flex  gap-6  text-lg justify-around items-center">
                    <li className="w-[200px] flex justify-center items-center">
                    <Link
                        href={"https://nourgamil.github.io/Globe-Trotter/"}
                        className={`hover:text-lime-400 transition navBtns`}
                        onClick={()=>{
                        setOpen(false)
                        }}
                    >
                        Home
                        
                    </Link>
                    </li>
                    <li className="w-[200px] flex justify-center items-center listAllBtnMenu hover:text-lime-400 transition navBtns"
                        onClick={()=>{
                        setOpen(false)
                        }}
                    >

                        Destinations

                    </li>
                    <li className="w-[200px] flex justify-center items-center contactUsBtn hover:text-lime-400 transition navBtns"
                        onClick={()=>{
                        setOpen(false)
                        }}
                    >
                        Contact Us
                    </li>

                
                </ul>
            </div>

            <div className="contactUsCon 
            w-[100vw] h-[100vh] bg-[#00000099] text-[#ffffff] opacity-0 items-center justify-center fixed top-[0px] z-38 hidden p-6 md:p-12 lg:p-24 font-sans overflow-hidden">
                <div className="
                max-sm:pt-[0px]
                max-w-7xl w-full flex justify-center pt-[50px]">

                    <div className="flex flex-col justify-center">
                    
                    <h1 className="
                    max-sm:text-5xl
                    text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                        Contact Us
                    </h1>
                    <div className="border-t border-l border-[#ffffff] pt-12 pl-6 md:pl-12">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div className="flex flex-col gap-8">
                            <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-transparent border-b border-[#ffffff] pb-2 outline-none placeholder-[#ffffff] w-full"
                            />
                            <input
                            type="email"
                            placeholder="E-mail"
                            className="bg-transparent border-b border-[#ffffff] pb-2 outline-none placeholder-[#ffffff] w-full"
                            />
                            <input
                            type="text"
                            placeholder="Message"
                            className="bg-transparent border-b border-[#ffffff] pb-2 outline-none placeholder-[#ffffff] w-full"
                            />
                        </div>

                        <div className="
                        max-sm:flex-row
                        flex flex-col gap-10">
                            <div>
                            <h3 className="text-xl mb-2">Contact</h3>
                            <a href="mailto:hi@fashion.com" className="text-gray-300 hover:text-black transition-colors">
                                hi@gmail.com
                            </a>
                            </div>
                            <div>
                            <h3 className="text-xl mb-2">Based in</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Place,<br />
                                Country
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="
                        max-sm:items-center
                        max-sm:gap-[20px]
                        flex flex-col  sm:flex-row items-start sm:items-center sm:gap-40 pt-4 ">

                            <button className="bg-gray-400 text-white px-10 py-3 rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto">
                                Contact Us
                            </button>
                            
                            <div className=" flex items-center gap-6">
                                {/* Facebook Icon */}
                                <a href="#" className="hover:opacity-70 transition-opacity">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                                </a>
                                {/* Instagram Icon */}
                                <a href="#" className="hover:opacity-70 transition-opacity">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                </a>
                                {/* Twitter / X Icon */}
                                <a href="#" className="hover:opacity-70 transition-opacity">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    </div>

                </div>
                <div className="backBtnContact fixed top-[100px] right-[-200px] z-1000 h-[40px] w-[60px] hidden justify-center items-center gap-[20px] text-[var(--tx1)] bg-[#ffffff] rounded-l-full cursor-pointer ">
                    <div className="relative  h-[100px] w-[200px] flex justify-center items-center gap-[20px]">
                    <div className="">
                        <img src="images/x dark.svg" alt="" className="w-[40px] h-[40px]" />
                    </div>
                    <div className="discoverAnime1Contact absolute top-[50%] left-[50%] w-[20px] h-[20px] -translate-y-[50%] -translate-x-[50%] rounded-full bg-[var(--tx1)] opacity-70 hidden"></div></div>
                </div>
            </div>
        </div>
        </>
    )
}
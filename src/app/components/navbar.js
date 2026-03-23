export default function Navbar(){
    return(<>
        <div className="flex justify-between items-center p-[40px] w-[100vw] h-[80px] text-[var(--tx1)] text-[0.9rem]">
            <div className="menu w-[200px] ">
                <img className="menuSvg w-[40px] h-[40px] cursor-pointer" src="images/menu.svg" alt="" />
            </div>
            <div className="max-lg:hidden navMid">
                <a  href="https://nourgamil.github.io/Globe-Trotter/">
                GLOBETROTTER
                </a>
            </div>
            <div className="navAdds flex justify-end items-center w-[200px] ">
                <div className="max-lg:w-[200px] listAllBtn navAddsTx underline cursor-pointer flex justify-end">List All Destinations</div>
                {/* <div className="navSearch">
                    <img className="searchSvg w-[30px] h-[30px] cursor-pointer" src="images/search.svg" alt="" />
                </div> */}
            </div>
        </div>
        </>
    )
}
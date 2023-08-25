function Nav() {
    return (
    <nav className="bg-alt h-[80px] flex justify-between items-center fixed w-full p-5 z-10">
        <div>
            <i className="fa-solid fa-chevron-left text-white text-2xl align-top"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h3 className="w-[220px] text-center text-white text-2xl font-bold">Product Name</h3>
            <h5 className="w-[220px] text-center text-white">Producer</h5>
        </div>
        <div>
            <i className="fa-regular fa-bookmark text-white text-2xl align-top"></i>
        </div>
    </nav>
    )
}

export default Nav;


export default function Header() {
  return (
    <nav className="fixed top-0 w-full min-h-[40px] bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-2">
       
  
          <div className='flex items-center'>
            <img className='w-16' src="/logo-ship.png" alt="" />
            <h1 className='font-bold text-xl'>SHIP<span className='text-teal '>ZO</span></h1>
           
          </div>
       
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-teal transition-colors ">About</a>
          <a href="#services" className="text-gray-700 hover:text-teal transition-colors">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-teal transition-colors">Contact</a>
          <img className="w-6 h-6  " src="/uae-flag.png" alt="UAE" />
        </div>
        <div className="flex items-center gap-3">
           
            
            <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-teal  text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Get Quote
            </button>
          </div>
      </div>
    </div>
  </nav>
  )
}

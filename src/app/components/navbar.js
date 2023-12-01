const Navbar = () => {
  return (
    <div className="navbar md:px-24 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Home</a></li>
            <li> <a> Services</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact</a></li>
          </ul>
        </div>
        <img className="nav-logo h-16" src="/img/logo.png" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex font-sans items-center space-x-11 py-3 px-48">
          <a href="/"><li>Home</li></a>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="py-2 px-5 border rounded-xl bg-gray-600 text-white border-white hover:bg-orange-600">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Navbar;
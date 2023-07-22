function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="shadow-md w-full dark:bg-gray-900 bottom-0 items-center">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright ⓒ {year}</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;
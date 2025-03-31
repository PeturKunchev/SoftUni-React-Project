import './Loader.css'
export default function Loader() {
  return (
    <>
    <header className="header">
        <nav>

                        <div className="nav">

                            <h1><img className="logo"src="/bookLogo.png" alt="Logo" /></h1>
                                <h2 className='please'>Please wait while server is loading :)</h2>
                        </div>
            </nav>
     </header>
    <div className='loader-container'>
    <span className="loader"></span>
    </div>
    </>
  );
}
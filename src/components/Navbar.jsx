import { styles } from "../styles";
import { logo } from '../assets';

const Navbar = () => {

      return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
                                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-black text-[18px] font-bold cursor-pointer flex'>
                        
                        <span className='sm:block hidden'>Image &nbsp; </span>
                         Uploader &nbsp; 
                    </p>

          </div>

        </nav>
    )
}

export default Navbar;
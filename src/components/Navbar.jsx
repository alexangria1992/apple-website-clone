import styles from './Navbar.module.css';
import { appleImg } from '../utils';
import { searchImg } from '../utils';
import { bagImg } from '../utils';
import { navLists } from '../constants';
const Navbar = () => {
  return (
    <header className={styles.navbarHeader}>
      <nav className={styles.navbarItems}>
        <img src={appleImg} alt='' width={14} height={18} />
        <div className={styles.navbarLinksWrapper}>
          {navLists.map((nav) => (
            <div key={nav} className={styles.navbarLinks}>
              {nav}
            </div>
          ))}
        </div>

        <div className={styles.navbarIcons}>
          <img src={searchImg} alt='' width={18} height={18} />
          <img src={bagImg} alt='' width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

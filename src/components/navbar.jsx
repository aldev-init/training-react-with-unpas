import styles from '../assets/css/navbar.module.css';

const defaultNavItems = ["Home", "Message","Profile"];

// eslint-disable-next-line react/prop-types
function Navbar({navItems, title}){

    const items = navItems ? navItems : defaultNavItems;
    const titleName = title ? title : "TwitTwit.com";

    return (
        <header className={styles.navContainer}>
            <h3>{titleName}</h3>
            <div className={styles.navItem}>
                <ul>
                    {
                        items.map((element,index) => (
                          <li key={element+'_'+index}>{element}</li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar;
import React from 'react'
import navbarCss from "../../styles/navbar.module.css"
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
    const { t, i18n } = useTranslation();

    const clickHandle = async lang => {
        await i18n.changeLanguage(lang)
    }
    return (

        <header>
            <nav className={navbarCss.nav}>
                <div className={navbarCss.nav_left_nav_right_container}>
                    <div className={navbarCss.nav_left}>
                        <h1>Start Bootstrap</h1>
                    </div>
                    <div className={navbarCss.nav_medium}>
                        <ul className={navbarCss.nav_medium_list}>
                            <li className={navbarCss.nav_medium_list_item}>
                                <a href='/'>{t('Home')}</a>
                            </li>
                            <li className={navbarCss.nav_medium_list_item}>
                                <a href='/about'>{t('About')}</a>
                            </li>
                            <li className={navbarCss.nav_medium_list_item}>
                                <a href='/contact'>{t('Contact')}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outlined" id="dropdown-basic">
                               <LanguageIcon/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/en" onClick={() => clickHandle('en')}>{t('English')}</Dropdown.Item>
                                <Dropdown.Item href="#/tr" onClick={() => clickHandle('tr')}>{t('Turkish')}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <button className="btn btn-outline-dark card-button" type="submit">
                        <div className={navbarCss.card_button}>
                            <i class="fa-solid fa-cart-shopping"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </div>

                    </button>
                    


                </div>
            </nav>
        </header>

    )
}

export default Navbar
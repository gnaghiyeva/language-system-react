import React from 'react'
import footerCss from '../../styles/footer.module.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
        <div className={footerCss.footer_container}>
            <article className={footerCss.footer_article}> 
                <p>{t('Copyright')} © {t('Your Website')} 2023</p>
                <p></p>
            </article>
        </div>
    </footer>
  )
}

export default Footer
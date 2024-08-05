import React from 'react'
import heroCss from "../../styles/hero.module.css"
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t, i18n } = useTranslation();

  const clickHandle = async lang =>{
    await i18n.changeLanguage(lang)
}

  return (
    <div className={heroCss.hero_container}>
        <article className={heroCss.hero_article}>
            <h1>{t('Shop in style')}</h1>
            <p>{t('With this shop hompeage template')}</p>
        </article>
    </div>
  )
}

export default Hero
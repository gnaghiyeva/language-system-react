import React from 'react'
import desertjpg from "../../assets/desert.jpg"
import Grid from '@mui/material/Grid';
import AboutCSS from '../../styles/about.module.css'
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t, i18n } = useTranslation();

  return (
    <section  className={AboutCSS.about_section}>
       <Grid container spacing={2}>
            <Grid item md={6} className={AboutCSS.image_container}>
                <img src={desertjpg} className={AboutCSS.image} />
            </Grid>

            <Grid item md={6}>
                <article className={AboutCSS.about_article}>
                    <h4>{t('Welcome to Shopping')}</h4>
                    <h2>{t('5 Years of Experience in Industry')}</h2>
                    <h6>{t('We are ready to build your dream home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, beatae.')}</h6>
                    <p>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repudiandae odit dolorum quis laudantium impedit beatae perferendis natus, hic libero sed atque quibusdam possimus error, voluptate est molestiae doloremque necessitatibus illum rerum sunt! Ad sunt obcaecati voluptatem sint sequi quos, qui non deleniti a praesentium, sapiente accusantium odit.')}</p>
                </article>
            </Grid>
        </Grid>
    </section>
  )
}

export default About
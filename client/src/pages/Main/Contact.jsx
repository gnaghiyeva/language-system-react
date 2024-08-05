import React from 'react'
import Grid from '@mui/material/Grid';
import ContactCSS from '../../styles/contact.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className={ContactCSS.contact_section}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12} className={ContactCSS.contact_left}>
                    <article className={ContactCSS.article}>
                        <div>
                            <div className={ContactCSS.address_icon}>
                                <i class="fa-solid fa-location-dot"></i>
                                <h2>{t('Address')}</h2>
                            </div>
                            <p className={ContactCSS.article_parag}>{t('Baku, Azerbaijan')}</p>
                        </div>

                        <div>
                            <div className={ContactCSS.address_icon}>
                                <i class="fa-solid fa-phone"></i>
                                <h2>{t('Lets Talk')}</h2>
                            </div>
                            <p className={ContactCSS.article_parag}>050555555</p>
                        </div>

                        <div>
                            <div className={ContactCSS.address_icon}>
                                <i class="fa-solid fa-envelope"></i>
                                <h2>{t('General Support')} </h2>
                            </div>
                            <p className={ContactCSS.article_parag}>contact@gmail.com</p>
                        </div>
                    </article>
                </Grid>

                <Grid item md={6} xs={12} className={ContactCSS.contact_right}>
                    <h2>{t('Send Us A Message')}</h2>
                    <form>
                        <div className={ContactCSS.contact_field}>
                            <label for="exampleFormControlTextarea1">{t('Tell Us Your FullName')}</label><br />
                            <TextField id="outlined-basic" label={t('First Name')} variant="outlined" />
                            <TextField id="outlined-basic" label={t('Last Name')} variant="outlined" />
                        </div>
                        <div className={ContactCSS.contact_field}>
                            <label for="exampleFormControlTextarea1">{t('Enter Your Email')}</label>
                            <TextField fullWidth id="outlined-basic" label="Eg.example@email.com" variant="outlined" type='email' />
                        </div>
                        <div className={ContactCSS.contact_field}>
                            <label for="exampleFormControlTextarea1">{t('Enter Phone Number')}</label>
                            <TextField fullWidth id="outlined-basic" label="Eg.05555555" variant="outlined" type='phone' />

                        </div>
                        <div class="form-group" className={ContactCSS.contact_field}>
                            <label for="exampleFormControlTextarea1">{t('Message')}</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={t('Write us a message')}></textarea>
                        </div>

                        <div className={ContactCSS.button_container}>
                            <Button variant="contained" color='success'>{t('SEND MESSAGE')}</Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </section>
    )
}

export default Contact
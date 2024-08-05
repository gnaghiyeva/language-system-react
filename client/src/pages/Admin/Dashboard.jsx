import React from 'react'
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
const { t, i18n } = useTranslation();

  return (
    <>
    <h3>Dashboard</h3>

    <a href='/admin/products'>{t('Products')}</a>
    </>
  )
}

export default Dashboard
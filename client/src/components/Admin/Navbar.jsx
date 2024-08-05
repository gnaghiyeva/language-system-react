import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import LanguageIcon from '@mui/icons-material/Language';
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
      await i18n.changeLanguage(lang)
  }
 

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Link to='/admin/add-product' style={{color:'white', textDecoration:'none'}}>{t('Add Product')}</Link> 
        </Typography>
        <Button color="inherit">{t('Login')}</Button>

        <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outlined" id="dropdown-basic">
                               <LanguageIcon/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/en" onClick={() => clickHandle('en')}>English</Dropdown.Item>
                                <Dropdown.Item href="#/tr" onClick={() => clickHandle('tr')}>Turkish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
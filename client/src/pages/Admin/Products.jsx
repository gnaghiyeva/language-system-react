import React,{ useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteProduct, getAllProducts } from '../../api/requests';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t, i18n } = useTranslation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  const getTitle = (product) => {
    // Kullanıcının diline göre başlığı döndür
    const language = i18n.language;
    if (language === 'tr') {
        return product.title_tr;
    } else {
        return product.title_en;
    }
};


  const handleDelete = (productID)=>{
    deleteProduct(productID).then(()=>{
      setProducts(products.filter(product=>product.id!==productID))
    })
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>{t('Name')}</TableCell>
          <TableCell align="right">{t('Rating')}</TableCell>
          <TableCell align="right">{t('Price Range')}</TableCell>
          <TableCell align="right">{t('Original Price')}</TableCell>
          <TableCell align="right">{t('Discounted Price')}</TableCell>
          <TableCell align="right">{t('On Sale')}</TableCell>
          <TableCell align="right">{t('Delete')}</TableCell>
          <TableCell align="right">{t('Edit')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row"  key={product.id}>
            {getTitle(product)}
            </TableCell>
            <TableCell align="right">{product.rating}</TableCell>
            <TableCell align="right">{product.priceRange}</TableCell>
            <TableCell align="right">{product.originalPrice}</TableCell>
            <TableCell align="right">{product.discountedPrice}</TableCell>
            <TableCell align="right">{product.onSale ? t("true"):t("false")}</TableCell>
            <TableCell align="right"><DeleteIcon onClick={() => handleDelete(product.id)}/></TableCell>
            <TableCell align="right"><Link style={{color:'black'}} to={`/admin/products/${product.id}`}><EditIcon/></Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
  
}

export default Products
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/requests';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const { i18n } = useTranslation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res);
            console.log(res);
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

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(products));
    },[products])
    return (
        <Grid container spacing={2} style={{marginTop:'50px', marginBottom:'50px'}}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <div className="card">
                        <img className="card-img-top" src={product.photoUrl} alt={product.photoUrl} style={{position:'relative', height:'300px'}} />
                        <Button style={{display: product.onSale ? 'flex':'none', position:'absolute', left:'0'}} variant="outlined">{product.onSale ? i18n.t("SALE") : ""}</Button>
                        <div className="card-body" style={{height:'200px'}} >
                            <h5 className="card-title" >{getTitle(product)}</h5>
                            <p className="card-text" style={{ display: product.rating ? 'flex' : 'none' }}>
                                <Rating name="read-only" value={product.rating ?  product.rating : ""} readOnly />                                                            
                            </p>
                            <p className="card-text" style={{ display: product.priceRange ? 'flex' : 'none' }}>
                                {product.priceRange ? i18n.t("Price Range:") + ` ${product.priceRange}` : ""}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className="card-text" style={{ display: (product.originalPrice || product.discountedPrice) ? 'flex' : 'none' }}>
                                    {product.originalPrice ? i18n.t("Original Price:") + ` ${product.originalPrice}` : ""}
                                    {product.discountedPrice ? i18n.t("Discounted Price:") + ` ${product.discountedPrice}` : ""}
                                </p>        
                            </div>
                            <a href="!#" className="btn btn-primary">{i18n.t("Add to Cart")}</a>
                        </div>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default Products;

import React, { useEffect, useState } from 'react'
import AddProductCss from '../../styles/addproduct.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct, getProductByID } from '../../api/requests';
import { useTranslation } from 'react-i18next';
const EditProduct = () => {
  const { t, i18n } = useTranslation();

    const{id} = useParams();
    const navigate = useNavigate();
    const[product,setProduct]=useState([]);

    useEffect(()=>{
        getProductByID(id).then(res=>{
            console.log(res);
            setProduct(res)
        })
    },[id]);

    function handleSubmit(){
        editProduct(id,product);
        navigate('/admin/products')
    }

    function handleChange(e){
        setProduct({...product, [e.target.name]:e.target.value})
      }

  return (
    <>
    <article className={AddProductCss.add_product_article_container}>
        <h1>{t('Edit Product')}</h1>
      </article>
      <form className={AddProductCss.add_product_form} onSubmit={(e)=>handleSubmit(e)} >
       
        <div className="form-group">
          <label>{t('Name')}</label>
          <input type="text" className="form-control" name='title' value={product.title} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Photo')}</label>
          <input type="text" className="form-control" name='photoUrl' value={product.photoUrl} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Rating')}</label>
          <input type="number" min={1} max={5} className="form-control" name='rating' value={product.rating} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Price Range')}</label>
          <input type="text" className="form-control" name='priceRange' value={product.priceRange} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Original Price')}</label>
          <input type="number" className="form-control" name='originalPrice' value={product.originalPrice} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Discounted Price')}</label>
          <input type="number" className="form-control" name='discountedPrice' value={product.discountedPrice} onChange={(e)=>handleChange(e)}/>
        </div>
        <label>
        {t('On Sale')}:
          <input name="onSale" type="checkbox" checked={product.onSale} onChange={(e) => setProduct({ ...product, onSale: e.target.checked })} />
        </label>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      </>
  )
}

export default EditProduct
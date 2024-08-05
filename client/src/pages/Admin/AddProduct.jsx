import React, { useState} from 'react';
import AddProductCss from "../../styles/addproduct.module.css";
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../api/requests';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

// const AddProduct = () => {
//   const [newProduct, setNewProduct] = useState({
//     id: '',
//     title: '',
//     photoUrl: '',
//     rating: '',
//     priceRange: '',
//     originalPrice: '',
//     discountedPrice: '',
//     onSale: false
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedData = localStorage.getItem('formData');
//     if (savedData) {
//       setNewProduct(JSON.parse(savedData));
//     }
//   }, []);
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addProduct(newProduct);
//     setNewProduct({
//       id: '',
//       title: '',
//       photoUrl: '',
//       rating: '',
//       priceRange: '',
//       originalPrice: '',
//       discountedPrice: '',
//       onSale: false
//     });
//     navigate('/admin/products'); // Replace with your desired route after adding the product
//   };

//   return (
//     <>
//       <article className={AddProductCss.add_product_article_container}>
//         <h1>Add Product</h1>
//       </article>
//       <form className={AddProductCss.add_product_form} onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Product ID</label>
//           <input type="text" className="form-control" name='id' value={newProduct.id} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" className="form-control" name='title' value={newProduct.title} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Photo</label>
//           <input type="text" className="form-control" name='photoUrl' value={newProduct.photoUrl} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Rating</label>
//           <input type="number" min={1} max={5} className="form-control" name='rating' value={newProduct.rating} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Price Range</label>
//           <input type="text" className="form-control" name='priceRange' value={newProduct.priceRange} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Original Price</label>
//           <input type="number" className="form-control" name='originalPrice' value={newProduct.originalPrice} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Discounted Price</label>
//           <input type="number" className="form-control" name='discountedPrice' value={newProduct.discountedPrice} onChange={handleChange} />
//         </div>
//         <label>
//           On Sale:
//           <input name="onSale" type="checkbox" checked={newProduct.onSale} onChange={(e) => setNewProduct({ ...newProduct, onSale: e.target.checked })} />
//         </label>
//         <button type="submit" className="btn btn-primary">Add</button>
//       </form>
//     </>
//   );
// };

// export default AddProduct;


const AddProduct = () => {
  const { t, i18n } = useTranslation();

  const [newProduct, setNewProduct] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    newProduct.id=uuidv4()
    await addProduct(newProduct);
  
    navigate('/admin/products'); // Replace with your desired route after adding the product
  };

  function handleChange(e){
    setNewProduct({...newProduct, [e.target.name]:e.target.value})
   }

  return (
    <>
      <article className={AddProductCss.add_product_article_container}>
        <h1>{t('Add Product')}</h1>
      </article>
      <form className={AddProductCss.add_product_form} onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label>{t('Name')}</label>
          <input type="text" className="form-control" name='title' value={newProduct.title} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Photo')}</label>
          <input type="text" className="form-control" name='photoUrl' value={newProduct.photoUrl} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Rating')}</label>
          <input type="number" min={1} max={5} className="form-control" name='rating' value={newProduct.rating} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Price Range')}</label>
          <input type="text" className="form-control" name='priceRange' value={newProduct.priceRange} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Original Price')}</label>
          <input type="number" className="form-control" name='originalPrice' value={newProduct.originalPrice} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group">
          <label>{t('Discounted Price')}</label>
          <input type="number" className="form-control" name='discountedPrice' value={newProduct.discountedPrice} onChange={(e)=>handleChange(e)}/>
        </div>
        <label>
          {t('On Sale')}:
          <input name="onSale" type="checkbox" checked={newProduct.onSale} onChange={(e) => setNewProduct({ ...newProduct, onSale: e.target.checked })} />
        </label> <br/>
        <button type="submit" className="btn btn-primary">{t('Add')}</button>
      </form>
    </>
  );
};

export default AddProduct;
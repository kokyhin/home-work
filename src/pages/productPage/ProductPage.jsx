import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  PageHeader, Button, Carousel, Image,
} from 'grommet';
import { Previous } from 'grommet-icons';
import Preloader from 'src/components/Preloader';
import useTitle from 'src/hooks/useTitle';
import axios from 'src/utils/axios';
import ProductPrice from 'src/components/ProductTile/components/ProductPrice';
import ProductRating from 'src/components/ProductTile/components/ProductRating';
import * as S from './ProductPage.style';

function ProductPage() {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.data);
  const [product, setProduct] = useState(null);

  useTitle(product?.title);

  async function fetchProduct(id) {
    const { data } = await axios.get(`/products/${id}`);
    setProduct(data);
  }

  useEffect(() => {
    const foundProduct = products.find((el) => el.id === +productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      fetchProduct(productId);
    }
  }, []);

  if (!product) {
    return (
      <Preloader />
    );
  }

  return (
    <S.Wrapper>
      <PageHeader
        title={product.title}
        subtitle={product.description}
        parent={(
          <NavLink className="back-btn" to="/">
            <Previous />
            Back
          </NavLink>
        )}
        actions={<Button label="Buy" primary />}
      />
      <Carousel fill className="carousel">
        {product.images.map((img) => (
          <Image fit="contain" key={img} src={img} />
        ))}
      </Carousel>
      <ProductPrice discount={product.discountPercentage} price={product.price} />
      <ProductRating rating={product.rating} />
    </S.Wrapper>
  );
}

export default ProductPage;

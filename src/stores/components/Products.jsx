import React from 'react';
import Mobiles from './Mobiles';
import Computers from './Computers';
import Watches from './Watches';
import Men from './Men';
import Woman from './Woman';
import Furniture from './Furniture';
import AC from './AC';
import Kitchen from './Kitchen';
import TV from './TV';
import Speakers from './Speakers';
import Books from './Books';
import Fridge from './Fridge';

const Products = ({ onProductClick }) => {
  return (
      <div>
        <Mobiles onProductClick={onProductClick} />
        <Computers onProductClick={onProductClick} />
        <Watches onProductClick={onProductClick} />
        <Men onProductClick={onProductClick} />
        <Woman onProductClick={onProductClick} />
        <Furniture onProductClick={onProductClick} />
        <AC onProductClick={onProductClick} />
        <Kitchen onProductClick={onProductClick} />
        <TV onProductClick={onProductClick} />
        <Speakers onProductClick={onProductClick} />
        <Books onProductClick={onProductClick} />
        <Fridge onProductClick={onProductClick} />
      </div>
  );
}
export default Products;
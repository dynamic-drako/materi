import {useState } from 'react';

import ItemProduct from './ItemProduct';

function ListProduct() {
  const [buah, setBuah] = useState(["Apel", "mangga", "jeruk", "Rambutan"]);
  
  return (
    <div>
      <ul>
        {buah.map((item, index) => (
          <ItemProduct key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ListProduct
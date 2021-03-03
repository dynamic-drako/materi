import {useState, useEffect} from 'react';

import ItemProduct from './ItemProduct';

function ListProduct() {
  const [buah, setBuah] = useState(["Apel", "mangga", "jeruk", "Rambutan"]);
  
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("Jalanin useEffect", num);
  }, [num]);

  return (
    <div>
      {/* TOmbol utk update */}
      <h1 onClick={() => setNum(num + 1)}>{num}</h1>
      <ul>
        {buah.map((item, index) => (
          <ItemProduct key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ListProduct
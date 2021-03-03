import {useState} from 'react';
import { Button } from 'react-bootstrap';

import Header from '../components/Header';
import ListProduct from '../components/ListProduct';

import MyModal from '../components/MyModal';

function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Header nama="Dynamic Draco"/>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <Header nama="Rendy"/>
      <Header nama="Suryanto"/> */}

      <main>
        <section></section>
      </main>
    </div>
  )
}

export default Home
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white' style={{ position: 'relative', zIndex: '1'  }}>
      <div className='text-center p-3 guide-text' style={{ backgroundColor: '#18394c', overflow: 'hidden' }}>
        © 2024 Copyright:
        <a className='guide-text' href='/'>
          All rights reserved.
        </a>
      </div>
    </MDBFooter>
  );
}
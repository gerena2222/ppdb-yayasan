import React from 'react';
import Hero2 from '../../components/hero2';
import MainLayout from '../../components/layout';
import Link from 'next/link';

const Sekolah = () => {
  return (
    <MainLayout>
      <Hero2 />
      <section className='py-5'>
        <div className="container">
          <div className="py-2 text-center">
            <h2 className='text-uppercase'>Pilih Sekolah</h2>
          </div>
          <section className='my-3 py-3'>
            <div className='row row-cols-1 row-cols-md-3 justify-content-center'>
              <div className='col mb-3'>
                <Link href="/pendaftaran/mi">
                  <a className='btn'>
                    <div className="card text-center shadow-lg" >
                      <div className="card-body">
                        <img src="/assets/image/logo1.png" className="card-img-top" height="280px" width="120px" alt="..." />
                        <h6 className="card-title mt-2 pt-2">Madrasah Ibtidaiyah <br />Yayasan Saddam Al-Abror</h6>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

              <div className='col mb-3'>
                <Link href="/pendaftaran/mts">
                  <a className='btn'>
                    <div className="card text-center shadow-lg" >
                      <div className="card-body">
                        <img src="/assets/image/logo1.png" className="card-img-top" height="280px" width="120px" />
                        <h6 className="card-title mt-2 pt-2">Madrasah Tsanawiyah <br />Yayasan Saddam Al-Abror</h6>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

              <div className='col'>
                <Link href="/pendaftaran/ma">
                  <a className='btn'>
                    <div className="card text-center shadow-lg" >
                      <div className="card-body">
                        <img src="/assets/image/logo1.png" className="card-img-top" height="280px" width="120px" alt="..." />
                        <h6 className="card-title mt-2 pt-2">Madrasah Aliyah <br /> Yayasan Saddam Al-Abror</h6>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

            </div>
          </section>
        </div>
      </section>
    </MainLayout>
  );
};
export default Sekolah

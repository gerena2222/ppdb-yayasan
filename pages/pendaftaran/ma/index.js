import React from 'react';
import Hero2 from '../../../components/hero2';
import MainLayout from '../../../components/layout';
import Link from 'next/link'
const Ma = () => {
  return (
    <MainLayout>
      <Hero2 />
      <section className='py-5'>
        <div className="container">
          <div className="py-2 text-center">
            <h2 className='text-uppercase'>Pilih Jalur</h2>
          </div>
          <section className='my-3 py-3'>
            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-5 text-black bg-light border border-2 rounded-3">
                  <h2>Jalur Umum</h2>
                  <p> Jalur pendaftaran yang dimana akan terbuka dan berasal dari seluruh siswa maupun siswi</p>
                  <Link href="/pendaftaran/ma/umum">
                    <a className="btn btn-success" type="button">Klik Disini</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-5 text-black bg-light border border-2 rounded-3">
                  <h2>Jalur Afirmasi</h2>
                  <p> Jalur yang memprioritaskan Pendaftar yang berasal dari keluarga ekonomi tidak mampu, yatim, yatim/piatu, mempunyai Kartu PIP dan PKH</p>
                  <Link href="/pendaftaran/ma/afirmasi">
                    <a className="btn btn-success" type="button">Klik Disini</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </MainLayout>
  );
};
export default Ma

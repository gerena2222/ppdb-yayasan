import React from 'react';
import Hero2 from '../../../../components/hero2';
import MainLayout from '../../../../components/layout';

const Afirmasi = () => {
  return (
    <MainLayout>
      <Hero2 />
      <section className='py-5'>
        <div className="container">
          <div className="py-2 text-center">
            <h2 className='text-uppercase'>Pendaftaran Madrasah Tsanawiyah Yayasan Saddam Al-Abror</h2>
          </div>
          <section className='mt-3 pt-3'>
            <div className="card mb-4">
              <div className="card-body">
                <form >
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <div className='row mb-3'>
                        <div className='col-md-6'>
                          <label className='mb-2'>Sekolah </label>
                          <input className="form-control" type="text" disabled value="MTS Yayasan Saddam Al-Abror" />
                        </div>
                        <div className='col-md-6'>
                          <label className='mb-2'>Jalur </label>
                          <input className="form-control" type="text" disabled value="Afirmasi" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className='mb-2'>Nama Lengkap </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="mb-3">
                        <label className='mb-2'>Alamat </label>
                        <textarea className="form-control" type="text" />
                      </div>
                      <div className='row mb-3'>
                        <div className='col-md-4'>
                          <label className='mb-2'>Jenis Kelamin </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className='col-md-4'>
                          <label className='mb-2'>Tanggal Lahir </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className='col-md-4'>
                          <label className='mb-2'>No Handphone Yang Dapat Dihubungi </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-md-6'>
                          <label className='mb-2'>Nama Orang Tua/Wali </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className='col-md-6'>
                          <label className='mb-2'>No Handphone Orang Tua/Wali Yang Dapat Dihubungi </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className='mb-2'>Upload Bukti Surat Keterangan Bila Yatim Piatu/Tidak Mampu/PKH/KIP  </label>
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                    <div className="mt-3 mb-0">
                      <div className="d-grid"><button className="btn btn-primary btn-block">Submit</button></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div className="alert alert-info" role="alert">
            Informasi Pengumuman Akan Dikabarkan Via Whatsapp atau <a className='btn btn-success '><i className='fab fa-whatsapp'>Klik Disini</i></a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Afirmasi

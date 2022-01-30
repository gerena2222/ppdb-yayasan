import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <section>
      <div className="p-5 text-center bg-image rounded-3 hero">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h2 className="mb-3 text-uppercase">PORTAL PENDAFTARAN</h2>
            <h1 className="mb-3 text-uppercase">PESERTA DIDIK BARU</h1>
            <h4 className="mb-3 text-uppercase">Yayasan Saddam AL-Abror</h4>
            <Link href="/pendaftaran">
              <a className="btn btn-primary btn-lg text-uppercase" role="button">Daftar Sekarang</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero
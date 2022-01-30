import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-dark">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="fb btn btn-primary btn-floating m-1"
            href="#!"
            role="button"
          ><i className="fab fa-facebook-f"></i
          ></a>

          <a
            className="wa btn btn-primary btn-floating m-1"
            href="#!"
            role="button"
          ><i className="fab fa-whatsapp"></i
          ></a>

          <a
            className="ig btn btn-primary btn-floating m-1"
            href="#!"
            role="button"
          ><i className="fab fa-instagram"></i
          ></a>
        </section>
      </div>

      <div className=" text text-center p-3 text-white">
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">by Ahmad Irsadi</a>
      </div>

    </footer>
  );
};
export default Footer

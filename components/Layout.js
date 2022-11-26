import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>UserBank</title>
      </Head>
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;

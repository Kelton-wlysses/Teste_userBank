import Link from 'next/link';

import { Container } from './styles';

import bg from '../../assets/images/background.png'

const NavBarMain = () => {
  return (
    <Container>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
        className='background'>

          <nav>
            <div className='logo'>
              <h1>User Bank</h1>
            </div>

            <ul className='menu'>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Sobre</Link>
              </li>
            </ul>
          </nav>

          <h1 className='title'>
            Banco de usuários, encontre o talento que você quiser.
          </h1>
      </div>
    </Container>
  );
};
export default NavBarMain;

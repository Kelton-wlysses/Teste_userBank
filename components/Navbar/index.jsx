import Link from 'next/link';

import { Container } from './styles';

import bg from '../../assets/images/background.png'

const NavBar = () => {
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
        className='background'
      >
        <nav>
          <div className='logo'>
            <p>User Bank</p>
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
      </div>
    </Container>
  );
};
export default NavBar;

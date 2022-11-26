import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';


const Card = ({ user, index}) => {

  console.log(user)

  return (
    <Container>
      <Image
        src={`${user.picture.thumbnail}`}
        width={175}
        height={175}
        alt={user.name.first}
      />
      <div>
        <h2 className='title'>
          {`${user.name.first} ${user.name.last}`}
        </h2>
        <p>
          País:
          <span>{user.location.country}</span>
        </p>
        <p>
          Cidade:
          <span>{user.location.city}</span>
        </p>
        <p>
          Celular:
          <span>{user.cell}</span>
        </p>
        <p>
          Email:
          <span>{user.email}</span>
        </p>
      </div>
      <Link  legacyBehavior href={`/user/${index}`}>
        <a className='btn' >
          Ver mais
        </a> 
      </Link>
    </Container>
  );
};
export default Card;

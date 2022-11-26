import Image from 'next/image';
import { useRouter } from 'next/router';
import NavBar from '../../components/Navbar';
import { Container } from './styles';

const Pokemon = () => {
  const router = useRouter();
  
  let userList = [];

  if (typeof window !== 'undefined') {
    userList = JSON.parse(localStorage.getItem('users'));
  }

  const userFound = userList.find((user) => user.id === Number(router.query.userId))

  return (
    <Container>
      <NavBar />
      <div className='content'>
        <figure>
          <Image
            src={`${userFound?.picture.large}`}
            width={100}
            height={100}
            alt={userFound?.name.first}
          />
          <h2>{`${userFound?.name.first} ${userFound?.name.last}`}</h2>
        </figure>
        <div className='infos'>
          <div className='up'>
            <div className='pessoal'>
              <h2>Informações pessoais</h2>
              <p>
                Gênero:
                <span>{userFound?.gender}</span>
              </p>
              <p>
                Idade:
                <span>{userFound?.registered.age}</span>
              </p>
            </div>
            <div className='contato'>
              <h2>Contato</h2>
              <p>
                Email:
                <span>{userFound?.email}</span>
              </p>
              <p>
                Celular:
                <span>{userFound?.cell}</span>
              </p>
            </div>
          </div>

          <div className='down'>
            <div className='cadastro'>
              <h2>Cadastro</h2>
              <p>
                Username:
                <span>{userFound?.login.username}</span>
              </p>
              <p>
                uuid:
                <span>{userFound?.login.uuid}</span>
              </p>
            </div>

            <div className='endereco'>
              <h2>Endereço</h2>
              <p>
                País:
                <span>{userFound?.location.country}</span>
              </p>
              <p>
                Cidade:
                <span>{userFound?.location.city}</span>
              </p>
              <p>
                Rua:
                <span>
                  {`${userFound?.location.street.number} ${userFound?.location.street.name}`}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Pokemon;

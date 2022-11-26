import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { BsArrowDownCircle } from 'react-icons/bs';
import NavBarMain from '../components/NavbarMain';


export async function getStaticProps() {

  const api = `https://randomuser.me/api/?results=100`;

  const res = await fetch(api);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      users: data.results,
    },
  };
}

export default function Home({ users }) {

  const { usersList, setUsersList } = useContext(UserContext);
  setUsersList(users)

  if(typeof window !== 'undefined'){
    localStorage.setItem('users', JSON.stringify(usersList))
  }
  
  return (
    <>
      <NavBarMain />
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Descobrir
          <BsArrowDownCircle />
        </h1>
      </div>

      <div className={styles.pokemon_container}>
        {usersList?.map((user, index) => (
            <Card key={index} user={user} index={index+1}/>
        ))}
      </div>
    </>
  );
}

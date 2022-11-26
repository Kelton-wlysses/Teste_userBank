import Image from 'next/image';
import NavBar from '../components/Navbar';

import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <NavBar />
      <h1>Sobre o Projeto</h1>
      <p>
        Teste tecnico feito por kelton para a vaga de front end, onde tive que fazer consumo de API ramdonuser..
      </p>
    </div>
  );
};
export default About;

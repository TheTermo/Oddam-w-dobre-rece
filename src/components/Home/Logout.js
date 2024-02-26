import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import decorationImg from '../../assets/Decoration.svg';
import '../../scss/_Logout.scss';
import HomeHeader from "./HomeHeader";

const Logout= () => {
  return (
    <section className='login' id='login'><HomeHeader />
      <Container maxWidth="xs" xs={12}>
        <div className='login-container'>
          <h1>Wylogowanie nastąpiło pomyślnie</h1>
          <img src={decorationImg} alt='decoration icon' className='decoration_img'/>
          <div className='login-buttons'>
            <Link to='/'>
              <Button className='second-btn'>Strona Główna</Button>
            </Link>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Logout;

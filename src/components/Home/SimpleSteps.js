import decoration_img from '../../assets/Decoration.svg';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';
import { Link } from 'react-router-dom';
import "../../scss/_SimpleSteps.scss";

const SimpleSteps = () => {
    return (
        <section className='simple_steps' id='simplesteps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
            <div className='container'>
                <div className='icons'>
                    <div className='icon1'>
                        <img src={icon1} alt='shirt icon' className='shirt_icon'/>
                        <h3 className='icons_title'>Wybierz rzeczy</h3>
                        <p className='icon_description'>ubrania, zabawki,<br></br>sprzęt i inne</p>
                    </div>
                    <div className='icon2'>
                        <img src={icon2} alt='bag icon' className='bag_icon'/>
                        <h3 className='icons_title'>Spakuj je</h3>
                        <p className='icon_description'>skorzystaj z<br></br>worków na śmieci</p>
                    </div>
                    <div className='icon3'>
                        <img src={icon3} alt='magnifier icon' className='magnifier_icon'/>
                        <h3 className='icons_title'>Zdecyduj komu <br></br> chcesz pomóc</h3>
                        <p className='icon_description'>wybierz zaufane miejsce</p>
                    </div>
                    <div className='icon4'>
                        <img src={icon4} alt='arrows icon' className='arrows_icon'/>
                        <h3 className='icons_title'>Zamów kuriera</h3>
                        <p className='icon_description'>kurier przyjedzie<br></br>w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <Link to="/login">
                <button className='btn button_simplesteps'>ODDAJ RZECZY</button>
            </Link>
        </section>
    );
};

export default SimpleSteps;
import { Fragment, useContext } from 'react';
import mealsImage from '../../assets/meals.jpg';
import { CartContext } from '../Store/CartProvider';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart}/>
   
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
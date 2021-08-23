import style from './style.module.scss';

const ButtonPrimary: React.FC = ({ children }) => {
   return (
      <button className={style.buttonPrimary}>{children}</button>
   );
}

export default ButtonPrimary;
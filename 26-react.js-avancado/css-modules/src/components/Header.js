import style from './Header.module.css'

const Header = () => {
   return (
      <div className={style.header}>
         <h1>Bem-vindo!</h1>
         <button className={style.btn}>Botão teste</button>
      </div>
   )
}

export default Header

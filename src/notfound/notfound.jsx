import style from './notfound.module.css'
export  function NotFound() {
  return (
    <>

      <div className={" flex flex-col items-center justify-center " +  style.NotFound}>
          <div className={style.number }>404</div>
          <div className={style.text}><span>Ooops...</span><br/>page not found</div>
          <a className={style.me} href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank"></a>
          <button className={style.GoBack}>Go Back</button>
      </div>
    </>
  )
}

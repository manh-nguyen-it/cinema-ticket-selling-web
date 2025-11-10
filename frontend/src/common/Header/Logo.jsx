import style from './style.module.css'

function Logo() {
    return (
        <div className={`${style.logo} ${style.topLevelHeaderItem}`}>
            <a href=""><div style={{fontSize: "200%"}}>Logo</div></a>
        </div>
    )
}

export default Logo;
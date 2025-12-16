import style from './style.module.css'

function Buttons() {
    return (
        <div className={style.topLevelHeaderItem}>
            <button>Đăng nhập</button>
            <button>Đăng kí</button>
            <button>Hiện thêm</button>
        </div>
    )
}

export default Buttons;
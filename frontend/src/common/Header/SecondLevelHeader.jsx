import style from './style.module.css'

function SecondLevelHeader() {
    return (
        <div class={style.secondLevelHeader}>
            <div class={style.secondLevelHeaderItem}>
                <button>Đặt vé</button>
                <button>Đặt bắp nước</button>
            </div>
            <div class={style.secondLevelHeaderItem}>
                <input type="text" placeholder="Tìm kiếm phim"/>
            </div>
        </div>
    )
}

export default SecondLevelHeader;
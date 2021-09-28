import React from 'react';
import Styles from './SocialLoginTypeItem.module.css'

const SocialLoginTypeItem = () => {
    return (
        <div className={Styles.loginTypeItem}>
            <p>Comiruをすでに友達に追加済みの方<br />以下のアイコンをクリックしてログイン</p>
            <img src="https://comiru.jp/img/btn_base.png" alt="" />
        </div>
    )
}

export default SocialLoginTypeItem;
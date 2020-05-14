import React from "react";
import s from "./HeaderBlock.module.css";

import { ReactComponent as ReactLogoSvg} from '../../logo.svg';

const HeaderBlock = () => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <h1 className={s.header}>
                    Учите английский онлайн
                </h1>
                <ReactLogoSvg />
                <p className={s.descr}>Учите слова используя карточки</p>
            </div>
        </div>
    )
}

export default HeaderBlock;
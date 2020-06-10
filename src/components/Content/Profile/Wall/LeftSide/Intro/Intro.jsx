import React from "react";
import s from './intro.module.css'

import inst from '../../../../../../icons/Social/instagram.png'
import vk from '../../../../../../icons/Social/vk.png'
import telega from '../../../../../../icons/Social/social-media.png'


const Intro = () => {
    return (
        <div className={s.intro_wrapper}>
            <div className={s.title}>Profile Intro</div>
            <div className={s.info}>
                <div className={s.about}>
                    <div className={s.about_title}>About Me</div>
                    <div className={s.description}>Hi, I’m Daniyal, I’m 21 and I work as a Digital Designer for the
                        “Daydreams” Agency in Pier 56.
                    </div>
                </div>
                <div className={s.fav_tv}>
                    <div className={s.fav_tv_title}>Favourite TV Shows</div>
                    <div className={s.description}>Breaking Good, RedDevil, People of Interest, The Running Dead, Found,
                        American Guy.
                    </div>
                </div>

                <div className={s.fav_music}>
                    <div className={s.fav_tv_title}>Favourite Music Bands / Artists</div>
                    <div className={s.description}>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a
                        Revenge.
                    </div>
                </div>
            </div>

            <div className={s.social_wrapper}>
                <div className={s.social_title}>Other Social Networks</div>
                <div className={s.links}>
                    <div className={s.social_icon}>
                        <a href='https://www.instagram.com/m_daniiyal/'>
                            <img src={inst} alt='instagram'/>
                        </a>
                    </div>
                    <div className={s.social_icon}>
                        <a href='https://vk.com/m.daniyal'>
                            <img src={vk} alt='vk'/>
                        </a>
                    </div>
                    <div className={s.social_icon}>
                        <a href='https://t.me/m_daniiyal'>
                            <img src={telega} alt='telega'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
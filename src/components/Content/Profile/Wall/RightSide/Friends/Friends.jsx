import React from "react";
import s from './friends.module.css'

import friend1 from '../../../../../../icons/Friends/7m4yw6q0xYc.jpg'
import friend2 from '../../../../../../icons/Friends/COae6kMYArM.jpg'
import friend3 from '../../../../../../icons/Friends/dr8xFwUY64k.jpg'
import friend4 from '../../../../../../icons/Friends/Kr-ZdXZ1Nv4.jpg'
import friend5 from '../../../../../../icons/Friends/mPsedtThu-g.jpg'
import friend6 from '../../../../../../icons/Friends/r7DXtbhN14c.jpg'
import friend7 from '../../../../../../icons/Friends/xbdZ0LW55sw.jpg'
import friend8 from '../../../../../../icons/Friends/xzPnEDN6D7E.jpg'
import friend9 from '../../../../../../icons/Friends/z8oRTncuDxY.jpg'

const Friends = () => {
    return (
        <div className={s.friends_wrapper}>
            <div className={s.title}>Friends</div>
            <div className={s.list}>
                <div className={s.friend}><img src={friend1} alt='friend'/></div>
                <div className={s.friend}><img src={friend2} alt='friend'/></div>
                <div className={s.friend}><img src={friend3} alt='friend'/></div>
                <div className={s.friend}><img src={friend4} alt='friend'/></div>
                <div className={s.friend}><img src={friend5} alt='friend'/></div>
                <div className={s.friend}><img src={friend6} alt='friend'/></div>
                <div className={s.friend}><img src={friend7} alt='friend'/></div>
                <div className={s.friend}><img src={friend8} alt='friend'/></div>
                <div className={s.friend}><img src={friend9} alt='friend'/></div>
                <div className={s.friend}><img src={friend1} alt='friend'/></div>
                <div className={s.friend}><img src={friend2} alt='friend'/></div>
                <div className={s.friend}><img src={friend3} alt='friend'/></div>
                <div className={s.friend}><img src={friend4} alt='friend'/></div>
                <div className={s.friend}><img src={friend5} alt='friend'/></div>
                <div className={s.friend}><img src={friend6} alt='friend'/></div>
                <div className={s.friend}><img src={friend7} alt='friend'/></div>
                <div className={s.friend}><img src={friend8} alt='friend'/></div>
                <div className={s.friend}><img src={friend9} alt='friend'/></div>
            </div>
        </div>
    )
}

export default Friends
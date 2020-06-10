import React from "react";
import s from './post.module.css'
import ava from './../../../../../../images/RnCm75LYiXQ.jpg'
import like from '../../../../../../icons/Social/like.png'
import comment from '../../../../../../icons/Social/comment.png'
import repost from '../../../../../../icons/Social/transfer-data.png'


const Post = (props) => {
    return (
        <div className={s.post_wrapper}>
            <div className={s.title}>
                <div className={s.ava}><img src={ava} alt='sdf'/></div>
                <div className={s.name}>Daniyal Magomedov</div>
                <div className={s.time}>{props.time} ago</div>
                <div className={s.parameters}>---</div>
            </div>
            <div className={s.content}>{props.content}
            </div>
            <div className={s.stats}>
                <div className={s.stat}>
                    <div className={s.icon}><img src={like} alt='like'/> </div>
                    <div className={s.number}>{props.likeCount}</div>
                </div>
                <div className={s.stat}>
                    <div className={s.icon}><img src={comment} alt='comment'/> </div>
                    <div className={s.number}>{props.commentCount}</div>
                </div>
                <div className={s.stat}>
                    <div className={s.icon}><img src={repost} alt='repost'/> </div>
                    <div className={s.number}>{props.repostCount}</div>
                </div>
            </div>
        </div>
    )
}

export default Post
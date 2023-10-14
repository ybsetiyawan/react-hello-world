import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorUNXZ5IQx_iESdnHZqei3PoiPuD6oHbVALBI4aeRzyiZpLS_igI_uUtTUFlxOpekYg4&usqp=CAU" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="tittle">{props.tittle}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    tittle: 'Belum Ada Judul',
    desc: 'Belum Pernah di Tonton'
}

export default YoutubeComp;

import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        {!!props.icon && <i className={props.icon}></i>}
        {!!props.year && <span className="timeline__data">{props.year}</span>}
        {!!props.title && <h3 className="timeline__title">{props.title}</h3>}
        {!!props.desc && <p className="timeline__text">{props.desc}</p>}
        {!!props.desc2 && <p className="timeline__text">{props.desc2}</p>}
        {!!props.desc3 && <p className="timeline__text">{props.desc3}</p>}
        {!!props.grade && <p className="timeline__grade">{props.grade}</p>}
    </div>
  )
}

export default Card
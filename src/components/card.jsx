import s from './card.module.css'

export const Card = ({image, name, ki}) => {
    return(
        <div className={s.cardBackground}>
            <img className={s.cardImage} src={image} alt={name} />
            <h2 className={s.cardName}>{name}</h2>
            <p className={s.cardki}>{ki}</p>

        </div>
    )
}
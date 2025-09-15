function Track(props){
    //Теперь функция принимает аргумент props
    //ТО есть данные для компонента приходят извне, а не задаются внутри
    return (
        <div className="track">
            <div className="track-info">
                <h3 className="track-title">{props.title}</h3>
                    <p className="track-artist">{props.artits} | {props.album} </p>
            </div>
            <div className="track-duration">
                {props.duration}
            </div>
        </div>
    )
}

export default Track;      
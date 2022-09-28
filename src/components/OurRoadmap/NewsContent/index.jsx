const NewsContent = ({
    ClassItem,
    num,
    day,
    title,
    ClassNewsMediaBx,
    ClassNewsMediaLink,
    img,
    addCboxElementLink=false,
    text
}) => (
    <div className={ClassItem}>
        <div className="news-content">
            <div className="date">
                <p>{num}</p>
                <small>{day}</small>
            </div>
            <h2 className="news-title">{title}</h2>
            <div className={ClassNewsMediaBx}>
                <a className={ClassNewsMediaLink} href="#">
                    <img className="img-responsive" src={img} alt="" />
                </a>
                {addCboxElementLink && <a className="colorbox cboxElement" href="#" />}
            </div>
            <p>{text}</p>
        </div>
    </div>
)

export default NewsContent
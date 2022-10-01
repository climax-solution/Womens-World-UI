const NewsContent = ({
    ClassItem,
    title,
    ClassNewsMediaBx,
    ClassNewsMediaLink,
    img,
    addCboxElementLink=false,
    text
}) => (
    <div className={ClassItem}>
        <div className="news-content">
            <h2 className="news-title">{title}</h2>
            <div className={ClassNewsMediaBx}>
                <a className={ClassNewsMediaLink} href="#">
                    <img className="img-responsive" src={img} alt="" />
                </a>
                {addCboxElementLink && <a className="colorbox cboxElement" href="#" />}
            </div>
            <ul className="roadmap-list">
                {
                    text.map((_text, idx) => (
                        <li key={idx} className="text-white">{_text}</li>
                    ))
                }
            </ul>
        </div>
    </div>
)

export default NewsContent
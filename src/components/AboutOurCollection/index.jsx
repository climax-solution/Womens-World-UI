const AboutOurCollection = ({
  ClassItem,
  ClassBxImgUp,
  ClassBxImg,
  ClassBxText,
  data,
  AboutOurCollectionImg,
  addImgRings=false
}) => {
  return (
      <section className={ClassItem}>
        <div className="container">
          <div className="row align-items-center">
            <div className={ClassBxImgUp}>
              <div className={ClassBxImg} data-aos="fade-up">
                {AboutOurCollectionImg ? <img draggable="false" src={AboutOurCollectionImg} alt="" /> : <img draggable="false" src={data.img} alt="" />}
                {addImgRings && <img draggable="false" src="img/core-img/rings.png" className="center-block img-responsive rings " alt=""/>}
              </div>
            </div>
            <div className={ClassBxText}>
              <div className="who-we-contant">
                <div className="dream-dots text-left" data-aos="fade-up">
                  <span className="gradient-text ">{data.dreamDotsText}</span>
                </div>
                <h4 data-aos="fade-up">{data.title}</h4>
                <p data-aos="fade-up">{data.textUp}</p>
                <p data-aos="fade-up">{data.textDown}</p>
                <a className="btn more-btn mt-20" href="#">{data.btnText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutOurCollection
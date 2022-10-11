const SectionHeading = ({ClassTitle="", title , text }) => {

  return (
    <div className="section-heading text-center">
      {/* Dream Dots */}
      <div className="dream-dots justify-content-center" data-aos="fade-up">
        <span className={ClassTitle}>{title}</span>
      </div>
      {/* <p data-aos="fade-up">{text}</p> */}
    </div>
  );
}

export default SectionHeading;
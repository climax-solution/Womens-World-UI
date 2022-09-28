const SectionHeading = ({ClassTitle="", title , otherTitle , text , addWhite=false}) => {

  return (
    <div className="section-heading text-center">
      {/* Dream Dots */}
      <div className="dream-dots justify-content-center" data-aos="fade-up">
        <span className={ClassTitle}>{title}</span>
      </div>
      <h2 data-aos="fade-up">{otherTitle ? otherTitle : title}</h2>
      <p data-aos="fade-up">{text}</p>
    </div>
  );
}

export default SectionHeading;
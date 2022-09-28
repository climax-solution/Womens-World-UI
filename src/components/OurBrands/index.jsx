const OurBrands = ({data}) => {
	return(
    <div className="moving-bg">
      {data?.map((item , key) => (
        <div className="marquee-block" key={key}>
          <img src={item.img} alt="" /><p className="w-text">{item.title}</p>
        </div>
      ))}
    </div>
	)
}

export default OurBrands
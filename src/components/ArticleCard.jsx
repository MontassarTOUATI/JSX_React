const ArticleCard = ({ data }) => {
  const { id, title, subtitle, image } = data;
  return (
    <div className="singleCard">
      <img src={image} alt={title} />
      <div>
        <h2>{id}</h2>
        <br />
        <h4>{title}</h4>
        <br />
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ArticleCard;

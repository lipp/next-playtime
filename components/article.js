const Article = ({ title, description, urlToImage, url, source }) => (
  <div>
    <h1>{title}</h1>
    <img src={urlToImage || 'https://picsum.photos/200/300'} />
    <p>
      {description}{' '}
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read article on "{source.name}"
      </a>
    </p>
    <style jsx>{`
        div {
          overflow: hidden;
        }
        img {
          height: 240px;
          width: 100%;
          object-fit: cover;
        }
        h1 {
          font-size: 20px;
          color: darkred;
        }
        p {
          font-size: 14px;
          pad
        }
    `}</style>
  </div>
)

export default Article

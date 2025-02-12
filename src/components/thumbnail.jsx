
// eslint-disable-next-line react/prop-types
const Thumbnail = ({ items, currentIndex }) => {
  return (
      <div className="thumbnail">
          {items.map((item, index) => (
              <div
                  key={index}
                  className={`item ${index === currentIndex ? 'active' : ''}`}
              >
                  <img src={item.img} alt={`Thumbnail ${index + 1}`} />
                  <div className="content">
                      <div className="title">{item.title}</div>
                      <div className="description">{item.description}</div>
                  </div>
              </div>
          ))}
      </div>
  );
};

export default Thumbnail;

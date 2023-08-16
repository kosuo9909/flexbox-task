import './SingleElement.scss';
const SingleElement = ({ mockStorage }) => {
  return (
    <div className="div-wrapper">
      {mockStorage.map((mockStorageObject, index) => {
        let title = mockStorageObject.heading;
        let items = Object.values(mockStorageObject.items);
        return (
          <section>
            <h1>{title}</h1>
            {items.map((item) => (
              <p>{item}</p>
            ))}
          </section>
        );
      })}
    </div>
  );
};

export default SingleElement;

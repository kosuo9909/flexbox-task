const SingleElement = ({ mockStorage }) => {
  return (
    <div>
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

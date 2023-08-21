import './SingleElement.scss';
const SingleElement = ({ mockStorage }) => {
  return (
    <div className='div-wrapper'>
      {mockStorage.map((mockStorageObject, _index) => {
        let title = mockStorageObject.heading;
        let items = Object.values(mockStorageObject.items);
        let fixedWidth = `${mockStorageObject.fixedWidth}px`;
        return (
          <section style={{ minWidth: fixedWidth }}>
            <h1>{title}</h1>
            <aside>
              {items.map((item) => (
                <p>{item}</p>
              ))}
            </aside>
          </section>
        );
      })}
    </div>
  );
};

export default SingleElement;

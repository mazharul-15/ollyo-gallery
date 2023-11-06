import "./header.scss";
const Header = ({ images, handleDeleteSelected }) => {
  const selectedItemsNumber = images.filter((image) => image.selected).length;
  return (
    <div className="header">
      <div>
        {selectedItemsNumber ? (
          <h3 className="header-title">
            <button className={`custom-checkbox checked`}></button>
            {selectedItemsNumber} files selected
          </h3>
        ) : (
          <h3>Gallery</h3>
        )}
      </div>
      <div>
        {selectedItemsNumber ? (
          <button onClick={handleDeleteSelected} className="header-delete-btn">
            Delete Selected
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;

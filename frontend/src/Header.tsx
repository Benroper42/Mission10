// header function that creates the header and the info in it
function Header(props: any) {
  return (
    <header className="row header navbar-dark bg-dark align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <div className="d-flex flex-column align-items-center">
              <h1 className="text-center text-white mb-0">{props.title}</h1>
              <br />
              <h4 className="text-center text-white">{props.description}</h4>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

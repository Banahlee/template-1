import './Content1.css';

function Content1() {
  return ( 
    <>
      <div className="d-flex content-container justify-content-center col-lg-12 container">
        <div className="left-container col-lg-6 text-center">
          <h1 className="small-caps">left side content</h1>
          <p>This is the content on the left side</p>
        </div>
        <div className="right-container col-lg-6 text-center">
          <h1 className="small-caps">right side content</h1>
          <p>This is the content on the right side</p>
        </div>
      </div>
    </>
  );
}

export default Content1;
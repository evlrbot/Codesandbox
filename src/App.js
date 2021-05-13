import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>

      <div class="card" style={{ width: 100 + "%" }}>
        <h5 class="card-header">Card Header</h5>
        <img
          src="https://mma.prnewswire.com/media/610949/USCIYA_Logo.jpg?p=publish&w=400"
          class="card-img-top"
          alt="..."
        ></img>

        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

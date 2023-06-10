import './App.css';
import Board from './components/Board';
function App() {
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Tic-Tac-Toe</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    </li>
                </ul>
                <form class="d-flex">
                    <input disabled class="form-control me-2" type="text" placeholder="Think Outside The Box" id="searchTxt" aria-label="Search"/>
                </form>
            </div>
        </div>
    </nav>
    <center>
    <img class="imgs" src={process.env.PUBLIC_URL+"../dash-icon.png"} />
    </center>
     <Board/>
     
    </>

  );
}

export default App;

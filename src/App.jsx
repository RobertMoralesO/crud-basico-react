
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD BÁSICO</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {

            }
          </h4>
          <form >
            <input
              type="text"
              className='form-control mb-2'
              placeholder='Ingrese Tarea'

            />
            <button className="btn btn-dark btn-block" type='submit'>Agregar</button>

          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;


import './App.css';
import { nanoid } from 'nanoid';
import React from 'react';

function App() {

  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null)

  const agregarTarea = e => {
    e.preventDefault()

    if(!tarea.trim()){
      console.log('Digite tarea')
      setError('Digite la Tarea')
      return
    }

    setTareas([
      ...tareas,
      {id: nanoid(), nombreTarea:tarea}
    ])

    setTarea('')
    setError(null)
  }

  const eliminarTarea = id => {
    const arrayAux = tareas.filter(item => item.id !== id)
    setTareas(arrayAux)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD BÁSICO</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  
                      <button 
                        className='btn btn-danger btn-sm float-right mx-2'
                        onClick={() => eliminarTarea(item.id)}>Eliminar</button>
                      <button className='btn btn-warning btn-sm float-right'>Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {

            }
          </h4>
          <form onSubmit={agregarTarea}>
            {
              error ? <span className='text-danger'>{error}</span> : null
            }
            <input
              type="text"
              className='form-control mb-2'
              placeholder='Ingrese Tarea'
              onChange={e => setTarea(e.target.value)}
              value = {tarea}
            />
            <button
              className="btn btn-dark btn-block" 
              type='submit'>Agregar</button>

          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;

import './App.css'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function App() {

  return (
    <div>
    <>
    <Cabecalho/>
    <Evento
      titulo={"Evento do senai"}
      descricao={"Descricao do Evento"}
      horario={"03/05/2024 das 15:00 até 17:00"}
      local={"Local do Evento"}
    />
    <Galeria/>
    <Rodape/>
    </>
    
    </div>
  )
}

export default App

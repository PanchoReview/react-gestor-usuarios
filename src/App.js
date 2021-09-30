import useFormulario from './hooks/useFormulario'
import Input from './components/Input'

function App() {
  const [formulario, handleChange] = useFormulario({ name: '', lastName: ''})
  
  console.log(formulario)
  return (
    <form>
      <Input 
        label='Nombre'
        name='name'
        placeholder='Nombre'
        value={formulario.name}
        onChange={handleChange}
      />
      <Input 
        label='Apellido'
        name='lastName'
        placeholder='Apellido'
        value={formulario.lastName}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;

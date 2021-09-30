import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [formulario, handleChange] = useFormulario(
    { name: '', 
    lastName: '', 
    email: '' })

  console.log(formulario)
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
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
            <Input
              label='Correo'
              name='email'
              placeholder='Correo'
              value={formulario.email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>

      </Card>
    </Container >


  );
}

export default App;

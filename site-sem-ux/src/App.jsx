import React from 'react';
import InicialSemUx from './pages/InicialSemUx'

const App = () => {

	return (
    <BrowserRouter>
    <CustomNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<InicialSemUx/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
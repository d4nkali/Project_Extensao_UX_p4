import React from 'react'

const InicialSemUx = () => {
  return (
    <div style={{ backgroundColor: '#ff00ff', color: 'yellow', fontFamily: 'Comic Sans MS', padding: '10px' }}>
      <marquee behavior="scroll" direction="left" style={{ fontSize: '30px', backgroundColor: 'black' }}>
        BEM VINDO AO SITE DA EMBRACO!!! CLIQUE AQUI CLIQUE AQUI CLIQUE AQUI!!! 🚨🚨🚨
      </marquee>

      <h1 style={{ fontSize: '50px', color: 'lime', textAlign: 'center', textDecoration: 'underline' }}>
        EMBRACO É TOP DEMAIS!!!
      </h1>

      <p style={{ fontSize: '24px', lineHeight: '1.1', margin: '50px' }}>
        A EMBRACO é muito legal tipo assim a gente tem umas coisas mt top clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui clique aqui...
      </p>

      <img
        src="https://exemplo.com/imagem-inexistente.jpg"
        alt="Imagem quebrada"
        style={{ width: '100%', height: '400px', objectFit: 'none', border: '10px dashed red' }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'nowrap', gap: '30px', marginTop: '30px' }}>
        <div style={{ backgroundColor: 'orange', padding: '20px', width: '30%' }}>
          <h2 style={{ fontSize: '35px', fontFamily: 'Impact', color: 'red' }}>BIBLIOTECA!!</h2>
          <p>tem geladeira la e coisa tipo assim mt arcondicionado la mesmo mas nem sempre</p>
        </div>

        <div style={{ backgroundColor: 'cyan', padding: '20px', width: '30%' }}>
          <h2 style={{ fontSize: '35px', fontFamily: 'Cursive', color: 'purple' }}>PREDIO PRINCIPAL KKK</h2>
          <p>um predio mt doido gigante bonito mt top mesmo véi kkkk</p>
        </div>

        <div style={{ backgroundColor: 'lime', padding: '20px', width: '30%' }}>
          <h2 style={{ fontSize: '35px', fontFamily: 'Arial Black', color: 'blue' }}>CAMPUS VIDA</h2>
          <p>vida loka dos funcionarios la, tudo feito um bagaço de cana com pagamento atrasado, la tem tudo q tu imagina tipo cachorro gato cadeira geladeira</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button style={{ backgroundColor: 'red', color: 'white', padding: '20px', fontSize: '25px', border: '5px dashed black' }}>
          CLIQUE AQUI AGORA!!!
        </button>

        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          ou entao <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>clique aki tbm</a> sei la
        </p>
      </div>
    </div>
  )
}

export default InicialSemUx
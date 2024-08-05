import React from 'react';
import Navbar from './components/Navbar';
import Section from './Section/Section';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Section id="home" title="Home">
        Conteúdo da seção Home...
      </Section>
      <Section id="about" title="Sobre Nós">
        Maitreya Sangha Brasil é uma comunidade espiritual dedicada ao estudo e à prática dos ensinamentos budistas de Maitreya, o Buda do Futuro. Nossa missão é promover a paz interior e a compaixão através da meditação, estudo, e ações altruístas. Oferecemos um espaço acolhedor para pessoas de todas as origens, interessados em aprofundar sua compreensão do Dharma e em cultivar uma vida de sabedoria e compaixão.
      </Section>
      <Section id="services" title="Serviços">
        Conteúdo da seção Serviços...
      </Section>
      <Section id="contact" title="Contato">
        Conteúdo da seção Contato...
      </Section>
    </div>
  );
};

export default App;

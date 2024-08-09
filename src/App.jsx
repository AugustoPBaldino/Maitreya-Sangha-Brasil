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
<h4>Eventos</h4>
<p>Nossa comunidade organiza uma variedade de eventos voltados para a prática espiritual e o fortalecimento da comunidade. Oferecemos retiros de meditação, 
  workshops de desenvolvimento pessoal, e celebrações especiais que promovem a paz interior e o crescimento espiritual.</p>
<h4>Lançamentos</h4>
<p>Estamos sempre buscando novas formas de compartilhar o Dharma e enriquecer a jornada espiritual de nossos membros. Confira nossos lançamentos recentes e futuros, incluindo publicações, podcasts, e outros materiais inspiradores.</p>
<h4>Cursos</h4>
<p>Oferecemos cursos regulares que abordam diferentes aspectos dos ensinamentos budistas e da meditação. Desde iniciantes até praticantes avançados, nossos cursos são projetados para apoiar o crescimento espiritual de todos.</p>
<h4>Entrevistas</h4>
<p>Nossas entrevistas com mestres, praticantes e estudiosos do Dharma trazem insights valiosos sobre a prática budista e a aplicação dos ensinamentos no dia a dia. Acompanhe nossas conversas para se inspirar e aprofundar seu entendimento do caminho espiritual.</p>
      </Section>
      <Section id="contact" title="Contato">
        Conteúdo da seção Contato...
      </Section>
    </div>
  );
};

export default App;

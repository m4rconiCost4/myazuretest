import React, { Component } from "react";
import { Link } from "react-router-dom";
import aza from "../images/aza.jpg"
import "./index.css";
class Azathoth extends Component{
    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
    render(){
        return(
        <div id= "body">
              <img src={aza} className="logo" alt="logo" />
              <h1>Azathoth</h1>
              <p id= "text">Quando a idade caiu sobre o mundo, e maravilhas saíram das mentes dos homens; quando cidades cinzentas ergueram, nos céus esfumaçados, suas torres feias e sombrias, em cujas sombras ninguém poderia sonhar com o sol ou o hidromel florescido da primavera; quando o conhecimento despojou terra do seu manto de beleza, e poetas não mais cantaram salvo os fantasmas retorcidos vistos com olhares turvos e introvertidos; quando estas coisas passaram, e as esperanças infantis foram embora para sempre, existiu um homem que viajou para fora da vida numa jornada por espaços onde os sonhos do mundo haviam fugido.

Sobre o nome e morada desse homem há pouco escrito, pois existiam apenas para o mundo desperto; ainda assim é dito que ambos eram obscuros. É suficiente saber que ele habitava uma cidade com muros altos onde um crepúsculo estéril reinava, e que trabalhava o dia inteiro entre a sombra e o tumulto, voltando para casa ao anoitecer, num quarto onde a única janela aberta direcionava não aos campos e bosques, mas para uma praça escura onde outras janelas o encaravam com tedioso desespero. Por aquele batente alguém poderia ver apenas paredes e janelas, exceto algumas vezes quando se debruçava bastante para fora e espiava acima em direção às pequenas estrelas que passavam. E por que meras paredes e janelas deviam conduzir rapidamente à loucura um homem que sonha e lê bastante, o habitante naquele quarto passava noite após noite a se debruçar e a espiar por vislumbres algum fragmento de coisas para além do mundo desperto e do cinza das altas cidades. Após anos ele começou a chamar as estrelas que navegavam lentamente por nomes, e a segui-las em fantasia quando deslizavam pesarosamente para fora de vista; até que em certa dimensão sua visão se abriu para muitas vistas secretas cuja existência nenhum olho comum suspeita. E numa noite esse grande abismo ganhou uma ponte, e os céus assombrados por sonhos reduziram-se à janela do observador solitário para se fundir ao ar viciado em seu quarto, e torná-lo parte de suas fabulosas maravilhas.

De lá para o quarto vieram córregos selvagens da meia-noite violeta, cintilando com pó de ouro; vórtices de poeira e fogo, girando para fora do espaço final e pesado com perfumes vindos de além dos mundos. Oceanos opiáceos se derramaram por lá, incandescidos por sois que os olhos nunca poderiam suportar, e tendo em seus redemoinhos estranhos golfinhos e ninfas do mar de profundidades que não se pode recordar. Uma infinidade silenciosa rodeava o sonhador e o levitava sem sequer tocar o corpo, que se debruçara rigidamente para fora da janela solitária; e por dias que não são contados pelos calendários dos homens, as marés de esferas distantes despiram-no gentilmente para juntar-se aos sonhos por quais ele ansiava; os sonhos que os homens perderam. E ao curso de muitos ciclos eles ternamente o deixaram dormindo numa esverdeada praia ensolarada; uma costa verde perfumada por flores de lótus, e estrelada por camalotes vermelhos.

</p>
        <Link className="links" to="Dagon">
        Dagon {' '}
        </Link>
        <Link className="links" to='Cthulu'>
        Cthulu
        </Link>
      </div>
        )
    }
}
export default Azathoth;
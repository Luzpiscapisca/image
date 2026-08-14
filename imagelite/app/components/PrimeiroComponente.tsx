'use client';

interface PrimeiroComponenteProps{
  mensagem: string
  mensagemBotao: string; // Propriedade opcional  
}
export const PrimeiroComponente =({mensagem, mensagemBotao}: PrimeiroComponenteProps) => {
  
 // function clique(){
    //  console.log("Você clicou no botão!");
   // alert("Você clicou no botão!");
   
    const clique = ()=> {
      console.log("Você clicou no botão!");
      alert(mensagemBotao);
  }


    return(
    <div> 
      <h1>Primeiro Componente</h1>
      <p>{mensagem}</p>
      <button onClick={clique}>Clique aqui</button>
      
    </div>
  );
} 
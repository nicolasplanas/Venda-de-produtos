let pcGamer = 4500
let celular = 1700
let tablet = 1500
let videoGame = 6000

let entrada = Number(prompt('Bem-vindo ao Adilson Informática! \n\nDigite uma das opções abaixo para continuar: \n1 - Listar produtos disponíveis \n2 - Vender um produto disponível \n3 - Fechar a loja \n\nEx: Digite o número 1 para verificar os produtos disponíveis para fazer a venda.'));

switch(entrada) {
  case 1:
    console.log('Confira os produtos disponíveis na Adilson Informatica: \n1 - Pc Gamer: R$:4,500 \n2 - Celular Xiaomi: R$:1,700 \n3 - Tablet Samsung: R$:1,500 \n4 - PlayStation 5: R$:6,000');
    break;
  case 2:
    let produto = prompt('Digite o nome do produto disponível \nEx: PC Gamer');
    let quantidade = prompt('Digite a quantidade a ser vendida \nEx: 2');
    
    if (produto == 'PC Gamer' || produto == 'Celular Xiaomi' || produto == 'Tablet Samsung' || produto == 'PlayStation 5'){
      if (produto == 'PC Gamer'){
        produto = pcGamer
        let valorTotal = produto * quantidade
        let pergunta = prompt('Deseja adicionar um desconto de 10% ao valor? \nEx; y/n');
        if (pergunta == 'y'){
          let desconto = valorTotal * 0.10
          let valorFinal = valorTotal - desconto
          console.log('O valor total da venda com o desconto é de ', valorFinal);
        }
        if (pergunta == 'n'){
          console.log('O valor total da venda é de ', valorTotal);
        }
      }
      if (produto == 'Celular Xiaomi'){
        produto = celular
        let valorTotal = produto * quantidade
        let pergunta = prompt('Deseja adicionar um desconto de 10% ao valor? \nEx; y/n');
        if (pergunta == 'y'){
          let desconto = valorTotal * 0.10
          let valorFinal = valorTotal - desconto
          console.log('O valor total da venda com o desconto é de ', valorFinal);
        }
        if (pergunta == 'n'){
          console.log('O valor total da venda é de ', valorTotal);
        }
      }
      if (produto == 'Tablet Samsung'){
        produto = tablet
        let valorTotal = produto * quantidade
        console.log('O valor total da venda é de ', valorTotal);
      }
      if (produto =='PlayStation 5'){
        produto = videoGame
        let valorTotal = produto * quantidade
        console.log('O valor total da venda é de ', valorTotal);
      }
    }
    break;
  case 3:
    console.log('Aplicação fechada!, até breve...')
    break;
  default:
    console.log('Opção não encontrada... \nNecessário reiniciar o aplicativo!')
}
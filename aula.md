## LINGUAGEM DE PROGRAMAÇÂO 

   Maneira de dar instrução ao computador
   como um lego você irá utilizar peças para criar algoritimos, ou seja, para resolver problemas.

        **ALGORITIMOS** Sequência de passos lógicos e finita para resolução de um problema.


## PEÇAS DE UMA LINGUAGEM

  - [x]Comentários
  - []Declaração de variáveis (const, let)
  - []Operadores (atribuiçãom matemáticos, lógicos)
  - []Tipos de dados (string, number, boolean)
  - []Estrutura de dados (functions, object, arry)
  - []Controle de fluxo (if/else)
  - []Estrutura de repetição (for, while)

 # FASSES DA RESOLUÇÃO DE UM PROBLEMA 
 
 - [x]COLETAR OS DADOS
 - [x]PROCESSAR OS DADOS (MANIPULAR, ALERAR....)
 - [x]APRESENTAR OS DADOS

  ## TIPOS DE DADOS:
   - [x] String: (Textos)"" '' ´´
   - [x] Number: (NUMEROS(1,2,3,4,5))
   - [x] Function
   - [x] Boolean: true , false

   ## ESCOPOS E VARIÁVEIS
  - Variáveis globais e locais 
   constantes

   ## OPERADORES
  - [x] Operadores de atribuição de valor =
  - [x] Operador de contatenação (junção de Strings-) +

 ## ESTRUTURAS DE DADOS
  
#### ARRAYS
- [x] Uma lista que contém qualquer tipo de dado

### OBJETIVOS
- [x] Atributos e métodos
- [x] Criação e manipulação de obejtos
- [] Acesso a propriedades de objetoas



### FUNCTIONS
- [x] Criar, passar argumento
- [x] Executar
- [x] arrow function / named function

 //arrow function
 const criarMeta = () => {}

 //function
 function mensagem () {}


# ESTRUTURA DE REPETIÇÃO
[x] while

# CONDICIONAIS
[x] switch


# MÓDULOS EM NODE.JS
 - Importação de módulos (require,connonJS)
 - Biblioteca 'inquirer' para criar prompts interativos

## PROGRAMAÇÃO ASSÍNCRUONA E PROMISES
- [x] Uso de funções e assíncronas (async/await)

##### AULA
 // Hellor world
 //{} ESCOPO
 let mensage = "Hello World"
 console.log(mensage) //(ISSO È UMA FUNÇÂO)

let metas = ["Kaique", "alo"]

console.log (metas[1] + ", " + metas[0]) // por que o ALO VEIO PRIMEIRO QUE KAIQUE??


// arrays, objetos

let meta = {
    value: 'ler um livro por mês',
    //address:2,
    checked: false,
   // isChecked: (info) => {
     //   console.log(info)
   // }
}

let metas = [
    meta,{
        value: "camiar 20 minutos todos os dias",
        checked:false
    }
]

console.log(metas[0] .value)

//fuction //arrow fuction
//const criarMeta = () => {}


const start = () => {
    // vamos ter aqui dentro o MENU da aplicação
    let count = 1

    while(count < 10) { //<= menor igual
        console.log(count)
        count = count + 1 //count ++
    }
}

start()

const start = () => {
    // vamos ter aqui dentro o MENU da aplicação
    while(true){
        
        let opcao = "Sair"
        // Controle de Fluxo
        switch (opcao) {
            case "Cadastrar":
                console.log("Vamos cadastrar")
                break;
        
            case "listar":
                console.log ("Vamos listar")
                break;
            
            case "Sair":
                return
                
        }
    }
}

start()
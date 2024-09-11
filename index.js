const { select } = require('@inquirer/prompts')

const start = async () => {
    // vamos ter aqui dentro o MENU da aplicação
    while(true){
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name:"Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name:"Listar metas",
                    value:"listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        // Controle de Fluxo
        switch (opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
        
            case "listar":
                console.log ("vamos listar")
                break
            
            case "sair":
                console.log ("Até a proxima")
                return
                
        }
    }
}

start()
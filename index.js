const { select, input, checkbox } = require('@inquirer/prompts')

//Cadastramento de metas
let meta = {
    value: 'Tomar 3l de água por dia',
    checked:false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a meta:"})

    if (meta.length == 0) {
        console.log ('A meta não pode ser vazia.')
        return //cadastrarMeta() se você quiser que a pessoa fique presa aqui
    }

    metas.push(
        {value:meta,checked:false}
    )
}

// Listas da metas
const listarMetas = async () => {
    
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para Finalizar a etapa",
        choices:[...metas],
        instructions: false,
    })
    
    // Para que possa desmarcar a tarefa que não fez
    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0){
        console.log ("Nenhuma meta selecionada!")
        return
    }

    // Para que possa marca a e confirmar as metas que fez 
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log ('Meta(s) marcadas como concluída(s)')

}

//Aprezentando metas realizadas
const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0){
        console.log ('Não existem metas realizadas! :(')
        return
    }

    await select({
        message:"Metas Realizadas! :)" + realizadas.length,
        choices:[...realizadas]
    })
}

const metasAbertas = async() => {
    const abertas = metas.filter((meta) =>{
        return meta.checked != true
    })

    if(abertas.length == 0) {
        console.log("Não existem metas abertas! :)")
        return
    }

    await select({
        message:"Metas Abertas" + abertas.length ,
        choices:[...abertas]
    })
}

const start = async () => {
    // Vamos ter aqui dentro o MENU da aplicação
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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
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
                await cadastrarMeta()
                console.log(metas)
                break
        
            case "listar":
                await listarMetas()
                break
            
            case "realizadas":
                await metasRealizadas()
                break
            
            case "abertas":
                await metasAbertas()
                break

            case "sair":
                console.log ("Até a proxima")
                return
                
        }
    }
}

start()
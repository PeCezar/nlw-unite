let participantes = [
   {
  nome: "rogerio",
  email: "jimi@bts.com",
  data: new Date(2024, 2, 22, 19, 20),
  conferido: new Date (2024, 2, 25, 22, 00)
  },
   {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    data: new Date(2024, 2, 23, 19, 23),
    conferido: new Date(2024, 2, 25, 20, 20)
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    data: new Date(2024, 0, 3, 19, 23),
    conferido: new Date(2024, 0, 4, 20, 20)
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    data: new Date(2023, 11, 4, 19, 23),
    conferido: new Date(2023, 11, 5, 20, 20)
  },
  {
    nome: "Maria Oliveira",
    email: "maria@gmail.com",
    data: new Date(2023, 10, 5, 19, 23),
    conferido: new Date(2023, 10, 6, 20, 20)
  },
  {
    nome: "Pedro Santos",
    email: "pedro@gmail.com",
    data: new Date(2023, 9, 6, 19, 23),
    conferido: new Date(2023, 9, 7, 20, 20)
  },
  {
    nome: "Carla Lima",
    email: "carla@gmail.com",
    data: new Date(2023, 8, 7, 19, 23),
    conferido: new Date(2023, 8, 8, 20, 20)
  },
  {
    nome: "Lucas Sousa",
    email: "lucas@gmail.com",
    data: new Date(2023, 7, 8, 19, 23),
    conferido: new Date(2023, 7, 9, 20, 20)
  },
  {
    nome: "Paula Costa",
    email: "paula@gmail.com",
    data: new Date(2023, 6, 9, 19, 23),
    conferido: new Date(2023, 6, 10, 20, 20)
  },
  {
    nome: "Gabriel Almeida",
    email: "gabriel@gmail.com",
    data: new Date(2023, 5, 10, 19, 23),
    conferido: null
  }
];

const criarnovo = (participante) => {
  
    const data = dayjs(Date.now()).to(participante.data)
    let conferido = dayjs(Date.now()).to(participante.conferido)
  
if(participante.conferido == null){
      conferido = `
        <button
          data-email="${participante.email}"
          onclick="confere(event)"
        >
        Confirmar conferido
        </button>
          
      `
  }
  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
        </td>
      <td>${data} </td>
      <td>${conferido} </td>
    </tr>`
}
const atualizar = (participantes) => {
  let output = ""

   for(let participante of participantes){
      output = output + criarnovo(participante)
   }

   document.querySelector(`tbody`)
   .innerHTML = output

}

atualizar(participantes)

const adicionarpessoa = (event) =>{
  event.preventDefault()

  const fomdata =  new FormData(event.target)

const participante = {
    nome: fomdata.get('nome'),
    email: fomdata.get('email'),
    data: new Date(),
    conferido: null
  }

  const participanteexiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteexiste){
    alert('Email ja existente')
    return
  }

  participantes = [participante, ...participantes]
  atualizar(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
} 
const confere = (Event) => {
  const resultado = 'Certeza?'

  if(confirm(resultado) == false){
    return
  }


  const participante = participantes.find((p)=>{
    return p.email == event.target.dataset.email
  })

  participante.conferido = new Date()

  atualizar(participantes)
}
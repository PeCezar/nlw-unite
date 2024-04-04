const participante = {
  nome: "rogerio",
  email: "jimi@bts.com",
  data: new Date(2024, 2, 22, 19, 20),
  conferido: new Date (2024, 2, 25, 22, 00)
}
let participantes = [
   {
  nome: "rogerio",
  email: "jimi@bts.com",
  data: new Date(2024, 2, 22, 19, 20),
  conferido: new Date (2024, 2, 25, 22, 00)
  },
]
for(let participante of participantes){
      output = output + criarnovo(participante)
   }

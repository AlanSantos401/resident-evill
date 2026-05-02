export type NivelAmeaca = "BAIXA" | "MÉDIA" | "ALTA" | "EXTREMA"

export type Status =
  | "ATIVO"
  | "CRÍTICO"
  | "HOSTIL"
  | "DESCONHECIDO"
  | "MUTAÇÃO"
  | "PROTEGIDO"

export type Tipo =
  | "TODOS"
  | "HUMANOS"
  | "AGENTES"
  | "B.O.W"
  | "INFECTADOS"
  | "MUTANTES"

  export type Categoria =
  | "PROTAGONISTA"
  | "ALIADO"
  | "VILAO"
  | "MONSTRO"

  export type FiltroCategoria =
  | "TODOS"
  | "PROTAGONISTAS"
  | "ALIADOS"
  | "VILÕES"
  | "MONSTROS"

export type Personagem = {
  id: string
  nome: string
  tipo: Tipo
   categoria: Categoria
  status: Status
  infeccao: number
  imagem: string
  forca: number
  agilidade: number
  resistencia: number
  inteligencia: number
  nivelAmeaca: NivelAmeaca
  bowIdentificado: boolean
  altura: string
  peso: string
  jogos: string[]
}
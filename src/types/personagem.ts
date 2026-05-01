export type NivelAmeaca = "BAIXA" | "MÉDIA" | "ALTA" | "EXTREMA"

export type Status =
  | "ATIVO"
  | "CRÍTICO"
  | "HOSTIL"
  | "DESCONHECIDO"
  | "MUTAÇÃO"

export type Tipo =
  | "TODOS"
  | "HUMANOS"
  | "AGENTES"
  | "B.O.W"
  | "INFECTADOS"
  | "VILÕES"
  | "MUTANTE"

export type Personagem = {
  id: string
  nome: string
  tipo: Tipo
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
}
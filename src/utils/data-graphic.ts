export type DataGraphicProps = {
  name: string
  ks: number // ks = Kits com Sucesso
  kd: number // kd = Kist com Defeito
}

export const dataGraphic: DataGraphicProps[] = [
  { name: 'JUN/24', ks: 49, kd: 16 }, 
  { name: 'JUL/24', ks: 49, kd: 16 },
  { name: 'AGO/24', ks: 43, kd: 15 },
  { name: 'SET/24', ks: 47, kd: 10 },
  { name: 'OUT/24', ks: 28, kd: 3 },
  { name: 'NOV/24', ks: 28, kd: 3 },
  { name: 'DEZ/24', ks: 47, kd: 10 },
  { name: 'JAN/25', ks: 49, kd: 16 },
  { name: 'FEV/25', ks: 49, kd: 16 },
  { name: 'MAR/25', ks: 28, kd: 3 },
  { name: 'ABR/25', ks: 28, kd: 3 },
];

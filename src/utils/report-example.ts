export type ReportItemProps = {
  id: number;
  type: string;
  specialty: string;
  local: string;
  duration: string;
  items: number;
}

export const reportItems: ReportItemProps[] = [
  { id: 1, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 5 },
  { id: 2, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 3, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 4, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 5, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 6, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 7, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 8, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  { id: 9, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
]
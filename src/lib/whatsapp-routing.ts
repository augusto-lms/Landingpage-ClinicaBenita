export const specialtyPhoneMap = {
  Pediatria: "5534997078462",
  "Saúde da Família": "5534997078462",
  "Medicina Esportiva": "5534997078462",
  Cardiologia: "553491180254",
  Ecocardiografia: "553491180254",
  "Saúde Mental": "553491180254",
  Geriatria: "5534987197026",
  Angiologia: "5534999247511",
  "Cirurgia Vascular": "5534999247511",
  Ginecologia: "5534999247511",
} as const;

export const whatsappGroups = [
  {
    id: "grupo-1",
    label: "Pediatria / Saúde da Família / Medicina Esportiva",
    whatsapp: "5534997078462",
    displayPhone: "34 99707-8462",
    specialties: ["Pediatria", "Saúde da Família", "Medicina Esportiva"],
  },
  {
    id: "grupo-2",
    label: "Cardiologia / Ecocardiografia / Saúde Mental",
    whatsapp: "553491180254",
    displayPhone: "34 99118-0254",
    specialties: ["Cardiologia", "Ecocardiografia", "Saúde Mental"],
  },
  {
    id: "grupo-3",
    label: "Geriatria",
    whatsapp: "5534987197026",
    displayPhone: "34 98719-7026",
    specialties: ["Geriatria"],
  },
  {
    id: "grupo-4",
    label: "Angiologia / Cirurgia Vascular / Ginecologia",
    whatsapp: "5534999247511",
    displayPhone: "34 99924-7511",
    specialties: ["Angiologia", "Cirurgia Vascular", "Ginecologia"],
  },
] as const;

export type SpecialtyName = keyof typeof specialtyPhoneMap;

export function getWhatsAppNumberBySpecialty(specialty: string) {
  return specialtyPhoneMap[specialty as SpecialtyName] ?? whatsappGroups[0].whatsapp;
}

export function buildWhatsAppUrl(number: string, message?: string) {
  const baseUrl = `https://wa.me/${number}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

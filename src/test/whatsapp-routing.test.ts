import { describe, expect, it } from "vitest";

import { getWhatsAppNumberBySpecialty } from "@/lib/whatsapp-routing";

describe("roteamento de WhatsApp por especialidade", () => {
  it("encaminha Harmonização Orofacial para o número da Dra. Marcela", () => {
    expect(getWhatsAppNumberBySpecialty("Harmonização Orofacial (HOF)")).toBe("553498180016");
  });

  it("encaminha Ecocardiografia para o número de exames", () => {
    expect(getWhatsAppNumberBySpecialty("Ecocardiografia")).toBe("553497345631");
  });
});

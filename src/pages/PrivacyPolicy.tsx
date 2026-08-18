import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12 md:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-primary transition-colors hover:text-primary-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o site
        </Link>

        <header className="mt-10 border-b border-border pb-8">
          <p className="font-body text-xs font-medium uppercase tracking-[0.24em] text-primary">
            Clínica Benitá
          </p>
          <h1 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 font-body text-sm font-light text-muted-foreground">
            Última atualização: 17 de agosto de 2026.
          </p>
        </header>

        <div className="space-y-8 py-10 font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">
          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">1. Objetivo</h2>
            <p className="mt-3">
              Esta política explica como os dados informados no site da Clínica Benitá são utilizados quando você solicita atendimento ou acessa serviços de terceiros disponíveis na página.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">2. Dados informados pelo usuário</h2>
            <p className="mt-3">
              O formulário de contato solicita nome, telefone, especialidade de interesse e, opcionalmente, uma mensagem. O site não mantém esses dados em um banco de dados próprio. Ao continuar, as informações são inseridas em uma conversa do WhatsApp para que você confirme o envio ao setor de atendimento selecionado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">3. Finalidade do uso</h2>
            <p className="mt-3">
              Os dados são utilizados exclusivamente para iniciar o contato, identificar a área de interesse e facilitar o atendimento e o agendamento solicitado pelo usuário.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">4. Dados de saúde</h2>
            <p className="mt-3">
              Não envie diagnósticos, resultados de exames, prontuários ou outras informações sensíveis de saúde pelo formulário. Informações clínicas devem ser tratadas diretamente com a equipe responsável, pelos canais indicados durante o atendimento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">5. Serviços de terceiros</h2>
            <p className="mt-3">
              O site utiliza links ou conteúdos do WhatsApp, Google Maps e Instagram. Ao acessar esses serviços, o tratamento dos dados também estará sujeito às políticas de privacidade das respectivas plataformas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">6. Direitos e contato</h2>
            <p className="mt-3">
              Para esclarecer dúvidas sobre o uso dos seus dados ou solicitar informações relacionadas à privacidade, entre em contato com a Clínica Benitá pelos canais de atendimento disponíveis no site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-normal text-foreground">7. Atualizações desta política</h2>
            <p className="mt-3">
              Esta política poderá ser atualizada para refletir mudanças no site, nos canais de atendimento ou nas práticas da clínica. A versão vigente estará sempre disponível nesta página.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;

import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  return (
    <section id="instagram" className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Instagram className="mx-auto mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            Acompanhe a Benitá no Instagram
          </h2>
          <p className="mt-3 font-body text-base font-light text-muted-foreground">
            Novidades, cuidados e conteúdos para a sua saúde e bem-estar.
          </p>
          <a
            href="https://www.instagram.com/benitaclinica/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-body text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            @benitaclinica
          </a>
        </div>

        <div
          className="elfsight-app-f94fab70-0135-490d-acda-2f4e91a7b774 min-h-[320px]"
          data-elfsight-app-lazy
          aria-label="Publicações recentes da Clínica Benitá no Instagram"
        />
      </div>
    </section>
  );
};

export default InstagramFeed;

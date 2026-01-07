import { Film, ExternalLink } from "lucide-react";

interface FilmItem {
  title: string;
  period: string;
  link: string;
}

const films: FilmItem[] = [
  {
    title: "Where the Star Takes Us",
    period: "December 2025",
    link: "https://drive.google.com/file/d/1mUWb9QTK1TosNiNioeX6GiHYQZF5ug-L/view?usp=sharing",
  },
  {
    title: "How to Pay Off Your Student Debt",
    period: "Spring 2025",
    link: "https://drive.google.com/file/d/1DrUIOb2TmXD9X8X_kCXtemimTs_d4QOv/view?usp=sharing",
  },
];

const FilmsSection = () => {
  return (
    <section id="films" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-primary">Films</span>
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          {films.map((film, index) => (
            <a
              key={index}
              href={film.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Film className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {film.title}
                </h3>
                <p className="text-sm text-muted-foreground">{film.period}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmsSection;

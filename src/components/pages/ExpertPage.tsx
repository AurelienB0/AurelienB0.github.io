import React from "react";
import img1 from "../../styles/1.png";
import img2 from "../../styles/2.png";
import img3 from "../../styles/3.png";
import img4 from "../../styles/4.png";

// --- DATA CONFIGURATION ---
const ACTORS_DATA = [
  {
    name: "Banques Centrales (BCE, PBOC...)",
    type: "Institutionnel",
    position: "Favorable (mais prudent) / Inquiètes",
    sentiment: "mixed", // used for color: positive, negative, mixed, neutral
    content:
      "Elles cherchent à émettre une MDBC pour préserver la souveraineté monétaire face aux crypto-actifs privés. Elles voient le numérique comme un moyen de réduire les coûts de gestion du cash et de lutter contre le blanchiment. Cependant, l'émergence de la monnaie électronique réduit leur capacité à contrôler l'offre de monnaie et les revenus de \"seigneuriage\".",
    source: "Sebti, Qin, Fabris",
  },
  {
    name: "Le Public / Consommateurs",
    type: "Société Civile",
    position: "Polarisé / Divisé",
    sentiment: "mixed",
    content:
      'Une fracture se creuse entre les "pro-cashless" et les "pro-cash". En Europe, le COVID-19 a agi comme un catalyseur pour le sans-contact. En Inde, les jeunes et les citadins adoptent massivement le mobile, tandis que les ruraux et les personnes âgées sont exclus.',
    source: "Kotkowski, Kumari",
  },
  {
    name: "Populations Rurales & Âgées",
    type: "Groupe Vulnérable",
    position: "Défavorable / Exclu",
    sentiment: "negative",
    content:
      "Victimes de la fracture numérique (\"Digital Illiteracy\"). L'absence d'infrastructure (internet) et le manque de connaissances rendent la société sans espèces difficilement réalisable pour eux, créant un risque d'inégalité financière accrue.",
    source: "Kumari",
  },
  {
    name: "Gouvernements (ex: Inde)",
    type: "Politique",
    position: "Très Favorable / Ambivalent",
    sentiment: "positive",
    content:
      "Ils poussent vers le cashless pour la transparence, l'efficacité économique et les recettes fiscales (réduction du travail au noir). Cependant, ils doivent garantir que le cash fonctionne en cas de catastrophe (panne électrique, ouragan).",
    source: "Kumari, Fabris",
  },
  {
    name: "Fintechs & Géants du Web",
    type: "Entreprise Privée",
    position: "Disruptives",
    sentiment: "positive",
    content:
      'Elles "brisent" le monopole bancaire, réduisent les coûts de transaction et augmentent la vitesse des paiements. En Chine, des plateformes comme Taobao ont explosé, normalisant le paiement numérique.',
    source: "Hadad, Qin",
  },
  {
    name: "Crypto-actifs (Bitcoin, etc.)",
    type: "Technologie / Financier",
    position: "Alternative / Menace",
    sentiment: "neutral",
    content:
      "Concurrents de la monnaie d'État. Ils sont vus comme instables et risqués par les banques centrales, mais leur existence force les États à innover pour ne pas devenir obsolètes. Ils posent des défis éthiques et économiques.",
    source: "Sebti",
  },
  {
    name: "Système Bancaire Commercial",
    type: "Économique",
    position: "En transformation",
    sentiment: "mixed",
    content:
      "Le passage au numérique est vital pour elles (réduction des coûts, IA). Elles craignent cependant la volatilité des dépôts face à une éventuelle monnaie de banque centrale numérique.",
    source: "Kumari; Sebti",
  },
  {
    name: "Utilisateur du Cash",
    type: "Concept / Objet",
    position: "Résistant",
    sentiment: "neutral",
    content:
      "Le cash refuse de mourir. Paradoxalement, le volume de billets en circulation augmente (Zone Euro +6.4%/an). Il reste le seul moyen de paiement garantissant l'anonymat et fonctionnant sans électricité.",
    source: "Hadad, Fabris",
  },
  {
    name: "Cybercriminels",
    type: "Criminel",
    position: "Opportunistes",
    sentiment: "negative",
    content:
      "Le passage au numérique supprime les braquages physiques mais fait exploser la cybercriminalité (vol d'identité, hacking).",
    source: "Fabris",
  },
];

// Helper to get colors based on sentiment
const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive":
      return "bg-green-100 text-green-800 border-green-200";
    case "negative":
      return "bg-red-100 text-red-800 border-red-200";
    case "mixed":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function ExpertPage() {
  return (
    <div className="space-y-20 max-w-5xl mx-auto px-4 py-8">
      {/* SECTION 1: INTERVIEW */}
      <section id="interview" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Interview de l'expert
          </h2>
        </div>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <div
            className="rounded-lg p-6 border-l-4 border-indigo-800 shadow-md"
            style={{ backgroundColor: "#f2a053ff" }}
          >
            <p className="italic text-white font-medium text-lg">
              Expert : Sergio FOCARDI
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p>
              Sergio Focardi est un expert reconnu dans le domaine des monnaies
              numériques et de la finance. Son analyse approfondie des CBDC nous
              a permis de mieux comprendre les enjeux techniques et sociétaux de
              cette technologie émergente.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FRISE */}
      <section id="frise" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Frise chronologique
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <img
            src={img1}
            alt="Timeline 1"
            className="w-full rounded shadow-sm"
          />
          <img
            src={img2}
            alt="Timeline 2"
            className="w-full rounded shadow-sm"
          />
          <img
            src={img3}
            alt="Timeline 3"
            className="w-full rounded shadow-sm"
          />
          <img
            src={img4}
            alt="Timeline 4"
            className="w-full rounded shadow-sm"
          />
        </div>
      </section>

      {/* SECTION 3: ACTEURS (UPDATED) */}
      <section id="acteurs" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Identification des Acteurs & Positions
          </h2>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {ACTORS_DATA.map((actor, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {actor.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {actor.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow">
                {/* Position Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-4 border ${getSentimentColor(
                    actor.sentiment
                  )}`}
                >
                  Position : {actor.position}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {actor.content}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 mt-auto">
                <p className="text-xs text-gray-500 italic">
                  <span className="font-semibold not-italic text-gray-400 uppercase tracking-wider text-[10px]">
                    Source:{" "}
                  </span>
                  {actor.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

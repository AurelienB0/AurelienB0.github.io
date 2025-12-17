import React from "react";
import arg from "../../styles/btc.jpg";
import btc from "../../styles/argent.png";
import { SourceLinks } from "./ExpertPage";
export function ControversePage() {
  return (
    <div className="space-y-20">
      {/* INTRODUCTION */}
      <section id="intro" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Introduction</h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            Depuis plusieurs décennies, les nouvelles technologies transforment
            profondément notre rapport à l’argent. Les paiements par carte
            bancaire, sans contact, par téléphone mobile ou par QR code sont
            devenus courants dans de nombreux pays. Dans certains États comme la
            Suède ou la Chine, l’argent liquide est aujourd’hui très peu
            utilisé, voire refusé dans certains lieux. Cette évolution montre
            que la société sans espèces n’est plus une simple hypothèse, mais
            une réalité en construction.
          </p>
          <p>
            Dans ce contexte, l’apparition des monnaies numériques de banque
            centrale, appelées CBDC (Central Bank Digital Currency), marque une
            nouvelle étape dans la dématérialisation de la monnaie. Ces
            innovations soulèvent cependant de nombreuses interrogations. Si
            elles promettent plus d’efficacité et de sécurité, elles font aussi
            craindre une surveillance accrue et une perte de libertés
            individuelles. Dès lors, une question centrale se pose : la
            transition vers une société sans espèces représente-t-elle une
            avancée bénéfique pour la société ou un risque majeur pour les
            libertés et l’équilibre économique ?
          </p>
        </div>
      </section>

      {/* I. TRANSITION */}
      <section id="transition" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">
            I. Une transition déjà en cours vers une société sans espèces
          </h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            La disparition progressive de l’argent liquide ne date pas d’hier.
            Dès la fin du XXᵉ siècle, les virements bancaires et les cartes de
            paiement ont amorcé la numérisation des transactions. Au début du
            XXIᵉ siècle, cette évolution s’est accélérée avec l’essor
            d’Internet, des smartphones et des plateformes de paiement
            numérique.
          </p>

          {/* Visualizing the historical evolution mentioned in your text */}
          <div className="my-8 flex justify-center">
            <img src={btc} />
            {/* https://theconversation.com/le-cash-recule-mais-reste-solidement-ancre-dans-les-portefeuilles-des-francais-268917 */}
          </div>
          <div style={{ alignSelf: "flex-end", right: 10, marginLeft: 600 }}>
            <SourceLinks sources="Figure1" />
          </div>
          <p>
            Des événements marquants ont renforcé cette dynamique. En 2008, la
            création du Bitcoin a introduit l’idée d’une monnaie entièrement
            numérique et indépendante des États. Même si cette cryptomonnaie
            reste marginale pour les paiements quotidiens, elle a profondément
            influencé la réflexion mondiale sur l’avenir de la monnaie. En 2016,
            la démonétisation soudaine en Inde a accéléré l’adoption massive des
            paiements numériques, montrant comment des décisions politiques
            peuvent transformer rapidement les usages.
          </p>
          <p>
            Aujourd’hui, cette transition s’observe à l’échelle mondiale. En
            Chine, les paiements par applications mobiles dominent largement les
            transactions quotidiennes. En Europe, les paiements sans contact
            progressent rapidement. Cette évolution conduit les banques
            centrales à développer leurs propres monnaies numériques afin de
            conserver leur rôle central dans le système monétaire. C’est dans ce
            cadre que s’inscrivent les projets de CBDC.
          </p>
        </div>
      </section>

      {/* II. PROMESSES (UTOPIE) */}
      <section id="promesses" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">
            II. Les promesses d’une société sans espèces : une vision utopique
          </h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            Les défenseurs de la société sans espèces mettent en avant de
            nombreux avantages. Tout d’abord, les paiements numériques offrent
            une rapidité et une simplicité d’utilisation incomparables. Les
            transactions sont instantanées, disponibles à toute heure, et ne
            nécessitent plus de transport ni de gestion de monnaie physique.
          </p>
          <p>
            Ensuite, la disparition de l’argent liquide pourrait contribuer à
            réduire la fraude, la corruption et le blanchiment d’argent.
            Contrairement au cash, les transactions numériques peuvent être
            tracées. Les banques centrales et les autorités publiques disposent
            ainsi d’outils plus efficaces pour détecter les flux financiers
            illégaux. Les études menées sur les CBDC, notamment en Chine,
            montrent que ces technologies peuvent améliorer significativement la
            lutte contre la criminalité financière.
          </p>
          <p>
            Par ailleurs, les CBDC offrent une alternative publique et
            souveraine aux monnaies numériques privées développées par les
            grandes entreprises technologiques. Face à des projets comme Libra
            (Meta), les banques centrales cherchent à garantir une monnaie
            numérique stable, régulée et reconnue par l’État. Cela permettrait
            de préserver la souveraineté monétaire et d’éviter que le contrôle
            de la monnaie ne soit confié à des acteurs privés.
          </p>
          <p>
            Enfin, une société sans espèces pourrait favoriser l’inclusion
            financière, notamment dans les régions où l’accès aux banques
            traditionnelles est limité. Grâce aux téléphones mobiles, certaines
            populations peuvent accéder à des services financiers de base sans
            disposer d’un compte bancaire classique.
          </p>
        </div>
      </section>

      {/* III. RISQUES (DYSTOPIE) */}
      <section id="risques" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">
            III. Les risques et dérives possibles : une vision dystopique
          </h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            Cependant, cette transition soulève de nombreuses inquiétudes. Le
            principal risque concerne la surveillance des citoyens.
            Contrairement à l’argent liquide, les paiements numériques laissent
            des traces. Une généralisation des CBDC pourrait permettre aux États
            de suivre précisément les dépenses individuelles. Sans garanties
            solides, cela représenterait une atteinte majeure à la vie privée et
            aux libertés fondamentales.
          </p>
          <p>
            Un autre problème majeur est celui de l’exclusion numérique. Toutes
            les populations ne disposent pas des compétences, des équipements ou
            de l’accès à Internet nécessaires pour utiliser des moyens de
            paiement numériques. Les personnes âgées, les populations rurales ou
            précaires risquent d’être marginalisées dans une société entièrement
            dématérialisée.
          </p>
          <p>
            Sur le plan économique, la mise en place d’une CBDC peut également
            fragiliser le système bancaire. Si les citoyens placent directement
            leur argent auprès de la banque centrale, les banques commerciales
            pourraient perdre leur rôle d’intermédiaire, ce qui augmenterait le
            risque de crises financières, notamment en cas de retraits massifs
            et instantanés.
          </p>
          <p>
            Aussi, les systèmes numériques ne sont pas exempts de risques
            technologiques. Les cyberattaques, les pannes informatiques ou les
            failles de sécurité pourraient paralyser une économie entièrement
            dépendante du numérique. Les expériences menées dans certains pays
            montrent que la technologie seule ne suffit pas à garantir la
            stabilité et la confiance des citoyens.
          </p>
          <p>
            Enfin, la transition numérique pose un défi environnemental souvent
            sous-estimé. Si la fin des espèces supprime la pollution liée au
            transport de fonds et à la fabrication des pièces et billets, elle
            la remplace par une consommation énergétique croissante liée aux
            infrastructures numériques (data centers, réseaux). L'impact est
            particulièrement critique concernant certaines technologies de
            cryptomonnaies comme le Bitcoin, dont la "surconsommation
            d’électricité" est pointée du doigt.
          </p>

          {/* Visualizing the energy impact argument */}
          <div className="my-8 flex justify-center">
            <img src={arg} />
            {/* https://www.jbs.cam.ac.uk/2022/a-deep-dive-into-bitcoins-environmental-impact/ */}
          </div>
          <div style={{ marginLeft: 700 }}>
            <SourceLinks sources="Figure2" />
          </div>

          <p>
            Le déploiement massif de ces technologies énergivores, nécessaires
            au fonctionnement d'une société entièrement dématérialisée, pourrait
            entrer en contradiction avec les objectifs climatiques actuels.
          </p>
        </div>
      </section>

      {/* IV. CONTROVERSE */}
      <section id="controverse" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">
            IV. Une controverse au cœur des choix de société
          </h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            La controverse autour de la société sans espèces ne repose donc pas
            sur une opposition simple entre progrès et refus du changement. Elle
            reflète un dilemme plus profond entre efficacité économique et
            protection des libertés individuelles. Les CBDC et les paiements
            numériques offrent des opportunités réelles, mais ils exigent un
            encadrement juridique, technique et démocratique très strict.
          </p>
          <p>
            Les exemples internationaux montrent que la transition ne peut pas
            être uniforme. Certains pays avancent rapidement, tandis que
            d’autres choisissent la prudence. De nombreuses institutions, comme
            la Banque centrale européenne, rappellent d’ailleurs que l’argent
            liquide doit rester disponible comme solution de secours, notamment
            en période de crise.
          </p>
        </div>
      </section>

      {/* CONCLUSION */}
      <section id="conclusion" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">
            Conclusion : utopie ou dystopie ?
          </h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            La société sans espèces n’est ni totalement une utopie ni
            entièrement une dystopie. Elle représente avant tout un choix de
            société. Si elle est mise en œuvre de manière progressive, encadrée
            et respectueuse des libertés individuelles, elle peut améliorer
            l’efficacité économique et renforcer la sécurité des transactions.
            En revanche, une transition rapide et mal contrôlée pourrait
            entraîner une surveillance excessive, une exclusion sociale accrue
            et une fragilisation du système financier.
          </p>
          <p>
            Ainsi, la véritable question n’est pas de savoir si la société sans
            espèces va émerger, mais comment elle sera construite, par qui, et
            dans l’intérêt de quels acteurs. C’est sur ces choix politiques,
            économiques et éthiques que repose l’avenir de la monnaie dans nos
            sociétés.
          </p>
        </div>
      </section>
    </div>
  );
}

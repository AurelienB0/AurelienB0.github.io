export function ExpertPage() {
  return (
    <div className="space-y-20">
      <section id="interview" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Interview de l'expert</h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed">
          <div className="bg-indigo-600 rounded-lg p-6 border-l-4 border-indigo-800 shadow-md">
            <p className="italic text-white">Expert : Sergio FOCARDI</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p>
              Sergio Focardi est un expert reconnu dans le domaine des monnaies numériques et de la finance. Son analyse approfondie des CBDC nous a permis de mieux comprendre les enjeux techniques et sociétaux de cette technologie émergente.
            </p>
          </div>
        </div>
      </section>

      <section id="frise" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Frise chronologique</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-12 min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 shadow-sm">
            <p className="text-gray-600 text-center">
              Espace réservé pour la frise chronologique<br />
              (Images à insérer manuellement)
            </p>
          </div>
        </div>
      </section>

      <section id="acteurs" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Identification d'experts et acteurs</h2>
        </div>
        
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">Krach du bitcoin</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                <strong>2021 :</strong> -20% dogecoin, -19% ethereum, -22% definity, -8,5% bitcoin
              </p>
              <p>
                <strong>Elon Musk :</strong> « Une cryptomonnaie est une bonne idée à plusieurs niveaux et nous croyons en ce futur prometteur mais cela ne doit pas se faire avec un coût élevé pour l'environnement » (Donald Trump pro-bitcoin)
              </p>
              <p>
                <strong>La Chine lance yuan numérique :</strong> « les monnaies virtuelles ne devraient pas et ne peuvent pas être utilisées sur le marché parce qu'elles ne sont pas des monnaies réelles » → Interdiction des cryptos monnaies aux institutions financières.
              </p>
              <p>
                <strong>Éthique des crypto monnaies :</strong> associées à aucune autorité ou institution gouvernementale. Algorithme de suivi des transactions (Distributed ledger technology). Activités illégales → 46% des transactions bitcoin entre 2009 et 2017. Rançongiciels (ransomware) = 25 millions de $ entre 2015 et 2016.
              </p>
              <p>
                Consommation énergétique ~50 et 120 TWh par an (plus que Kazakhstan), notamment 300 000 fois plus que le système de paiement électronique Visa.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">L'identification, la quatrième fonction de la monnaie</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                La monnaie → étalon des valeurs, intermédiaire des échanges et réserve de valeur. Elle insère l'usager dans une communauté politique, sociale et éthique et l'y identifie. (Chez les grecs déjà)
              </p>
              <p>
                L'anonymat est relatif (au percepteur, banquier pour les billets...etc) (au commerçant pour la carte de paiement)
              </p>
              <p>
                L'état identifie les individus et, à notre époque, émet aussi la monnaie, tout cela encadré par la loi.
              </p>
              <p>
                On a du coup l'essor de monnaies virtuelles, soient avec leurs propres modalités d'identification, de réserve de valeur + étalon de valeur (échange monnaie virtuelle en réelle) soit avec les cryptomonnaies avec blockchain (Distributed ledger technology) avec une autre modalité d'identification.
              </p>
              <p>
                Laisser la monnaie aux privées n'est pas toujours une bonne idée, même si la gestion de la monnaie par les États a aussi donnée des catastrophes, (hyperinflation Papiermark 1923) + identification par un privé non durable dans le temps et l'espace
              </p>
              <p>
                → D'où l'idée de CBDC (Europe, Asie), pour garder une identité définie
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">COVID-19 pandemic increases the divide between cash and cashless payment users in Europe</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                La covid-19 a été un facteur d'accélération de l'adoption des paiements sans espèces. Notamment en Suisse, Italy et France (malgré une baisse de conso) dues aux restrictions gouvernementales. 47,9% se sont tournées vers plus de cartes, 45,4% n'ont rien changé.
              </p>
              <p>
                47.9% → Facteurs extérieurs comme le développement de l'infrastructure/ couverture technologique des 12 mois précédents.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">Money laundering in a CBDC world: a game of cats and mice</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                En 2020, 70% des BC avaient des intentions de CBDC, 86% étaient dans une étape de développement et 60% en expérimentation/définition fonctionnelle et logique
              </p>
              <p>
                Une CBDC, c'est une monnaie virtuelle de détail/un jeton basé et émis par une Banque Centrale, qui garantit sa stabilité, sa légalité, réduit les coûts d'opérations, lutte à la criminalité...etc.
              </p>
              <p>
                À l'heure actuelle, on en sait peu sur leur capacités à lutter contre le blanchiment d'argent.
              </p>
              <p>
                Les classifications de la monnaie : technologie (comptes bancaires ou jetons), accessibilité (répandue ou restreinte), forme (virtuelle, réelle), contrôle/émetteur (banque centrale ou privé)
              </p>
              <p>
                Les monnaies numériques interbancaires, de détail et token de banques centrales sont les 3 considérées ici. + comptes auprès des banques centrales pour entités bancaires
              </p>
              <p>
                Les monnaies par token sont vulnérables à la falsification des jetons
              </p>
              <p>
                Avec une CBDC interbancaire → ne lutte pas contre la fraude. Cependant, avec des comptes auprès de la banque centrale et une monnaie de détail → exemple de la Chine, forte lutte contre la fraude.
              </p>
              <p>
                Toutes les transactions sont communiquées à la banque centrale populaire et pour les 6% en cash, carte de jetons
              </p>
              <p>
                Les MNBC peuvent diminuer le nombre de prêts des banques, donc ralentir en quelque sorte l'activité économique.
              </p>
              <p>
                Aussi, il y a la question de la surveillance (qui en réalité est déjà en place)
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">Society 5.0: A People-centric Super-smart Society</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Une option de société sans cash? Disparition de la monnaie. Les indicateurs ne sont plus en PIB/par hab mais en qualité de vie.
              </p>
              <p>
                Plus d'échanges de monnaie comme valeur étalon, partage des ressources → société post capitaliste
              </p>
              <p>
                La propriété individuelle ne serait pas le marqueur de développement le plus important
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

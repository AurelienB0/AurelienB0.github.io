export function ResumePage() {
  return (
    <div className="space-y-20">
      <section id="summary" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Résumé pour L'AMUE</h2>
        </div>
        
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">PARTIE 1 : Frise Chronologique (Dates clés)</h3>
            <div className="space-y-3 text-foreground/80">
              <p><strong>Début des années 1990 :</strong> Début de la baisse tendancielle de l'argent liquide en pourcentage du PIB en Suède.</p>
              <p><strong>Post-2008 :</strong> Apparition des cryptomonnaies privées (Bitcoin) en réponse à la crise financière.</p>
              <p><strong>2016 :</strong> L'Inde retire des billets de haute valeur pour forcer la transition numérique et lutter contre la fraude.</p>
              <p><strong>Juin 2018 :</strong> Panne massive du système Visa en Europe ; seul l'argent liquide fonctionnait, soulignant la fragilité technologique.</p>
              <p><strong>2020 :</strong> Objectif fixé par la Banque centrale de Corée du Sud pour éliminer les pièces de monnaie.</p>
              <p><strong>2030 :</strong> Prédiction de la Riksbank (Suède) pour la disparition totale des billets de banque.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">PARTIE 2 : Acteurs et Positions</h3>
            <div className="space-y-4 text-foreground/80">
              <div>
                <h4 className="mb-2">Banques Centrales :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Riksbank (Suède) :</strong> Leader de la transition, envisage une société sans cash rapidement.</li>
                  <li><strong>BCE & Banque d'Autriche :</strong> Prudentes. La BCE supprime le billet de 500€ mais craint les pannes systèmes (blackout) et l'exclusion sociale.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-2">Gouvernements :</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Inde :</strong> Pousse activement pour le sans-cash (villes pilotes, démonétisation).</li>
                  <li><strong>Chine/Russie :</strong> Interdisent les cryptomonnaies privées pour garder le contrôle.</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2">Banques Commerciales :</h4>
                <p>Favorables à la fin du cash pour réduire les coûts (moins d'agences et de personnel).</p>
              </div>

              <div>
                <h4 className="mb-2">Citoyens :</h4>
                <p>Clivage générationnel. Les jeunes adoptent le numérique ; les personnes âgées et pauvres restent dépendantes du cash.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">PARTIE 3 : Arguments (Controverse)</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="mb-3 text-green-800">Arguments POUR (Vers l'efficacité)</h4>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li><strong>Sécurité et Légalité :</strong> Baisse des cambriolages, lutte efficace contre le blanchiment d'argent, la drogue et l'économie souterraine.</li>
                  <li><strong>Économie :</strong> Hausse des recettes fiscales (traçabilité) et réduction des coûts de gestion du cash pour les banques (transport, stockage).</li>
                  <li><strong>Commodité :</strong> Rapidité des transactions et développement du e-commerce.</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h4 className="mb-3 text-red-800">Arguments CONTRE (Risques et Dystopie)</h4>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li><strong>Exclusion Sociale :</strong> Marginalisation des personnes âgées, pauvres ou sans accès Internet (fracture numérique).</li>
                  <li><strong>Vie Privée :</strong> Perte d'anonymat, risque de profilage commercial et de surveillance de masse.</li>
                  <li><strong>Fragilité Technique :</strong> Risques majeurs en cas de panne d'électricité, bug informatique ou cyberattaque.</li>
                  <li><strong>Stabilité Financière :</strong> Risque de retrait massif des dépôts (bank run) instantané en cas de crise.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-foreground/80 italic">
                <strong>Note de synthèse :</strong> L'auteur conclut que les cryptomonnaies privées (Bitcoin) sont trop spéculatives pour remplacer le cash. L'avenir réside probablement dans les Monnaies Numériques de Banque Centrale (CBDC).
              </p>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">Analyse complémentaire : Cryptojacking</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="mb-2">Dates clés</h4>
                <div className="space-y-2 text-foreground/80">
                  <p><strong>2016 :</strong> Mention de sites de streaming utilisant le minage.</p>
                  <p><strong>Septembre 2017 :</strong> The Pirate Bay accusé d'utiliser un script de cryptojacking.</p>
                  <p><strong>Décembre 2017 :</strong> Rapport sur l'utilisation du cryptojacking par plusieurs sites de streaming vidéo.</p>
                  <p><strong>Janvier 2018 :</strong> Pic du phénomène "Coinhive" (logiciel de minage).</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                  <h4 className="mb-2 text-amber-800">Arguments POUR le Cryptojacking</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-foreground/80">
                    <li>Alternative à la publicité intrusive</li>
                    <li>Revenus passifs pour les créateurs de contenu</li>
                    <li>Consentement possible si l'utilisateur est informé</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                  <h4 className="mb-2 text-red-800">Arguments CONTRE (Risques)</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-foreground/80">
                    <li>Vol de ressources (CPU utilisé à l'insu de l'utilisateur)</li>
                    <li>Dégradation du matériel et surchauffe</li>
                    <li>Coût énergétique pour l'utilisateur</li>
                    <li>Manque de transparence (malware caché)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">Perspective philosophique : La société sans cash</h3>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                <strong>Date clé :</strong> Octobre 2016 - Publication de l'article dans Philosophie Magazine suite à la sortie du livre "The Curse of Cash" de Kenneth Rogoff.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-6 mt-4 border border-purple-200">
                <h4 className="mb-3 text-purple-800">Arguments philosophiques CONTRE</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Surveillance Totalitaire :</strong> La fin du cash signifie la traçabilité absolue. Société de surveillance où "Big Brother" (banques ou États) sait tout.</li>
                  <li><strong>Perte de Liberté :</strong> L'argent liquide permet une liberté inconditionnelle. Citation de Dostoïevski : "L'argent est la liberté frappée".</li>
                  <li><strong>Moralisation de l'achat :</strong> Risque que les banques ou l'État jugent ou bloquent certaines dépenses.</li>
                  <li><strong>Dématérialisation du lien :</strong> Transformation de l'échange en flux de données froides.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-4 text-indigo-700">Évolution historique des MNBC</h3>
            
            <div className="space-y-3 text-foreground/80">
              <p><strong>2009 :</strong> Création du Bitcoin par Satoshi Nakamoto.</p>
              <p><strong>2014 :</strong> La Banque d'Angleterre publie ses premiers rapports sur les MNBC.</p>
              <p><strong>2015 :</strong> Échec du "dinero electrónico" en Équateur.</p>
              <p><strong>2017 :</strong> La Riksbank (Suède) lance le projet "e-krona".</p>
              <p><strong>Février 2018 :</strong> Le Venezuela lance le "Petro", cryptomonnaie d'État adossée au pétrole.</p>
            </div>

            <div className="mt-6 p-5 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-foreground/80">
                <strong>Conclusion :</strong> Si la technologie est prête, le frein majeur est le risque de déstabiliser le système bancaire privé et la réticence des citoyens à perdre leur anonymat. La surveillance de masse et la destruction du modèle bancaire traditionnel restent les deux obstacles principaux à l'adoption généralisée des CBDC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

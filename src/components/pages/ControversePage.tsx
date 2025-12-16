export function ControversePage() {
  return (
    <div className="space-y-20">
      <section id="intro" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Introduction</h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            Aujourd'hui, l'émergence des monnaies numériques de banque centrale, ou Central Bank Digital Currency (CBDC), représente un enjeu sociétal et économique majeur. De nombreuses institutions financières, mais aussi des citoyens, s'interrogent sur les implications de ces nouveaux moyens de transaction. Cette proposition résoudrait des problèmes complexes, en permettant un contrôle plus strict des flux monétaire pour combattre efficacement le crime organisé et ses diverses formes de blanchiment d'argent, mais elle soulève des questions au sujet des impacts sur les libertés individuelles qu'une telle mesure pourrait engendrer. Cette technologie risquerait également de perturber la stabilité financière et la souveraineté monétaire du pays qui l'adopte. Avec un changement trop rapide ou mal encadré, les conséquences sur la confiance des citoyens et l'équilibre économique pourraient être négatives.
          </p>
          <p>
            Notre analyse portera sur les enjeux derrière la potentielle adoption d'une monnaie virtuelle, ainsi que les potentielles dérives qui pourraient suivre ce changement. Nous évoquerons également la technologie sous-jacente des CBDC et une chronologie des événements et découvertes importantes ayant façonné le débat. Enfin, nous présenterons ce que nous avons appris suite à un échange avec un expert du domaine : Sergio FOCARDI
          </p>
        </div>
      </section>

      <section id="explication" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Utilisation et enjeux</h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            La Central Bank Digital Currency (CBDC) peut être définie comme une forme électronique de monnaie de banque centrale. Contrairement aux cryptomonnaies, la CBDC est reconnue par l'Etat qui garantit sa valeur et est destinée à servir de substitut à la monnaie physique.
          </p>
          <p>
            Les cas d'utilisation envisagés sont multiples. Ils permettent, par exemple, aux autorités d'avoir un contrôle plus marqué des échanges monétaires et de disposer d'outils plus efficaces pour lutter contre le blanchiment d'argent, les détournement de fonds et la corruption. En effet, il est très facile aujourd'hui aux organisations criminelles et aux groupes terroristes de disposer de financements. Ces fonds proviennent majoritairement du crime organisé et sont blanchis grâce à l'existence de l'argent liquide, intraçable et permettant à des économies parallèles de se former. Selon les défenseurs des CBDC : le déploiement à grande échelle d'une telle technologie réduirait à grande échelle l'impact des groupes criminels.
          </p>
          <p>
            Ensuite, les CBDC permettent aux citoyens souhaitant acquérir une monnaie virtuelle de disposer d'une monnaie souveraine, assuré par l'État, plutôt que se tourner vers les initiatives privées telles que Libra, la cryptomonnaie de Meta. Ces projets portés par des géant du numérique gagnent en effet en popularité et l'apparition d'une CBDC représenterait une alternative plus transparente et sécurisée aux détenteurs de monnaie virtuelle.
          </p>
        </div>
      </section>

      <section id="technologie" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Technologie</h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            D'un point de vue technologique, la CBDC se doit de répondre à de nombreuses problématiques. Elle nécessite donc d'être une technologie transparente, assurant la sécurité des échanges, et peut être mise en œuvre par le biais d'une blockchain. L'objectif premier est pouvoir retracer chaque transaction pour garantir l'intégrité de la monnaie et la validité des échanges. Ces promesses reposent sur la cryptographie, un domaine des mathématiques permettant de masquer et sécuriser des informations, en garantissant que seuls les détenteurs de certaines clés puissent accéder aux messages.
          </p>
          <p>
            Ces derniers sont encryptés via des algorithmes de chiffrement (SHA-256) et sont transformés en une empreinte numérique unique de taille fixe (le hash). Même un changement infime dans la transaction produit un hash complètement différent. Le hash peut être lu uniquement si l'on peut prouver mathématiquement qu'on est le destinataire de la transaction par le biais d'une "clé privée" gardée secrète. Ce dispositif est très robuste et sécurisé tant la puissance de calcul nécessaire pour "brute force" (trouver une clé par hasard) est démentielle. Le registre des opérations est partagé par tout monde, garantissant ainsi l'intégrité du système.
          </p>
        </div>
      </section>

      <section id="limites" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Limites des CBDC</h2>
        </div>
        <div className="space-y-5 text-foreground/80 leading-relaxed p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p>
            Néanmoins, les qualités des CBDC sont également leur plus grand défaut. En effet, c'est la question de la traçabilité qui est au cœur des inquiétudes : l'utilisation du numérique permettrait de réduire les coûts opérationnels pour les institutions, mais pourrait être détournée par les gouvernements ou des groupes mal intentionnés à des fins de surveillance. L'adoption universelle d'une monnaie virtuelle utilisant une blockchain serait encore plus risquée, car le registre des transactions serait décentralisé et par conséquent, lisible par tous les utilisateurs et immuable pour les gouvernements.
          </p>
          <p>
            Il serait ainsi possible pour n'importe qui de retracer chaque transaction associée à certaine clé d'identification (clé publique), qui une fois liée à son/sa propriétaire, révélerait l'historique complet de ses dépenses de par la nature de la blockchain. Cette dernière empêcherait également la modification des registres, et donc le gel des fonds de compte provenant de criminels avérés. Or, le système actuel repose sur le contrôle des banques centrales, en injectant des liquidités dans l'économie pour faire baisser les taux d'intérêt en tant de crise par exemple.
          </p>
          <p>
            De plus, à chaque fois qu'un nouveau système est mis en place, de nouvelles failles de sécurité peuvent apparaître, ce qui remettrait en cause la stabilité financière qui est l'une des justifications principales de ce projet. Il est donc évident qu'afin de déployer une CBDC, les gouvernements se tourneraient vers un registre centralisé, ou utiliseraient une implémentation différente des cryptomonnaies actuelles pour garantir la mainmise sur les échanges.
          </p>
          <p>
            L'instauration d'une CBDC, si elle n'est pas protégée par des institutions indépendantes, pourrait alors engendrer une régression des libertés individuelles. Le cœur de la controverse réside dans le niveau de surveillance que cette technologie confère à l'État. Contrairement à l'argent liquide, le caractère numérique de la CBDC permettrait, techniquement, une surveillance sans limite.
          </p>
        </div>
      </section>
    </div>
  );
}
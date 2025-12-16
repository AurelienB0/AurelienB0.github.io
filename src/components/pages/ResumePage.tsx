import React from "react";
// Ajustez ce chemin vers l'emplacement réel de votre fichier PDF
import myPdf from "../../styles/AMUE.pdf";

export function ResumePage() {
  return (
    <div className="space-y-8">
      <section id="summary" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700 m-0 text-2xl font-bold">
            Résumé pour L'AMUE
          </h2>
        </div>

        {/* Conteneur du PDF */}
        <div 
        // className="w-full h-[85vh] bg-gray-100 rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        style={{width:'100%',height:1300}}
        >
          <object data={myPdf} type="application/pdf" className="w-full h-full">
            {/* Ce contenu ne s'affiche que si le navigateur n'arrive pas à lire le PDF (ex: certains mobiles) */}
            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
              <p>Votre navigateur ne peut pas afficher ce PDF directement.</p>
              <a
                href={myPdf}
                download
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Télécharger le PDF
              </a>
            </div>
          </object>
        </div>
      </section>
    </div>
  );
}

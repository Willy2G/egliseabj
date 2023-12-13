import { React } from "react";

const mediaEl = [
  {
    titre: "Cantiques",
    contenu: "Accueil",
    image: "Accueil",
  },
  {
    titre: "Vidéo",
    contenu: "Accueil",
    image: "Accueil",
  },
  {
    titre: "Prédications audio",
    contenu: "Accueil",
    image: "Accueil",
  },
  {
    titre: "Livres et brochures",
    contenu: "Accueil",
    image: "Accueil",
  },
];

const Media = () => {
  return (
    <div class="z-50 p-2 grid grid-flow-row gap-4 mx-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {mediaEl.map(({ titre, contenu, image }, key) => (
        <div
          key={key}
          class="bg-gradient-to-b from-white/60 to-white/30 text-[#1c0708] backdrop-blur-[.5em] border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-black/50  overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-black/75 hover:backdrop-blur-[1em] transition"
        >
          <div class="grid place-items-center text-center gap-1">
            <div class="col-span-4 p-4">
              <h2 class="font-bold text-2xl mb-4">{titre}</h2>
              <p class="text-sm text-[#1c0708]/60">
                Vitae ducimus harum earum ratione autem esse ea!
              </p>
              <a
                href="#"
                class="mt-6 py-3 px-2 inline-flex bg-brown-600 hover:bg-brown-900 transition-colors text-gray-200 font-bold rounded-full text-sm"
              >
                En savoir plus
              </a>
            </div>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Media;

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-background shadow-md">
      <div
        className="w-full h-40 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1629339941379-da30348cdba6?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-indigo-700/80 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="cbdc-title-size text-white drop-shadow-lg mb-4">
            Monnaies numériques de banque centrale : sécurité ou surveillance ?
          </h1>

          <h3 className="text-2xl text-indigo-200 font-light tracking-wide">
            Controverse du numérique
          </h3>
        </div>
      </div>
    </div>
  );
}

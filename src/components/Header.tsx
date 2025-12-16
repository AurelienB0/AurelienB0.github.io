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
        <div className="absolute inset-0 bg-indigo-700/80 flex items-center justify-center px-4 text-center" style={{flexDirection:"column"}}>
          <h1 style={{fontSize:35, fontWeight:'bold',color:'#fff'}}>
        La société sans espèces : sommes- nous en transition vers un monde où tout
paiement est numérique ?
          </h1>
          <h1 style={{fontSize:25,color:'#fff', alignSelf:"flex-start", paddingLeft:150}}>
        Controverse du numérique
          </h1>
        </div>
      </div>
    </div>
  );
}

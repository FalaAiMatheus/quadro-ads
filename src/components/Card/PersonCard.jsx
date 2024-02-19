function PersonCard({ name, photo, desc }) {
  return (
    <div className="card flex gap-3">
      <img className="object-contain" src={photo} alt="Foto de perfil" />
      <div className="flex flex-col">
        <span className="font-medium text-3xl">{name}</span>
        <p className="max-w-96 text-sm font-medium text-slate-700">{desc}</p>
      </div>
    </div>
  );
}

export default PersonCard;

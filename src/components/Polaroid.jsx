export default function Polaroid({ label, image, className = '' }) {
    return (
      <figure
        className={`w-36 bg-[#dcd8cf] p-2 pb-7 shadow-xl shadow-black/50 transition hover:scale-105 hover:rotate-0 ${className}`}
      >
        {image ? (
          <img src={image} alt={label} className="aspect-square w-full object-cover" />
        ) : (
          <div className="aspect-square bg-linear-to-br from-[#3a3228] to-[#1f2a30]" />
        )}
        <figcaption className="pt-1.5 text-center text-[11px] text-[#3a3a36]">
          {label}
        </figcaption>
      </figure>
    )
  }
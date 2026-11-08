// Chaque caractère = 1 pixel : '#' = rempli, '.' = vide
const BODY = [
    '.##........##.',
    '.###......###.',
    '.############.',
    '.############.',
    '.############.',
    '.############.',
    '.############.',
    '..##########..',
    '.############.',
    '.############.',
    '.############.',
    '.####....####.',
  ]
  
  const TAIL = [
    '..##',
    '...#',
    '...#',
    '...#',
    '...#',
    '...#',
    '..##',
    '###.',
  ]
  
  // Transforme la grille de texte en liste de coordonnées {x, y}
  const cells = (rows, x0 = 0, y0 = 0) =>
    rows.flatMap((row, y) =>
      [...row].flatMap((char, x) =>
        char === '#' ? [{ x: x + x0, y: y + y0 }] : []
      )
    )
  
  export default function PixelCat({ className = '' }) {
    return (
      <svg
        viewBox="0 0 17 12"
        role="img"
        aria-label="A pixel cat"
        shapeRendering="crispEdges"
        className={className}
      >
        <g className="fill-sage">
          {cells(BODY).map(({ x, y }) => (
            <rect key={`b-${x}-${y}`} x={x} y={y} width="1" height="1" />
          ))}
        </g>
  
        <g className="cat-tail fill-sage">
          {cells(TAIL, 13, 3).map(({ x, y }) => (
            <rect key={`t-${x}-${y}`} x={x} y={y} width="1" height="1" />
          ))}
        </g>
  
        <rect className="cat-eye fill-night" x="4" y="4" width="1" height="2" />
        <rect className="cat-eye fill-night" x="9" y="4" width="1" height="2" />
        <rect className="fill-ink" x="6" y="6" width="2" height="1" />
      </svg>
    )
  }
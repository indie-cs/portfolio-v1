
export default function PixelCat() {
  return (
    <div className="pixel-cat-container" aria-hidden="true">
      <svg
        className="pixel-cat"
        viewBox="0 0 180 125"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tail */}
        <g className="cat-tail">
          <path
            d="M112 102 H139 V96 H151 V84 H157 V53
               H151 V40 H145 V27 H139 V14 H133 V8
               H127 V14 H133 V27 H139 V40 H145 V53"
          />
        </g>

        {/* Body */}
        <g className="cat-body">
          <path
            d="M35 105 H23 V94 H29 V77 H35 V55
               H41 V38 H47 V44 H59 V55 H81
               V49 H87 V38 H93 V32 H99 V38
               H105 V49 H111 V56 H121 V50
               H139 V63 H145 V83 H139 V96
               H127 V105 H111 V111 H99
               V105 H81 V111 H59 V105 H47
               V111 H35 Z"
          />

          {/* Paws */}
          <path d="M47 99 H41 V105 H35 V111 H53 V105 H59" />
          <path d="M99 99 H105 V105 H111 V111 H93 V105 H87" />
          <path d="M123 99 H129 V105 H141 V111 H117 V105 H111" />

          {/* Whiskers */}
          <path d="M29 78 H21 M29 86 H23" />
          <path d="M145 78 H153 M145 86 H151" />
        </g>

        {/* Eyes */}
        <g className="cat-eyes">
          <rect x="50" y="76" width="5" height="5" />
          <rect x="86" y="76" width="5" height="5" />
        </g>

        {/* Nose and mouth */}
        <path
          className="cat-mouth"
          d="M68 88 H74 L77 92 L80 88 H85"
        />
      </svg>
    </div>
  );
}

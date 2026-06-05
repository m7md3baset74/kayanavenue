interface LogoSVGProps {
  className?: string;
  id?: string;
}

export default function LogoSVG({ className = "w-12 h-12", id = "logo" }: LogoSVGProps) {
  const gradId = `grad-${id}`;
  return (
    <svg
      viewBox="0 0 300 300"
      className="w-16 h-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8d5a12" />
          <stop offset="45%" stopColor="#d9aa47" />
          <stop offset="70%" stopColor="#f5df95" />
          <stop offset="100%" stopColor="#b87c23" />
        </linearGradient>
      </defs>

      {/* Tower 1 */}
      <path
        d="M40 250 L65 230 L65 120 L40 145 Z"
        fill="url(#gold)"
      />

      {/* Tower 2 */}
      <path
        d="M90 220 L115 205 L115 60 L90 85 Z"
        fill="url(#gold)"
      />

      {/* Center Tower */}
      <path
        d="M140 195 L168 180 L168 10 L140 35 Z"
        fill="url(#gold)"
      />

      {/* Tower 4 */}
      <path
        d="M190 205 L215 195 L215 85 L190 60 Z"
        fill="url(#gold)"
      />

      {/* Tower 5 */}
      <path
        d="M240 175 L262 170 L262 140 L240 120 Z"
        fill="url(#gold)"
      />

      {/* Main Arc */}
      <path
        d="
          M30 280
          C90 215 175 175 290 180
          C230 182 145 205 90 280
          Z
        "
        fill="url(#gold)"
      />

      {/* Small Arc */}
      <path
        d="
          M185 220
          C205 245 225 265 255 282
          C232 284 212 274 194 250
          C188 242 182 232 175 223
          Z
        "
        fill="url(#gold)"
      />
    </svg>
  );
}

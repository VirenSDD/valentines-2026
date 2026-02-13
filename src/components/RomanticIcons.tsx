import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export function RingIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18" cy="24" r="10" stroke="#c0c0c0" strokeWidth="2.5" fill="none" />
      <circle cx="30" cy="24" r="10" stroke="#d4d4d4" strokeWidth="2.5" fill="none" />
      <circle cx="18" cy="24" r="7" stroke="#a0a0a0" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="30" cy="24" r="7" stroke="#b0b0b0" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

export function BouquetIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Stems */}
      <path d="M24 28 L24 42" stroke="#5a7a4a" strokeWidth="2" />
      <path d="M20 30 L24 38" stroke="#5a7a4a" strokeWidth="1.5" />
      <path d="M28 30 L24 38" stroke="#5a7a4a" strokeWidth="1.5" />
      {/* Leaves */}
      <ellipse cx="18" cy="34" rx="4" ry="2" fill="#6a8a5a" transform="rotate(-30 18 34)" />
      <ellipse cx="30" cy="34" rx="4" ry="2" fill="#6a8a5a" transform="rotate(30 30 34)" />
      {/* Roses */}
      <circle cx="24" cy="16" r="6" fill="#c44060" />
      <circle cx="17" cy="20" r="5" fill="#d4506a" />
      <circle cx="31" cy="20" r="5" fill="#b43050" />
      <circle cx="20" cy="13" r="4" fill="#d4506a" />
      <circle cx="28" cy="13" r="4" fill="#c44060" />
      {/* Rose details */}
      <path d="M24 13 Q22 16 24 19 Q26 16 24 13" fill="#a03050" opacity="0.5" />
    </svg>
  );
}

export function HeartIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 42 C24 42 4 28 4 16 C4 8 10 4 16 4 C20 4 23 6 24 10 C25 6 28 4 32 4 C38 4 44 8 44 16 C44 28 24 42 24 42Z"
        fill="#c44060"
      />
      <path
        d="M16 10 Q12 10 10 14"
        stroke="#e8809a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function SparkleIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4 L27 18 L42 20 L27 22 L24 44 L21 22 L6 20 L21 18 Z"
        fill="#c9a84c"
        opacity="0.9"
      />
      <path
        d="M24 12 L25.5 18 L32 19 L25.5 20 L24 28 L22.5 20 L16 19 L22.5 18 Z"
        fill="#e8d48b"
        opacity="0.6"
      />
    </svg>
  );
}

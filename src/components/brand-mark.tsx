type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "brand__mark" }: BrandMarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        d="M10 55V31a22 22 0 0 1 44 0v24"
        fill="none"
        stroke="#f7c600"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M18 55V34a14 14 0 0 1 28 0v21" fill="#eaf6fb" />
      <path d="M18 55c3.5-8 9-12 14-12s10.5 4 14 12" fill="#2c7a4b" />
      <rect x="28" y="35" width="8" height="15" rx="1.5" fill="#0b6c92" />
      <path d="M18 55h28" stroke="#f7c600" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

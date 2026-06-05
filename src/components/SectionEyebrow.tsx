interface SectionEyebrowProps {
  label: string;
  center?: boolean;
}

export default function SectionEyebrow({ label, center = false }: SectionEyebrowProps) {
  return (
    <div className={`section-eyebrow mb-2 ${center ? "justify-center" : ""}`}>
      <span
        className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: "var(--gold)" }}
      />
      <span
        className="text-[11px] font-semibold tracking-[3px] uppercase"
        style={{ color: "var(--gold)" }}
      >
        {label}
      </span>
    </div>
  );
}

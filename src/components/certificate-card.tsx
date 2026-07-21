export default function CertificateCard() {
  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-neutral-800 overflow-hidden">
      <div className="bg-gradient-to-br from-neutral-900 to-black p-6 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center">
          <p className="text-white text-xs font-bold uppercase tracking-wider mb-1 font-code">Certificate</p>
          <p className="text-white text-lg font-bold font-code">OF COMPLETION</p>
          <div className="mt-3 w-20 h-0.5 bg-white/20 mx-auto" />
          <span className="text-white/50 text-xs font-semibold block mt-2 font-code">Kiwi Defence</span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <h3 className="font-bold text-white font-code">Certificate Summary</h3>
        <div className="space-y-3 text-sm">
          <SummaryRow icon="award" label="Certificate Name" value="Junior Radio Hacker" />
          <SummaryRow icon="flame" label="Level" value="Beginner" badge />
          <SummaryRow icon="clock" label="Duration" value="01:30:00" />
          <SummaryRow icon="book-open" label="Exam Type" value="100% Uygulama" />
          <SummaryRow icon="layers" label="Categories" value="" />
          <SummaryRow icon="circle-check" label="Total Tasks" value="6 tasks" />
          <SummaryRow icon="circle-question-mark" label="Total Questions" value="34 questions" />
        </div>
      </div>
    </div>
  )
}

function SummaryRow({ icon, label, value, badge }: { icon: string; label: string; value: string; badge?: boolean }) {
  const paths: Record<string, React.ReactNode> = {
    award: (
      <>
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </>
    ),
    flame: (
      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    "book-open": (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </>
    ),
    layers: (
      <>
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
      </>
    ),
    "circle-check": (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    "circle-question-mark": (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </>
    ),
  }

  return (
    <div className="flex items-start justify-between">
      <span className="text-neutral-500 flex items-center gap-2 font-code">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
          {paths[icon]}
        </svg>
        {label}
      </span>
      {badge ? (
        <span className="inline-flex items-center rounded-md font-semibold text-white bg-emerald-600 px-2.5 py-0.5 text-xs font-code">
          {value}
        </span>
      ) : (
        <span className="font-semibold text-neutral-200 text-right max-w-[180px] flex items-center gap-1.5 font-code">{value}</span>
      )}
    </div>
  )
}

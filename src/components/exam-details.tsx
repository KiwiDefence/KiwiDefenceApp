const examDetails = [
  { label: "Exam Type", value: "100% Uygulama", icon: "book-open" },
  { label: "Duration", value: "01:30:00", icon: "clock" },
  { label: "Level", value: "Beginner", icon: "chart-column", badge: true },
  { label: "Total Tasks", value: "6", icon: "circle-check" },
  { label: "Total Questions", value: "34", icon: "circle-question-mark" },
  { label: "Passing Score", value: "%70", icon: "trophy" },
]

function DetailIcon({ name, className = "w-3.5 h-3.5" }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    "book-open": (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    "chart-column": (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
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
    trophy: (
      <>
        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
      </>
    ),
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function ExamDetails() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {examDetails.map((detail) => (
        <div key={detail.label} className="bg-neutral-900 rounded-lg p-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1 font-code">
            <DetailIcon name={detail.icon} />
            {detail.label}
          </div>
          {detail.badge ? (
            <div className="mt-0.5">
              <span className="inline-flex items-center rounded-md font-semibold text-white bg-emerald-600 px-3 py-1 text-sm font-code">
                {detail.value}
              </span>
            </div>
          ) : (
            <p className="text-sm font-semibold text-neutral-200 font-code">{detail.value}</p>
          )}
        </div>
      ))}
    </div>
  )
}

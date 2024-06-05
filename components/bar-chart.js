"use client";

/**
 *
 * @param data {{label: string, value: number}[]}
 * @returns {JSX.Element}
 */
export default function BarChart({ data }) {
  data = data.sort((a, b) => b.value - a.value);
  const values = data.map((item) => item.value);
  if (!values.includes(0)) values.push(0);
  const maxValue = Math.max(...values);

  return (
    <div className="w-full h-full flex flex-col text-xs px-8 py-5">
      <div className="flex flex-row">
        <div className="flex flex-col space-y-8 text-black/50 dark:text-white/50 text-end w-10">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="relative">
              <p className="z-20 relative">{((maxValue / 5) * (5 - i)).toFixed(0)}</p>
              <span
                className="absolute w-10 bg-black/25 dark:bg-white/25 h-px z-10"
                style={{
                  top: `50%`,
                  transform: "translate(0.75rem, -50%)",
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row pl-6 w-full h-full items-end justify-between py-[7px]">
          {data.map(({ value, label }, index) => (
            <div
              key={index}
              className="w-10 bg-sky-400 flex flex-col items-center justify-end z-20"
              style={{ height: `${(value / maxValue) * 100}%` }}
            >
              <p className="-mb-5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
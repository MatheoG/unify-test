
export function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <div className="border rounded-xl px-3 py-2 border-gray-200 shadow-sm animate-pulse space-y-2">
      <div className="flex justify-between items-center mb-2">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-5"></div>
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-gray-200 rounded ${
            i % 2 === 0 ? "w-1/2" : "w-2/3"
          }`}
        ></div>
      ))}
    </div>
  );
}

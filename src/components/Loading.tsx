export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <svg
        fill="hsl(228, 97%, 42%)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24"
        aria-label="Loading"
      >
        <circle cx="4" cy="12" r="3">
          <animate
            id="spinner_qFRN"
            begin="0;spinner_OcgL.end+0.25s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="12" cy="12" r="3">
          <animate
            begin="spinner_qFRN.begin+0.1s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="20" cy="12" r="3">
          <animate
            id="spinner_OcgL"
            begin="spinner_qFRN.begin+0.2s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
      </svg>
      <p className="text-2xl">Loading...</p>
    </div>
  );
}

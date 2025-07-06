export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ background: "#f9fafb" }} // Base background color (gray-50)
    >
      <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <svg
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          style={{
            transform: "translate3d(0,0,0)",
            opacity: 0.5,
          }}
        >
          <defs>
            <radialGradient id="gradient-1">
              <stop stopColor="#c084fc" />
              <stop stopColor="#a855f7" offset="1" />
            </radialGradient>
            <radialGradient id="gradient-2">
              <stop stopColor="#7dd3fc" />
              <stop stopColor="#0ea5e9" offset="1" />
            </radialGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="url(#gradient-1)"
            transform="translate(200 200)"
            style={{ filter: "blur(100px)" }}
          />
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="url(#gradient-2)"
            transform="translate(-200 -200)"
            style={{ filter: "blur(100px)" }}
          />
        </svg>
      </div>
    </div>
  )
}

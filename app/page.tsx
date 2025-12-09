import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 px-6">
      <div className="w-full max-w-md bg-white/6 backdrop-blur-md border border-white/6 rounded-2xl p-8 text-center text-white shadow-lg">

        <div className="mx-auto w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 flex items-center justify-center text-slate-900 text-4xl font-extrabold shadow-[0_10px_30px_rgba(59,130,246,0.15)]">
          D+
        </div>

        <h1 className="mt-6 text-3xl font-extrabold">Digit-Math</h1>
        <p className="mt-2 text-slate-300">The smartest pocket calculator &amp; math learning app.</p>

        <div className="mt-4 text-xl tracking-wider text-slate-200 opacity-80">➗ ✖️ ➕ ➖</div>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href="https://digitmath.s3.ap-south-1.amazonaws.com/app-release.apk"
            download
            className="inline-flex items-center justify-center gap-3 w-full px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-semibold transition-transform active:translate-y-0.5"
            aria-label="Download APK"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.586l3.293-3.293 1.414 1.414L12 17.414l-4.707-4.707 1.414-1.414L11 13.586V3h1z" opacity=".9" />
              <path d="M5 20h14v1H5z" opacity=".6" />
            </svg>
            Download for Android
          </a>

          <a
            href="https://testflight.apple.com/join/MPuM6CGK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 border border-transparent text-white font-semibold"
          >
            🍎 Open in App Store
          </a>

          <small className="text-slate-300">iOS version installs via App Store link.</small>
        </div>

        <footer className="mt-6 text-slate-400 text-sm">rsion 1.0 • © 2025 Digit-Math Calculator</footer>
      </div>
    </main>
  );
}

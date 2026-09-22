function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200">
            <span className="text-lg font-bold text-white">
              A
            </span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              AttendEase
            </h1>

            <p className="text-xs text-slate-500">
              Smart attendance
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Gwen
            </p>

            <p className="text-xs text-slate-500">
              Computer Science
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
            G
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
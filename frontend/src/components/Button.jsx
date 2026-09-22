function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) {

  const baseStyles =
    "w-full rounded-2xl px-5 py-3.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 active:scale-[0.98]"

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl focus:ring-indigo-200",

    secondary:
      "bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-200",

    danger:
      "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-200",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
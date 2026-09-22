import { useState } from "react"
import Button from "./Button"

function AttendanceCard({classItem}) {

  const [attended, setAttended] = useState(false)

  const date = new Date()
  const showTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100">

      {/* Top accent */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500" />

      <div className="p-6 sm:p-7">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <span className="text-xl font-bold">
                CN
              </span>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Computer Science
              </p>

              <h4 className="mt-1 text-lg font-bold text-slate-900">
                {classItem.name}
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                {classItem.room}
              </p>
            </div>

          </div>

          {/* Status */}
          {classItem.status === "available" ? (
  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
    Available
  </span>
) : (
  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
    Upcoming
  </span>
)}

        </div>

        {/* Time */}
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-slate-50 p-4">

          <div>
            <p className="text-xs text-slate-500">
              Attendance TimeFrame
            </p>

            <p className="mt-1 font-semibold text-slate-800">
              {classItem.startTime}-{classItem.endTime}
            </p>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          <div>
            <p className="text-xs text-slate-500">
              Attendance window
            </p>

            <p className="mt-1 font-semibold text-indigo-600">
              45 minutes
            </p>
          </div>

        </div>

        {/* Information */}
        <div className="mt-5 flex gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">

          <div className="mt-0.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-sm text-cyan-700">
              i
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold text-cyan-900">
              Location verification required
            </p>

            <p className="mt-1 text-xs leading-5 text-cyan-700">
              Your device location will be checked before
              attendance is recorded.
            </p>
          </div>

        </div>

        {/* Action */}
        <div className="mt-6">

          {attended ? (

            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                ✓
              </div>

              <div>
                <p className="font-semibold text-emerald-800">
                  Attendance completed
                </p>

                <p className="text-xs text-emerald-600">
                  Recorded at {showTime}
                </p>
              </div>

            </div>

          ) : (

            <Button onClick={() => setAttended(true)}>
  Mark attendance
</Button>

          )}

        </div>

      </div>

    </div>
  )
}

export default AttendanceCard
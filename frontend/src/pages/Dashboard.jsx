import {useEffect, useState} from "react"

import AttendanceCard from "../components/AttendanceCard"
import { isAttendanceOpen } from "../utils/attendanceTime"

function Dashboard({ name }) {

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])


  const classes = [
    {
      id: 1,
      code: "CSC 421",
      name: "Computer Networks",
      room: "B204",
      lecturer: "Dr. Kamau",
      startTime: "10:00 AM",
      endTime: "10:45 AM",
      status: "available",
    },
    {
      id: 2,
      code: "CSC 423",
      name: "Database Systems",
      room: "Lab 2",
      lecturer: "Dr. Wanjiku",
      startTime: "12:00 PM",
      endTime: "12:45 PM",
      status: "available",
    },
    {
      id: 3,
      code: "CSC 425",
      name: "Artificial Intelligence",
      room: "A103",
      lecturer: "Dr. Otieno",
      startTime: "2:00 PM",
      endTime: "2:45 PM",
      status: "upcoming",
    },
  ]

  

  const availableClasses = classes.filter((classItem) =>
  isAttendanceOpen(
    classItem.startTime,
    classItem.endTime, 
    currentTime
  )
)

  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-50">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Student dashboard
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Good evening, {name}.
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Keep track of your classes and mark your attendance securely.
          </p>
        </section>

        <section className="mt-10">

          <div className="mb-5">
            <h3 className="text-xl font-bold text-slate-900">
              Today's classes
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Classes available for attendance will appear here.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {availableClasses.map((classItem) => (
              <AttendanceCard
                key={classItem.id}
                classItem={classItem}
              />
            ))}

          </div>

        </section>

      </div>
    </main>
  )
}

export default Dashboard
export function createTodayTime(timeString){
    const[time, period] = timeString.split(" ")

    let[hours, minutes] = time.split(":").map(Number)

    if(period === "PM" && hours !== 12){
        hours += 12
    }

    if(period === "AM" && hours === 12){
        hours = 0
    }

    const date  = new Date()

    date.setHours(hours)
    date.setMinutes(minutes)
    date.setSeconds(0)
    date.setMilliseconds(0)

    return date
}

export function isAttendanceOpen(startTime, endTime, currentTime) {
    const now = currentTime
    
    const classStart = createTodayTime(startTime)
    const classEnd = createTodayTime(endTime)
    
    const attendanceStart = new Date(classStart)
    attendanceStart.setMinutes(attendanceStart.getMinutes() - 45)
    
    return now >= attendanceStart && now <= classEnd
}

export function getAttendanceStatus(startTime, endTime) {
    const now = new Date()
    
    const classStart = createTodayTime(startTime)
    const classEnd = createTodayTime(endTime)
    
    const attendanceStart = new Date(classStart)
    
    attendanceStart.setMinutes(
        attendanceStart.getMinutes() - 45
    )      
    if (now < attendanceStart) {
        return "upcoming"
    }      
    if (now >= attendanceStart && now <= classEnd) {
        return "open"
    }      
    return "closed"
}
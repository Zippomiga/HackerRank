// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s = '12:01:00PM'

// Return '12:01:00'.
// s = '12:01:00AM'

// Return '00:01:00'


function timeConversion(s) {
    let M = s.substr(0, s.length -2)
    let hs = s.slice(0,2)

    if(s.endsWith('AM')) {
        return (hs == 12)? M.replace(hs, '00') : M
    }

    if(s.endsWith('PM')) {
        return (hs == 12)? M : M.replace(hs, Number(hs) + 12)
    }
}
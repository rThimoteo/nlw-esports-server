export function convertHoursToMinutes(hourString: String) {
    const [hours, minutes] = hourString.split(':').map(Number);

    const totalMinutes = (hours * 60) + minutes;

    return totalMinutes;
}
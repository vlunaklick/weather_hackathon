import { type WeatherResponse, type WeatherMapped } from '@/types/weather'

export const mapWeatherResponse = (data: WeatherResponse): WeatherMapped => {
  const { latitude, longitude, timezone_abbreviation, elevation } = data
  const { current_weather, daily } = data

  const currentWeather = {
    temperature: current_weather.temperature,
    windspeed: current_weather.windspeed,
    winddirection: current_weather.winddirection,
    weathercode: current_weather.weathercode,
    time: current_weather.time,
  }

  const forecast = daily.time.map((date, index) => ({
    time: date.toString(),
    apparent_temperature_max: daily.apparent_temperature_max[index],
    apparent_temperature_min: daily.apparent_temperature_min[index],
    weathercode: daily.weathercode[index],
  }))

  const precipitationProbability = data.daily.precipitation_probability_max[0]

  const userHour = new Date().getHours()

  const humidity = data.hourly.relativehumidity_2m[userHour]

  const feelsLike = data.hourly.apparent_temperature[userHour]

  return {
    latitude,
    longitude,
    timezoneAbbr: timezone_abbreviation,
    elevation,
    precipitationProbability,
    humidity,
    currentWeather,
    forecast,
    feelsLike,
  }
}

export const getWeekday = (dateString: string): string => {
  const date = new Date(dateString + ` ${getTimezoneOffset()}`)

  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

const getTimezoneOffset = () => {
  const date = new Date()
  const offsetMinutes = date.getTimezoneOffset()
  const offsetHours = Math.abs(offsetMinutes / 60)
  const offsetSign = offsetMinutes >= 0 ? '-' : '+'
  const offsetString = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:00`

  return `GMT ${offsetString}`
}

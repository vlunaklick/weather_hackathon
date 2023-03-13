export interface WeatherMapped {
  latitude: number
  longitude: number
  timezoneAbbr: string
  elevation: number
  precipitationProbability: number
  humidity: number
  feelsLike: number
  currentWeather: currentWeatherMapped
  forecast: Forecast[]
}

export interface Forecast {
  time: string
  apparent_temperature_max: number
  apparent_temperature_min: number
  weathercode: number
}

export interface currentWeatherMapped {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  time: string
}

export interface WeatherResponse {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
  hourly_units: HourlyUnits
  hourly: Hourly
  daily_units: DailyUnits
  daily: Daily
}

export interface CurrentWeather {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  time: string
}

export interface Daily {
  time: Date[]
  weathercode: number[]
  apparent_temperature_max: number[]
  apparent_temperature_min: number[]
  precipitation_probability_max: number[]
}

export interface DailyUnits {
  time: string
  weathercode: string
  apparent_temperature_max: string
  apparent_temperature_min: string
  precipitation_probability_max: string
}

export interface Hourly {
  time: string[]
  relativehumidity_2m: number[]
  apparent_temperature: number[]
}

export interface HourlyUnits {
  time: string
  relativehumidity_2m: string
  apparent_temperature: string
}

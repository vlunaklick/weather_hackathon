import { useEffect, useState } from 'react'

import { WeatherMapped } from '@/types/weather'
import mock from '@/mocks/withResponse.json'
import { mapWeatherResponse } from '@/utils'

import { type Coordinates } from '../types/location'

const weatherURLBuilder = (coordinates: Coordinates) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max&current_weather=true&hourly=relativehumidity_2m,apparent_temperature&timezone=auto`

type Props = {
  coordinates: Coordinates
}

export function useWeather({ coordinates }: Props) {
  const [data, setData] = useState<WeatherMapped>(mock)

  useEffect(() => {
    fetch(weatherURLBuilder(coordinates))
      .then(response => response.json())
      .then(data => {
        const mappedData = mapWeatherResponse(data)

        setData(mappedData)
      })
  }, [coordinates])

  return { data }
}

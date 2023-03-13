import { useEffect, useState } from 'react'

import { type Coordinates } from '../types/location'

const locationURL = (place: string) =>
  `https://nominatim.openstreetmap.org/search?q=${place}&format=json&limit=1`

export function useLocation() {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: -34.61315,
    longitude: -58.37723,
  })
  const [location, setLocation] = useState<String>('')

  useEffect(() => {
    if (!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      setCoordinates({ latitude, longitude })
    })

    fetch(locationURL(`${coordinates.latitude},${coordinates.longitude}`))
      .then(response => response.json())
      .then(data => setLocation(data[0].display_name))

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCityChange = (city: string) => {
    fetch(locationURL(city))
      .then(response => response.json())
      .then(data => {
        const { lat, lon } = data[0]

        setCoordinates({ latitude: lat, longitude: lon })
        setLocation(data[0].display_name)
      })
      .catch(error => console.log(error))
  }

  return { location, coordinates, handleCityChange }
}

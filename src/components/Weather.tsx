import { TbSearch } from 'react-icons/tb'

import { type WeatherMapped } from '@/types/weather'
import { weatherCodes } from '@/constants'

import Forecast from './Forecast'
import Hero from './Hero'

type Props = {
  data: WeatherMapped
  handleCityChange: (city: string) => void
  location: String
}

export default function Weather({ data, location, handleCityChange }: Props): React.ReactElement {
  const { currentWeather, forecast, humidity, feelsLike, precipitationProbability } = data
  const { weathercode } = currentWeather

  const weatherStatus = weatherCodes[weathercode as keyof typeof weatherCodes]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }

    const search = target.search.value

    handleCityChange(search)

    target.search.value = ''
  }

  return (
    <>
      <main className="mx-auto max-w-xl p-3 relative">
        <section>
          <Hero
            feelsLike={feelsLike}
            humidity={humidity}
            location={location}
            name={weatherStatus.name}
            precipitations={precipitationProbability}
            temperature={currentWeather.temperature}
            windspeed={currentWeather.windspeed}
          />
        </section>

        <section className="mt-4">
          <form
            className="flex flex-row items-center justify-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-2 rounded-l-md outline-none border border-slate-300 dark:border-slate-700 focus:border-slate-500 dark:focus:border-slate-600 bg-slate-50 dark:bg-slate-900"
              id="search"
              name="search"
              placeholder="Search for a city"
              type="text"
            />
            <button
              className="p-2 rounded-r-md border-l-0 border border-slate-300 dark:border-slate-700 focus:outline-none  bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              type="submit"
            >
              <TbSearch className="w-6 h-6" />
            </button>
          </form>
        </section>

        <section className="flex flex-col justify-center mt-4 gap-2 flex-wrap w-full">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Forecast</h2>

          <div className="flex flex-col items-center justify-center gap-2 flex-wrap w-full">
            <Forecast today item={forecast[0]} />

            {forecast.slice(1, 7).map((item, index) => (
              <Forecast key={index} item={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

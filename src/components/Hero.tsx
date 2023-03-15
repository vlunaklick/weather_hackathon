import { WiStrongWind, WiRaindrop, WiRaindrops } from 'react-icons/wi'

import Status from './Status'

type Props = {
  name: string
  temperature: number
  windspeed: number
  humidity: number
  precipitations: number
  location: String
  feelsLike: number
}

export default function Hero({
  name,
  temperature,
  windspeed,
  humidity,
  precipitations,
  location,
  feelsLike,
}: Props): React.ReactElement {
  return (
    <>
      <div className="flex flex-col h-full gap-2 p-4 rounded-lg w-full border border-slate-100 dark:border-slate-800 relative overflow-hidden">
        <h2 className="text-xs text-slate-600 dark:text-slate-400">{location}</h2>

        <h1 className="text-7xl font-bold text-slate-800 dark:text-slate-100 w-max">
          {temperature}

          <span className="opacity-30 font-thin">°</span>
        </h1>

        <h2 className="text-sm font-bold text-slate-600 dark:text-slate-400">
          Feels like {feelsLike}°
        </h2>

        <Status name={name} temperature={temperature} />

        <div className="flex flex-row items-center justify-between gap-2 mt-2">
          <div className="flex flex-row items-center justify-center gap-1">
            <WiStrongWind className="text-xl text-slate-800 dark:text-slate-400" />
            <span className="text-sm text-slate-600 dark:text-slate-100">{windspeed} km/h</span>
          </div>

          <div className="flex flex-row items-center justify-center gap-1">
            <WiRaindrop className="text-2xl text-slate-800 dark:text-slate-400" />
            <span className="text-sm text-slate-600 dark:text-slate-100">{humidity}%</span>
          </div>

          <div className="flex flex-row items-center justify-center gap-1">
            <WiRaindrops className="text-2xl text-slate-800 dark:text-slate-400" />
            <span className="text-sm text-slate-600 dark:text-slate-100">{precipitations}%</span>
          </div>
        </div>
      </div>
    </>
  )
}

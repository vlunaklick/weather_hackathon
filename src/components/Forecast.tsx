import { type Forecast } from '@/types/weather'
import { getWeekday } from '@/utils'
import { weatherCodes } from '@/constants'

type Props = {
  item: Forecast
  today?: boolean
}

export default function Forecast({ item, today = false }: Props): React.ReactElement {
  const weatherStatus = weatherCodes[item.weathercode as keyof typeof weatherCodes]

  const maxTemp = item.apparent_temperature_max.toString().split('.')[0]
  const minTemp = item.apparent_temperature_min.toString().split('.')[0]

  return (
    <>
      <div className="flex flex-row w-full items-center justify-between p-2 rounded-lg backdrop-blur-sm bg-opacity-10 border border-slate-100 dark:border-slate-800">
        <time className="text-slate-600 text-sm min-w-[80px] dark:text-slate-300" title={item.time}>
          {today ? 'Today' : getWeekday(item.time)}
        </time>
        <weatherStatus.Component className="text-xl" />

        <div className="flex flex-row items-center justify-end gap-2 text-sm min-w-[80px]">
          <strong className="font-medium text-slate-800 dark:text-slate-100">{maxTemp}°</strong>
          <span className="text-slate-500">{minTemp}°</span>
        </div>
      </div>
    </>
  )
}

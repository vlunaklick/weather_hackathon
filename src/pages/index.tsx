import Header from '@/components/Header'
import Weather from '@/components/Weather'
import { useLocation } from '@/hooks/useLocation'
import { useThemeDisplay } from '@/hooks/useThemeDisplay'
import { useWeather } from '@/hooks/useWeather'

export default function Home() {
  useThemeDisplay()
  const { location, coordinates, handleCityChange } = useLocation()
  const { data } = useWeather({ coordinates })

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="max-w-sm w-full h-full sm:max-h-[750px] dark:bg-slate-900 rounded-lg shadow-md overflow-auto bg-white border border-slate-100 dark:border-slate-700">
          <Header />

          <Weather data={data} handleCityChange={handleCityChange} location={location} />
        </div>
      </div>
    </>
  )
}

const CLIMATE_COLORS = {
  '1': 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200',
  '2': 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200',
  '3': 'bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200',
} as const

type Props = {
  name: string
  temperature: number
}

const getClimate = (temperature: number): keyof typeof CLIMATE_COLORS => {
  if (temperature < 20) {
    return '1'
  } else if (temperature < 30) {
    return '2'
  }

  return '3'
}

export default function Status({ name, temperature }: Props): React.ReactElement {
  return (
    <p
      className={`text-xs w-max font-bold rounded-full px-2 py-1 z-10 ${
        CLIMATE_COLORS[getClimate(temperature)]
      }`}
    >
      {name}
    </p>
  )
}

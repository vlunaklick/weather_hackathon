import {
  WiDaySunny,
  WiDayCloudy,
  WiDaySunnyOvercast,
  WiFog,
  WiDayRainMix,
  WiDayShowers,
  WiDaySleet,
  WiDaySnow,
  WiDayRain,
  WiSnow,
  WiShowers,
  WiDayStormShowers,
} from 'react-icons/wi'

export const weatherCodes = {
  0: {
    name: 'Clear sky',
    Component: WiDaySunny,
  },
  1: {
    name: 'Mainly clear',
    Component: WiDaySunny,
  },
  2: {
    name: 'Partly cloudy',
    Component: WiDayCloudy,
  },
  3: {
    name: 'Overcast',
    Component: WiDaySunnyOvercast,
  },
  45: {
    name: 'Fog',
    Component: WiFog,
  },
  48: {
    name: 'Rime fog',
    Component: WiFog,
  },
  51: {
    name: 'Drizzle',
    Component: WiDayRainMix,
  },
  53: {
    name: 'Drizzle',
    Component: WiDayShowers,
  },
  55: {
    name: 'Drizzle',
    Component: WiDaySleet,
  },
  56: {
    name: 'Freezing drizzle',
    Component: WiDaySnow,
  },
  57: {
    name: 'Freezing drizzle',
    Component: WiDaySnow,
  },
  61: {
    name: 'Rain',
    Component: WiDayRain,
  },
  63: {
    name: 'Rain',
    Component: WiDayRain,
  },
  65: {
    name: 'Rain',
    Component: WiDayRain,
  },
  66: {
    name: 'Freezing rain',
    Component: WiDayRain,
  },
  67: {
    name: 'Freezing rain',
    Component: WiDayRain,
  },
  71: {
    name: 'Snow',
    Component: WiSnow,
  },
  73: {
    name: 'Snow',
    Component: WiSnow,
  },
  75: {
    name: 'Snow',
    Component: WiSnow,
  },
  77: {
    name: 'Snow grains',
    Component: WiSnow,
  },
  80: {
    name: 'Rain showers',
    Component: WiShowers,
  },
  81: {
    name: 'Rain showers',
    Component: WiShowers,
  },
  82: {
    name: 'Rain showers',
    Component: WiShowers,
  },
  85: {
    name: 'Snow showers',
    Component: WiDaySnow,
  },
  86: {
    name: 'Snow showers',
    Component: WiDaySnow,
  },
  95: {
    name: 'Thunderstorm',
    Component: WiDayStormShowers,
  },
  96: {
    name: 'Thunderstorm',
    Component: WiDayStormShowers,
  },
  99: {
    name: 'Thunderstorm',
    Component: WiDayStormShowers,
  },
} as const

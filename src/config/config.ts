import { getEnvVar, stringToBoolean } from '~/helpers'

const settings = {
  api_id: Number(getEnvVar('API_ID')),
  api_hash: getEnvVar('API_HASH'),
  use_proxy: stringToBoolean(getEnvVar('USE_PROXY', 'false')),
  tap_mode: stringToBoolean(getEnvVar('TAP_MODE', 'true')),
  min_energy: 100,
  turbo_taps_count: 2500,
  max_upgrade_lvl: 20,
  taps_count_range: [50, 199],
  sleep_between_taps: [5, 8],
}

export const config = {
  settings,
  info: {
    origin: 'https://hamsterkombat.io',
    api: 'https://api.hamsterkombat.io/',
    name: 'Hamster Kombat',
    userName: 'hamster_kombat_bot',
  },
}

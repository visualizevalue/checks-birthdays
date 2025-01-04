export const ORIGINALS_DEPLOYMENT_BLOCK = 16615226
export const ORIGINALS_DEPLOYMENT_TIME = 1676235647
export const DAY = 24 * 60 * 60

export const getBlockTime = block => ORIGINALS_DEPLOYMENT_TIME + (block - ORIGINALS_DEPLOYMENT_BLOCK) * 12

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const daysInSeconds = days => days * 60 * 60 * 24

export const nowInSeconds = () => Math.floor(Date.now() / 1000)

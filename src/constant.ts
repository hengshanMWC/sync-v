import { Agent } from './command'

export const RELY_KEYS = [
  'bundleDependencies',
  'bundledDependencies',
  'optionalDependencies',
  'peerDependencies',
  'devDependencies',
  'dependencies',
]

// export const PACKAGES_PATH = ['packages/*', '.']
export const PACKAGES_PATH = ['packages/*']

/** console */
export const WARN_NOW_CHANGE = 'canceled: No new commit'
export const WARN_NOW_VERSION = 'canceled: The version has not changed'
export const WARN_NOW_RUN = 'There are no packages that need to run commands'

export const DEFAULT_AGENT = Agent.PNPM

import { readJSON, writeJSON } from 'fs-extra'
import colors from 'colors'
import type { IPackageJson } from '@ts-type/package-dts'
import { DEPENDENCY_PREFIX } from '../constant'
export async function getJSON (dir: string): Promise<IPackageJson> {
  try {
    return await readJSON(dir)
  }
  catch {
    return {}
  }
}
export async function getJSONs (dirs: string[]) {
  return Promise.all(dirs.map(dir => getJSON(dir)))
}
export interface WriteObject {
  filePath: string
  packageJson: IPackageJson
}
export async function writeFiles (writesObject: WriteObject[]) {
  return Promise.all(
    writesObject.map(writeObject => writeJSON(
      writeObject.filePath,
      writeObject.packageJson,
      { spaces: 2 },
    )),
  )
}
export function cdDir (dir?: string) {
  return dir ? `cd ${dir} && ` : ''
}
export function cmdOptions<T extends Object, U extends keyof T> (
  cmd: U,
  options: Partial<T>,
  defaultOptions: T,
): T {
  const defaultOption = defaultOptions[cmd]
  const option: any = options[cmd]

  if (typeof defaultOption === 'object') {
    const result: any = {
      [cmd]: {},
    }
    for (const key in defaultOption) {
      result[cmd][key] = option[key] !== true
        ? option[key]
        : defaultOption[key]
    }
    return result
  }
  else {
    return defaultOptions
  }
}
export function assign<T extends Object> (
  ...objects: Partial<T>[]
): T {
  return objects.reduce((previousValue: any, currentValue) => {
    for (const key in currentValue) {
      previousValue[key] =
        getAssign<T>(
          previousValue[key],
          currentValue[key as keyof T],
        )
    }
    return previousValue
  }, {}) as T
}
export function getAssign<T> (templateObject: any, object: any): T {
  if (typeof templateObject === 'object') {
    if (typeof object === 'object') {
      return assign(templateObject, object)
    }
    return templateObject
  }
  else {
    return object === undefined ? templateObject : object
  }
}
export function warn (text: string) {
  console.warn(`${colors.yellow.bold(text)}`)
}
export function isVersionStar (version: string) {
  return version.includes(DEPENDENCY_PREFIX)
}

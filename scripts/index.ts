import type { IPackageJson } from '@ts-type/package-dts'
import { getPackagesDir } from '@abmao/forb'
import { getPackagesJSON } from './utils'
import { cmdVersion, cmdPublish } from './cmd'
export class Context {
  packagesPath: string
  cmd: CMD
  cmdArgs: CMDArgs
  rootPackage!: IPackageJson
  dirs!: string[]
  filesPath!: string[]
  packagesJSON!: IPackageJson[]
  constructor (packagesPath: string, cmd: CMD, cmdArgs: CMDArgs) {
    this.packagesPath = packagesPath
    this.cmd = cmd
    this.cmdArgs = cmdArgs
    this.init()
  }

  async init () {
    await this.initData()
    this.cmdAnalysis()
  }

  async initData () {
    const [rootPackage] = await getPackagesJSON(['package.json'])
    this.rootPackage = rootPackage
    const { dirs, filesPath } = await getPackagesDir(this.packagesPath)
    this.dirs = dirs
    this.filesPath = filesPath
    this.packagesJSON = await getPackagesJSON(filesPath)
  }

  cmdAnalysis () {
    switch (this.cmd) {
      case 'version':
        cmdVersion(this)
        return
      case 'publish':
        cmdPublish(this)
    }
  }

  async forPack (callback: ForPackCallback) {
    for (let index = 0; index < this.packagesJSON.length; index++) {
      await callback(
        this.packagesJSON[index],
        index,
        this,
      )
    }
  }
}
export type CMD = 'version' | 'publish'
export interface CMDArgs {
  path: string
  cache: boolean
}
export type ForPackCallback = (
  packageJSON: IPackageJson,
  index: number,
  ctx: Context
) => Promise<any>

import * as localforage from 'localforage'
import { getConvertedNamespace } from '../_helpers/getConvertedNamespace'

export async function getConvertedImage(
  currentInstance: DataPattern,
): Promise<string|false> {
  try{
    const namespace = getConvertedNamespace(currentInstance.imageSrc)
    const somethingInLocal = await localforage.getItem(namespace)

    return somethingInLocal === null ?
      false :
      somethingInLocal as string
  }catch (err){
    throw err
  }
}

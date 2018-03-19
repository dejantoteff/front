import * as localforage from 'localforage'
import { convertToBase64 } from '../_helpers/convertToBase64'
import { getConvertedNamespace } from '../_helpers/getConvertedNamespace'
import { getConvertedImage } from '../_modules/getConvertedImage'

export async function setConvertedImage(
  currentInstance: DataPattern,
): Promise<void> {
  try {
    const namespace = getConvertedNamespace(currentInstance.imageSrc)
    const convertedImage = await getConvertedImage(currentInstance)

    if (convertedImage === false) {
      console.time('base64')
      const converted = await convertToBase64(currentInstance.imageSrc)
      console.log(' ---------------------')
      console.log(' ---------------------')
      console.timeEnd('base64')

      console.time('save')
      await localforage.setItem(
        namespace,
        converted,
      )
      console.timeEnd('save')
    }
  } catch (err) {
    throw err
  }
}

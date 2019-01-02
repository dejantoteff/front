import * as localforage from 'localforage'
import { convertToBase64 } from '../_helpers/convertToBase64'
import { getConvertedNamespace } from '../_helpers/getConvertedNamespace'
import { getConvertedImage } from '../_modules/getConvertedImage'

export async function setConvertedImage(
  currentInstance: DataPattern,
): Promise<void> {
  const namespace = getConvertedNamespace(currentInstance.imageSrc)
  const convertedImage = await getConvertedImage(currentInstance)

  if (convertedImage === false) {
    const converted = await convertToBase64(currentInstance.imageSrc)

    await localforage.setItem(
      namespace,
      converted,
    )
  }
}

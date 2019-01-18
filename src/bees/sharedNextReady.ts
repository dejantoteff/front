import { kebabCase } from "string-fn";
import { setter } from "client-helpers";

export const sharedNextReadyBee = ( currentInstance: any) => {
  const id = kebabCase(currentInstance.altTag)
  setter('id', id)
}
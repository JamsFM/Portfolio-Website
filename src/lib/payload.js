import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export async function getPayload() {
  return getPayloadHMR({ config: configPromise });
}

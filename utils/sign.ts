import { signTypedData, type SignTypedDataArgs } from '@wagmi/core'

export type Signature = {
  signer: string,
  signature: string,
  subjects: string[],
  action: string,
  object: string,
}

export const ACTION = 'sign'
export const OBJECT = 'https://birthday.checks.art'

export const TYPES = {
  URI: 'URI',
}

// FIXME: Extract into a library
export const notabilityCheck712Definition = (subject: string[], action: string, object: string): SignTypedDataArgs => {
  const name = 'Notability Check'
  const domain = {
    name,
    version: '1',
  }

  const types = {
    [name]: [
      { name: 'Subject', type: 'address[]' },
      { name: 'Action', type: 'string' },
      { name: 'Object', type: 'string' },
    ],
  }

  return {
    primaryType: name,
    message: {
      Subject: subject,
      Action: action,
      Object: object,
    },
    domain,
    types,
  }
}

export const signChecksBirthday = async (subject: string) =>
  await signTypedData(notabilityCheck712Definition([subject], ACTION, OBJECT))

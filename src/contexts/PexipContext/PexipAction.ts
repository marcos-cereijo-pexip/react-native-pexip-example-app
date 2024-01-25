export enum PexipActionType {
  Connect,
  Disconnect
}

export interface PexipAction {
  type: PexipActionType
  body?: any
}

export enum PexipActionType {
  Connect,
  RemoteStream,
  Disconnect
}

export interface PexipAction {
  type: PexipActionType
  body?: any
}

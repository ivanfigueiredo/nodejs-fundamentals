export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Invalild param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}

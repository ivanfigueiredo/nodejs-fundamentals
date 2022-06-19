/* eslint-disable no-useless-constructor */
import { EmailValidator, Controller, HttpRequest, HttpResponse, AddAccount } from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError, ok } from '../helpers/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'email', 'password', 'driver_license', 'username']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { email } = httpRequest.body
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = await this.addAccount.add(httpRequest.body)
      return ok(account)
    } catch (error) {
      return serverError()
    }
  }
}

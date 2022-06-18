import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/http-helper'
import { Controller } from '../protocols/controler'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'driver_license', 'admin']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}

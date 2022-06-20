import { EmailValidator } from '../../../presentation/protocols'
import validator from 'validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    console.log()
    return validator.isEmail(email)
  }
}

import { AccountModel } from '../../models/account'

export interface AddAccountParams {
    name: string
    email: string
    password: string
    driver_license: string
    admin: boolean
}

export interface AddAccount {
    add (account: AddAccountParams): Promise<AccountModel>
}

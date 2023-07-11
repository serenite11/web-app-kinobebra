export interface IRegisterUser {
  name: string,
  login: string,
  email: string,
  date?: Blob | string,
  image: string,
  password: string,
  agree?: boolean
}

export interface ILoginUser {
  login: string,
  password: string

}


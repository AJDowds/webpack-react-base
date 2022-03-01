export interface APIInterface {
  authUrl: string
  locationUrl: string
  socialUrl: string
}

const productionUrl: string = "http://localhost:3001"

export const baseApi: APIInterface = {
  get authUrl(): string {
    return `${productionUrl}/auth`
  },
  get locationUrl(): string {
    return `${productionUrl}/location`
  },
  get socialUrl(): string {
    return `${productionUrl}/social`
  },
}

export const apiHelper: object = {
  async toJson(response): Promise<any> {
    return response.json()
  },
}

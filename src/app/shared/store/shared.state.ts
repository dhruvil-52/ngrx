export interface SharedInterface {
    showLoading: boolean,
    errorMessage: string
}

export const intialState: SharedInterface = {
    showLoading: false,
    errorMessage: ''
}
export enum ButtonTypes {
    "button",
    "submit",
    "reset",
    null,
    undefined
}

export interface ValidationResponse {
    valid: Boolean,
    errorMessage?: String 
}
export interface ButtonStyles {
    color? : string
    label? : string
    use? : string
    bgcolor? : string
    width? : string

    onClick? : (e:any) => any
    type? : 'button' | "submit" | "reset"
}
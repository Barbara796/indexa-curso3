export interface Contacto {
    id: number,
    nombre: string,
    telefono: string,
    email: string,
    avatar: string |ArrayBuffer
    cumpleano?: string,
    redes?:string,
    observaciones?:string
}

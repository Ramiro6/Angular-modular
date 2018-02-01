export class Usuario {
    public nombre: string;
    public email: string;
    public password: string;
    public img?: string;
    public role?: string;
    public _id?: string;

    constructor( nombre: string,
                 email: string,
                 password: string,
                 img?: string,
                 role?: string,
                 _id?: string
    ) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.img = img;
        this.role = role;
        this._id = _id;
    }
}

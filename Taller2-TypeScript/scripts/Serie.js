export class Serie {
    id;
    nombre;
    canal;
    temporadas;
    descripcion;
    url;
    imagen;
    constructor(id, nombre, canal, temporadas, descripcion, url, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.url = url;
        this.imagen = imagen;
    }
};

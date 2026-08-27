let mascotas = [
    { id: 1, nombre: 'Fufy', especie: 'Perro', edad: 3, "adoptado": true },
    { id: 2, nombre: 'Félix', especie: 'Gato', edad: 2, "adoptado": false },
    { id: 3, nombre: 'Qwerty', especie: 'Pez', edad: 1, "adoptado": false }
];

const obtenerMascotas = (req, res) => {
    res.json(mascotas);
};

const obtenerMascotaPorId = (req, res) => {
    const  id  = parseInt(req.params.id);
    const mascota = mascotas.find((m) => m.id === id);
    if (!mascota) {
        return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }
    res.json(mascota);
};

const crearMascota = (req, res) => {
    const { nombre, especie, edad } = req.body;
    if (!nombre || !especie || !edad) {
        return res.status(400).json({ mensaje: 'Nombre, especie y edad son obligatorios' });
    }
    const nuevaMascota = {
        id: mascotas.length > 0 ? mascotas[mascotas.length - 1].id + 1 : 1,
        nombre,
        especie,
        edad,
        "adoptado": false
    };
    mascotas.push(nuevaMascota);
    res.status(201).json(nuevaMascota);
};

const actualizarMascota = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, especie, edad } = req.body;
    const Index = mascotas.findIndex((m) => m.id === id);
    if (Index === -1) {
        return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }
    if (!nombre || !especie || !edad) {
        return res.status(400).json({ mensaje: 'Nombre, especie y edad son obligatorios' });
    }
    mascotas[Index] = {
        ...mascotas[Index],
        nombre: nombre || mascotas[Index].nombre,
        especie: especie || mascotas[Index].especie,
        edad: edad || mascotas[Index].edad
    };
    res.json(mascotas[Index]);
};

const eliminarMascota = (req, res) => {
    const id = parseInt(req.params.id);
    const Index = mascotas.findIndex((m) => m.id === id);
    if (Index === -1) {
        return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }

    mascotas = mascotas.filter((m) => m.id !== id);
    res.json({ mensaje: 'Mascota eliminada correctamente' });
};

module.exports = {
    obtenerMascotas,
    obtenerMascotaPorId,
    crearMascota,
    actualizarMascota,
    eliminarMascota
};
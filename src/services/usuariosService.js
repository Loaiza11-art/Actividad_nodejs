const listarUsuarios = async () => {
    const usuarios=[
        {"nombre": "Jhonny", "cargo": "instructor"},
        {"nombre": "María", "cargo": "estudiante"}
    ]
    return usuarios;
}

module.exports = listarUsuarios
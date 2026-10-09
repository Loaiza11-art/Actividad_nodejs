const mostrarRutaUsuarios = (req, res) => {
    res.json({ message: "Estos son los usuarios" })
}

//ruta de registrarse
const registrarController = async (req, res) => {
    try{
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ message: "Error al comunicarse con la base de datos", error: error.message })
    }
}

//ruta de login
const loginController = async (req, res) => {
    res.json({ message: "Ruta para iniciar sesión" })
}

module.exports = {
    mostrarRutaUsuarios,
    registrarController,
    loginController
}
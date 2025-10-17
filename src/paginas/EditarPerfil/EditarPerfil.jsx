import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import AjaxLoader from "../../componentes/AjaxLoader/AjaxLoader";
import "./EditarPerfil.css";

function EditarPerfil() {
    const { user, loading } = useAuth();
    const [form, setForm] = useState({
        nombre: user?.nombre || "",
        nick: user?.nick || "",
    });
    const [fotoPreview, setFotoPreview] = useState(user?.foto_perfil || "");
    const [fotoFile, setFotoFile] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFotoFile(file);
            setFotoPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nombre", form.nombre);
        formData.append("nick", form.nick);

        if (fotoFile) {
            formData.append("foto_perfil", fotoFile);
        }

        formData.append("_method", "PUT");

        try {
            const response = await fetch(`http://alpalodevs.test/api/v1/usuarios/${user.id}`, {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                alert("Perfil actualizado correctamente");
                console.log("Usuario actualizado:", data.usuario);
            } else {
                alert(data.message || "Error al actualizar");
            }
        } catch (error) {
            console.error("Error en actualización:", error);
            alert("Error al conectar con el servidor");
        }
    };

    if (loading) return <AjaxLoader />;

    if (!user) return <p>No hay usuario autenticado.</p>;

    return (
        <div className="col-12">
            <form className="row editarPerfilForm" onSubmit={handleSubmit}>
                <div className="col-4 fotoPerfilContainer">
                    <label htmlFor="fotoPerfilInput" className="fotoPerfilLabel">
                        <img src={fotoPreview} alt="Foto de perfil" className="fotoPerfilUsuario" />
                        <div className="overlay">Cambiar foto</div>
                    </label>
                    <input type="file" id="fotoPerfilInput" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                </div>

                <div className="col-8 informacionEditarUsuario">
                    <div className="campoPerfil">
                        <label>Nick</label>
                        <input type="text" name="nick" value={form.nick} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="campoPerfil">
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="guardarCambiosPerfil">
                        <button type="submit" className="botonGuardarCambiosPerfil">Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditarPerfil;

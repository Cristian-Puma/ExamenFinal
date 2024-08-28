import React, { useState } from 'react';

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validarFormulario = () => {
        const nombreValido = /^[a-zA-Z]+$/.test(formData.nombre);
        const apellidoValido = /^[a-zA-Z]+$/.test(formData.apellido);
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo);
        const contraseñaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.contraseña);

        return nombreValido && apellidoValido && correoValido && contraseñaValida;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            alert('Formulario enviado correctamente');
        } else {
            alert('Por favor, complete los campos correctamente.');
        }
    };

    // Estilos en línea
    const formularioStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '0.8rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
    };

    const buttonStyle = {
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#178c17',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '',
        transform: 'scale(1.05)',
    };

    return (
        <form style={formularioStyle} onSubmit={handleSubmit}>
            <div style={{ width: '100%', marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#333' }}>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={{ width: '100%', marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#333' }}>Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={{ width: '100%', marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#333' }}>Correo:</label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <div style={{ width: '100%', marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#333' }}>Contraseña:</label>
                <input
                    type="password"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
            <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                onMouseDown={(e) => e.currentTarget.style.transform = buttonHoverStyle.transform}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                Enviar
            </button>
        </form>
    );
}

export default Formulario;

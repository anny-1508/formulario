import React, { useState } from "react";
import "./App.css"; 

const App: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    direccion: "",
    curso: ""
  });

  
  const [submittedData, setSubmittedData] = useState<Array<typeof formData>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmittedData((prevData) => [...prevData, formData]);


    setFormData({ name: "", email: "", direccion: "", curso: "" });
  };


  return (
   <div style={{
      backgroundColor: "pink",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      border: "2px solid #ccc",
      width: "500px",
      textAlign: "center",
      margin: "50px auto"
    }}>
      
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br /><br />

        <label>Correo:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br /><br />

        <label>Dirección:</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
        <br /><br />

        <label>Pregrado o Posgrado a Cursar:</label>
        <select name="curso" value={formData.curso} onChange={handleChange} required>
          <option value="" disabled>Seleccione una opción</option>
          <option value="Enfermería">Enfermería</option>
          <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
          <option value="Ingeniería Industrial">Ingeniería Industrial</option>
          <option value="TECNOLOGÍA EN ATENCIÓN PREHOSPITALARIA">TECNOLOGÍA EN ATENCIÓN PREHOSPITALARIA</option>
          <option value="LICENCIATURA EN ESPAÑOL E INGLÉS">LICENCIATURA EN ESPAÑOL E INGLÉS</option>
          <option value="Licenciatura en Educación Infantíl">Licenciatura en Educación Infantíl</option>
          <option value="Licenciatura en Educación Religiosa">Licenciatura en Educación Religiosa</option>
          <option value="Licenciatura en Música">Licenciatura en Música</option>
          <option value="TEC. EN ATENCIÓN PREHOSPITALARIA EXTENSIÓN BUCARAMANGA">TEC. EN ATENCIÓN PREHOSPITALARIA EXTENSIÓN BUCARAMANGA</option>
          <option value="TEOLOGÍA">TEOLOGÍA</option>
          <option value="CONTADURÍA PÚBLICA">CONTADURÍA PÚBLICA</option>
          <option value="ADMINISTRACIÓN DE EMPRESAS">ADMINISTRACIÓN DE EMPRESAS</option>
          <option value="MAESTRÍA EN EDUCACIÓN">MAESTRÍA EN EDUCACIÓN</option>
          <option value="MARKETING Y COMUNICACIÓN DIGITAL">MARKETING Y COMUNICACIÓN DIGITAL</option>
          <option value="MAESTRÍA EN ESTUDIOS RELIGIOSOS Y TEOLOGÍA">MAESTRÍA EN ESTUDIOS RELIGIOSOS Y TEOLOGÍA</option>
          <option value="ESPECIALIZACIÓN EN ALTA GERENCIA">ESPECIALIZACIÓN EN ALTA GERENCIA</option>
          <option value="MAESTRÍA EN ESTUDIOS RELIGIOSOS Y TEOLOGÍA VIRTUAL">MAESTRÍA EN ESTUDIOS RELIGIOSOS Y TEOLOGÍA VIRTUAL</option>
        </select>
        <br /><br />

        <button type="submit" className="submit-button">Enviar</button>
        </form>
      
   
      {submittedData.length > 0 && (
        <div className="table-container">
          <h2>Registros Enviados</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Dirección</th>
                <th>Curso</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.direccion}</td>
                  <td>{data.curso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
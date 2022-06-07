import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    apellidos: "",
    carrera: "",
    ciclo: "",
    seccion: "",
    image: "",
  });
  // verificar si el nombre es imagen y se tomara el archivo
  // de lo contrario se tomara el valor
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, 
      [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("apellidos", data.apellidos);
      formData.append("carrera", data.carrera);
      formData.append("ciclo", data.ciclo);
      formData.append("seccion", data.seccion);

      const res = await fetch(`http://localhost:5000/user`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", apellidos: "", carrera: "", ciclo: "", seccion: "",  image: "" });
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter lastnames"
          type="text"
          name="apellidos"
          value={data.apellidos}
          onChange={handleChange("apellidos")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter carrera"
          type="text"
          name="carrera"
          value={data.carrera}
          onChange={handleChange("carrera")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter ciclo"
          type="text"
          name="ciclo"
          value={data.ciclo}
          onChange={handleChange("ciclo")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter seccion"
          type="text"
          name="seccion"
          value={data.seccion}
          onChange={handleChange("seccion")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;

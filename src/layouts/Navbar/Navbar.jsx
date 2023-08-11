import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <Link to="/">
          <img
            className="navbar_logo"
            src="https://images.vexels.com/media/users/3/142890/isolated/preview/4ea2d7c4bf3cad23a4f18ee58752deb8-logotipo-de-anillos-de-alta-tecnologia.png"
            alt=""
          />
        </Link>
        <Form.Control
          className="navbar__form "
          type="text"
          placeholder="Buscar producto"
          size="lg" // Aquí estableces el tamaño (sm, md, lg)
          style={{ width: "70%" }}
        />

        <Button variant="outline-info">Login</Button>
      </div>
      <div className="nabvar__btn">
        <DropdownButton title="Electronicos" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1" as={Link} to="/Electronicos">
            PC Gamer
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">Camaras</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Salud" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">comun</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Deportes" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Comida" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Entretenimiento" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Comedia" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Gasparin</Dropdown.Item>
          <Dropdown.Item eventKey="2">Bob esponja</Dropdown.Item>
          <Dropdown.Item eventKey="2">patricio</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

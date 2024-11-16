import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({ right: false });
  const [searchTerm, setSearchTerm] = React.useState(""); // Para almacenar el texto del input
  const [results, setResults] = React.useState([]); // Para almacenar los resultados de la búsqueda

  // Función para abrir/cerrar el Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Simulación de llamada a servidor local
  const fetchResults = async (query) => {
    if (!query) {
      setResults([]); // Si no hay texto, limpia los resultados
      return;
    }

    // Aquí deberías hacer una llamada a tu servidor local, por ejemplo:
    // const response = await fetch(`http://localhost:3000/search?q=${query}`);
    // const data = await response.json();
    // setResults(data);

    // Simulación de resultados de búsqueda
    const simulatedResults = [
      "Resultado 1",
      "Resultado 2",
      "Resultado 3",
    ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));

    setResults(simulatedResults);
  };

  // Manejar el cambio en el input de búsqueda
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    fetchResults(query);
  };

  // Contenido del Drawer
  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Formulario de búsqueda */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          label="Buscar"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>
      <Divider />
      {/* Resultados de la búsqueda */}
      <List>
        {results.length > 0 ? (
          results.map((result, index) => (
            <ListItem key={index}>
              <ListItemText primary={result} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="Sin resultados" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button
          className="d-block d-lg-none w-25"
          onClick={toggleDrawer("right", true)}
        >
          <SearchIcon />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

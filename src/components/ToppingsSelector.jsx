
import CheckIcon from "@mui/icons-material/Check";

const ToppingsSelector = ({ categoria, currentOptions, toppings, handleToppings }) => {


  // Si la categoría no es Empanadas y hay toppings disponibles, renderizamos el selector
  if (categoria !== "Empanadas" && currentOptions.toppings.length > 0) {
    return (
      <div className="mb-4">
        <label className="form-label">Toppings</label>
        <div className="row row-cols-2 g-2">
          {currentOptions.toppings.map((topping) => (
            <div key={topping.name} className="col">
              <button
                className={`btn w-100 text-start ${
                  toppings.includes(topping.name)
                    ? "btn-success text-white"
                    : "btn-light"
                }`}
                onClick={() => handleToppings(topping.name)}
              >
                <span className="me-2">{topping.icon}</span>
                {topping.name}
                {toppings.includes(topping.name) && (
                  <CheckIcon className="ms-auto text-white" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Si no se cumplen las condiciones, no renderizamos nada
  return null;
};

export default ToppingsSelector;

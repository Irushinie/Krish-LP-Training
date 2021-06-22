import java.util.ArrayList;

/**
 * Originator
 */
public class PizzaBasket {
    ArrayList<Layer> layers = new ArrayList<>();

    public void addLayer(Layer layer) {
        layers.add(layer);
    }

    public ArrayList<Layer> getLayers() {
        return (ArrayList) layers.clone();

    }

    public PizzaMemento save() {
        return new PizzaMemento(getLayers());
    }

    public void revert(PizzaMemento pizzaMemento) {
        layers = pizzaMemento.getlLayers();
    }

    @Override
    public String toString() {
        return "PizzaBasket{" + "layers" + layers + '}';
    }

    static class PizzaMemento {
        ArrayList<Layer> layers;

        public PizzaMemento(ArrayList<Layer> layers) {
            this.layers = layers;
        }

        private ArrayList<Layer> getlLayers() {
            return layers;
        }

    }

}

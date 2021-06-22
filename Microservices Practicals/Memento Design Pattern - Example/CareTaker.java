import java.util.Stack;

public class CareTaker {

  Stack<PizzaBasket.PizzaMemento> history = new Stack<>();

  public void save(PizzaBasket pizzaBasket) {
    history.push(pizzaBasket.save());
  }

  public void revert(PizzaBasket pizzaBasket) {
    if (!history.isEmpty()) {
      pizzaBasket.revert(history.pop());
    } else {
      System.out.println("Cannot Undo");
    }
  }
}

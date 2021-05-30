/**
 * Application
 */
public class Application {

    public static void main(String[] args) {

        CareTaker careTaker = new CareTaker();
        PizzaBasket pizzaBasket = new PizzaBasket(); 

        pizzaBasket.addLayer(new Layer("Bell Pepper"));
        pizzaBasket.addLayer(new Layer("BBQ"));
        careTaker.save(pizzaBasket);
        System.out.println(pizzaBasket);

        pizzaBasket.addLayer(new Layer("Chicken Ham"));
        careTaker.save(pizzaBasket);
        System.out.println(pizzaBasket);

        pizzaBasket.addLayer(new Layer("Capsicum"));
        careTaker.save(pizzaBasket);
        System.out.println(pizzaBasket);

        pizzaBasket.addLayer(new Layer("Cheese"));
        careTaker.save(pizzaBasket);
        System.out.println(pizzaBasket);

        pizzaBasket.addLayer(new Layer("Prawns"));
       // careTaker.save(pizzaBasket);
        System.out.println(pizzaBasket);

        careTaker.revert(pizzaBasket);
        System.out.println(pizzaBasket);


        pizzaBasket.addLayer(new Layer("Tandoori Chicken"));
      //  careTaker.save(pizzaBasket);
        System.out.println(pizzaBasket);


        careTaker.revert(pizzaBasket);
     System.out.println(pizzaBasket);

        careTaker.revert(pizzaBasket);
        System.out.println(pizzaBasket);

        careTaker.revert(pizzaBasket);
        System.out.println(pizzaBasket);

        careTaker.revert(pizzaBasket);
        System.out.println(pizzaBasket);


    }
}

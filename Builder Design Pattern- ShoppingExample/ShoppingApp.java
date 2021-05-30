public class ShoppingApp {
    public static void main(String[] args) {

        ShoppingUser.Builder shoppingb = new ShoppingUser.Builder();

        ShoppingUser shoppingUser1 = shoppingb.firstName("Joey").lastName("Boomer").build();

        ShoppingUser shoppingUser2 = shoppingb.address("Kurunegala").firstName("Irushinie").lastName("Athapaththu").build();
      
        ShoppingUser shoppingUser3 = shoppingb.feedback("Have best quality materials").firstName("Din").lastName("Frans").address("Kurunegala").build();
        
        System.out.println(shoppingUser1);
        System.out.println(shoppingUser2);
        System.out.println(shoppingUser3);
    }

}

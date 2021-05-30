public class Application {

    public static void main(String[] args) {
        
        Golden golden = new Golden();
        AweOffers aweOffers = new AweOffers();
        DealDive dealDive = new DealDive();
        Marvell marvell = new Marvell();
        HappyDaisy happyDaisy= new HappyDaisy();
        Discount discount = new Discount();

        discount.setSuccessor(golden);
        golden.setSuccessor(aweOffers);
        aweOffers.setSuccessor(dealDive);
        dealDive.setSuccessor(marvell);
        marvell.setSuccessor(happyDaisy);
       


        Bill bill = new Bill(1, 100);
        System.out.println("Your discount value is Rs:"+ discount.applyDiscount(bill));
        System.out.println("Happy Shopping! Your Total Amount is: Rs:" +(100 - +(discount.applyDiscount(bill))));

        Bill bill2 = new Bill(2, 1000);
        System.out.println("Your discount value is Rs:"+ discount.applyDiscount(bill2));
        System.out.println("Happy Shopping! Your Total Amount is: Rs:" +(1000 - +(discount.applyDiscount(bill2))));

        Bill bill3 = new Bill(3, 2000);
        System.out.println("Your discount value is Rs:"+ discount.applyDiscount(bill3));
        System.out.println("Happy Shopping! Your Total Amount is: Rs:" +(2000 - +(discount.applyDiscount(bill3))));

        Bill bill4 = new Bill(4, 3000);
        System.out.println("Your discount value is Rs:"+ discount.applyDiscount(bill4));
        System.out.println("Happy Shopping! Your Total Amount is: Rs:" +(3000 - +(discount.applyDiscount(bill4))));

        Bill bill5 = new Bill(5, 10000);
        System.out.println("Your discount value is Rs:"+ discount.applyDiscount(bill5));
        System.out.println("Happy Shopping! Your Total Amount is: Rs:" +(10000 - +(discount.applyDiscount(bill5))));



       



    }
}

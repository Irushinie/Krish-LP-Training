public class HappyDaisy extends DiscountHandler {
    
    @Override
        public  double applyDiscount(Bill bill){
    
            bill.setDiscount(bill.getDiscount()+ bill.getTotalAmount()*0.05);
           
            return bill.getDiscount();
        }

}

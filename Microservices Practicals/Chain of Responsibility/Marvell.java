public class Marvell extends DiscountHandler {
    
    @Override
    public  double applyDiscount(Bill bill){

        bill.setDiscount(bill.getDiscount()+ bill.getTotalAmount()*0.05);
          

            if(bill.getTotalAmount()>2500.0 && bill.getTotalAmount()<=5000.0){
                return bill.getDiscount();
            }
            else{
                return successor.applyDiscount(bill);
            
        
    }
}
}

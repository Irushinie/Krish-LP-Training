public class Golden extends DiscountHandler {
    
    @Override
    public  double applyDiscount(Bill bill){

      bill.setDiscount(bill.getTotalAmount()*0.05);

      

        if(bill.getTotalAmount()<=500){
            return bill.getDiscount();
        }
        else{
            return successor.applyDiscount(bill);
        
    }
}
}

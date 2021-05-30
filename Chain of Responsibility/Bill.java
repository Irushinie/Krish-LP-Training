public class Bill {
    public int billNumber;

    private double totalAmount;
    private double discount;


    protected void setDiscount(double discount) {
        this.discount=discount;
    
    }

    public Bill(int billNumber, double totalAmount) {
        this.billNumber= billNumber;
        this.totalAmount = totalAmount;
    }

    public int getBillNumber(){
        return billNumber;
    }
    public double getTotalAmount(){
        return totalAmount;
    }
    public double getDiscount(){
        return discount;
    }

}
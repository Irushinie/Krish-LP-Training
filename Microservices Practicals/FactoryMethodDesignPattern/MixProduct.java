public class MixProduct extends Package{

    @Override
    protected void createPackage(){
        foods.add(new ChickenRice());
        foods.add(new EggRice());
        foods.add(new CrispyDish());
    }
}
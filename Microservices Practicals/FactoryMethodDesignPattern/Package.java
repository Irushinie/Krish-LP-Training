import java.util.ArrayList;


public abstract class Package{


    public ArrayList<Food> foods = new ArrayList<>();

    public Package(){

        createPackage();
    }

    protected abstract void createPackage();

    @Override
    public String toString(){
        return "Package is"+ foods;
    }
}
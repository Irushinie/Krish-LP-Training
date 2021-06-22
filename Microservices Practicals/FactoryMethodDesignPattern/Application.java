

public class Application{

    public static void main(String[] args){

        Package aPackage = PackageFactory.createPackage(PackageCode.MixProduct);
        System.out.println(aPackage);
        Package aPackage1 = PackageFactory.createPackage(PackageCode.ChickenProduct);
        System.out.println(aPackage1);
        
    }
    
}
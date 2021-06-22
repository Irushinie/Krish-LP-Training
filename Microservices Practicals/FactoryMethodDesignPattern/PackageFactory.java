public class PackageFactory{
    public static Package createPackage(PackageCode packageCode){

        switch(packageCode){

            case VegProduct:
                return new VegProduct();
            
            case ChickenProduct:
                return new ChickenProduct();
            
            case MixProduct:
                return new MixProduct();
            
            default:
                return null;


        }

    }
}
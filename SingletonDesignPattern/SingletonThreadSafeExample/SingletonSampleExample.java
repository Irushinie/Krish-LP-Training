public class SingletonSampleExample {


    private static SingletonSampleExample instance = null;
    
    //make the constructor private
    private SingletonSampleExample() {

    }
    
    
    public static  SingletonSampleExample getInstance () {


        if(instance == null) {

            synchronized(SingletonSampleExample.class){

            if(instance == null) {

             instance = new SingletonSampleExample();
              }

            }
        }
        return instance;
    }

}
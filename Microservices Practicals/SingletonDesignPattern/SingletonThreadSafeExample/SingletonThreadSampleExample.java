public class SingletonThreadSampleExample extends Thread{

    @Override
    
    
    public void run() {
        System.out.println(SingletonSampleExample.getInstance().hashCode()) ;
    }
    
    
    public static void main(String[] args) {
        
        
        for(int i = 0; i < 8; i++){
            
            new SingletonThreadSampleExample().start();
        }
        
    }
}

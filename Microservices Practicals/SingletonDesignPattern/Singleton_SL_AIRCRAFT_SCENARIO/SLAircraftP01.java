public class SLAircraftP01 {

    
    private static volatile SLAircraftP01 sl_aircraft_P01;

    
    private SLAircraftP01() {
    }

    public void fly() {
        System.out.println("Here we fly!!!!!!!");
    }

    
    public static SLAircraftP01 getInstance() {

      
        if (sl_aircraft_P01 == null) {

            synchronized (SLAircraftP01.class) {
                if (sl_aircraft_P01 == null) {
                    sl_aircraft_P01 = new SLAircraftP01();
                }
            }
        }

        return sl_aircraft_P01;
    }

}

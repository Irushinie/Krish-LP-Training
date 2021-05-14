import java.util.Scanner;
import java.util.*;

public class TomAssignment{

	public static void main (String[] args) {
		
		
			float inputvalue;
			float distance = 0;
			int rest_time = 0;
			int hop = 0;
			
			
			
		
			Scanner s = new Scanner(System.in);
			System.out.print("Please enter the distance: ");
			
			try
			{
				
			inputvalue = s.nextFloat();
			
			}catch(InputMismatchException e){
				
				System.out.println("Wrong format! Please Enter the distance in Numbers!");
				
				return;
				
			}
			
			
			while(distance<inputvalue)
			{
				
				 distance = distance+5;
				 
				 hop = (int)distance/3;
				 
				 
				
					if(distance>inputvalue) {
				
						break;	
					}
					else if(distance==inputvalue) {
				
						break;	
					}
					
				rest_time=rest_time+1;
				
				distance=distance+3;
				
				hop = (int)distance/3;
				
				
					if(distance>inputvalue) {
					
						break;	
					}
					else if(distance==inputvalue) {
				
						break;	
					}
					
				rest_time=rest_time+2;
				
				distance=distance+1;
				
				hop = (int)distance/3;
				
				
					if(distance>inputvalue) {
						break;	
					}
					else if(distance==inputvalue) {
				
						break;	
					}
					
				rest_time=rest_time+5;	
				
			}
			
			System.out.println("No of Hops : " + hop+ " and Rest Time  :" +rest_time);
			
		}
}
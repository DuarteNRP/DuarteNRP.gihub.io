class Test{
	public static void main(String args[]){
		for(int i=0;i<15;i++){
			for(int j=0;j<15;j++){
				String aux= "<div class=\"cell\"><input type=\"text\" class=\"textBox\" maxlength=\"1\" id=";
				String s1=Integer.toString(i);
				String s2=Integer.toString(j);
				System.out.println(aux+s1+"cell"+s2+"></div>");
			}
		}
	}
}
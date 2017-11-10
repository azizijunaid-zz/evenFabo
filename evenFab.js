function evenFab(){
  const MAX=4000000;
	var sum=0, a=1, b=1; 

	while(b < MAX){
		a+=b;
		b+=a;
		if((a%2==0) && (a<MAX))
			sum += a;
		else if((b%2==0) && (b<MAX))
			sum += b;
	}
	
	console.log(sum);
}


evenFab();
S = 'ta sdfat'
S = S.replace(' ', '')
obj = {}
odds = 0
for(i=0;i<S.length;i++) {
	if(obj[S[i]])
		obj[S[i]] = obj[S[i]] + 1
	else
		obj[S[i]] = 1

	if(obj[S[i]] % 2 == 1)
		odds++
	else
		odds--
}

if(S.length % 2 == 0 && odds == 0)
	console.log(true)
else if (S.length % 2 == 1 && odds == 1)
	console.log(true)
else
	console.log(false)
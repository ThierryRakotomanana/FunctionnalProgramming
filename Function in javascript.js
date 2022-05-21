
	function Clone(clone, Objet){
		for(let key in Objet){
			if(typeof key == 'object'){
				Clone(clone[key], key)
			} else{
				clone[key] = Objet[key]
			}
		}
	}

function marry(man, woman){
	woman.husband = man;
	man.wife = woman;

	return {
	father : man,
	mother : woman
	}
}

let family = marry({
	name : 'John'
}, {
	name : 'Ann'
})

function sibbling(boy, girl){
	boy.sister = girl;
	girl.brother = boy;

	return {
	uncle : boy,
	aunt : girl
	}
}

let kids = sibbling({
	name : 'Jon'
},{
	name : 'An'
})

/*
let's try to delete the object
*/


delete kids.uncle

console.log(kids)

/*
after that we can see the object change
kids become an object without the uncle property
*/


/*

une version plus amelirée du clonnage d'objet
j'ai remarque que dans le code ci-dessus qu'il
y a une erreur, en effet clone.key is undefined
because key is string, and we need to set the
value of clone[key] if we want to pass it to parameter


*/

	function Clone(clone , Objet){
		for(let key in Objet){
			if(typeof Objet[key] == 'object'){
				clone[key] = {}
				Clone(clone[key], Objet[key])
			} else{
				clone[key] = Objet[key]
			}
		}
		return clone
	}


	let Animal = {
		name : 'Animal',
		type : 'no type',
		walk : function(){
			return 'Yes i can walk'
		},
		First : {
		    name : 'heyhey',
		    another : 'Preperty',
		    and : 'Once again',
		    Objet : {
		        name : 'not empty object',
		        Deep : {
		            name : 'Ok it is over'
		        },
		    
		    salut : function(){
		        console.log('salut ${name}')
		    }
		}}
	}

	let cat = new Clone({}, Animal)
	console.log(cat.First.name == Animal.First.name)
	// equivaut a false
	/*
	To understand this we need to know what is object
	Object is not the same that variable primary
	object refer to memory
	*/
	First = {
	    name : 'heyhey',
	    another : 'Preperty',
	    and : 'Once again',
	    Objet : {
	        name : 'not empty object',
	        Deep : {
	            name : 'Ok it is over'
	        },
	    
	    salut : function(){
	        console.log('salut ${name}')
	    }
	}

/* 
Today we continue our sprint 
We optimize a code who show us
If number is prime Or Not

*/

function ShowPrime(numb){
	let div = 0;
	for(let i = 1; i < 5 ; i++){
		div = i == 1 ? 2 : (2*i - 1)
		if(! (IsDivBy(numb, div))) continue;
		console.log(numb)
	}
}
function IsDivBy(numb , div){
	if(numb % div == 0 ){
		return true
	}
	return false
}

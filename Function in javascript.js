
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

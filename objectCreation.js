//Object Class defination 1
var personClass1 = function(name, age) {
	this.name = name;
	this.age = age;
};
personClass1.prototype.toString = function() {
	console.log(this.name, this.age);
};

////////////////////Object creation 1//////////////////////////////
var personInst1 = new personClass1('John Doe', 40);
personInst1.toString();


//----------------------------------------------------------------
//Object Class defination 1_1
var personClass1_1 = function(name, age) {
	this.name = name;
	this.age = age;
	this.toString = function(){
		console.log(this.name, this.age);
	};
};
////////////////////Object creation 2//////////////////////////////
var personInst2 = Object.create(personClass1_1.prototype, {
	name: {
		writable: true,
		configurable: true,
		value: 'John Doe'
	},
	age: {
		writable: true,
		configurable: true,
		value: 40
	},
});
personInst2.toString();

//----------------------------------------------------------------
//Object Class defination 2
var personClass2 = {
	toString: function() {
		console.log(this.name, this.age);
	}
};
////////////////////Object creation 3//////////////////////////////
var personInst3 = Object.create(personClass2);
personInst3.name = 'John Doe';
personInst3.age = 40;
personInst3.toString();

//----------------------------------------------------------------
//Object Class defination 3
var personClass3 = (function() {
    alert(a); // Alerts undefined
    var prop1 = value1;
    alert(prop1); // alerts the value of value1
    return {
        prop2: value2;
    }
})();

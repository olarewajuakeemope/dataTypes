'use strict'

module.exports = {
 
 dataTypes: function(input_arg) {
   if(typeof input_arg==='string'){
	   return input_arg.length;
   }
 }
}
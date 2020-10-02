import {useState} from 'react';
function useCustomcounter(){
	const [count, setCount] = useState(0);
	const HandlClick= () => {
		setCount(count+1);
	} 
	return{
		count,
		HandlClick
	}
}

export default  useCustomcounter;
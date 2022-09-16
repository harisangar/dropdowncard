import Content from "./content";
const Button = ({text,vehicle,usercount,briefcount,buttonclicked}) => {
 

 const buttonclick=(val)=>{
  buttonclicked(val.text);
  
 }
 
  return (
    <button
    onClick={()=>{buttonclick({text});}}
      type="button"
      className="inline-block w-full py-2  px-2 border-2 border-[#ff6900] hover:border-white text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-[#ff6900] hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
 <Content text={text} vehicle={vehicle} usercount={usercount} briefcount={briefcount}/>
    </button>
  );
};
export default Button;

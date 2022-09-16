import Content from "./content";
const Button = ({text,vehicle,usercount,briefcount,buttonclicked}) => {
 

 const buttonclick=(val)=>{
  buttonclicked(val.text);
  
 }
 
  return (
    <div

    onClick={()=>{buttonclick({text});}}
      type="button"
      className="cursor-default rounded-lg  bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm h-12 sm:w-auto'"
    >
 <Content text={text} vehicle={vehicle} usercount={usercount} briefcount={briefcount}/>
    </div>
  );
};
export default Button;

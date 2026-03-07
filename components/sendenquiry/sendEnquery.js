import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

 export const sendEnquiry = async(formdata,loading,setloading)=>{
   try{ 

    const serviceId ="service_2v65p4v";
    const templateId ="template_fc3g2ao";
    const publicKey = "4htRk_PvI6uz4SdHV";
    setloading(true);
    const response = await emailjs.send(
        serviceId,
        templateId,
        formdata,
        publicKey
   );
   
    if(response.status='200'){
        setloading(false);
        toast.success("your enquiry is submited our time will connact you in 24 hours..")
    }
   }catch(error){
      setloading(false);
      console.log(error);
      toast.error(" error in sending email...");
   }
 }
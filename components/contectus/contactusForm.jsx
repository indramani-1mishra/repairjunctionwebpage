"use client";

import { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { sendEnquiry } from "../sendenquiry/sendEnquery";
import { toast } from "react-toastify";

export const dynamic = "force-static";
const formFields = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Phone", type: "tel", name: "phone" },
  { label: "Message", type: "textarea", name: "message" },
];

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Repair Junction for fast appliance repair services.",
};

const enquiryTypes = [
  "select enquiry type",
  "split ac repair",
  "window ac repair",
  "refrigerator repair",
  "washing machine repair",
  "installation",
  "maintenance",
  "gas refill",
  "other",
];

const Page = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    enquiryType: enquiryTypes[0],
    time:new Date().toLocaleString()
  });
   
  const [loading,setloading]= useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }
  

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {name,phone,enquiryType}=formdata;
    if(!name||!phone||!enquiryType){
      
      toast.warning("name or phone or enquiryType is required please fill this ");
      
    }else{
      await sendEnquiry(formdata,loading,setloading);
      setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
    enquiryType: enquiryTypes[0],
   
    })
    }
    }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg md:max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4"
    > 
      <h1 className="flex items-center justify-center capitalize text-center bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white p-3 rounded-lg">
        <span className="mr-2"><FiMail /></span>contact us
      </h1>
         
      {formFields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={formdata[field.name]}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full p-[10px] rounded-md border border-gray-300 shadow-sm 
focus:border-blue-500 focus:ring-1 focus:ring-blue-500
dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300
outline-none"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formdata[field.name]}
              onChange={handleChange}
            className="mt-1 block w-full p-[10px] rounded-md border border-gray-300 shadow-sm 
focus:border-blue-500 focus:ring-1 focus:ring-blue-500
dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300
outline-none"
            />
          )}
        </div>
      ))}

      {/* Enquiry Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Enquiry Type
        </label>

        <select
          name="enquiryType"
          value={formdata.enquiryType}
          onChange={handleChange}
          className=" mt-1 block w-full p-[10px] rounded-md border border-gray-300 shadow-sm 
focus:border-blue-500 focus:ring-1 focus:ring-blue-500
dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300
outline-none  capitalize"
        >
          {enquiryTypes.map((type) => (
            <option key={type} value={type} className="capitalize border-b border-gray-500 pb-2" >
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-md transition cursor-pointer flex items-center justify-center"
      >
        <span className="mr-2"><FiMessageCircle /></span>{
          loading? "sending....":"Send Enquiry"
        }
      </button>
      
    </form>
  );
};

export default Page;
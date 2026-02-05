// import React, { useState } from "react";
// ↑ React library import ki ja rahi hai aur useState hook use karne ke liye liya gaya hai

// import axios from "axios";
// ↑ axios import kiya gaya hai backend API ko call karne ke liye

// import "./Contact.css";
// ↑ Contact component ka CSS file import kiya gaya hai


// const Contact = () => {
// ↑ Contact naam ka functional component start ho raha hai


//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: ""
//   });
// ↑ useState ka use karke form ka data store kiya ja raha hai
// ↑ name, email, mobile aur message fields ke liye


//   const [loading, setLoading] = useState(false);
// ↑ loading state banayi gayi hai
// ↑ jab form submit ho raha ho tab button disable/show loading ke liye


//   const handleChange = (e) => {
// ↑ ye function input fields ke change ko handle karta hai

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
// ↑ purana data spread karke
// ↑ jis input me change hua uski value update ki ja rahi hai
//   };


//   const handleSubmit = async (e) => {
// ↑ ye function form submit hone par call hota hai

//     e.preventDefault();
// ↑ page reload hone se roka ja raha hai

//     setLoading(true);
// ↑ loading ko true kiya ja raha hai


//     try {
// ↑ try block start – agar API success hui

//       const res = await axios.post(
//         "http://localhost:5000/api/contact",
//         formData
//       );
// ↑ backend API ko form data bheja ja raha hai

//       alert(res.data.message);
// ↑ backend se aaya success message alert me dikhaya ja raha hai


//       setFormData({
//         name: "",
//         email: "",
//         mobile: "",
//         message: ""
//       });
// ↑ form submit hone ke baad saare input fields clear kar diye gaye


//     } catch (error) {
// ↑ agar koi error aata hai API call me

//       alert("Message failed ❌");
// ↑ error message user ko dikhaya ja raha hai


//     } finally {
// ↑ finally block – success ho ya error, dono case me chalega

//       setLoading(false);
// ↑ loading ko false kar diya gaya
//     }
//   };


//   return (
// ↑ component ka JSX return start


//     <section className="contact" id="contact">
// ↑ contact section start, CSS class aur id ke sath


//       <h2>Contact Us</h2>
// ↑ page ka heading


//       <form className="contact-form" onSubmit={handleSubmit}>
// ↑ contact form start
// ↑ submit hone par handleSubmit function call hoga


//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
// ↑ user ka naam lene ke liye input field


//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
// ↑ user ka email lene ke liye input field


//         <input
//           type="tel"
//           name="mobile"
//           placeholder="Your Mobile Number"
//           maxLength="10"
//           value={formData.mobile}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               mobile: e.target.value.replace(/[^0-9]/g, "")
//             })
//           }
//           required
//         />
// ↑ mobile number input
// ↑ sirf numbers allow kiye gaye hain (regex use karke)


//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
// ↑ user ka message likhne ke liye textarea


//         <button type="submit" className="btn" disabled={loading}>
//           {loading ? "Sending..." : "Send Message"}
//         </button>
// ↑ submit button
// ↑ loading true hone par button disable aur text change


//       </form>
// ↑ form end


//     </section>
// ↑ contact section end
//   );
// };

// export default Contact;
// ↑ Contact component ko export kiya gaya taaki dusri files me use ho sake

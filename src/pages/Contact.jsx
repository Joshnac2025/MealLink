import React, { useState } from "react";

export default function Contact() {

  const [showImprove, setShowImprove] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    "How can I donate food?",
    "How do orphanages register?",
    "Is MealLink free?",
    "Can I become a volunteer?"
  ];

  return (
    <div>

{/* Hero Section */}

<section
style={{
background:"linear-gradient(135deg,#eef9ee,#dff3df)",
padding:"90px 20px",
textAlign:"center"
}}
>

<div className="container">

<h1
style={{
fontSize:"3rem",
color:"var(--primary-dark)",
marginBottom:"20px"
}}
>
Contact & Support
</h1>

<p
style={{
maxWidth:"750px",
margin:"auto",
fontSize:"1.15rem",
color:"var(--text-secondary)",
lineHeight:"1.8"
}}
>
Have a question, need assistance, or want to share your ideas?
We're always here to help and improve MealLink together.
</p>

</div>

</section>



{/* Contact Information */}

<section className="container"
style={{padding:"60px 0"}}
>

<h2
style={{
textAlign:"center",
color:"var(--primary-dark)",
marginBottom:"40px"
}}
>
📞 Contact Information
</h2>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px"
}}
>


<div className="card" style={{textAlign:"center"}}>
<h2>📧</h2>
<h3>Email</h3>
<p>support@meallink.org</p>
</div>


<div className="card" style={{textAlign:"center"}}>
<h2>📞</h2>
<h3>Phone</h3>
<p>+91 XXXXX XXXXX</p>
</div>


<div className="card" style={{textAlign:"center"}}>
<h2>📍</h2>
<h3>Location</h3>
<p>Hyderabad, Telangana</p>
</div>


</div>

</section>





{/* Why Contact */}

<section
style={{
background:"#f8faf8",
padding:"60px 20px"
}}
>

<div className="container">

<h2
style={{
textAlign:"center",
color:"var(--primary-dark)",
marginBottom:"40px"
}}
>
🌱 Why Contact Us?
</h2>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"25px"
}}
>


{[
["🍱","Donation Support"],
["🙋","Volunteer Assistance"],
["🤝","Partnership Requests"],
["💬","General Queries"]
].map((item,index)=>(

<div className="card" key={index} style={{textAlign:"center"}}>
<h2>{item[0]}</h2>
<h3>{item[1]}</h3>
</div>

))}


</div>

</div>

</section>






{/* Choose Help */}

<section className="container"
style={{padding:"60px 0"}}
>

<h2
style={{
textAlign:"center",
color:"var(--primary-dark)",
marginBottom:"40px"
}}
>
🤝 Choose How We Can Help
</h2>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",
gap:"25px"
}}
>


{[
["🍱","Donation Support"],
["🏠","Orphanage Support"],
["🤝","Partnership"],
["💬","Feedback & Suggestions"]
].map((item,index)=>(

<div className="card" key={index} style={{textAlign:"center"}}>
<h2>{item[0]}</h2>
<h3>{item[1]}</h3>
<p>We are here to support you.</p>
</div>

))}


</div>

</section>






{/* Message Form */}

<section
style={{
background:"#f8faf8",
padding:"70px 20px"
}}
>

<div
style={{
maxWidth:"850px",
margin:"auto",
background:"#fff",
padding:"40px",
borderRadius:"16px",
boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
}}
>


<h2
style={{
textAlign:"center",
color:"var(--primary-dark)",
fontSize:"2.3rem"
}}
>
✉️ Send us a Message
</h2>


<p
style={{
textAlign:"center",
marginBottom:"35px",
color:"var(--text-secondary)"
}}
>
We'd love to hear from you. Fill out the form below and we'll get back to you.
</p>



<input className="contact-input" placeholder="Full Name"/>

<input className="contact-input" placeholder="Email Address"/>


<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px"
}}
>

<select className="contact-input">

<option>General Inquiry</option>
<option>Donation Support</option>
<option>Volunteer Support</option>
<option>Partnership</option>
<option>Report an Issue</option>
<option>Feature Request</option>
<option>Feedback</option>

</select>


<input className="contact-input" placeholder="Subject"/>


</div>



<textarea
className="contact-input"
style={{height:"220px"}}
placeholder="Tell us how we can help..."
/>



<button
style={{
display:"block",
margin:"25px auto 0",
background:"var(--primary-color)",
color:"#fff",
padding:"14px 40px",
border:"none",
borderRadius:"10px",
fontWeight:"600",
cursor:"pointer"
}}
>
Send Message
</button>


</div>

</section>






{/* Feedback */}

<section className="container"
style={{padding:"70px 20px",textAlign:"center"}}
>

<h2
style={{color:"var(--primary-dark)"}}
>
💚 Feedback & Suggestions
</h2>


<p
style={{
maxWidth:"700px",
margin:"20px auto",
color:"var(--text-secondary)"
}}
>
Help Us Improve MealLink.
Your ideas and feedback help us build a better platform for donors,
volunteers, and orphanages.
</p>


<h2>⭐⭐⭐⭐⭐</h2>


<textarea
className="contact-input"
style={{
maxWidth:"700px",
height:"150px"
}}
placeholder="Share your feedback..."
/>


<br/>


<button
style={{
marginTop:"20px",
padding:"12px 35px",
borderRadius:"8px",
border:"none",
background:"var(--primary-color)",
color:"#fff"
}}
>
Share Feedback
</button>


</section>






{/* FAQ */}

<section
style={{
background:"#f8faf8",
padding:"60px 20px"
}}
>

<div className="container">

<h2
style={{
textAlign:"center",
color:"var(--primary-dark)"
}}
>
❓ Frequently Asked Questions
</h2>


{faqs.map((faq,index)=>(

<div
key={index}
onClick={()=>setOpenFaq(openFaq===index?null:index)}
style={{
background:"#fff",
padding:"20px",
margin:"15px auto",
maxWidth:"800px",
borderRadius:"10px",
cursor:"pointer"
}}
>

<b>{faq}</b>

{
openFaq===index &&
<p style={{marginTop:"15px"}}>
Our team will guide you through the process and provide necessary support.
</p>
}

</div>

))}


</div>

</section>






{/* Follow */}

<section
style={{
padding:"50px",
textAlign:"center"
}}
>

<h2 style={{color:"var(--primary-dark)"}}>
🌍 Follow Us
</h2>

<p>
Instagram &nbsp; | &nbsp;
Facebook &nbsp; | &nbsp;
LinkedIn &nbsp; | &nbsp;
Twitter
</p>

</section>





{/* Helpful */}

<section
style={{
background:"#176b2c",
color:"#fff",
padding:"50px",
textAlign:"center"
}}
>

<h2>
🌟 Was this page helpful?
</h2>


<button
onClick={()=>setShowImprove(false)}
style={{margin:"10px",padding:"10px 25px"}}
>
👍 Yes
</button>


<button
onClick={()=>setShowImprove(true)}
style={{margin:"10px",padding:"10px 25px"}}
>
👎 No
</button>


{
showImprove &&
<div>

<p>How can we improve this page?</p>

<textarea
style={{
width:"300px",
height:"80px"
}}
/>

<br/>

<button>
Submit
</button>

</div>
}


</section>





{/* Ending */}

<section
style={{
padding:"50px 20px",
textAlign:"center"
}}
>

<h2 style={{color:"var(--primary-dark)"}}>
❤️ Every message, suggestion, and act of kindness helps us reduce food waste and bring hope to children in need.
</h2>


<p>
Thank you for supporting MealLink. 💚
</p>

</section>


</div>

  );
}
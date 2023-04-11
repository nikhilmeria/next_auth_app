import jobStyles from "../../styles/Job.module.css";

const Job = () => {
 return (
  <section className={jobStyles.header}>
   <div className={jobStyles.headerText}>
    <h1>What's Shoorvir ?</h1>
    <p>
     Shoorvir is a social service initiative for the Hindu community at large.
     We strive to provide unemployed youth with an opportunity to provide
     services to households as per their skillsets, as well as find suitable
     jobs for them. We even engage in the domain of connecting prospective
     employers with suitable candidates. Our services are totally FREE of
     charge.
    </p>
    <button className={jobStyles.button + " " + jobStyles.button1}>
     <a href="#">Read More</a>
    </button>
   </div>
  </section>
 );
};

export default Job;

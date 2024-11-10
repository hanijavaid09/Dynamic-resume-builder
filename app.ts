
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
    const resumeDetails = document.getElementById("resume-details") as HTMLDivElement;
    const resetButton = document.getElementById("reset-button") as HTMLButtonElement;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  

      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const education = (document.getElementById("education") as HTMLInputElement).value;
      const degree = (document.getElementById("degree") as HTMLSelectElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  
    
      const resumeContent = `
        <h3>${name}'s Resume</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education} (${degree})</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
        <p><strong>Skills:</strong></p>
        <p>${skills}</p>
      `;
  
      
      resumeDetails.innerHTML = resumeContent;
      resumeOutput.classList.remove("hidden");
      form.classList.add("hidden");
    });
  
    
    });

  
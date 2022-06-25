
const start = document.querySelector(".main");
const reset = document.querySelector(".reset");
const div = document.querySelector(".time div");


    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let setseconds = 0;

    
    const Start = () => {
        if(start.textContent === "Start"){
            start.textContent = "Pauza"
            
        } else {
            start.textContent = "Start"
            
        }
        

        const Stoper = () => {
            setseconds++;
            if(seconds === 0){
                div.textContent = `0.${setseconds}`; 
            } else if(minutes === 0){
                if(setseconds<10){
                    div.textContent = `${seconds}.0${setseconds}`;
                } else {
                    div.textContent = `${seconds}.${setseconds}`;
                }
            } else if(hours === 0){
                if(setseconds<10){
                    div.textContent = `${minutes}.${seconds}.0${setseconds}`;
                } else {
                    div.textContent = `${minutes}.${seconds}.${setseconds}`;
                }
            } else if(hours > 0){
                if(setseconds<10){
                    div.textContent = `${hours}.${minutes}.${seconds}.0${setseconds}`;
                } else {
                    div.textContent = `${hours}.${minutes}.${seconds}.${setseconds}`;
                }
                
            }
            
            if(setseconds === 100){
                seconds++;
                setseconds = 0
                if(seconds === 60){
                    minutes++;
                    seconds = 0
                    if(minutes === 60){
                        hours++;
                        minutes = 0;
                        
                    }
                }

            }
        }

        if(start.textContent === "Pauza"){
            Czas = setInterval(Stoper, 10)
        } else if(start.textContent === "Start"){
            clearInterval(Czas);
        }

        
    }
        
    const Reset = () => {
        div.textContent = '---'
        hours = 0;
        minutes = 0;
        seconds = 0;
        setseconds = 0;
    }

    
    

    


    start.addEventListener("click", Start)
    reset.addEventListener("click", Reset)
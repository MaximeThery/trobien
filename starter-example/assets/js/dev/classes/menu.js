/**
 Menu.js
 **/

import barba from "@barba/core";

class Menu {
    bouee;
    constructor() {
        this.init();
        barba.hooks.after((_) => {
            this.init();
        });
    }

    init() {
        this.initObserver();
        // do the magic here
    }

    initObserver() {
        const observer = new IntersectionObserver((entries) =>
            entries.forEach((entry)=>{
                const id = entry.target.id;
                if(entry.intersectionRatio > 0){
                    if (id == "bouee"){
                        console.log("elle est passé en viewport",id);
                        entry.target.classList.add("bouee-visible");
                    }
                }
                else {
                    if (id == "bouee"){
                        console.log("viewport est partie",id);
                        entry.target.classList.remove("bouee-visible");
                    }
                }
            })
        );
        document.querySelectorAll(".scroll-part").forEach((element) => {
            observer.observe(element);
        });
    }
}

export const menu = new Menu();

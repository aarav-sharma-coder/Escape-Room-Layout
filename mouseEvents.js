

AFRAME.registerComponent("cursor-events",{
    schema:{
        selectedItem:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents: function () {
        // Mouse Enter Events
        this.el.addEventListener("mouseenter", () => {
          const id = this.el.getAttribute("id");
          const list=["door","code_pad","table","locker","box","switch","barrel","Vending_machine","coin"];
          if (list.includes(id)) {
            const container = document.querySelector("#container");
            container.setAttribute("cursor-listener", {
              selectedItemId: id,
            });
          const text = document.getElementById(`text-${id}`);
          text.setAttribute("visible",true);
          }
        });
      },
      handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.getElementById(`text-${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == `text-${selectedItemId}`) {
              el.setAttribute("visible", false);
            }
          }
        });
      },
})
function Process(state){
    this.state = state
}

const Singalton = (function(){
    function ProcessManager() {
        this.numProcess = 0
    }

    let pManager

    function createProcessManager(){
        pManager = new ProcessManager;
        return pManager;
    }

    return {
        getProcessManager : () => {
          if(!pManager){
             pManager = createProcessManager(); 
          }
          return pManager  
        }
    }
})()

const processManager1 = Singalton.getProcessManager();
const processManager2 = Singalton.getProcessManager();

console.log(processManager1 === processManager2);
const Main = {

    tasks: [],

    init: function (){
        this.cacheSelectors()
        this.bindEvents()
        this.getStoreged()
        this.buildTasks()
    },

   cacheSelectors: function (){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$removeButtons = document.querySelectorAll('.remove')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
    },

    bindEvents: function (){
        this.$checkButtons.forEach( button => {
            button.onclick = this.Events.checkButton_click
        })

        this.$removeButtons.forEach( button => {
            button.onclick = this.Events.removeButton_click.bind(this)
        })

        this.$inputTask.onkeypress = this.Events.inputTask_keypress.bind(this)
    },

    getStoreged: function (){
        const tasks = localStorage.getItem('tasks')
        this.tasks = JSON.parse(tasks)
        if(this.tasks === null) {
            this.tasks = []
            localStorage.setItem('tasks','[]')
        }
    },

    getTaskHtml: function (task){
        return `
            <li>
                <div class="check"></div>
                <label for="" class="task">
                    ${task}
                </label>
                <button class="remove" data-task="${task}"></button>
            </li> 
        `
    },

    buildTasks: function (){
        let html = ''

        this.tasks.forEach(item=>{
            html += this.getTaskHtml(item.task)
        })

        this.$list.innerHTML = html
        this.cacheSelectors()
        this.bindEvents()
        
    },

    Events: {
        checkButton_click: function(e){   
          
            
            const $li = e.target.parentElement
            const isDone = $li.classList.contains('done')

            if(!isDone)
                return $li.classList.add('done')                
           
            $li.classList.remove('done')
        },

        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter'){
                this.$list.innerHTML += this.getTaskHtml(value)
                e.target.value = ''

                this.cacheSelectors()
                this.bindEvents()

                const savedTasks = localStorage.getItem('tasks')
                let savedTasksObj = JSON.parse(savedTasks)

                const obj = [
                    { task: value},
                    ...savedTasksObj,
                ]

                this.tasks = obj
                localStorage.setItem('tasks', JSON.stringify(obj))
            }
        },

        removeButton_click: function(e){
            const $li = e.target.parentElement
            const value = e.target.dataset['task']

            const newTasksStage = this.tasks.filter(item => item.task != value)

            localStorage.setItem('tasks',JSON.stringify(newTasksStage))
            this.tasks = newTasksStage


            $li.classList.add('removed')
            setTimeout(() => {
                $li.classList.add('hidden')
            }, 300); 
        
            
        
        }
    }    
}

Main.init()
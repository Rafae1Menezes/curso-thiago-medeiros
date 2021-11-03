const Main = {
    init: function () {
        this.cacheSelectors()
        this.bindEvents()
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
            button.onclick = this.Events.removeButton_click
        })

        this.$inputTask.onkeypress = this.Events.inputTask_keypress.bind(this)
    },

    Events: {
        checkButton_click: function(e) {   
          
            
            const $li = e.target.parentElement
            const isDone = $li.classList.contains('done')

            if(!isDone)
                return $li.classList.add('done')                
           
            $li.classList.remove('done')
        },

        inputTask_keypress: function(e) {
            const key = e.key
            const value = e.target.value

            if(key === 'Enter'){
                this.$list.innerHTML += `
                <li>
                    <div class="check"></div>
                    <label for="" class="task">
                        ${value}
                    </label>
                    <button class="remove"></button>
                </li> 
                `
                e.target.value = ''

                this.cacheSelectors()
                this.bindEvents()
            }
        },

        removeButton_click: function(e) {
            let $li = e.target.parentElement

            $li.classList.add('removed')
            setTimeout(() => {
                $li.classList.add('hidden')
            }, 300);
        }
    }    
}

Main.init()
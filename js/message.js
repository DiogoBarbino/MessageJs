const Message = class{
    install(){
        document.body.insertAdjacentHTML('afterbegin','<div class="message-box" id="message-box"></div>');
    }

    createMessage(msg,type='success'){
        let id = new Date().getTime();
        let div = document.createElement('div');
        div.setAttribute('id',"msg-"+id);
        div.setAttribute('class',"message "+type);
        let content = `<div class="msg-row">
                <span class="msg-text">${msg}</span>
                <button class="msg-btn-close" onclick="message.removeMessage(${id})">X</button>
                </div>
                <div class='msg-progress-bar'>
                <div class='msg-progress' id='msg-progress-${id}'>
                </div>
                </div>`;
        div.innerHTML = content;
        document.getElementById("message-box").append(div);
        setTimeout(() => {            
            document.getElementById("msg-progress-"+id).style.width="100%"; 
            setTimeout(() => {
                if(document.getElementById('msg-'+id)){
                    document.getElementById('msg-'+id).remove();
                }
            }, 3000);
        }, 500);
    }

    removeMessage(id){
        document.getElementById('msg-'+id).remove();
    }

    success(msg){
        this.createMessage(msg,'success');
    }

    error(msg){
        this.createMessage(msg,'error');
    }

    warning(msg){
        this.createMessage(msg,'warning');
    }
}

window.message = new Message()
message.install();
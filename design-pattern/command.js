const tv = {
  open() {
    console.log('打开电视机')
  },
  close() {
    console.log('关闭电视机')
  }
}

const computer = {
  open() {
    console.log('打开电脑')
  },
  close() {
    console.log('关闭电脑')
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  execute() {
    this.receiver.open()
  }
  undo() {
    this.receiver.close()
  }
}

function setCommand(command) {
  document.getElementById('execute').onclick = function () {
    command.execute()
  }
  document.getElementById('undo').onclick = function () {
    command.undo()
  }
}

setCommand(new Command(tv))
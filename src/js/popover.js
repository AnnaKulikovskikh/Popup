export default class Popover {
  init() {
    this.div = document.createElement('div');
    this.div.className = 'btn';
    this.div.textContent = 'Click me';
    document.body.appendChild(this.div);
    this.div.addEventListener('click', this.clicker);
  }

  clicker() {
    this.message = document.createElement('div');
    this.message.className = 'message';
    this.appendChild(this.message);
    const title = document.createElement('h3');
    const text = document.createElement('p');
    title.textContent = 'Header';
    text.textContent = 'Text';
    this.message.append(title);
    this.message.append(text);
    this.message.style.top = `${this.offsetTop - this.message.offsetHeight - 10}px`;
    this.message.style.left = `${this.offsetWidth + this.offsetLeft - this.message.offsetWidt / 2}px`;
  }
}

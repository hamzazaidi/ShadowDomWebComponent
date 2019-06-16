import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: "input-box",
  styleUrl: "input-box.css",
  shadow: true
})
export class InputBox {
  @Element() el: HTMLElement;
  inputBox: HTMLInputElement;
  @Prop() label: string = "";

  componentDidLoad() {
    this.inputBox = this.el.querySelector("input");
    this.inputBox.addEventListener("focus", () => this.checkInputState());
    this.inputBox.addEventListener("blur", () => this.checkInputState());
    this.checkInputState();
  }

  checkInputState() {
    const { value } = this.inputBox;
    const inputIsInUse =
      value !== "" || this.inputBox === document.activeElement;
    if (inputIsInUse) {
      this.el.classList.remove("input-is-empty");
    } else {
      this.el.classList.add("input-is-empty");
    }
  }

  render() {
    return (
      <div>
        <slot />
        <label>{this.label}</label>
      </div>
    );
  }
}

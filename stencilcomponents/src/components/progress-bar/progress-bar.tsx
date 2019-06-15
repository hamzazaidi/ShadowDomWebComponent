import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "progress-bar",
  styleUrl: "progress-bar.css",
  shadow: true
})
export class ProgressBar {
  @Prop() complete: number = 0;
  render() {
    return (
      <div class="progress-bar">
        <div class="progress-bar-inner" style={{ width: `${this.complete}%` }}>
          {this.complete}%
        </div>
      </div>
    );
  }
}

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit, OnChanges {
  private mousePosition: PIXI;
  private dragOffset;
  private isDown;
  private dialogBoxDiv;
  public left;
  public top;
  public overlapDialog;

  @Input() closable = true;
  @Input() visible: boolean;
  @Input() width = 25;
  @Input() height = 25;
  @Input() headerColor = "#34a0e7";
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.mousePosition = new PIXI();
    this.isDown = false;
    this.dragOffset = [0, 0];
  }

  ngOnInit() {
    this.left = 50 - this.width / 2;
    this.top = 50 - this.height / 2;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["visible"]) {
      nested.count = nested.count + 1;
      this.overlapDialog = nested.count;
    }
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  mousedown($event) {
    this.dialogBoxDiv = document.getElementById(
      "dialog-container" + this.overlapDialog
    );
    this.isDown = true;
    this.dragOffset = [
      this.dialogBoxDiv.offsetLeft - $event.clientX,
      this.dialogBoxDiv.offsetTop - $event.clientY
    ];
  }

  mouseup($event) {
    this.isDown = false;
  }

  mousemove($event) {
    $event.preventDefault();

    if (this.isDown) {
      this.mousePosition = {
        x: $event.clientX,
        y: $event.clientY
      };
      this.dialogBoxDiv.style.left =
        this.mousePosition.x + this.dragOffset[0] + "px";
      this.dialogBoxDiv.style.top =
        this.mousePosition.y + this.dragOffset[1] + "px";
    }
  }
}

class PIXI {
  x: number;
  y: number;
}

const nested = {
  count: 0
};
